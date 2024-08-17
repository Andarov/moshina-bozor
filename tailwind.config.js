const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#E70A32",
        111: "#111",
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },

      maxWidth: {
        base: "1210px",
      },

      maxHeight: {
        lg: "984px",
      },

      minHeight: {
        sm: "540px",
      },

      backgroundImage: {
        hero: "linear-gradient(180deg, rgba(9, 9, 9, 0.50) 0%, #09161F 1000%), url('./img/bg/hero.jpg')",
        detailBg:
          "linear-gradient(180deg, rgba(9, 9, 9, 0.70) 0%, #09161F 1000%), url('./img/banerDetail.webp')",
      },

      boxShadow: {
        "header-shadow": "0px 5px 20px 0px rgba(44, 41, 51, 0.10)",
      },

      dropShadow: {
        "header-logo-shadow": "0px 0px 2px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
});
