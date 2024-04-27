import HeaderImage from "@/components/headerImage";
import SeoTramites from "@/components/seo/seoTramites";

const Tramites = () => {
  return (
    <>
      <SeoTramites />
      <main>
        <HeaderImage image="/tramites-min.jpg" />
        <div className="flex w-full justify-center flex-col items-center mb-10">
          <div className="flex justify-center flex-col">
            <section className="main">
              <div className="w-full justify-center flex mt-4">
                <div className="w-full">
                  <section className="articles">
                    <h1 className="mt-6 mb-6 text-xl font-semibold">
                      Gestión de todo tipo de trámites
                    </h1>
                    <article>
                      <h2 className="mt-6 mb-2 text-lg font-semibold opacity-70">
                        Trámites Societarios - Gestión de Sociedades
                      </h2>
                      <p className="mb-4">
                        Ofrecemos la prestación de Servicios de Gestión de
                        sociedades y trámites societarios. El detalle de la
                        Oferta incluye lo siguiente:
                      </p>
                      <ul className="list-disc ml-8 mb-6">
                        <li>
                          Constitución, transformación y disolución de
                          Sociedades Comercialesen IGJ CABA: SAS, SRL, SA.
                        </li>
                        <li>
                          Modificaciones de Estatutos, Autoridades, Composición
                          Accionaria, etc.
                        </li>
                        <li>
                          Trámites ante Inspección General de Justicia. Vistas y
                          seguimiento de expedientes.
                        </li>
                        <li>
                          Publicaciones Art. 60 con designación de autoridades.
                        </li>
                        <li>
                          Mantenimiento actualizado de libros societarios.
                        </li>
                        <li>
                          Preparación y conducción de reunión societaria. Actas.
                          Fijación del Orden del Día.
                        </li>
                        <li>
                          Trámites Sociedades y Sucursales del Exterior:
                          inscripción y servicios generales de bookkeeping.
                        </li>
                        <li>
                          Negociación, confección e implementación de Acuerdos
                          Societarios entre Accionistas, Socios, etc..
                        </li>
                        <li>Confección de Estatutos y Reglamentos.</li>
                      </ul>
                    </article>
                    <article>
                      <h2 className="mt-6 mb-2 text-lg font-semibold opacity-70">
                        Certificados Contables
                      </h2>
                      <p className="mb-4">
                        Emitimos a solicitud de particular interesado distintos
                        Certificados Contables, los cuales son requeridos por
                        diversas instituciones o particulares a efectos de
                        constatar determinada situación económica, financiera,
                        patrimonial, fiscal, etc.. Dichos Certificados son
                        confeccionados por Profesional Contable y legalizados
                        por el Consejo Profesional de Ciencias Económicas de la
                        Ciudad Autónoma de Buenos Aires (CABA).
                      </p>
                      <p className="mb-2 font-semibold opacity-70">
                        Algunos tipos de certificados solicitados en forma
                        corriente son:
                      </p>
                      <ul className="list-disc ml-8 mb-6">
                        <li>Certificado de Sueldos percibidos.</li>
                        <li>Certificado de Ingresos por Ventas.</li>
                        <li>
                          Certificado de Ingresos personales por alquileres,
                          intereses, dividendos, etc.
                        </li>
                        <li>Manifestación de Bienes.</li>
                        <li>Origen lícito de fondos.</li>
                        <li>
                          Informe sobre cumplimiento de obligaciones impositivas
                          y previsionales.
                        </li>
                      </ul>
                    </article>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Tramites;
