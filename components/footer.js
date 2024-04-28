import Link from "next/link";

const FooterLayout = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t-[#10207A] border-[3px]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <img
                src="/logoDillon2.png"
                className="h-10 me-3"
                alt="logodillon"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                NOSOTROS
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/contacto" className="hover:underline">
                    Contactos
                  </Link>
                </li>
                <li className="mb-4">
                  <a
                    href="https://wa.me/541158959823"
                    target="_blank"
                    className="hover:underline"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:estudiodillonsosa@gmail.com?Subject:Consulta%20a%20Estudio%20Dillon"
                    className="hover:underline"
                  >
                    email
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                SEGUINOS
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="http://www.facebook.com/"
                    target="_blank"
                    className="hover:underline "
                  >
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="http://www.instagram.com/maugexxiv"
                    target="_blank"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/maria-eugenia-dillon-05346113/"
                    target="_blank"
                    className="hover:underline "
                  >
                    Linkedin
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://twitter.com/maugexxiv?lang=es"
                    target="_blank"
                    className="hover:underline "
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                SECCIONES
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/impuestos" className="hover:underline">
                    Liquidacion de Impuestos
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/sueldos" className="hover:underline">
                    Liquidacion de Haberes
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/monotributo" className="hover:underline">
                    Monotributo
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/tramites" className="hover:underline">
                    Gestión de tramites
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/vencimientos" className="hover:underline">
                    Vencimientos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-[#10207A] sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a
              href="https://www.exequielsosa.com.ar/"
              target="_blank"
              className="hover:underline"
            >
              Exequiel Sosa™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
