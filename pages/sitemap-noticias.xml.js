import { supabase } from "@/lib/supabase";

const SITE_URL = "https://www.estudio-dillon.com.ar";

const escapeXml = (str) =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const buildSitemap = (noticias) => {
  const urls = noticias
    .map((n) => {
      const loc = `${SITE_URL}/noticias/${n.slug}`;
      const lastmod = (n.created_at || n.fecha_publicacion || new Date().toISOString())
        .toString()
        .split("T")[0];
      const imageTag = n.imagen_url
        ? `
    <image:image>
      <image:loc>${escapeXml(n.imagen_url)}</image:loc>
      <image:title>${escapeXml(n.titulo || "")}</image:title>
    </image:image>`
        : "";
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>${imageTag}
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;
};

export async function getServerSideProps({ res }) {
  const { data: noticias } = await supabase
    .from("noticias")
    .select("slug, titulo, imagen_url, fecha_publicacion, created_at")
    .order("fecha_publicacion", { ascending: false })
    .limit(1000);

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=1800"
  );
  res.write(buildSitemap(noticias || []));
  res.end();
  return { props: {} };
}

const SitemapNoticias = () => null;
export default SitemapNoticias;
