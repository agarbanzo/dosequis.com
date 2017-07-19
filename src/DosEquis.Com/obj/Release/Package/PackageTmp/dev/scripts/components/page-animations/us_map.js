const animationController = require('../../utils/canvas-animation-controller');

export let canvasObj;
let initted = false;

require('./us_map_export');

export function create(createAndPlayBool) {
	if (!initted) {
		initted = true;
		canvasObj = {
			id: null,
			divID: "usMap",
			filename: "us_map",
			lib: usMapLib,
			libStringName: "usMapLib",
			images: usMapImages,
			ss: usMapSs,
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