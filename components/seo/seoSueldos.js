import Head from "next/head";
import { sueldosFAQs } from "@/lib/faqs/sueldos";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: sueldosFAQs.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />
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
              {
                "@type": "ListItem",
                position: 2,
                name: "Liquidación de Sueldos",
                item: "https://www.estudio-dillon.com.ar/sueldos",
              },
            ],
          }),
        }}
      />
      <meta name="geo.region" content="AR" />
      <meta name="geo.placename" content="Ciudad Autónoma de Buenos Aires" />
      <meta name="geo.position" content="-34.6037,-58.3816" />
    </Head>
  );
};

export default SeoSueldos;
