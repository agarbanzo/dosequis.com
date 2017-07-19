const animationController = require('../../utils/canvas-animation-controller');

export let canvasObj;
let initted = false;

require('./beer_finder_tout');
export function create(createAndPlayBool) {
	if (!initted) {
		initted = true;
		canvasObj = {
			id: null,
			divID: "beerFinderTout",
			filename: "beer_finder_tout",
			lib: window.beerFinderToutLib,
			libStringName: "beerFinderToutLib",
			images: window.beerFinderToutImages,
			ss: window.beerFinderToutSs,
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