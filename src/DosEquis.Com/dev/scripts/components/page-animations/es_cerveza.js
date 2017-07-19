const animationController = require('../../utils/canvas-animation-controller');

export let canvasObj;
let initted = false;

require('./es_cerveza_export');

export function create(createAndPlayBool) {
	if (!initted) {
		initted = true;
		canvasObj = {
			id: null,
			divID: "esCerveza",
			filename: "es_cerveza",
			lib: esCervezaLib,
			libStringName: "esCervezaLib",
			images: esCervezaImages,
			ss: esCervezaSs,
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