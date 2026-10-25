/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      // Alias viejos: apuntan a Manrope hasta rediseñar las páginas que los usan.
      title: ["var(--font-manrope)", "system-ui", "sans-serif"],
      titillium: ["var(--font-manrope)", "system-ui", "sans-serif"],
    },
    extend: {
      // Paleta de marca (sistema visual v1)
      colors: {
        tinta: {
          50: "#F4F6FA",
          100: "#E3E7EF",
          200: "#C9D1E3",
          300: "#AEB9D3",
          400: "#8494BB",
          500: "#4A5670", // texto secundario
          600: "#3A5592",
          700: "#2A4275",
          800: "#1E3058",
          900: "#14213D", // color principal
          950: "#0B1426",
        },
        ambar: {
          50: "#FEF8EE", // fondos
          100: "#FDE9C8", // halo de foco
          500: "#F2A93B", // acento (no usar para texto sobre blanco)
          800: "#8A5A10", // texto ámbar
        },
        exito: "#1F7A4D",
        error: "#B42318",
        whatsapp: "#25D366", // solo para el botón de WhatsApp
      },
      screens: {
        // breakpoint propio del navbar: el menu horizontal necesita ~1200px
        nav: "1200px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
