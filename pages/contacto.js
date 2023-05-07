/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import HeaderImage from "../components/headerImage";

const Contacto = () => {
  return (
    <>
      <Head>
        <title>
          Contacto - Estudio Contable Dillon | Estudio Contable Integral
        </title>
        <meta
          name="description"
          content="Desde hace mas de veinte años brindamos soluciones contables integrales a empresas, instituciones y particulares. Contáctenos aquí y comencemos hoy mismo."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://estudio-dillon.com.ar/contacto" />
      </Head>
      <main>
        <HeaderImage image="/imageContact.jpg" />
        <div className="flex w-full justify-center flex-col items-center">
          <div className="flex justify-center flex-col w-11/12">
            <section className="articles">
              <article>
                <h1 className="mt-6 text-xl font-semibold">
                  Comunicate con nosotros
                </h1>
                <br />
                <p>
                  En Estudio Dillon estamos su disposición para atender sus
                  consultas y asesorarlo de la mejor manera.
                </p>
                <p>
                  Contactese con nosotros por nuestro{" "}
                  <a
                    href="mailto:estudiodillonsosa@gmail.com?Subject:Consulta%20a%20Estudio%20Dillon"
                    className="text-blue-600"
                  >
                    mail
                  </a>{" "}
                  o por intermedio nuestras redes sociales, nos comunicaremos
                  inmediatamente para concretar una entrevista.
                </p>
                <br />
              </article>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

// export async function getServerSideProps() {
//   return {
//     props: {},
//   };
// }

export default Contacto;
