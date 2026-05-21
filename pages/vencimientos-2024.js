import ModalImage from "react-modal-image";
import Taxes24 from "../components/taxes24";
import SeoVencimientos2024 from "../components/seo/seoVencimientos2024";
import Link from "next/link";

const Vencimientos = () => {
  return (
    <>
      <SeoVencimientos2024 />
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
                small="/v24-modified.png"
                large="/ven2024.png"
                alt="Vencimientos 2024"
              />
            </div>
            <br />
            <article>
              <div className="w-full justify-center flex mt-4">
                <div className="w-full">
                  <h1 className="mb-4 text-2xl font-semibold">
                    Calendario de vencimientos impositivos para el 2024:
                  </h1>
                </div>
              </div>
              <Taxes24 />
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default Vencimientos;
