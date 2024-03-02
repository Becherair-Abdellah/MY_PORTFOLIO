/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using the class variant
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif']
      },
      backgroundColor: {
        mainColor: '#333333ff',
        secondColor: '#33331cff',
        thirdColor: '#666666ff',
        redColor: '#ff014f',
        otherColor: '#00dd8eff',
        BgTextColor: '#f2f2f2ff',
        BGmenu: '#252525',
      },
      textColor: {
        TextColor: '#f2f2f2ff',
        TextredColor: '#ff014f',
      },
      stroke: {
        strokColor: '#f2f2f2ff'
      },
      colors: {
        c1: "#FF008C",
        c2: "#D309E1",
        c3: "#9C1AFF",
        c4: "#7700FF",
        c5: "#4400FF",
      },

    },
  },
  plugins: [],
}
