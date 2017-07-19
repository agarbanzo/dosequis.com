const animationController = require('../../utils/canvas-animation-controller');

export let canvasObj;
let initted = false;

require('./history_2016_export');

export function create(createAndPlayBool) {
	if (!initted) {
		initted = true;
		canvasObj = {
			id: null,
			divID: "history16",
			filename: "history_2016",
			lib: history16Lib,
			libStringName: "history16Lib",
			images: history16Images,
			ss: history16Ss,
			canvas: null,
			stage: null,
			exportRoot: null,
			isEnabled: false,
			intrerval: null
		};
		animationController.create(canvasObj, createAndPlayBool);
	}
}
export function playTimeline() {
	animationController.playTimeline(canvasObj);
}
export function pause() {
	animationController.pause(canvasObj);
}

