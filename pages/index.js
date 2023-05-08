import CarouselHome from "@/components/carouselHome";
import SeoHome from "@/components/seo/seoHome";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Home = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <SeoHome />
      <main>
        <CarouselHome />

        <section>
          <div className="flex w-full justify-center flex-col items-center">
            <div className="flex justify-center flex-col w-11/12">
              <article>
                <div className="w-full justify-center flex mt-4">
                  <div className="w-full 2xl:w-10/12">
                    <p>{t("hello")}</p>
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

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
