import Head from "next/head";
import { tramitesFAQs } from "@/lib/faqs/tramites";

const SeoTramites = () => {
  return (
    <Head>
      <title>Gestión de trámites - Estudio Contable Dillon</title>
      <meta
        name="description"
        content="En todo emprendimiento, es clave un asesoramiento eficiente en trámites societarios y contables para evitar pérdidas de tiempo innecesarias."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.estudio-dillon.com.ar/tramites" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content="Estudio Contable Dillon | Estudio Contable Integral"
      />
      <meta
        property="og:title"
        content="Gestión de trámites - Estudio Contable Dillon"
      />
      <meta
        property="og:description"
        content="En todo emprendimiento, es clave un asesoramiento eficiente en trámites societarios y contables para evitar pérdidas de tiempo innecesarias."
      />
      <meta
        property="og:url"
        content="https://www.estudio-dillon.com.ar/tramites"
      />
      <meta
        name="title"
        content="Gestión de trámites - Estudio Contable Dillon"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Spanish" />
      <meta
        name="keywords"
        content="trámites AFIP, alta CUIT, clave fiscal, certificados contables, inscripción impuestos, gestión societaria, constancia inscripción, trámites ante organismos"
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
        content="Gestión de Trámites - Estudio Contable Dillon"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@estudiodillon" />
      <meta name="twitter:creator" content="@estudiodillon" />
      <meta
        name="twitter:title"
        content="Gestión de trámites - Estudio Contable Dillon"
      />
      <meta
        name="twitter:description"
        content="En todo emprendimiento, es clave un asesoramiento eficiente en trámites societarios y contables para evitar pérdidas de tiempo innecesarias."
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
          "@id": "https://www.estudio-dillon.com.ar/tramites",
          serviceType: "Gestión de Trámites",
          provider: {
            "@id": "https://www.estudio-dillon.com.ar/#organization",
          },
          areaServed: {
            "@type": "Country",
            name: "Argentina",
          },
          description:
            "Gestión integral de trámites ante AFIP, inscripción de impuestos, alta de CUIT, certificados contables y trámites societarios.",
        })}
      </script>
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: tramitesFAQs.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
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
              name: "Gestión de Trámites",
              item: "https://www.estudio-dillon.com.ar/tramites",
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

export default SeoTramites;
