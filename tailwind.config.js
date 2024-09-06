/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      colors: {
        'back-dark-color': 'rgb(24,25,26)',
        'logo-color': 'rgb(10, 173, 10)',
        'green-color': '#00462D',
        'second-dark-color': '#242528',
        'light-color': '#fafafa',
        'green-light-color': '#004d40',
        'second-light-color': '#b4b4b4',
        'gold-color': '#FFF37B',
        'second-gold-color': '#E1F310',
      }
    },
  },
  darkMode: 'class',
  plugins: [require('flowbite/plugin', '@tailwindcss/forms')],
}

