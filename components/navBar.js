/* eslint-disable @next/next/no-img-element */
import { Navbar } from "flowbite-react";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const route = router.asPath;
  return (
    <div className="overflow-hidden sticky top-0 pt-0.4 bg-white p-4">
      <Navbar fluid={false} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Estudio Contable Dillon
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active={route === "/"}>
            Inicio
          </Navbar.Link>
          <Navbar.Link href="/impuestos" active={route === "/impuestos"}>
            Impuestos
          </Navbar.Link>
          <Navbar.Link href="/sueldos" active={route === "/sueldos"}>
            Sueldos
          </Navbar.Link>
          <Navbar.Link href="/monotributo" active={route === "/monotributo"}>
            Monotributo
          </Navbar.Link>
          <Navbar.Link href="/tramites" active={route === "/tramites"}>
            Trámites
          </Navbar.Link>
          <Navbar.Link href="/novedades" active={route === "/novedades"}>
            Novedades
          </Navbar.Link>
          <Navbar.Link href="/vencimientos" active={route === "/vencimientos"}>
            Vencimientos
          </Navbar.Link>
          <Navbar.Link href="/contacto" active={route === "/contacto"}>
            Contactos
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
