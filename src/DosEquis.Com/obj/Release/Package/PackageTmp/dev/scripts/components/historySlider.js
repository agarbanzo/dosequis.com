'use strict'
require('scss/components/historyslider.scss');
import slick from 'slick-carousel';
import ga from 'services/google-analytics/tracking';

 export default function(obj){
    var historySlider = $('.history-slider .slider');
     var galleryNav = $('.gallery nav a');
        historySlider.slick({
            dots: false,
            lazyLoad:'ondemand',
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay:'true'
        }).on('afterChange',function(ev,slick,currentSlide){
                highlightActive($('.gallery nav a[data-slide="'+currentSlide+'"]'));
        }).on('beforeChange',function(ev,slick,currentSlide,nextSlide){
                highlightActive($('.gallery nav a[data-slide="'+nextSlide+'"]'));
        });

        galleryNav.on('click',function(e){
                e.preventDefault();
                var slide = $(this).data('slide');
                historySlider.slick('slickGoTo', slide);
                highlightActive($(this));
                ga.trackEvent({
                    category:'historyPanel',
                    label:e.currentTarget.text
                })
        });

        historySlider.on('swipe', function(event, slick, direction){
              var index = $(event.currentTarget).find('.slick-current').data('slick-index');
              ga.trackEvent({
                   action:'swipe',
                   category:"historyPanel",
                   label:galleryNav.eq(index).text()
              })
        });

        function highlightActive(el){
            galleryNav.removeClass('active');
            el.addClass('active');
        }
}