import Slick from 'slick-carousel';
import '../../scss/pages/recipedetail.scss';
const makeVideoPlayableInline = require('iphone-inline-video');
import Product from 'components/product';
import ScrollMagic from'scrollmagic';
var recipes = require('./recipes.json');
var beers = require('./beers.json');
import {fbShare,twShare} from 'services/social-sharing';
import 'components/touts/full-page/full-page-tout-loader';
import 'components/touts/touts';

export default class RecipeDetail{
	constructor(selector){
        this.recipeId = $(selector).data('recipe');
        this.addProducts();
        this.addScrollController();
	}

            addProducts(){

              var beerData;
              var beerToutWrap = $('#beer .touts-static');
              console.log(beerToutWrap.data('productUsed'))
                if(beerToutWrap.data('productUsed')=='Ambar'){
                  beerData =  beers['ambar'];
                  /* Ambar has different large product image */
                  beerData.product =  beerData.productlarge;
                }else{
                  beerData =  beers['lager'];
                }
                beerData.title = "Beer Used in Cocktail";
                let beerTout = new Product(beerData);
                beerToutWrap.append(beerTout.div);


                // show random recipe
                // first remove current recipe
                delete recipes[this.recipeId]; 
                var recipeArray = Object.keys(recipes).map(function(key) {
                    return recipes[key];
                });
                var recipeData = recipeArray[Math.floor(Math.random()*recipeArray.length)];
                let recipe = new Product(recipeData);
                $('#recipes .touts-static').append(recipe.div);
            }
              addScrollController(){
                   this.scroller = new ScrollMagic.Controller();
                   this.onSkillScroll('.skill ul');
              }
          onSkillScroll(el){
              let scene = new ScrollMagic.Scene({
              triggerElement: el,
              offset:($(el).height() / 5),
              duration:$(el).height()
                }).addTo(this.scroller);
                 scene.on("enter", function (event) {
                  $(el).addClass('show');
                 });
          }
}

 var recipedetail = new RecipeDetail('.recipedetail');