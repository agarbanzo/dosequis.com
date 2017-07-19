"use strict";

let path = require("path"),
    webpack = require("webpack"),
    parts = require("./webpack-parts"),
    CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    autoprefixer = require('autoprefixer'),
    SpritesmithPlugin = require('webpack-spritesmith'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    cssloaders = [
        {loader: 'css-loader', options: { importLoaders: 2 }},
        {loader: 'postcss-loader' },
        {
            loader:'sass-loader?outputStyle=&includePaths[]=' + path.resolve(__dirname, './dev/scss')   
        }
    ];

    function getPlugins() {
      var plugins = [];

       plugins.push(new CommonsChunkPlugin({
          names: ["common"],
          minChunks: 6
       }));

        plugins.push( 
          new webpack.LoaderOptionsPlugin({
            options: {
              postcss: [
                autoprefixer(),
              ]
             }
          }));

        plugins.push( 
            new webpack.ProvidePlugin({
                'scrollmagic': 'imports?this=>global!exports?scrollmagic!scrollmagic',
        }));  


       plugins.push( new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }));
        plugins.push( new webpack.ProvidePlugin({
            "_": "underscore"
        }));   
        plugins.push( new webpack.ProvidePlugin({
            "createjs": "createjs"
        }));   

        plugins.push(
            new webpack.DllReferencePlugin({
            context: path.join(__dirname, "dev"),
            manifest: require("./dll/vendor-manifest.json")
        }));   

         plugins.push(new ExtractTextPlugin('./css/[name].css'));

         plugins.push(new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.optimize\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorOptions: { discardComments: {removeAll: true } },
          canPrint: true
        }));

         plugins.push( new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, './dev/sprites'),
                glob: '**/ico/*.png'
            },
            target: {
                image: path.resolve(__dirname, './dev/sprites/sprite.png'),
                css: [
                    path.resolve(__dirname, './dev/sprites/sprite.scss'),
                    path.resolve(__dirname, './dev/sprites/sprite.css')
                ]
            },
             apiOptions: {
                cssImageRef: "~sprite.png"
            }
        }));

         plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: false,
                minimize: true,
                beautify: false,
                comments: false,
                compress: {
                warnings: false
            }
        }));

      return plugins;
    }


module.exports = {
    entry: parts.entrypoints(),
    output: {
        path: path.join(__dirname, '/_build'),
        filename: 'js/[name].js',
        chunkFilename: "js/chunk-[name].js?ver=[chunkhash]",
        publicPath: '/_build/'
    },
    devtool: 'eval',
    module: {

    rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader: 'babel-loader',
                    options: {
                      presets:['es2015'],
                      plugins: ["es6-promise","transform-remove-console"]
                    }
                  },
                include: [
                        path.join(__dirname, "dev") //important for performance!
                    ]
                },
                { 
                    test: /\.json/,
                    use: 'json-loader'
                },
                {
                  test: /createjs/,
                  use: [
                    'imports-loader?this=>window',
                    'exports-loader?createjs'
                  ]
                },
                 {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    use: [{
                        loader:'url-loader',
                        options:{
                            limit:10000,
                            name:'img/img-[hash:6].[ext]'
                            }
                        }]
                    },
                {
                    test: /\.(css|scss)$/,
                  use: ExtractTextPlugin.extract({
                          fallback: 'style-loader',
                          loader: cssloaders,
                        })
                },
                {
                    test: /\.html$/,
                    use:[{
                        loader:'mustache-loader'
                    }]
                }
            ],
            
    },
    plugins:getPlugins(),
    resolve: {
        extensions: ['.js', '.scss','.css','.png','.jpg'],
        modules: [
        path.join(__dirname, './dev'),
        "node_modules","sprites","web_modules"
        ],
        alias: parts.aliases()
    }
};

