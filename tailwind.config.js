/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['homepage.html','prouct.html','detailmenu.html','profile.html'],
  theme: {
    extend: {
      colors: {
        bg:'#FAFAFA',
        hitam:'#021526',
        title:'#3C6EB7',
        koneo:'#173B6F',
        paragraf:'#494848',
        hover:'rgba(23, 59, 111, 0.2)',
        hover2:'rgba(60, 110, 183, 0.12)',
        stroke:'rgba(23, 59, 111, 0.65)',
        bg2:'rgba(23, 59, 111, 0.15)'
      },
      fontFamily: {
        poppins : 'Poppins',
        ube:'Urbanist'
      },
      screens: {
        '2xs': '320px',
         xs: '480px',
         sm: '640px',    
         md: '768px',    
         lg: '1024px',
         xl: '1280px',
       },
       lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem'},
     container: {
       padding: {
         DEFAULT: '1rem',
         sm: '2rem',
         lg: '4rem',
         xl: '5rem',
         '2xl': '6rem',
       },
     },
    },
  },
  plugins: [],
}

