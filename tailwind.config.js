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
      sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      title: ["ui-sans-serif", "system-ui"],
      titillium: ["var(--font-titillium)", "system-ui", "sans-serif"],
    },
    extend: {
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
