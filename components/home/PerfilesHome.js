import Image from "next/image";

const PERFILES = [
  { n: "01", perfil: "monotributista", titulo: "Monotributista", texto: "Categoría, recategorización, facturación y deuda, bajo control.", tags: ["Recategorización", "Facturación", "Deuda"], msg: "Hola, soy monotributista y quiero asesoramiento con mi monotributo.", img: "/home/perfil-monotributista.jpg" },
  { n: "02", perfil: "profesional_ri", titulo: "Profesional o responsable inscripto", texto: "IVA, Ganancias e Ingresos Brutos, liquidados mes a mes.", tags: ["IVA", "Ganancias", "Ingresos Brutos"], msg: "Hola, soy profesional / responsable inscripto y quiero asesoramiento con mis impuestos.", img: "/home/perfil-profesional.jpg" },
  { n: "03", perfil: "startup_pyme", titulo: "Startup o pyme", texto: "Estructura fiscal, sueldos y orden contable para crecer.", tags: ["Sueldos", "Estructura fiscal", "Reportes"], msg: "Hola, tengo una startup / pyme y quiero asesoramiento contable.", img: "/home/perfil-pyme.jpg" },
  { n: "04", perfil: "empresa_sociedad", titulo: "Empresa o sociedad", texto: "Administración contable, trámites societarios y reportes.", tags: ["Contabilidad", "Sociedades", "Trámites"], msg: "Hola, tengo una empresa / sociedad y quiero asesoramiento contable.", img: "/home/perfil-empresa.jpg" },
];

const Flecha = ({ chica }) => (
  <span className={`${chica ? "w-8 h-8" : "w-9 h-9"} shrink-0 rounded-full bg-ambar-500 flex items-center justify-center transition-transform group-hover:translate-x-0.5`}>
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="#14213D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  </span>
);

export default function PerfilesHome() {
  return (
    <section aria-labelledby="titulo-perfiles" className="mt-12 lg:mt-24 w-screen ml-[calc(50%-50vw)] bg-tinta-50 py-10 lg:py-[88px]">
      <div className="max-w-[1307px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-2.5 lg:gap-10">
          <div>
            <p className="text-xs lg:text-[13px] font-bold tracking-[0.2em] text-ambar-800">¿QUIÉN SOS?</p>
            <h2 id="titulo-perfiles" className="mt-1.5 lg:mt-2 text-[26px] lg:text-[38px] font-extrabold tracking-tight leading-tight text-tinta-900">
              Te acompañamos según tu situación
            </h2>
          </div>
          <p className="max-w-[380px] text-[15px] lg:text-base leading-relaxed text-tinta-500">
            No todos los clientes necesitan lo mismo. Elegí tu perfil y mirá cómo trabajamos con vos.
          </p>
        </div>

        <div className="mt-5 lg:mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 lg:gap-5">
          {PERFILES.map((p) => (
            <a key={p.n} href={`https://wa.me/541158959823?text=${encodeURIComponent(p.msg)}`} target="_blank" rel="noopener noreferrer" data-perfil={p.perfil}
              className="group bg-white rounded-[18px] lg:rounded-[22px] overflow-hidden flex flex-col shadow-[0_1px_2px_rgba(20,33,61,0.06),0_12px_28px_rgba(20,33,61,0.08)] transition-shadow hover:shadow-[0_1px_2px_rgba(20,33,61,0.06),0_18px_40px_rgba(20,33,61,0.14)]">
              <div className="relative h-[150px] lg:h-[210px] overflow-hidden">
                <Image src={p.img} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(11,20,38,0.6)_100%)]" aria-hidden="true" />
                <span className="absolute top-3 left-3 lg:top-3.5 lg:left-3.5 text-xs lg:text-[13px] font-extrabold tracking-wide text-tinta-900 bg-white px-2.5 py-1.5 rounded-lg">{p.n}</span>
                {/* En mobile el título va sobre la foto */}
                <span className="lg:hidden absolute left-4 right-4 bottom-3 text-[19px] font-extrabold leading-tight text-white">{p.titulo}</span>
              </div>
              <div className="p-4 lg:p-[22px] lg:pb-5 flex flex-col gap-2.5 lg:gap-3 flex-1">
                <h3 className="hidden lg:block text-xl font-extrabold leading-tight tracking-tight text-tinta-900">{p.titulo}</h3>
                <p className="text-sm lg:text-[15px] leading-relaxed text-tinta-500">{p.texto}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <li key={t} className="text-[11px] lg:text-xs font-bold text-tinta-700 bg-tinta-50 border border-tinta-100 px-2.5 py-1 rounded-full">{t}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-2.5 lg:pt-3.5 border-t border-tinta-50 flex justify-between items-center">
                  <span className="text-sm lg:text-[15px] font-extrabold text-tinta-900">Consultanos por WhatsApp</span>
                  <Flecha />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
