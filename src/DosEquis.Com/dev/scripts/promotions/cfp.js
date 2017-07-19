import 'scss/pages/promotions/cfp.scss';
import 'components/touts/touts';

import slick from 'slick-carousel';
import {} from 'services/social-sharing';
import {getRandomArbitrary,getRandomInt} from 'utils/helpers';

import YouTubePlayer from 'youtube-player';
import ga from 'services/google-analytics/tracking';
import Loader from "components/loader/loader";

require('jquery.transit');

export default class CFP {
    constructor(selector) {  
        this.players = [];
        this.intiPlayers();
        this.flahses();
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

    flahses(){
      var crowd = $('.hero');
      function showFlash(){
      var flash = $('<span class="flash">');
        var bottom = getRandomArbitrary(30,46) + '%';
        var left = getRandomArbitrary(0,100) + '%';
        var rotate = getRandomArbitrary(0,180) + 'deg';
        var scale = getRandomArbitrary(.5,1.5);
        var time = getRandomInt(0,2000);
        flash.css({
          'scale':0,
          bottom:bottom,
          left:left,
          rotate:rotate
        });
        crowd.append(flash);
        flash.transition({'scale':scale}).transition({'scale':0},function(){$(this).remove()});
        setTimeout(showFlash,time);
      }
      showFlash();
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
                  playerVars:{ 'autoplay': 0, 'controls': 1 }
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

var cfp = new CFP();