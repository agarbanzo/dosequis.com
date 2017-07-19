import 'scss/components/jumpnav.scss';
import {scrollTo} from 'utils/goToScroll';
import ga from 'services/google-analytics/tracking';

export default class JumpNav{
	constructor(options){
		var _this = this;
		this.$el = $('.page-container').find(options.el);
		this.stickynav = this.$el
			.clone()
			.appendTo(this.$el.parent())
			.removeClass('static')
			.addClass('sticky');

		if(options.theme == 'dark') this.stickynav.addClass('dark');
		this.links = this.stickynav.find('a');
		this.triggers = options.triggers;
		this.elements = [];
		//ADD DOM ELEMENTS
		_.each(this.triggers, function(element){
			var $element = $('.page-container').find(element);
			_this.elements.push($element);
		});
		
		this.addUIListeners();
		this.addScrollListener(options.triggers);
		this.isScrolling = false;

		setTimeout(function(){_this.triggerEvents();},250)
		//ADD EVENT FOR WHEN SCROLLING IS DONE
	   window.dispatcher.on('scrollDone',()=>{
		  this.isScrolling = false;
	   })
	}

	addUIListeners(){
		var _this = this;
		$(this.links).on('click',function(e) { 
          e.preventDefault(); 
            $(this).addClass('selected')
            .siblings()
            .removeClass('selected');

            scrollTo($(this).data("target"));  
			ga.trackEvent({
                'category':$(this).data("category"),
                'label':$(this).data("label")
            });    
            _this.isScrolling = true;    
      });
	}

	addScrollListener(){
       var $window = $(window);

		$window.on('scroll',()=>{
			this.lazyscroll();
		});

		$window.on('resize',()=>{
			this.lazyscroll();
		});
	}

	lazyscroll(){
		var $window = $(window);
		var offset = $("#main-navigation").height() + this.stickynav.height();
		var _this = this;

		_.each(this.elements, (element)=>{
			if(!_this.isScrolling){
 				if ( $window.scrollTop() >= element.offset().top - offset &&  $window.scrollTop() <= element.offset().top + element.height() - offset) {
                	var id = $(element).attr('id');
                	$('a[data-target='+id+']').addClass('selected').siblings().removeClass('selected');
            	}
			}
        });
	}

	triggerEvents(){
		 var $window = $(window);
		 $window.trigger('scroll');
		 $window.trigger('resize')
	}

	removeScrollListener(){
		
	}

	show(){
		 this.stickynav.show();
	}

	hide(){
		this.stickynav.hide();
	}
 }