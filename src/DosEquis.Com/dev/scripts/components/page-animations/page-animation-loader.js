"use strict"

import ScrollMagic from'scrollmagic';

const Moctezuma = require('./moctezuma');
const EsCerveza = require('./es_cerveza');
const History2011 = require('./history_2011');
const History2016 = require('./history_2016');
const UsMap = require('./us_map');
const GlassOfLager = require('./glass_of_lager');
//const Steam = require('./steam');
// const BrewingFullpageLeft = require('./brewing_fullpage_left');

var scroller = new ScrollMagic.Controller();
var interval;

$( document ).ready(function() {
    if ($('body').hasClass('home')) {
        // createScroller('#brewing-fullpage-left');
    }
    if ($('body').hasClass('history')) {
        createScroller('#moctezuma');
        createScroller('#date-1897');
        createScroller('#date-1983');
        createScroller('#date-2009');
        createScroller('#date-2011');
        createScroller('#date-2016');
    }
    // if ($('body').hasClass('about')) {
    //     createScroller('#about-steam');
    // }
});

function createScroller(el) {
    var animationClass = getAnimationClass(el);
    var playedOnce = false;
    let preloadScene = new ScrollMagic.Scene({
            triggerElement: el,
            duration: $(el).height(),
            offset: -700
        }).addTo(scroller);
    let scene = new ScrollMagic.Scene({
            triggerElement: el,
            duration:$(el).height()
        }).addTo(scroller);

    // preloadScene.on("enter", function () {
    //     if (el !== "#about-steam") {
    //         // console.log("======= PRELOAD ANIM: " + el);
    //         animationClass.create();
    //     }
    // });
    scene.on("enter", function () {
        // console.log("======= PLAY ANIM: " + el);
        animationClass.create(true);
        animationClass.playTimeline();
    });
    scene.on("leave", function () {
        // console.log("======= PAUSE ANIM: " + el);
        animationClass.pause();
    });
    scene.on("progress", function() {
        // console.log("======= PROGRESS: " + el);
        // console.log(animationClass.canvasObj.isEnabled)
        if (animationClass.canvasObj.isEnabled) {
            if (!playedOnce) {
                // console.log("play it...")
                animationClass.playTimeline();
                playedOnce = true;
            }
        }
    });
}
function getAnimationClass(el) {
    var className;
    switch (el) {
        case "#date-1983":
            className = GlassOfLager;
            break;
        case "#date-2009":
            className = UsMap;
            break;
        case "#date-1897":
            className = EsCerveza;
            break;
        case "#date-2011":
            className = History2011;
            break;
        case "#date-2016":
            className = History2016;
            break;
        // case "#about-steam":
        //     className = Steam;
        //     break;
        case "#moctezuma":
            className = Moctezuma;
            break;
        // case "#brewing-fullpage-left":
        //     className = BrewingFullpageLeft;
        //     break;
    }
    return className;
}