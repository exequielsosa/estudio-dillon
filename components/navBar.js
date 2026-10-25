import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import useClickAway from "@/hooks/useClickAway";
import Logo from "@/components/brand/Logo";

// Mismas rutas y textos que antes (enlaces internos intactos para SEO).
const LINKS = [
  { href: "/", label: "Inicio", activo: (r) => r === "/" },
  { href: "/impuestos", label: "Impuestos" },
  { href: "/sueldos", label: "Sueldos" },
  { href: "/monotributo", label: "Monotributo" },
  { href: "/tramites", label: "Trámites" },
  { href: "/vencimientos", label: "Vencimientos", activo: (r) => r.startsWith("/vencimientos") },
  { href: "/noticias", label: "Noticias", activo: (r) => r.startsWith("/noticias") },
];

const TEL = "+541158959823";
const TEL_VISIBLE = "+54 11 5895-9823";
const WHATSAPP = "https://wa.me/541158959823";

const IconoTelefono = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

const NavBar = () => {
  const router = useRouter();
  const route = router.asPath.split("#")[0];
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierra el menú al cambiar de página
  useEffect(() => setIsOpen(false), [route]);

  // El ref envuelve todo el header (incluido el botón), así el botón
  // no cuenta como "click afuera" y puede abrir y cerrar el menú.
  const ref = useClickAway(() => setIsOpen(false));

  const esActivo = (link) => (link.activo ? link.activo(route) : route === link.href);

  return (
    <header
      ref={ref}
      className={`fixed top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_2px_12px_rgba(20,33,61,0.10)]" : "border-b border-tinta-100"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto h-[72px] nav:h-20 px-4 flex items-center justify-between gap-4" aria-label="Principal">
        <Link href="/" aria-label="Estudio Dillon, ir al inicio" className="shrink-0">
          <Logo size={38} />
        </Link>

        {/* Escritorio */}
        <ul className="hidden nav:flex items-center gap-7">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={esActivo(link) ? "page" : undefined}
                className={`text-[15px] font-semibold text-tinta-900 border-b-2 pb-1 transition-colors hover:border-ambar-500 ${
                  esActivo(link) ? "border-ambar-500" : "border-transparent"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden nav:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${TEL}`}
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-tinta-900 px-3 py-2.5 rounded-xl hover:bg-tinta-50"
            aria-label={`Llamar al ${TEL_VISIBLE}`}
          >
            <IconoTelefono className="w-4 h-4 text-tinta-900" />
            {TEL_VISIBLE}
          </a>
          <Link
            href="/contacto"
            aria-current={route === "/contacto" ? "page" : undefined}
            className="inline-flex items-center text-[15px] font-bold text-white bg-tinta-900 px-5 py-3 rounded-xl hover:bg-tinta-800 transition-colors"
          >
            Contacto
          </Link>
        </div>

        {/* Mobile */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="nav:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-tinta-900 hover:bg-tinta-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ambar-500"
          aria-controls="menu-mobile"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {isOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      <div
        id="menu-mobile"
        className={`nav:hidden overflow-hidden border-t border-tinta-100 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="px-4 pt-2 pb-3">
          {[...LINKS, { href: "/contacto", label: "Contacto" }].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={esActivo(link) ? "page" : undefined}
                className={`flex items-center justify-between py-3 text-lg font-semibold border-b border-tinta-50 ${
                  esActivo(link) ? "text-tinta-900" : "text-tinta-800"
                }`}
              >
                {link.label}
                {esActivo(link) && <span className="w-2 h-2 rounded-full bg-ambar-500" aria-hidden="true" />}
              </Link>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-3 px-4 pb-5">
          <a
            href={`tel:${TEL}`}
            className="inline-flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-tinta-900 font-bold text-tinta-900"
          >
            <IconoTelefono className="w-4 h-4 text-tinta-900" />
            Llamar
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center py-3 rounded-xl bg-whatsapp font-bold text-tinta-950"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
