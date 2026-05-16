import { Carousel } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

const CarouselHome = () => {
  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-72 sm:h-[22rem] md:h-[26rem] lg:h-[28rem] xl:h-[30rem] 2xl:h-[32rem] [&_*]:!rounded-none [&_.indiana-scroll-container]:!overflow-hidden">
      <Carousel
        slideInterval={5000}
        theme={{
          scrollContainer: {
            base: "flex h-full snap-mandatory overflow-hidden scroll-smooth",
            snap: "snap-x",
          },
        }}
      >
        <Link href="/impuestos">
          <Image
            src="/header/impuestos.png"
            alt="Liquidación de Impuestos - Estudio Contable Dillon"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
            sizes="100vw"
          />
          <span className="absolute top-1/2 left-1/2 text-2xl font-bold text-fuchsia-600 -translate-x-1/2 -translate-y-1/2 sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl dark:text-gray-800 bg-indigo-200 opacity-75 font-titillium tracking-wider">
            LIQUIDACION DE IMPUESTOS
          </span>
        </Link>
        <Link href="/sueldos">
          <Image
            src="/stock/stock10.png"
            alt="Liquidación de Sueldos y Jornales - Estudio Contable Dillon"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            sizes="100vw"
          />
          <span className="absolute top-1/2 left-1/2 text-2xl font-bold text-fuchsia-600 -translate-x-1/2 -translate-y-1/2 sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl dark:text-gray-800 bg-indigo-200 opacity-75 font-titillium tracking-wider">
            LIQUIDACION DE HABERES
          </span>
        </Link>
        <Link href="/tramites">
          <Image
            src="/tramites.jpg"
            alt="Gestión de Trámites AFIP - Estudio Contable Dillon"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            sizes="100vw"
          />
          <span className="absolute top-1/2 left-1/2 text-2xl font-bold text-fuchsia-600 -translate-x-1/2 -translate-y-1/2 sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl dark:text-gray-800 bg-indigo-200 opacity-75 font-titillium tracking-wider">
            GESTION DE TRAMITES
          </span>
        </Link>
        <Link href="/vencimientos">
          <Image
            src="/vencimientos.jpg"
            alt="Calendario de Vencimientos AFIP 2026 - Estudio Contable Dillon"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            sizes="100vw"
          />
          <span className="absolute top-1/2 left-1/2 text-2xl font-bold text-fuchsia-600 -translate-x-1/2 -translate-y-1/2 sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl dark:text-gray-800 bg-indigo-200 opacity-75 font-titillium tracking-wider">
            VENCIMIENTOS
          </span>
        </Link>
        <Link href="/monotributo">
          <Image
            src="/header/monotributo.png"
            alt="Monotributo liquidación - Estudio Contable Dillon"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            sizes="100vw"
          />
          <span className="absolute top-1/2 left-1/2 text-2xl font-bold text-fuchsia-600 -translate-x-1/2 -translate-y-1/2 sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl dark:text-gray-800 bg-indigo-200 opacity-75 font-titillium tracking-wider">
            MONOTRIBUTO
          </span>
        </Link>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
