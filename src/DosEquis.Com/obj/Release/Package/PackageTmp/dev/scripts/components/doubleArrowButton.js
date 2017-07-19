'use strict';
require('jquery.transit');
require('scss/components/doublearrowbtn.scss');
import 'utils/goToScroll';
import ga from 'services/google-analytics/tracking';

class ScrollBtn {
    constructor(options) {
        this.el = options.el;
        this.max = 800 + 50;
        this.numItems = 0;
        this.offset = (typeof options.offset !== 'undefined') ?  options.offset : 1000;
        this.target = (typeof options.target !== 'undefined') ?  options.target : 'body';
        this.type = (typeof options.type !== 'undefined') ?  options.type : 'normal';
        this.direction = options.direction;
        this.animate = (typeof options.animate !== 'undefined') ?  options.type : false;
        this.gaData = options.ga || null;
        var _this = this;
        $( document ).ready(function(){
            _this.render();
        });
    }

    render(selector) {
       var $div = $("<div>", {"class": "scrollbtn","data-scrollTo":"mim"});
       var _this = this;

        if(this.type == 'fixed'){ 
        	$div.addClass('is-fixed')
        	this.addEventListeners($div);
        }

        // if(this.direction == "down"){
        // 	$div.addClass("down");
        // }
        if(this.direction == 'down'){
          $div.transition({ rotate: '180deg',opacity:0 });
        }

        

		$div.click((e)=>{ 
                  if(this.gaData)
                      ga.trackEvent(this.gaData);
			var thePositiontoScrollTo = $(_this.target).offset().top - $('nav').height();
            // Lets scroll
                $('html, body').animate({scrollTop:thePositiontoScrollTo}, 'slow');
		});

		$(this.el).append($div);

    //if(this.animate){
       $div
         .transition({ opacity: 1,scale:1 })
          .transition({ y: -20 })
          .transition({ y: 0 })
          .transition({ y: -20 })
          .transition({ y: 0 });
     // } 
    }

    addEventListeners(div){
    	var $div = $(div);
    	var offset = 1500;
        var max_w = 1425;
        var rightPos = $(window).width()/2 + (1366/2) - 300;

		//hide or show the "menu" link
		checkWid();
		checkHei();
		$(window).scroll(function(){
			checkHei();
		});

		$(window).resize(function(){
			checkWid();
		});

		function checkWid(){
			
		}

		function checkHei() {
			if( $(window).scrollTop() > offset) {
				$div.addClass('is-visible');
			} else{
				$div.removeClass('is-visible');
			} 
		}
    }
}

export default ScrollBtn;