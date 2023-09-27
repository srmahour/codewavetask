/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity:'0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity:'1' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '0' },
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s linear 1',
        'fadeOut': 'fadeOut 0.3s linear 1',
      }
    },
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
      white:'white',
      black:'black'
    },
    fontFamily: {
      sans: ["Inter var, sans-serif",],
    },
  },
  plugins: [],
}