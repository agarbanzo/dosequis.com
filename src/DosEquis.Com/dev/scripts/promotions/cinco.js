import 'scss/pages/promotions/cinco.scss';
import 'components/touts/touts';

import slick from 'slick-carousel';
import {} from 'services/social-sharing';
import {getRandomArbitrary,getRandomInt} from 'utils/helpers';

import YouTubePlayer from 'youtube-player';
import ga from 'services/google-analytics/tracking';
import Loader from "components/loader/loader";

import isMobile from 'ismobilejs';

require('jquery.transit');

export default class Cinco {
    constructor(selector) {
        //this.initDevice();
        this.players = [];
        this.intiPlayers();
    }

    initDevice(){
      console.log('IS MOBILE:', isMobile.any);
      if (!isMobile.any){
        $('.save-coupon').addClass('hide-mobile');
      }
    }

    initSlick(slider){
      var popular = $('.question.popular');
      $(slider).slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        arrows:true,
        dotsClass:'slick-dots dark',
        nextArrow: '<button class="slick-next slick-arrow icon-icon-arrow-black-next"></button>',
        prevArrow: '<button class="slick-prev slick-arrow icon-icon-arrow-black-prev"></button>'
      }).on('beforeChange',function(){
            console.log('change');
            window.dispatcher.trigger('stopVideo');
        }).on('reInit',function(e){
          setTimeout(function(){$(window).trigger('resize');},25);
        });
      $(window).resize();
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
 }

var cinco = new Cinco();
