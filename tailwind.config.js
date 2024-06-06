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
      },
      height:{
        '150' : '150vh',
      },
      backgroundImage : {
        BUNGALOW_01_1_dark : 'linear-gradient(to bottom right, rgba(0,0,0,0.6) , rgba(0,0,0,0.6)) , url("../images/BUNGALOW_01_1.jpg")',
        BUNGALOW_01_1 : ' url("../images/BUNGALOW_01_1.jpg")',
        BUNGALOW_01_2_dark : 'linear-gradient(to bottom right, rgba(0,0,0,0.6) , rgba(0,0,0,0.6)) , url("../images/BUNGALOW_01_2.jpg")',
        BUNGALOW_01_2 : ' url("../images/BUNGALOW_01_2.jpg")',
        BUNGALOW_01_dark : 'linear-gradient(to bottom right, rgba(0,0,0,0.6) , rgba(0,0,0,0.6)) , url("../images/BUNGALOW_01.jpg")',
        BUNGALOW_01 : ' url("../images/BUNGALOW_01.jpg")',
        BUNGALOW_01_01_dark : 'linear-gradient(to bottom right, rgba(0,0,0,0.6) , rgba(0,0,0,0.6)) , url("../images/BUNGALOW_01_01.jpg")',
        BUNGALOW_01_01 : ' url("../images/BUNGALOW_01_01.jpg")',
        BUNGALOW_03_dark : 'linear-gradient(to bottom right, rgba(0,0,0,0.6) , rgba(0,0,0,0.6)) , url("../images/BUNGALOW_03.jpg")',
        BUNGALOW_03 : ' url("../images/BUNGALOW_03.jpg")',
        BUNGALOW_04_dark : 'linear-gradient(to bottom right, rgba(0,0,0,0.6) , rgba(0,0,0,0.6)) , url("../images/BUNGALOW_03.jpg")',
        BUNGALOW_04 : ' url("../images/BUNGALOW_04.jpg")',
        BUNGALOW_NIGHT_01_dark : 'linear-gradient(to bottom right, rgba(0,0,0,0.6) , rgba(0,0,0,0.6)) , url("../images/BUNGALOW_NIGHT_01.jpg")',
        BUNGALOW_NIGHT_01 : ' url("../images/BUNGALOW_NIGHT_01.jpg")',
        cover_image_dark : 'linear-gradient(to bottom right, rgba(0,0,0,0.6) , rgba(0,0,0,0.6)) , url("../images/cover_image.jpg")',
        cover_image : ' url("../images/cover_image.jpg")',
        EXTERIEUR_01_dark : 'linear-gradient(to bottom right, rgba(0,0,0,0.6) , rgba(0,0,0,0.6)) , url("../images/EXTERIEUR_01.jpg")',
        EXTERIEUR_01 : ' url("../images/EXTERIEUR_01.jpg")',
        EXTERIEUR_02_dark : 'linear-gradient(to bottom right, rgba(0,0,0,0.6) , rgba(0,0,0,0.6)) , url("../images/EXTERIEUR_02.jpg")',
        EXTERIEUR_02 : ' url("../images/EXTERIEUR_02.jpg")',
      }
    },
    keyframes : {
      nav : {
        '0%': {
          transform : 'translateY(-100px)'
        },
        '100%': {
          transform : 'translateY(0px)'
        }
      }
    },
    animation:{
      navsmouth : 'nav 1s linear'
    }
  },
  plugins: [],
}

