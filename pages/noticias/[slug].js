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

const NoticiaDetalle = ({ noticia }) => {
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: noticia.titulo,
    description: noticia.descripcion || "",
    image: imageUrl,
    datePublished: noticia.fecha_publicacion,
    dateModified: noticia.fecha_publicacion,
    author: {
      "@type": "Organization",
      name: "Estudio Contable Dillon",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Estudio Contable Dillon",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: categoriaLabel,
    inLanguage: "es-AR",
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
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:locale" content="es_AR" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={noticia.titulo} />
        <meta
          property="og:description"
          content={noticia.descripcion || noticia.titulo}
        />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
        <meta
          property="article:published_time"
          content={noticia.fecha_publicacion}
        />
        <meta property="article:section" content={categoriaLabel} />
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
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

  return { props: { noticia } };
}

export default NoticiaDetalle;
