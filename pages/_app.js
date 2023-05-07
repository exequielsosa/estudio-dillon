import "@/styles/globals.css";
import "@/styles/whatsApp.css";
import Layout from "@/components/layout";
import FloatingWhatsApp from "@/components/floatingWP";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <FloatingWhatsApp />
      <Component {...pageProps} />
    </Layout>
  );
}
