"use strict";

let path = require("path"),
    webpack = require("webpack"),
    parts = require("./webpack-parts"),
    CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    autoprefixer = require('autoprefixer'),
    SpritesmithPlugin = require('webpack-spritesmith'),
    HappyPack = require('happypack'),
    merge = require('webpack-merge');

    function getPlugins() {
      var plugins = [];


        plugins.push( new HappyPack({
          id:'sass',
          loaders: [ "style-loader", "css-loader", 'sass-loader?outputStyle=&includePaths[]=' + path.resolve(__dirname, './dev/scss') ],
          cache: process.env.HAPPY_CACHE === '1',
          threads: 4
        }));
        plugins.push( new HappyPack({
          id:'js',
          loaders: [ "babel-loader"],
          threads: 4
        }));

       plugins.push(
          new CommonsChunkPlugin({
           names:["common"],
           minChunks: 8
       }));

       plugins.push(
            new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery"
        }));
        plugins.push(
            new webpack.ProvidePlugin({
            "_": "underscore"
        }));

        plugins.push( 
            new webpack.ProvidePlugin({
                'createjs': 'createjs'
        }));  

        // plugins.push( new webpack.ProvidePlugin({
        //     "createjs": "createjs"
        // }));  
        plugins.push(
            new webpack.ProvidePlugin({
                'scrollmagic': 'imports-loader?this=>global!exports-loader?scrollmagic!scrollmagic',
        }));

         plugins.push(
            new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, './dev/sprites'),
                glob: '**/ico/*.png'
            },
            target: {
                image: path.resolve(__dirname, './dev/sprites/sprite.png'),
                css: [
                    path.resolve(__dirname, './dev/sprites/sprite.styl'),
                    path.resolve(__dirname, './dev/sprites/sprite.scss'),
                    path.resolve(__dirname, './dev/sprites/sprite.css')
                ]
            },
             apiOptions: {
                cssImageRef: "~sprite.png"
            }
        }));
        plugins.push( new webpack.HotModuleReplacementPlugin());

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
                exclude: /(node_modules)/,
                use: [ 'happypack/loader?id=js' ],
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
                test: /\.css|scss$/,
                use: ['happypack/loader?id=sass'],
                include: [
                    path.join(__dirname, "dev/scss") //important for performance!
                ],
            },

            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: ['url-loader?limit=10000&name=img/img-[hash:6].[ext]'],
                include: [
                    path.join(__dirname, "dev") //important for performance!
                ],
            },
            {
                test: /\.html$/,
                use: 'mustache-loader'
            }
            ]
    },
    plugins:getPlugins(),
    // postcss: [
    //     autoprefixer({
    //         browsers: ['last 2 versions']
    //     })
    // ],
    resolve: {
        extensions: ['.js', '.scss','.css','.png','.jpg'],
        modules: [
            path.join(__dirname, './dev'),
            "node_modules","sprites","web_modules"
        ],
        alias: parts.aliases(),
    },
   devServer: {
        port: 8089,
        contentBase: path.join(__dirname, '/'),
        publicPath: '/_build',
        historyApiFallback: true,
        host:'0.0.0.0',
        disableHostCheck:true,
        open:true,
        hot: true,
        inline:true,
        proxy: {
        "**": "http://localhost:9090"
        }
    },
};
