/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fcfcfc",
          "200": "#787878",
          "300": "#252727",
        },
        black: "#2c2b2b",
        white: "#fff",
        cornflowerblue: "#9fb2ff",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
    },
    fontSize: {
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
