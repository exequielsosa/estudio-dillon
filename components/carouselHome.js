/* eslint-disable @next/next/no-img-element */
import { Carousel } from "flowbite-react";
import Link from "next/link";

const CarouselHome = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <Link href="/impuestos">
          <img src="/impuestos.jpg" alt="Liquidación de Impuestos" />
          <span class="absolute top-1/2 left-1/2 text-2xl font-bold text-fuchsia-600 -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800 bg-indigo-200 opacity-75 font-['Titillium_Web'] tracking-wider">
            LIQUIDACION DE IMPUESTOS
          </span>
        </Link>
        <Link href="/sueldos">
          <img src="sueldos.jpg" alt="Liquidacion de Sueldos" />
          <span class="absolute top-1/2 left-1/2 text-2xl font-bold text-fuchsia-600 -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800 bg-indigo-200 opacity-75 font-['Titillium_Web'] tracking-wider">
            LIQUIDACION DE HABERES
          </span>
        </Link>
        <Link href="/tramites">
          <img src="tramites.jpg" alt="Tramites" />
          <span class="absolute top-1/2 left-1/2 text-2xl font-bold text-fuchsia-600 -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800 bg-indigo-200 opacity-75 font-['Titillium_Web'] tracking-wider">
            GESTION DE TRAMITES
          </span>
        </Link>
        <Link href="/vencimientos">
          <img src="/vencimientos.jpg" alt="Vencimientos" />
          <span class="absolute top-1/2 left-1/2 text-2xl font-bold text-fuchsia-600 -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800 bg-indigo-200 opacity-75 font-['Titillium_Web'] tracking-wider">
            VENCIMIENTOS
          </span>
        </Link>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
