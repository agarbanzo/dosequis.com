var animationController = require('../../utils/canvas-animation-controller');
require('./faq_tout');

export var canvasObj;
var initted = false;
var textfield = $('.faq-tout .question-container .txt');
var textArray = [
	"What is the shelf life / expiration date of Dos Equis beer?",
	"Is Dos Equis gluten-free?",
	"What size varieties does Dos Equis come in?"
];

displayRandomText();

export function create(createAndPlayBool) {
	if (!initted) {
		initted = true;
		canvasObj = {
			id: null,
			divID: "faqTout",
			filename: "faq_tout",
			lib: faqToutLib,
			libStringName: "faqToutLib",
			images: faqToutImages,
			ss: faqToutSs,
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
	if (canvasObj.isEnabled) {
		canvasObj.exportRoot.start();
	}
}
export function pause() {
	try {
		if (canvasObj.exportRoot.areWeReady != undefined) {
			canvasObj.exportRoot.pause();
		}
	}
	catch(err) {
	}
}
function displayRandomText() {
	var num = Math.floor(Math.random() * textArray.length);
	textfield.html(textArray[num]);
}