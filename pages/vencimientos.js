import Head from "next/head";
import HeaderImage from "@/components/headerImage";
import ModalImage from "react-modal-image";

const Vencimientos = () => {
  return (
    <>
      <Head>
        <title>Estudio Contable Dillon - Vencimientos</title>
        <meta name="description" content="La mejor atención y asesoramiento" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>        
        <div className="flex w-full justify-center flex-col items-center">
          <div className="flex justify-center flex-col w-11/12">
            <article>
              <h1 className="mt-6 mb-6 text-xl font-semibold">
                Calendario de vencimientos impositivos para el 2023
              </h1>

              <div className="flex w-full justify-center flex-col items-center mt-6">

              <ModalImage
                small="/calendarioVencimientos2023SmallR.png"
                large="/calendarioVencimientos2023.png"
                alt="Hello World!"
              />
              </div>
              <br />
              <div align="center" className="vencimientos"></div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default Vencimientos;
