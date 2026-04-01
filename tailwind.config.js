/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#01D957",
        "accent-dim": "#01D95720",
        "accent-mid": "#01D95740",
        dark: {
          900: "#050505",
          800: "#0A0A0A",
          700: "#0F0F0F",
          600: "#141414",
          500: "#1A1A1A",
          400: "#222222",
          300: "#2A2A2A",
        },
      },
      fontFamily: {
        sans: ["var(--font-general)", "system-ui", "sans-serif"],
        display: ["var(--font-cabinet)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "grid-fade": "grid-fade 4s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "grid-fade": {
          "0%, 100%": { opacity: "0.03" },
          "50%": { opacity: "0.06" },
        },
      },
    },
  },
  plugins: [],
};
