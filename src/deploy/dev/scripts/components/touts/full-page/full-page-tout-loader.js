'use strict'

import ScrollMagic from'scrollmagic';

const BrewingFullRightTout = require('./brewingright');
const BrewingFullLeftTout = require('./brewingleft');

export default class FullToutsLoader {
    constructor() {
        this.toutsClassesArray = [];
        this.isPlaying;
        // this.createToutClassesArray(); 
        $(()=>{
            this.scroller = new ScrollMagic.Controller();
            this.toutsClassesArray.push(BrewingFullRightTout);
            this.toutsClassesArray.push(BrewingFullLeftTout);
            this.createScenes();
        });
    }
    createScenes() {
        let self = this;
        let touts = self.toutsClassesArray;
        var playedOnce = false;
        let preloadScene = new ScrollMagic.Scene({
                triggerElement: '.full-width-tout',
                duration: $(".full-width-tout").height(),
                offset: -500
            }).addTo(this.scroller);
        let scene = new ScrollMagic.Scene({
                triggerElement: '.full-width-tout',
                duration: $(".full-width-tout").height()*5,
                offset: -100
            }).addTo(this.scroller);

        preloadScene.on("enter", function (event) {
            // console.log("======= PRELOAD FULL PAGE TOUTS");
            var touts = self.toutsClassesArray;
            for (var i in touts) {
                touts[i].create();
            }
        });
        scene.on("enter", function (event) {
            // console.log("======= PLAY FULL PAGE TOUTS");
            self.isPlaying = true;
            for (var i in touts) {
                touts[i].create(true);
                touts[i].playTimeline();
            }
            setTimeout(function() {
                // in case preload and load happen at same time
               for (var i in touts) {
                touts[i].create(true);
                touts[i].playTimeline();
            }
            }, 2000);
        });
        scene.on("leave", function (event) {
            // console.log("======= PAUSEFULL PAGE TOUTS");
            self.isPlaying = false;
            for (var i in touts) {
                touts[i].pause();
            }
        });
        scene.on("progress", function() {
            // console.log("======= PROGRESS");
            self.isPlaying = true;
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
    // createToutClassesArray() {
        
        // let self = this
        // var touts = $('.full-width-tout');
        // touts.each(function() {
        //     var toutName = $(this).data('tout');
        //     var toutClass;
        //     switch (toutName) {
        //         case "brewing-full":
        //             toutClass = BrewingFullRightTout;
        //             break;
        //     }
        //     self.toutsClassesArray.push(toutClass);
        // });
    // }
}
var fullToutsLoader = new FullToutsLoader();