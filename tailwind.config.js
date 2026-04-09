/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],       // body text
        heading: ['"DM Sans"', 'sans-serif'] // headings
      },
    },
  },
  plugins: [
    //require('@tailwindcss/typography'),
  ],
}

