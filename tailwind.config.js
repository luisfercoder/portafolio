/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme:
   {
    extend: {
      fontFamily: {
        'principal title':['League Gothic', 'sans-serif']

      },

      
    },
  },
  plugins: [require('tailwindcss-animated')],
}

