/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAF8",
        "bg-alt": "#F4F2EE",
        dark: "#1C1917",
        accent: "#E8521A",
        "accent-h": "#D04515",
        text: "#1C1917",
        muted: "#78716C",
        border: "#E7E5E0",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      minHeight: {
        100: "400px",
        125: "500px",
      },
      width: {
        0.75: "3px",
      },
      height: {
        0.75: "3px",
      },
      borderWidth: {
        3: "3px",
      },
      maxWidth: {
        "7xl": "80rem",
        "8xl": "90rem",
      },
      boxShadow: {
        "accent-sm": "0 4px 12px rgba(232, 82, 26, 0.08)",
        accent: "0 8px 24px rgba(232, 82, 26, 0.12)",
        "accent-lg": "0 16px 48px rgba(232, 82, 26, 0.15)",
      },
    },
  },
  plugins: [],
};
