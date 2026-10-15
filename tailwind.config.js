/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F0F5FA",
          100: "#E0ECF5",
          200: "#C5D9EA",
          300: "#9CBED9",
          400: "#5D93BF",
          500: "#2E6D9E",
          600: "#1A4F79",
          700: "#0F3B5F", // Primary Logo Navy Blue
          800: "#0B2C47", // Deep Navy
          900: "#081E31", // Dark Midnight Navy
          950: "#040F19",
        },
        gold: {
          50: "#FEFBF2",
          100: "#FDF4DC",
          200: "#FBE7B3",
          300: "#F9D682",
          400: "#F8C64E",
          500: "#F7B924", // Primary Logo Warm Yellow / Gold
          600: "#D69A12",
          700: "#AA7607",
          800: "#875C08",
          900: "#6E4A09",
        },
        neutral: {
          900: "#0B1520",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
          400: "#94A3B8",
          200: "#E2E8F0",
          100: "#F1F5F9",
          50: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        card: "30px",
        table: "20px",
        pill: "9999px",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
