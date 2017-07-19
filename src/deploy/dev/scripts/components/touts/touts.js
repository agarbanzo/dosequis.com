'use strict'
import "scss/components/touts";
import slick from 'slick-carousel';
import './touts-loader';
import ga from 'services/google-analytics/tracking';


export default class Touts {
    constructor() {

        $(()=>{
            this.initTouts();
        })
    }
    initTouts() {
        var touts = $('.touts');
        touts.slick({
        infinite: false,
        dots: true,
        responsive: [{
            breakpoint: 3000,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '0px'
                }
                }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '6.25%'
                }
            }]
        });

        touts.on('swipe', function(event, slick, direction){
               var index = $(event.currentTarget).find('.slick-current').data('slick-index') + 1;
              ga.trackEvent({
                   action:'swipe',
                   category:"touts",
                   label:'slide-'+index
              })
        });
    };
}
var touts = new Touts();