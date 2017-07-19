import { createAnimateCanvas } from './canvas-creator';

export function create(canvasObj, createAndPlayBool) {
	createAnimateCanvas(canvasObj);
	canvasObj.interval = setInterval(function() {
		try {
			if (canvasObj.exportRoot.areWeReady != undefined) {
				// console.log("This should init ONCE, and ONCE ONLY...")
				// console.log("for ... " + canvasObj.filename);
				canvasObj.isEnabled = true;
				clearInterval(canvasObj.interval);
				if (createAndPlayBool) {
					playTimeline(canvasObj);
				} else {
					setTimeout(function() {
						// console.log("boom-chick")
						// playTimeline(canvasObj);
					}, 5000)
				}
			}
		}
		catch(err) {
		}
	}, 300);
}

export function playTimeline(canvasObj) {
    try {
		if (canvasObj.exportRoot.areWeReady != undefined) {
			if (canvasObj.isEnabled) {
                // console.log("PLAY timeline" + canvasObj.filename)
                canvasObj.exportRoot.start();
            }
		}
	}
		catch(err) {
	}
    
}
export function pause(canvasObj) {
    try {
		if (canvasObj.exportRoot.areWeReady != undefined) {
			if (canvasObj.isEnabled) {
                canvasObj.exportRoot.pause();
                // console.log("PAUSE timeline: " + canvasObj.filename)
            }
		}
	}
		catch(err) {
	}
}