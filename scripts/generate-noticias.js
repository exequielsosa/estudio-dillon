/**
 * Generación automática de noticias contables/impositivas/económicas
 * para Estudio Contable Dillon.
 *
 * Ejecutado por GitHub Actions 3 veces/semana (Lun, Mié, Vie).
 *
 * Flujo:
 * 1. Consume RSS feeds de medios argentinos de economía/negocios (rotación por día).
 * 2. Filtra con Groq AI las noticias relevantes para el público contable.
 * 3. Genera artículo SEO original en español adaptado al tono del estudio.
 * 4. POST al endpoint /api/noticias/create autenticado.
 */

import Parser from "rss-parser";
import Groq from "groq-sdk";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "..", ".env.local") });

const API_URL =
  process.env.NOTICIAS_API_URL ||
  "http://localhost:3000/api/noticias/create";
const API_KEY = process.env.NOTICIAS_API_KEY;
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const DRY_RUN = process.env.DRY_RUN === "true";

// ─── VALIDACIONES ─────────────────────────────────────────────────────────────

if (!API_KEY) {
  console.error("❌ ERROR: NOTICIAS_API_KEY no configurada");
  process.exit(1);
}
if (!GROQ_API_KEY) {
  console.error("❌ ERROR: GROQ_API_KEY no configurada");
  process.exit(1);
}

const groq = new Groq({ apiKey: GROQ_API_KEY });

// Cliente Supabase para detección de duplicados por título
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// ─── FEEDS RSS ARGENTINOS ─────────────────────────────────────────────────────

const ALL_FEEDS = {
  // Específicos contables/fiscales (alta prioridad)
  contadoresenred: "https://contadoresenred.com/feed/",
  contadoresenred_impuestos: "https://contadoresenred.com/impuestos/feed/",
  contadoresenred_monotributo: "https://contadoresenred.com/monotributo/feed/",
  contadoresenred_vencimientos: "https://contadoresenred.com/vencimientos/feed/",
  ambito_fiscales: "https://www.ambito.com/rss/pages/novedades-fiscales.xml",
  iprofesional_impuestos: "https://www.iprofesional.com/rss/impuestos",

  // Economía y finanzas
  iprofesional_economia: "https://www.iprofesional.com/rss/economia",
  iprofesional_finanzas: "https://www.iprofesional.com/rss/finanzas",
  ambito_economia: "https://www.ambito.com/rss/pages/economia.xml",
  ambito_finanzas: "https://www.ambito.com/rss/pages/finanzas.xml",
  eleconomista_economia: "https://eleconomista.com.ar/economia/feed/",
  eleconomista_finanzas: "https://eleconomista.com.ar/finanzas/feed/",

  // Google News (búsquedas dirigidas)
  gnews_arca_impuestos:
    "https://news.google.com/rss/search?q=ARCA+impuestos+Argentina&hl=es-419&gl=AR&ceid=AR:es-419",
  gnews_iva_ganancias:
    "https://news.google.com/rss/search?q=ARCA+IVA+Ganancias+Bienes+Personales+Argentina&hl=es-419&gl=AR&ceid=AR:es-419",
  gnews_arca_monotributo:
    "https://news.google.com/rss/search?q=ARCA+Monotributo+Argentina&hl=es-419&gl=AR&ceid=AR:es-419",
  gnews_arba: "https://news.google.com/rss/search?q=ARBA+Ingresos+Brutos+Buenos+Aires&hl=es-419&gl=AR&ceid=AR:es-419",
  gnews_agip: "https://news.google.com/rss/search?q=AGIP+Ingresos+Brutos+CABA&hl=es-419&gl=AR&ceid=AR:es-419",
  gnews_bcra: "https://news.google.com/rss/search?q=BCRA+Comunicaci%C3%B3n+A+Argentina&hl=es-419&gl=AR&ceid=AR:es-419",
};

