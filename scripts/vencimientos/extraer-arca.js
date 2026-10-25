/*
 * Extrae el calendario anual de vencimientos desde la agenda oficial de ARCA
 * y descarga un archivo <AÑO>.json listo para data/vencimientos/.
 *
 * CÓMO USARLO (ver ACTUALIZAR-VENCIMIENTOS.md):
 *   1. Abrir en Chrome: https://seti.afip.gob.ar/av/seleccionVencimientosSintetica.do
 *   2. Abrir la consola (F12 → Console).
 *   3. Pegar TODO este archivo, cambiar ANIO si hace falta y apretar Enter.
 *   4. Esperar ~30 segundos: se descarga <AÑO>.json.
 *
 * Corre en la página de ARCA porque la agenda no tiene API pública:
 * consulta mes por mes el mismo formulario que usa la página.
 */
(async () => {
  const ANIO = new Date().getFullYear() + (new Date().getMonth() >= 10 ? 1 : 0); // en nov/dic toma el año siguiente
  const pad = (n) => String(n).padStart(2, "0");

  // --- 1. Leer la agenda sintética de un mes y separarla en bloques ---
  async function leerMes(mes) {
    const ultimo = new Date(ANIO, mes, 0).getDate();
    const body = new URLSearchParams({
      fechaVDesde: `01/${pad(mes)}/${ANIO}`,
      fechaVHasta: `${ultimo}/${pad(mes)}/${ANIO}`,
    });
    const r = await fetch("/av/viewVencimientosSintetica.do", { method: "POST", body });
    const html = new TextDecoder("iso-8859-1").decode(await r.arrayBuffer());
    const doc = new DOMParser().parseFromString(html, "text/html");
    const L = (doc.body.innerText || doc.body.textContent)
      .split("\n").map((s) => s.replace(/\s+/g, " ").trim()).filter(Boolean);

    const esRef = (s) => /^(R\.G\.|Ley |Decreto|art\.|Res\.|Resolución|Dto\.)/i.test(s);
    const esCuit = (s) => /^(todos|\d(-\d)*)$/i.test(s);
    const esFecha = (s) => /^\d{2}\/\d{2}\/\d{4}$/.test(s);

    const bloques = [];
    let b = null, modo = null, seg = null;
    const cerrarSeg = () => { if (seg && seg.fechas.length) b.segs.push(seg); seg = null; };

    for (let i = 0; i < L.length; i++) {
      const s = L[i];
      if (s === "Impuesto") {
        if (b) { cerrarSeg(); bloques.push(b); }
        b = { imp: L[i + 1] || "", reg: "", suj: "", segs: [] }; modo = "hdr"; i++; continue;
      }
      if (!b) continue;
      if (modo === "hdr") {
        if (s === "Descripción del Régimen") { b.reg = L[++i]; continue; }
        if (s === "Sujeto") { b.suj = L[++i]; continue; }
        if (s === "Tipo de obligación") { modo = "obl"; }
        continue;
      }
      if (s === "Terminación de CUIT") { modo = "tabla"; continue; }
      if (s === "Fecha de Vencimiento") continue;
      if (modo === "tabla") {
        if (esCuit(s) && esFecha(L[i + 1] || "")) { seg.fechas.push([s, L[++i]]); continue; }
        cerrarSeg(); modo = "obl";
      }
      if (modo === "obl") {
        if (esRef(s)) continue;
        if (!seg) seg = { obl: s, per: "", per2: "", fechas: [] };
        else if (!seg.per) seg.per = s;
        else { seg.obl += " + " + s; if (L[i + 1] && !esRef(L[i + 1]) && L[i + 1] !== "Terminación de CUIT") seg.per2 = L[++i]; }
      }
    }
    if (b) { cerrarSeg(); bloques.push(b); }
    return bloques;
  }

  // --- 2. Qué obligaciones toma la herramienta (mismos ids que el sitio) ---
  const anioAnt = ANIO - 1;
  const REGLAS = [
    ["iva", (b) => /VALOR AGREGADO/.test(b.imp) && /^Sujetos pasivos/.test(b.suj), (s) => /^Presentación/.test(s.obl)],
    ["monotributo", (b) => /MONOTRIBUTO/.test(b.imp) && /^Personas físicas y sucesiones/.test(b.suj), (s) => /^Ingreso del impuesto/.test(s.obl)],
    ["monotributo_recat", (b) => /MONOTRIBUTO/.test(b.imp) && /^Personas físicas y sucesiones/.test(b.suj), (s) => /^Recategoriz/.test(s.obl)],
    ["f931", (b) => /APORTES Y CONTRIBUCIONES/.test(b.reg) && /^Empleadores/.test(b.suj), () => true],
    ["autonomos", (b) => /TRABAJADORES AUTONOMOS/.test(b.reg) && /^Trabajadores autónomos\./.test(b.suj), () => true],
    ["sicore", (b) => /GANANCIAS/.test(b.imp) && b.suj === "Agentes de retención y/o percepción.", (s) => /^Información \(Régimen General\)/.test(s.obl) || /1º quincena/.test(s.per + s.per2)],
    ["ganancias_anticipo", (b) => /GANANCIAS/.test(b.imp) && /^Personas físicas y sucesiones indivisas\.$/.test(b.suj), (s) => /anticipos/.test(s.obl)],
    ["bp_anticipo", (b) => /BIENES PERSONALES/.test(b.imp) && /^Personas físicas/.test(b.suj), (s) => /anticipos/.test(s.obl)],
    ["ganancias_bp_anual", (b) => /GANANCIAS|BIENES PERSONALES/.test(b.imp) && /^(Personas humanas y sucesiones|Personas físicas domiciliadas)/.test(b.suj), (s) => /^(Ingreso del saldo|Transferencia electrónica de datos|Presentación)/.test(s.obl) && new RegExp(`año ${anioAnt}`).test(s.per)],
    ["bp_acciones", (b) => /BIENES PERSONALES/.test(b.imp) && /^Sociedades comprendidas/.test(b.suj), () => true],
    ["ganancias_sociedades_dic", (b) => /GANANCIAS/.test(b.imp) && /^Sociedades, empresas/.test(b.suj) && !b.reg, (s) => new RegExp(`Diciembre/${anioAnt}`).test(s.per) && !/anticipo/i.test(s.obl)],
  ];
  const CATALOGO = {
    iva: ["IVA", "Declaración jurada mensual y pago", "Responsables inscriptos", "iva"],
    monotributo: ["Monotributo", "Pago de la cuota mensual", "Monotributistas", "mono"],
    monotributo_recat: ["Monotributo", "Recategorización semestral", "Monotributistas", "mono"],
    f931: ["Cargas sociales (F.931)", "Declaración jurada y pago de aportes y contribuciones", "Empleadores", "cas"],
    autonomos: ["Autónomos", "Pago de aportes mensuales", "Trabajadores autónomos", "cas"],
    sicore: ["Retenciones y percepciones (SICORE)", "Ganancias: declaración jurada mensual y pagos a cuenta", "Agentes de retención y percepción", "sicore"],
    ganancias_anticipo: ["Ganancias personas humanas", "Anticipo", "Personas humanas", "ig"],
    bp_anticipo: ["Bienes Personales", "Anticipo", "Personas humanas", "bp"],
    ganancias_bp_anual: ["Ganancias y Bienes Personales", `Declaración jurada anual ${anioAnt}`, "Personas humanas", "ig"],
    bp_acciones: ["Bienes Personales acciones y participaciones", `Declaración jurada anual ${anioAnt} (responsable sustituto)`, "Sociedades", "ps"],
    ganancias_sociedades_dic: ["Ganancias sociedades", `Declaración jurada anual · cierre diciembre ${anioAnt}`, "Sociedades con cierre en diciembre", "ig"],
  };

  const accion = (id, s) => {
    if (id === "sicore") return /1º quincena/.test(s.per + s.per2) ? "Pago a cuenta 1ª quincena" : "Presentación y pago";
    if (id === "iva" || id === "f931") return "Presentación y pago";
    if (/^Recategoriz/.test(s.obl)) return "Recategorización";
    if (/^Ingreso|^Determinación/.test(s.obl)) return "Pago";
    return "Presentación";
  };
  const aIso = (f) => { const [d, m, y] = f.split("/"); return `${y}-${m}-${d}`; };
  const aCuit = (c) => (/todos/i.test(c) ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] : c.split("-").map(Number));

  // --- 3. Recorrer los 12 meses ---
  const filas = {};
  for (let mes = 1; mes <= 12; mes++) {
    console.log(`Leyendo ${pad(mes)}/${ANIO}...`);
    for (const b of await leerMes(mes)) {
      for (const [id, okB, okS] of REGLAS) {
        if (!okB(b)) continue;
        for (const s of b.segs) {
          if (!okS(s)) continue;
          const periodo = /1º quincena/.test(s.per2) ? s.per2 : s.per;
          for (const [c, f] of s.fechas) {
            (filas[id] ||= new Map()).set(`${aIso(f)}|${c}|${periodo}`, {
              fecha: aIso(f), cuit: aCuit(c), periodo, accion: accion(id, s),
            });
          }
        }
      }
    }
  }

  const hoy = new Date().toISOString().slice(0, 10);
  const data = {
    anio: ANIO,
    fuente: {
      nombre: "ARCA — Agenda de vencimientos (agenda sintética)",
      url: "https://seti.afip.gob.ar/av/seleccionVencimientosSintetica.do",
      actualizadoArca: null, // completar con la fecha que figura arriba en la agenda
      consultado: hoy,
      verificadoPor: null, // nombre de quien revisó las fechas en el estudio
    },
    nota: "Fechas tomadas de la agenda oficial de ARCA. Si ARCA publica una prórroga, actualizar este archivo (ver ACTUALIZAR-VENCIMIENTOS.md).",
    obligaciones: Object.entries(CATALOGO).map(([id, [nombre, detalle, quienes, seccion]]) => ({
      id, nombre, detalle, quienes, seccion,
      vencimientos: [...(filas[id] || new Map()).values()].sort((a, b) => a.fecha.localeCompare(b.fecha) || a.cuit[0] - b.cuit[0]),
    })),
  };

  // Resumen para revisar antes de guardar
  console.table(data.obligaciones.map((o) => ({ id: o.id, fechas: o.vencimientos.length })));

  const blob = new Blob([JSON.stringify(data, null, 2) + "\n"], { type: "application/json" });
  const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: `${ANIO}.json` });
  a.click();
  console.log(`Listo: se descargó ${ANIO}.json. Copialo a data/vencimientos/ y corré: yarn vencimientos:validar`);
})();
