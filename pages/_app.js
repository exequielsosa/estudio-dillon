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
import { manrope } from "@/lib/fonts";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  const router = useRouter();

  // Mide clics de contacto en cualquier parte del sitio con un solo listener.
  // Así sobrevive al rediseño: no depende de cada componente.
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") || "";

      const ubicacion = link.classList.contains("whatsapp_float")
        ? "flotante"
        : link.closest("footer")
        ? "footer"
        : link.closest("nav, header")
        ? "header"
        : "contenido";

      // Solo el WhatsApp del estudio (excluye "compartir por WhatsApp")
      if (href.includes("wa.me/541158959823")) {
        // data-perfil (opcional) indica desde qué perfil escribió, ej. las cards de la home
        const perfil = link.dataset.perfil;
        gtag.trackEvent("click_whatsapp", perfil ? { ubicacion, perfil } : { ubicacion });
      } else if (href.startsWith("tel:")) {
        gtag.trackEvent("click_telefono", { ubicacion });
      } else if (href.startsWith("mailto:")) {
        gtag.trackEvent("click_email", { ubicacion });
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

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
    <div className={manrope.variable}>
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
