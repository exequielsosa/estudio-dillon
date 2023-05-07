import LayoutBody from "./layoutBody";
import NavBar from "./navBar";
import FooterLayout from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <LayoutBody>{children}</LayoutBody>
      <FooterLayout />
    </>
  );
};

export default Layout;
