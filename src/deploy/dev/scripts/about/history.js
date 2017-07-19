import Slick from 'slick-carousel';
import ScrollMagic from 'scrollmagic';
import 'components/touts/touts';
import JumpNav from 'components/jumpnav/jumpnav';
import '../components/page-animations/page-animation-loader';
import {scrollTo} from 'utils/goToScroll';
const lazyLoadImages = require('lazy-load-images');
require('scss/pages/history.scss');
import ga from 'services/google-analytics/tracking';

export default class History {
    constructor(selector) {
		let self = this;
        $( document ).ready(()=>{
            this.addUIListeners();
            this.addScrollController();
            this.addJumpnavScroll();
            this.addJumpNav();
            this.onRangeGalleryScroll();
            lazyLoadImages.init();
        });

        $(window).on('load', ()=> {
           this.createGallery1890Slider();
      });
    }

    addUIListeners(){
       $(".beerlink").on('click',(e)=> { 
           e.preventDefault(); 
            $(e.currentTarget).addClass('selected').siblings().removeClass('selected');
            scrollTo($(e.currentTarget).data("target"));  
             ga.trackEvent({
                  'category':$(e.currentTarget).data("category"),
                  'label':$(e.currentTarget).data("label")
            })     
           // this.stickyjumpnav.removeScrollListener();        
      });
    }

    removeUIListeners(){
        $(".jumpnav").eq(0).find(".jumplink").off('click');
    }

  	createGallery1890Slider() {
      var $gallery = $('.gallery-1890');
  		$gallery.slick({
  			dots: true,
  			infinite: true,
  			lazyLoad: 'ondemand'
  		});

      var $buttons = $(".gallery-1890").find("button");

      $buttons.on('click',function(){
          var index = $(event.currentTarget).closest('.slick-slider').find('.slick-current').data('slick-index')+1;
          ga.trackEvent({
               action:'click',
               category:"gallery-1890",
               label:'slide-'+index
          })
      });

      $('.gallery-1890').on('swipe', function(event, slick, direction){
        var index = $(event.currentTarget).find('.slick-current').data('slick-index') + 1;
        ga.trackEvent({
             action:'swipe',
             category:"gallery-1890",
             label:'slide-'+index
        })
    });
    }

    addScrollController(){
        this.scroller = new ScrollMagic.Controller();
    }

    addJumpNav(){
        this.stickyjumpnav = new JumpNav({
            el:'.jumpnav',
            theme:'light',
            triggers:['div#packaging-gallery',"div#timeline-section"]
        });
    }

    addJumpnavScroll(){
      let scene = new ScrollMagic.Scene({
      triggerElement: '.jumptobeer',
 		  triggerHook:'onLeave',
          duration: getElHeight
        }).addTo(this.scroller);

         scene.on("enter", (event) => {
            this.stickyjumpnav.show();
            this.removeUIListeners();
         });

          scene.on("leave",(event)=> {
             this.stickyjumpnav.hide();
             this.addUIListeners();
        });

        function getElHeight(){
        	return $("#jump-link-start").height();
        }
    }

    onRangeGalleryScroll(){
        let scene = new ScrollMagic.Scene({
           triggerElement: '#packaging-gallery',
           triggerHook:'onEnter'
        }).addTo(this.scroller);

        scene.on("enter",(event)=> {
        	 console.log('package linking enter');
             this.addRangeGallery()
        });

        scene.on("leave", (event)=> {
            console.log('package linking leave')
        });
    }

    addRangeGallery(){
      require('scss/components/range-slider/range-slider');
         require.ensure([], (require) => {
             var myModule = require("./range-slide-gallery");
             console.log(myModule);
             myModule.init('#bottles');
             $('.bottles').addClass('loaded');
        },"packaging-gallery");
    } 
 }

var history = new History('.history');