import { Children, cloneElement, createContext, isValidElement, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Isotipo } from "@/components/brand/Logo";

export const WA = "https://wa.me/541158959823";
export const waCon = (texto) => `${WA}?text=${encodeURIComponent(texto)}`;

// Link dentro del texto (mismo estilo en todo el sitio)
export const LINK = "font-bold text-tinta-900 underline decoration-ambar-500 decoration-2 underline-offset-[3px] hover:text-tinta-700";

// Las fotos de stock traen una marca chica abajo a la derecha: la imagen se agranda
// un 10% desde arriba a la izquierda para dejarla fuera del recorte.
const SIN_MARCA = "object-cover scale-[1.1] origin-top-left";

export const IconoWhatsApp = ({ className = "w-5 h-5", color = "#0B1426" }) => (
  <svg viewBox="0 0 24 24" className={`${className} shrink-0`} fill={color} aria-hidden="true">
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.3C2.2 6.5 6.6 2.2 12 2.2c2.6 0 5.1 1 7 2.9 1.9 1.9 2.9 4.3 2.9 7 0 5.4-4.4 9.7-9.9 9.7z" />
  </svg>
);

export const BotonWhatsApp = ({ href = WA, children = "Escribinos por WhatsApp", className = "" }) => (
  <a href={href} target="_blank" rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2.5 text-base font-extrabold bg-whatsapp px-[22px] py-[15px] rounded-[14px] hover:brightness-95 ${className}`}>
    <IconoWhatsApp /><span className="text-tinta-950">{children}</span>
  </a>
);

const Check = ({ color = "#8A5A10" }) => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 mt-[3px]" fill="none" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

const Eyebrow = ({ children, oscuro = false }) => (
  <p className={`text-xs lg:text-[13px] font-bold tracking-[0.2em] ${oscuro ? "text-ambar-500" : "text-ambar-800"}`}>{children}</p>
);

/* ---------- Hero ---------- */
export function HeroServicio({ miga, eyebrow, titulo, subtitulo, imagen, alt = "", whatsapp, checks = [] }) {
  return (
    <section className="relative -mt-4 w-screen ml-[calc(50%-50vw)] overflow-hidden bg-tinta-950 lg:min-h-[560px] flex items-center">
      <Image src={imagen} alt={alt} fill priority sizes="100vw" className={`${SIN_MARCA} object-[75%_50%]`} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,20,38,0.80)_0%,rgba(11,20,38,0.93)_45%,rgba(11,20,38,0.98)_100%)] lg:bg-[linear-gradient(90deg,rgba(11,20,38,0.97)_0%,rgba(11,20,38,0.92)_42%,rgba(11,20,38,0.55)_72%,rgba(11,20,38,0.35)_100%)]" aria-hidden="true" />
      <Isotipo variant="blanco" size={460} className="hidden lg:block absolute -right-24 -bottom-32 opacity-[0.05] pointer-events-none" />
      <div className="relative w-full max-w-[1307px] mx-auto px-4 pt-[30px] pb-8 lg:py-16 flex flex-col gap-4 lg:gap-[22px]">
        <nav aria-label="Migas de pan" className="text-[13px] lg:text-sm font-semibold">
          <Link href="/" className="text-tinta-200 hover:text-white">Inicio</Link>
          <span className="text-tinta-400 mx-2" aria-hidden="true">/</span>
          <span className="text-white">{miga}</span>
        </nav>
        <p className="text-[11px] lg:text-[13px] font-extrabold tracking-[0.18em] text-ambar-500">{eyebrow}</p>
        <h1 className="max-w-[720px] text-[36px] lg:text-[58px] font-extrabold tracking-[-0.035em] leading-[1.06] text-white">{titulo}</h1>
        <p className="max-w-[620px] text-base lg:text-xl leading-normal text-tinta-200">{subtitulo}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <BotonWhatsApp href={whatsapp} />
          <Link href="/vencimientos"
            className="inline-flex items-center justify-center text-base font-extrabold text-tinta-900 bg-ambar-500 px-[22px] py-[15px] rounded-[14px] hover:brightness-105">
            Ver mis vencimientos
          </Link>
        </div>
        <ul className="mt-1 flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-x-6">
          {checks.map((c) => (
            <li key={c} className="flex items-center gap-2 text-sm font-semibold text-tinta-100"><Check color="#F2A93B" />{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Intro: frase destacada + párrafos actuales ---------- */
export const PROSA =
  "[&>p]:mt-4 [&>p:first-child]:mt-0 [&>p]:text-base lg:[&>p]:text-[17px] [&>p]:leading-[1.7] [&>p]:text-tinta-700 " +
  "[&>ul]:mt-[18px] [&>h2]:mt-12 [&_strong]:text-tinta-900 [&_b]:text-tinta-900";

export function IntroServicio({ frase, resaltado, children }) {
  return (
    <section className="mt-11 lg:mt-[88px] grid grid-cols-1 lg:grid-cols-[420px_minmax(0,1fr)] gap-4 lg:gap-[72px] [&>*]:min-w-0">
      <div className="flex flex-col gap-2.5 lg:gap-[18px]">
        <Eyebrow>EL SERVICIO</Eyebrow>
        <p className="text-[26px] lg:text-[36px] font-extrabold tracking-[-0.03em] leading-[1.18] text-tinta-900">
          {frase} <span className="text-ambar-800">{resaltado}</span>
        </p>
      </div>
      <div className={PROSA}>{children}</div>
    </section>
  );
}

/* ---------- Qué incluye ---------- */
const irA = (e, id, alTerminar) => {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  const top = el.getBoundingClientRect().top + window.scrollY - 110;
  window.scrollTo({ top, behavior: "smooth" });
  history.replaceState(null, "", `#${id}`);
  alTerminar && alTerminar();
};

