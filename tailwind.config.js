module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      
      boxShadow: {
        '3xl': '0 20px 25px -5px rgba(230, 180, 15, 0.9), 0 10px 10px 5px rgba(8, 131, 161, 0.9)',
      },
      fontFamily: {
        fantasy: 'fantasy',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
