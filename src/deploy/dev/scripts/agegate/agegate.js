require('../../scss/pages/agegate');
import {setCookie,getCookie,eraseCookie} from '../utils/cookies';
import {playVideoInline} from '../utils/util_play_video_inline';
const makeVideoPlayableInline = require('iphone-inline-video');
import FullScreenVideo from 'components/fullscreen-video';
import ga from 'services/google-analytics/tracking';

export default class Agegate{
	constructor(selector){
		var _this = this;

		$( document ).ready(function(){
			_this.$el = $(selector);
			_this.render();
			_this.addUIListeners();
			_this.month = $('#month');
			_this.day = $("#day");
			_this.year = $("#year");

			ga.trackEvent({
				label:'Page View',
				category:'agegate'
			})
		});
	}

	addUIListeners(){
		var _this = this;

		$('#month,#day,#year').keyup(function(e){
			if($(this).val().length==$(this).attr('maxlength')) $(this).next(':input').focus();
				if(_this.year.val().length == 4
					&& _this.month.val().length >= 1
					&& _this.day.val().length >= 1){
						$('.cta a').removeClass('disabled');
						$('#input-date-submit').on("click", function(e){
						e.preventDefault();
						_this.validateFields();
						if(_this.validateFields()) _this.validateAgeEntry(_this.month.val()+'/'+_this.day.val()+'/'+_this.year.val());
						ga.trackEvent({
							label:'submit clicked',
							category:'agegate'
						})
				});
			}
		})

		$("input").keypress(function(event) {
		    if (event.which == 13) {
		    	$('#input-date-submit').trigger('click');
		    }
		});

		$("input").focusin(function(event) {
			event.preventDefault()
			var id = $(this).attr('id');
			ga.trackEvent({
                label:id,
                category:'agegate'
            })
		});

		$("input").focus(function(event) {
			event.preventDefault()
		});
	}

   render(){
		var isLegal = getCookie('legalage');
		if(isLegal == false){
			this.showErrorMesssage();
		}else{
		this.$el.find('.entry').removeClass('hide');

		playVideoInline('agegatebgvid');
	  }
    }


	hideAgeGate(){
		$(document.getElementById('agegate')).remove();
		this.$el.hide();

	}

	removeCookie(){
		eraseCookie('legalage');
	}

	validateFields(){
		var d = new Date();
		var valid = false;

		function padDigits(number, digits) {
			 return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
		}

		if(this.month.val() > 12 || this.month.val() < 1){
			console.log('month is not valid');
			 this.addInputErrorStates();
			 this.month.addClass('error')
		}else if(this.month.val() == 2 && this.day.val() > 28
			|| this.month.val() == 9 && this.day.val() > 30
			|| this.month.val() == 11 && this.day.val() > 30
			|| this.month.val() == 4 && this.day.val() > 30
			|| this.month.val() == 6 && this.day.val() > 30){
			console.log('this day is not valid')
			 this.addInputErrorStates();
		}else if( this.day.val() < 1 || this.day.val() > 31){
			 this.addInputErrorStates();
		}else if(this.year.val() > d.getFullYear() ){
			console.log('this year is not valid')
			this.addInputErrorStates();
		}else{
			if(this.month.val().length < 2){
				this.month.val(padDigits(this.month.val(),2))
			}
			if(this.day.val().length < 2){
				this.day.val(padDigits(this.day.val(),2))
			}
			console.log('yes! this date is valid')

			valid = true;
		}

		return valid
	}

	validateMonth(){
		var valid = false;
		return valid;
	}

	validateDay(){
		var valid = false;
		return valid;
	}

	validateYear(){
		var valid = false;

		return valid;
	}

	addInputErrorStates(){
		this.day.addClass('error');
		this.month.addClass('error');
		this.year.addClass('error')
	}

	validateAgeEntry(dateString){
		if(this.getAge(dateString) >= 21){
			console.log('yes! you are over 21')
			this.hideAgeGate();
			setCookie("legalage", 'true', 365);
			$('body').removeClass('agegate');
		  	$(window).scrollTop(0);
		  	window.dispatcher.trigger('ageGateHidden');
		}else{
			console.log('no! you are not over 21')
			this.showErrorMesssage();
			setCookie("legalage", 'false', 0);
		}
	}

	getAge(dateString) {
	    var today = new Date();
	    var birthDate = new Date(dateString);
	    var age = today.getFullYear() - birthDate.getFullYear();
	    var m = today.getMonth() - birthDate.getMonth();

	    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
	        age--;
	    }
	    return age;
	}

	showErrorMesssage(){
		this.$el.find('.entry').addClass('hide');
		this.$el.find('.notlegal').removeClass('hide');
		ga.trackEvent({
            label:'is not legal',
            category:'agegate'
        })
	}
}
