/* eslint-disable @next/next/no-img-element */
import { Navbar } from "flowbite-react";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const route = router.asPath;
  return (
    <div className="overflow-hidden sticky top-0 pt-0.4 bg-white p-4 z-50">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img
            src="/isologo.png"
            className="mr-3 h-5 sm:h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <h1 class="font-['Secular_One'] text-1xl sm:text-2xl text-fuchsia-600">
              ESTUDIO DILLON
            </h1>
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
