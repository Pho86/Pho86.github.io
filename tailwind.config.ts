import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        'default': '1280px'
      },
      colors: {
        // Map Tailwind colors to CSS variables
        'bg-light': 'var(--color-bg-light)',
        'bg-dark': 'var(--color-bg-dark)',
        'bg-primary': 'var(--color-bg-primary)',
        text: 'var(--color-text)',
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          950: 'var(--color-primary-950)',
          dark: 'var(--color-primary-dark)',
          light: 'var(--color-primary-light)',
          darker: 'var(--color-primary-darker)',
        },
      },
    },
    fontFamily: {
      pacifico: ["var(--font-pacifico)"],
    }
  },
  plugins: [],
} satisfies Config;
