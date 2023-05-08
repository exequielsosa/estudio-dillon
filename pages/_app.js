import "@/styles/globals.css";
import "@/styles/whatsApp.css";
import Layout from "@/components/layout";
import FloatingWhatsApp from "@/components/floatingWP";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <FloatingWhatsApp />
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(App);
