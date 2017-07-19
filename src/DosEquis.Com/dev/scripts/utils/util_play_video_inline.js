const makeVideoPlayableInline = require('iphone-inline-video');
const screenOrientation = require('screen-orientation');
const viewSize = require('view-size');
const isMobile = require('ismobilejs');

export function playVideoInline($element) {
	 let video = document.getElementById($element);
	 let currentScreenState = isPortrait();

	 function isPortrait(){
		 let vs = viewSize();
		 let so = screenOrientation();
		 //console.log('PORTRAIT', vs.x < vs.y || so.direction==='portrait');
		 return (vs.x < vs.y || so.direction==='portrait');
	 }

	 function setVideoSource(vid){
		 return isPortrait() ? vid.getAttribute('data-mobile-src') : vid.getAttribute('data-desktop-src');
	 }

	 function setPosterSource(vid){
		 let poster = vid.getAttribute('poster').replace('_m.jpg','.jpg');
		 return isPortrait() ? poster.replace('.jpg','_m.jpg') : poster;
	 }
	  // first load
	 if (video.hasAttribute('data-mobile-src')){
		 video.setAttribute('src', setVideoSource(video));
		 video.setAttribute('poster', setPosterSource(video));
		 //console.log('VIDEO-SRC >>',video.poster);
		 if (isMobile.any){
		   // after orientationchange /*
		   window.addEventListener('orientationchange', function(){
		     video.setAttribute('src', setVideoSource(video));
		     video.setAttribute('poster', setPosterSource(video));
		     //console.log('AFTER ORIENTATION CHANGE SRC : '+video.src);
		   });
		 } else {
			 // after window resize /*
		   window.addEventListener('resize', function(){
				 if (currentScreenState === isPortrait()) return;
				 video.setAttribute('src', setVideoSource(video));
		     video.setAttribute('poster', setPosterSource(video));
				 currentScreenState = isPortrait();
				 //console.log('AFTER RESIZE CHANGE SRC : '+video.src);
		   });
		 }
	}



    switch(location.search) {
        case '?enabled=false':
            break;
        case '?enabled=true':
            makeVideoPlayableInline(video,false, false);
            break;
        default:
        case '?enabled=auto':
            makeVideoPlayableInline(video,false);
            break;
    }
}
