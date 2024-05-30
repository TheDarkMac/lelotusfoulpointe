/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",
    "./assets/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        lotus: {
          green1:   '#74bc44',
          pink1 :   '#f33cfc',
          violet1:  '#945bfc',
          green2:   '#a6d284',
          pink2:    '#f46cfc',
          violet2:  '#d450ff'
        }
      }
    },
  },
  plugins: [],
}

