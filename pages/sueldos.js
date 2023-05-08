import HeaderImage from "@/components/headerImage";
import SeoSueldos from "@/components/seo/seoSueldos";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Sueldos = () => {
  return (
    <>
      <SeoSueldos />
      <main>
        <HeaderImage image="/sueldos-min.jpg" />
        <div className="flex w-full justify-center flex-col items-center mb-10">
          <div className="flex justify-center flex-col w-11/12">
            <section className="articles">
              <article>
                <div className="w-full justify-center flex mt-4">
                  <div className="w-full 2xl:w-10/12">
                    <h1 className="mt-6 mb-6 text-xl font-semibold">
                      Servicios de liquidacion de haberes
                    </h1>
                    <h2 className="mt-6 mb-2 text-lg font-semibold opacity-70">
                      Asesoramiento en liquidación de haberes y administración
                      de personal
                    </h2>
                    <p>
                      Este servicio comprende la realización de un amplio
                      abanico de trámites y tareas inherentes a los procesos de
                      incorporación, administración y egreso del personal de su
                      empresa. Nosotros nos encargamos de la ejecución de estos
                      procedimientos, o bien le ofrecemos asesoramiento sobre
                      cómo llevarlos a cabo de una forma idónea para su
                      compañía.
                    </p>
                    <br />
                    <h3 className="mt-1 mb-2 text-lg font-semibold opacity-70">
                      Incorporación de personal:
                    </h3>
                    <ul className="list-disc ml-8">
                      <li>Trámite de obtención de CUIL</li>
                      <li>Obtención de exámenes preocupacionales</li>
                      <li>Obtención de alta temprana</li>
                      <li>
                        Determinación del convenio colectivo de trabajo a
                        aplicar
                      </li>
                      <li>Confección de legajo del empleado</li>
                    </ul>
                    <br />
                    <h3 className="mt-1 mb-2 text-lg font-semibold opacity-70">
                      Administración de personal:
                    </h3>
                    <ul className="list-disc ml-8">
                      <li>Inscripciones como empleador</li>
                      <li>
                        Inscripciones del empleador en obra social o sindicato
                      </li>
                      <li>
                        Cálculo de haberes (esto incluye todos los convenios
                        colectivos de trabajo)
                      </li>
                      <li>Cálculo de impuestos a las ganancias</li>
                      <li>
                        Estudio de beneficios promocionales (rebaja de cargas
                        sociales)
                      </li>
                      <li>Confección de recibos de sueldos</li>
                      <li>
                        Confección y rubricación de libro de sueldos y jornales
                      </li>
                      <li>
                        Liquidación y presentación de SUSS y demás cargas
                        sociales
                      </li>
                      <li>
                        Entrega mensual o quincenal de recibos y boletas de
                        depósito para pagar las cargas sociales
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

export default Sueldos;
