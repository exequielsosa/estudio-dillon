import Head from "next/head";

const SeoImpuestos = () => {
  return (
    <Head>
      <title>Liquidacion de Impuestos - Estudio Contable Dillon</title>
      <meta
        name="description"
        content="Brindamos Servicios Contables Integrales en materia impositiva. Asesoramiento para pequeños contribuyentes que quieran empezar o posean un emprendimiento..."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="canonical"
        href="https://www.estudio-dillon.com.ar/impuestos"
      />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content="Estudio Contable Dillon | Estudio Contable Integral"
      />
      <meta
        property="og:title"
        content="Liquidacion de Impuestos - Estudio Contable Dillon"
      />
      <meta
        property="og:description"
        content="Brindamos Servicios Contables Integrales en materia impositiva. Asesoramiento para pequeños contribuyentes que quieran empezar o posean un emprendimiento..."
      />
      <meta
        property="og:url"
        content="https://www.estudio-dillon.com.ar/impuestos"
      />
      <meta
        name="title"
        content="Liquidacion de Impuestos - Estudio Contable Dillon"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Spanish" />
      <meta
        name="keywords"
        content="liquidación impuestos, IVA, ganancias, bienes personales, declaración jurada, AFIP, impuesto patrimonio, valor agregado, ingresos brutos, convenio multilateral, asesoramiento impositivo"
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
        content="Liquidación de Impuestos - Estudio Contable Dillon"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@estudiodillon" />
      <meta name="twitter:creator" content="@estudiodillon" />
      <meta
        name="twitter:title"
        content="Liquidacion de Impuestos - Estudio Contable Dillon"
      />
      <meta
        name="twitter:description"
        content="Brindamos Servicios Contables Integrales en materia impositiva. Asesoramiento para pequeños contribuyentes que quieran empezar o posean un emprendimiento..."
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
          "@id": "https://www.estudio-dillon.com.ar/impuestos",
          serviceType: "Liquidación de Impuestos",
          provider: {
            "@id": "https://www.estudio-dillon.com.ar/#organization",
          },
          areaServed: {
            "@type": "Country",
            name: "Argentina",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servicios de Liquidación de Impuestos",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "IVA",
                  description: "Liquidación de IVA mensual y anual",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Ganancias",
                  description: "Liquidación de impuesto a las ganancias",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Bienes Personales",
                  description: "Declaración jurada de bienes personales",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Ingresos Brutos",
                  description:
                    "Liquidación de ingresos brutos y convenio multilateral",
                },
              },
            ],
          },
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
              name: "¿Qué impuestos liquidan en el estudio?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Liquidamos los principales impuestos nacionales y provinciales de Argentina: IVA, Impuesto a las Ganancias, Bienes Personales, Ingresos Brutos y Convenio Multilateral. Realizamos las declaraciones juradas correspondientes y presentamos ante AFIP/ARCA en tiempo y forma.",
              },
            },
            {
              "@type": "Question",
              name: "¿Quiénes deben presentar declaración jurada de Ganancias y Bienes Personales?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Deben presentar declaración jurada las personas humanas inscriptas en Ganancias y los empleados o jubilados cuyos ingresos brutos anuales superen el monto fijado por AFIP. También las personas alcanzadas por Bienes Personales según el mínimo no imponible vigente para el período fiscal.",
              },
            },
            {
              "@type": "Question",
              name: "¿Cuándo vence la liquidación mensual de IVA?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "El vencimiento de la presentación y pago de IVA mensual va, en términos generales, del 18 al 22 de cada mes, según la terminación del CUIT y con los corrimientos correspondientes por días inhábiles. Las Micro y Pequeñas empresas con certificado MiPyME vigente pueden acogerse al beneficio de pago diferido.",
              },
            },
            {
              "@type": "Question",
              name: "¿Atienden a empresas de todo el país o solo de Buenos Aires?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Atendemos clientes de toda Argentina, tanto de forma presencial en CABA como remota. Trabajamos con empresas, monotributistas y personas humanas de todas las provincias.",
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
              name: "Liquidación de Impuestos",
              item: "https://www.estudio-dillon.com.ar/impuestos",
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

export default SeoImpuestos;