// 6 feeds por día × 3 días = ~18 noticias/semana
const FEED_ROTATION = {
  1: [
    // Lunes - foco impuestos
    "contadoresenred_impuestos",
    "iprofesional_impuestos",
    "ambito_fiscales",
    "gnews_arca_impuestos",
    "gnews_iva_ganancias",
    "eleconomista_economia",
  ],
  3: [
    // Miércoles - monotributo + economía general
    "contadoresenred_monotributo",
    "contadoresenred",
    "iprofesional_economia",
    "ambito_economia",
    "gnews_arca_monotributo",
    "gnews_arba",
  ],
  5: [
    // Viernes - vencimientos + finanzas
    "contadoresenred_vencimientos",
    "iprofesional_finanzas",
    "ambito_finanzas",
    "eleconomista_finanzas",
    "gnews_agip",
    "gnews_bcra",
  ],
};

function getTodaysFeeds() {
  const today = new Date().getDay();
  let feedKeys = FEED_ROTATION[today];
  const forceRun = process.env.FORCE_RUN === "true";

  if (!feedKeys && !forceRun) {
    console.log(`📅 Hoy (día ${today}) no hay ejecución programada.`);
    console.log(`   Si querés forzar la ejecución, usá FORCE_RUN=true`);
    process.exit(0);
  }

  // Si hay FORCE_RUN y hoy no es día de rotación, usamos los feeds del lunes
  if (!feedKeys && forceRun) {
    console.log(`🔧 FORCE_RUN activo: usando feeds del lunes`);
    feedKeys = FEED_ROTATION[1];
  }

  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  console.log(`📅 Día: ${dayNames[today]}`);
  console.log(`🎯 Feeds: ${feedKeys.join(", ")}`);

  return feedKeys.map((key) => ({ key, url: ALL_FEEDS[key] }));
}

// ─── RSS PARSER ───────────────────────────────────────────────────────────────

const parser = new Parser({
  customFields: {
    item: [
      ["media:content", "mediaContent"],
      ["media:thumbnail", "mediaThumbnail"],
      ["content:encoded", "contentEncoded"],
    ],
  },
});

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function stripHtml(html) {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function extractContent(item) {
  return (
    item.contentEncoded ||
    item["content:encoded"] ||
    item.content ||
    item.description ||
    item.summary ||
    ""
  );
}

async function isValidImageUrl(url) {
  if (!url || typeof url !== "string") return false;
  if (!/^https?:\/\//i.test(url)) return false;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) return false;

    const contentType = (res.headers.get("content-type") || "").toLowerCase();
    if (!contentType.startsWith("image/")) return false;

    const contentLength = parseInt(
      res.headers.get("content-length") || "0",
      10
    );
    if (contentLength > 0 && contentLength < 5000) return false;

    return true;
  } catch {
    return false;
  }
}

function extractImageFromFeed(item) {
  if (item.mediaContent?.length) {
    const img = item.mediaContent.find((m) => m.$?.url);
    if (img) return img.$.url;
  }
  if (item.mediaThumbnail?.length) {
    const img = item.mediaThumbnail.find((m) => m.$?.url);
    if (img) return img.$.url;
  }
  if (item.enclosure?.url) return item.enclosure.url;

  const content = extractContent(item);
  const match = content.match(/<img[^>]+src=["']([^"'>]+)["']/i);
  return match?.[1] || null;
}

// Fetch HTML de la URL fuente y extrae og:image / twitter:image
async function extractOgImage(url) {
  if (!url || typeof url !== "string") return null;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; EstudioDillonBot/1.0; +https://www.estudio-dillon.com.ar)",
      },
    });
    clearTimeout(timeout);

    if (!res.ok) return null;

    const html = await res.text();
    // Buscar og:image primero, twitter:image como fallback
    const ogMatch = html.match(
      /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i
    );
    if (ogMatch?.[1]) return ogMatch[1];

    const twMatch = html.match(
      /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i
    );
    if (twMatch?.[1]) return twMatch[1];

    return null;
  } catch {
    return null;
  }
}

// Imagen fallback por categoría
const CATEGORIA_FALLBACK_IMAGES = {
  impuestos: "/categorias/impuestos.jpg",
  monotributo: "/categorias/monotributo.jpg",
  "sueldos-laboral": "/categorias/sueldos-laboral.jpg",
  pymes: "/categorias/pymes.jpg",
  economia: "/categorias/economia.jpg",
  vencimientos: "/categorias/vencimientos.jpg",
  actualidad: "/categorias/actualidad.jpg",
};

