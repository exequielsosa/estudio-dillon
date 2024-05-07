import CarouselHome from "@/components/carouselHome";
import SeoHome from "@/components/seo/seoHome";

const Home = () => {
  return (
    <>
      <SeoHome />
      <main>
        <CarouselHome />
        <section>
          <div className="flex w-full justify-center flex-col items-center">
            <div className="flex justify-center flex-col">
              <article>
                <div className="w-full justify-center flex mt-4">
                  <div className="w-full">
                    <h1 className="mt-6 text-xl font-semibold">
                      Estudio Contable Dillon
                    </h1>
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
