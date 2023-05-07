import Head from "next/head";
import ModalImage from "react-modal-image";
import Taxes from "../components/taxes";

const Vencimientos = () => {
  return (
    <>
      <Head>
        <title>
          Vencimientos - Estudio Contable Dillon | Estudio Contable Integral
        </title>
        <meta
          name="description"
          content="Te brindamos un detalle de todos los vencimientos de la Afip correspondientes al año 2023."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://estudio-dillon.com.ar/vencimientos"
        />
      </Head>
      <main>
        <div className="flex w-full justify-center flex-col items-center">
          <div className="flex justify-center flex-col w-11/12">
            <div className="flex w-full justify-center flex-col items-center mt-6">
              <ModalImage
                small="/calendarioVencimientos2023SmallR.png"
                large="/calendarioVencimientos2023.png"
                alt="Hello World!"
              />
            </div>
            <br />
            <article>
              <div className="w-full justify-center flex mt-4">
                <div className="w-full 2xl:w-10/12">
                  <h1 className="mb-4 text-xl font-semibold">
                    Calendario de vencimientos impositivos para el 2023:
                  </h1>
                </div>
              </div>
              <Taxes />
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default Vencimientos;