const FlechaDerecha = () => (
  <span className="w-[34px] h-[34px] shrink-0 rounded-full bg-ambar-500 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
    <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="none" stroke="#14213D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  </span>
);

export function QueIncluye({ titulo, items }) {
  return (
    <section aria-label="Qué incluye el servicio" className="mt-11 lg:mt-20 w-screen ml-[calc(50%-50vw)] bg-tinta-50 py-9 lg:py-[72px]">
      <div className="max-w-[1307px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-1.5">
          <div>
            <Eyebrow>QUÉ INCLUYE</Eyebrow>
            <p className="mt-1.5 lg:mt-2 text-[23px] lg:text-[30px] font-extrabold tracking-tight leading-tight text-tinta-900">{titulo}</p>
          </div>
          <p className="hidden lg:block text-[15px] font-semibold text-tinta-500">Tocá un tema para ir directo a esa sección</p>
        </div>
        <ul className="mt-4 lg:mt-7 grid grid-cols-2 lg:grid-cols-5 gap-2.5 lg:gap-4">
          {items.map((it, i) => {
            const principal = i === 0;
            const ancho = principal || (i === items.length - 1 && items.length % 2 === 0) ? "col-span-2 lg:col-span-1" : "";
            return (
              <li key={it.id} className={ancho}>
                <a href={`#${it.id}`} onClick={(e) => irA(e, it.id)}
                  className={`group relative overflow-hidden h-full flex flex-col gap-1.5 lg:gap-2.5 p-3.5 lg:p-5 lg:min-h-[196px] rounded-2xl lg:rounded-[18px] shadow-[0_1px_2px_rgba(20,33,61,0.06),0_12px_28px_rgba(20,33,61,0.08)] transition-shadow hover:shadow-[0_1px_2px_rgba(20,33,61,0.06),0_16px_36px_rgba(20,33,61,0.14)] ${principal ? "bg-tinta-900" : "bg-white"}`}>
                  {principal && <Isotipo variant="blanco" size={150} className="absolute -right-9 -bottom-11 opacity-[0.07] pointer-events-none" />}
                  <span className="relative flex justify-between items-start gap-2">
                    <span className={`text-[26px] lg:text-[38px] font-extrabold leading-none tracking-[-0.04em] ${principal ? "text-ambar-500" : "text-ambar-800"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {principal && <span className="text-[10px] lg:text-[11px] font-extrabold tracking-[0.1em] text-tinta-900 bg-ambar-500 px-2 py-1 rounded-md">SERVICIO PRINCIPAL</span>}
                  </span>
                  <span className={`relative text-[15px] lg:text-[17px] font-extrabold leading-tight ${principal ? "text-white" : "text-tinta-900"}`}>{it.nombre}</span>
                  <span className={`relative text-[13px] lg:text-sm leading-normal ${principal ? "text-tinta-200" : "text-tinta-500"}`}>{it.linea}</span>
                  <span className="relative hidden lg:flex mt-auto justify-end"><FlechaDerecha /></span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Índice (fijo en escritorio, desplegable en mobile) ---------- */
const Numeros = createContext({});

export function Indice({ items, whatsapp }) {
  const [abierto, setAbierto] = useState(false);
  const lista = (alElegir) => (
    <ul className="flex flex-col gap-0.5">
      {items.map((it, i) => (
        <li key={it.id}>
          <a href={`#${it.id}`} onClick={(e) => irA(e, it.id, alElegir)}
            className="flex gap-2.5 px-3 py-[9px] rounded-[10px] text-sm font-semibold text-tinta-500 hover:bg-tinta-50 hover:text-tinta-900">
            <span className="min-w-[20px] font-extrabold text-tinta-400">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-inherit">{it.nombre}</span>
          </a>
        </li>
      ))}
    </ul>
  );
  return (
    <>
      <nav aria-label="En esta página" className="hidden lg:block sticky top-24 border border-tinta-100 rounded-[20px] px-3 py-[18px]">
        <p className="mx-3 mb-2.5 text-xs font-extrabold tracking-[0.16em] text-tinta-500">EN ESTA PÁGINA</p>
        {lista()}
        <div className="mx-1 mt-3.5 pt-3.5 border-t border-tinta-100">
          <BotonWhatsApp href={whatsapp} className="w-full !text-[15px] !py-3">Consultanos</BotonWhatsApp>
        </div>
      </nav>
      <nav aria-label="En esta página" className="lg:hidden border border-tinta-100 rounded-2xl">
        <button type="button" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="indice-servicio"
          className="w-full flex items-center justify-between px-4 py-3.5 text-left">
          <span className="flex flex-col gap-0.5">
            <span className="text-[11px] font-extrabold tracking-[0.16em] text-tinta-500">EN ESTA PÁGINA</span>
            <span className="text-[15px] font-extrabold text-tinta-900">{items.length} temas</span>
          </span>
          <svg viewBox="0 0 24 24" className={`w-5 h-5 transition-transform ${abierto ? "rotate-180" : ""}`} fill="none" stroke="#14213D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
        </button>
        <div id="indice-servicio" hidden={!abierto} className="px-1.5 pb-3">{lista(() => setAbierto(false))}</div>
      </nav>
    </>
  );
}

// Envuelve el cuerpo: los títulos con id del índice muestran su número
export const CuerpoServicio = ({ items, children }) => {
  const mapa = Object.fromEntries(items.map((it, i) => [it.id, String(i + 1).padStart(2, "0")]));
  return <Numeros.Provider value={mapa}>{children}</Numeros.Provider>;
};

export function Titulo({ id, children }) {
  const numeros = useContext(Numeros);
  const n = id && numeros[id];
  return (
    <h2 id={id} className="scroll-mt-28 text-[24px] lg:text-[32px] font-extrabold tracking-[-0.02em] leading-[1.18] text-tinta-900">
      {n && (
        <span className="inline-flex items-center justify-center min-w-[32px] lg:min-w-[36px] h-8 lg:h-9 px-2 mr-3 lg:mr-3.5 rounded-[10px] bg-ambar-50 text-ambar-800 text-sm lg:text-[15px] font-extrabold tracking-normal align-[4px] lg:align-[6px]">
          {n}
        </span>
      )}
      {children}
    </h2>
  );
}

/* ---------- Bloque: título, foto (si tiene) y texto ---------- */
export function Bloque({ img, alt, children }) {
  const hijos = Children.toArray(children);
  const [primero, ...resto] = hijos;
  const conTitulo = isValidElement(primero) && primero.type === Titulo;
  return (
    <article className={`mt-12 lg:mt-[72px] first:mt-0 ${PROSA}`}>
      {conTitulo ? primero : null}
      {img && (
        <div className="relative mt-[18px] lg:mt-[22px] aspect-[16/9] lg:aspect-[2.1/1] rounded-2xl lg:rounded-[22px] overflow-hidden bg-tinta-50">
          <Image src={img} alt={alt || ""} fill sizes="(max-width: 1024px) 100vw, 820px" className={SIN_MARCA} />
        </div>
      )}
      <div className={`mt-4 lg:mt-5 ${PROSA}`}>{conTitulo ? resto : hijos}</div>
    </article>
  );
}

// Bloque sin título propio (un segundo h2 dentro de la misma sección)
export const Subtitulo = ({ id, children }) => (
  <h3 id={id} className="!mt-9 scroll-mt-28 text-[21px] lg:text-[26px] font-extrabold tracking-tight leading-tight text-tinta-900">{children}</h3>
);

/* ---------- Lista con check ---------- */
export function ListaCheck({ children, columnas = 2 }) {
  return (
    <ul className={`!mt-[18px] grid grid-cols-1 ${columnas === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2"} gap-x-7 gap-y-3 p-5 lg:px-6 lg:py-[22px] bg-tinta-50 rounded-[18px]`}>
      {Children.map(children, (li) =>
        isValidElement(li)
          ? cloneElement(li, {
              className: "flex gap-2.5 text-[15px] lg:text-base leading-normal text-tinta-700",
              children: (<><Check /><span className="text-tinta-700">{li.props.children}</span></>),
            })
          : li
      )}
    </ul>
  );
}

/* ---------- Llamados a la acción ---------- */
export function CtaIntermedio({ titulo, texto, whatsapp }) {
  return (
    <div className="relative overflow-hidden mt-12 lg:mt-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-7 px-5 py-[22px] lg:px-[30px] lg:py-[26px] rounded-[18px] lg:rounded-[20px] bg-tinta-900">
      <Isotipo variant="blanco" size={200} className="absolute -right-10 -bottom-14 lg:right-44 lg:-top-16 lg:bottom-auto opacity-[0.05] pointer-events-none" />
      <div className="relative">
        <p className="text-[19px] lg:text-[21px] font-extrabold leading-snug text-white">{titulo}</p>
        <p className="mt-1.5 text-sm lg:text-[15px] text-tinta-200">{texto}</p>
      </div>
      <BotonWhatsApp href={whatsapp} className="relative shrink-0 !text-[15px] !py-3.5">Consultanos</BotonWhatsApp>
    </div>
  );
}

export function CtaFinal({ titulo, children, whatsapp }) {
  return (
    <section className="relative mt-14 lg:mt-24 w-screen ml-[calc(50%-50vw)] bg-tinta-900 overflow-hidden py-10 lg:py-20">
      <Isotipo variant="blanco" size={520} className="absolute -left-32 -top-36 opacity-[0.05] pointer-events-none" />
      <div className="relative max-w-[1307px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-7 lg:gap-20 items-center [&>*]:min-w-0">
        <div className="flex flex-col gap-3.5 lg:gap-4">
          <Eyebrow oscuro>EMPEZÁ HOY</Eyebrow>
          <h2 className="text-[28px] lg:text-[40px] font-extrabold tracking-[-0.03em] leading-[1.12] text-white">{titulo}</h2>
          <div className="flex flex-col gap-2 [&_p]:text-[15px] lg:[&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-tinta-200 [&_a]:font-bold [&_a]:text-ambar-500 [&_a]:underline [&_a]:underline-offset-[3px]">
            {children}
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-white/[0.06] border border-white/[0.14] rounded-[22px] p-5 lg:p-7">
          <p className="mb-1 text-lg font-extrabold text-white">Elegí cómo prefieras</p>
          <BotonWhatsApp href={whatsapp} className="w-full" />
          {/* Baja al formulario de consulta que está al final de la misma página */}
          <a href="#consulta" className="text-center text-base font-extrabold text-white p-[15px] border border-white/25 rounded-[14px] hover:bg-white/10">
            Dejanos tu consulta
          </a>
          <a href="tel:+541158959823" className="pt-1.5 text-center text-[15px] font-bold text-tinta-200 hover:text-white">o llamanos al +54 11 5895-9823</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Preguntas frecuentes ---------- */
export function PreguntasServicio({ titulo, faqs }) {
  const [abierta, setAbierta] = useState(0);
  return (
    <section aria-labelledby="titulo-faq" className="mt-12 lg:mt-24 mb-4 grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] gap-4 lg:gap-[72px] items-start [&>*]:min-w-0">
      <div className="flex flex-col gap-2.5 lg:gap-3.5 lg:sticky lg:top-28">
        <Eyebrow>PREGUNTAS FRECUENTES</Eyebrow>
        <h2 id="titulo-faq" className="text-2xl lg:text-[34px] font-extrabold tracking-tight leading-[1.15] text-tinta-900">{titulo}</h2>
        <p className="hidden lg:block text-base leading-relaxed text-tinta-500">¿No encontrás tu pregunta? Escribinos y te respondemos.</p>
      </div>
      <div className="border-t border-tinta-100">
        {faqs.map((f, i) => {
          const abiertaEsta = abierta === i;
          return (
            <div key={f.q} className="border-b border-tinta-100">
              <h3>
                <button type="button" id={`faq-btn-${i}`} aria-expanded={abiertaEsta} aria-controls={`faq-panel-${i}`}
                  onClick={() => setAbierta(abiertaEsta ? -1 : i)}
                  className="w-full flex justify-between items-center gap-4 py-[18px] lg:py-5 text-left">
                  <span className="text-base lg:text-lg font-bold text-tinta-900">{f.q}</span>
                  <span aria-hidden="true"
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold transition-colors ${abiertaEsta ? "bg-tinta-900 text-white" : "bg-tinta-50 text-tinta-900"}`}>
                    {abiertaEsta ? "−" : "+"}
                  </span>
                </button>
              </h3>
              <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} className={abiertaEsta ? "block" : "hidden"}>
                <p className="-mt-1 pb-5 max-w-[640px] text-[15px] lg:text-base leading-[1.65] text-tinta-500">{f.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Estructura de página ---------- */
export const ColumnasServicio = ({ indice, children }) => (
  <div className="mt-10 lg:mt-[88px] grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-8 lg:gap-[72px] items-start [&>*]:min-w-0">
    {indice}
    <div className="max-w-[820px]">{children}</div>
  </div>
);
