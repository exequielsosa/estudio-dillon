import Link from "next/link";
import Logo from "@/components/brand/Logo";

const SERVICIOS = [
  { href: "/impuestos", label: "Liquidación de impuestos" },
  { href: "/sueldos", label: "Liquidación de haberes" },
  { href: "/monotributo", label: "Monotributo" },
  { href: "/tramites", label: "Gestión de trámites" },
];

const RECURSOS = [
  { href: "/vencimientos", label: "Vencimientos 2026" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contacto", label: "Contacto" },
];

const REDES = [
  { href: "https://www.instagram.com/maugexxiv", label: "Instagram" },
  { href: "https://www.linkedin.com/in/maria-eugenia-dillon-05346113/", label: "LinkedIn" },
  { href: "https://twitter.com/maugexxiv?lang=es", label: "X (Twitter)" },
];

const EMAIL = "estudiodillonsosa@gmail.com";

const Titulo = ({ children }) => (
  <h2 className="mb-4 text-xs font-bold tracking-[0.2em] text-tinta-300">{children}</h2>
);

const linkClase = "text-[15px] text-tinta-100 hover:text-white hover:underline underline-offset-4 decoration-ambar-500";

const FooterLayout = () => {
  const anio = new Date().getFullYear();
  return (
    <footer className="bg-tinta-900 text-white mt-12">
      <div className="mx-auto max-w-screen-xl px-4 pt-14 pb-8">
        {/* Bloque de cierre con llamado a la acción */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between pb-10 border-b border-tinta-700">
          <div className="max-w-md">
            <Link href="/" aria-label="Estudio Dillon, ir al inicio" className="inline-block">
              <Logo variant="blanco" size={44} />
            </Link>
            <p className="mt-5 text-base leading-relaxed text-tinta-200">
              Contadores para PyMEs, profesionales y monotributistas. Atención en CABA y online en todo el país.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/541158959823"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 rounded-xl bg-whatsapp font-bold text-tinta-950 hover:brightness-95"
            >
              Escribinos por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center px-5 py-3 rounded-xl border-2 border-white font-bold text-white hover:bg-white hover:text-tinta-900 transition-colors"
            >
              Hacé tu consulta
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          <div>
            <Titulo>SERVICIOS</Titulo>
            <ul className="space-y-3">
              {SERVICIOS.map((l) => (
                <li key={l.href}><Link href={l.href} className={linkClase}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <Titulo>RECURSOS</Titulo>
            <ul className="space-y-3">
              {RECURSOS.map((l) => (
                <li key={l.href}><Link href={l.href} className={linkClase}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <Titulo>CONTACTO</Titulo>
            <ul className="space-y-3">
              <li><a href="tel:+541158959823" className={linkClase}>+54 11 5895-9823</a></li>
              <li>
                <a href="https://wa.me/541158959823" target="_blank" rel="noopener noreferrer" className={linkClase}>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}?subject=Consulta%20a%20Estudio%20Dillon`} className={`${linkClase} break-all`}>
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Titulo>SEGUINOS</Titulo>
            <ul className="space-y-3">
              {REDES.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkClase}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 border-t border-tinta-700 text-sm text-tinta-300 sm:flex-row sm:justify-between">
          <span className="text-tinta-300">© {anio} Estudio Dillon. Todos los derechos reservados.</span>
          <span className="text-tinta-300">
            Sitio por{" "}
            <a href="https://www.exequielsosa.com.ar/" target="_blank" rel="noopener" className="text-tinta-100 hover:text-white underline-offset-4 hover:underline">
              Exequiel Sosa
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
