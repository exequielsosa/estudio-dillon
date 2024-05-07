import Head from "next/head";

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
      <link rel="canonical" href="https://www.estudio-dillon.com/contacto" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Estudio Contable Dillon" />
      <meta property="og:title" content="Contacto - Estudio Contable Dillon" />
      <meta
        property="og:description"
        content="Desde hace mas de veinte años brindamos soluciones contables integrales a empresas, instituciones y particulares. Contáctenos aquí y comencemos hoy mismo."
      />
      <meta
        property="og:url"
        content="https://www.estudio-dillon.com/contacto"
      />
      <meta name="title" content="Contacto - Estudio Contable Dillon" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Spanish" />
      <meta
        name="keywords"
        content="vencimientos, afip, 2023, iva, convenio, multilateral, impuesto, impuestos, ganancias, bienes, personales, sueldos, liquidacion, liquidaceiones. asesoramiento, impositivo, contable, contabilidad, estudio, pymes, empresa, patrimonio, valor, agregado, ingresos, brutos, monotributo, regimen, simplificado, cuil, cuit"
      />
      <meta name="author" content="Estudio Dillon" />
      <meta
        property="og:image"
        content="https://www.estudio-dillon.com/logotipoDillon.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@maugexxiv" />
      <meta name="twitter:creator" content="@maugexxiv" />
      <meta name="twitter:title" content="Contacto - Estudio Contable Dillon" />
      <meta
        name="twitter:description"
        content="Desde hace más de veinte años brindamos soluciones contables integrales a empresas, instituciones y particulares. Contáctenos aquí y comencemos hoy mismo."
      />
      <meta
        name="twitter:image"
        content="https://www.estudio-dillon.com/logotipoDillon.png"
      />
      <meta
        name="twitter:url"
        content="https://www.estudio-dillon.com/contacto"
      />
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Person",
          name: "Estudio Contable Dillon",
          jobTitle: "Estudio Contable",
          description:
            "Servicios contables y legales integrales para empresas.",
          url: "https://www.estudio-dillon.com",
          sameAs: [
            "https://www.linkedin.com/in/maria-eugenia-dillon/",
            "https://twitter.com/maugexxiv",
          ],
        })}
      </script>
    </Head>
  );
};

export default SeoContactos;
