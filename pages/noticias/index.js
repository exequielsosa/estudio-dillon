/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SeoNoticias from "@/components/seo/seoNoticias";
import { supabase } from "@/lib/supabase";
import HeaderImage from "@/components/headerImage";
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

const NoticiasIndex = ({ noticias }) => {
  return (
    <>
      <SeoNoticias />
      <main className="flex flex-col w-full">
        <HeaderImage
          image="/header/noticias.jpg"
          alt="Liquidación de impuestos - Estudio Contable Dillon"
        />
        <div className="w-full flex flex-col mb-10">
          <article>
            <h1 className="mt-8 text-2xl font-semibold">Noticias</h1>
            <p className="mt-2 text-lg font-medium opacity-80">
              Novedades sobre impuestos, AFIP, monotributo, sueldos y economía
              argentina
            </p>
            <p className="mt-4 opacity-70 text-base">
              Acá compartimos las novedades contables, impositivas y económicas
              más relevantes para monotributistas, responsables inscriptos,
              pymes y empresas. Actualizamos esta sección varias veces por
              semana para que puedas estar al día con los cambios normativos que
              pueden afectarte.
            </p>
          </article>

          {noticias.length === 0 ? (
            <div className="mt-10 p-6 border border-gray-200 rounded-lg text-center">
              <p className="opacity-70 text-base">
                Todavía no hay noticias publicadas. Volvé pronto.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
                        {CATEGORIA_LABELS[noticia.categoria] ||
                          noticia.categoria}
                      </span>
                    )}
                    <h2 className="text-lg font-semibold mb-2 leading-tight">
                      {noticia.titulo}
                    </h2>
                    {noticia.descripcion && (
                      <p className="opacity-70 text-sm flex-1 mb-3">
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
          )}
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const { data: noticias, error } = await supabase
    .from("noticias")
    .select(
      "slug, titulo, descripcion, categoria, imagen_url, imagen_alt, fecha_publicacion",
    )
    .order("fecha_publicacion", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(60);

  if (error) {
    console.error("Error fetching noticias:", error);
  }

  return {
    props: {
      noticias: noticias || [],
    },
  };
}

export default NoticiasIndex;
