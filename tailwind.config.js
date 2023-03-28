/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    backgroundImage:{
      'bghome':"url('../public/home/bannerhome.webp')",
      'bglogin':"url('../public/login/loginbanner.jpg')",
      'custombggrey': 'linear-gradient(to bottom,rgba(221,221,221,0) 0%,rgba(200,200,200) 100%)',
      'custombgblue': 'linear-gradient(to bottom,rgba(16,38,59) 0%,rgba(23,27,36) 100%)'
    },
    screens: {
      'xs': '320px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    fontFamily: {
      "dmsans": ["DM Sans", 'sans-serif'],
      "cormorant": ["Cormorant", 'sans-serif']
    },
    extend:{
      animation:{
        // fade: 'fadeIn .3s ease-in-out'
      },
      keyframes: theme => ({
        // fadeIn: {
        //   '0%': { opacity: 0 },
        //   '100%': { opacity:1}
        // }
      })
    }
  },
  plugins: [],
}
