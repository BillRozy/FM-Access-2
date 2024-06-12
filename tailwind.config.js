/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'purple-dark': 'var(--purple-dark)',
      'purple-pale': 'var(--purple-pale)',
      'pink': 'var(--pink)',
      'pink-light': 'var(--pink-light)'
    },
    screens: {
      'mobile': '375px',
      'bigmobile': '425px',
      'desktop': '1440px',
    },
    extend: {},
  },
  plugins: [],
}

