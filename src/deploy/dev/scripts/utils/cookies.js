export function setCookie(name,value,days) {
	console.log(days);
	var expires = "";
    		if (days) {
		    var date = new Date();
		    date.setTime(date.getTime()+(days*24*60*60*1000));
		    expires = "; expires="+date.toGMTString();
		  }

	  	if(window.location.href.indexOf("dosequis.com") != -1){
	  		document.cookie = name+"=" + value + "; domain=.dosequis.com; path=/" + expires;
	  	}else if(window.location.href.indexOf(".havasww.com") != -1){
	  		document.cookie = name+"=" + value + "; domain=.havasww.com; path=/ " + expires;
	  	}else{
	  		document.cookie = name+"=" + value + expires;
	  	}
}

export function getCookie(name) {
     var nameEQ = name + "=";
	  var ca = document.cookie.split(';');
	  for(var i=0;i < ca.length;i++) {
	    var c = ca[i];
	    while (c.charAt(0)==' ') c = c.substring(1,c.length);
	    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	  }
	  return null;
}

export function eraseCookie(name) {
      setCookie(name,"",-1);
}
