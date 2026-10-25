import { Manrope } from "next/font/google";

// Tipografía de marca (rebranding 2026). Manrope es variable:
// cubre todos los pesos (400–800) con un solo archivo.
export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
