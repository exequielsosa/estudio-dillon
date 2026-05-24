import Head from "next/head";

const SeoHome = () => {
  return (
    <Head>
      <title>Estudio Contable Dillon | Estudio Contable Integral</title>
      <meta
        name="description"
        content="Servicios contables y legales integrales para empresas, incluyendo contabilidad y derecho empresarial. Minimizamos contingencias y ofrecemos soluciones."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.estudio-dillon.com.ar" />

      <meta property="og:locale" content="es_AR" />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content="Estudio Contable Dillon | Estudio Contable Integral"
      />
      <meta
        property="og:title"
        content="Estudio Contable Dillon | Estudio Contable Integral"
      />
      <meta
        property="og:description"
        content="Servicios contables y legales integrales para empresas, incluyendo contabilidad y derecho empresarial. Minimizamos contingencias y ofrecemos soluciones."
      />
      <meta property="og:url" content="https://www.estudio-dillon.com.ar" />
      <meta
        name="title"
        content="Estudio Contable Dillon | Estudio Contable Integral"
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
        content="Estudio Contable Dillon | Estudio Contable Integral"
      />
      <meta
        name="twitter:description"
        content="Servicios contables y legales integrales para empresas, incluyendo contabilidad y derecho empresarial. Minimizamos contingencias y ofrecemos soluciones."
      />
      <meta
        name="twitter:image"
        content="https://www.estudio-dillon.com.ar/assets/og-image.jpg"
      />
      {/* Schema Markup - LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://www.estudio-dillon.com.ar/#organization",
            name: "Estudio Contable Dillon",
            description:
              "Servicios contables y legales integrales para empresas, monotributistas y pymes. Más de 20 años de experiencia en asesoramiento impositivo y contable.",
            url: "https://www.estudio-dillon.com.ar",
            telephone: "+54-11-5895-9825",
            email: "ma.eugenia.dillon@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ciudad Autónoma de Buenos Aires",
              addressRegion: "Buenos Aires",
              addressCountry: "AR",
              postalCode: "C1000",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -34.6037,
              longitude: -58.3816,
            },
            areaServed: {
              "@type": "Country",
              name: "Argentina",
            },
            priceRange: "$$",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            ],
            sameAs: [
              "https://www.linkedin.com/in/maria-eugenia-dillon/",
              "https://twitter.com/maugexxiv",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Servicios Contables",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Liquidación de Impuestos",
                    description:
                      "Gestión integral de impuestos nacionales y provinciales",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Liquidación de Sueldos",
                    description:
                      "Tercerización de liquidación de sueldos y jornales",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Monotributo",
                    description: "Asesoramiento y gestión de monotributo",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Trámites AFIP",
                    description: "Gestión de trámites ante organismos oficiales",
                  },
                },
              ],
            },
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
