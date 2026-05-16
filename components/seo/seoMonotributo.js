import Head from "next/head";

const SeoMonotributo = () => {
  return (
    <Head>
      <title>Monotributo - Estudio Contable Dillon</title>
      <meta
        name="description"
        content="Para pequeños emprendimientos, ofrecemos un trato personalizado y profesional, basado en nuestra experiencia con otras empresas."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="canonical"
        href="https://www.estudio-dillon.com.ar/monotributo"
      />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Estudio Contable Dillon" />
      <meta
        property="og:title"
        content="Monotributo - Estudio Contable Dillon"
      />
      <meta
        property="og:description"
        content="Para pequeños emprendimientos, ofrecemos un trato personalizado y profesional, basado en nuestra experiencia con otras empresas."
      />
      <meta
        property="og:url"
        content="https://www.estudio-dillon.com.ar/monotributo"
      />
      <meta name="title" content="Monotributo - Estudio Contable Dillon" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Spanish" />
      <meta
        name="keywords"
        content="monotributo, régimen simplificado, categoría monotributo, alta monotributo, recategorización monotributo, autónomo, emprendedor, CUIT, factura electrónica, pequeño contribuyente"
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
        content="Monotributo - Estudio Contable Dillon"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@estudiodillon" />
      <meta name="twitter:creator" content="@estudiodillon" />
      <meta
        name="twitter:title"
        content="Monotributo - Estudio Contable Dillon"
      />
      <meta
        name="twitter:description"
        content="Para pequeños emprendimientos, ofrecemos un trato personalizado y profesional, basado en nuestra experiencia con otras empresas."
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
          "@id": "https://www.estudio-dillon.com.ar/monotributo",
          serviceType: "Gestión de Monotributo",
          provider: {
            "@id": "https://www.estudio-dillon.com.ar/#organization",
          },
          areaServed: {
            "@type": "Country",
            name: "Argentina",
          },
          description:
            "Asesoramiento integral para monotributistas: alta, recategorización, liquidación mensual y facturación electrónica.",
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
              name: "¿Qué es el Monotributo y quién puede inscribirse?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "El Monotributo es el régimen simplificado para pequeños contribuyentes. Pueden inscribirse quienes vendan bienes o presten servicios y cumplan con los topes de facturación, alquileres, superficie y consumo de energía establecidos para cada categoría por AFIP/ARCA.",
              },
            },
            {
              "@type": "Question",
              name: "¿Cuándo se debe realizar la recategorización del Monotributo?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Las recategorizaciones se realizan dos veces al año: en enero y julio. Sólo deben realizar el trámite quienes hayan tenido modificaciones en sus parámetros (facturación, alquileres, superficie afectada o energía consumida). Las nuevas cuotas se abonan a partir de febrero y agosto respectivamente.",
              },
            },
            {
              "@type": "Question",
              name: "¿Qué ocurre si supero el tope de facturación del Monotributo?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Si se supera el tope máximo de la categoría más alta o se incumplen los parámetros, el contribuyente queda excluido del régimen y debe pasar al Régimen General (Responsable Inscripto en IVA y Ganancias). Es importante anticiparse a esta transición para evitar sanciones y ajustar la operatoria contable.",
              },
            },
            {
              "@type": "Question",
              name: "¿Cuándo vence el pago mensual del Monotributo?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "El pago mensual del Monotributo vence todos los días 20 de cada mes, o el primer día hábil siguiente en caso de coincidir con un feriado o día inhábil.",
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
              name: "Monotributo",
              item: "https://www.estudio-dillon.com.ar/monotributo",
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

export default SeoMonotributo;
