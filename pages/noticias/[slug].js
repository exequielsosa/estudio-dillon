/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import ShareButtons from "@/components/shareButtons";

const CATEGORIA_LABELS = {
  impuestos: "Impuestos",
  monotributo: "Monotributo",
  "sueldos-laboral": "Sueldos y laboral",
  pymes: "Pymes",
  economia: "Economía",
  vencimientos: "Vencimientos",
  actualidad: "Actualidad",
};

const SITE_URL = "https://www.estudio-dillon.com.ar";

const formatDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("es-AR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

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
      <main className="flex flex-col w-full">
        <div className="w-full flex flex-col mb-10 mt-10">
          <h1 className="text-2xl font-semibold">Noticia no encontrada</h1>
          <p className="mt-4 opacity-70 text-base">
            La noticia que buscás no existe o fue removida.{" "}
            <Link href="/noticias" className="text-blue-700 hover:underline">
              Volver al listado
            </Link>
            .
          </p>
        </div>
      </main>
    );
  }

  const url = `${SITE_URL}/noticias/${noticia.slug}`;
  const imageUrl = noticia.imagen_url || `${SITE_URL}/assets/og-image.jpg`;
  const categoriaLabel =
    CATEGORIA_LABELS[noticia.categoria] || noticia.categoria || "Actualidad";

  const articleBody = stripHtmlToText(noticia.contenido);
  const wordCount = countWords(articleBody);
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
        <meta
          name="twitter:data2"
          content={`${Math.max(1, Math.round(wordCount / 200))} min`}
        />

        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Head>

      <main className="flex flex-col w-full">
        <article className="w-full flex flex-col mb-10">
          <div className="flex w-full justify-left mt-4 mb-4">
            <Link
              href="/noticias"
              className="text-md font-semibold opacity-70 decoration-gray-500 hover:text-blue-500 flex"
            >
              <img
                src="/Back_Arrow.svg"
                className="flex w-[24px] mr-2"
                alt=""
              />
              Volver
            </Link>
          </div>

          {noticia.categoria && (
            <span className="mt-6 text-xs font-bold uppercase tracking-wider text-[#10207A]">
              {categoriaLabel}
            </span>
          )}

          <h1 className="mt-2 text-2xl md:text-3xl font-semibold leading-tight">
            {noticia.titulo}
          </h1>

          {noticia.descripcion && (
            <p className="mt-3 text-lg font-medium opacity-80">
              {noticia.descripcion}
            </p>
          )}

          <p className="mt-3 text-sm opacity-60">
            {formatDate(noticia.fecha_publicacion)}
          </p>

          {noticia.imagen_url && (
            <div className="mt-6 aspect-video bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={noticia.imagen_url}
                alt={noticia.imagen_alt || noticia.titulo}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div
            className="mt-8 prose prose-sm md:prose-base max-w-none
              [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-[#10207A] [&_h2]:border-l-4 [&_h2]:border-[#10207A] [&_h2]:pl-4 [&_h2]:py-1
              [&_p]:mt-4 [&_p]:opacity-80 [&_p]:text-base [&_p]:leading-relaxed
              [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:opacity-80
              [&_li]:mb-1
              [&_strong]:font-semibold [&_strong]:text-black
              [&_a]:text-blue-700 [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: noticia.contenido }}
          />

          <ShareButtons url={url} title={noticia.titulo} />

          {noticia.tags?.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2">
              {noticia.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#10207A]/10 text-[#10207A] text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {relacionadas?.length > 0 && (
            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-lg font-semibold mb-4 text-[#10207A]">
                Otras noticias de {categoriaLabel}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relacionadas.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/noticias/${r.slug}`}
                    className="flex flex-col border border-gray-200 rounded-xl overflow-hidden bg-white transition-shadow duration-300 ease-in-out hover:shadow-md"
                  >
                    {r.imagen_url ? (
                      <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                        <img
                          src={r.imagen_url}
                          alt={r.imagen_alt || r.titulo}
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
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-sm font-semibold mb-2 leading-tight">
                        {r.titulo}
                      </h3>
                      <span className="text-xs opacity-60 mt-auto">
                        {formatDate(r.fecha_publicacion)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {noticia.fuente_url && (
            <p className="mt-8 text-xs opacity-50">
              Información basada en fuentes públicas. Esta nota es de
              elaboración propia del estudio y no reproduce ni copia el
              contenido original.
            </p>
          )}
        </article>
      </main>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const { data: noticia, error } = await supabase
    .from("noticias")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !noticia) {
    return { notFound: true };
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

  return { props: { noticia, relacionadas } };
}

export default NoticiaDetalle;
