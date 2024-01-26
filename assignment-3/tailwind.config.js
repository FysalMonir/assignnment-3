/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        gray: '#131318', // Define a custom gray color
        white: '#FFF',
        borderColor: 'rgba(19, 19, 24, 0.10)',
       
        
      },
      backgroundImage: {
        'image': "url('./images/1.png')" // Define a custom background image
      }
    }
  },
  plugins: [],
}


