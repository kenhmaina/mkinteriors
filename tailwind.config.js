/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#E7E7E7",
        secondaryColor: "FFFFFF",
        darkBg: "2C2C2C",
        blueAccent: "001BFF",
      },
      spacing: {
        smallScreen: "6px",
        defaultScreen: "6px",
        mediumScreen: "6vw",
        largeScreen: "9vw",
      },
    },
  },
  plugins: [],
};
