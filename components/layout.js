import LayoutBody from "./layoutBody";
import NavBar from "./navBar";
import FooterLayout from "./footer";
import FormContact from "./formContact";
import CallToActionCard from "./callToActionCard";
import UltimasNoticias from "./ultimasNoticias";

// Bloques globales al final de cada página: noticias → servicios → consulta.
const Layout = ({ children }) => {
  return (
    <>
      <div className="flex w-full">
        <NavBar />
      </div>
      <LayoutBody>
        {children}

        <UltimasNoticias />
        <CallToActionCard />
        <FormContact />
      </LayoutBody>
      <FooterLayout />
    </>
  );
};

export default Layout;
