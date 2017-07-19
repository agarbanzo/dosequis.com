const animationController = require('../../../utils/canvas-animation-controller');

export let canvasObj;
let initted = false;

require('./brewingleft_export');

export function create(createAndPlayBool) {
	if (!initted) {
		initted = true;
		canvasObj = {
			id: null,
			divID: "brewingleft",
			filename: "brewingleft",
			lib: brewingleftLib,
			libStringName: "brewingleftLib",
			images: brewingleftImages,
			ss: brewingleftSs,
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