/** @type {import('tailwindcss').Config} */
export default {
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
        'heroBg': "linear-gradient(180deg, rgba(9, 22, 31, 0.70) 0%, #09161F 1000%), url('./img/heroBg.jpg')"
      }
    },
  },
  plugins: [],
}