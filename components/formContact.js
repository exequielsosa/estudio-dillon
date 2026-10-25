import { useRef, useState } from "react";
import Link from "next/link";
import ThanksMail from "../components/thanks";
import { sendContactForm } from "../lib/api";
import { trackEvent } from "../gatg";

const initValues = {
  name: "",
  email: "",
  message: "",
  website: "", // honeypot anti-spam
};

const initState = { isLoading: false, error: "", values: initValues };

const EMAIL = "ma.eugenia.dillon@gmail.com";

const linkTexto = "font-bold text-tinta-900 underline underline-offset-[3px] decoration-ambar-500 hover:decoration-2";
const campo =
  "w-full font-[inherit] text-base text-tinta-900 placeholder:text-tinta-400 bg-white px-4 py-3.5 rounded-[10px] border-[1.5px] border-tinta-200 outline-none transition-[border-color,box-shadow] duration-150 hover:border-tinta-300 focus:border-tinta-600 focus:shadow-[0_0_0_3px_rgba(20,33,61,0.08)] disabled:bg-tinta-50 disabled:border-tinta-100 disabled:text-tinta-400";
const etiqueta = "text-sm font-bold text-tinta-900 group-disabled:text-tinta-400";

const OtrosCanales = ({ className = "" }) => (
  <div className={`flex-col gap-2.5 md:gap-3 ${className}`}>
    <p className="text-sm font-bold text-tinta-500">¿Preferís otro canal?</p>
    <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap">
      <a href="https://wa.me/541158959823" target="_blank" rel="noopener noreferrer"
        className="text-center text-[15px] font-bold text-tinta-950 bg-whatsapp px-4 py-3 rounded-xl hover:brightness-95">
        WhatsApp
      </a>
      <a href="tel:+541158959823"
        className="text-center text-[15px] font-bold text-tinta-900 bg-white border border-tinta-200 px-4 py-[11px] rounded-xl hover:border-tinta-400">
        <span className="sm:hidden text-tinta-900">Llamar</span>
        <span className="hidden sm:inline text-tinta-900">+54 11 5895-9823</span>
      </a>
      <a href={`mailto:${EMAIL}?subject=Consulta%20a%20Estudio%20Dillon`}
        className="col-span-2 sm:col-span-1 text-center text-[15px] font-bold text-tinta-900 bg-white border border-tinta-200 px-4 py-[11px] rounded-xl hover:border-tinta-400">
        Email
      </a>
    </div>
  </div>
);

