/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      'active': '#009FFF',
      'active': '#FF7A52',
      'text': '#222',
      'dark': '#000',
      'gray-dark':'#878787',
      'gray-light': '#fafafa',
      'gray-light2': '#f2f2f2',
      'gray-light3': '#dddddd',
      'white': '#fff',
      'yellow':'#fdbc00',
      'blue-light':'#4490c7',
      'blue-dark':'#5856d6',
      'orage':'#f28c17',
      'error':'#fd3f61',
      'success':'#4caf50'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
