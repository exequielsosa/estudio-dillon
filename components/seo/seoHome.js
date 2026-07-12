import Head from "next/head";

const SeoHome = () => {
  return (
    <Head>
      <title>Estudio Contable Dillon | Contadores para PyMEs y Monotributistas — CABA y online</title>
      <meta
        name="description"
        content="Contador para PyMEs y monotributistas en CABA y todo el país: impuestos, sueldos, trámites y vencimientos. Asesoramiento contable integral y online."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.estudio-dillon.com.ar" />

      <meta property="og:locale" content="es_AR" />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content="Estudio Contable Dillon | Contadores para PyMEs y Monotributistas — CABA y online"
      />
      <meta
        property="og:title"
        content="Estudio Contable Dillon | Contadores para PyMEs y Monotributistas — CABA y online"
      />
      <meta
        property="og:description"
        content="Contador para PyMEs y monotributistas en CABA y todo el país: impuestos, sueldos, trámites y vencimientos. Asesoramiento contable integral y online."
      />
      <meta property="og:url" content="https://www.estudio-dillon.com.ar" />
      <meta
        name="title"
        content="Estudio Contable Dillon | Contadores para PyMEs y Monotributistas — CABA y online"
      />
      <meta
        name="keywords"
        content="estudio contable, contador público, servicios contables, asesoramiento impositivo, liquidación impuestos, AFIP, IVA, ganancias, bienes personales, monotributo, liquidación sueldos, contabilidad pymes, ingresos brutos, Buenos Aires, trámites AFIP, declaración jurada, vencimientos impositivos"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Spanish" />
      <meta name="author" content="Estudio Contable Dillon" />
      <meta name="theme-color" content="#1e40af" />
      <meta
        property="og:image"
        content="https://www.estudio-dillon.com.ar/assets/og-image.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Estudio Contable Dillon - Servicios Contables Integrales"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@estudiodillon" />
      <meta name="twitter:creator" content="@estudiodillon" />
      <meta
        name="twitter:title"
        content="Estudio Contable Dillon | Contadores para PyMEs y Monotributistas — CABA y online"
      />
      <meta
        name="twitter:description"
        content="Contador para PyMEs y monotributistas en CABA y todo el país: impuestos, sueldos, trámites y vencimientos. Asesoramiento contable integral y online."
      />
      <meta
        name="twitter:image"
        content="https://www.estudio-dillon.com.ar/assets/og-image.jpg"
      />
      {/* Nota: el schema de organización (AccountingService) se define una sola vez
          en pages/_document.js y aplica a todas las páginas — evita duplicarlo acá. */}
      {/* Breadcrumb Schema */}
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
            ],
          }),
        }}
      />
      <meta name="geo.region" content="AR-C" />
      <meta name="geo.placename" content="Ciudad Autónoma de Buenos Aires" />
      <meta name="geo.position" content="-34.6037;-58.3816" />
      <meta name="ICBM" content="-34.6037, -58.3816" />
    </Head>
  );
};

export default SeoHome;
