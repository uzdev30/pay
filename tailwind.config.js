/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#00f6ff",
        lightWhite: "rgba(255, 255, 255, 0.7)",
        lightBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1220px",
      xl: "1700px",
    },
  },
  plugins: [],
};
