const animationController = require('../../utils/canvas-animation-controller');

export let canvasObj;
let initted = false;

require('./glass_of_lager_export');

export function create(createAndPlayBool) {
	if (!initted) {
		initted = true;
		canvasObj = {
			id: null,
			divID: "glassOfLager",
			filename: "glass_of_lager",
			lib: glassOfLagerLib,
			libStringName: "glassOfLagerLib",
			images: glassOfLagerImages,
			ss: glassOfLagerSs,
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