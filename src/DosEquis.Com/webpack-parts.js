"use strict";

let webpack = require('webpack'),
path = require("path");

exports.entrypoints = function(){
	return{
        common:["./dev/scripts/main"],
        beerlocator:['./dev/scripts/beerlocator/beerlocator'],
        home:['./dev/scripts/home/home'],
        mim:['./dev/scripts/mim/mim'],
        beersandrecipes:['./dev/scripts/beersandrecipes/beersandrecipes'],
        productdetail:['./dev/scripts/beersandrecipes/productdetail'],
        recipedetail:['./dev/scripts/beersandrecipes/recipedetail'],
        about:['./dev/scripts/about/about'],
        brewing:['./dev/scripts/about/brewing'],
        faqs:['./dev/scripts/about/faqs'],
        legal:['./dev/scripts/legal/legal'],
        cervezasdemexico:['./dev/scripts/cervezasdemexico/cervezasdemexico'],
        //"promotions/cfp":['./dev/scripts/promotions/cfp'],
        //"promotions/cinco":['./dev/scripts/promotions/cinco'],
				"promotions/summer":['./dev/scripts/promotions/summer'],
        history:['./dev/scripts/about/history']
        }
}

exports.plugins = function(){
    return[


        ]
}

exports.loaders = function(){
        return[


        ]
}

exports.aliases = function(){
        return{
            scss : path.join(__dirname, "./dev/scss"),
            config:path.join(__dirname, "./dev/scss/config"),
            services:path.join(__dirname, "./dev/scripts/services"),
            utils : path.join(__dirname, "./dev/scripts/utils"),
            vendor:path.join(__dirname, "./dev/scripts/vendor"),
            components:path.join(__dirname, "./dev/scripts/components"),
            createjs:path.join(__dirname, "./dev/scripts/vendor/createjs")
        }
}
