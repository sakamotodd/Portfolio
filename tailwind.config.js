module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))',
      },
      boxShadow: {
        '3xl': '0 20px 25px -5px rgba(230, 180, 15, 0.9), 0 10px 10px 5px rgba(8, 131, 161, 0.9)',
        'bottom': '0px 10px 10px -5px rgba(0,0,0,0.1)'
      },
      fontFamily: {
        fantasy: 'fantasy',
      },
    },
  },
  variants: {
    extend: {},
  },
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
