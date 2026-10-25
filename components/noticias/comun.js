/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { Isotipo } from "@/components/brand/Logo";

export const SITE_URL = "https://www.estudio-dillon.com.ar";
export const WHATSAPP = "https://wa.me/541158959823";

export const CATEGORIA_LABELS = {
  impuestos: "Impuestos",
  monotributo: "Monotributo",
  "sueldos-laboral": "Sueldos y laboral",
  pymes: "Pymes",
  economia: "Economía",
  vencimientos: "Vencimientos",
  actualidad: "Actualidad",
};

// Cabecera de color cuando la nota no trae imagen (igual que "Últimas noticias")
const ESTILO_CATEGORIA = {
  impuestos: { fondo: "bg-tinta-50", chip: "bg-tinta-900 text-white", iso: "color", opacidad: "opacity-[0.08]", texto: "text-tinta-900" },
  pymes: { fondo: "bg-tinta-50", chip: "bg-tinta-900 text-white", iso: "color", opacidad: "opacity-[0.08]", texto: "text-tinta-900" },
  actualidad: { fondo: "bg-tinta-50", chip: "bg-tinta-900 text-white", iso: "color", opacidad: "opacity-[0.08]", texto: "text-tinta-900" },
  monotributo: { fondo: "bg-ambar-50", chip: "bg-ambar-500 text-tinta-900", iso: "color", opacidad: "opacity-[0.12]", texto: "text-ambar-800" },
  economia: { fondo: "bg-ambar-50", chip: "bg-ambar-500 text-tinta-900", iso: "color", opacidad: "opacity-[0.12]", texto: "text-ambar-800" },
  "sueldos-laboral": { fondo: "bg-tinta-900", chip: "bg-white text-tinta-900", iso: "blanco", opacidad: "opacity-[0.12]", texto: "text-tinta-900" },
  vencimientos: { fondo: "bg-tinta-900", chip: "bg-white text-tinta-900", iso: "blanco", opacidad: "opacity-[0.12]", texto: "text-tinta-900" },
};
export const estiloCategoria = (cat) => ESTILO_CATEGORIA[cat] || ESTILO_CATEGORIA.impuestos;
export const etiquetaCategoria = (cat) => CATEGORIA_LABELS[cat] || cat || "Actualidad";

export const formatDate = (date) =>
  date ? new Date(date).toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" }) : "";

export function ChipCategoria({ categoria, clase, chico = false }) {
  if (!categoria) return null;
  return (
    <span className={`inline-block font-extrabold tracking-[0.12em] uppercase rounded-lg whitespace-nowrap ${chico ? "text-[10px] md:text-[11px] px-2 py-1" : "text-[11px] md:text-xs px-2.5 py-1.5"} ${clase || estiloCategoria(categoria).chip}`}>
      {etiquetaCategoria(categoria)}
    </span>
  );
}

// Imagen de la nota. Si no tiene, o si la URL externa falla, muestra la cabecera de color.
export function MediaNoticia({ noticia, className = "", conChip = true, chipClassName = "", isoSize = 170, eager = false }) {
  const [rota, setRota] = useState(false);
  const e = estiloCategoria(noticia.categoria);
  if (noticia.imagen_url && !rota) {
    return (
      <div className={`relative overflow-hidden bg-tinta-50 ${className}`}>
        <img src={noticia.imagen_url} alt={noticia.imagen_alt || noticia.titulo} loading={eager ? "eager" : "lazy"}
          onError={() => setRota(true)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        {conChip && <span className={`absolute left-3 top-3 md:left-4 md:top-4 ${chipClassName}`}><ChipCategoria categoria={noticia.categoria} /></span>}
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden ${e.fondo} flex items-end p-4 md:p-[18px] ${className}`}>
      <Isotipo variant={e.iso} size={isoSize} className={`absolute -right-6 -top-5 ${e.opacidad} pointer-events-none`} />
      {conChip && <span className={`relative ${chipClassName}`}><ChipCategoria categoria={noticia.categoria} /></span>}
    </div>
  );
}

export const IconoWhatsApp = ({ className = "w-5 h-5", color = "#0B1426" }) => (
  <svg viewBox="0 0 24 24" className={`${className} shrink-0`} fill={color} aria-hidden="true">
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.3C2.2 6.5 6.6 2.2 12 2.2c2.6 0 5.1 1 7 2.9 1.9 1.9 2.9 4.3 2.9 7 0 5.4-4.4 9.7-9.9 9.7z" />
  </svg>
);

// Card de nota: fila compacta en mobile, card con imagen desde md
export function CardNoticia({ noticia, conBajada = true, h = "md:h-[150px]" }) {
  const e = estiloCategoria(noticia.categoria);
  return (
    <Link href={`/noticias/${noticia.slug}`}
      className="group grid grid-cols-[104px_minmax(0,1fr)] gap-3.5 py-4 border-b border-tinta-100 md:flex md:flex-col md:gap-0 md:py-0 md:border md:rounded-[18px] md:overflow-hidden md:bg-white md:transition-shadow md:duration-300 md:hover:shadow-[0_12px_32px_rgba(20,33,61,0.10)]">
      <MediaNoticia noticia={noticia} className={`h-[88px] rounded-xl md:rounded-none ${h} md:shrink-0`} conChip={true} chipClassName="hidden md:inline-block" isoSize={170} />
      <div className="flex flex-col gap-1.5 md:gap-2.5 md:p-[22px] md:flex-1 min-w-0">
        <span className={`md:hidden text-[11px] font-extrabold tracking-[0.1em] uppercase ${e.texto}`}>{etiquetaCategoria(noticia.categoria)}</span>
        <h3 className="text-base md:text-[19px] font-bold leading-[1.3] text-tinta-900">{noticia.titulo}</h3>
        {conBajada && noticia.descripcion && (
          <p className="hidden md:block text-[15px] leading-[1.55] text-tinta-500 line-clamp-3">{noticia.descripcion}</p>
        )}
        <span className="md:mt-auto md:pt-1 text-xs md:text-[13px] font-semibold text-tinta-500">{formatDate(noticia.fecha_publicacion)}</span>
      </div>
    </Link>
  );
}
