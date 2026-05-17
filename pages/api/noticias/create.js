import { supabaseAdmin } from "@/lib/supabase";

const REQUIRED_FIELDS = ["id", "titulo", "slug", "contenido"];

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.NOTICIAS_API_KEY) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const data = req.body;

  for (const field of REQUIRED_FIELDS) {
    if (!data?.[field]) {
      return res
        .status(400)
        .json({ message: `Missing required field: ${field}` });
    }
  }

  const supabase = supabaseAdmin();

  const { error } = await supabase.from("noticias").insert([
    {
      id: data.id,
      titulo: data.titulo,
      descripcion: data.descripcion || null,
      slug: data.slug,
      contenido: data.contenido,
      categoria: data.categoria || null,
      tags: data.tags || [],
      imagen_url: data.imagen_url || null,
      imagen_alt: data.imagen_alt || null,
      fecha_publicacion:
        data.fecha_publicacion || new Date().toISOString().split("T")[0],
      fuente_url: data.fuente_url || null,
      is_automated: data.is_automated ?? true,
    },
  ]);

  if (error) {
    if (error.code === "23505") {
      return res.status(409).json({ message: "Duplicate post" });
    }
    console.error("Supabase error:", error);
    return res.status(500).json({ message: error.message });
  }

  return res.status(201).json({ success: true, slug: data.slug });
};

export default handler;
