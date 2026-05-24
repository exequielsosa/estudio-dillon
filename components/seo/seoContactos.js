import Head from "next/head";
import { contactoFAQs } from "@/lib/faqs/contacto";

const SeoContactos = () => {
  return (
    <Head>
      <title>Contacto - Estudio Contable Dillon</title>
      <meta
        name="description"
        content="Desde hace mas de veinte años brindamos soluciones contables integrales a empresas, instituciones y particulares. Contáctenos aquí y comencemos hoy mismo."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.estudio-dillon.com.ar/contacto" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Estudio Contable Dillon" />
      <meta property="og:title" content="Contacto - Estudio Contable Dillon" />
      <meta
        property="og:description"
        content="Desde hace mas de veinte años brindamos soluciones contables integrales a empresas, instituciones y particulares. Contáctenos aquí y comencemos hoy mismo."
      />
      <meta
        property="og:url"
        content="https://www.estudio-dillon.com.ar/contacto"
      />
      <meta name="title" content="Contacto - Estudio Contable Dillon" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Spanish" />
      <meta
        name="keywords"
        content="contacto estudio contable, consulta contador, presupuesto servicios contables, asesoramiento contable Buenos Aires, consultoría impositiva, contactar contador público"
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
        content="Contacte con Estudio Contable Dillon"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@estudiodillon" />
      <meta name="twitter:creator" content="@estudiodillon" />
      <meta name="twitter:title" content="Contacto - Estudio Contable Dillon" />
      <meta
        name="twitter:description"
        content="Desde hace más de veinte años brindamos soluciones contables integrales a empresas, instituciones y particulares. Contáctenos aquí y comencemos hoy mismo."
      />
      <meta
        name="twitter:image"
        content="https://www.estudio-dillon.com.ar/assets/og-image.jpg"
      />
      {/* Schema Markup - ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://www.estudio-dillon.com.ar/contacto",
            url: "https://www.estudio-dillon.com.ar/contacto",
            name: "Contacto - Estudio Contable Dillon",
            description:
              "Contacte con nuestro estudio contable para servicios de asesoramiento impositivo y contable integral.",
            mainEntity: {
              "@type": "ProfessionalService",
              "@id": "https://www.estudio-dillon.com.ar/#organization",
              name: "Estudio Contable Dillon",
              telephone: "+54-11-5895-9825",
              email: "ma.eugenia.dillon@gmail.com",
            },
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
            mainEntity: contactoFAQs.map(({ q, a }) => ({
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
                name: "Contacto",
                item: "https://www.estudio-dillon.com.ar/contacto",
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

export default SeoContactos;
