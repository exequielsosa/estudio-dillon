import HeaderImage from "@/components/headerImage";
import SeoImpuestos from "@/components/seo/seoImpuestos";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Impuestos = () => {
  return (
    <>
      <SeoImpuestos />
      <main>
        <HeaderImage image="/impuestos-min.jpg" />
        <div className="flex w-full justify-center flex-col items-center mb-10">
          <div className="flex justify-center flex-col w-11/12">
            <section className="articles">
              <article>
                <div className="w-full justify-center flex mt-4">
                  <div className="w-full 2xl:w-10/12">
                    <h1 className="mt-6 mb-6 text-xl font-semibold">
                      Servicios Impositivos
                    </h1>
                    <h2 className="mt-6 mb-6 text-lg font-semibold opacity-70">
                      Impuestos y DDJJ de presentación
                    </h2>
                    <ul className="list-disc ml-8">
                      <li>Impuesto al Valor Agregado</li>
                      <li>Libro IVA - Ventas y IVA - Compras</li>
                      <li>DDJJ de Ganancias y Bienes Personales</li>
                      <li>Impuesto a la Renta Financiera</li>
                      <li>Impuesto sobre los Ingresos Brutos</li>
                    </ul>
                  </div>
                </div>
              </article>
              <article>
                <div className="w-full justify-center flex mt-4">
                  <div className="w-full 2xl:w-10/12">
                    <h2 className="mt-8 mb-6 text-lg font-semibold opacity-70">
                      Gestiones
                    </h2>
                    <ul className="list-disc ml-8">
                      <li>
                        Regulación de deudas impositivas y/o previsionales de
                        plazo vencido.
                      </li>
                      <li>Confección de planes de facilidades de pago.</li>
                      <li>Reintegro por exportaciones.</li>
                      <li>
                        Devoluciones, transferencias y/o compensaciones con
                        deudas exigibles o futuros ingresos.
                      </li>
                      <li>
                        Inspecciones, minimización de los efectos y
                        consideración de medidas preventivas.
                      </li>
                      <li>
                        Asesoramiento y patrocinio en materia contencioso
                        tributaria, tanto en la instancia administrativa como en
                        la instancia judicial.
                      </li>
                    </ul>
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

export default Impuestos;
