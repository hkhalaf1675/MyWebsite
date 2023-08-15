/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        mainColor : '#FFFF',
        primary: '#67dbda'
      },
      keyframes :{
        moveRight:{
          "0%" : {translate: "0 0"},
          "50%" : {translate: "0.5rem 0"},
          "100%" : {translate: "0 0"},
        }
      },
      animation :{
        moveRight : "moveRight 1s ease-in-out infinite",
      },
      screen:{
        sm:'576px',
        md:'768px',
        lg:'992px',
        xl:'1200px',
        xxl:'1400px'
      }
    },
  },
  plugins: [],
}