/*
 * This demo illustrates the coordinate system used to display map tiles in the
 * API.
 *
 * Tiles in Google Maps are numbered from the same origin as that for
 * pixels. For Google's implementation of the Mercator projection, the origin
 * tile is always at the northwest corner of the map, with x values increasing
 * from west to east and y values increasing from north to south.
 *
 * Try panning and zooming the map to see how the coordinates change.
 */


/** @constructor */
function TileMarkerMapType(map, tileMarkerFun) {
    this.map = map;
    this.mapMoving = false;
    this.tileMarkerFun = tileMarkerFun;
    this.tileSizePx = 256;
    //    this.tileSizeAddjustment = 1;
    this.tileSize = new google.maps.Size(this.tileSizePx, this.tileSizePx);
    this.tileMarkersCompleted = {};
    this.debug = false;

    var _this = this;
    //    window.setTimeout(function(){ _this.mapMoving = false; }, 6000);
    map.addListener('drag', function () { _this.mapMoving = true; }); // check this too because we are waiting a little before seting off
    map.addListener('dragstart', function () { _this.mapMoving = true; });
    // wait a little before seting off
    //map.addListener('dragend', function() { window.setTimeout( function() { _this.mapMoving = false; } , 1000 ) });
    map.addListener('idle', function () { window.setTimeout(function () { _this.mapMoving = false; }, 1000) });
}

TileMarkerMapType.prototype.getTile = function (coord, zoom, ownerDocument) {
    //    console.log('coord:', coord);
    var c2 = this.coordAdjMaxZoom(coord, zoom)
    //    console.log('c2:', c2);
    var latLng = this.coord2LatLng(c2.coord, c2.zoom);
    //    console.log('latLng:', latLng);

    var tile = ownerDocument.createElement('div');
    tile.style.width = this.tileSize.width + 'px';
    tile.style.height = this.tileSize.height + 'px';
    tile.setAttribute('data-tile-visible', 'true');

    if (this.debug) {
        tile.innerHTML = '(' + c2.zoom + ': ' + c2.coord.x + ',' + c2.coord.y + ')';
        tile.style.fontSize = '10';
        tile.style.borderStyle = 'solid';
        tile.style.borderWidth = '1px';
        tile.style.borderColor = '#AAAAAA';
    }

    this.waitForVisibleTile(tile, latLng);

    return tile;
};

TileMarkerMapType.prototype.releaseTile = function (tile) {
    tile.setAttribute('data-tile-visible', 'false');
};

TileMarkerMapType.prototype.waitForVisibleTile = function (tile, latLng) {

    var _this = this;
    var thisCallback = function () {
        // check _this the tile is visible
        var tileVisible = tile.getAttribute('data-tile-visible');
        //        console.log('tileVisible: ',tileVisible);
        if (tileVisible == 'true') {
            // wait for movement to stop
            if (_this.isMapMoving()) {
                window.setTimeout(thisCallback, 500);
            } else {
                var tileMarkerKey = latLng.center.lat + '-' + latLng.center.lng + '-' + latLng.radiusMiles;
                if (_this.tileMarkersCompleted[tileMarkerKey] !== true) { // prevent it from creating markers again for the same tile
                    _this.tileMarkersCompleted[tileMarkerKey] = true;
                    _this.tileMarkerFun(latLng.center, latLng.radiusMiles, latLng.NW, latLng.SE);
                }
            }
        }
    }

    thisCallback();
};

TileMarkerMapType.prototype.isMapMoving = function () {
    return this.mapMoving;
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::                                                                         :::
//:::  This routine calculates the distance between two points (given the     :::
//:::  latitude/longitude of those points). It is being used to calculate     :::
//:::  the distance between two locations using GeoDataSource (TM) prodducts  :::
//:::                                                                         :::
//:::  Definitions:                                                           :::
//:::    South latitudes are negative, east longitudes are positive           :::
//:::                                                                         :::
//:::  Passed to function:                                                    :::
//:::    lat1, lng1 = Latitude and Longitude of point 1 (in decimal degrees)  :::
//:::    lat2, lng2 = Latitude and Longitude of point 2 (in decimal degrees)  :::
//:::    unit = the unit you desire for results                               :::
//:::           where: 'M' is statute miles (default)                         :::
//:::                  'K' is kilometers                                      :::
//:::                  'N' is nautical miles                                  :::
//:::                                                                         :::
//:::  Worldwide cities and other features databases with latitude longitude  :::
//:::  are available at http://www.geodatasource.com                          :::
//:::                                                                         :::
//:::  For enquiries, please contact sales@geodatasource.com                  :::
//:::                                                                         :::
//:::  Official Web site: http://www.geodatasource.com                        :::
//:::                                                                         :::
//:::               GeoDataSource.com (C) All Rights Reserved 2015            :::
//:::                                                                         :::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


TileMarkerMapType.prototype.distance = function distance(lat1, lng1, lat2, lng2, unit) {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lng1 - lng2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") { dist = dist * 1.609344; }
    if (unit == "N") { dist = dist * 0.8684; }
    return dist;
};

TileMarkerMapType.prototype.tile2lat = function (y, z) {
    var n = Math.PI - 2 * Math.PI * y / Math.pow(2, z);
    return (180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))));
};
TileMarkerMapType.prototype.tile2lng = function (x, z) {
    return (x / Math.pow(2, z) * 360 - 180);
};

TileMarkerMapType.prototype.coordAdjMaxZoom = function (coord, zoom) {
    var x = coord.x;
    var y = coord.y;
    var z = zoom;

    if (zoom > 14) {
        z = 14;
        var coordAdjust = Math.pow(2, zoom - 14);
        x = Math.floor(x / coordAdjust);
        y = Math.floor(y / coordAdjust);
        //console.log('coordAdjust:', coordAdjust);
    }
    return { coord: { x: x, y: y }, zoom: z };
}
TileMarkerMapType.prototype.coord2LatLng = function (coord, zoom) {
    var latLng = {
        NW: {
            lat: this.tile2lat(coord.y, zoom),
            lng: this.tile2lng(coord.x, zoom)
        },
        SE: {
            lat: this.tile2lat(coord.y + 1, zoom),
            lng: this.tile2lng(coord.x + 1, zoom)
        },
        center: {
            lat: this.tile2lat(coord.y + 0.5, zoom),
            lng: this.tile2lng(coord.x + 0.5, zoom)
        }
    }
    latLng.radiusMiles = this.distance(latLng.NW.lat, latLng.NW.lng, latLng.center.lat, latLng.center.lng);
    return latLng;
};

TileMarkerMapType.prototype.setDebug = function (debug) {
    this.debug = debug;
}


module.exports = {
     TileMarkerMapType
 }
