import LayoutBody from "./layoutBody";
import NavBar from "./navBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <LayoutBody>{children}</LayoutBody>
    </>
  );
};

export default Layout;
