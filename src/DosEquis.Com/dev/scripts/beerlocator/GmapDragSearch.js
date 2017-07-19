import Loader from "components/loader/loader";
import ga from 'services/google-analytics/tracking';
import GoogleMapsLoader from 'google-maps';
import Places from 'utils/gplaces';
import PulseMarker from 'components/pulseMarker';
const template = require('../beerlocator/templates/info-window.html');
import tiles from 'utils/gmap-tilemarker';
import clusters from 'utils/gmap-markercluster';
import {GetQueryStringParams} from 'utils/geturlparams';
import {googleApiKey} from 'utils/google_api';
const roadAtlasStyles = require('./mapstyles').style;
export default class Map {
	constructor(loc) {
		if (!loc) {
			console.warn('you have not set a location');
		}
		var _this = this;
		this.defaultLoc = {lat: loc.lat,lng: loc.lng};
		this.mymarkers = [];
		this.pulseMarker=PulseMarker;
		this.numLocationsToLoad = 0;
		this.mapCenter;
		this.markerCluster;
		this.hasBeenResizedToFitBounds = false;
		this.loader = new Loader($('.fb-map'));
		this.searchData = {};
		this.zipcode;
		this.address = 'postal_code';
		this.xhrPool = [];
		GoogleMapsLoader.KEY = googleApiKey();
		GoogleMapsLoader.LIBRARIES = ['places'];
		GoogleMapsLoader.load((google) => {
			window.dispatcher.on('onShowLoader', (e) => this.showLoader());
			window.dispatcher.on('onHideLoader', (e) => this.hideLoader());
			window.dispatcher.on('onInitMap', (e) => this.initMap(e[0]));
			window.dispatcher.on('onGPlacesError', (e) => this.initMap(this.defaultLoc));
			window.dispatcher.on("onGPlacesChanged", (location, address) => {
				var latlng = {
					lat: location[0].lat(),
					lng: location[0].lng()
				}
				this.address = location[1];
				console.log(this.address)
				this.initMap(latlng);
			});
			window.dispatcher.on('onFilterChange', (e) => {
				this.abortAjaxCalls();
				this.addLocations();
			});
			window.dispatcher.on('onTypeChange', (e) => {
				this.abortAjaxCalls();
				this.addLocations()
			});
			if (GetQueryStringParams('zipcode') || GetQueryStringParams('product')) {
				var product = GetQueryStringParams('product');
				let newzip = GetQueryStringParams('zipcode');
				window.dispatcher.trigger('onSetFilterSelected', [product]);
				this.setQueryParams(newzip)
			} else {
				this.initMap(this.defaultLoc);
			}
		});
	}
	setQueryParams(newzip) {
		this.zipcode = newzip;
		document.getElementById('ZipCode').value = newzip;
		this.searchData.ZipCode = newzip;
		Places.getLatLng(newzip).then((latlng) => {
			this.initMap(latlng)
		});
	}
	initMap(loc) {
		console.log('initMap')
		this.showLoader();
		this.hasBeenResizedToFitBounds = false;
		this.bounds = new google.maps.LatLngBounds();
		this.map = new google.maps.Map(document.getElementById('my_map'), {
			clickableIcons: false,
			name: 'Dos Equis',
			streetViewControl: false,
			mapTypeControl: false,
			maxZoom: 17,
			minZoom: 10,
			fullscreenControl: 0,
			gestureHandling: 'greedy',
		});
		//SET different Zoom Levels
		var zoom = $(window).width() < 767 ? this.map.setZoom(14) : this.map.setZoom(15);
		this.map.setCenter(loc);
		this.map.addListener('zoom_changed', () => {
			//console.log('zoom = ', this.map.getZoom())
		});
		//==============================================================
		window.dispatcher.on("onSetMapItem", (e) => this.setMapItem(e[0]));
		var usRoadMapType = new google.maps.StyledMapType(roadAtlasStyles);
		this.info_window = new google.maps.InfoWindow({
			//pixelOffset: new google.maps.Size(0, 60)
			maxWidth: 300
		});
		this.map.bounds = new google.maps.LatLngBounds();
		this.map.mapTypes.set('usroadatlas', usRoadMapType);
		this.map.setMapTypeId('usroadatlas');
		this.listItems = [];
		this.markerCluster = new clusters.MarkerClusterer(this.map, null, {
			imagePath: '/Assets/Images/gmap-cluster/de-m',
			maxZoom: 14
		});
		this.listItemIndex = 0;
		console.log('address= ', this.address)
		if (this.centerMarker) this.centerMarker.setMap(null);
		var image = (this.address == 'street_address') ? this.addPulseMarker(): this.addZipCodeMarker();
		this.addLocations(null);
	}
	abortAjaxCalls() {
		$.each(this.xhrPool, function(idx, jqXHR) {
			jqXHR.abort();
		});
		this.xhrPool = [];
	}
	addLocations(center) {
		this.showLoader();
		this.numLocationsToLoad = 0;
		this.xhrPool = [];
		if (this.errorMarker) this.errorMarker.setMap(null);
		this.deleteMarkers();
		this.tileMarkerMapType();
	}
	tileMarkerMapType() {
		var _this = this;
		this.markerMap = {};
		this.mapCenter = this.map.getCenter();
		this.map.overlayMapTypes.insertAt(0, new tiles.TileMarkerMapType(this.map, function(center, radiusMiles, NW, SE) {
			_this.radius = radiusMiles;
			_this.center = center;
			_this.searchData = {
				latitude: center.lat,
				longitude: center.lng,
				searchRadiusInMiles: radiusMiles
			};
			_this.searchAPI().done(data => {});
		}));
	}
	searchAPI() {
		var _this = this;
		this.searchData.brands = $("input:radio[name='product']:checked").val();
		this.searchData.storeCodes = $("input:radio[name='type']:checked").val();
		this.searchData.ZipCode = this.zipcode;
		this.searchData.fetchall = false;
		this.searchData.centerLatitude = this.mapCenter.lat();
		this.searchData.centerLongitude = this.mapCenter.lng();
		return $.ajax({
			dataType: "json",
			url: '/api/BarFinder/Search',
			data: this.searchData,
			beforeSend: (xhr) => {
				_this.xhrPool.push(xhr);
			},
			success: (data) => {
				_this.xhrPool.shift();
				if (!_this.xhrPool.length) {
					console.log('done!!!!!!!!!!!!!!!!!! and i have ', this.mymarkers.length, 'markers',this.hasBeenResizedToFitBounds)
					this.ajaxStop();
					return;
				} else {
					$.each(data.SearchResults, (i, location) => {
						this.addMarkerCluster(i, location);
					});
				}
			}
		});
	}
	ajaxStop() {
		window.dispatcher.trigger('onLocationsDoneLoading');
		//if(this.mymarkers.length){
		if (this.mymarkers.length <=20  && !this.hasBeenResizedToFitBounds) {
			this.fitBoundsToMarkers();
		}
		//}
		else if (!this.mymarkers.length && this.hasBeenResizedToFitBounds) {
			console.log("No locations were found")
			if(this.errorMarker) this.errorMarker.setMap(null);
			this.showErrorMsg('No Locations were found.</br> Keep staying thirsty.')
			window.dispatcher.trigger('onNoLocationsFound')
		}
		this.hideLoader();
	}
	addMarkerCluster(i, location) {
		var _this = this;
		if (this.errorMarker) this.errorMarker.setMap(null);
		location.id = _this.listItemIndex;
		var mKey = location.Latitude + ',' + location.Longitude;
		if (this.markerMap[mKey] !== true) {
			this.markerMap[mKey] = true;
			var marker = new google.maps.Marker({
				position: {
					lat: location.Latitude,
					lng: location.Longitude
				},
				icon: '/Assets/Images/beerlocator/pin.png',
				id: this.listItemIndex,
				Name: location.Name,
				title: location.Name + ' - ' + location.Address + '- ' + location.Distance,
			});
			this.bounds.extend(marker.getPosition());
			this.listItemIndex++;
			marker.addListener('click', (e) => {
				this.info_window.setContent(template(location))
				this.info_window.open(this.map, marker);
				ga.trackEvent({
					label: location.Name,
					category: 'map-pin'
				})
			});
			marker.setZIndex(1);
			this.mymarkers.push(marker)
			this.markerCluster.addMarker(marker);
			if (this.mymarkers.length) window.dispatcher.trigger('addListItem', [location]);
		}
	}
	setMapItem(id) {
		var marker = _.findWhere(this.mymarkers, {id: id});
		google.maps.event.trigger(marker, "click");
		this.map.setZoom(15);
		this.map.panTo(marker.position)
		setTimeout(() => {window.dispatcher.trigger('onShowMap')}, 400);
	}
	deleteMarkers() {
		for (var i = 0; i < this.mymarkers.length; i++) {
			this.mymarkers[i].setMap(null);
		}
		if (this.mymarkers.length) this.markerCluster.clearMarkers();
		this.mymarkers = [];
		this.mymarkers.length = 0;
	}
	showErrorMsg(msg) {
		var _this = this;
		this.errorMarker = new google.maps.Marker({
			position: this.map.getCenter(),
			map: this.map,
		});
		this.info_window.setContent("<p class='error'>" + msg + "</p>");
		setTimeout(function() {
			_this.info_window.open(_this.map, _this.errorMarker);
		}, 350);
		google.maps.event.addListener(_this.info_window, 'closeclick', function() {
			if (_this.errorMarker) {
				_this.errorMarker.setMap(null);
				_this.errorMarker = null;
			}
		});
	}
	fitBoundsToMarkers() {
		//if(this.hasBeenResizedToFitBounds)return;
		console.log('i am refitting the bounds');
		var zoom = $(window).width() < 769 ? this.map.setZoom(12) : this.map.setZoom(13);
		this.hasBeenResizedToFitBounds=true;
		if (!this.mymarkers.length) {
			window.dispatcher.trigger('onNoLocationsFound');
		}
	}
	showLoader() {
		this.loader.show();
	}
	hideLoader() {
		this.loader.hide();
	}
	addZipCodeMarker(){
		this.centerMarker = new google.maps.Marker({
			position: this.map.getCenter(),
			map: this.map,
			title: 'XX marks the spot',
			icon: '/assets/images/beerlocator/nearby_icon.png'
		});
	}
	addPulseMarker() {
		this.pulsemarker = new PulseMarker({
			position: this.map.getCenter(),
			map: this.map
		});
	}
}
