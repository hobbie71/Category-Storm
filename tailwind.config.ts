/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0082b4", // Your main primary color
          600: "#0369a1",
          700: "#0c4a6e",
          800: "#164e63",
          900: "#0f172a",
        },
        accent: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#07b88e", // Your main accent color
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
      },
      fontFamily: {
        heading: [
          "Comic Sans MS",
          "Trebuchet MS",
          "Lucida Grande",
          "Lucida Sans Unicode",
          "sans-serif",
        ],
        subheading: ["Trebuchet MS", "Arial Black", "Helvetica", "sans-serif"],
        body: ["Verdana", "Geneva", "Tahoma", "sans-serif"],
        mono: ["Courier New", "Monaco", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
