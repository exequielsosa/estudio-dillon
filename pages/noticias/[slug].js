import Head from "next/head";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import ShareButtons from "@/components/shareButtons";
import { Isotipo } from "@/components/brand/Logo";
import {
  SITE_URL, WHATSAPP, CATEGORIA_LABELS, formatDate, MediaNoticia, CardNoticia, IconoWhatsApp,
} from "@/components/noticias/comun";

// JSON-LD como texto crudo (con children, React lo escapa y Google no lo puede leer).
// "<" se escapa para que el contenido de la nota no pueda cerrar el <script>.
const jsonLd = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");

// Servicio relacionado según la categoría de la nota (link interno + salida a la consulta)
const SERVICIO = {
  monotributo: { titulo: "¿Sos monotributista? Te acompañamos con tu categoría, recategorización y facturación", texto: "Mirá cómo trabajamos con monotributistas.", href: "/monotributo", cta: "Ver servicio" },
  impuestos: { titulo: "Liquidamos tus impuestos mes a mes", texto: "IVA, Ganancias, Bienes Personales e Ingresos Brutos, en orden y a tiempo.", href: "/impuestos", cta: "Ver servicio" },
  "sueldos-laboral": { titulo: "Liquidación de sueldos para tu empresa", texto: "Recibos, cargas sociales y novedades del convenio, sin errores.", href: "/sueldos", cta: "Ver servicio" },
  vencimientos: { titulo: "Consultá tus vencimientos por terminación de CUIT", texto: "El calendario 2026 de ARCA, filtrado para tu caso.", href: "/vencimientos", cta: "Ver calendario" },
};
const SERVICIO_DEFAULT = { titulo: "¿Tenés dudas sobre cómo te afecta?", texto: "Hacé tu consulta y te respondemos sin tecnicismos.", href: "/contacto", cta: "Hacé tu consulta" };

// Estilo del cuerpo (HTML que viene de la base)
const PROSA = [
  "text-tinta-700",
  "[&>*:first-child]:mt-0",
  "[&_p]:mt-[18px] [&_p]:text-[17px] md:[&_p]:text-lg [&_p]:leading-[1.75] [&_p]:text-tinta-700",
  "[&_h2]:mt-9 [&_h2]:text-[22px] md:[&_h2]:text-[26px] [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:leading-tight [&_h2]:text-tinta-900",
  "[&_h3]:mt-7 [&_h3]:text-[19px] md:[&_h3]:text-xl [&_h3]:font-extrabold [&_h3]:text-tinta-900",
  "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6",
  "[&_li]:mt-2 [&_li]:pl-1 [&_li]:text-[17px] md:[&_li]:text-lg [&_li]:leading-[1.65] [&_li]:text-tinta-700 [&_li]:marker:text-ambar-500 [&_li]:marker:font-bold",
  "[&_strong]:font-bold [&_strong]:text-tinta-900 [&_b]:font-bold [&_b]:text-tinta-900",
  "[&_a]:font-bold [&_a]:text-tinta-900 [&_a]:underline [&_a]:decoration-ambar-500 [&_a]:decoration-2 [&_a]:underline-offset-[3px] hover:[&_a]:text-tinta-700",
  "[&_table]:mt-[18px] [&_table]:w-full [&_table]:border-collapse [&_table]:text-left [&_table]:text-[15px] md:[&_table]:text-base [&_table]:block [&_table]:overflow-x-auto md:[&_table]:table [&_table]:rounded-[14px] [&_table]:border [&_table]:border-tinta-100",
  "[&_th]:bg-tinta-900 [&_th]:text-white [&_th]:font-extrabold [&_th]:text-[13px] [&_th]:tracking-wide [&_th]:uppercase [&_th]:px-4 [&_th]:py-3",
  "[&_td]:px-4 [&_td]:py-3 [&_td]:border-t [&_td]:border-tinta-100 [&_td]:text-tinta-700 [&_tr:nth-child(even)_td]:bg-tinta-50",
  "[&_blockquote]:mt-6 [&_blockquote]:px-5 [&_blockquote]:py-[18px] [&_blockquote]:rounded-[14px] [&_blockquote]:bg-ambar-50 [&_blockquote]:border-l-4 [&_blockquote]:border-ambar-500",
  "[&_blockquote_p]:mt-0 [&_img]:mt-6 [&_img]:rounded-2xl",
].join(" ");

