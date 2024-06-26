import ModalImage from "react-modal-image";
import Taxes from "../components/taxes";
import SeoVencimientos from "../components/seo/seoVencimientos";
import Link from "next/link";

const Vencimientos = () => {
  return (
    <>
      <SeoVencimientos />
      <main>
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
                  <h1 className="mb-4 text-xl font-semibold">
                    Calendario de vencimientos impositivos para el 2024:
                  </h1>
                </div>
              </div>
              <Taxes />
            </article>
          </div>
        </div>
        <div className="flex w-full justify-center mt-10">
          <Link
            href="/vencimientos-2023"
            className="text-md font-semibold opacity-70 decoration-gray-500 hover:text-blue-500"
          >
            Ver vencimientos 2023
          </Link>
        </div>
      </main>
    </>
  );
};

export default Vencimientos;
