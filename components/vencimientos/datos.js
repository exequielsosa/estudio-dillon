// Carga automática de todos los calendarios de data/vencimientos/<AÑO>.json.
// Para sumar un año nuevo alcanza con agregar el archivo: no hay que tocar código.
const ctx = require.context("../../data/vencimientos", false, /\d{4}\.json$/);

export const CALENDARIOS = Object.fromEntries(
  ctx.keys().map((k) => {
    const data = ctx(k);
    return [data.anio, data];
  })
);

export const ANIOS = Object.keys(CALENDARIOS).map(Number).sort();

// Qué obligaciones ve cada perfil del filtro "¿Qué sos?"
export const PERFILES = [
  { id: "todo", label: "Todo", corto: "Todo", obligaciones: null },
  { id: "mono", label: "Monotributista", corto: "Monotributista", obligaciones: ["monotributo", "monotributo_recat"] },
  {
    id: "ri",
    label: "Responsable inscripto",
    corto: "Resp. inscripto",
    obligaciones: ["iva", "autonomos", "ganancias_anticipo", "bp_anticipo", "ganancias_bp_anual"],
  },
  { id: "empleador", label: "Empleador", corto: "Empleador", obligaciones: ["f931"] },
  { id: "agente", label: "Agente de retención", corto: "Agente de retención", obligaciones: ["sicore"] },
  { id: "sociedad", label: "Sociedad", corto: "Sociedad", obligaciones: ["ganancias_sociedades_dic", "bp_acciones"] },
];

export const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

// "2026-11-20" -> Date local (sin corrimiento de zona horaria)
export const aFecha = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
};

// Vencimientos de un mes para una terminación de CUIT y un perfil
export function vencimientosDelMes({ anio, mes, digito, perfil }) {
  const cal = CALENDARIOS[anio];
  if (!cal || digito === null) return [];
  const permitidas = PERFILES.find((p) => p.id === perfil)?.obligaciones;
  const filas = [];
  for (const o of cal.obligaciones) {
    if (permitidas && !permitidas.includes(o.id)) continue;
    for (const v of o.vencimientos) {
      const f = aFecha(v.fecha);
      if (f.getMonth() !== mes || !v.cuit.includes(digito)) continue;
      filas.push({ ...v, obligacion: o, date: f, key: `${o.id}-${v.fecha}-${v.accion}` });
    }
  }
  return filas.sort((a, b) => a.date - b.date);
}

// Link para agregar el vencimiento a Google Calendar (evento de día completo)
export function linkGoogleCalendar(fila) {
  const d = fila.date;
  const sig = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
  const f = (x) => `${x.getFullYear()}${String(x.getMonth() + 1).padStart(2, "0")}${String(x.getDate()).padStart(2, "0")}`;
  const texto = `Vence ${fila.obligacion.nombre}: ${fila.accion}`;
  const detalle = `${fila.obligacion.detalle} · Período: ${fila.periodo}.\nFuente: agenda oficial de ARCA.\nCalendario completo: https://www.estudio-dillon.com.ar/vencimientos`;
  const params = new URLSearchParams({ action: "TEMPLATE", text: texto, dates: `${f(d)}/${f(sig)}`, details: detalle });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
