/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1ebde3",
        primaryDarker: "#427888",
      },
      screens: {
        xs: "425px",
      },
    },
  },
  plugins: [],
};
