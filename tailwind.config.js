/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#393e46",
        teal: "#00adb5",
        grey: "#eeeeee",
        navbarbg: "rgb(34, 40, 49, 0.9)"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
