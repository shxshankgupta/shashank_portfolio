import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#0a0a0a",
        card: "#111111",
        border: "#1f1f1f",
        foreground: "#ffffff",
        muted: "#a1a1aa",
        accent: "#22c55e",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
      boxShadow: {
        panel: "0 24px 80px rgba(0, 0, 0, 0.45)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.04)",
      },
      letterSpacing: {
        ui: "0.18em",
      },
      backdropBlur: {
        panel: "20px",
      },
      transitionTimingFunction: {
        precise: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
