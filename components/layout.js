import LayoutBody from "./layoutBody";
import NavBar from "./navBar";
import FooterLayout from "./footer";
import FormContact from "./formContact";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <LayoutBody>
        {children}
        <FormContact />
      </LayoutBody>
      <FooterLayout />
    </>
  );
};

export default Layout;
