// Logo de Estudio Dillon: isotipo en SVG + nombre en texto (Manrope).
// El nombre va como texto real (no imagen) para que se vea nítido y lo lean
// buscadores y lectores de pantalla.
//
// variant: "color"  -> fondos claros
//          "blanco" -> fondos oscuros
// size: alto del isotipo en px (el texto escala en proporción)

const COLORES = {
  color: { trazo: "#14213D", acento: "#F2A93B", nombre: "#14213D", bajada: "#4A5670" },
  blanco: { trazo: "#FFFFFF", acento: "#F2A93B", nombre: "#FFFFFF", bajada: "#C9D1E3" },
};

export function Isotipo({ variant = "color", size = 44, className = "" }) {
  const c = COLORES[variant] || COLORES.color;
  return (
    <svg
      viewBox="14 10 76 80"
      width={Math.round(size * 0.95)}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="18" y="14" width="14" height="72" rx="2" fill={c.trazo} />
      <path d="M38 14 H50 A36 36 0 0 1 85.87 47 H69.77 A20 20 0 0 0 50 30 H38 Z" fill={c.trazo} />
      <path d="M38 86 H50 A36 36 0 0 0 85.87 53 H69.77 A20 20 0 0 1 50 70 H38 Z" fill={c.acento} />
    </svg>
  );
}

export default function Logo({ variant = "color", size = 44, className = "" }) {
  const c = COLORES[variant] || COLORES.color;
  return (
    <span className={`inline-flex items-center ${className}`} style={{ gap: size * 0.28 }}>
      <Isotipo variant={variant} size={size} />
      <span className="flex flex-col" style={{ gap: size * 0.03 }}>
        <span
          className="font-bold leading-none"
          style={{ fontSize: size * 0.23, letterSpacing: size * 0.09, color: c.bajada }}
        >
          ESTUDIO
        </span>
        <span
          className="font-extrabold leading-none"
          style={{ fontSize: size * 0.6, letterSpacing: size * -0.018, color: c.nombre }}
        >
          Dillon
        </span>
      </span>
    </span>
  );
}
