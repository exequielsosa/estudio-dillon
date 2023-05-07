import Head from "next/head";
import HeaderImage from "@/components/headerImage";

const Sueldos = () => {
  return (
    <>
      <Head>
        <title>
          Liquidacion de Sueldos - Estudio Contable Dillon | Estudio Contable
          Integral
        </title>
        <meta
          name="description"
          content="La tercerización de la liquidación de sueldos en las empresas ayuda a las mismas en no tener que estar actualizándose en la normativa y problemática laboral"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://estudio-dillon.com.ar/sueldos" />
      </Head>
      <main>
        <HeaderImage image="/sueldos.jpg" />
        <div className="flex w-full justify-center flex-col items-center mb-10">
          <div className="flex justify-center flex-col w-11/12">
            <section className="articles">
              <article>
                <h1 className="mt-6 mb-6 text-xl font-semibold">
                  Servicios de liquidacion de haberes
                </h1>
                <h2 className="mt-6 mb-2 text-lg font-semibold opacity-70">
                  Asesoramiento en liquidación de haberes y administración de
                  personal
                </h2>
                <p>
                  Este servicio comprende la realización de un amplio abanico de
                  trámites y tareas inherentes a los procesos de incorporación,
                  administración y egreso del personal de su empresa. Nosotros
                  nos encargamos de la ejecución de estos procedimientos, o bien
                  le ofrecemos asesoramiento sobre cómo llevarlos a cabo de una
                  forma idónea para su compañía.
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
                    Determinación del convenio colectivo de trabajo a aplicar
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
                    Liquidación y presentación de SUSS y demás cargas sociales
                  </li>
                  <li>
                    Entrega mensual o quincenal de recibos y boletas de depósito
                    para pagar las cargas sociales
                  </li>
                </ul>
              </article>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Sueldos;
