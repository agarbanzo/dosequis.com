require('scss/pages/mim.scss');
import {throttle,debounce} from 'utils/throttle-debounce';
import {scrollToOffset,jumpToOffset} from 'utils/scrollToOffset';
import {map} from './map';
import YouTubePlayer from 'youtube-player';
import {} from 'services/social-sharing';
import 'components/touts/touts';
import ga from 'services/google-analytics/tracking';
import Loader from "components/loader/loader";

var mobileWidth = function(){
    return ($(window).width() <= require('utils/globals.json').dimensions.mobile);
}

require('jquery.transit');

var mimLocations = require('./mimLocations.json');

export default class Mim {
    constructor() {
      this.legends = [];
        map();
        this.currActive = 0;
          $(()=>{ //jquery ready
            this.mimLocations();
            this.scrollListener();
            window.dispatcher.on('listScroll',this.listScroll,this);
            window.dispatcher.on('listJump',this.listJump,this);


           window.dispatcher.on('playVideo',this.playVideo,this);

            // fbShare();
            // twShare();
          }); //ready



          $(window).trigger('scroll');



          $(window).on('resize', throttle(()=>{
            if($('.event.active').length<1)return;
            //console.log($('.event.active').length);
                var id = $('.event.active')[0].id;
                window.dispatcher.trigger('marker:'+id);
                this.listJump(id);
              },150));


    }//constructor
    playVideo(legendID){
      var _this = this;
      function callback(){
        _this.legends[legendID].player.playVideo();
      }
        _this.legends[legendID].player.playVideo();
      this.listScroll(legendID,callback);
      this.legends[legendID].vidCover.transition({'opacity':0}).transition({'height':0});
    }
    shareFB(item){
      var url = document.location.href;
      var base = 'http://dosequisnew.dosequis.dev.tech.ny.havasww.com';
      FB.ui(
           {
            method: 'share',
            href: base,
            title:'Most Interesting Man in ' + item.title,
            description:item.description,
            hashtag:'MostInterestingMan',
            picture:base + item.social.fb.img
          }, function(response){});
    }
        scrollListener(){
          $(window).on('scroll', ()=>{
              this.activeEl($('li.event'));
          });
        }

        activeEl(el){
            var windowHeight = $(window).height(),
            gridTop = ( mobileWidth() ? $('.mapWrap').height() : $('#main-navigation .header-container').height());
            $('li.event').each((i,e)=> {
              var feat = $(e).find('.feature');
              var thisTop = feat.offset().top +( feat.height() / 2 ) - $(window).scrollTop();
              if (thisTop > gridTop ) {
                  $(e).addClass('active');
                } else {
                  $(e).removeClass('active');
                }
            });
              $('li.event.active').not($('li.event.active').eq(0) ).removeClass('active');
                this.newActive = $('li.event.active').index();
                if(this.currActive != this.newActive){
                  this.currActive = this.newActive;
                      window.dispatcher.trigger('stopvid');
                };
              if($('li.event.active').length < 1)return;
              window.dispatcher.trigger('marker:'+ $('li.event.active')[0].id);
          };

          listScroll(legendID,callback){
            var offset = $('#main-navigation .header-container').height();
            if(mobileWidth())offset=$('.mapWrap').height();
            scrollToOffset($('#'+legendID),offset,callback);
          }


          listJump(legendID){
            var legendID = $('#' + legendID);
            var offset = $('#main-navigation .header-container').height();
            if(mobileWidth())offset=$('.mapWrap').height();
            jumpToOffset(legendID,offset);
          }

        mimLocations(){
            var template = require('./template/item.html');
            var list = $('.hero .content ul');
              $(mimLocations).each((i,el)=>{
                  el.index = i;
                  var html = $(template(el));
                  var vidWrap = html.find('.video');
                  var vidCover = html.find('.cover');
                  list.append(html);
                  var mimLoader =  new Loader(vidCover);
                  mimLoader.show();
                  html.find('.more').on('click',(ev)=>{
                      if(html.hasClass('open')){
                          html.removeClass('open');
                          ga.trackEvent({
                            category:"mim-" + el.title,
                            label:'close'
                          })
                      }else{
                          this.showMore(html,el.id);
                          this.listScroll(el.id);
                          ga.trackEvent({
                            category:"mim-" + el.title,
                            label:'more info'
                          })
                    //       dispatcher.trigger('marker:'+el.id);
                      }
                  });
                  html.find('h2').on('click',(ev)=>{
                          this.showMore(html,el.id);
                          this.listScroll(el.id);
                          ga.trackEvent({
                            category:"mim",
                            label:'header-' + el.title
                          })
                           //dispatcher.trigger('marker:'+el.id);
                  });
                  vidCover.on('click',(ev)=>{
                    html.addClass('play');
                      window.dispatcher.trigger('stopvid');
                      window.dispatcher.trigger('playVideo',el.id,this);
                          ga.trackEvent({
                            category:"mim-" + el.title,
                            label:'playVideo'
                          })
                  });
                  if(i==0) html.addClass('active');
                  window.dispatcher.on('openItem-'+el.id,()=>{
                      this.showMore(html);
                  });
                  if(!el.videoId)return;
                  var player = YouTubePlayer('video-'+el.id,{
                          playerVars:{ 'autoplay': 0, 'controls': 1 }
                      }
                  );
                  // 'loadVideoById' is queued until the player is ready to receive API calls.
                  player.loadVideoById(el.videoId).then((v)=>{
                      vidWrap.addClass('ready');
                      console.log(mimLoader)
                      mimLoader.hide();
                      window.dispatcher.on('stopvid',stopVid);
                  });
                  player.stopVideo();
                  player.on('stateChange', (event) => {
                    if(event.data == 0){
                      console.log('over');
                      vidCover.css('height','100%').transition({'opacity':1});
                    }
                  });

                  function stopVid(){
                      player.stopVideo()
                      vidCover.css('height','100%').transition({'opacity':1});
                  }

                  el.vidCover = vidCover;
                  el.player = player;

                  this.legends[el.id] = el;
              })//each

          $(window).trigger('scroll');
          }
    showMore(ev){
        var item = $(ev);
        item.addClass('open');
    }
}
var mim = new Mim();