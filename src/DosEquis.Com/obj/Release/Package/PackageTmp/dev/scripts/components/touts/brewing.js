const animationController = require('../../utils/canvas-animation-controller');

export let canvasObj;
let initted = false;

require('./brewing_tout');

export function create(createAndPlayBool) {
	if (!initted) {
		initted = true;
		canvasObj = {
			id: null,
			divID: "brewingTout",
			filename: "brewing_tout",
			lib: brewingToutLib,
			libStringName: "brewingToutLib",
			images: brewingToutImages,
			ss: brewingToutSs,
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