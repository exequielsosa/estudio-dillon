import Head from "next/head";

const SeoSueldos = () => {
  return (
    <Head>
      <title>Liquidacion de Sueldos - Estudio Contable Dillon</title>
      <meta
        name="description"
        content="La tercerización de la liquidación de sueldos en las empresas ayuda a las mismas en no tener que estar actualizándose en la normativa y problemática laboral"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.estudio-dillon.com.ar/sueldos" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content="Estudio Contable Dillon | Estudio Contable Integral"
      />
      <meta
        property="og:title"
        content="Liquidacion de Sueldos - Estudio Contable Dillon"
      />
      <meta
        property="og:description"
        content="La tercerización de la liquidación de sueldos en las empresas ayuda a las mismas en no tener que estar actualizándose en la normativa y problemática laboral"
      />
      <meta
        property="og:url"
        content="https://www.estudio-dillon.com.ar/sueldos"
      />
      <meta
        name="title"
        content="Liquidacion de Sueldos - Estudio Contable Dillon"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Spanish" />
      <meta
        name="keywords"
        content="liquidación sueldos, liquidación jornales, recibos de sueldo, aportes y contribuciones, seguridad social, ART, obra social, tercialización nómina, recursos humanos"
      />
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
        content="Liquidación de Sueldos - Estudio Contable Dillon"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@estudiodillon" />
      <meta name="twitter:creator" content="@estudiodillon" />
      <meta
        name="twitter:title"
        content="Liquidacion de Sueldos - Estudio Contable Dillon"
      />
      <meta
        name="twitter:description"
        content="La tercerización de la liquidación de sueldos en las empresas ayuda a las mismas en no tener que estar actualizándose en la normativa y problemática laboral"
      />
      <meta
        name="twitter:image"
        content="https://www.estudio-dillon.com.ar/assets/og-image.jpg"
      />
      {/* Schema Markup - Service */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.estudio-dillon.com.ar/sueldos",
          serviceType: "Liquidación de Sueldos y Jornales",
          provider: {
            "@id": "https://www.estudio-dillon.com.ar/#organization",
          },
          areaServed: {
            "@type": "Country",
            name: "Argentina",
          },
          description:
            "Tercerización de liquidación de sueldos, gestión de aportes y contribuciones, recibos de sueldo digitales.",
        })}
      </script>
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "¿Qué incluye el servicio de liquidación de sueldos?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Incluye la liquidación mensual de haberes, cálculo de aportes y contribuciones, generación de recibos de sueldo digitales, presentación de declaraciones juradas ante AFIP y organismos de seguridad social, gestión de altas y bajas de empleados, y liquidación de SAC (aguinaldo) y vacaciones.",
              },
            },
            {
              "@type": "Question",
              name: "¿Cuándo vencen las cargas sociales de empleadores?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Las cargas sociales de empleadores vencen, en términos generales, del 9 al 13 de cada mes posterior al período devengado, según la terminación del CUIT y considerando los corrimientos por días inhábiles.",
              },
            },
            {
              "@type": "Question",
              name: "¿Qué obligaciones tiene el empleador al contratar personal?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "El empleador debe realizar el alta del trabajador en AFIP antes del inicio de la relación laboral, inscribirlo en la ART, gestionar la afiliación a la obra social, generar recibos de sueldo conformes a la normativa, retener el impuesto a las Ganancias si corresponde, y abonar aportes y contribuciones mensualmente.",
              },
            },
            {
              "@type": "Question",
              name: "¿Liquidan sueldos para empleados de casas particulares?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sí, gestionamos los aportes obligatorios del personal de casas particulares, cuyos vencimientos operan el día 10 de cada mes, y los aportes voluntarios con vencimiento general el día 15 de cada mes.",
              },
            },
          ],
        })}
      </script>
      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
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
              name: "Liquidación de Sueldos",
              item: "https://www.estudio-dillon.com.ar/sueldos",
            },
          ],
        })}
      </script>
      <meta name="geo.region" content="AR" />
      <meta name="geo.placename" content="Ciudad Autónoma de Buenos Aires" />
      <meta name="geo.position" content="-34.6037,-58.3816" />
    </Head>
  );
};

export default SeoSueldos;
