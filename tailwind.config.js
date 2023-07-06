/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-linear-to-bottom":
          "linear-gradient(to right bottom, #130428, #170b34, #1d0e41, #24104e, #2c115b, #2e115e, #311260, #331263, #30125b, #2c1154, #29114c, #261045);",
        "gradient-radial-to-bottom":
          "radial-gradient(circle, #130428, #170b34, #1d0e41, #24104e, #2c115b, #2e115e, #311260, #331263, #30125b, #2c1154, #29114c, #261045);",
        "gradient-linear-to-right":
          "linear-gradient(to right, #130428, #170b34, #1d0e41, #24104e, #2c115b, #2e115e, #311260, #331263, #30125b, #2c1154, #29114c, #261045);",
        "gradient-linear-to-top":
          "linear-gradient(to left top, #130428, #170b34, #1d0e41, #24104e, #2c115b, #2e115e, #311260, #331263, #30125b, #2c1154, #29114c, #261045);",
      },
      backgroundColor: {
        "background-900": "#1A0B2E",
        "bg-header": " #251C31",
      },
      colors: {
        "purple-100": "#7127BA",
        "purple-200": "#693B93",
        "purple-300": "#2C1250",
      },
      fontFamily: {
        Preahvihear: "Preahvihear",
      },
      screens:{
        "s":"280px",
        "xs":"470px"
      }
    },
  },
  plugins: [],
};
