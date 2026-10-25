import Head from "next/head";
import Link from "next/link";
import { useState, useMemo } from "react";
import SeoNoticias from "@/components/seo/seoNoticias";
import { supabase } from "@/lib/supabase";
import { Isotipo } from "@/components/brand/Logo";
import {
  SITE_URL, WHATSAPP, CATEGORIA_LABELS, formatDate, ChipCategoria, MediaNoticia, CardNoticia, IconoWhatsApp,
} from "@/components/noticias/comun";

// JSON-LD como texto crudo (con children, React lo escapa y Google no lo puede leer).
// "<" se escapa para que el contenido de la nota no pueda cerrar el <script>.
const jsonLd = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");

const getMonthKey = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
};

// "octubre de 2026" → "Octubre 2026"
const getMonthLabel = (monthKey) => {
  const [year, month] = monthKey.split("-");
  const nombre = new Date(year, parseInt(month) - 1).toLocaleDateString("es-AR", { month: "long" });
  return `${nombre.charAt(0).toUpperCase()}${nombre.slice(1)} ${year}`;
};

const Chip = ({ activo, onClick, children, redondo = true }) => (
  <button type="button" onClick={onClick} aria-pressed={activo}
    className={`shrink-0 snap-start whitespace-nowrap font-bold border transition-colors ${redondo ? "rounded-full text-[13px] px-3 py-[7px] md:px-3.5 md:py-2" : "rounded-xl text-sm px-3.5 py-[9px] md:px-4 md:py-2.5"} ${
      activo ? "bg-tinta-900 border-tinta-900 text-white" : "bg-white border-tinta-100 text-tinta-900 hover:border-tinta-300"}`}>
    {children}
  </button>
);

const BandaConsulta = () => (
  <div className="relative overflow-hidden bg-tinta-900 rounded-[20px] md:rounded-[22px] px-5 py-6 md:px-10 md:py-8 my-6 md:my-0 md:col-span-full flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-10">
    <Isotipo variant="blanco" size={260} className="absolute -right-12 -bottom-16 md:right-64 md:-top-20 md:bottom-auto opacity-[0.05] pointer-events-none" />
    <div className="relative flex flex-col gap-2">
      <p className="text-xs md:text-[13px] font-extrabold tracking-[0.18em] text-ambar-500">¿TE AFECTA?</p>
      <p className="text-[21px] md:text-[26px] font-extrabold tracking-tight leading-tight text-white">
        ¿No sabés si una novedad te afecta? Te lo explicamos sin tecnicismos.
      </p>
    </div>
    <div className="relative flex flex-col sm:flex-row gap-3 shrink-0">
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2.5 text-base font-extrabold text-tinta-950 bg-whatsapp px-[22px] py-[15px] rounded-[14px] hover:brightness-95">
        <IconoWhatsApp /><span className="text-tinta-950">Consultanos por WhatsApp</span>
      </a>
      <Link href="/vencimientos" className="hidden md:inline-flex items-center justify-center text-base font-extrabold text-tinta-900 bg-ambar-500 px-[22px] py-[15px] rounded-[14px] hover:brightness-105">
        Ver vencimientos
      </Link>
    </div>
  </div>
);

function Destacada({ noticia, eager }) {
  return (
    <Link href={`/noticias/${noticia.slug}`}
      className="group grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] bg-white border border-tinta-100 rounded-[20px] lg:rounded-[24px] overflow-hidden shadow-[0_10px_28px_rgba(20,33,61,0.06)] hover:shadow-[0_14px_36px_rgba(20,33,61,0.10)] transition-shadow [&>*]:min-w-0">
      <MediaNoticia noticia={noticia} className="h-[200px] md:h-[300px] lg:h-[400px]" conChip={false} isoSize={360} eager={eager} />
      <div className="p-[18px] md:p-8 lg:p-11 flex flex-col gap-2.5 md:gap-4 justify-center">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-[11px] md:text-xs font-extrabold tracking-[0.12em] text-tinta-900 bg-ambar-500 px-2.5 py-1.5 rounded-lg">LO ÚLTIMO</span>
          <ChipCategoria categoria={noticia.categoria} clase="bg-transparent text-tinta-900 !px-1" />
        </div>
        <h2 className="text-[22px] md:text-[28px] lg:text-[34px] font-extrabold tracking-tight leading-[1.15] text-tinta-900">{noticia.titulo}</h2>
        {noticia.descripcion && <p className="text-[15px] md:text-[17px] leading-relaxed text-tinta-500">{noticia.descripcion}</p>}
        <div className="flex justify-between items-center md:mt-2 md:pt-[18px] md:border-t border-tinta-100">
          <span className="text-[13px] md:text-sm font-semibold text-tinta-500">{formatDate(noticia.fecha_publicacion)}</span>
          <span className="hidden md:inline text-[15px] font-extrabold text-tinta-900">Leer nota →</span>
        </div>
      </div>
    </Link>
  );
}

