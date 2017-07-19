const animationController = require('../../utils/canvas-animation-controller');

export let canvasObj;
let initted = false;

require('./moctezuma_export');

export function create(createAndPlayBool) {
	if (!initted) {
		initted = true;
		canvasObj = {
			id: null,
			divID: "moctezuma",
			filename: "moctezuma",
			lib: moctezumaLib,
			libStringName: "moctezumaLib",
			images: moctezumaImages,
			ss: moctezumaSs,
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

