var canvas,
    stage,
    exportRoot,
    canvasesArray = [];

export function createAnimateCanvas(canvasObj) {
	var arrayId = canvasesArray.length;
    canvasObj.id = arrayId;
	canvasesArray.push(canvasObj);
    canvasesArray[arrayId].canvas = document.getElementById(canvasesArray[arrayId].divID); 
    canvasesArray[arrayId].stage = new createjs.Stage(canvasesArray[arrayId].divID);
    canvasesArray[arrayId].images = canvasesArray[arrayId].images||{};
    canvasesArray[arrayId].ss = canvasesArray[arrayId].ss||{};
    var loader = new createjs.LoadQueue(false);
    loader.on("fileload", handleFileLoad, null, false, {arr:canvasesArray, id:arrayId});
    loader.on("complete", handleComplete, null, false, {arr:canvasesArray, id:arrayId});
    loader.loadManifest(canvasesArray[arrayId].lib.properties.manifest);
}
function handleFileLoad(evt, data) {
    var id = data.id;
    if (evt.item.type == "image") { canvasesArray[id].images[evt.item.id] = evt.result; }	
}
function handleComplete(evt, data) {
    var id = data.id;
    var queue = evt.target;
    var ssMetadata =  canvasesArray[id].lib.ssMetadata;
    for(var i=0; i<ssMetadata.length; i++) {
        canvasesArray[id].ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    canvasesArray[id].exportRoot = new window[(canvasesArray[id].libStringName)][canvasesArray[id].filename];
    canvasesArray[id].stage = new createjs.Stage(canvasesArray[id].canvas);
    canvasesArray[id].stage.addChild(canvasesArray[id].exportRoot);	
    createjs.Ticker.setFPS(canvasesArray[id].lib.properties.fps);
    createjs.Ticker.addEventListener("tick", canvasesArray[data.id].stage);	

	// (function(isResp, respDim, isScale, scaleType) {		
	// 	var lastW, lastH, lastS=1;		
	// 	window.addEventListener('resize', resizeCanvas);
	// 	resizeCanvas();		
	// 	function resizeCanvas() {			
	// 		var w = canvasesArray[id].lib.properties.width, 
	// 			h = canvasesArray[id].lib.properties.height;
	// 		var iw = window.innerWidth, 
	// 			ih = window.innerHeight;
	// 		// console.log(iw);
	// 		// console.log(ih)			
	// 		var pRatio = window.devicePixelRatio, 
	// 			xRatio=iw/w, 
	// 			yRatio=ih/h, 
	// 			sRatio=1;	
	// 		// if(isResp) {           
	// 		// 	console.log("AAAAA")     
	// 		// 	if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
	// 		// 		sRatio = lastS;                
	// 		// 	}				
	// 		// 	else if(!isScale) {					
	// 		// 		if(iw<w || ih<h)						
	// 		// 			sRatio = Math.min(xRatio, yRatio);
	// 		// 	}				
	// 		// 	else if(scaleType==1) {					
	// 		// 		sRatio = Math.min(xRatio, yRatio);				
	// 		// 	}				
	// 		// 	else if(scaleType==2) {					
	// 		// 		sRatio = Math.max(xRatio, yRatio);				
	// 		// 	}			
	// 		// }			
	// 		canvasesArray[id].canvas.width = w*pRatio*sRatio;			
	// 		canvasesArray[id].canvas.height = h*pRatio*sRatio;
	// 		canvasesArray[id].canvas.style.width = w*sRatio+'px';			
	// 		canvasesArray[id].canvas.style.height = h*sRatio+'px';
	// 		canvasesArray[id].stage.scaleX = pRatio*sRatio;			
	// 		canvasesArray[id].stage.scaleY = pRatio*sRatio;			
	// 		lastW = iw; 
	// 		lastH = ih; 
	// 		lastS = sRatio;		
	// 	}
	// })(false,'both',false,1);	
}