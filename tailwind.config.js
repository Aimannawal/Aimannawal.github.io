/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        background: '#f8f9fe',
        accent: '#698ae8',
        primary: '#353ba7',
        secondary: '#2d4286',
    },
    fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
    },
    },
  },
  plugins: [],
}

