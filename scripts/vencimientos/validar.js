/*
 * Valida los archivos de data/vencimientos/*.json.
 * Uso: yarn vencimientos:validar            (valida todos)
 *      yarn vencimientos:validar 2027       (valida un año)
 *
 * Avisa (y termina con error) si falta una obligación, un mes, una terminación
 * de CUIT, o si hay fechas inválidas o fuera del año.
 */
const fs = require("fs");
const path = require("path");

const DIR = path.join(__dirname, "..", "..", "data", "vencimientos");

// Cuántas veces por año se espera cada obligación (mínimo) y si debe cubrir los 12 meses.
const ESPERADO = {
  iva: { mensual: true },
  monotributo: { mensual: true },
  monotributo_recat: { min: 2 },
  f931: { mensual: true },
  autonomos: { mensual: true },
  sicore: { mensual: true },
  ganancias_anticipo: { min: 3 },
  bp_anticipo: { min: 3 },
  ganancias_bp_anual: { min: 1 },
  bp_acciones: { min: 1 },
  ganancias_sociedades_dic: { min: 1 },
};

function validar(archivo) {
  const errores = [];
  const avisos = [];
  const data = JSON.parse(fs.readFileSync(archivo, "utf8"));
  const anio = data.anio;

  if (!Number.isInteger(anio)) errores.push("Falta 'anio' o no es un número.");
  if (!data.fuente || !data.fuente.url) errores.push("Falta 'fuente.url'.");
  if (!data.fuente || !data.fuente.verificadoPor) avisos.push("Nadie del estudio verificó las fechas todavía (fuente.verificadoPor).");

  const ids = new Set((data.obligaciones || []).map((o) => o.id));
  for (const id of Object.keys(ESPERADO)) if (!ids.has(id)) errores.push(`Falta la obligación '${id}'.`);

  for (const o of data.obligaciones || []) {
    const regla = ESPERADO[o.id] || {};
    const v = o.vencimientos || [];
    if (!v.length) { errores.push(`${o.id}: no tiene fechas.`); continue; }

    for (const x of v) {
      const d = new Date(`${x.fecha}T12:00:00`);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(x.fecha) || isNaN(d)) errores.push(`${o.id}: fecha inválida '${x.fecha}'.`);
      else if (d.getFullYear() !== anio) errores.push(`${o.id}: la fecha ${x.fecha} no es del año ${anio}.`);
      else if ([0, 6].includes(d.getDay())) avisos.push(`${o.id}: ${x.fecha} cae fin de semana, revisar.`);
      if (!Array.isArray(x.cuit) || !x.cuit.length || x.cuit.some((n) => !Number.isInteger(n) || n < 0 || n > 9))
        errores.push(`${o.id} ${x.fecha}: terminaciones de CUIT inválidas.`);
      if (!x.periodo || !x.accion) errores.push(`${o.id} ${x.fecha}: falta periodo o accion.`);
    }

    if (regla.mensual) {
      // Cada mes, cada terminación 0-9 tiene que tener al menos una fecha.
      for (let m = 1; m <= 12; m++) {
        const delMes = v.filter((x) => Number(x.fecha.slice(5, 7)) === m);
        const cubiertas = new Set(delMes.flatMap((x) => x.cuit));
        const faltan = [...Array(10).keys()].filter((n) => !cubiertas.has(n));
        if (faltan.length) errores.push(`${o.id}: en el mes ${m} faltan las terminaciones ${faltan.join(", ")}.`);
      }
    }
    if (regla.min) {
      const fechas = new Set(v.map((x) => x.periodo));
      if (fechas.size < regla.min) avisos.push(`${o.id}: se esperaban al menos ${regla.min} períodos y hay ${fechas.size}.`);
    }
  }
  return { errores, avisos };
}

const filtro = process.argv[2];
const archivos = fs.readdirSync(DIR).filter((f) => /^\d{4}\.json$/.test(f) && (!filtro || f.startsWith(filtro)));
if (!archivos.length) { console.error("No hay archivos para validar en data/vencimientos/."); process.exit(1); }

let hayErrores = false;
for (const f of archivos) {
  const { errores, avisos } = validar(path.join(DIR, f));
  console.log(`\n${f}: ${errores.length ? "❌" : "✅"} ${errores.length} errores, ${avisos.length} avisos`);
  errores.forEach((e) => console.log("  ERROR  " + e));
  avisos.forEach((a) => console.log("  aviso  " + a));
  if (errores.length) hayErrores = true;
}
process.exit(hayErrores ? 1 : 0);
