/**
 * Prueba rápida de URLs de feeds RSS.
 * Reporta status HTTP + si parsea como RSS válido + cantidad de items.
 *
 * Ejecutar: node scripts/test-feeds.js
 */

import Parser from "rss-parser";

const FEEDS = [
  // iProfesional
  "https://www.iprofesional.com/rss/impuestos",
  "https://www.iprofesional.com/rss/economia",
  "https://www.iprofesional.com/rss/finanzas",

  // Ámbito
  "https://www.ambito.com/rss/pages/novedades-fiscales.xml",
  "https://www.ambito.com/rss/pages/economia.xml",
  "https://www.ambito.com/rss/pages/finanzas.xml",

  // Contadores en Red
  "https://contadoresenred.com/feed/",
  "https://contadoresenred.com/impuestos/feed/",
  "https://contadoresenred.com/monotributo/feed/",
  "https://contadoresenred.com/vencimientos/feed/",

  // Blog del Contador
  "https://www.blogdelcontador.com.ar/feed",

  // El Economista
  "https://eleconomista.com.ar/economia/feed/",
  "https://eleconomista.com.ar/finanzas/feed/",

  // Diarios grandes
  "https://www.clarin.com/rss/economia/",
  "http://contenidos.lanacion.com.ar/herramientas/rss/origen=2",

  // Google News (búsquedas)
  "https://news.google.com/rss/search?q=ARCA+impuestos+Argentina&hl=es-419&gl=AR&ceid=AR:es-419",
  "https://news.google.com/rss/search?q=site:boletinoficial.gob.ar+ARCA+%22Resoluci%C3%B3n+General%22&hl=es-419&gl=AR&ceid=AR:es-419",
  "https://news.google.com/rss/search?q=ARCA+IVA+Ganancias+Bienes+Personales+Argentina&hl=es-419&gl=AR&ceid=AR:es-419",
  "https://news.google.com/rss/search?q=ARCA+Monotributo+Argentina&hl=es-419&gl=AR&ceid=AR:es-419",
  "https://news.google.com/rss/search?q=ARBA+Ingresos+Brutos+Buenos+Aires&hl=es-419&gl=AR&ceid=AR:es-419",
  "https://news.google.com/rss/search?q=AGIP+Ingresos+Brutos+CABA&hl=es-419&gl=AR&ceid=AR:es-419",
  "https://news.google.com/rss/search?q=BCRA+Comunicaci%C3%B3n+A+Argentina&hl=es-419&gl=AR&ceid=AR:es-419",
];

const parser = new Parser({
  timeout: 10000,
});

async function testFeed(url) {
  const start = Date.now();
  try {
    const res = await fetch(url, {
      method: "HEAD",
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      return { url, status: `HTTP ${res.status}`, items: 0, sample: null };
    }
  } catch (e) {
    return { url, status: `HEAD error: ${e.message}`, items: 0, sample: null };
  }

  try {
    const feed = await parser.parseURL(url);
    const elapsed = Date.now() - start;
    const items = feed.items?.length || 0;
    const sample = feed.items?.[0]?.title?.substring(0, 80) || null;
    return { url, status: `✅ OK (${elapsed}ms)`, items, sample };
  } catch (e) {
    return {
      url,
      status: `❌ parse error: ${e.message.substring(0, 60)}`,
      items: 0,
      sample: null,
    };
  }
}

async function main() {
  console.log(`\n🔍 Probando ${FEEDS.length} feeds...\n`);

  const results = [];
  for (const url of FEEDS) {
    const r = await testFeed(url);
    results.push(r);
    const short = url.length > 70 ? url.substring(0, 67) + "..." : url;
    console.log(`${r.status} | items=${r.items}`);
    console.log(`  ${short}`);
    if (r.sample) console.log(`  📰 "${r.sample}..."`);
    console.log("");
  }

  const working = results.filter((r) => r.status.startsWith("✅"));
  const broken = results.filter((r) => !r.status.startsWith("✅"));

  console.log(`\n📊 RESUMEN:`);
  console.log(`  ✅ Funcionan: ${working.length}`);
  console.log(`  ❌ Rotos: ${broken.length}`);
}

main().catch((e) => {
  console.error("💥 Error fatal:", e);
  process.exit(1);
});
