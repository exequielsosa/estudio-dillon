import { useEffect, useState } from "react";
import Link from "next/link";
import { CALENDARIOS, MESES, aFecha } from "@/components/vencimientos/datos";

// Obligaciones que interesan a la mayoría de quienes llegan a la home
const GENERALES = ["monotributo", "iva", "autonomos", "f931", "ganancias_bp_anual", "ganancias_anticipo", "bp_anticipo", "monotributo_recat"];

// Agrupa las fechas de una misma obligación/período (cada grupo de CUIT vence un día distinto)
function proximos(hoy, cantidad = 3) {
  const grupos = new Map();
  for (const cal of Object.values(CALENDARIOS)) {
    for (const o of cal.obligaciones) {
      if (!GENERALES.includes(o.id)) continue;
      for (const v of o.vencimientos) {
        const f = aFecha(v.fecha);
        if (f < hoy) continue;
        const k = `${o.id}|${v.periodo}|${v.accion}`;
        const g = grupos.get(k) || { o, desde: f, hasta: f, cuits: new Set(), fechas: new Set() };
        if (f < g.desde) g.desde = f;
        if (f > g.hasta) g.hasta = f;
        v.cuit.forEach((c) => g.cuits.add(c));
        g.fechas.add(v.fecha);
        grupos.set(k, g);
      }
    }
  }
  const lista = [...grupos.values()].sort((a, b) => a.desde - b.desde);
  const elegidos = lista.slice(0, cantidad);
  // Siempre mostrar el próximo pago de Monotributo (el perfil más numeroso)
  if (!elegidos.some((g) => g.o.id === "monotributo")) {
    const mono = lista.find((g) => g.o.id === "monotributo");
    if (mono) elegidos[cantidad - 1] = mono;
  }
  return elegidos.sort((a, b) => a.desde - b.desde);
}

const mes3 = (d) => MESES[d.getMonth()].slice(0, 3).toUpperCase();

export default function ProximosVencimientos({ compacto = false }) {
  const [items, setItems] = useState(null); // se calcula en el navegador: depende de la fecha de hoy

  useEffect(() => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    setItems(proximos(hoy));
  }, []);

  return (
    <div className={`bg-white/[0.08] border border-white/[0.18] backdrop-blur-md rounded-[20px] flex flex-col ${compacto ? "p-[18px]" : "p-6"}`}>
      <div className="flex justify-between items-center pb-3">
        <h2 className="text-[17px] font-extrabold text-white">Próximos vencimientos</h2>
        <span className="text-[11px] font-bold tracking-[0.1em] text-tinta-200">AGENDA ARCA</span>
      </div>

      <ul>
        {(items || [null, null, null]).map((g, i) => {
          if (!g) {
            return (
              <li key={i} className="flex items-center gap-3.5 py-3 border-t border-white/[0.14]" aria-hidden="true">
                <div className="w-[52px] h-[52px] rounded-xl bg-white/10" />
                <div className="flex-1 flex flex-col gap-2"><div className="h-3.5 w-2/3 rounded bg-white/10" /><div className="h-3 w-1/2 rounded bg-white/10" /></div>
              </li>
            );
          }
          const mismoDia = g.desde.getTime() === g.hasta.getTime();
          const dia = mismoDia ? `${g.desde.getDate()}` : `${g.desde.getDate()}–${g.hasta.getDate()}`;
          const todas = g.cuits.size === 10 && g.fechas.size === 1;
          return (
            <li key={`${g.o.id}-${g.desde.toISOString()}`} className="flex items-center gap-3.5 py-3 border-t border-white/[0.14]">
              <div className="shrink-0 w-[52px] h-[52px] rounded-xl bg-ambar-500 flex flex-col items-center justify-center">
                <span className={`${dia.length > 2 ? "text-[15px]" : "text-xl"} font-extrabold leading-none text-tinta-900`}>{dia}</span>
                <span className="text-[10px] font-extrabold tracking-[0.12em] text-tinta-900">
                  {mismoDia || g.desde.getMonth() === g.hasta.getMonth() ? mes3(g.desde) : `${mes3(g.desde)}/${mes3(g.hasta)}`}
                </span>
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[15px] font-bold text-white">{g.o.nombre}</span>
                <span className="text-[13px] leading-snug text-tinta-200">
                  {g.o.detalle} · {todas ? "todas las terminaciones" : "según terminación de CUIT"}
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      <Link href="/vencimientos" className="mt-1.5 pt-3.5 border-t border-white/[0.14] text-[15px] font-bold text-ambar-500 hover:underline underline-offset-4">
        Ver los de mi CUIT →
      </Link>
    </div>
  );
}
