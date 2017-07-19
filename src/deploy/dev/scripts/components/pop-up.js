import 'scss/components/pop-up';
import {setCookie,getCookie,eraseCookie} from '../utils/cookies';
import ga from 'services/google-analytics/tracking';

const template = require('../templates/pop-up.html');
export default class Popup{
	constructor(data){
    this.div = template(data);
		this.build();
	}

	build(){
	var popup = $(this.div);
		$('body').prepend(popup);
		let id = $(popup).attr('id');
		$('#'+id+' > .close-pop-up').on('click', () => {
			setCookie("newterms", 'true', 730);
			ga.trackEvent({
				label:'new terms closed',
				category:'newterms pop-up'
			})
			this.hide();
		});
	}

	hide(){
		let popup = document.getElementsByClassName("pop-up")[0];
		popup.style.opacity = 0;
		popup.style.height = 0;
	}
}
