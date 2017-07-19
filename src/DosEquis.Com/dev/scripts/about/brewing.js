import 'scss/pages/brewing.scss';
import 'components/touts/touts';
import ScrollMagic from 'scrollmagic';

export default class Brewing {
    constructor(selector) {  
        this.stepScrollListener();

    }
    stepScrollListener(){
        this.scroller = new ScrollMagic.Controller();
        $('.steps').each((i,e)=>{
            var el = e;
              let scene = new ScrollMagic.Scene({
              triggerElement: el,
      //        offset:($(el).height() / 5),
              duration:$(el).height()
                }).addTo(this.scroller);
                 scene.on("enter", function (event) {
                    var hopLeft =$('.hop-left',el);
                    $('.content', el).addClass('open');
                 });
                 scene.on("leave", function (event) {
                    if(event.scrollDirection=="REVERSE")
                            $('.content', el).removeClass('open');
                 });
        });
    }
 }
var brewing = new Brewing();