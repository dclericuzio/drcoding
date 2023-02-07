/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
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
