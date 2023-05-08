/* eslint-disable @next/next/no-img-element */
import HeaderImage from "../components/headerImage";
import SeoContactos from "@/components/seo/seoContactos";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Contacto = () => {
  return (
    <>
      <SeoContactos />
      <main>
        <HeaderImage image="/imageContact.jpg" />
        <div className="flex w-full justify-center flex-col items-center">
          <div className="flex justify-center flex-col w-11/12">
            <section className="articles">
              <article>
                <div className="w-full justify-center flex mt-4">
                  <div className="w-full 2xl:w-10/12">
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
                      o por intermedio nuestras redes sociales, nos
                      comunicaremos inmediatamente para concretar una
                      entrevista.
                    </p>
                    <br />
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default Contacto;