function getCategoriaFallback(categoria) {
  return (
    CATEGORIA_FALLBACK_IMAGES[categoria] ||
    CATEGORIA_FALLBACK_IMAGES.actualidad
  );
}

// Estrategia completa para conseguir imagen:
// 1) Imagen del feed RSS
// 2) Scraping og:image de la URL fuente
// 3) Fallback por categoría (siempre tiene)
async function resolveImage(item, sourceUrl, categoria) {
  // 1) Del feed
  const feedImage = extractImageFromFeed(item);
  if (feedImage && (await isValidImageUrl(feedImage))) {
    return { url: feedImage, source: "feed" };
  }

  // 2) Scraping og:image
  if (sourceUrl) {
    const ogImage = await extractOgImage(sourceUrl);
    if (ogImage && (await isValidImageUrl(ogImage))) {
      return { url: ogImage, source: "og:image" };
    }
  }

  // 3) Fallback por categoría
  return { url: getCategoriaFallback(categoria), source: "fallback" };
}

function generateSlug(title) {
  const timestamp = Date.now();
  const slug = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .substring(0, 60);
  return `${slug}-${timestamp}`;
}

function safeParseJSON(raw) {
  const extracted = raw
    .replace(/```json\n?/g, "")
    .replace(/```\n?/g, "")
    .trim();

  const sanitized = extracted.replace(
    /"((?:[^"\\]|\\.)*)"/gs,
    (match) =>
      match.replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r")
  );

  return JSON.parse(sanitized);
}

// ─── DETECCIÓN DE DUPLICADOS POR TÍTULO ───────────────────────────────────────

const STOPWORDS = new Set([
  "el","la","los","las","un","una","unos","unas","y","o","de","del","en","a","al",
  "que","con","por","para","se","su","sus","es","son","fue","ser","ya","más","más",
  "este","esta","esto","estos","estas","como","tras","cuando","si","no","sí",
  "the","a","an","of","in","on","at","for","to","is","are","was","were","be","with",
]);

function normalizeTitle(title) {
  if (!title) return new Set();
  return new Set(
    title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length >= 3 && !STOPWORDS.has(w))
  );
}

function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  const intersection = [...setA].filter((w) => setB.has(w)).length;
  const union = new Set([...setA, ...setB]).size;
  return intersection / union;
}

let recentTitles = [];

async function loadRecentTitles() {
  try {
    const { data, error } = await supabase
      .from("noticias")
      .select("titulo")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) {
      console.warn("⚠️  No se pudieron cargar títulos recientes:", error.message);
      return;
    }

    recentTitles = (data || []).map((row) => normalizeTitle(row.titulo));
    console.log(`📚 Cargados ${recentTitles.length} títulos recientes para dedup`);
  } catch (e) {
    console.warn("⚠️  Error cargando títulos:", e.message);
  }
}

function isDuplicateTitle(title) {
  const normalized = normalizeTitle(title);
  for (const existing of recentTitles) {
    const sim = jaccardSimilarity(normalized, existing);
    if (sim >= 0.6) return true;
  }
  return false;
}

// ─── AI: FILTRO DE RELEVANCIA ─────────────────────────────────────────────────

