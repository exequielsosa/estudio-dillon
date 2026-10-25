/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Isotipo } from "@/components/brand/Logo";

const CATEGORIA_LABELS = {
  impuestos: "Impuestos",
  monotributo: "Monotributo",
  "sueldos-laboral": "Sueldos y laboral",
  pymes: "Pymes",
  economia: "Economía",
  vencimientos: "Vencimientos",
  actualidad: "Actualidad",
};

// Cabecera de color cuando la nota no trae imagen
const ESTILO_CATEGORIA = {
  impuestos: { fondo: "bg-tinta-50", chip: "bg-tinta-900 text-white", iso: "color", opacidad: "opacity-[0.08]" },
  pymes: { fondo: "bg-tinta-50", chip: "bg-tinta-900 text-white", iso: "color", opacidad: "opacity-[0.08]" },
  actualidad: { fondo: "bg-tinta-50", chip: "bg-tinta-900 text-white", iso: "color", opacidad: "opacity-[0.08]" },
  monotributo: { fondo: "bg-ambar-50", chip: "bg-ambar-500 text-tinta-900", iso: "color", opacidad: "opacity-[0.12]" },
  economia: { fondo: "bg-ambar-50", chip: "bg-ambar-500 text-tinta-900", iso: "color", opacidad: "opacity-[0.12]" },
  "sueldos-laboral": { fondo: "bg-tinta-900", chip: "bg-white text-tinta-900", iso: "blanco", opacidad: "opacity-[0.12]" },
  vencimientos: { fondo: "bg-tinta-900", chip: "bg-white text-tinta-900", iso: "blanco", opacidad: "opacity-[0.12]" },
};
const ESTILO_DEFAULT = ESTILO_CATEGORIA.impuestos;

const formatDate = (date) =>
  date ? new Date(date).toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" }) : "";

const Etiqueta = ({ categoria, clase }) =>
  categoria ? (
    <span className={`text-[11px] md:text-xs font-extrabold tracking-[0.12em] uppercase px-2.5 py-1.5 rounded-lg ${clase}`}>
      {CATEGORIA_LABELS[categoria] || categoria}
    </span>
  ) : null;

const UltimasNoticias = () => {
  const router = useRouter();
  const [noticias, setNoticias] = useState([]);

  const esSeccionNoticias = router.pathname === "/noticias" || router.pathname === "/noticias/[slug]";

  useEffect(() => {
    if (esSeccionNoticias) return;
    // Desde /api/noticias/ultimas (cacheado en la CDN), no de Supabase directo
    fetch("/api/noticias/ultimas")
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => {
        if (data?.length) setNoticias(data);
      })
      .catch(() => {});
  }, [esSeccionNoticias]);

  if (esSeccionNoticias || noticias.length === 0) return null;

  return (
    <section className="w-full mt-16 md:mt-20" aria-labelledby="titulo-noticias">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs md:text-[13px] font-bold tracking-[0.2em] text-ambar-800">NOVEDADES</p>
          <h2 id="titulo-noticias" className="mt-1.5 md:mt-2 text-[26px] md:text-[34px] font-extrabold tracking-tight text-tinta-900">
            Últimas noticias
          </h2>
          <p className="mt-1.5 md:mt-2 text-[15px] md:text-[17px] text-tinta-500">Novedades impositivas y contables para estar al día</p>
        </div>
        <Link href="/noticias"
          className="hidden md:inline-block shrink-0 text-[15px] font-bold text-tinta-900 px-[18px] py-3 border-2 border-tinta-900 rounded-xl hover:bg-tinta-900 hover:text-white transition-colors">
          Ver todas las noticias →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 md:gap-6 mt-5 md:mt-7">
        {noticias.map((noticia) => {
          const e = ESTILO_CATEGORIA[noticia.categoria] || ESTILO_DEFAULT;
          return (
            <Link key={noticia.slug} href={`/noticias/${noticia.slug}`}
              className="group flex flex-col border border-tinta-100 rounded-2xl md:rounded-[18px] overflow-hidden bg-white transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(20,33,61,0.10)]">
              {noticia.imagen_url ? (
                <div className="relative h-[84px] md:h-[132px] bg-tinta-50 overflow-hidden">
                  <img src={noticia.imagen_url} alt={noticia.imagen_alt || noticia.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute left-4 bottom-3.5 md:left-5 md:bottom-5">
                    <Etiqueta categoria={noticia.categoria} clase={e.chip} />
                  </div>
                </div>
              ) : (
                <div className={`relative h-[84px] md:h-[132px] overflow-hidden flex items-end px-4 py-3.5 md:p-5 ${e.fondo}`}>
                  <Isotipo variant={e.iso} size={150} className={`absolute -right-4 -top-5 md:-right-6 md:-top-6 ${e.opacidad}`} />
                  <Etiqueta categoria={noticia.categoria} clase={e.chip} />
                </div>
              )}
              <div className="p-4 md:p-[22px] flex flex-col gap-2 md:gap-2.5 flex-1">
                <h3 className="text-[17px] md:text-[19px] font-bold leading-snug text-tinta-900 group-hover:underline underline-offset-4 decoration-ambar-500">
                  {noticia.titulo}
                </h3>
                {noticia.descripcion && (
                  <p className="hidden md:block text-[15px] leading-relaxed text-tinta-500 line-clamp-2">{noticia.descripcion}</p>
                )}
                <span className="mt-auto text-[13px] font-semibold text-tinta-500">{formatDate(noticia.fecha_publicacion)}</span>
              </div>
            </Link>
          );
        })}
      </div>

      <Link href="/noticias"
        className="md:hidden block mt-4 text-center text-[15px] font-bold text-tinta-900 p-[13px] border-2 border-tinta-900 rounded-xl">
        Ver todas las noticias
      </Link>
    </section>
  );
};

export default UltimasNoticias;
