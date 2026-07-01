/**
 * Test manual del pipeline de IA (Groq) para noticias.
 * No toca Supabase ni el endpoint /api/noticias/create — solo llama a Groq
 * con datos de prueba en memoria para confirmar que el filtro de relevancia
 * y la generación de artículos funcionan tras la migración de modelo.
 *
 * Uso: yarn test:ai
 */

import Groq from "groq-sdk";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "..", ".env.local") });

const GROQ_API_KEY = process.env.GROQ_API_KEY;

if (!GROQ_API_KEY) {
  console.error("❌ ERROR: GROQ_API_KEY no configurada (.env.local)");
  process.exit(1);
}

const groq = new Groq({ apiKey: GROQ_API_KEY });

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

// Copia fiel de isRelevantForEstudioDillon (scripts/generate-noticias.js)
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

// Copia fiel de generateNoticiaSEO (scripts/generate-noticias.js), ya con el modelo migrado
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

// ─── DATOS DE PRUEBA ────────────────────────────────────────────────────────

const NOTICIA_RELEVANTE = {
  title: "ARCA extendió el vencimiento del Monotributo de julio",
  content:
    "El organismo recaudador ARCA (ex AFIP) anunció una prórroga en el vencimiento de la recategorización y el pago del Monotributo correspondiente a julio, tras reclamos de cámaras de monotributistas y contadores por la actualización de escalas. La medida busca dar más margen a los pequeños contribuyentes para adecuar su facturación a las nuevas categorías vigentes desde este semestre, en un contexto de actualización de parámetros por inflación acumulada.",
};

const NOTICIA_NO_RELEVANTE = {
  title: "River goleó en el Monumental y sigue como líder del torneo",
  content:
    "River Plate venció por 4 a 0 a su rival de turno en un partido disputado en el estadio Monumental, resultado que le permite mantenerse como líder de las posiciones. El equipo mostró un nivel futbolístico destacado y los hinchas celebraron en las tribunas durante todo el encuentro.",
};

// ─── EJECUCIÓN ──────────────────────────────────────────────────────────────

let failures = 0;

async function testRelevancia(label, { title, content }, esperado) {
  console.log(`\n🔍 [Filtro relevancia] ${label}`);
  const resultado = await isRelevantForEstudioDillon(title, content);
  const ok = resultado === esperado;
  console.log(
    `   → ${resultado ? "SI" : "NO"} (esperado ${esperado ? "SI" : "NO"}) ${ok ? "✅" : "❌"}`
  );
  if (!ok) failures++;
  return resultado;
}

async function testGeneracion() {
  console.log(`\n📝 [Generación artículo] Noticia relevante`);
  try {
    const article = await generateNoticiaSEO(
      NOTICIA_RELEVANTE.title,
      NOTICIA_RELEVANTE.content,
      "https://ejemplo.com/noticia-test"
    );

    const camposRequeridos = ["titulo", "descripcion", "slug", "contenido", "categoria", "tags", "imagen_alt"];
    const faltantes = camposRequeridos.filter((campo) => !article[campo]);

    if (faltantes.length > 0) {
      console.log(`   ❌ Faltan campos en el JSON: ${faltantes.join(", ")}`);
      failures++;
    } else {
      console.log(`   ✅ JSON parseado correctamente. Campos OK.`);
      console.log(`   Título: ${article.titulo}`);
      console.log(`   Categoría: ${article.categoria}`);
      console.log(`   Tags: ${article.tags.join(", ")}`);
      console.log(`   Longitud contenido: ${article.contenido.length} caracteres`);
    }
  } catch (error) {
    console.log(`   ❌ Error generando/parseando artículo: ${error.message}`);
    failures++;
  }
}

async function main() {
  console.log("🧪 Test del pipeline de IA (Groq) — sin Supabase, sin publicar nada\n");

  await testRelevancia("Noticia relevante (monotributo)", NOTICIA_RELEVANTE, true);
  await testRelevancia("Noticia no relevante (deportes)", NOTICIA_NO_RELEVANTE, false);
  await testGeneracion();

  console.log("\n" + "─".repeat(50));
  if (failures === 0) {
    console.log("✨ Todo OK — el pipeline de IA funciona correctamente.");
  } else {
    console.log(`💥 ${failures} test(s) fallaron.`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("💥 Error fatal:", error);
  process.exit(1);
});
