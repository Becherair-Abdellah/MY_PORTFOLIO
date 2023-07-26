/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ubuntu: ['Ubuntu','sans-serif']
      },
      backgroundColor: {
        mainColor: '#333333ff',
        secondColor: '#33331cff',
        thirdColor: '#666666ff',
        redColor: '#ff014f',
        otherColor: '#00dd8eff',
        BgTextColor: '#f2f2f2ff',
      },
      textColor:{
        TextColor: '#f2f2f2ff',
      },
      stroke:{
        strokColor: '#f2f2f2ff'
      }
    },
  },
  plugins: [],
}