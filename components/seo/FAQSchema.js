import Head from "next/head";
import { faqsHome } from "@/lib/faqs/home";

// Datos estructurados FAQPage: salen de la misma lista que se muestra en la home
// (components/home/PreguntasHome.js), así Google ve exactamente lo que ve el usuario.
const FAQSchema = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsHome.map((f) => ({
      "@type": "Question",
      name: f.pregunta,
      acceptedAnswer: { "@type": "Answer", text: f.respuesta },
    })),
  };

  return (
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
    </Head>
  );
};

export default FAQSchema;
