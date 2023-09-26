/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      primary:{
        100:'#C5C7CA',
        200:'#7F8084',
        300:'#6B6C70',
        400:'#35373B',
        500:'#27292D',
        600:'#191920',
        700:'#131319',
      },
      secondary:'#4A96FF',
      transparent: 'transparent',
      white:'white'
    },
    fontFamily: {
      sans: ["Inter var, sans-serif",],
    },
  },
  plugins: [],
}