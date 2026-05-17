/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const CATEGORIA_LABELS = {
  impuestos: "Impuestos",
  monotributo: "Monotributo",
  "sueldos-laboral": "Sueldos y laboral",
  pymes: "Pymes",
  economia: "Economía",
  vencimientos: "Vencimientos",
  actualidad: "Actualidad",
};

const formatDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("es-AR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

const UltimasNoticias = () => {
  const router = useRouter();
  const [noticias, setNoticias] = useState([]);

  const esSeccionNoticias =
    router.pathname === "/noticias" || router.pathname === "/noticias/[slug]";

  useEffect(() => {
    if (esSeccionNoticias) return;

    supabase
      .from("noticias")
      .select(
        "slug, titulo, descripcion, categoria, imagen_url, imagen_alt, fecha_publicacion",
      )
      .order("fecha_publicacion", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(3)
      .then(({ data }) => {
        if (data?.length) setNoticias(data);
      });
  }, [esSeccionNoticias]);

  if (esSeccionNoticias || noticias.length === 0) return null;

  return (
    <section className="w-full mt-16 mb-10">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Últimas noticias</h2>
          <p className="mt-1 text-sm opacity-60">
            Novedades impositivas y contables para estar al día
          </p>
        </div>
        <Link
          href="/noticias"
          className="text-sm font-semibold text-[#10207A] hover:underline whitespace-nowrap ml-4"
        >
          Ver todas &gt;
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {noticias.map((noticia) => (
          <Link
            key={noticia.slug}
            href={`/noticias/${noticia.slug}`}
            className="flex flex-col border border-gray-200 rounded-xl overflow-hidden bg-white transition-shadow duration-300 ease-in-out hover:shadow-lg"
          >
            {noticia.imagen_url ? (
              <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                <img
                  src={noticia.imagen_url}
                  alt={noticia.imagen_alt || noticia.titulo}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="aspect-[16/9] bg-[#10207A]/10 flex items-center justify-center">
                <span className="text-[#10207A] font-semibold text-sm uppercase tracking-wider">
                  Estudio Dillon
                </span>
              </div>
            )}
            <div className="p-5 flex flex-col flex-1">
              {noticia.categoria && (
                <span className="text-xs font-bold uppercase tracking-wider text-[#10207A] mb-2">
                  {CATEGORIA_LABELS[noticia.categoria] || noticia.categoria}
                </span>
              )}
              <h3 className="text-base font-semibold mb-2 leading-tight">
                {noticia.titulo}
              </h3>
              {noticia.descripcion && (
                <p className="opacity-70 text-sm flex-1 mb-3 line-clamp-2">
                  {noticia.descripcion}
                </p>
              )}
              <span className="text-xs opacity-60">
                {formatDate(noticia.fecha_publicacion)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default UltimasNoticias;
