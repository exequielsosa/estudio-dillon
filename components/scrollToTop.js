import { useEffect, useState } from "react";

// Va a la derecha, encima del botón de WhatsApp (antes estaba al centro y tapaba el texto).
const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      className={`fixed z-40 right-[22px] bottom-[82px] md:right-8 md:bottom-[100px] w-11 h-11 md:w-12 md:h-12 rounded-full bg-white border border-tinta-100 shadow-[0_6px_16px_rgba(20,33,61,0.14)] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="#14213D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] md:w-5 md:h-5" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
