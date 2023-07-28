module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  theme: {
    extend: {
      zIndex: {
        'negative': '-10',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
