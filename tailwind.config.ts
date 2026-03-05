import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "390px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          light: "#0D1F3C",
          card: "#112040",
        },
        gold: {
          DEFAULT: "#C9A962",
          light: "#E2C98A",
          dark: "#A8893D",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
