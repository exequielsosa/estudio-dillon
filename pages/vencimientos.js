import ModalImage from "react-modal-image";
import Taxes from "../components/taxes";
import SeoVencimientos from "../components/seo/seoVencimientos";

const Vencimientos = () => {
  return (
    <>
      <SeoVencimientos />
      <main>
        <div className="flex w-full justify-center flex-col items-center">
          <div className="flex justify-center flex-col w-11/12">
            <div className="flex w-full justify-center flex-col items-center mt-6">
              <ModalImage
                small="/calendarioVencimientos2023SmallR.png"
                large="/calendarioVencimientos2023.png"
                alt="Vencimientos 2023"
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
