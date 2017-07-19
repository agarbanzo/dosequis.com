const animationController = require('../../utils/canvas-animation-controller');

export let canvasObj;
let initted = false;

require('./steam_export');

export function create(createAndPlayBool) {
	if (!initted) {
		initted = true;
		canvasObj = {
			id: null,
			divID: "about-steam",
			filename: "steam",
			lib: steamLib,
			libStringName: "steamLib",
			images: steamImages,
			ss: steamSs,
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