import Slick from 'slick-carousel';
import historySlider from 'components/historySlider';
import Product from 'components/product';
import 'components/touts/touts';
import JumpNav from 'components/jumpnav/jumpnav';
import ScrollMagic from'scrollmagic';
import {scrollTo} from 'utils/goToScroll';
import {css_editsvg} from 'utils/css-edit-svg';
import 'scss/pages/beersandrecipes.scss';
require("vendor/jquery.parallax-scroll");
require("vendor/jquery.easing.1.3");
var recipes = require('./recipes.json');
var beers = require('./beers.json');
const lazyLoadImages = require('lazy-load-images');

export default class Products{
    constructor(selector){
        let self = this;
        this.$el = $(selector);
        this.addJumpNav();
        this.addProducts();
        this.addScrollController();
        this.addUIListeners();
        this.initSlick();

        //css_editsvg('img.drizly-icon');
        }

	addUIListeners(){
        var _this = this;
                $(".jumpnav").eq(0).find(".jumplink").on('click',function(e) {
                e.preventDefault();
                $(this).addClass('selected').siblings().removeClass('selected');
                scrollTo($(this).data("target"));
        });
	}

        removeUIListeners(){
                $(".jumpnav").eq(0).find(".jumplink").off('click');
        }

	addJumpNav(){
        this.stickyjumpnav = new JumpNav({
            el:'.jumpnav',
            theme:'dark',
            triggers:['section#beer',"section#variety-pack","section#recipes"]
        });
	}

	addProducts(){
        // add beers
        let lager = new Product(beers['ambar'])
        let ambar =  new Product(beers['lager'])

        $('#beer .touts-static').append(ambar.div);
        $('#beer .touts-static').append(lager.div);

        //add recipes
        let dosarita = new Product(recipes['dos-a-rita'])
        let michelada =  new Product(recipes['michelada'])
        let sidra = new Product(recipes['dos-sidra'])
        let stormy =  new Product(recipes['dos-a-stormy'])

        $('#recipes .touts-static.group1').append(dosarita.div);
        $('#recipes .touts-static.group1').append(michelada.div);
        $('#recipes .touts-static.group2').append(sidra.div);
        $('#recipes .touts-static.group2').append(stormy.div);
	}

	addScrollController(){
        this.scroller = new ScrollMagic.Controller();

        let _this = this;
        let scene = new ScrollMagic.Scene({
          triggerElement:'#jump-nav',
 		  triggerHook:'onLeave',
          duration: getElHeight
        }).addTo(this.scroller);

         scene.on("enter", function (event) {
              _this.stickyjumpnav.show();
              _this.removeUIListeners();
         });

         scene.on("leave", function (event) {
              _this.stickyjumpnav.hide();
              _this.addUIListeners();
        });

        function getElHeight(){
        	return $("#productcontainer").height();
        }
    }

	initSlick(){
		let slider = new historySlider({el:'.gallery'})
	}
}

var products = new Products('.products');
