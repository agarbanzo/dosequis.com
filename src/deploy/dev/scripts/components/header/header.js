import {throttle,debounce} from 'utils/throttle-debounce';
import {getScrollbarWidth} from 'utils/helpers';
import 'scss/components/nav';
import {css_editsvg} from 'utils/css-edit-svg';
import ga from 'services/google-analytics/tracking';
const drizly = require("./drizly.svg");
const drizlyWhite = require("./drizly-white.svg");

export default class Header {
    constructor(selector) {

        //=======================REMOVE AGEGAT FOR TERMS AND PRIVACY PAGES
        console.log(location.pathname)

        if(location.pathname == "/privacy-policy" || location.pathname == "/terms-of-use"){
           	$('footer').remove();

            $('#nav-icon1')
            //.css('display','none')

            $('.header-site-links')
            //.find('a').css('display','none')

            $('body').removeClass('agegate');
        }

        var _this = this;
        this.scrollListener();
        this.menuButton();
        this.linkEvents();
        this.resetNavListeners($('#mainNav .content'));
        this.scrollBarWidth = getScrollbarWidth() + 'px';
        css_editsvg('.header-container img');
        this.scrollPos = $(window).scrollTop();
        this.tracking();

        if($('body').hasClass('lightNav')){
            console.log('lightNav')
            $('.header-site-links .drizly').find('img').attr('src',drizly);
        }else{
             $('.header-site-links .drizly').find('img').attr('src',drizlyWhite);
        }
    }
        linkEvents(){
            $('#mainNav a').on('click',function(e){
                e.preventDefault();
            });

            $('#mainNav').on('click',()=>{
                this.closeMenu()
            });
            $('#mainNav .wrapper').click(function(event){
                event.stopPropagation();
            });
        }
        navClick(e){
            e.preventDefault();
            var link = $(e.currentTarget);
            var sub = link.find('.sub');
            var el = link.closest('[data-navitem]');
            var navitem = el.data('navitem');
            if (link.data('navitem') == 'About' ){
                if(link.hasClass('expand')){
                }else{
                    link.addClass('expand');
                    link.off('click');
                    ga.trackEvent({
                        label:navitem+'Expand',
                        category:navitem+'-subnav'
                    })
                    $('a',link).on('click',(e)=>{
                        ga.trackEvent({
                            label:navitem + e.currentTarget.text,
                            category:'menu'
                        })
                        window.location.href = e.currentTarget.href;
                    });
                    $('button',link).on('click',(e)=>{
                        console.log(e);
                        ga.trackEvent({
                            label:navitem+'Collapse',
                            category:'menu'
                        })
                        this.collapse(e,link)
                    });
                }
            }
            else{
                ga.trackEvent({
                    label:navitem,
                    category:'menu'
                })
                window.location.href = $('a',link)[0].href;
            }
        }
        resetNavListeners(el){
            el.off('click').on('click',(e)=>{this.navClick(e)});
        }
        collapse(e,link){
            link.removeClass('expand');
            $('button',link).off('click');
            $('a',link).off('click');
            setTimeout(()=>{
                this.resetNavListeners($('#mainNav .content'));
            },250);
        }
        menuButton() {
            $('#nav-icon1').on('click',(e)=>{
                e.preventDefault();
                console.log($(e.target))
                if($(e.target).hasClass('disable-and-hide')) return;

                if($('body').hasClass('nav-open')){
                    this.closeMenu();
                    $(window).scrollTop( this.scrollPos );
                    ga.trackEvent({
                        label:'close',
                        category:'menuToggle'
                    })
                }else{
                     $('.header-site-links .drizly').find('img').attr('src',drizlyWhite);
                    this.scrollPos = $(window).scrollTop();
                    console.log(this.scrollPos);
                    this.openMenu();
                    ga.trackEvent({
                        label:'open',
                        category:'menuToggle'
                    })
                }   
            })
        }
        openMenu(){
                    $('body').addClass('nav-open');
                    $('#main-navigation .header-container .wrapper .content').css('padding-right',this.scrollBarWidth);  
        }
        closeMenu(){
                    $('body').removeClass('nav-open');
                     if($('body').hasClass('lightNav')){
                            $('.header-site-links .drizly').find('img').attr('src',drizly);
                        }else{
                            $('.header-site-links .drizly').find('img').attr('src',drizlyWhite);
                    }
                    $('#main-navigation .header-container .wrapper .content').css('padding-right',0);
                    $('.content.expand').removeClass('expand');      
                    this.resetNavListeners($('#mainNav .content'));
        }
        scrollListener(){
            $(window).on('scroll', throttle(function (event) {
                if($('body').hasClass('transparent'))return;
                  if($(this).scrollTop() > 0){
                    $('body').addClass('scrolled');
                  }else{
                    $('body').removeClass('scrolled');
                  }
                }, 250)).scroll();
        }
        tracking(){
                $('.breadcrumb a').on('click',(e)=>{
                    var el = e.currentTarget;
                        ga.trackEvent({
                            label:el.text,
                            category:'breadcrumb'
                        })
                });

                $('#main-navigation .header-container .logo').on('click',(e)=>{
                        ga.trackEvent({
                            label:'logo',
                            category:'topnav'
                        })
                });

                $('#main-navigation .header-container .drizly').on('click',(e)=>{
                        ga.trackEvent({
                            label:'drizly',
                            category:'topnav'
                        })
                });

                $('#main-navigation .header-container .finder').on('click',(e)=>{
                        ga.trackEvent({
                            label:'beerfinder',
                            category:'topnav'
                        })
                });
        }
}
