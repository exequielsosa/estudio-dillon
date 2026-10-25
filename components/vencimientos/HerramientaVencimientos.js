import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/gatg";
import { ANIOS, CALENDARIOS, MESES, PERFILES, linkGoogleCalendar, vencimientosDelMes } from "./datos";

const CLAVE = "dillon-vencimientos"; // recuerda CUIT y perfil en este navegador

const leer = () => {
  try { return JSON.parse(window.localStorage.getItem(CLAVE)) || {}; } catch { return {}; }
};
const guardar = (v) => {
  try { window.localStorage.setItem(CLAVE, JSON.stringify(v)); } catch { /* sin storage: no pasa nada */ }
};

const fechaLarga = (d) => d.toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long" });

function Estado({ dias }) {
  if (dias < 0) return <span className="text-[13px] font-bold text-exito bg-[#E6F4EC] px-2.5 py-1 rounded-full whitespace-nowrap">Ya pasó</span>;
  if (dias === 0) return <span className="text-[13px] font-bold text-white bg-error px-2.5 py-1 rounded-full whitespace-nowrap">Vence hoy</span>;
  if (dias <= 7) return <span className="text-[13px] font-bold text-tinta-900 bg-ambar-500 px-2.5 py-1 rounded-full whitespace-nowrap">{dias === 1 ? "Vence mañana" : `Faltan ${dias} días`}</span>;
  return <span className="text-[13px] font-bold text-tinta-900 bg-tinta-100 px-2.5 py-1 rounded-full whitespace-nowrap">Faltan {dias} días</span>;
}

const IconoAgendar = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-tinta-900" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18M12 14v4M10 16h4" />
  </svg>
);

