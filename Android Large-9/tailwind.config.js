/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fcfcfc",
          "200": "#808080",
          "300": "#252727",
        },
        white: "#fff",
        black: "#2c2b2b",
        "gray-50": "#f1f1f1",
        royalblue: {
          "100": "#5883f7",
          "200": "#5472db",
        },
        darkslategray: "#454545",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        quicksand: "Quicksand",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xs: "12px",
      "9xl-5": "28.5px",
      "xs-4": "11.4px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
