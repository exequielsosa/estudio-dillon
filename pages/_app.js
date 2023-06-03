import "@/styles/globals.css";
import "@/styles/whatsApp.css";
import Layout from "@/components/layout";
import FloatingWhatsApp from "@/components/floatingWP";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
     <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-VS1FLWWXPP"/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VS1FLWWXPP', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
    <Layout>
      <FloatingWhatsApp />
      <Component {...pageProps} />
      <Analytics />
    </Layout>
    </>
  );
}
