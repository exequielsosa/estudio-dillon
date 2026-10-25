import Link from "next/link";
import Image from "next/image";

// Accesos a los servicios (bloque global, aparece en todas las páginas).
const SERVICIOS = [
  { link: "/impuestos", title: "Liquidación de impuestos", img: "/stock/stock16.jpg", description: "Brindamos servicios contables integrales en materia impositiva." },
  { link: "/sueldos", title: "Liquidación de haberes", img: "/stock/stock09.jpg", description: "Realizamos todo lo referente a la liquidación de sueldos." },
  { link: "/monotributo", title: "Monotributo", img: "/categorias/monotributo.jpg", description: "Brindamos asesoramiento integral a monotributistas." },
  { link: "/tramites", title: "Gestión de trámites", img: "/header/monotributo.jpg", description: "Gestionamos tus inscripciones, altas y bajas." },
  { link: "/vencimientos", title: "Vencimientos 2026", img: "/vencimientos.jpg", description: "Calendario de vencimientos por terminación de CUIT.", etiqueta: "Calendario 2026", ancho: true },
  { link: "/contacto", title: "Contacto", img: "/stock/stock51.jpg", description: "Estamos a tu disposición para atender tus consultas y asesorarte de la mejor manera.", ancho: true },
];

// En mobile, Vencimientos va primero (ancho completo) y Contacto último (ancho completo).
const ORDEN_MOBILE = { "/vencimientos": "order-first", "/contacto": "order-last" };

const CallToActionCard = () => {
  return (
    <section className="w-full mt-14 md:mt-20" aria-labelledby="titulo-servicios">
      <p className="text-xs md:text-[13px] font-bold tracking-[0.2em] text-ambar-800">SERVICIOS</p>
      <h2 id="titulo-servicios" className="mt-1.5 md:mt-2 text-[26px] md:text-[34px] font-extrabold tracking-tight text-tinta-900">
        ¿En qué te podemos ayudar?
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-5 mt-5 md:mt-7">
        {SERVICIOS.map((s) => (
          <Link key={s.link} href={s.link}
            className={`group relative block h-[190px] md:h-[300px] rounded-2xl md:rounded-[18px] overflow-hidden bg-tinta-900 ${
              s.ancho ? `col-span-2 lg:col-span-1 ${ORDEN_MOBILE[s.link]} lg:order-none` : ""
            }`}>
            <Image src={s.img} alt="" fill sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,20,38,0)] from-25% to-[rgba(11,20,38,0.9)]" aria-hidden="true" />
            {s.etiqueta && (
              <span className="absolute top-3 left-3 md:top-4 md:left-4 text-[10px] md:text-[11px] font-extrabold tracking-[0.12em] uppercase text-tinta-900 bg-ambar-500 px-2 py-1.5 md:px-2.5 rounded-lg">
                {s.etiqueta}
              </span>
            )}
            <div className="absolute left-3.5 right-3.5 bottom-3.5 md:left-6 md:right-6 md:bottom-[22px] flex flex-col gap-1 md:gap-1.5">
              <span className="text-base md:text-[22px] font-extrabold leading-tight tracking-tight text-white">{s.title}</span>
              <span className="hidden md:block text-[15px] leading-normal text-tinta-100">{s.description}</span>
              <span className="mt-0 md:mt-1 text-[13px] md:text-sm font-bold text-ambar-500">Ver más →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CallToActionCard;
