import { Montserrat, Titillium_Web } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-titillium",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
