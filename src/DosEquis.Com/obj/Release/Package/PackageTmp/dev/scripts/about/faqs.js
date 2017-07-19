require('scss/pages/faqs.scss');
import slick from 'slick-carousel';
import 'components/touts/touts';
import ga from 'services/google-analytics/tracking';

export default class Faqs {
    constructor() {
      this.initSlick();
      console.log('asdfsa');
      this.initExpand();
    }
    initIpsum(){
      $('.q p').each(function(){
         $.getJSON('http://hipsterjesus.com/api/?paras=1&html=false', (data)=> {
           $(this).text( data.text.split('.')[0] +  '?' );
        });
      });
      $('.a p').each(function(){
         $.getJSON('http://hipsterjesus.com/api/?paras=1&html=false', (data)=> {
           $(this).text( data.text );
        });
      });
    }
    initSlick(){
      var popular = $('.question.popular');
      $(".question-box .slider").slick({
        infinite: true,
        dots: true,
        arrows:true,
        nextArrow: '<button class="slick-next slick-arrow icon-icon-arrow-white-next"></button>',
        prevArrow: '<button class="slick-prev slick-arrow icon-icon-arrow-white-prev"></button>'
      });
        $(".slider").on('reInit',function(e){          
          setTimeout(function(){$(window).trigger('resize');},25);
        });
      popular.each((i,e)=>{
        var q = $(e).find('.q p').html();
        var a = $(e).find('.a p').html();
        var slide = '<div class="slide">' + 
                        '<div class="box">' +
                            '<div class="headline">Q:</div>' +
                            '<p class="copy">'+q+'</p>'+
                        '</div>'+
                        '<div class="box">' +
                            '<div class="headline">A:</div>'+
                            '<p class="copy">'+ a +'</p>'+
                        '</div>'+
                    '</div>';
        $(".slider").slick('slickAdd',slide);
      });
      $(window).resize();
    }
    initExpand(){
      $('.question div.q').on('click',(e)=>{
          var $el = $(e.currentTarget);
          var index = $el.parent().index();
          ga.trackEvent({
            category:'faqexpandtoggle',
            label:'question-' + index 
          })
          $el.parent().toggleClass('expanded');
      })
      $('.expandAll a').on('click',(e)=>{
          e.preventDefault();
          var $el = $(e.currentTarget);
          if($el.hasClass('expanded')){
            $('.question').removeClass('expanded');
            $el.removeClass('expanded');
            $el.text('Expand All');
          ga.trackEvent({
            category:'faq',
            label:'Collapse All' 
          })
          }else{
            $('.question').addClass('expanded');
            $el.addClass('expanded');
            $el.text('Collapse All');
          ga.trackEvent({
            category:'faq',
            label:'Expand All' 
          })
          }
      })
    }
}

var faqs = new Faqs();