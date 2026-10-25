import { useRouter } from "next/router";
import LayoutBody from "./layoutBody";
import NavBar from "./navBar";
import FooterLayout from "./footer";
import FormContact from "./formContact";
import CallToActionCard from "./callToActionCard";
import UltimasNoticias from "./ultimasNoticias";

// Bloques globales al final de cada página: noticias → servicios → consulta.
// En /contacto el formulario ya está arriba de todo, así que no se repite.
const Layout = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <>
      <div className="flex w-full">
        <NavBar />
      </div>
      <LayoutBody>
        {children}

        <UltimasNoticias />
        <CallToActionCard />
        {pathname !== "/contacto" && <FormContact />}
      </LayoutBody>
      <FooterLayout />
    </>
  );
};

export default Layout;
