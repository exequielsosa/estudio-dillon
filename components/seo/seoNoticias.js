import Head from "next/head";

const SeoNoticias = () => {
  const title = "Noticias contables, impositivas y económicas | Estudio Contable Dillon";
  const description =
    "Mantenete al día con las últimas noticias sobre AFIP, monotributo, impuestos, sueldos y economía argentina. Actualizado 3 veces por semana.";
  const url = "https://www.estudio-dillon.com.ar/noticias";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href={url} />

      <meta property="og:locale" content="es_AR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Estudio Contable Dillon" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content="https://www.estudio-dillon.com.ar/assets/og-image.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://www.estudio-dillon.com.ar/assets/og-image.jpg"
      />

      <meta
        name="keywords"
        content="noticias contables, novedades AFIP, monotributo, impuestos Argentina, economía pymes, vencimientos fiscales, paritarias, normativa contable"
      />
      <meta name="theme-color" content="#1e40af" />
      <meta name="geo.region" content="AR" />
      <meta name="geo.placename" content="Ciudad Autónoma de Buenos Aires" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": url,
            name: title,
            description,
            url,
            inLanguage: "es-AR",
            publisher: {
              "@id": "https://www.estudio-dillon.com.ar/#organization",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://www.estudio-dillon.com.ar",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Noticias",
                item: url,
              },
            ],
          }),
        }}
      />
    </Head>
  );
};

export default SeoNoticias;
