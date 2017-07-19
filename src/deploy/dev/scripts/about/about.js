import Slick from 'slick-carousel';   
import 'scss/pages/about.scss';
import 'utils/goToScroll';
import historySlider from 'components/historySlider';
import ScrollBtn from 'components/doubleArrowButton';
import '../components/page-animations/page-animation-loader';
import 'components/touts/touts';
import ga from 'services/google-analytics/tracking';
import 'components/touts/full-page/full-page-tout-loader';
require('jquery.transit');

export default class Aboutdos {
    constructor(selector) {
        this.num = 0;
        this.createGallery();

        this.scrollbtn = new ScrollBtn({
                el:".hero",
                target:"#history",
                direction:"down"
            })
        }
	
	createGallery() {
		let slider = new historySlider({el:'.gallery'})
		console.log('gallery created')
	 }
 }

var aboutdos = new Aboutdos();