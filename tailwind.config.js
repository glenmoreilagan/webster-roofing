/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      mons: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'my-background': '#FCFAFF',
        'my-primary': '#410F70',
        'my-secondary': '#DBC8FF',
      },
    },
  },
  plugins: [],
}
