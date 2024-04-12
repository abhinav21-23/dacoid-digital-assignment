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
        white: "#fff",
        cornflowerblue: {
          "100": "#8099ff",
          "200": "rgba(140, 177, 255, 0.6)",
        },
        black: "#2c2b2b",
        "gray-100": "#808080",
        darkslateblue: "rgba(42, 67, 156, 0)",
        darkslategray: "rgba(69, 69, 69, 0.04)",
        red: "rgba(255, 0, 0, 0.42)",
        limegreen: {
          "100": "#34b009",
          "200": "rgba(52, 176, 9, 0.5)",
        },
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        "3xs": "10px",
        "mini-3": "14.3px",
        "11xs-5": "1.5px",
      },
    },
    fontSize: {
      "3xs": "10px",
      xs: "12px",
      base: "16px",
      "sm-2": "13.2px",
      "smi-2": "12.2px",
      "xs-2": "11.2px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
