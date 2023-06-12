/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Sans': ['DM Sans', 'sans-serif'],
        'Nunito' : ['Nunito Sans', 'sans-serif'],
        'Poppins' : ['Poppins', 'sans-serif'],
        'blinker' : ['Blinker', 'sans-serif'],
        'space' : ['Space Grotesk', 'sans-serif']
        
          
       },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}