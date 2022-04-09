module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: { maxMd: { max: '767px' } },
      gridTemplateRows: {
        10: 'repeat(10, minmax(0, 1fr))',
      },
      colors: {
        darkGrey: '#222831',
        darkCard: 'rgb(48, 48, 48)',
        darkBody: '#424242',
        slate: '#f1f5f9',
      },
      boxShadow: {
        '3xl': '0 20px 25px -5px rgba(230, 180, 15, 0.9), 0 10px 10px 5px rgba(8, 131, 161, 0.9)',
        bottom: '0px 10px 10px -5px rgba(0,0,0,0.1)',
      },
      fontFamily: {
        hiragino: 'Hiragino Sans W3',
        helvetica: 'Roboto, Helvetica, Arial, sans-serif',
      },
      outline: {
        red: '2px solid #f87171',
      },
    },
  },
  variants: {},
  important: true,
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '#FC0 1px 0 2px',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
