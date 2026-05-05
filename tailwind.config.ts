import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0b0b0b",
        card: "#101010",
        border: "rgba(255,255,255,0.08)",
        foreground: "#f5f5f5",
        muted: "#8b8b8f",
        accent: "#22c55e",
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
      boxShadow: {
        panel: "0 24px 80px rgba(0, 0, 0, 0.45)",
      },
      letterSpacing: {
        ui: "0.18em",
      },
      transitionTimingFunction: {
        precise: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
