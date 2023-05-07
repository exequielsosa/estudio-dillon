import Head from "next/head";
import HeaderImage from "@/components/headerImage";

const Monotributo = () => {
  return (
    <>
      <Head>
      <title>
          Monotributo - Estudio Contable Dillon | Estudio Contable
          Integral
        </title>
        <meta name="description" content="En el caso de las Pequeños emprendimientos, cada caso es particular, por lo que se le brinda un trato personalizado y con la mayor rigurosidad profesional, con la experiencia adquirida de otras empresas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://estudio-dillon.com.ar/monotributo" />
      </Head>
      <main>
        <HeaderImage image="/monotributo.webp" />
        <div className="flex w-full justify-center flex-col items-center mb-10">
          <div className="flex justify-center flex-col w-11/12">
            <article>
              <h1 className="mt-6 mb-6 text-xl font-semibold">
                Servicios especiales para Monotributistas
              </h1>
              <p>
                Brindamos asesoramiento integral a monotributistas. Realizamos
                un seguimiento personalizado de la situación de nuestros
                clientes, manteniendo actualizado el monto de facturación a fin
                de adelantarse a recategorizaciones o exclusiones.
                <br />
                <br /> Contamos con herramientas web que permiten un seguimiento
                online de las gestiones realizadas por el estudio. <br />
                <br /> Ofrecemos la posibilidad de realizar las facturas
                electrónicas a través de webservices.
                <br />
                <br />
                Ayudamos al cumplimiento de tus obligaciones con AFIP y otros
                organismos, evitando el pago de multas por incumplimientos y
                aprovechando las facilidades vigentes para cada tipo de
                actividad o forma jurídica..
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
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default Monotributo;
