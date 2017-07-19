import ScrollMagic from'scrollmagic';
import TweenMax from 'gsap';
// include these files in files which call this script as a chunk
require('scss/components/mimgallery.scss');

export default class MimGallery {
    constructor() {
        let self = this;
        this.container = $('.most-interesting-man .most-interesting-gallery');
        this.item = $('.most-interesting-man .item');
        this.one = $('.most-interesting-man .item.one');
        this.two = $('.most-interesting-man .item.two');
        this.three = $('.most-interesting-man .item.three');
        this.four = $('.most-interesting-man .item.four');
        this.galleryArray = [this.four, this.one, this.two, this.three];
        this.copyDiv = $('.most-interesting-man .copy-container');
        this.textDiv = $('.most-interesting-man .copy-container .real-copy');
        this.prevSlide = -1;
        this.nextSlide = 0;
        this.endScale = 1.3;
        this.beginScale = 1.9;
        this.slideIntervalSec = 5.5;
        this.slideSpeedSec = 1.5;
        this.zoomSpeedSec = 11;
        this.zIndex = 100;
        this.interval;
        this.copyText = [
            "Chula Vista, California",
            "Muskegon, Michigan",
            "Waitomo Caves, New Zealand",
            "Nairobi, Kenya"      
        ];
        $(()=>{
            this.scroller = new ScrollMagic.Controller();
            this.createScrollMagicScene();
        });
    }
    createInterval() {
        let self = this;
        self.interval = setInterval(function() {
            self.playSlide();
        }, self.slideIntervalSec*1000);
        self.playSlide();
    }
    createScrollMagicScene() {
        let self = this;
        let mimHeight = $("#mim").height();
        let scene = new ScrollMagic.Scene({
            triggerElement: '#mim',
            duration: mimHeight + mimHeight*0.9,
            offset: -200
        }).addTo(this.scroller);
        scene.on("enter", function (event) {
            self.createInterval();
            // console.log("---- ENTER")
        });
        scene.on("leave", function (event) {
            clearInterval(self.interval);
            // console.log("---- LEAVE")
        });
    }
    playSlide() {
        let self = this;
        if (self.prevSlide >= 0) self.playPrevious();
        self.prevSlide = self.nextSlide;
        self.playNext();
        self.nextSlide++;
        if (self.nextSlide >= this.galleryArray.length) {
            self.nextSlide = 0;
        }
    }
    playNext() {
        let self = this;
        let d = 0;
        let slide = this.galleryArray[this.nextSlide];
        slide.css('z-index', self.zIndex++);
        TweenMax.set(slide, {x: 0, scaleX: self.endScale, scaleY: self.endScale, alpha: 1});
        TweenMax.from(slide, this.zoomSpeedSec, {scaleX: self.beginScale, scaleY: self.beginScale, delay: d, onUpdateParams: [slide], onUpdate: function(p) {
            let calc = (slide.height() - self.container.height()) * 0.5;
            TweenMax.set(p, {y: calc});
        }});
        TweenMax.from(slide, this.slideSpeedSec, {x: -self.getContainerWidth()*2, ease: Power4.easeInOut, delay: d});
        d += 1;
        let copy = self.copyDiv;
        self.textDiv.html(self.copyText[this.nextSlide]);
        TweenMax.set(copy, {alpha: 0, left: 17});
        TweenMax.from(copy, 1, {left: 0, delay: d, ease: Power4.easeOut});
        TweenMax.to(copy, 0.5, {alpha: 1, delay: d});
    }
    playPrevious() {
        let self = this;
        let d = 0;
        let slide = this.galleryArray[this.prevSlide];
        let copy = self.copyDiv;
        TweenMax.to(slide, this.slideSpeedSec*0.85, {x: self.getContainerWidth(), ease: Power4.easeIn, delay: d, onCompleteParams: [slide], onComplete: function(p) {
            TweenMax.set(p, {alpha: 0});
        }});
        TweenMax.to(copy, 0.4, {alpha: 0})
    }
    getContainerWidth() {
        return $('.most-interesting-man .most-interesting-gallery').width();
    }
}
var mimGallery = new MimGallery('.home');
