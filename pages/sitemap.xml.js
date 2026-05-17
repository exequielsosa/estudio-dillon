const SITE_URL = "https://www.estudio-dillon.com.ar";

const pages = [
  { path: "", changefreq: "weekly", priority: "1.0" },
  { path: "/impuestos", changefreq: "monthly", priority: "0.9" },
  { path: "/sueldos", changefreq: "monthly", priority: "0.9" },
  { path: "/monotributo", changefreq: "monthly", priority: "0.9" },
  { path: "/tramites", changefreq: "monthly", priority: "0.9" },
  { path: "/vencimientos", changefreq: "monthly", priority: "0.9" },
  { path: "/vencimientos-2024", changefreq: "yearly", priority: "0.4" },
  { path: "/vencimientos-2023", changefreq: "yearly", priority: "0.3" },
  { path: "/noticias", changefreq: "daily", priority: "0.8" },
  { path: "/contacto", changefreq: "yearly", priority: "0.8" },
];

const buildSitemap = () => {
  const today = new Date().toISOString().split("T")[0];
  const urls = pages
    .map(
      ({ path, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
};

export async function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );
  res.write(buildSitemap());
  res.end();
  return { props: {} };
}

const Sitemap = () => null;
export default Sitemap;
