/* eslint-disable react/jsx-key */
import { Card } from "flowbite-react";
import Link from "next/link";

const dataCards = [
  {
    link: "/impuestos",
    title: " Liquidación de Impuestos",
    img: "/impuestos-min.jpg",
    description:
      "Brindamos Servicios Contables Integrales en materia impositiva.",
  },
  {
    link: "/sueldos",
    title: "Liquidación de haberes",
    img: "/sueldos-min.jpg",
    description: "Realizamos todo lo referente a la liquidación de sueldos",
  },
  {
    link: "/monotributo",
    title: "Monotributo",
    img: "/monotributo.webp",
    description: "Brindamos asesoramiento integral a monotributistas.",
  },
  {
    link: "/tramites",
    title: "Gestión de trámites",
    img: "/tramites-min.jpg",
    description: "Gestionamos tus inscripciones / altas / bajas.",
  },
  {
    link: "/vencimientos",
    title: "Vencimientos 2023",
    img: "/vencimientos-min.jpg",
    description: "Calendario de vencimientos 2023",
  },
  {
    link: "/contacto",
    title: "Contactos",
    img: "/contactoMini.jpg",
    description:
      "Estamos su disposición para atender sus consultas y asesorarlo de la mejor manera.",
  },
];

const CallToActionCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 mt-12 mb-12 w-full">
        {dataCards.map((item, i) => (
          <Link href={item.link} key={i} className="hover:shadow-2xl">
            <div className="flex justify-center w-full">
              <div className="max-w-lg">
                <Card horizontal={true} imgSrc={item.img} className="md:h-80">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white opacity-90">
                    {item.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {item.description}
                  </p>
                </Card>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CallToActionCard;
