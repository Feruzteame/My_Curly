/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '780px',
        'lg': '1024px',
      },
    },
    
  },
  plugins: [],
}

