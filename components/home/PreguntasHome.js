import { useState } from "react";
import Link from "next/link";
import { faqsHome } from "@/lib/faqs/home";

export default function PreguntasHome() {
  const [abierta, setAbierta] = useState(0);
  return (
    <section aria-labelledby="titulo-faq" className="mt-12 lg:mt-24 mb-4 grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] gap-6 lg:gap-[72px] items-start [&>*]:min-w-0">
      <div className="flex flex-col gap-3 lg:gap-3.5 lg:sticky lg:top-28">
        <p className="text-xs lg:text-[13px] font-bold tracking-[0.2em] text-ambar-800">PREGUNTAS FRECUENTES</p>
        <h2 id="titulo-faq" className="text-[26px] lg:text-[34px] font-extrabold tracking-tight leading-[1.15] text-tinta-900">
          Lo que más nos consultan
        </h2>
        <p className="text-[15px] lg:text-base leading-relaxed text-tinta-500">¿No encontrás tu pregunta? Escribinos y te respondemos.</p>
        <Link href="/contacto" className="hidden lg:inline-block self-start text-[15px] font-bold text-tinta-900 px-[18px] py-3 border-2 border-tinta-900 rounded-xl hover:bg-tinta-900 hover:text-white">
          Hacé tu consulta
        </Link>
      </div>

      <div className="border-t border-tinta-100">
        {faqsHome.map((f, i) => {
          const abiertaEsta = abierta === i;
          return (
            <div key={f.pregunta} className="border-b border-tinta-100">
              <h3>
                <button type="button" id={`faq-btn-${i}`} aria-expanded={abiertaEsta} aria-controls={`faq-panel-${i}`}
                  onClick={() => setAbierta(abiertaEsta ? -1 : i)}
                  className="w-full flex justify-between items-center gap-4 py-[18px] lg:py-5 text-left">
                  <span className="text-base lg:text-lg font-bold text-tinta-900">{f.pregunta}</span>
                  <span aria-hidden="true"
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold transition-colors ${abiertaEsta ? "bg-tinta-900 text-white" : "bg-tinta-50 text-tinta-900"}`}>
                    {abiertaEsta ? "−" : "+"}
                  </span>
                </button>
              </h3>
              {/* La respuesta queda siempre en el HTML (SEO); solo se oculta visualmente */}
              <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} className={abiertaEsta ? "block" : "hidden"}>
                <p className="-mt-1 pb-5 max-w-[640px] text-[15px] lg:text-base leading-[1.65] text-tinta-500">{f.respuesta}</p>
              </div>
            </div>
          );
        })}
        <Link href="/contacto" className="lg:hidden mt-5 block text-center text-[15px] font-bold text-tinta-900 px-[18px] py-3 border-2 border-tinta-900 rounded-xl">
          Hacé tu consulta
        </Link>
      </div>
    </section>
  );
}
