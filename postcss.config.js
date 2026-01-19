module.exports = (ctx) => ({
  plugins: {
    //build:lite, build:liteUtils, build:liteVars, build:bakung, 
    'postcss-import': {},
    //build:lite, build:liteUtils, build:liteVars, build:bakung, 
    'cssnano': {},
    //build:lite, build:liteUtils, build:liteVars, build:bakung, 
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
