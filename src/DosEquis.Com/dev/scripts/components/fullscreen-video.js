require('scss/components/fullscreen-video');
import {playVideoInline} from 'utils/util_play_video_inline';

export default class FullScreenVideo{
	constructor(options){
 		this.video = document.getElementById('#bgvid');
		playVideoInline(this.video);
	}

	play(){
		console.log(_this.video)
		var _this = this;
		 _.defer(function(){ _this.video.play() });	
	}

	pause(){
		var _this = this;
		 _.defer(function(){ _this.video.pause() });
	}

}