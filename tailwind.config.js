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
      }
    },
  },
  plugins: [],
}