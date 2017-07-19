require('scss/pages/cervezasdemexico');
import JumpNav from 'components/jumpnav/jumpnav';
import ScrollMagic from'scrollmagic';
import 'components/touts/touts';
import 'components/touts/full-page/full-page-tout-loader';
import Product from 'components/product';
var recipes = require('../beersandrecipes/recipes.json');
var beers = require('../beersandrecipes/beers.json');
import {scrollTo} from 'utils/goToScroll';
import {fbShare,twShare} from 'services/social-sharing';


export default class Cervezasdemexico{
	constructor(selector) {
		let _this = this;
        $( document ).ready(function(){
        	_this.scroller = new ScrollMagic.Controller();
            _this.addJumpnavScroll();
            _this.addJumpNav();
            _this.addProducts();
            _this.addUIListeners();

        });

         window.dispatcher.on('scrollDone',this.addWindowScrollListener,this)
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


    addProducts(){
        var lager = recipes['dos-a-rita'];
        var ambar = recipes['michelada'];
        let ambarTout = new Product(ambar)
        let lagerTout = new Product(lager);
        $('.products .touts-static').append(ambarTout.div);
        $('.products .touts-static').append(lagerTout.div);

         // show random recipe
        // first remove current recipe
        delete beers[this.recipeId]; 
        var recipeArray = Object.keys(beers).map(function(key) {
            return beers[key];
        });
        var recipeData = recipeArray[Math.floor(Math.random()*recipeArray.length)];
        let recipe = new Product(recipeData);
        $('#recipes .touts-static').append(recipe.div);
    }

    addJumpNav(){
         this.stickyjumpnav = new JumpNav({
            el:'.jumpnav',
            theme:'light',
            triggers:['section#Tecate',"section#Lager","section#Sol","section#Ambar"]
        });
    }

    addJumpnavScroll(){
      var _this = this;
      let scene = new ScrollMagic.Scene({
      triggerElement: '.jumptobeer',
 		  triggerHook:'onLeave',
          duration: getElHeight
        }).addTo(_this.scroller);

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

}

var cervezasdemexico = new Cervezasdemexico('.cervezasdemexico')