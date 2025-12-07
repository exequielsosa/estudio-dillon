import Head from "next/head";

const FAQSchema = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué servicios ofrece Estudio Contable Dillon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ofrecemos servicios contables integrales incluyendo liquidación de impuestos (IVA, Ganancias, Bienes Personales), liquidación de sueldos y jornales, gestión de monotributo, trámites ante AFIP y asesoramiento impositivo para empresas y particulares.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo puedo obtener asesoramiento sobre monotributo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brindamos asesoramiento completo para monotributistas: alta, recategorización, liquidación mensual y facturación electrónica. Contáctenos a través de nuestro formulario web o por teléfono para una consulta personalizada.",
        },
      },
      {
        "@type": "Question",
        name: "¿En qué zona de Buenos Aires se encuentra el estudio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nuestro estudio contable está ubicado en Ciudad Autónoma de Buenos Aires. Atendemos clientes de toda Argentina de forma presencial y remota.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué impuestos liquidan en el estudio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Liquidamos todos los impuestos nacionales y provinciales: IVA, Ganancias, Bienes Personales, Ingresos Brutos, Convenio Multilateral, Monotributo, entre otros. También gestionamos declaraciones juradas y presentaciones ante AFIP.",
        },
      },
      {
        "@type": "Question",
        name: "¿Ofrecen servicios de liquidación de sueldos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, tercerizamos la liquidación de sueldos y jornales, incluyendo el cálculo de aportes y contribuciones, gestión de altas y bajas, recibos de sueldo digitales y presentaciones ante AFIP y organismos de seguridad social.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántos años de experiencia tiene el estudio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contamos con más de 20 años de experiencia brindando soluciones contables integrales a empresas, instituciones, monotributistas y particulares en Argentina.",
        },
      },
    ],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </Head>
  );
};

export default FAQSchema;
