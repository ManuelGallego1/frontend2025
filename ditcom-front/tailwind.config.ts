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
        primary: "",
      },
    },
  },
  plugins: [],
} satisfies Config;
