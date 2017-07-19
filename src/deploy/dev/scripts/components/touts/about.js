const animationController = require('../../utils/canvas-animation-controller');

export let canvasObj;
let initted = false;
require('./about_tout');

export function create(createAndPlayBool) {
	if (!initted) {
		initted = true;
		canvasObj = {
			id: null,
			divID: "aboutTout",
			filename: "about_tout",
			lib: aboutToutLib,
			libStringName: "aboutToutLib",
			images: aboutToutImages,
			ss: aboutToutSs,
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