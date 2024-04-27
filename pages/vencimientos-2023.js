import ModalImage from "react-modal-image";
import Taxes23 from "../components/taxes23";
import SeoVencimientos from "../components/seo/seoVencimientos";
import Link from "next/link";

const Vencimientos = () => {
  return (
    <>
      <SeoVencimientos />
      <main>
        <div className="flex w-full justify-left">
          <Link
            href="/vencimientos"
            className="text-md font-semibold opacity-70 decoration-gray-500 hover:text-blue-500 flex"
          >
            <img src="/Back_Arrow.svg" className="flex w-[24px] mr-2" />
            Volver
          </Link>
        </div>
        <div className="flex w-full justify-center flex-col items-center">
          <div className="flex justify-center flex-col">
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
                <div className="w-full">
                  <h1 className="mb-4 text-xl font-semibold">
                    Calendario de vencimientos impositivos para el 2023:
                  </h1>
                </div>
              </div>
              <Taxes23 />
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default Vencimientos;