async function isRelevantForEstudioDillon(title, content) {
  const preview = content.substring(0, 500);

  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    max_tokens: 10,
    messages: [
      {
        role: "system",
        content: `Sos un filtro de contenido para una sección de noticias de un estudio contable argentino.
La audiencia son monotributistas, responsables inscriptos, pymes, profesionales independientes y empresas argentinas.

Respondé SOLO con "SI" o "NO".

Decí SI a CUALQUIER noticia que sea de:
- Economía argentina (inflación, dólar, tasas, mercados, bolsa, bonos)
- Impuestos, AFIP/ARCA, normativa fiscal, monotributo
- Empleo, paritarias, sueldos, cargas sociales, conflictos laborales
- Empresas argentinas (cierres, aperturas, inversiones, despidos)
- Pymes, comercio, industria, exportaciones, importaciones
- Decretos, leyes económicas, política económica (no partidaria)
- Bancos, créditos, financiamiento, fintech
- Consumo, supermercados, precios
- Gobierno nacional o BCRA cuando habla de economía/fiscal

Decí NO solo si la noticia es de:
- Deportes, farándula, entretenimiento
- Internacional sin impacto local
- Curiosidades, ciencia, lifestyle, recetas
- Política partidaria pura sin componente económico
- Clickbait ("X razones para...", "Lo que nadie te cuenta...")
- Tecnología de consumo (apps, gadgets)`,
      },
      {
        role: "user",
        content: `Título: "${title}"\nContenido: "${preview}"`,
      },
    ],
  });

  const answer = completion.choices[0]?.message?.content?.trim().toUpperCase();
  return answer === "SI";
}

// ─── AI: GENERAR NOTICIA SEO ──────────────────────────────────────────────────

async function generateNoticiaSEO(title, content, sourceUrl) {
  const preview = content.substring(0, 2000);

  const completion = await groq.chat.completions.create({
    model: "openai/gpt-oss-120b",
    max_tokens: 5000,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: `Sos redactor de noticias para "Estudio Contable Dillon", un estudio contable argentino con sede en Capital Federal.

Tu audiencia son monotributistas, responsables inscriptos, profesionales independientes, pymes y empresas que necesitan entender cómo los cambios económicos, fiscales y normativos los afectan.

Tono de la marca:
- Profesional cordial argentino (tuteo rioplatense pero formal).
- Claro y didáctico: traducís lo técnico a lenguaje accesible.
- Práctico: explicás qué cambia, a quién afecta, y qué tiene que hacer el contribuyente.
- Sin alarmismo ni opinión política. Información neutral y útil.
- No usás expresiones coloquiales fuertes ("posta", "re", etc).

Tu tarea: tomar una noticia fuente y generar un artículo ORIGINAL e INSPIRADO en español. NO traduzcas ni copies: usá la noticia como base para escribir algo útil para tu audiencia, adaptando información, agregando contexto contable si aplica.

Respondé SOLO con JSON válido, sin texto adicional ni backticks:
{
  "titulo": "Título de la noticia en español (max 70 chars)",
  "descripcion": "Resumen de la noticia (max 155 chars)",
  "slug": "url-amigable-basada-en-titulo",
  "contenido": "Artículo en HTML (<h2>, <p>, <ul>, <strong>). Mínimo 500 palabras.",
  "categoria": "Una de: impuestos | monotributo | sueldos-laboral | pymes | economia | vencimientos | actualidad",
  "tags": ["tag-1", "tag-2", "tag-3"],
  "imagen_alt": "Texto alt descriptivo de la imagen"
}`,
      },
      {
        role: "user",
        content: `Fuente: "${sourceUrl}"\nTítulo original: "${title}"\nContenido: "${preview}"`,
      },
    ],
  });

  const raw = completion.choices[0]?.message?.content?.trim();
  return safeParseJSON(raw);
}

// ─── API: CREAR NOTICIA ───────────────────────────────────────────────────────

async function createNoticia(postData) {
  if (DRY_RUN) {
    console.log("🧪 DRY RUN — no se publica:", postData.titulo);
    return "dry-run";
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
      body: JSON.stringify(postData),
    });

    const text = await response.text();
    let result;

    try {
      result = JSON.parse(text);
    } catch {
      const preview = text.substring(0, 200).replace(/\n/g, " ");
      console.error(`❌ Respuesta no es JSON (HTTP ${response.status}): ${preview}`);
      return "error";
    }

    if (!response.ok) {
      if (response.status === 409) return "duplicate";
      console.error("❌ Error creando noticia:", result.message);
      return "error";
    }

    return "created";
  } catch (error) {
    console.error("❌ Error de conexión:", error.message);
    return "error";
  }
}

// ─── PROCESAR FEED ────────────────────────────────────────────────────────────

