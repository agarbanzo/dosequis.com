import Slick from 'slick-carousel';
import historySlider from 'components/historySlider';
import {getSocialFeed} from '../services/social-feed';
import ScrollMagic from'scrollmagic';
import ScrollBtn from 'components/doubleArrowButton';
import FullScreenVideo from 'components/fullscreen-video';
import Loader from "components/loader/loader";
//import './mimGallery';
import Product from 'components/product';
var recipes = require('../beersandrecipes/recipes.json');
var beers = require('../beersandrecipes/beers.json');
require('scss/pages/home.scss');
require('scss/pages/home-waves.scss');
require("vendor/jquery.parallax-scroll");
require("vendor/jquery.easing.1.3");
require('jquery.transit');
const makeVideoPlayableInline = require('iphone-inline-video');
import {playVideoInline} from 'utils/util_play_video_inline';

import YouTubePlayer from 'youtube-player';

console.log(createjs,'home');
import 'components/touts/touts';
import 'components/touts/full-page/full-page-tout-loader';

import isMobile from 'ismobilejs';
const screenOrientation = require('screen-orientation');
const viewSize = require('view-size');

export default class Home {
    constructor() {
      let _this = this;
      //this.initDevice();
      //this.intiVideo();
      this.players = [];
      this.intiPlayers();
      this.addProducts();
      this.makeWaves();

        $( document ).ready(()=>{
            //_this.addUIListeners();
            this.addScrollController();
            this.addLoaders();
            //this.video = document.getElementById('bgvid');


            window.dispatcher.on('ageGateHidden',function(){
            //  _this.video.play();
            })
        });
        //
        // $('.locatorCta').on('click',(e)=>{
        //     e.preventDefault();
        //     this.gotoBeerPage();
        // })
        //
        //   $('.zipfield3').on("keyup",(e)=> {
        //     e.preventDefault();
        //     if (e.keyCode == 13) {
        //         this.gotoBeerPage();
        //     }
        //  });

      this.herobutton = new ScrollBtn({
            el:"#section1",
            target:".section2",
            direction:"down",
            animate:true,
            ga:{
              category:'hero',
              label:'scrollButton'
          }
      });

    }

    addWindowSizeListeners(){
      let self= this;
      console.log('isMobile', isMobile.any)
      if (isMobile.any){
        // after orientationchange
        window.addEventListener('orientationchange', function(){
          self.setBackgroundImgPosition(20);
          //console.log('AFTER ORIENTATION CHANGE : '+ self.isPortrait());
        });
      } else {
        // after window resize
        window.addEventListener('resize', function(){
          self.setBackgroundImgPosition(20);
          //console.log('AFTER RESIZE : '+self.isPortrait());
        });
      }
    }

    isPortrait(){
      let portrait;
      if (isMobile.any){
        let so = screenOrientation();
        portrait = so.direction==='portrait';
      } else {
        let vs = viewSize();
        portrait = vs.x < vs.y;
      }
      return portrait;
	 }

    makeWaves(){
      let self = this,
      speed = 100,
      container =  $('#wavesMask');
      for (let i = 0; i<220; i++){
        let div = $('<div></div>');
        container.append(div);
        let offset = $(div).offset();
        let offsetSum = offset.left + offset.top;
        let delay = parseFloat(offsetSum/speed).toFixed(2);
        //console.log('speed', delay%4);
        $(div).css({'animation-delay': (delay%4).toFixed(2) + 's'});
      }
      this.setBackgroundImgPosition(20);
      setTimeout(function(){
        $('#bgHero').css({opacity:1})
      }, 1000);

      this.addWindowSizeListeners();
    }

    setBackgroundImgPosition(slices){
      console.log('setBackgroundImgPosition')
      let h = 3,
      sliceWidth = 100/slices,
      xpos = 0,
      ypos = 0,
      origWidth = 1024,
      origHeight = 360,
      scaleX = $('#wavesMask').width()/origWidth,
      scaleY = $('#wavesMask').height()/origHeight,
      elements = $('#wavesMask').children('div');
      elements.each(function(i) {
        let offset = $(this).offset();
        xpos = (i%slices)*sliceWidth;
        if (i % slices === 0) {
          xpos = 0;
          h++;
          ypos += h;
        }
        $(this).css({
          'height': h+'%',
          'background-position': xpos+'% '+ (ypos-h)+'%',
          'background-size': scaleY*origWidth+'px '+scaleY*origHeight+'px'});
      });
    }

    intiPlayers(){
        $('.player').each((i,el) => {
          var html = $(el);
          var vidWrap = html.closest('.video-player');
          var vidCover = vidWrap.find('.cover');
          var loader =  new Loader(vidCover);
          loader.show();
          console.log(vidWrap,vidCover)
            var vidID =  $(el).data('vidid');
            console.log(vidID);
             var player = YouTubePlayer(el,{
                  playerVars:{ 'autoplay': 0, 'controls': 1, rel: 0 }
              });
                          // 'loadVideoById' is queued until the player is ready to receive API calls.
              player.loadVideoById(vidID).then((v)=>{
                  vidWrap.addClass('ready');
                  loader.hide();
                  window.dispatcher.on('stopvid',stopVid);
              });
              player.stopVideo();
              player.on('stateChange', (event) => {
                if(event.data == 0)
                  vidCover.css('height','100%').transition({'opacity':1});
              });

              vidCover.on('click',(ev)=>{
                  window.dispatcher.trigger('stopvid');
                  player.playVideo();
                  vidCover.transition({'opacity':0}).transition({'height':0});
                  ga.trackEvent({
                    category:"CFPVideo",
                    label:"Play-Video" + (i+1)
                  })
              });
              window.dispatcher.on('stopVideo',stopVid);
              function stopVid(){
                  player.stopVideo()
                  vidCover.css('height','100%').transition({'opacity':1});
              }
        });
        this.initSlick(".videos .slider");
    }

