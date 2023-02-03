/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      xl: { max: "1600px" },
      xl2: { max: "1440px" },
      lg: { max: "1180px" },
      md: { max: "720px" },
      sm: { max: "580px" },
    },
  },
  plugins: [],
  important: "#root",
};