export default function HerramientaVencimientos() {
  // "hoy" se calcula en el navegador (la página es estática).
  const [hoy, setHoy] = useState(null);
  const [anio, setAnio] = useState(null);
  const [mes, setMes] = useState(null);
  const [digito, setDigito] = useState(null);
  const [perfil, setPerfil] = useState("todo");

  useEffect(() => {
    const h = new Date();
    h.setHours(0, 0, 0, 0);
    setHoy(h);
    setAnio(h.getFullYear());
    setMes(h.getMonth());
    const g = leer();
    if (Number.isInteger(g.digito)) setDigito(g.digito);
    if (PERFILES.some((p) => p.id === g.perfil)) setPerfil(g.perfil);
  }, []);

  const elegirDigito = (n) => {
    setDigito(n);
    guardar({ digito: n, perfil });
    trackEvent("vencimientos_cuit", { terminacion: n });
  };
  const elegirPerfil = (id) => {
    setPerfil(id);
    guardar({ digito, perfil: id });
    trackEvent("vencimientos_perfil", { perfil: id });
  };

  const hayCalendario = anio !== null && CALENDARIOS[anio];
  const primero = ANIOS[0];
  const ultimo = ANIOS[ANIOS.length - 1];
  const puedeAtras = hayCalendario && !(anio === primero && mes === 0);
  const puedeAdelante = hayCalendario && !(anio === ultimo && mes === 11);
  const mover = (delta) => {
    let m = mes + delta, a = anio;
    if (m < 0) { m = 11; a -= 1; }
    if (m > 11) { m = 0; a += 1; }
    setMes(m); setAnio(a);
  };

  const filas = useMemo(
    () => (hayCalendario ? vencimientosDelMes({ anio, mes, digito, perfil }) : []),
    [hayCalendario, anio, mes, digito, perfil]
  );
  const nombreMes = mes !== null ? MESES[mes] : "";
  const fuente = hayCalendario ? CALENDARIOS[anio].fuente : null;

  return (
    <section aria-labelledby="titulo-herramienta" className="w-full min-w-0 bg-white border border-tinta-100 rounded-[20px] shadow-[0_12px_32px_rgba(20,33,61,0.08)] p-5 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 id="titulo-herramienta" className="text-[21px] md:text-[26px] font-extrabold tracking-tight text-tinta-900">
          {mes !== null ? `¿Qué vence en ${nombreMes}?` : "¿Qué vence este mes?"}
        </h2>
        <div className="flex items-center justify-between gap-2 p-1.5 rounded-xl bg-tinta-50 md:bg-transparent md:p-0">
          <button type="button" onClick={() => mover(-1)} disabled={!puedeAtras} aria-label="Mes anterior"
            className="w-10 h-10 rounded-[10px] border border-tinta-200 bg-white text-lg text-tinta-900 disabled:opacity-40 disabled:cursor-not-allowed">‹</button>
          <span className="min-w-[140px] text-center text-[15px] font-bold text-tinta-900 capitalize" aria-live="polite">
            {mes !== null ? `${nombreMes} ${anio}` : " "}
          </span>
          <button type="button" onClick={() => mover(1)} disabled={!puedeAdelante} aria-label="Mes siguiente"
            className="w-10 h-10 rounded-[10px] border border-tinta-200 bg-white text-lg text-tinta-900 disabled:opacity-40 disabled:cursor-not-allowed">›</button>
        </div>
      </div>

      <fieldset className="mt-6 min-w-0">
        <legend className="mb-2.5 text-sm font-bold text-tinta-500">Último número de tu CUIT</legend>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <button key={n} type="button" onClick={() => elegirDigito(n)} aria-pressed={digito === n}
              className={`h-12 md:h-[52px] rounded-xl border-2 text-[19px] md:text-xl font-extrabold text-tinta-900 transition-colors ${
                digito === n ? "bg-ambar-500 border-ambar-500" : "bg-white border-tinta-200 hover:border-tinta-400"
              }`}>
              {n}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-5 min-w-0">
        <legend className="mb-2.5 text-sm font-bold text-tinta-500">¿Qué sos?</legend>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap md:overflow-visible">
          {PERFILES.map((p) => (
            <button key={p.id} type="button" onClick={() => elegirPerfil(p.id)} aria-pressed={perfil === p.id}
              className={`shrink-0 h-10 px-4 rounded-full border-2 text-sm font-bold whitespace-nowrap transition-colors ${
                perfil === p.id ? "bg-tinta-900 border-tinta-900 text-white" : "bg-white border-tinta-200 text-tinta-900 hover:border-tinta-400"
              }`}>
              {/* Color explícito en cada span: la regla global "* { color }" no deja heredar el blanco del botón */}
              <span className="md:hidden" style={{ color: perfil === p.id ? "#FFFFFF" : "#14213D" }}>{p.corto}</span>
              <span className="hidden md:inline" style={{ color: perfil === p.id ? "#FFFFFF" : "#14213D" }}>{p.label}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6" aria-live="polite">
        {anio !== null && !hayCalendario && (
          <div className="rounded-2xl bg-ambar-50 border border-[#F6E2BF] p-5">
            <p className="font-bold text-tinta-900">Calendario {anio} en preparación</p>
            <p className="mt-1 text-[15px] text-tinta-500">Estamos cargando las fechas oficiales de ARCA. Mientras tanto, consultanos y te decimos qué vence.</p>
            <Link href="/contacto" className="inline-block mt-3 font-bold text-tinta-900 underline underline-offset-4 decoration-ambar-500">Hacé tu consulta</Link>
          </div>
        )}

        {hayCalendario && digito === null && (
          <p className="rounded-2xl bg-tinta-50 p-5 text-[15px] font-semibold text-tinta-700">
            Elegí el último número de tu CUIT para ver tus vencimientos de {nombreMes}.
          </p>
        )}

        {hayCalendario && digito !== null && filas.length === 0 && (
          <p className="rounded-2xl bg-tinta-50 p-5 text-[15px] font-semibold text-tinta-700">
            No hay vencimientos de este tipo en {nombreMes} para la terminación {digito}.
          </p>
        )}

        {filas.length > 0 && (
          <ul className="flex flex-col gap-2.5 md:gap-0 md:border md:border-tinta-100 md:rounded-[14px]">
            {filas.map((f) => {
              const dias = hoy ? Math.round((f.date - hoy) / 86400000) : null;
              return (
                <li key={f.key}
                  className={`border border-tinta-100 rounded-[14px] p-3.5 flex flex-col gap-3 md:border-0 md:border-b md:border-tinta-50 md:rounded-none md:last:border-b-0 md:px-5 md:py-4 md:grid md:grid-cols-[64px_minmax(0,1fr)_auto_auto] md:items-center md:gap-[18px] ${dias !== null && dias < 0 ? "opacity-60" : ""}`}>
                  <div className="flex items-center gap-3.5 md:contents">
                    <div className="shrink-0 flex flex-col items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-tinta-900">
                      <span className="text-[22px] md:text-[26px] font-extrabold leading-none text-white">{f.date.getDate()}</span>
                      <span className="text-[10px] md:text-[11px] font-bold tracking-[0.14em] text-ambar-500">{MESES[f.date.getMonth()].slice(0, 3).toUpperCase()}</span>
                    </div>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <a href={`#${f.obligacion.seccion}`} className="text-base md:text-[17px] font-bold text-tinta-900 hover:underline underline-offset-4 decoration-ambar-500">
                        {f.obligacion.nombre}
                      </a>
                      <span className="text-[13px] md:text-sm leading-snug text-tinta-500">
                        {f.accion} · {f.periodo}
                      </span>
                      <span className="sr-only">Vence el {fechaLarga(f.date)}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 md:contents">
                    {dias !== null && <Estado dias={dias} />}
                    {!(dias !== null && dias < 0) && (
                    <a href={linkGoogleCalendar(f)} target="_blank" rel="noopener noreferrer"
                      onClick={() => trackEvent("click_agendar", { obligacion: f.obligacion.id })}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-tinta-900 px-3 py-2.5 border border-tinta-200 rounded-[10px] hover:bg-tinta-50">
                      <IconoAgendar />
                      Agendar
                    </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <p className="mt-4 text-[13px] leading-relaxed text-tinta-500">
        Fechas según la{" "}
        <a href={fuente?.url || "https://seti.afip.gob.ar/av/seleccionVencimientosSintetica.do"} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-tinta-500">
          agenda oficial de ARCA
        </a>
        {fuente?.actualizadoArca ? `, actualizada al ${fuente.actualizadoArca.split("-").reverse().join("/")}` : ""}, con los corrimientos por feriados y las prórrogas vigentes. Ante cualquier duda, consultanos.
      </p>
    </section>
  );
}
