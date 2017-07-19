var path = require("path");

module.exports = function(config) {
    config.set({
        basePath: './',

        browsers: ['PhantomJS'],

        files: [
           './node_modules/phantomjs-polyfill/bind-polyfill.js',
            './tests/agegate_spec.js',
            //'./tests/barfinder_spec.js',
            //'./tests/calculator_spec.js'
        ],

        frameworks: ['jasmine'],

        plugins: [
            require('karma-phantomjs-launcher'),
            require('karma-webpack'),
            require('karma-jasmine'),
            require('karma-coverage'),
            require('phantomjs-polyfill')
        ],
        
        browsers: [ 'PhantomJS' ],

        preprocessors: {
            'tests/*_spec.js': ['webpack', 'coverage'],
            'dev/scripts/**/*.js': ['webpack', 'coverage'],
            'dev/scss/**/*.scss': ['webpack', 'coverage'],
            'dev/sprites/sprite.png': ['webpack', 'coverage']
        },

        webpack: {
            module: {
                loaders: [
                    { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' },
                    { test: require.resolve("jquery"),
                    loader: "expose?$!expose?jQuery"},
                    {
                        test: /\.scss$/,
                        loaders: ['style', 'css', 'sass']                 
                    },
                    {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['url-loader?limit=10000&name=img/img-[hash:6].[ext]']}
                ]
            },
            resolve: {
                extensions: ['', '.js', '.scss','.css','.png','.jpg'],
                root: [__dirname + './dev'],
                modulesDirectories: ["node_modules","scss","sprites"],
                 alias:{
                    scss : path.join(__dirname, "dev/scss"),
                    config:path.join(__dirname, "../../dev/scss/config"),
                    utils : path.join(__dirname, "./dev/scripts/utils"),
                    vendor:path.join(__dirname, "./dev/scripts/vendor"),
                    components:path.join(__dirname, "./dev/scripts/components")
                  }
            },
            watch: true
        }
    });
};