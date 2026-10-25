import { useEffect, useRef } from "react";

// Confirmación de envío: ocupa el lugar del formulario y aparece con un fundido suave.
export const ThanksMail = ({ nombre, email, handleClick }) => {
  const titulo = useRef(null);
  // Mueve el foco al mensaje para que los lectores de pantalla lo anuncien
  useEffect(() => { titulo.current && titulo.current.focus(); }, []);

  return (
    <div className="flex-1 flex flex-col justify-center gap-[18px] motion-safe:animate-[entrar_0.35s_ease-out]" role="status">
      <div className="w-14 h-14 rounded-2xl bg-tinta-900 flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="#F2A93B" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      </div>
      <div className="flex flex-col gap-2">
        {/* h3 y no h1: la página ya tiene su propio h1 */}
        <h3 ref={titulo} tabIndex={-1} className="text-2xl md:text-[26px] font-extrabold tracking-tight text-tinta-900 outline-none">
          {nombre ? `¡Gracias, ${nombre}!` : "¡Gracias por tu consulta!"}
        </h3>
        <p className="text-base leading-relaxed text-[#2B344A]">
          Recibimos tu consulta.
          {email ? (
            <>
              {" "}Te vamos a responder a <strong className="text-tinta-900 break-all">{email}</strong>.
            </>
          ) : (
            " Te vamos a responder a la brevedad."
          )}
        </p>
      </div>
      <div className="border-t border-tinta-100 pt-[18px] flex flex-col gap-3">
        <p className="text-sm font-semibold text-tinta-500">¿Es urgente?</p>
        <a href="https://wa.me/541158959823" target="_blank" rel="noopener noreferrer"
          className="self-start text-[15px] font-bold text-tinta-950 bg-whatsapp px-4 py-3 rounded-xl hover:brightness-95">
          Escribinos por WhatsApp
        </a>
      </div>
      <button type="button" onClick={handleClick}
        className="self-start text-[15px] font-bold text-tinta-900 underline underline-offset-4 decoration-ambar-500 hover:decoration-2">
        Enviar otra consulta
      </button>
    </div>
  );
};

export default ThanksMail;
