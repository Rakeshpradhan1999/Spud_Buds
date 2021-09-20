const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: "#2C2A55",
      discord: "#5865F2",
      twitter: "#39AAFF",
      gray: "#2C2A55",
      lightGray: colors.coolGray,
      text1: "#588224",
      text2: "#268562",
      text3: "#257182",
      text4: "#2C4686",
      text5: "#453486",
      text6: "#651D71",
      text7: "#893737",
      text8: "#76552F",
      text9: "#1A707C",
    },
    backgroundColor: () => ({
      primary: "#161530",
      secondary: "#FCDFB4",
      white: "#fff",
      bg1: "#B7E977",
      bg2: "#77E9C0",
      bg3: "#77D4E9",
      bg4: "#7797E9",
      bg5: "#8E77E9",
      bg6: "#D977E9",
      bg7: "#E97777",
      bg8: "#E9B577",
      bg9: "#77DBE9",
    }),

    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
      fontFamily: {
        sans: ["Rammetto One", "cursive"],
        serif: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