// Tarjeta con el formulario y sus estados (enviando, enviado, error).
// Se usa en el bloque global y arriba de todo en /contacto.
export const TarjetaFormulario = ({ titulo = "Comunicate con nosotros", bajada, ubicacion = "bloque" }) => {
  const [state, setState] = useState(initState);
  const [success, setSuccess] = useState(false);
  const [enviado, setEnviado] = useState({ nombre: "", email: "" }); // para personalizar el "gracias"
  const [altoTarjeta, setAltoTarjeta] = useState(null); // el "gracias" ocupa lo mismo que el formulario
  const tarjeta = useRef(null);

  const { values, isLoading, error } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [target.name]: target.value },
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, isLoading: true, error: "" }));
    try {
      await sendContactForm(values);
      setAltoTarjeta(tarjeta.current ? tarjeta.current.offsetHeight : null);
      setEnviado({ nombre: values.name.trim().split(/\s+/)[0], email: values.email.trim() });
      setState(initState);
      setSuccess(true);
      trackEvent("generate_lead", { formulario: "contacto", ubicacion });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  const canSubmit =
    state.values.name.trim().length > 1 &&
    state.values.email.trim().length > 1 &&
    state.values.message.trim().length >= 10;

  const handleClose = () => {
    setState(initState);
    setSuccess(false);
    setAltoTarjeta(null);
  };

  return (
    <div ref={tarjeta} style={success && altoTarjeta ? { minHeight: altoTarjeta } : undefined}
      className="bg-white rounded-[18px] md:rounded-[20px] p-[22px] md:p-8 shadow-[0_12px_32px_rgba(20,33,61,0.08)] flex flex-col">
      {success ? (
        <ThanksMail nombre={enviado.nombre} email={enviado.email} handleClick={handleClose} />
      ) : (
        <>
          {titulo && (
            <h3 className={`${bajada ? "mb-1" : "mb-3 md:mb-3.5"} text-xl md:text-[22px] font-extrabold text-tinta-900`}>{titulo}</h3>
          )}
          {bajada && <p className="mb-3.5 md:mb-4 text-[15px] leading-normal text-tinta-500">{bajada}</p>}
          <form id="contact-form" onSubmit={(e) => onSubmit(e)} aria-busy={isLoading} className="relative w-full">
            {/* Mientras envía, el formulario queda visible y bloqueado: nada salta de lugar */}
            <fieldset disabled={isLoading} className="group flex flex-col gap-1.5 min-w-0">
            <label htmlFor="name" className={etiqueta}>Nombre y apellido</label>
            <input type="text" id="name" name="name" value={values.name} onChange={handleChange}
              placeholder="Tu nombre" required maxLength={100} autoComplete="name" className={`${campo} mb-2.5 md:mb-3`} />
            {/* Honeypot: invisible para personas, los bots suelen completarlo */}
            <input type="text" name="website" value={values.website} onChange={handleChange} tabIndex={-1}
              autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] w-px h-px opacity-0" />
            <label htmlFor="email" className={etiqueta}>Email</label>
            <input type="email" id="email" name="email" value={values.email} onChange={handleChange}
              placeholder="nombre@empresa.com" required autoComplete="email" className={`${campo} mb-2.5 md:mb-3`} />
            <label htmlFor="message" className={etiqueta}>Detalle</label>
            <textarea id="message" name="message" value={values.message} onChange={handleChange}
              placeholder="Contanos el motivo de tu consulta..." required minLength={10} maxLength={5000} rows={4}
              className={`${campo} resize-none`} />
            </fieldset>
            {error && (
              <div role="alert" className="mt-3.5 flex gap-3 items-start px-4 py-3.5 rounded-xl bg-[#FEF3F2] border border-[#F4C7C3]">
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-px" fill="none" stroke="#B42318" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" /><path d="M12 7.5v5.5M12 16.5h.01" />
                </svg>
                <div className="flex flex-col gap-1">
                  <span className="text-[15px] font-bold text-error">No pudimos enviar tu consulta</span>
                  <span className="text-sm leading-normal text-[#7A271A]">
                    Probá de nuevo en un momento o escribinos por{" "}
                    <a href="https://wa.me/541158959823" target="_blank" rel="noopener noreferrer" className="font-bold text-[#7A271A] underline">WhatsApp</a>.
                    Lo que escribiste no se perdió.
                  </span>
                </div>
              </div>
            )}
            <button type="submit" disabled={!canSubmit || isLoading}
              className={`w-full mt-4 flex items-center justify-center gap-2.5 text-base font-bold text-white p-4 rounded-xl transition-colors ${
                isLoading ? "bg-tinta-900 cursor-progress" : "bg-tinta-900 hover:bg-tinta-800 disabled:bg-tinta-300 disabled:cursor-not-allowed"
              }`}>
              {isLoading && (
                <span className="w-[18px] h-[18px] rounded-full border-[2.5px] border-white/30 border-t-ambar-500 animate-spin" aria-hidden="true" />
              )}
              <span className="text-white">{isLoading ? "Enviando consulta…" : error ? "Reintentar envío" : "Enviar consulta"}</span>
            </button>
          </form>
        </>
      )}
    </div>
  );
};

const FormContact = () => {
  return (
    <section id="consulta" className="scroll-mt-24 mt-14 md:mt-20 -mx-4 w-[calc(100%+2rem)] md:mx-0 md:w-full bg-tinta-50 md:rounded-3xl px-4 py-9 md:p-12"
      aria-label="Servicios contables - Estudio Dillon">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_520px] gap-5 lg:gap-12 items-start [&>*]:min-w-0">
        {/* Columna izquierda: texto SEO (sin cambios de contenido) */}
        <div>
          <p className="text-xs md:text-[13px] font-bold tracking-[0.2em] text-ambar-800">CONSULTAS</p>
          <h2 className="mt-1.5 md:mt-2 text-[25px] md:text-[32px] font-extrabold tracking-tight leading-tight text-tinta-900">
            Consultá por nuestros servicios contables
          </h2>
          <div className="mt-3.5 md:mt-[18px] flex flex-col gap-2.5 md:gap-3 text-[15px] md:text-base leading-[1.7] text-[#2B344A]">
            <p className="text-[#2B344A]">
              Si estás buscando un contador en Capital Federal, necesitás ordenar
              tu situación fiscal, inscribirte en el{" "}
              <Link href="/monotributo" className={linkTexto}>monotributo</Link>,{" "}
              <Link href="/impuestos" className={linkTexto}>liquidar impuestos</Link>, gestionar una empresa o recibir
              asesoramiento contable para tu negocio, podemos ayudarte.
            </p>
            <p className="text-[#2B344A]">
              En Estudio Contable Dillon trabajamos para que tus impuestos estén
              en orden, tus{" "}
              <Link href="/vencimientos" className={linkTexto}>vencimientos</Link>{" "}
              bajo control y tus decisiones cuenten con respaldo profesional.
            </p>
            <p className="text-[#2B344A]">
              Contactanos y contanos tu situación. Te ayudamos a encontrar la
              mejor forma de organizar tu contabilidad, cumplir con tus
              obligaciones y ganar tranquilidad para enfocarte en lo más
              importante: hacer crecer tu actividad.
            </p>
          </div>
          <OtrosCanales className="hidden lg:flex mt-7" />
        </div>

        <TarjetaFormulario />

        <OtrosCanales className="flex lg:hidden" />
      </div>
    </section>
  );
};

export default FormContact;
