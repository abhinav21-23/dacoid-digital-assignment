/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fcfcfc",
          "200": "#252727",
        },
        cornflowerblue: "#829dff",
        black: "#2c2b2b",
        "gray-100": "#808080",
        white: "#fff",
        whitesmoke: "#f1f1f1",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "roboto-condensed": "'Roboto Condensed'",
      },
    },
    fontSize: {
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
