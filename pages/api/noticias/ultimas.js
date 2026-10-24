import { supabase } from "@/lib/supabase";

// Las 3 últimas noticias para el bloque "Últimas noticias" del layout.
// Sale de la CDN (s-maxage): antes cada página vista consultaba Supabase
// directo desde el navegador.
const handler = async (req, res) => {
  const { data, error } = await supabase
    .from("noticias")
    .select(
      "slug, titulo, descripcion, categoria, imagen_url, imagen_alt, fecha_publicacion",
    )
    .order("fecha_publicacion", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(3);

  if (error) {
    console.error("Error fetching últimas noticias:", error);
    res.setHeader("Cache-Control", "no-store");
    return res.status(500).json([]);
  }

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400",
  );
  return res.status(200).json(data || []);
};

export default handler;
