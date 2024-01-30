const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main': '#E70A32',
        '111': '#111'
      },
      fontFamily:{
        'montserrat': ['Montserrat', 'sans-serif']
      },
      maxWidth:{
        'base': '1210px'
      },
      backgroundImage:{
        'heroBg': "linear-gradient(180deg, rgba(9, 9, 9, 0.70) 0%, #09161F 1000%), url('./img/heroBg.jpg')",
        'detailBg': "linear-gradient(180deg, rgba(9, 9, 9, 0.70) 0%, #09161F 1000%), url('./img/banerDetail.webp')",
      },
      boxShadow: {
        'header-shadow': '0px 5px 20px 0px rgba(44, 41, 51, 0.10)',
      }
    },
  },
  plugins: [],
})