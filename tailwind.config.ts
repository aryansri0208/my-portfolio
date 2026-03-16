import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#111111",
        border: "#1e1e1e",
        amber: "#c9a96e",
        muted: "#5a5450",
        dim: "#2a2520",
        foreground: "#e8e0d4",
        "foreground-muted": "#a09890",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        mono: ["var(--font-dm-mono)", "'Courier New'", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
