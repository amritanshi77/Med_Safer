/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F6FBFD",
        surface: "#FFFFFF",
        surfaceAlt: "#EAF4FB",
        primary: { DEFAULT: "#2A9D8F", dark: "#1F7A70", light: "#DCF1EE" },
        navy: "#1B2A3B",
        slate: "#5B6B7A",
        safe: { DEFAULT: "#3FA66C", bg: "#E7F7EE" },
        moderate: { DEFAULT: "#E08E00", bg: "#FFF4E0" },
        danger: { DEFAULT: "#D95C4A", bg: "#FCE9E5" },
        mint: "#CDEEDF",
      },
      fontFamily: {
        display: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      borderRadius: { xl2: "1.5rem", card: "1.25rem" },
      boxShadow: {
        card: "0 4px 20px rgba(27, 42, 59, 0.06)",
        floating: "0 10px 30px rgba(42, 157, 143, 0.25)",
      },
      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
      },
      animation: {
        pulseRing: "pulseRing 2.2s cubic-bezier(0.4,0,0.6,1) infinite",
        breathe: "breathe 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};