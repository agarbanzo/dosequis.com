import 'scss/pages/promotions/summer.scss';
import 'components/touts/touts';

//import slick from 'slick-carousel';
import {} from 'services/social-sharing';
import {getRandomArbitrary,getRandomInt} from 'utils/helpers';

//import YouTubePlayer from 'youtube-player';
import ga from 'services/google-analytics/tracking';
//import Loader from "components/loader/loader";

//import isMobile from 'ismobilejs';

require('jquery.transit');

let imageEls
, imgIntvl
, currentImgId = -1;

export default class Summer {

    constructor(selector) {
      let self =this;
      imageEls = $('.destination');
      this.doImageFades();
    }

    doImageFades(){
      let self =this;
      //console.log('currentImgId', currentImgId)
      currentImgId = (currentImgId===2) ? 0 : currentImgId + 1;
      let i = imageEls.length;
      while (i--){
        $(imageEls[i]).css({opacity: (i === currentImgId) ? 1 : 0});
      }
      setTimeout(function(){
        self.doImageFades();
      }, 5000);
    }
 }



var summer = new Summer();
