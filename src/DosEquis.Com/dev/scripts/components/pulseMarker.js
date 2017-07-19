require ('scss/components/pulsemarker.scss');
import GoogleMapsLoader from 'google-maps';
import { googleApiKey } from 'utils/google_api';

export default class PulseMarker{
  constructor(opts){
    var _this = this;
    GoogleMapsLoader.KEY = googleApiKey();
		GoogleMapsLoader.load((google) => {
      this.prototype = new google.maps.OverlayView();
      this.prototype.setValues(opts);
      this.prototype.draw = function() {
          var self = this;
          this.d = this.div;
          if (!this.d) {
              this.d = this.div = $('' +
              '<div>' +
              '<div class="shadow"></div>' +
              '<div class="pulse"></div>' +
              '<div class="pin-wrap">' +
              '<div class="pin"></div>' +
              '</div>' +
              '</div>' +
              '')[0];
              this.pinWrap = this.div.getElementsByClassName('pin-wrap');
              this.pin = this.div.getElementsByClassName('pin');
              this.pinShadow = this.div.getElementsByClassName('shadow');
              this.d.style.position = 'absolute';
              this.d.style.cursor = 'pointer';
              var panes = this.getPanes();
              panes.overlayImage.appendChild(this.d);
          }
          var point = this.getProjection().fromLatLngToDivPixel(this.position);
          if (point) {
              this.d.style.left = point.x + 'px';
              this.d.style.top = point.y + 'px';
          }
      };
    });
  }
}
