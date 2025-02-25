import type { Config } from "tailwindcss";

export default {
  content: [
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          500: "#ef4444", // Rojo claro
          600: "#dc2626", // Rojo fuerte
          800: "#991b1b", // Rojo oscuro
        },
      },
      fontFamily: {
        madimi: ["Madimi One", "sans-serif"], // Agregar la fuente aquí
      },
    },
  },
  plugins: [],
} satisfies Config;