const NoticiasIndex = ({ noticias }) => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { months, noticiasPorMes } = useMemo(() => {
    const grouped = {};
    noticias.forEach((noticia) => {
      const monthKey = getMonthKey(noticia.fecha_publicacion);
      if (!grouped[monthKey]) grouped[monthKey] = [];
      grouped[monthKey].push(noticia);
    });
    return { months: Object.keys(grouped).sort().reverse(), noticiasPorMes: grouped };
  }, [noticias]);

  const activeMonth = selectedMonth || months[0];
  const noticiasDelMes = noticiasPorMes[activeMonth] || [];

  // Contar categorías solo del mes seleccionado
  const categoriasDelMes = {};
  noticiasDelMes.forEach((n) => {
    const cat = n.categoria || "sin-categoria";
    categoriasDelMes[cat] = (categoriasDelMes[cat] || 0) + 1;
  });

  const elegirMes = (m) => {
    setSelectedMonth(m);
    setSelectedCategory(null);
  };

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(itemListSchema) }} />
      </Head>
      <main className="flex flex-col w-full">
        {/* Hero */}
        <section className="relative -mt-4 w-screen ml-[calc(50%-50vw)] bg-tinta-900 overflow-hidden">
          <Isotipo variant="blanco" size={420} className="absolute -right-16 -top-24 opacity-[0.05] pointer-events-none" />
          <div className="relative max-w-[1307px] mx-auto px-4 pt-7 pb-8 lg:pt-14 lg:pb-[60px] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-8 lg:gap-20 lg:items-end [&>*]:min-w-0">
            <div className="flex flex-col gap-3 lg:gap-4">
              <nav aria-label="Migas de pan" className="text-[13px] lg:text-sm font-semibold">
                <Link href="/" className="text-tinta-200 hover:text-white">Inicio</Link>
                <span className="text-tinta-400 mx-2" aria-hidden="true">/</span>
                <span className="text-white">Noticias</span>
              </nav>
              <p className="mt-1.5 lg:mt-2 text-[11px] lg:text-[13px] font-extrabold tracking-[0.18em] text-ambar-500">
                NOVEDADES · SE ACTUALIZA VARIAS VECES POR SEMANA
              </p>
              <h1 className="text-[38px] lg:text-[56px] font-extrabold tracking-[-0.035em] leading-[1.05] text-white">Noticias</h1>
              <p className="text-[17px] lg:text-[21px] font-semibold leading-snug text-white max-w-[680px]">
                Novedades sobre impuestos, ARCA (ex AFIP), monotributo, sueldos y economía argentina
              </p>
              <p className="text-[15px] lg:text-base leading-[1.7] text-tinta-200 max-w-[720px]">
                Acá compartimos las novedades contables, impositivas y económicas más relevantes para monotributistas,
                responsables inscriptos, pymes y empresas. Actualizamos esta sección varias veces por semana para que
                puedas estar al día con los cambios normativos que pueden afectarte.
              </p>
            </div>
            <div className="hidden lg:flex flex-col gap-3.5 bg-white/[0.06] border border-white/[0.14] rounded-[20px] p-6">
              <p className="text-lg font-extrabold leading-snug text-white">¿Leíste algo y no sabés si te afecta?</p>
              <p className="text-[15px] leading-relaxed text-tinta-200">Escribinos y te decimos qué hacer en tu caso.</p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 text-[15px] font-extrabold bg-whatsapp p-3.5 rounded-xl hover:brightness-95">
                <IconoWhatsApp /><span className="text-tinta-950">Consultanos por WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {noticias.length === 0 ? (
          <div className="mt-10 p-6 border border-tinta-100 rounded-2xl text-center">
            <p className="text-base text-tinta-500">Todavía no hay noticias publicadas. Volvé pronto.</p>
          </div>
        ) : (
          <>
            {/* Filtros: todos los meses y los temas del mes elegido */}
            <div className="w-screen ml-[calc(50%-50vw)] border-b border-tinta-100 bg-white">
              <div className="max-w-[1307px] mx-auto py-4 lg:py-[22px] flex flex-col gap-2.5 lg:gap-3.5">
                <div className="flex items-center gap-2 lg:gap-2.5 overflow-x-auto snap-x scroll-px-4 px-4 scrollbar-hide after:content-[''] after:shrink-0 after:w-4 lg:after:hidden [mask-image:linear-gradient(to_right,#000_82%,transparent)] lg:[mask-image:none]">
                  <span className="hidden lg:block w-[90px] shrink-0 text-[13px] font-bold tracking-[0.12em] text-tinta-500">MES</span>
                  {months.map((m) => (
                    <Chip key={m} activo={activeMonth === m} onClick={() => elegirMes(m)} redondo={false}>{getMonthLabel(m)}</Chip>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 lg:gap-2 overflow-x-auto lg:flex-wrap snap-x scroll-px-4 px-4 scrollbar-hide after:content-[''] after:shrink-0 after:w-4 lg:after:hidden [mask-image:linear-gradient(to_right,#000_82%,transparent)] lg:[mask-image:none]">
                  <span className="hidden lg:block w-[92px] shrink-0 text-[13px] font-bold tracking-[0.12em] text-tinta-500">TEMA</span>
                  <Chip activo={selectedCategory === null} onClick={() => setSelectedCategory(null)}>Todas ({noticiasDelMes.length})</Chip>
                  {Object.entries(categoriasDelMes)
                    .sort(([, a], [, b]) => b - a)
                    .map(([cat, count]) => (
                      <Chip key={cat} activo={selectedCategory === cat} onClick={() => setSelectedCategory(cat)}>
                        {CATEGORIA_LABELS[cat] || cat} ({count})
                      </Chip>
                    ))}
                </div>
              </div>
            </div>

            {/* Se renderizan todos los meses: el elegido se ve y el resto queda oculto.
                Así todas las notas tienen un link en el HTML (Google las encuentra). */}
            {months.map((m) => {
              const visible = m === activeMonth;
              const lista = visible && selectedCategory
                ? noticiasPorMes[m].filter((n) => (n.categoria || "sin-categoria") === selectedCategory)
                : noticiasPorMes[m];
              const [primera, ...resto] = lista;
              return (
                <section key={m} hidden={!visible} aria-label={`Noticias de ${getMonthLabel(m)}`} className="mt-5 lg:mt-11 mb-4">
                  {primera && <Destacada noticia={primera} eager={visible} />}
                  <div className="mt-2 md:mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 [&>*]:min-w-0">
                    {resto.slice(0, 6).map((n) => <CardNoticia key={n.slug} noticia={n} />)}
                    {visible && <BandaConsulta />}
                    {resto.slice(6).map((n) => <CardNoticia key={n.slug} noticia={n} />)}
                  </div>
                </section>
              );
            })}
          </>
        )}
      </main>
    </>
  );
};

// ISR: Supabase recibe ~1 consulta por hora sin importar el tráfico (antes,
// con getServerSideProps, una por visita). /api/noticias/create la regenera
// al instante cuando entra una noticia nueva.
// Se traen TODAS las notas (antes eran las últimas 60) para que ningún mes
// quede afuera del selector ni sin link interno.
export async function getStaticProps() {
  const { data: noticias, error } = await supabase
    .from("noticias")
    .select("slug, titulo, descripcion, categoria, imagen_url, imagen_alt, fecha_publicacion")
    .order("fecha_publicacion", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(2000);

  // Lanzar en vez de devolver []: así ISR conserva la última versión buena
  // en lugar de cachear un listado vacío si Supabase falla.
  if (error) {
    throw new Error(`Error fetching noticias: ${error.message}`);
  }

  return {
    props: {
      noticias: noticias || [],
    },
    revalidate: 3600,
  };
}

export default NoticiasIndex;
