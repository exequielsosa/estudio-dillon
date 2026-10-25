import Link from "next/link";
import ModalImage from "react-modal-image";
import Taxes from "../components/taxes";
import SeoVencimientos from "../components/seo/seoVencimientos";
import HerramientaVencimientos from "../components/vencimientos/HerramientaVencimientos";
import IndiceContenidos from "../components/vencimientos/IndiceContenidos";

const WHATSAPP = "https://wa.me/541158959823";

const Vencimientos = () => {
  return (
    <>
      <SeoVencimientos />
      <main className="w-full">
        {/* Encabezado (franja de ancho completo) */}
        <section className="-mt-4 w-screen ml-[calc(50%-50vw)] bg-tinta-50">
          <div className="max-w-[1307px] mx-auto px-4 pt-6 pb-24 md:pt-10 md:pb-32 flex flex-col gap-2.5 md:gap-3.5">
            <nav aria-label="Ruta" className="text-[13px] md:text-sm font-semibold text-tinta-500">
              <Link href="/" className="text-tinta-500 underline underline-offset-2">Inicio</Link>
              <span className="text-tinta-500"> / Vencimientos</span>
            </nav>
            <h1 className="max-w-[860px] text-[30px] md:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.1] text-tinta-900">
              Calendario de vencimientos ARCA (ex AFIP) para el 2026
            </h1>
            <p className="max-w-[720px] text-base md:text-lg leading-relaxed text-tinta-500">
              Elegí la terminación de tu CUIT y mirá qué vence. Abajo tenés el detalle de cada impuesto.
            </p>
            <p className="text-[13px] md:text-sm font-semibold text-tinta-500">Última actualización: 25 de octubre de 2026</p>
          </div>
        </section>

        {/* Herramienta + llamado a la acción */}
        {/* grid-cols-1 + min-w-0: sin esto, una fila que no se corta (ej. los perfiles) ensancha la columna más que la pantalla */}
        <div className="-mt-[72px] md:-mt-[88px] grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-6 items-start [&>*]:min-w-0">
          <HerramientaVencimientos />
          <aside className="bg-tinta-900 rounded-[20px] p-[22px] md:p-7 flex flex-col gap-3 md:gap-4">
            <div className="hidden md:flex w-12 h-12 rounded-xl bg-ambar-500 items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-tinta-900" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="13" r="8" /><path d="M12 9v4l2 2M5 3L2 6M22 6l-3-3" />
              </svg>
            </div>
            <h2 className="text-xl md:text-[22px] font-extrabold leading-tight text-white">¿Se te pasan los vencimientos?</h2>
            <p className="text-[15px] leading-relaxed text-tinta-200">
              Delegalos. Nos ocupamos de liquidar, presentar y avisarte antes de cada fecha.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="text-center text-base font-bold text-tinta-950 bg-whatsapp px-[18px] py-3.5 rounded-xl hover:brightness-95">
              Escribinos por WhatsApp
            </a>
            <Link href="/impuestos"
              className="hidden md:block text-center text-[15px] font-bold text-white border-2 border-white px-[18px] py-3 rounded-xl hover:bg-white hover:text-tinta-900 transition-colors">
              Ver servicios de impuestos
            </Link>
          </aside>
        </div>

        {/* Detalle por impuesto */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 gap-4 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12 items-start [&>*]:min-w-0">
          <IndiceContenidos />
          <article className="flex flex-col gap-5">
            <Taxes />

            <figure className="border border-tinta-100 rounded-2xl p-5 md:p-8 flex flex-col gap-4">
              <figcaption className="text-[17px] font-bold text-tinta-900">Calendario anual 2026 en imagen</figcaption>
              <div className="rounded-xl overflow-hidden border border-tinta-100 [&_img]:w-full">
                <ModalImage small="/calendario_anual_2026.jpg" large="/calendario_anual_2026.jpg" alt="Vencimientos 2026" />
              </div>
              <p className="text-[13px] text-tinta-500">Tocá la imagen para ampliarla. Para fechas exactas por CUIT usá la herramienta de arriba.</p>
            </figure>
          </article>
        </div>
      </main>
    </>
  );
};

export default Vencimientos;
