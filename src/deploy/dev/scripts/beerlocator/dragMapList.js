import ga from 'services/google-analytics/tracking';
import {getPaginatedItems} from 'utils/getPaginatedItems'
import Loader from "components/loader/loader";
const template = require('../beerlocator/templates/list-item.html');
class MapList {
	constructor(selector) {
		this.listItems = [];
		this.currentPage = 1;
		this.index = 0;
		this.isListView = false;
		this.itemsPerPage = 20;
		window.dispatcher.on('addListItem', (e) => this.add_item(e[0]));
		window.dispatcher.on('onTypeChange', (e) => this.reset())
		window.dispatcher.on('onFilterChange', (e) => this.reset())
		window.dispatcher.on("onGPlacesChanged", (e) => this.reset())
		window.dispatcher.on("onLatLngChanged", (e) => this.reset());
		window.dispatcher.on("onLocationsDoneLoading", (e) => this.renderListItems())
		window.dispatcher.on('onNoLocationsFound', (e) => this.showError());
		window.dispatcher.on('onShowList', (e) => this.setListView(e[0]));
		this.loader = new Loader('.fb-list');
		this.$loadmore = $(".loadmore");
		this.$loadmore.addClass('hide');
		this.$loadmore.on('click', (e) => {
			this.currentPage++;
			this.loadNextPage(this.listItems)
		});
		$('.error-noresults').addClass('hide');
	}
	setListView(bool){
		var b = (bool) ? this.isListView = true : this.isListView = false;
		 if (this.isListView)
		    var items = this.getItems(this.listItems);
		 		this.loadNextPage(this.listItems);
	}
	renderListItems() {
		if(!this.listItems.length){
			 this.showError();
		}else if(this.listItems.length && this.isListView){
			 var items = this.getItems(this.listItems);
			 this.loadNextPage(items)
		}
	}
	showError(){
		console.warn('You have no results')
		this.loader.hide();
	}
	getItems(items) {
		var arr = items;
		arr.sort(function(a, b) {
			var x = a.Distance,
				y = b.Distance;
			return x < y ? -1 : x > y ? 1 : 0;
		});
		return arr;
	}
	loadNextPage(items) {
		this.loader.hide();
		var pageItems = getPaginatedItems(items,this.currentPage,this.itemsPerPage);
		var items = pageItems.data;
		if (this.currentPage == 1)
			$(".resultsholder").empty();
		items.forEach((model, ind) => {
			var $div = $(template(model)).appendTo($('.resultsholder'));
			$div.on('click', (e) => this.setListItemSelected(model.id));
			});
		(pageItems.total_pages > this.currentPage) ? $('.loadmore').removeClass('hide'): $('.loadmore').addClass('hide');
		//console.log($('.resultsholder').children().length)
	}
	add_item(model) {
		this.listItems.push(model);
		this.index++;
		$('.count-topnumber').html(this.index)
	}
	setListItemSelected(id) {
		$('.bar[data-id=' + id + ']').addClass('selected');
		$('.bar[data-id!=' + id + ']').removeClass('selected');
		window.dispatcher.trigger('onSetMapItem', [id])
	}
	reset() {
		$('.loadmore,.error-noresults').addClass('hide')
		this.loader.show();
		this.listItems = [];
		this.index = 0;
		this.currentPage = 1;
		$(".resultsholder").empty();
		$('.count-topnumber').html('0');
	}
}
export default MapList;
