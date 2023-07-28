/** @type {import('tailwindcss').Config} */

const colors = [, "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
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
        TextredColor: '#ff014f',
      },
      stroke:{
        strokColor: '#f2f2f2ff'
      },
      borderColor:{
        c1:"#FF008C",
        c2:"#D309E1",
        c3:"#9C1AFF",
        c4:"#7700FF",
        c5:"#4400FF",
      }
    },
  },
  plugins: [],
}