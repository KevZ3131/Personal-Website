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
        lightCyan: '#4169E1',
        midnightBlue: '#191970'
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        fadeInDelay: "fadeIn 2s ease-out",
        slideInLeft: "slideInLeft 1s ease-out",
        slideInRight: "slideInRight 1s ease-out",
        bounceOnHover: "bounce 0.5s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
      }
    },
  },
  plugins: [],
}

