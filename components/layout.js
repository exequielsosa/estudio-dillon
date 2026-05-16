import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import LayoutBody from "./layoutBody";
import FooterLayout from "./footer";
import FormContact from "./formContact";
import CallToActionCard from "./callToActionCard";

const NavBar = dynamic(() => import("./navBar"), { ssr: false });

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const isContacto = pathname === "/contacto";

  return (
    <>
      <div className="flex w-full">
        <NavBar />
      </div>
      <LayoutBody>
        {children}
        {isContacto ? (
          <>
            <FormContact />
            <CallToActionCard />
          </>
        ) : (
          <>
            <CallToActionCard />
            <FormContact />
          </>
        )}
      </LayoutBody>
      <FooterLayout />
    </>
  );
};

export default Layout;
