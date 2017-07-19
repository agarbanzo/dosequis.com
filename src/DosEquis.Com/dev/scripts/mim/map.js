import GoogleMapsLoader from 'google-maps';
var roadAtlasStyles = require('./mapStyles.json');
var mimLocations = [];
var mimLocations = require('./mimLocations.json');
var color = require('utils/globals.json').colors;

var mobileWidth = function(){
    return ($(window).width() <= require('utils/globals.json').dimensions.mobile);
}
import {scrollToOffset} from 'utils/scrollToOffset';
import YouTubePlayer from 'youtube-player';
import ga from 'services/google-analytics/tracking';

var map = function(){

    var styledMapOptions = {
        name: 'Dos Equis'
    };
    function init(){
var zoomLevel = (mobileWidth()?2 :3);
        var bounds, icon,iconActive,markers=[];
        GoogleMapsLoader.KEY =  'AIzaSyDM_5kT74eZVjnMWqoIWdMAvQrhOW76_m0';
        GoogleMapsLoader.load(function(google) {
            console.log('I started loading google maps api');
            console.log(google);
            bounds = new google.maps.LatLngBounds();
            var mapOptions = {
                zoom: zoomLevel,
                minZoom:2,
                maxZoom:3,
                disableDefaultUI: true,
                navigationControl: false,
                scrollwheel: false,
                scaleControl: false,
                draggable: true,
                gestureHandling:'greedy',
                disableDoubleClickZoom: 1,
                streetViewControl: false,
                zoomControl: false,
                mapTypeControl: false,
                panControl: false,
                backgroundColor: '#d0e2e7'
            };
            icon = {
                path: "M25.11,0A25.3,25.3,0,0,0,0,25.11c0,13.73,25.11,60.6,25.11,60.6s25.11-46.88,25.11-60.6A25.08,25.08,0,0,0,25.11,0Zm0,37.17A12.05,12.05,0,1,1,37.17,25.11,12,12,0,0,1,25.11,37.17Z",
                illColor: color.lightgold,
                fillOpacity: 0,
                size: new google.maps.Size(28, 48),
                anchor: new google.maps.Point(28,48),
                strokeWeight: 3,
                strokeColor:color.lightgold,
                scale: .5
            }
            iconActive = {
                path: "M25.11,0A25.3,25.3,0,0,0,0,25.11c0,13.73,25.11,60.6,25.11,60.6s25.11-46.88,25.11-60.6A25.08,25.08,0,0,0,25.11,0Zm0,37.17A12.05,12.05,0,1,1,37.17,25.11,12,12,0,0,1,25.11,37.17Z",
                fillColor: color.lightgold,
                fillOpacity: .6,
                size: new google.maps.Size(28, 48),
                anchor: new google.maps.Point(28,48),
                strokeWeight: 0,
                scale: .5
            }
            var usRoadMapType = new google.maps.StyledMapType(roadAtlasStyles, styledMapOptions);
            var map = new google.maps.Map(document.getElementById('map'), mapOptions);
            map.mapTypes.set('usroadatlas', usRoadMapType);
            map.setMapTypeId('usroadatlas');
            addMarkers(map);
            //now fit the map to the newly inclusive bounds
            map.fitBounds(bounds);

                 map.addListener('dragend',checkBounds);
                 map.addListener('tilesloaded',checkBounds);

                 map.addListener('drag', (ev)=>{
                    checkBounds();
                    var lat0 = map.getBounds().getNorthEast().lat();
                    var lng0 = map.getBounds().getNorthEast().lng();
                    var lat1 = map.getBounds().getSouthWest().lat();
                    var lng1 = map.getBounds().getSouthWest().lng();
                   // if(lat0<0)map.setBounds()
                    //console.log(lat0,lng0,lat1,lng1);
                  });
      // The allowed region which the whole map must be within
            var allowedBounds = bounds;
              // If the map position is out of range, move it back
              function checkBounds() {
              //  return;
                // Perform the check and return if OK
                if (allowedBounds.contains(map.getCenter())) {
                  return;
                }
                // It`s not OK, so find the nearest allowed point and move there
                var C = map.getCenter();
                var X = C.lng();
                var Y = C.lat();

             //   var AmaxX = allowedBounds.getNorthEast().lng();
                var AmaxY = allowedBounds.getNorthEast().lat();
              //  var AminX = allowedBounds.getSouthWest().lng();
                var AminY = allowedBounds.getSouthWest().lat();

        //     if (X < AminX) {X = AminX;}
            //    if (X > AmaxX) {X = AmaxX;}
                if (Y < AminY) {Y = AminY;}
                if (Y > AmaxY) {Y = AmaxY;}
                //alert ("Restricting "+Y+" "+X);
                map.setCenter(new google.maps.LatLng(Y,X));
              } // checkBounds
            var listener = google.maps.event.addListener(map, "idle", function() { 
               // map.setZoom(3);
              //  google.maps.event.removeListener(listener); 
            }); 

        });
        GoogleMapsLoader.onLoad(function(google) {
            console.log('I just loaded google maps api');
        });
        function addMarkers(map) {


        google.maps.event.addDomListener(window, "resize", function() {
                
             if(mobileWidth()){
                map.setZoom(2);
             }else{
                map.setZoom(3);
             }
             google.maps.event.trigger(map, "resize");
            if($('.event.active') < 1)return;
            var active = $('.event.active')[0].id
            function isMarker(element, index, array){
                return element.id == active;
            };
            var marker = markers.find(isMarker);
             map_recenter(marker,225 ,0);

        });
            
         google.maps.event.addListenerOnce(map,"projection_changed", function() {
       //    map_recenter(markers[0].getPosition(),225,0);
               window.dispatcher.trigger('mapReady',map);
          //$(window).trigger('scroll');
         });
            function map_recenter(latlng,offsetx,offsety) {
                var point1 = map.getProjection().fromLatLngToPoint(
                    (latlng instanceof google.maps.LatLng) ? latlng : map.getCenter()
                );
                var point2 = new google.maps.Point(
                    ( (typeof(offsetx) == 'number' ? offsetx : 0) / Math.pow(2, map.getZoom()) ) || 0,
                    ( (typeof(offsety) == 'number' ? offsety : 0) / Math.pow(2, map.getZoom()) ) || 0
                );  
                map.setCenter(map.getProjection().fromPointToLatLng(new google.maps.Point(
                    point1.x - point2.x,
                    point1.y + point2.y
                )));
            }
            function pan_recenter(latlng,offsetx,offsety) {
                if(map.getProjection()==undefined)return;
                var point1 = map.getProjection().fromLatLngToPoint(
                    (latlng instanceof google.maps.LatLng) ? latlng : map.getCenter()
                );
                var point2 = new google.maps.Point(
                    ( (typeof(offsetx) == 'number' ? offsetx : 0) / Math.pow(2, map.getZoom()) ) || 0,
                    ( (typeof(offsety) == 'number' ? offsety : 0) / Math.pow(2, map.getZoom()) ) || 0
                );  
                map.panTo(map.getProjection().fromPointToLatLng(new google.maps.Point(
                    point1.x - point2.x,
                    point1.y + point2.y
                )));
            }

            function panToMarker(marker){
                if(!mobileWidth()){
                    pan_recenter(marker.getPosition(),225,0);
                }else{
                    pan_recenter(marker.getPosition(),0,0);
                }
                // var laLatLng = new google.maps.LatLng( marker.position.lat(),  marker.position.lng());
                // map.panTo(laLatLng);

                $(markers).each((i,e)=>{
                    e.setIcon(icon);
                })
                marker.setIcon(iconActive);
            };

            function jumpToMarker(marker){
                if(!mobileWidth()){
                    map_recenter(marker.getPosition(),225,0);
                }else{
                    map_recenter(marker.getPosition(),0,0);
                }
                // var laLatLng = new google.maps.LatLng( marker.position.lat(),  marker.position.lng());
                // map.panTo(laLatLng);

                $(markers).each((i,e)=>{
                    e.setIcon(icon);
                })
                marker.setIcon(iconActive);
            };
           $(mimLocations).each((i,e)=>{
                var mim = e;
                var marker = new google.maps.Marker({
                    position: {lat: mim.lat, lng: mim.long},
                    map: map,
                    icon: icon,
                    title: mim.title,
                    id:mim.id
                });
                markers.push(marker);
                markers[mim.id] = marker;
                window.dispatcher.on('marker:'+marker.id, (ev)=>{
                    panToMarker(marker);
                },this);
                window.dispatcher.on('markerjump:'+marker.id, (ev)=>{
                    jumpToMarker(marker);
                },this);

                marker.addListener('click', function(e) {
                      ga.trackEvent({
                        category:"mim",
                        label:'pin-' + mim.title
                      })
                    $(this).addClass('active');
                    panToMarker(marker);
                    window.dispatcher.trigger('listJump',marker.id);
                    // window.dispatcher.trigger('stopvid');
                    // window.dispatcher.trigger('playvid-'+this.id);
                    // window.dispatcher.trigger('openItem-'+this.id);
                });
                
                //extend the bounds to include each marker's position
                bounds.extend(marker.position);
            });//each marker

           window.dispatcher.on('mapReady',function(){
            console.log('mapReady');
                    //var id = $('li.event.active')[0].id;
                    console.log($('li.event.active'))
                    return;
                    setTimeout(function(){
                        panToMarker(markers[id]);

                           if(mobileWidth()){
                            map.setZoom(2);
                         }else{
                            map.setZoom(3);
                         }

                    },25);
           })
        }
    }
    init();
};

module.exports.map = map;
