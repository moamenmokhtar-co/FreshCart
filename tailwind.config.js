/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      colors: {
        'logo-color': 'rgb(62,183,55)',
        'green-color': '#00462D',
        'second-dark-color': '#1E1E20'
      }
    },
  },
  plugins: [require('flowbite/plugin', '@tailwindcss/forms')],
}

