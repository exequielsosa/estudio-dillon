import Link from "next/link";
import { Isotipo } from "@/components/brand/Logo";

const LINK = "font-bold text-ambar-500 underline decoration-ambar-500/60 underline-offset-[3px] hover:text-ambar-100";
const P = "text-[15px] lg:text-base leading-[1.7] text-tinta-200";

const PILARES = [
  { n: "01", titulo: "Claridad", texto: "Te explicamos qué pagar, cuándo y por qué, sin tecnicismos." },
  { n: "02", titulo: "A tu medida", texto: "Un monotributista que empieza no necesita lo mismo que una sociedad con empleados." },
  { n: "03", titulo: "Online en todo el país", texto: "CABA, provincia o cualquier jurisdicción, sin traslados innecesarios." },
  { n: "04", titulo: "Nos anticipamos", texto: "Controlamos tus vencimientos para evitar multas, omisiones y sorpresas." },
];

export default function PorQueElegirnos() {
  return (
    <section aria-labelledby="titulo-porque" className="relative mt-12 lg:mt-24 w-screen ml-[calc(50%-50vw)] bg-tinta-900 overflow-hidden py-12 lg:py-24">
      <Isotipo variant="blanco" size={520} className="absolute -right-28 -top-24 opacity-[0.05] pointer-events-none" />
      <div className="relative max-w-[1307px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-20 [&>*]:min-w-0">
        <div className="flex flex-col gap-4">
          <p className="text-xs lg:text-[13px] font-bold tracking-[0.2em] text-ambar-500">POR QUÉ ELEGIRNOS</p>
          <h2 id="titulo-porque" className="text-[28px] lg:text-[40px] font-extrabold tracking-[-0.03em] leading-[1.12] text-white">
            Por qué elegir Estudio Contable Dillon
          </h2>
          <p className={P}>
            Elegir Estudio Contable Dillon es elegir un equipo que entiende
            tanto la parte técnica como la realidad cotidiana de quienes
            trabajan y emprenden en Argentina. No todos los clientes
            necesitan lo mismo. Un monotributista que recién empieza no
            tiene las mismas necesidades que una sociedad con empleados, ni
            una startup en crecimiento requiere el mismo acompañamiento que
            un profesional independiente.
          </p>
          <p className={P}>
            Por eso adaptamos nuestro servicio a cada perfil. Nos enfocamos
            en brindar soluciones concretas, evitar complicaciones,
            anticipar problemas y ordenar la información fiscal y contable
            de manera eficiente.
          </p>
          <p className={P}>
            Trabajamos con compromiso, responsabilidad y criterio
            profesional. Nos importa que cada cliente pueda concentrarse en
            su actividad principal, sabiendo que cuenta con un estudio
            contable que se ocupa de sus obligaciones y lo acompaña en cada
            etapa.{" "}
            <Link
              href="/contacto"
              className={LINK}
            >
              Contactanos
            </Link>{" "}
            para coordinar una primera consulta.
          </p>
          <div className="mt-2.5 flex items-center gap-4 lg:gap-5 px-5 py-5 lg:px-6 lg:py-[22px] rounded-[20px] bg-white/[0.06] border border-white/[0.12]">
            <span className="text-[56px] lg:text-[72px] font-extrabold leading-[0.9] tracking-[-0.04em] text-ambar-500">+20</span>
            <span className="text-[15px] lg:text-base leading-[1.45] font-semibold text-white">años de experiencia acompañando a empresas, monotributistas y particulares</span>
          </div>
          <Link href="/contacto" className="self-stretch sm:self-start text-center mt-1.5 text-base font-extrabold text-tinta-900 bg-ambar-500 px-[22px] py-[15px] rounded-[14px] hover:brightness-105">
            Coordiná una primera consulta
          </Link>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-x-12 lg:gap-y-11 content-center">
          {PILARES.map((p) => (
            <li key={p.n} className="flex flex-col gap-2 lg:gap-3 pt-5 lg:pt-[22px] border-t border-white/[0.16]">
              <span className="text-[36px] lg:text-[44px] font-extrabold leading-none tracking-tight text-ambar-500">{p.n}</span>
              <span className="text-[19px] lg:text-[21px] font-extrabold text-white">{p.titulo}</span>
              <span className="text-[15px] leading-relaxed text-tinta-200">{p.texto}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
