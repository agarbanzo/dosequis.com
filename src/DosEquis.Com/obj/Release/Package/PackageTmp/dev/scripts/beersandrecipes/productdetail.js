require('scss/pages/productdetail.scss');
const makeVideoPlayableInline = require('iphone-inline-video');
import Product from 'components/product';
var recipes = require('./recipes.json');
var beers = require('./beers.json');
import ScrollMagic from 'scrollmagic';
import FullScreenVideo from 'components/fullscreen-video';
import {
	fbShare,
	twShare
} from 'services/social-sharing';
import 'components/touts/touts';
import {
	playVideoInline
} from 'utils/util_play_video_inline';
import 'components/touts/full-page/full-page-tout-loader';
import ScrollBtn from 'components/doubleArrowButton';
var product = $()
export default class ProductDetail {
	constructor(selector) {
		var _this = this;
		this.prodId = $(selector).attr('data-productId');
		this.intiVideo();
		this.addProducts();
		this.herobutton = new ScrollBtn({
			el: ".fs-vid",
			target: ".content-main",
			direction: "down",
			animate: true,
			ga: {
				category: 'hero',
				label: 'scrollButton'
			}
		});
		$(document).ready(() => {
			_this.video = document.getElementById('bgvid');
			window.dispatcher.on('ageGateHidden', function() {
				console.log('agegatge is hidden so play video')
				_this.video.play();
			})
		});
		$('#find-this-beer-button').on('click', (e) => {
			var pathArray = window.location.pathname.split('/');
			var secondLevelLocation = pathArray[2];
			var zip = this.getZipCode($("#zipcode"));

			if (zip == 'Zipcode' || zip == '') {
				window.location.href = '/beer-finder?zipcode=10013&product=' + secondLevelLocation;
			} else {
				window.location.href = '/beer-finder?zipcode=' + zip + '&product=' + secondLevelLocation;
			}
		})
		$('#find-this-beer-button2').on('click', (e) => {
			var pathArray = window.location.pathname.split('/');
			var secondLevelLocation = pathArray[2];
			var zip = this.getZipCode($("#zipcode2"));
			if (zip == 'Zipcode' || zip == '') {
				window.location.href = '/beer-finder?zipcode=10013&product=' + secondLevelLocation;
			} else {
				window.location.href = '/beer-finder?zipcode=' + zip + '&product=' + secondLevelLocation;
			}
		})
		document.getElementById("zipcode").addEventListener("keyup", function(event) {
			event.preventDefault();
			if (event.keyCode == 13) {
				document.getElementById("find-this-beer-button").click();
			}
		});
		document.getElementById("zipcode2").addEventListener("keyup", function(event) {
			event.preventDefault();
			if (event.keyCode == 13) {
				document.getElementById("find-this-beer-button2").click();
			}
		});

		$("#zipcode").keypress(function (e) {
			//if the letter is not digit then display error and don't type anything
			if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
				 //display error message
					return false;
		 }
		});

		$("#zipcode2").keypress(function (e) {
			//if the letter is not digit then display error and don't type anything
			if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
				 //display error message
				return false;
		 }
		});
	}
	getZipCode(input) {
		var zip = $(input).val();
		return zip
	}

	gotoBeerPage(el){
		var zip = $(el).val();
		if(zip == '' || zip=='Zipcode'){
			window.location.assign("/beer-finder")
		}else{
			console.log('user added a zipcode')
			window.location.assign('beer-finder?zipcode='+zip)
		}
	}

	addProducts() {
		// add other beer tout and get associated recipes
		var beerToutData, beerData, fbShareData;
		if (this.prodId == 'lager') {
			beerToutData = beers['ambar'];
			/* Ambar has different large product image */
			beerToutData.product = beerToutData.productlarge;
			beerData = beers['lager'];
		} else {
			beerToutData = beers['lager'];
			beerData = beers['ambar'];
		}
		beerToutData.drizly = null;
		let tout = new Product(beerToutData);
		$('#beer .touts-static').append(tout.div);
		// add associated recipes touts
		$(beerData.recipes).each((i, e) => {
			let recipeTout = new Product(recipes[e]);
			$('#recipes .touts-static').append(recipeTout.div);
		});
	}
	addScrollController() {
		this.scroller = new ScrollMagic.Controller();
		this.onBeerScroll();
	}
	onBeerScroll() {
		let _this = this;
		let video = document.getElementById('bgvid');
		let scene = new ScrollMagic.Scene({
			triggerElement: '#videocontainer',
			triggerHook: 'onLeave',
			duration: getElHeight
		}).addTo(this.scroller);
		scene.on("enter", function(event) {
			console.log('enter')
			_.defer(function() {
				video.play()
			});
		});
		scene.on("leave", function(event) {
			_.defer(function() {
				video.pause()
			});
		});

		function getElHeight() {
			return $("section#beer").height();
		}
	}
	intiVideo() {
		playVideoInline('bgvid');
	}
}
var productdetail = new ProductDetail('#productdetail');
