module.exports = (ctx) => ({
  plugins: {
    'postcss-import': {},
    'cssnano': {},
    'postcss-normalize-charset': {},
    '@csstools/postcss-global-data': process.env.NODE_ENV !== 'buildStatic' ? false : {
      files: [
        './node_modules/@bakung-ui/minimax.css/css/_variables.css',
        './css/_variables.css'
      ],
      lateRemover: true,
    },
    'postcss-custom-properties': process.env.NODE_ENV !== 'buildStatic' ? false : {
      preserve: false,
      strict: false
    },
  },
});
