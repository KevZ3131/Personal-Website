/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        faustina: ['Faustina', 'serif'],
        alfa: ["Alfa Slab One", 'serif']
      },
      colors: {
        warmBeige: '#F5E9DA',
        softCreamWhite: '#FFFDF8',
        navyBlue: '#1D3C5D',
        lightCyan: '#4169E1'
      }
    },
  },
  plugins: [],
}

