import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'default' : '1280px'
      },
      colors: {
        primary: {
          50: "#fefefe",
          100: "#f0f0f0",
          200: "#dcdede",
          300: "#c1c5c5",
          400: "#9fa4a4",
          500: "#757C7C",
          600: "#454a4a",
          700: "#0f1010",
          800: "#070707",
          900: "#020202",
          950: "#000000",
          "darker": "#5A7D80",
        },

        'primary-dark': "#131212",
        'primary-light': "#3a3a3a",
        'secondary': "#292525",
        'text': "#1D1A1A",
        'bg-primary': "#F5F5F5",
        'bg-dark': "#E4E4E4",
        'bg-light': "#EDEDED",
      },
    },
  },
  plugins: [],
} satisfies Config;
