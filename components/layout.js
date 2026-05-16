import dynamic from "next/dynamic";
import LayoutBody from "./layoutBody";
import FooterLayout from "./footer";
import FormContact from "./formContact";
import CallToActionCard from "./callToActionCard";

const NavBar = dynamic(() => import("./navBar"), { ssr: false });

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex w-full">
        <NavBar />
      </div>
      <LayoutBody>
        {children}

        <FormContact />
        <CallToActionCard />
      </LayoutBody>
      <FooterLayout />
    </>
  );
};

export default Layout;
