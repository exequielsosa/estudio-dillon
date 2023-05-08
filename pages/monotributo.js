import HeaderImage from "@/components/headerImage";
import SeoMonotributo from "@/components/seo/seoMonotributo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Monotributo = () => {
  return (
    <>
      <SeoMonotributo />
      <main>
        <HeaderImage image="/monotributo.webp" />
        <div className="flex w-full justify-center flex-col items-center mb-10">
          <div className="flex justify-center flex-col w-11/12">
            <article>
              <div className="w-full justify-center flex mt-4">
                <div className="w-full 2xl:w-10/12">
                  <h1 className="mt-6 mb-6 text-xl font-semibold">
                    Servicios especiales para Monotributistas
                  </h1>
                  <p>
                    Brindamos asesoramiento integral a monotributistas.
                    Realizamos un seguimiento personalizado de la situación de
                    nuestros clientes, manteniendo actualizado el monto de
                    facturación a fin de adelantarse a recategorizaciones o
                    exclusiones.
                    <br />
                    <br /> Contamos con herramientas web que permiten un
                    seguimiento online de las gestiones realizadas por el
                    estudio. <br />
                    <br /> Ofrecemos la posibilidad de realizar las facturas
                    electrónicas a través de webservices.
                    <br />
                    <br />
                    Ayudamos al cumplimiento de tus obligaciones con AFIP y
                    otros organismos, evitando el pago de multas por
                    incumplimientos y aprovechando las facilidades vigentes para
                    cada tipo de actividad o forma jurídica..
                  </p>
                  <h2 className="mt-6 mb-4 text-lg font-semibold opacity-70">
                    Trámites para Monotributistas:
                  </h2>
                  <ul className="list-disc ml-8">
                    <li>Alta de monotributo</li>
                    <li>Recategorización</li>
                    <li>Seguimiento online de tu facturación</li>
                    <li>Convenio Multilateral</li>
                    <li>Ingresos Brutos</li>
                  </ul>
                </div>
              </div>
            </article>
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

export default Monotributo;
