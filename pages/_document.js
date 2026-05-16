/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.estudio-dillon.com.ar/#organization",
  name: "Estudio Contable Dillon",
  alternateName: "Estudio Dillon",
  description:
    "Estudio contable y legal con más de 20 años de experiencia. Servicios integrales para empresas, monotributistas y pymes en Argentina.",
  url: "https://www.estudio-dillon.com.ar",
  telephone: "+54-11-5895-9825",
  email: "ma.eugenia.dillon@gmail.com",
  logo: "https://www.estudio-dillon.com.ar/assets/logo.png",
  image: "https://www.estudio-dillon.com.ar/assets/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciudad Autónoma de Buenos Aires",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  areaServed: { "@type": "Country", name: "Argentina" },
  priceRange: "$$",
  sameAs: [
    "https://www.linkedin.com/in/maria-eugenia-dillon/",
    "https://twitter.com/maugexxiv",
  ],
};

export default function Document() {
  return (
    <Html lang="es-AR">
      <Head>
        {/* TODO: cuando verifiques el sitio en Google Search Console, pegar el token acá */}
        {/* <meta name="google-site-verification" content="PEGAR_TOKEN_AQUI" /> */}

        {/* Icons and Manifest */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />

        {/* Additional Meta Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Estudio Dillon" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Robots directives (let Google show full previews) */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* Organization Schema (aplica en todas las páginas) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