    // gotoBeerPage(){
    //   var zip = $('#zipcode3').val();
    //   if(zip == '' || zip=='ADDRESS/ZIPCODE'){
    //     window.location.assign("/beer-finder")
    //   }else{
    //     console.log('user added a zipcode')
    //     window.location.assign('beer-finder?zipcode='+zip)
    //   }
    // }

    initDevice(){
      console.log('IS MOBILE:', isMobile.any);
      if (!isMobile.any){
        $('.save-coupon').addClass('hide-mobile');
      }
    }

    addProducts(){
        var lager = beers['lager'];
        var ambar = beers['ambar'];
        let ambarTout = new Product(ambar)
        let lagerTout = new Product(lager);
        $('.products .touts-static').append(ambarTout.div);
        $('.products .touts-static').append(lagerTout.div);
    }

    addLoaders(){
        this.socialLoader = new Loader('#social')
        this.socialLoader.show();
        this.mimLoader = new Loader('.mim').show();
    }

    addUIListeners(){
        //var mobileview = 640;
        //var debouncedLayout = _.debounce(updateLayout, 300);
       // $(window).resize(debouncedLayout);
    }

    addScrollController(){
         this.scroller = new ScrollMagic.Controller();
         this.addVideoScroll();
         this.addMimScroll();
         this.addHistoryScroll();
         this.addSocialScroll();
    }

    addVideoScroll(){
        let _this = this;
        let video = document.getElementById('bgHero');
        let scene = new ScrollMagic.Scene({
          triggerElement: '#bgHero',
          triggerHook:'onLeave',
          duration: $(window).height(), // pin element for the window height - 1
        }).addTo(this.scroller);

        scene.on("enter", function (event) {
            //  _.defer(function(){ video.play() });
            _this.toggleWaveAnimation(true);
         });

        scene.on("leave", function (event) {
            //  _.defer(function(){ video.pause() });
          _this.toggleWaveAnimation(false);


        });
    }

    toggleWaveAnimation(on){
      let elements = $('#wavesMask').children();
      //console.log('children', elements.length);
      if (on){
        elements.each(function(){
          $(this).css({'animation-name': 'wave'});
        });
      } else {
        elements.each(function(){
          $(this).css({'animation-name': 'none'});
        });
      }
    }

    addMimScroll(){
        let _this = this;
        let scene = new ScrollMagic.Scene({
          triggerElement: '#mim',
          triggerHook:'onEnter',
        }).addTo(this.scroller);

        scene.on("enter", function (event) {
          console.log('mim entered')
             _this.addMimGallery()
        });
    }

    addMimGallery(){
       require('scss/components/mimgallery.scss');
       require.ensure([], function(require) {
          var myModule = require("./mimGallery");
          $('.most-interesting-man').transition({ opacity:1 });
        }, "mimgallery");
   //   this.addMimGallery = function(){};
    }

    addHistoryScroll(){
        let _this = this;
        let scene = new ScrollMagic.Scene({
          triggerElement: '#history',
          triggerHook:'onEnter',
        }).addTo(this.scroller);

         scene.on("enter", function (event) {
           _this.initSlick();
         });
    }

    addSocialScroll(){
        let _this = this;
        let scene = new ScrollMagic.Scene({
          triggerElement: '#social',
          triggerHook:'onEnter',
          duration:300
        }).addTo(this.scroller);

         scene.on("enter", function (event) {
            $('#social').addClass('active').siblings().removeClass('active');
            _this.showFeed();
         });
    }

    intiVideo(){
      //playVideoInline('bgvid');
    }

    initSlick(){
       let slider = new historySlider({el:'.gallery'})
         //let's function only be called once.
        this.initSlick = function(){};
    }

    showFeed() {
      var _this = this;

        var template = require('./templates/feed-item.html');
        getSocialFeed().done((data, status) => {
        //   console.log(data,status);
            if(status !== "success") return;
            $(".social-slider").transition({opacity: 1}, 1000, 'ease');
            $(".social-slider").slick({
                infinite: true,
                dots: false,
                autoplay:true,
                responsive: [{
                    breakpoint: 3000,
                    settings: { slidesToShow: 5 }
                }, {
                    breakpoint: 1024,
                    settings: { slidesToShow: 4 }
                }, {
                    breakpoint: 480,
                    settings: { slidesToShow: 2 }
                }]
            });

            data.Models.forEach((d,i) => {
            //   console.log(d);
              d.channel = d.SocialNetwork.toLowerCase();
                if(d.FeedType == 'Text'){
                  d.isText=true;
                  addItem(d);
                }else{
                    var img = new Image();
                    img.src = d.ImageUrl;
                    img.onload = function() {
                        var orientation = 'square';
                        var or = img.width / img.height;
                        if(or > 1) orientation = 'hor'
                        if(or < 1) orientation = 'vert';
                        d.orientation = orientation;
                        addItem(d);
                    };
                  }
                  function addItem(d){
                    var html = $(template(d));
                    $(".social-slider").slick('slickAdd',html);
                    _this.socialLoader.hide();
                  }
                //   console.log(d);
            });
        }).fail((data,status)=>{
        //   console.log('error',data,status);
        });
        //let's function only be called once.
        this.showFeed = function(){};
    }
}

var home = new Home('.home');
