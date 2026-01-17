module.exports = (ctx) => ({
    plugins: [
        require('postcss-import') (),
        require('cssnano') ({
            preset: 'default'
        })
    ]
});
