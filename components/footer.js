import { Footer } from "flowbite-react";
import Image from "next/image";

const FooterLayout = () => {
  return (
    <div className="mb-20">
      <Footer container={true}>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mb-6">
              <Footer.Brand
                href="/"
                src="/mini.jpg"
                alt="Estudio Dillon"
                name="Estudio Dillon"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 lg:grid-cols-3 sm:gap-4 md:max-w-2xl ">
              <div>
                <Footer.Title title="Nosotros" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="/contacto"><p>Contactos</p></Footer.Link>
                  <Footer.Link href="https://wa.me/541158959823"><p>WhatsApp</p></Footer.Link>
                  <Footer.Link href="mailto:estudiodillonsosa@gmail.com?Subject:Consulta%20a%20Estudio%20Dillon"><p>email</p></Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Seguinos" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="http://www.facebook.com/">
                    <p>Facebook</p>
                  </Footer.Link>
                  <Footer.Link href="http://www.instagram.com/maugexxiv">
                    <p>Instagram</p>
                  </Footer.Link>
                  <Footer.Link href="https://www.linkedin.com/in/maria-eugenia-dillon-05346113/">
                    <p>Linkedin</p>
                  </Footer.Link>
                  <Footer.Link href="https://twitter.com/maugexxiv?lang=es">
                    <p>Twitter</p>
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="SECCIONES" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="/impuestos">
                    <p>Liquidacion de Impuestos</p>
                  </Footer.Link>
                  <Footer.Link href="/sueldos">
                    <p>Liquidacion de Haberes</p>
                  </Footer.Link>
                  <Footer.Link href="/monotributo">
                    <p>Monotributo</p>
                  </Footer.Link>
                  <Footer.Link href="/tramites">
                    <p>Gestión de tramites</p>
                  </Footer.Link>
                  <Footer.Link href="/vencimientos">
                    <p>Vencimientos</p>
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="https://www.linkedin.com/in/exequielsosa/"
              by="Exequiel I Sosa™"
              year={2023}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <a href="http://www.facebook.com/" target="_blank">
                <Image
                  src="/assets/facebook.svg"
                  width="24"
                  height="24"
                  style={{ opacity: 0.6 }}
                  alt="facebook"
                />
              </a>
              <a href="http://www.instagram.com/maugexxiv" target="_blank">
                <Image
                  src="/assets/instagram.svg"
                  width="24"
                  height="24"
                  style={{ opacity: 0.6 }}
                  alt="instagram"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/maria-eugenia-dillon-05346113/"
                target="_blank"
              >
                <Image
                  src="/assets/linkedin.svg"
                  width="24"
                  height="24"
                  style={{ opacity: 0.6 }}
                  alt="linkedin"
                />
              </a>
              <a href="https://twitter.com/maugexxiv?lang=es" target="_blank">
                <Image
                  src="/assets/twitter.svg"
                  width="24"
                  height="24"
                  style={{ opacity: 0.6 }}
                  alt="twitter"
                />
              </a>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterLayout;
