require('jquery.transit');
require('components/touts/touts');
require('scss/pages/beerlocator.scss');
import Places from 'utils/gplaces';
import Map from "./GmapDragSearch.js";
import MapList from "./dragMapList";
import ga from 'services/google-analytics/tracking';
import Loader from "components/loader/loader";

export default class Beerlocator {
	constructor(selector) {
		var _this = this;
		this.data = {};
		this.category = 'stores';
		this.currentFilter = '';
		this.filter = 'all';
		this.maplist = new MapList('#results');
		this.map = new Map({lat: 40.73186,lng: -73.98863});
		this.input = document.getElementById("ZipCode");
		this.input.value = '10003';
		Places.autoComplete(this.input);
		Places.getFirstSuggestion(this.input)

		$(document).ready(()=> {
			this.addUIListeners();
			$('.mapview,.fb-list').addClass('hide')
		});

		$('#ZipCode').on('blur',function(e){
			  var v = this.value;
			  if (this.value.length == 0) this.value = v;
				_this.scrollWindow()
		}).on('focus',function(){
			console.log('focus')
			 this.value = "";
		});

		window.dispatcher.on('onShowMap', () => this.showMap());
		window.dispatcher.on('onFirstSuggestion', () => this.scrollWindow());
		window.dispatcher.on('onSetFilterSelected', (e)=>this.setFilterSelected(e[0]));
		window.dispatcher.on('onNoLocationsFound', (e) => this.showMap());
	}
	filterProducts(id) {
		this.filter = id;
		window.dispatcher.trigger('onFilterChange');
		this.setFilterSelected(this.filter);
		this.scrollWindow();
	}
	setFilterSelected(id){
		if(id !== undefined){
			$('input.filter[data-filter=' + id + ']').attr('checked', true);
			$('input.filter[data-filter!=' + id + ']').attr('checked', false);
		}
	}
	scrollWindow(){
		if(window.screen.width < 769)
		  $('html, body').animate({scrollTop: 600}, 800);
	}
	addUIListeners() {
		var _this = this;
		$('.viewlist').on("click", (e) => this.hideMap());
		$('.mapview').on("click", (e) => this.showMap());
		$(".bars, .stores").on("click", (e) => {this.scrollWindow();window.dispatcher.trigger('onTypeChange')});
		$('.filter').on('click', (e) => this.filterProducts($(e.target).data('filter')));
		//===================================LOCATE ME
		$('.locateme').on('click', (e) => {
			e.preventDefault();
 			window.dispatcher.trigger('onShowLoader')
			if (navigator.geolocation) {
				 navigator.geolocation.getCurrentPosition(geo_success, geo_error);
				 function geo_success(position) {
					 var pos = {
	 						lat: position.coords.latitude,
	 						lng: position.coords.longitude
	 					};
					 _this.map.address='street_address';
					  window.dispatcher.trigger('onInitMap',[pos]);
					 _this.scrollWindow();
					 _this.maplist.reset();
					 Places.getAddress(pos).then(zipcode=>{
						 _this.input.value=zipcode;
					 });
				}
				function geo_error(err) {
				   window.dispatcher.trigger('onHideLoader')
					 _this.scrollWindow();
					 _this.map.showErrorMsg('Geolocation is not available')
				}
			}
		});
	}

	hideMap() {
		if(!this.maplist.listItems.length)return;
		$('.fb-list').removeClass('hide')
		$('.mapview').removeClass('hide')
		$('.viewlist').addClass('hide');
		$('.fb-map').css('visibility', 'hidden');
		this.map.info_window.close();
		this.maplist.setListView(true)
	}
	showMap() {
		$('.viewlist,.mapview').removeClass('hide')
		$('.mapview,.fb-list').addClass('hide');
		$('.fb-map').css('visibility', 'visible');
		this.maplist.setListView(false)
	}
}
var barfinder = new Beerlocator('.beerlocator');
