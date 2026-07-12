import Head from "next/head";
import { monotributoFAQs } from "@/lib/faqs/monotributo";

const SeoMonotributo = () => {
  return (
    <Head>
      <title>Contador para Monotributistas: alta, recategorización y vencimientos | Estudio Dillon</title>
      <meta
        name="description"
        content="Contador especializado en monotributo: alta, recategorización, control de facturación y vencimientos. Atención en CABA y online. Consultá sin cargo."
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
        content="Contador para Monotributistas: alta, recategorización y vencimientos | Estudio Dillon"
      />
      <meta
        property="og:description"
        content="Contador especializado en monotributo: alta, recategorización, control de facturación y vencimientos. Atención en CABA y online. Consultá sin cargo."
      />
      <meta
        property="og:url"
        content="https://www.estudio-dillon.com.ar/monotributo"
      />
      <meta
        name="title"
        content="Contador para Monotributistas: alta, recategorización y vencimientos | Estudio Dillon"
      />
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
        content="Contador para Monotributistas - Estudio Dillon"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@estudiodillon" />
      <meta name="twitter:creator" content="@estudiodillon" />
      <meta
        name="twitter:title"
        content="Contador para Monotributistas: alta, recategorización y vencimientos | Estudio Dillon"
      />
      <meta
        name="twitter:description"
        content="Contador especializado en monotributo: alta, recategorización, control de facturación y vencimientos. Atención en CABA y online."
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
            mainEntity: monotributoFAQs.map(({ q, a }) => ({
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
                name: "Monotributo",
                item: "https://www.estudio-dillon.com.ar/monotributo",
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

export default SeoMonotributo;
