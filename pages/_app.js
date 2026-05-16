import "@/styles/globals.css";
import "@/styles/whatsApp.css";
import "aos/dist/aos.css";
import Aos from "aos";
import Layout from "@/components/layout";
import FloatingWhatsApp from "@/components/floatingWP";
import ScrollToTop from "@/components/scrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../gatg";
import Script from "next/script";
import { montserrat, titilliumWeb } from "@/lib/fonts";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <div className={`${montserrat.variable} ${titilliumWeb.variable}`}>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Layout>
        <FloatingWhatsApp />
        <ScrollToTop />
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </div>
  );
}
