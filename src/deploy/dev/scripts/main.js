import 'babel-polyfill';
import Header from "components/header/header";
import Footer from "components/footer";
import Agegate from "./agegate/agegate";
import Utils from 'utils/cookies';
import PopUp from "./components/pop-up";
require('events-dispatcher');
import ScrollBtn from 'components/doubleArrowButton';

import {setCookie,getCookie} from 'utils/cookies';
import 'scss/main';
import ga from 'services/google-analytics/tracking';

 window.dispatcher = new EventsDispatcher();

	const header = new Header('header');
	const footer = new Footer('footer');
	ga.init();
	 $( document ).ready(function(){
	 	this.scrolltop = new ScrollBtn(
		{el:'body',
		type:'fixed',
		ga:{
	        category:'backtotop',
	        label:'scrollButton'
	        }
	    });

	});
	// POPUP: COMMENT OUT IN CASE THEY EVER REMOVE IT
  /*let html = '<p><strong>Our Terms of Use and Privacy Policy have changed.</strong> Please see our revised Terms of Use <a href="/terms-of-use" data-ga=\'{"label":"terms of use", "category":"newterms popup"}\' >here</a> and our revised Privacy Policy <a href="/privacy-policy" data-ga=\'{"label":"privacy policy", "category":"newterms popup"}\' >here</a>.</p>';
   if (!getCookie('newterms')){
     let popup = new PopUp({
 						id: 'newterms',
            message: html
 				});
   }*/
   // END POPUP
	if(getCookie('legalage') != 'true'){
		const agegate = new Agegate('.agegate');
	}else{
		$('body').removeClass('agegate');
		ga.trackEvent({
	            label:'user bypassed agegate',
	            category:'agegate'
	        })
	}

  //===================global beefinder tout listener

  $('.locatorCta').on('click',(e)=>{
      e.preventDefault();
    gotoBeerPage();
  })

    $('.zipfield3').on("keyup",(e)=> {
      e.preventDefault();
      if (e.keyCode == 13) {
          gotoBeerPage();
      }
   });

   $("#zipcode3").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#errmsg").html("Digits Only").show().fadeOut("slow");
               return false;
    }
   });

   function gotoBeerPage(){
     var zip = $('#zipcode3').val();
     if(zip == '' || zip=='ZIPCODE'){
       window.location.assign("/beer-finder")
     }else{
       console.log('user added a zipcode')
       window.location.assign('beer-finder?zipcode='+zip)
     }
   }



module.exports = "Common";
