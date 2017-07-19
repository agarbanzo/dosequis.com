'use strict';
function scrollTo(el,offset){
    console.log($(el));
    var toLink = (el ? el : $(this).data('scrollto'));
    var navh = $('.header-container').height();
    var offset = (typeof offset !== 'undefined') ?  offset : 0;
    var top =  (toLink=='backToTop' ? 0 : $("#"+toLink).offset().top - navh) + offset;
    $('html,body').animate({
        scrollTop:top
    },'slow',function(){window.dispatcher.trigger('scrollDone')});
};
$('[data-scrollTo]').on('click',$(document),scrollTo);

module.exports.scrollTo = scrollTo;