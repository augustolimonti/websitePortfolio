module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'lato-regular': ['Lato-Regular', 'sans-serif'],
        'lato-bold': ['Lato-Bold', 'sans-serif'],
        'lato-light': ['Lato Light', 'sans-serif'],
        'lato-semibold': ['Lato Semibold', 'sans-serif'],
        'signature': ['Yellowtail', 'cursive'],
      },
      colors: {
        back: {
          100: '#f8f2e4',
          200: '#71badb',
          300: '#5f89af',
          400: '#0B0B60'
        },
        font: {
          100: '#21D0B2',
          200: '#34F5C5'
        },
        other: {
          100: '#d3523c',
          200: '#EC380B'
        }
      },
      screens: {
        '3xl': '2500px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
