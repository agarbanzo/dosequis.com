'use strict'
import GoogleMapsLoader from 'google-maps';
import { googleApiKey } from 'utils/google_api';

module.exports = {
	apiKEY: googleApiKey(),
	init() {
		GoogleMapsLoader.KEY = this.apiKEY;
		GoogleMapsLoader.LIBRARIES = ['places'];
	},
	geoLocate() {
		return new Promise((resolve, reject) => {
			$.ajax({
				method: "POST",
				accept: "application/json",
				contentType: "application/json; charset=utf-8",
				crossDomain: true,
				dataType: "json",
				url: 'https://www.googleapis.com/geolocation/v1/geolocate?key=' + this.apiKEY,
				success: (success, status) => {
					console.log("API geolocation success!", 'lat=' + success.location.lat, "lng = " + success.location.lng);
					var loc = {
						lat: success.location.lat,
						lng: success.location.lng
					};
					resolve(loc);
				},
				error: (err) => {
					resolve({
						error: err,
						msg: "API Geolocation error!",
					});
					console.warn("API Geolocation error!", err);
				}
			});
		});
	},
	getLatLng(address) {
		return new Promise((resolve, reject) => {
			var latlng;
			var geocoder = new google.maps.Geocoder();
			geocoder.geocode({
				'address': address
			}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					var latitude = results[0].geometry.location.lat();
					var longitude = results[0].geometry.location.lng();
					var latlng = {
						lat: latitude,
						lng: longitude
					}
					//console.log('my loc is ', latlng)
					window.dispatcher.trigger('onLatLngChanged', [results[0]])
					resolve(latlng);
				}else{
					console.log('There was an error');
				}
			});
		})
	},
	getZip(position) { // reverse geolocation to get zip
		return new Promise((resolve, reject) => {
				var zipcode;
				GoogleMapsLoader.load(google => {
					var geocoder = new google.maps.Geocoder();
					var latlng = {
						lat: position.lat,
						lng: position.lng
					}
					geocoder.geocode({
						'location': position
					}, function(results, status) {
						//console.log('geocoder status=', status);
						if (status !== 'OK') {
							reject('error:' + status);
						} else {
							for (var i = 0; i < results.length; i++) {
								for (var j = 0; j < results[i].address_components.length; j++) {
									for (var k = 0; k < results[i].address_components[j].types.length; k++) {
										if (results[i].address_components[j].types[k] == "postal_code") {
											zipcode = results[i].address_components[j].short_name;
											resolve(zipcode);
										}
									}
								}
							}
						}
					});
				}, error => {
					reject('error ==', error);
					console.warn('error ==', error);
				});
			}).catch(error => {
				console.warn('error = ', error);
				return error;
			})
	},
	getAddress(position) { // reverse geolocation to get zip
		return new Promise((resolve, reject) => {
				var zipcode;
				GoogleMapsLoader.load(google => {
					var geocoder = new google.maps.Geocoder();
					var latlng = {
						lat: position.lat,
						lng: position.lng
					}
					geocoder.geocode({
						'location': position
					}, function(results, status) {
						//console.log('geocoder status=', status);
						if (status !== 'OK') {
							reject('error:' + status);
						} else {
							resolve(results[0].formatted_address);
						}
					});
				}, error => {
					reject('error ==', error);
					console.warn('error ==', error);
				});
			}).catch(error => {
				console.warn('error = ', error);
				return error;
			})
	},
	autoComplete(el) {
		var autocomplete;
		var input = el[0];
		var options = {
			  types: ['geocode'],
			  componentRestrictions: {country: "us"}
		};
		GoogleMapsLoader.load(function(google) {
			var input = el;
			var autocomplete = new google.maps.places.Autocomplete(input,options);
			autocomplete.addListener('place_changed', () => {
				var place = autocomplete.getPlace();
				if (!place.geometry) {
					return;
				}
				if (place.geometry.viewport) {
					window.dispatcher.trigger('onGPlacesChanged', [place.geometry.location,place.types[0]])
				}
			});
		});
	},
	getFirstSuggestion(input){
		var _addEventListener = (input.addEventListener) ? input.addEventListener : input.attachEvent;
		function addEventListenerWrapper(type, listener) {
	 // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
	 // and then trigger the original listener.
	 if (type == "keydown") {
		 var orig_listener = listener;
		 listener = function (event) {
			 var suggestion_selected = $(".pac-item-selected").length > 0;
			 if (event.which == 13 && !suggestion_selected) {
				 var simulated_downarrow = $.Event("keydown", {keyCode:40, which:40})
				 window.dispatcher.trigger('onFirstSuggestion')
				 orig_listener.apply(input, [simulated_downarrow]);
			 }
			 orig_listener.apply(input, [event]);
		 };
	 }
	 // add the modified listener
	 _addEventListener.apply(input, [type, listener]);
 }
 if (input.addEventListener)
	 input.addEventListener = addEventListenerWrapper;
 else if (input.attachEvent)
	 input.attachEvent = addEventListenerWrapper;
	}
}
