import CarouselHome from "@/components/carouselHome";
import SeoHome from "@/components/seo/seoHome";

const Home = () => {
  return (
    <>
      {/* <Head>
        <title>Estudio Contable Dillon | Estudio Contable Integral</title>
        <meta
          name="description"
          content="Soluciones Contables Integrales, Brindamos servicios contables profesionales a la medida de sus requerimientos. Servicios Legales, Corporativos, Derecho Empresario, Conflictos Judiciales y Derecho Laboral y Previsional. Servicios Contables para PyMEs. Analizamos puntos críticos del emprendimiento con el objetivo de brindar mejoras a la empresa para minimizar posibles contingencias. Brindamos soluciones contables integrales a empresas"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://estudio-dillon.com.ar" />
      </Head> */}
      <SeoHome />
      <main>
        <CarouselHome />

        <section>
          <div className="flex w-full justify-center flex-col items-center">
            <div className="flex justify-center flex-col w-11/12">
              <article>
                <div className="w-full justify-center flex mt-4">
                  <div className="w-full 2xl:w-10/12">
                    <h2 className="mt-6 text-xl font-semibold">
                      Estudio Contable Dillon
                    </h2>
                    <br />
                    <p>
                      En Estudio Contable Dillon entendemos que preferís
                      dedicarle la menor cantidad de tiempo a tus obligaciones
                      impositivas, para poder concentrarte en ganar nuevos
                      negocios y disfrutar de tu tiempo libre. Por eso nuestro
                      principal objetivo es darte la tranquilidad de que tus
                      impuestos están en orden. <br />
                      Trabajamos con cientos de monotributistas, startups y
                      empresas de todas las formas y tamaños de todo el país.
                      Nos hemos esforzado mucho en escuchar sus necesidades,
                      invertir en tecnología y capacitar a nuestros contadores
                      para brindarles un alto nivel de servicio.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
