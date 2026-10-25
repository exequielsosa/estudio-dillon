import { useState } from "react";

// Mismos anclas que antes (#iva, #bp, ...) para no romper links ni sitelinks de Google.
export const SECCIONES = [
  { id: "iva", nombre: "Impuesto al Valor Agregado (IVA)" },
  { id: "bp", nombre: "Bienes Personales" },
  { id: "ig", nombre: "Impuesto a las Ganancias" },
  { id: "pip", nombre: "Percepciones de impuesto a las ganancias y bienes personales" },
  { id: "cc", nombre: "Cuarta Categoría" },
  { id: "cas", nombre: "Cargas sociales y aportes jubilatorios" },
  { id: "ps", nombre: "Participaciones societarias, autoridades y apoderados" },
  { id: "sicore", nombre: "Retenciones y percepciones (SICORE / SIRE)" },
  { id: "mono", nombre: "Régimen Simplificado (Monotributo)" },
  { id: "ii", nombre: "Impuestos internos" },
  { id: "cm", nombre: "Convenio Multilateral" },
  { id: "fc", nombre: "Fondo Cooperativo" },
  { id: "vaf", nombre: "Vencimientos del Alivio Fiscal" },
];

const irA = (e, id, alTerminar) => {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  const top = el.getBoundingClientRect().top + window.scrollY - 100;
  window.scrollTo({ top, behavior: "smooth" });
  history.replaceState(null, "", `#${id}`);
  alTerminar && alTerminar();
};

const Lista = ({ alElegir }) => (
  <ul className="flex flex-col gap-0.5">
    {SECCIONES.map((s) => (
      <li key={s.id}>
        <a href={`#${s.id}`} onClick={(e) => irA(e, s.id, alElegir)}
          className="block px-2.5 py-2 rounded-lg text-sm font-semibold text-tinta-700 hover:bg-tinta-50 hover:text-tinta-900">
          {s.nombre}
        </a>
      </li>
    ))}
  </ul>
);

export default function IndiceContenidos() {
  const [abierto, setAbierto] = useState(false);
  return (
    <>
      {/* Escritorio: índice fijo al costado */}
      <nav aria-label="Contenidos" className="hidden lg:block sticky top-24 border border-tinta-100 rounded-2xl p-5">
        <h2 className="mb-3 text-xs font-bold tracking-[0.2em] text-tinta-500">CONTENIDOS</h2>
        <Lista />
      </nav>

      {/* Mobile: desplegable */}
      <nav aria-label="Contenidos" className="lg:hidden border border-tinta-100 rounded-[14px]">
        <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="indice-mobile"
          className="w-full flex items-center justify-between px-[18px] py-4 text-[15px] font-bold text-tinta-900">
          Contenidos · {SECCIONES.length} secciones
          <svg viewBox="0 0 24 24" className={`w-5 h-5 text-tinta-900 transition-transform ${abierto ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
        </button>
        <div id="indice-mobile" hidden={!abierto} className="px-2 pb-3">
          <Lista alElegir={() => setAbierto(false)} />
        </div>
      </nav>
    </>
  );
}
