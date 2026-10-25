import Image from "next/image";
import Link from "next/link";
import { Isotipo } from "@/components/brand/Logo";
import ProximosVencimientos from "./ProximosVencimientos";

const Check = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0" fill="none" stroke="#F2A93B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

const IconoWA = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="#0B1426" aria-hidden="true">
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.3C2.2 6.5 6.6 2.2 12 2.2c2.6 0 5.1 1 7 2.9 1.9 1.9 2.9 4.3 2.9 7 0 5.4-4.4 9.7-9.9 9.7z" />
  </svg>
);

const CONFIANZA = ["Atención en CABA y online en todo el país", "Respuestas claras, sin tecnicismos", "Tus vencimientos bajo control"];

export default function HeroHome() {
  return (
    <section className="relative -mt-4 w-screen ml-[calc(50%-50vw)] overflow-hidden bg-tinta-950 lg:min-h-[700px] flex items-center">
      <Image src="/home/hero.jpg" alt="" fill priority sizes="100vw" className="object-cover object-[70%_50%]" />
      {/* Degradé: oscuro donde va el texto, más transparente hacia la foto */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,20,38,0.78)_0%,rgba(11,20,38,0.92)_45%,rgba(11,20,38,0.98)_100%)] lg:bg-[linear-gradient(90deg,rgba(11,20,38,0.97)_0%,rgba(11,20,38,0.9)_40%,rgba(11,20,38,0.55)_70%,rgba(11,20,38,0.35)_100%)]" aria-hidden="true" />
      <Isotipo variant="blanco" size={480} className="hidden lg:block absolute -right-24 -bottom-32 opacity-[0.05]" />

      <div className="relative w-full max-w-[1307px] mx-auto px-4 py-9 lg:py-20 grid gap-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-20 items-center [&>*]:min-w-0">
        <div className="flex flex-col gap-[18px] lg:gap-6">
          <p className="text-[11px] lg:text-[13px] font-extrabold tracking-[0.18em] lg:tracking-[0.2em] text-ambar-500">
            ESTUDIO CONTABLE DILLON · CABA Y ONLINE
          </p>
          <h1 className="text-[36px] lg:text-[60px] font-extrabold tracking-[-0.035em] leading-[1.06] text-white">
            Contadores para PyMEs y monotributistas
          </h1>
          <p className="max-w-[580px] text-base lg:text-[19px] leading-relaxed text-tinta-200">
            Estudio contable en Capital Federal para monotributistas, profesionales, startups y empresas. Tus impuestos en orden y tus vencimientos bajo control.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://wa.me/541158959823" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 text-base font-extrabold text-tinta-950 bg-whatsapp px-[22px] py-4 rounded-[14px] hover:brightness-95">
              <IconoWA />
              <span className="text-tinta-950">Escribinos por WhatsApp</span>
            </a>
            <Link href="/vencimientos"
              className="inline-flex items-center justify-center text-base font-extrabold text-tinta-900 bg-ambar-500 px-[22px] py-4 rounded-[14px] hover:brightness-105">
              Ver mis vencimientos
            </Link>
          </div>
          <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-x-6">
            {CONFIANZA.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-semibold text-tinta-100"><Check />{t}</li>
            ))}
          </ul>
        </div>
        <ProximosVencimientos />
      </div>
    </section>
  );
}