async function processFeed(feedKey, feedUrl) {
  console.log(`\n📰 Procesando feed: ${feedKey} (${feedUrl})`);

  let feed;
  try {
    feed = await parser.parseURL(feedUrl);
  } catch (error) {
    console.error(`❌ Error parseando feed ${feedKey}: ${error.message}`);
    return { feedKey, status: "feed-error" };
  }

  if (!feed.items?.length) {
    console.log(`⚠️  Feed ${feedKey} sin items`);
    return { feedKey, status: "empty-feed" };
  }

  // Tomamos hasta 15 items del feed para tener margen si el filtro descarta varios
  const candidates = feed.items.slice(0, 15);
  console.log(`📋 ${candidates.length} candidatos en ${feedKey}`);

  for (const item of candidates) {
    const title = item.title?.trim();
    const rawContent = extractContent(item);
    const content = stripHtml(rawContent);

    if (!title || !content || content.length < 200) continue;

    console.log(`\n🔍 Evaluando: "${title.substring(0, 80)}..."`);

    // Chequeo rápido: ¿ya tenemos una noticia con título parecido?
    if (isDuplicateTitle(title)) {
      console.log("🔁 Título similar ya publicado, saltando");
      continue;
    }

    let isRelevant;
    try {
      isRelevant = await isRelevantForEstudioDillon(title, content);
    } catch (error) {
      console.error(`❌ Error en filtro de relevancia: ${error.message}`);
      continue;
    }

    if (!isRelevant) {
      console.log("⏭️  No relevante, saltando");
      continue;
    }

    console.log("✅ Relevante. Generando artículo SEO...");

    let article;
    try {
      article = await generateNoticiaSEO(title, content, item.link || "");
    } catch (error) {
      console.error(`❌ Error generando artículo: ${error.message}`);
      continue;
    }

    if (!article?.titulo || !article?.contenido) {
      console.error("❌ Artículo generado incompleto, saltando");
      continue;
    }

    // Imagen: feed → og:image → fallback por categoría
    const categoria = article.categoria || "actualidad";
    const { url: imagen_url, source: imageSource } = await resolveImage(
      item,
      item.link,
      categoria
    );
    console.log(`🖼️  Imagen: ${imageSource}`);

    const postData = {
      id: `${feedKey}-${Date.now()}`,
      titulo: article.titulo,
      descripcion: article.descripcion || null,
      slug: article.slug || generateSlug(article.titulo),
      contenido: article.contenido,
      categoria,
      tags: article.tags || [],
      imagen_url,
      imagen_alt: article.imagen_alt || article.titulo,
      fuente_url: item.link || null,
      is_automated: true,
    };

    const result = await createNoticia(postData);

    if (result === "created") {
      console.log(`✅ Publicada: ${postData.slug}`);
      // Sumá su título normalizado al set para evitar duplicar en feeds siguientes
      recentTitles.push(normalizeTitle(postData.titulo));
      return { feedKey, status: "created", slug: postData.slug };
    } else if (result === "duplicate") {
      console.log(`⚠️  Duplicada, saltando`);
      continue;
    } else if (result === "dry-run") {
      return { feedKey, status: "dry-run", titulo: postData.titulo };
    } else {
      return { feedKey, status: "error" };
    }
  }

  console.log(`⚠️  Ningún candidato útil en ${feedKey}`);
  return { feedKey, status: "no-relevant" };
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("🚀 Generador de noticias - Estudio Contable Dillon");
  console.log(`🌐 API URL: ${API_URL}`);
  console.log(`🧪 DRY RUN: ${DRY_RUN}`);

  // Carga títulos recientes de Supabase para evitar duplicados
  await loadRecentTitles();

  const feeds = getTodaysFeeds();
  const results = [];

  for (const { key, url } of feeds) {
    const result = await processFeed(key, url);
    results.push(result);
  }

  console.log("\n📊 Resumen:");
  results.forEach((r) => {
    console.log(`  ${r.feedKey}: ${r.status}${r.slug ? ` (${r.slug})` : ""}`);
  });

  const createdCount = results.filter((r) => r.status === "created").length;
  console.log(`\n✨ Total creadas: ${createdCount}`);
}

main().catch((error) => {
  console.error("💥 Error fatal:", error);
  process.exit(1);
});
