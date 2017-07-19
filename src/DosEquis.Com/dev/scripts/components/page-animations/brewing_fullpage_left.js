const animationController = require('../../utils/canvas-animation-controller');

export let canvasObj;
let initted = false;

require('./brewing_fullpage_left_export');

export function create(createAndPlayBool) {
	if (!initted) {
		initted = true;
		canvasObj = {
			id: null,
			divID: "brewing-fullpage-left",
			filename: "brewing_fullpage_left",
			lib: brewingFullpageLeftLib,
			libStringName: "brewingFullpageLeftLib",
			images: brewingFullpageLeftImages,
			ss: brewingFullpageLeftpageSs,
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