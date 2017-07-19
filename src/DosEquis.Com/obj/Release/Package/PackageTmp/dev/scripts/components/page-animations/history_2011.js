const animationController = require('../../utils/canvas-animation-controller');

export let canvasObj;
let initted = false;

require('./history_2011_export');

export function create(createAndPlayBool) {
	if (!initted) {
		initted = true;
		canvasObj = {
			id: null,
			divID: "historyEleven",
			filename: "history_2011",
			lib: historyElevenLib,
			libStringName: "historyElevenLib",
			images: historyElevenImages,
			ss: historyElevenSs,
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