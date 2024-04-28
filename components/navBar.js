/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";

const NavBar = () => {
  const router = useRouter();
  const route = router.asPath;
  const [isOpen, setIsOpen] = useState(false);

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
        className="overflow-hidden fixed top-0 pt-0.4 bg-white p-4 z-50 w-full"
        style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
      >
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/logoDillon2.png"
                className="h-14"
                alt="Flowbite Logo"
              />
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } w-full md:block md:w-auto`}
              id="navbar-default"
              onClick={closeMenu}
              ref={ref}
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li data-aos="zoom-in">
                  <Link
                    href="/"
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:hover:text-[#10207A] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                      route === "/" ? "text-[#10207A]" : "text-gray-900"
                    }`}
                  >
                    Inicio
                  </Link>
                </li>
                <li data-aos="zoom-in" data-aos-delay="500">
                  <Link
                    href="/impuestos"
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:hover:text-[#10207A] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
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
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:hover:text-[#10207A] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                      route === "/sueldos" ? "text-[#10207A]" : "text-gray-900"
                    }`}
                  >
                    Sueldos
                  </Link>
                </li>
                <li data-aos="zoom-in" data-aos-delay="1500">
                  <Link
                    href="/monotributo"
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:hover:text-[#10207A] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
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
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:hover:text-[#10207A] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                      route === "/tramites" ? "text-[#10207A]" : "text-gray-900"
                    }`}
                  >
                    Trámites
                  </Link>
                </li>
                <li data-aos="zoom-in" data-aos-delay="2500">
                  <Link
                    href="/vencimientos"
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:hover:text-[#10207A] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                      route === "/vencimientos" ||
                      route === "/vencimientos-2023"
                        ? "text-[#10207A]"
                        : "text-gray-900"
                    }`}
                  >
                    Vencimientos
                  </Link>
                </li>
                <li data-aos="zoom-in" data-aos-delay="3000">
                  <Link
                    href="/contacto"
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:hover:text-[#10207A] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                      route === "/contacto" ? "text-[#10207A]" : "text-gray-900"
                    }`}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
