import LayoutBody from "./layoutBody";
import NavBar from "./navBar";
import FooterLayout from "./footer";
import FormContact from "./formContact";
import CallToActionCard from "./callToActionCard";

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
