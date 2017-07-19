require("vendor/jquery-ui.min");
require("vendor/jquery-ui-slider-pips");
require('vendor/jquery.ui.touch-punch');
/*********************
	add these lines to file this chunk is used
/*********************/
require('scss/components/range-slider/range-slider'); 

import ga from 'services/google-analytics/tracking';

import Slick from 'slick-carousel';

var myModule = {
 
  myProperty: "someValue",
   
  myConfig: {
    dates: ['1897','1920','1940','1979','1983','1984','2004','2011','2016']
  },

  init:function(selector){
  	  this.$el = $(selector);
 	  this.initSlick();
      this.initSlider();
  },
 
  // a very basic method
  initSlick: function () {
    var _this = this;
    var $item = this.$el.find('.item');

    $(".bottle-items").slick({
		infinite: false,
		dots: true,
		centerMode: true,
		slidesToShow: 5,
	    lazyLoad: 'ondemand',
	    autoplay:false,

		responsive: [{
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	      }
	    }, {

	      breakpoint: 640,
	      settings: {
	        slidesToShow: 1,
	      }
	    }]
	});

	$item.eq(0).addClass('selected');

		$('.bottle-items').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			
		$('.ui-slider-label').eq(nextSlide).trigger('mousedown.selectPip');

	    $item.eq(nextSlide)
			.addClass('selected')
			.siblings()
			.removeClass('selected');
		});

		$('.bottle-items').on('swipe', function(event, slick, direction){
			  var index = $(event.currentTarget).find('.slick-current').data('slick-index') + 1;
			  ga.trackEvent({
			  	   action:'swipe',
			       category:"PackagingEvolution",
			       label:'slide-'+_this.myConfig.dates[index]
			  })
		});
  },
 
  initSlider: function () {
  	var _this = this;
  	var $item = this.$el.find('.slick-slide');

			$(".range-slider")  
			    // activate th slider with options
			    .slider({ 
			        min: 0, 
			        max: _this.myConfig.dates.length-1, 
			        value: 0,
			        animate:400 
			    })             
			    // add pips with the labels set to "months"
			    .slider("pips", {
			        rest: "label",
			        labels: _this.myConfig.dates
			    })       
			    // and whenever the slider changes, lets echo out the month
			    .on("slidechange", function(e,ui) {
			        _this.$el.find(".slick-dots")
			         .find('li')
			         .eq(ui.value)
			         .trigger('click');


			         $item
			         .eq(ui.value)
			         .addClass('selected')
			         .siblings()
			         .removeClass('selected');

			         ga.trackEvent({
	                    category:"PackagingEvolution",
	                    label:'click-'+_this.myConfig.dates[ui.value]
	                 })
			    });

			var isMobile = window.matchMedia("only screen and (max-width: 768px)");

		    if (isMobile.matches) {
		        $(".range-slider").draggable();
		    }
  }

};
 
module.exports = myModule;