/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { useState, useMemo } from "react";
import SeoNoticias from "@/components/seo/seoNoticias";
import { supabase } from "@/lib/supabase";
import HeaderImage from "@/components/headerImage";

const SITE_URL = "https://www.estudio-dillon.com.ar";
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

const getMonthKey = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0",
  )}`;
};

const getMonthLabel = (monthKey) => {
  const [year, month] = monthKey.split("-");
  const date = new Date(year, parseInt(month) - 1);
  return date.toLocaleDateString("es-AR", { year: "numeric", month: "long" });
};

const NoticiasIndex = ({ noticias }) => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { months, noticiasPorMes } = useMemo(() => {
    const grouped = {};

    noticias.forEach((noticia) => {
      const monthKey = getMonthKey(noticia.fecha_publicacion);
      if (!grouped[monthKey]) {
        grouped[monthKey] = [];
      }
      grouped[monthKey].push(noticia);
    });

    const monthsList = Object.keys(grouped).sort().reverse();

    return {
      months: monthsList,
      noticiasPorMes: grouped,
    };
  }, [noticias]);

  const activeMonth = selectedMonth || months[0];
  const noticiasDelMes = noticiasPorMes[activeMonth] || [];

  // Contar categorías solo del mes seleccionado
  const categoriasDelMes = {};
  noticiasDelMes.forEach((n) => {
    const cat = n.categoria || "sin-categoria";
    categoriasDelMes[cat] = (categoriasDelMes[cat] || 0) + 1;
  });

  let noticiasActuales = noticiasDelMes;
  if (selectedCategory) {
    noticiasActuales = noticiasActuales.filter(
      (n) => (n.categoria || "sin-categoria") === selectedCategory,
    );
  }
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Últimas noticias - Estudio Contable Dillon",
    url: `${SITE_URL}/noticias`,
    numberOfItems: noticias.length,
    itemListElement: noticias.slice(0, 20).map((n, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/noticias/${n.slug}`,
      name: n.titulo,
    })),
  };

  return (
    <>
      <SeoNoticias />
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
      </Head>
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
            <>
              {months.length > 0 && (
                <div className="mt-8 border-b border-gray-200">
                  <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-4 -mb-4 scrollbar-hide">
                    {months.map((month) => (
                      <button
                        key={month}
                        onClick={() => setSelectedMonth(month)}
                        className={`snap-start flex-shrink-0 px-4 py-2 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap ${
                          activeMonth === month
                            ? "bg-[#10207A] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {getMonthLabel(month)}
                      </button>
                    ))}
                  </div>

                  {Object.keys(categoriasDelMes).length > 0 && (
                    <div className="flex flex-wrap gap-1.5 md:gap-2 pb-4 pt-4">
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
                          selectedCategory === null
                            ? "bg-[#10207A] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        Todas ({noticiasDelMes.length})
                      </button>
                      {Object.entries(categoriasDelMes)
                        .sort(([, a], [, b]) => b - a)
                        .map(([cat, count]) => (
                          <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
                              selectedCategory === cat
                                ? "bg-[#10207A] text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {CATEGORIA_LABELS[cat] || cat} ({count})
                          </button>
                        ))}
                    </div>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {noticiasActuales.map((noticia) => (
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
            </>
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
