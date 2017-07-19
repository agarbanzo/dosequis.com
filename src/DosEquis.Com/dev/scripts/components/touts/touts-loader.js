'use strict'

import ScrollMagic from'scrollmagic';

const AboutTout = require('./about');
const BeerFinderTout = require('./beer-finder');
const BeerRecipeTout = require('./beer-recipe');
const BrewingTout = require('./brewing');
const FaqTout = require('./faq');

export default class ToutsLoader {
    constructor() {
        this.toutsClassesArray = [];
        this.createToutClassesArray(); 
        $(()=>{
            this.scroller = new ScrollMagic.Controller();
            this.createScenes();
        });
    }
    createScenes() {
        let self = this;
        let touts = self.toutsClassesArray;
        var playedOnce = false;
        let preloadScene = new ScrollMagic.Scene({
                triggerElement: '#bottom-touts',
                duration: $("#bottom-touts").height(),
                offset: -700
            }).addTo(this.scroller);
        let scene = new ScrollMagic.Scene({
                triggerElement: '#bottom-touts',
                duration: $("#bottom-touts").height(),
                offset: -100
            }).addTo(this.scroller);

        preloadScene.on("enter", function (event) {
            var touts = self.toutsClassesArray;
            for (var i in touts) {
                touts[i].create();
            }
        });
        scene.on("enter", function (event) {
            // console.log("======= PLAY TOUTS");
            for (var i in touts) {
                touts[i].create(true);
                touts[i].playTimeline();
            }
        });
        scene.on("leave", function (event) {
            // console.log("======= PAUSE TOUTS");
            for (var i in touts) {
                touts[i].pause();
            }
        });
        scene.on("progress", function() {
            // console.log("======= PROGRESS");
            if (touts[0].canvasObj.isEnabled) {
                if (!playedOnce) {
                    // console.log("play it...")
                    for (var i in touts) {
                        touts[i].playTimeline();
                    }
                    playedOnce = true;
                }
            }
        });
    }
    createToutClassesArray() {
        let self = this
        var touts = $('#bottom-touts .tout');
        touts.each(function() {
            var toutName = $(this).data('tout');
            var toutClass;
            switch (toutName) {
                case "about":
                    toutClass = AboutTout;
                    break;
                case "beerfinder":
                    toutClass = BeerFinderTout;
                    break;
                case "beerrecipe":
                    toutClass = BeerRecipeTout;
                    break;
                case "brewing":
                    toutClass = BrewingTout;
                    break;
                case "faq":
                    toutClass = FaqTout;
                    break;
            }
            self.toutsClassesArray.push(toutClass);
        });
    }
}
var toutsLoader = new ToutsLoader();