// Convierte HTML a texto plano y cuenta palabras
const stripHtmlToText = (html) =>
  (html || "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();

const countWords = (text) =>
  text ? text.split(/\s+/).filter(Boolean).length : 0;

const NoticiaDetalle = ({ noticia, relacionadas }) => {
  if (!noticia) {
    return (
      <main className="flex flex-col w-full py-16">
        <h1 className="text-[28px] font-extrabold text-tinta-900">Noticia no encontrada</h1>
        <p className="mt-3 text-base text-tinta-500">
          La noticia que buscás no existe o fue removida.{" "}
          <Link href="/noticias" className="font-bold text-tinta-900 underline decoration-ambar-500 decoration-2 underline-offset-[3px]">
            Volver al listado
          </Link>
          .
        </p>
      </main>
    );
  }

  const url = `${SITE_URL}/noticias/${noticia.slug}`;
  const imageUrl = noticia.imagen_url || `${SITE_URL}/assets/og-image.jpg`;
  const categoriaLabel =
    CATEGORIA_LABELS[noticia.categoria] || noticia.categoria || "Actualidad";
  const servicio = SERVICIO[noticia.categoria] || SERVICIO_DEFAULT;

  const articleBody = stripHtmlToText(noticia.contenido);
  const wordCount = countWords(articleBody);
  const minutosLectura = Math.max(1, Math.round(wordCount / 200));
  const keywordsArr = [
    ...(noticia.tags || []),
    categoriaLabel,
    "estudio contable",
    "Argentina",
  ];
  const keywordsStr = keywordsArr.join(", ");

  const datePublished = noticia.fecha_publicacion
    ? new Date(noticia.fecha_publicacion).toISOString()
    : new Date().toISOString();
  const dateModified = noticia.created_at
    ? new Date(noticia.created_at).toISOString()
    : datePublished;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: noticia.titulo,
    description: noticia.descripcion || "",
    image: [imageUrl],
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: "María Eugenia Dillon",
      jobTitle: "Contadora Pública",
      worksFor: {
        "@type": "Organization",
        name: "Estudio Contable Dillon",
        url: SITE_URL,
      },
      url: "https://www.linkedin.com/in/maria-eugenia-dillon/",
    },
    publisher: {
      "@type": "Organization",
      name: "Estudio Contable Dillon",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/logo.png`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: categoriaLabel,
    articleBody,
    wordCount,
    keywords: keywordsStr,
    inLanguage: "es-AR",
    isAccessibleForFree: true,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Noticias",
        item: `${SITE_URL}/noticias`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: noticia.titulo,
        item: url,
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{`${noticia.titulo} | Estudio Contable Dillon`}</title>
        <meta
          name="description"
          content={
            noticia.descripcion || `${noticia.titulo} - Estudio Contable Dillon`
          }
        />
        <meta name="keywords" content={keywordsStr} />
        <meta name="news_keywords" content={keywordsStr} />
        <meta name="author" content="María Eugenia Dillon" />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:locale" content="es_AR" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Estudio Contable Dillon" />
        <meta property="og:title" content={noticia.titulo} />
        <meta
          property="og:description"
          content={noticia.descripcion || noticia.titulo}
        />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content={noticia.imagen_alt || noticia.titulo}
        />
        <meta property="article:published_time" content={datePublished} />
        <meta property="article:modified_time" content={dateModified} />
        <meta property="article:section" content={categoriaLabel} />
        <meta property="article:author" content="María Eugenia Dillon" />
        {noticia.tags?.map((tag) => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={noticia.titulo} />
        <meta
          name="twitter:description"
          content={noticia.descripcion || noticia.titulo}
        />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:label1" content="Categoría" />
        <meta name="twitter:data1" content={categoriaLabel} />
        <meta name="twitter:label2" content="Lectura" />
        <meta name="twitter:data2" content={`${minutosLectura} min`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />
      </Head>

      <main className="flex flex-col w-full">
        {/* Cabecera */}
        <header className="-mt-4 w-screen ml-[calc(50%-50vw)] bg-tinta-50 border-b border-tinta-100">
          <div className="max-w-[1307px] mx-auto px-4 pt-[22px] pb-[26px] lg:pt-10 lg:pb-11 flex flex-col gap-3.5 lg:gap-[18px]">
            <nav aria-label="Migas de pan" className="text-[13px] lg:text-sm font-semibold text-tinta-500">
              <Link href="/" className="text-tinta-500 hover:text-tinta-900">Inicio</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link href="/noticias" className="text-tinta-500 hover:text-tinta-900">Noticias</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-tinta-900">{categoriaLabel}</span>
            </nav>
            <div className="max-w-[900px] flex flex-col gap-3.5 lg:gap-4">
              {noticia.categoria && (
                <span className="self-start text-[11px] lg:text-xs font-extrabold tracking-[0.12em] uppercase text-white bg-tinta-900 px-2.5 py-1.5 rounded-lg">
                  {categoriaLabel}
                </span>
              )}
              <h1 className="text-[30px] lg:text-[48px] font-extrabold tracking-[-0.03em] leading-[1.12] text-tinta-900">{noticia.titulo}</h1>
              {noticia.descripcion && (
                <p className="text-[17px] lg:text-xl leading-relaxed text-tinta-500">{noticia.descripcion}</p>
              )}
              <div className="mt-1 flex items-center gap-3">
                <span className="w-[42px] h-[42px] lg:w-[46px] lg:h-[46px] shrink-0 rounded-full bg-tinta-900 flex items-center justify-center text-[15px] font-extrabold text-white" aria-hidden="true">MD</span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-[15px] font-extrabold text-tinta-900">María Eugenia Dillon</span>
                  <span className="text-[13px] font-semibold text-tinta-500">
                    Contadora Pública<span className="hidden lg:inline"> · </span><br className="lg:hidden" />
                    <time dateTime={datePublished}>{formatDate(noticia.fecha_publicacion)}</time> · {minutosLectura} min de lectura
                  </span>
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-8 lg:gap-[72px] items-start [&>*]:min-w-0">
          <article className="max-w-[760px]">
            {noticia.imagen_url && (
              <MediaNoticia noticia={noticia} className="aspect-video rounded-2xl lg:rounded-[22px]" conChip={false} isoSize={360} eager />
            )}

            <div className={`${noticia.imagen_url ? "mt-6 lg:mt-8" : ""} ${PROSA}`} dangerouslySetInnerHTML={{ __html: noticia.contenido }} />

            {/* Consulta: en desktop está en la columna lateral */}
            <div className="lg:hidden relative overflow-hidden mt-8 bg-tinta-900 rounded-[20px] px-5 py-6 flex flex-col gap-3">
              <Isotipo variant="blanco" size={180} className="absolute -right-12 -bottom-14 opacity-[0.06] pointer-events-none" />
              <p className="relative text-xs font-extrabold tracking-[0.18em] text-ambar-500">¿TE AFECTA ESTA NOVEDAD?</p>
              <p className="relative text-[21px] font-extrabold leading-tight text-white">Te explicamos qué hacer en tu caso.</p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-2.5 text-base font-extrabold bg-whatsapp p-[15px] rounded-[14px]">
                <IconoWhatsApp /><span className="text-tinta-950">Consultanos por WhatsApp</span>
              </a>
            </div>

            <Link href={servicio.href}
              className="group mt-7 lg:mt-10 flex flex-col lg:flex-row items-start lg:items-center gap-3.5 lg:gap-6 p-5 lg:p-[26px] bg-white border border-tinta-100 rounded-[18px] hover:border-tinta-300 transition-colors">
              <span className="shrink-0 w-[52px] h-[52px] rounded-[14px] bg-tinta-900 flex items-center justify-center">
                <Isotipo variant="blanco" size={26} />
              </span>
              <span className="flex flex-col gap-1 flex-1">
                <span className="text-[17px] lg:text-lg font-extrabold leading-snug text-tinta-900">{servicio.titulo}</span>
                <span className="text-sm leading-normal text-tinta-500">{servicio.texto}</span>
              </span>
              <span className="shrink-0 text-[15px] font-extrabold text-tinta-900 border-b-2 border-ambar-500 pb-0.5">{servicio.cta} →</span>
            </Link>

            <div className="lg:hidden"><ShareButtons url={url} title={noticia.titulo} /></div>

            {noticia.tags?.length > 0 && (
              <ul className="mt-5 lg:mt-7 flex flex-wrap gap-2" aria-label="Etiquetas">
                {noticia.tags.map((tag) => (
                  <li key={tag} className="text-[13px] font-bold text-tinta-700 bg-tinta-50 border border-tinta-100 px-3 py-1.5 rounded-full">#{tag}</li>
                ))}
              </ul>
            )}

            {noticia.fuente_url && (
              <p className="mt-7 text-[13px] leading-relaxed text-tinta-400">
                Información basada en fuentes públicas. Esta nota es de
                elaboración propia del estudio y no reproduce ni copia el
                contenido original.
              </p>
            )}
          </article>

          <aside className="hidden lg:flex flex-col gap-[18px] sticky top-28">
            <div className="relative overflow-hidden bg-tinta-900 rounded-[22px] p-7 flex flex-col gap-3.5">
              <Isotipo variant="blanco" size={200} className="absolute -right-14 -bottom-16 opacity-[0.06] pointer-events-none" />
              <p className="relative text-xs font-extrabold tracking-[0.18em] text-ambar-500">¿TE AFECTA ESTA NOVEDAD?</p>
              <p className="relative text-[22px] font-extrabold leading-tight text-white">Te explicamos qué tenés que hacer en tu caso.</p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-2.5 text-[15px] font-extrabold bg-whatsapp p-3.5 rounded-xl hover:brightness-95">
                <IconoWhatsApp /><span className="text-tinta-950">Consultanos por WhatsApp</span>
              </a>
              <Link href="/contacto" className="relative text-center text-[15px] font-bold text-white p-3 border border-white/25 rounded-xl hover:bg-white/10">
                Hacé tu consulta
              </Link>
            </div>
            <ShareButtons url={url} title={noticia.titulo} compacto />
          </aside>
        </div>

        {relacionadas?.length > 0 && (
          <section aria-labelledby="titulo-relacionadas" className="mt-12 lg:mt-[72px] pt-9 lg:pt-12 border-t border-tinta-100">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs lg:text-[13px] font-bold tracking-[0.2em] text-ambar-800">SEGUÍ LEYENDO</p>
                <h2 id="titulo-relacionadas" className="mt-1.5 lg:mt-2 text-2xl lg:text-[30px] font-extrabold tracking-tight text-tinta-900">
                  Más sobre {categoriaLabel}
                </h2>
              </div>
              <Link href="/noticias" className="hidden md:inline-block shrink-0 text-[15px] font-bold text-tinta-900 px-[18px] py-3 border-2 border-tinta-900 rounded-xl hover:bg-tinta-900 hover:text-white transition-colors">
                Ver todas las noticias →
              </Link>
            </div>
            <div className="mt-1.5 md:mt-[26px] grid grid-cols-1 md:grid-cols-3 md:gap-6 [&>*]:min-w-0">
              {relacionadas.map((r) => (
                <CardNoticia key={r.slug} noticia={{ ...r, categoria: noticia.categoria }} conBajada={false} h="md:h-[140px]" />
              ))}
            </div>
            <Link href="/noticias" className="md:hidden mt-[18px] block text-center text-[15px] font-bold text-tinta-900 p-3 border-2 border-tinta-900 rounded-xl">
              Ver todas las noticias
            </Link>
          </section>
        )}
      </main>
    </>
  );
};

// ISR: ninguna noticia se pre-renderiza en el build; cada una se genera en
// la primera visita y queda cacheada. /api/noticias/create regenera la nueva.
export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const { data: noticia, error } = await supabase
    .from("noticias")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  // Error real de Supabase: lanzar para que ISR conserve la versión anterior
  // en vez de cachear un 404 de una noticia que existe.
  if (error) {
    throw new Error(`Error fetching noticia ${slug}: ${error.message}`);
  }

  if (!noticia) {
    return { notFound: true, revalidate: 3600 };
  }

  // Otras noticias de la misma categoría (excluyendo la actual)
  let relacionadas = [];
  if (noticia.categoria) {
    const { data: rel } = await supabase
      .from("noticias")
      .select(
        "slug, titulo, imagen_url, imagen_alt, fecha_publicacion"
      )
      .eq("categoria", noticia.categoria)
      .neq("slug", slug)
      .order("fecha_publicacion", { ascending: false })
      .limit(3);
    relacionadas = rel || [];
  }

  // 24 h: el contenido de una noticia casi no cambia y los bots recorren
  // todas; las relacionadas nuevas pueden tardar hasta un día en aparecer.
  return { props: { noticia, relacionadas }, revalidate: 86400 };
}

export default NoticiaDetalle;
