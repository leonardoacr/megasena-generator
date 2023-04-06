/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'background-page': '#151929',
        'background-header': '#2a2b36',
        'background-dashboard': '#24252f',
        'label-color': '#696b7a',
      },
    },
  },
  plugins: [],
}