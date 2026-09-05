/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import useClickAway from "@/hooks/useClickAway";

const NavBar = () => {
  const router = useRouter();
  const route = router.asPath;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        className="fixed top-0 pt-0.4 bg-white p-1 z-50 w-full"
        style={{
          boxShadow: isScrolled ? "0 2px 8px rgba(0,0,0,0.15)" : "none",
          transition: "box-shadow 0.3s ease-in-out",
        }}
      >
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="relative max-w-screen-xl mx-auto p-2 flex items-center justify-between gap-3">
            <Link
              href="/"
              className="flex shrink-0 items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/estudio_dillon_logo.png"
                width={1346}
                height={231}
                className="h-8 w-auto max-w-none shrink-0 nav:h-14"
                alt="Estudio Dillon"
              />
            </Link>
            <div className="flex flex-col items-end shrink-0">
              <div className="flex items-center gap-4 nav:mb-2">
                <a
                  href="tel:+541158959823"
                  className="hidden nav:inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#10207A]"
                  aria-label="Llamar al Estudio Dillon"
                >
                  📞 +54 11 5895-9823
                </a>
                <button
                  data-collapse-toggle="navbar-default"
                  onClick={toggleMenu}
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-base text-gray-500 rounded-lg nav:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`absolute left-0 top-full w-full px-2 overflow-hidden transition-all duration-300 ease-in-out nav:static nav:px-0 nav:overflow-visible nav:max-h-none nav:opacity-100 nav:pointer-events-auto nav:flex nav:justify-end ${
                  isOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0 pointer-events-none"
                }`}
                id="navbar-default"
                onClick={closeMenu}
                ref={ref}
              >
                <ul className="font-medium flex flex-col p-4 nav:p-0 mt-2 border border-gray-100 rounded-lg bg-gray-50 shadow-lg nav:shadow-none nav:flex-row nav:space-x-6 rtl:space-x-reverse nav:mt-0 nav:border-0 nav:bg-white dark:bg-gray-800 nav:dark:bg-gray-900 dark:border-gray-700">
                  <li data-aos="zoom-in">
                    <Link
                      href="/"
                      className={`block py-2 px-3 rounded hover:bg-gray-100 nav:hover:bg-transparent nav:border-0 nav:p-0 dark:text-white nav:hover:text-[#10207A] dark:hover:bg-gray-700 dark:hover:text-white nav:dark:hover:bg-transparent ${
                        route === "/" ? "text-[#10207A]" : "text-gray-900"
                      }`}
                    >
                      Inicio
                    </Link>
                  </li>
                  <li data-aos="zoom-in" data-aos-delay="500">
                    <Link
                      href="/impuestos"
                      className={`block py-2 px-3 rounded hover:bg-gray-100 nav:hover:bg-transparent nav:border-0 nav:p-0 dark:text-white nav:hover:text-[#10207A] dark:hover:bg-gray-700 dark:hover:text-white nav:dark:hover:bg-transparent ${
                        route === "/impuestos"
                          ? "text-[#10207A]"
                          : "text-gray-900"
                      }`}
                    >
                      Impuestos
                    </Link>
                  </li>
                  <li data-aos="zoom-in" data-aos-delay="1000">
                    <Link
                      href="/sueldos"
                      className={`block py-2 px-3 rounded hover:bg-gray-100 nav:hover:bg-transparent nav:border-0 nav:p-0 dark:text-white nav:hover:text-[#10207A] dark:hover:bg-gray-700 dark:hover:text-white nav:dark:hover:bg-transparent ${
                        route === "/sueldos"
                          ? "text-[#10207A]"
                          : "text-gray-900"
                      }`}
                    >
                      Sueldos
                    </Link>
                  </li>
                  <li data-aos="zoom-in" data-aos-delay="1500">
                    <Link
                      href="/monotributo"
                      className={`block py-2 px-3 rounded hover:bg-gray-100 nav:hover:bg-transparent nav:border-0 nav:p-0 dark:text-white nav:hover:text-[#10207A] dark:hover:bg-gray-700 dark:hover:text-white nav:dark:hover:bg-transparent ${
                        route === "/monotributo"
                          ? "text-[#10207A]"
                          : "text-gray-900"
                      }`}
                    >
                      Monotributo
                    </Link>
                  </li>
                  <li data-aos="zoom-in" data-aos-delay="2000">
                    <Link
                      href="/tramites"
                      className={`block py-2 px-3 rounded hover:bg-gray-100 nav:hover:bg-transparent nav:border-0 nav:p-0 dark:text-white nav:hover:text-[#10207A] dark:hover:bg-gray-700 dark:hover:text-white nav:dark:hover:bg-transparent ${
                        route === "/tramites"
                          ? "text-[#10207A]"
                          : "text-gray-900"
                      }`}
                    >
                      Trámites
                    </Link>
                  </li>
                  <li data-aos="zoom-in" data-aos-delay="2500">
                    <Link
                      href="/vencimientos"
                      className={`block py-2 px-3 rounded hover:bg-gray-100 nav:hover:bg-transparent nav:border-0 nav:p-0 dark:text-white nav:hover:text-[#10207A] dark:hover:bg-gray-700 dark:hover:text-white nav:dark:hover:bg-transparent ${
                        route === "/vencimientos" ||
                        route === "/vencimientos-2023"
                          ? "text-[#10207A]"
                          : "text-gray-900"
                      }`}
                    >
                      Vencimientos
                    </Link>
                  </li>
                  <li data-aos="zoom-in" data-aos-delay="2750">
                    <Link
                      href="/noticias"
                      className={`block py-2 px-3 rounded hover:bg-gray-100 nav:hover:bg-transparent nav:border-0 nav:p-0 dark:text-white nav:hover:text-[#10207A] dark:hover:bg-gray-700 dark:hover:text-white nav:dark:hover:bg-transparent ${
                        route.startsWith("/noticias")
                          ? "text-[#10207A]"
                          : "text-gray-900"
                      }`}
                    >
                      Noticias
                    </Link>
                  </li>
                  <li data-aos="zoom-in" data-aos-delay="3000">
                    <Link
                      href="/contacto"
                      className={`block py-2 px-3 rounded hover:bg-gray-100 nav:hover:bg-transparent nav:border-0 nav:p-0 dark:text-white nav:hover:text-[#10207A] dark:hover:bg-gray-700 dark:hover:text-white nav:dark:hover:bg-transparent ${
                        route === "/contacto"
                          ? "text-[#10207A]"
                          : "text-gray-900"
                      }`}
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
