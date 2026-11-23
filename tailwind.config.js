/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#972226",
        "primary-container": "#b83b3b",
        "on-primary": "#ffffff",
        "on-primary-container": "#ffe0dd",
        "primary-fixed": "#ffdad7",
        "primary-fixed-dim": "#ffb3ae",
        "on-primary-fixed": "#410005",
        "on-primary-fixed-variant": "#8b191e",
        "inverse-primary": "#ffb3ae",

        "secondary": "#4a607a",
        "secondary-container": "#c8dffe",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#4d637d",
        "secondary-fixed": "#d1e4ff",
        "secondary-fixed-dim": "#b2c8e6",
        "on-secondary-fixed": "#031d34",
        "on-secondary-fixed-variant": "#324861",

        "tertiary": "#524f45",
        "tertiary-container": "#6b675c",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#ede6d9",
        "tertiary-fixed": "#e8e2d5",
        "tertiary-fixed-dim": "#ccc6b9",
        "on-tertiary-fixed": "#1e1c13",
        "on-tertiary-fixed-variant": "#4a473d",

        "background": "#fcf9f8",
        "on-background": "#1b1c1c",

        "surface": "#fcf9f8",
        "on-surface": "#1b1c1c",
        "on-surface-variant": "#584140",
        "surface-dim": "#dcd9d9",
        "surface-bright": "#fcf9f8",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f6f3f2",
        "surface-container": "#f0eded",
        "surface-container-high": "#eae7e7",
        "surface-container-highest": "#e5e2e1",
        "surface-variant": "#e5e2e1",
        "surface-tint": "#ac3233",

        "inverse-surface": "#303030",
        "inverse-on-surface": "#f3f0ef",
        "outline": "#8c716f",
        "outline-variant": "#dfbfbd",

        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "sm": "0.125rem",
        "md": "0.25rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "9999px"
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.75rem",
        "space-xl": "3rem",
        "gutter": "1.5rem",
        "gutter-desktop": "2.5rem",
        "margin": "1.25rem",
        "margin-desktop": "4rem"
      },
      fontFamily: {
        "serif": ["Noto Serif TC", "Noto Serif", "serif"],
        "sans": ["Inter", "Noto Sans TC", "sans-serif"],
        "display": ["Noto Serif TC", "Noto Serif", "serif"],
        "headline": ["Noto Serif TC", "Noto Serif", "serif"],
        "title": ["Noto Serif TC", "Noto Serif", "serif"],
        "label": ["Inter", "Noto Sans TC", "sans-serif"],
        "body": ["Inter", "Noto Sans TC", "sans-serif"]
      }
    },
  },
  plugins: [],
}
