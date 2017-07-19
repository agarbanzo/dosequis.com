const animationController = require('../../utils/canvas-animation-controller');

export let canvasObj;
let initted = false;

require('./beer_recipe_tout');

init();

export function create(createAndPlayBool) {
	if (!initted) {
		initted = true;
		canvasObj = {
			id: null,
			divID: "beerRecipeTout",
			filename: "beer_recipe_tout",
			lib: beerRecipeToutLib,
			libStringName: "beerRecipeToutLib",
			images: beerRecipeToutImages,
			ss: beerRecipeToutSs,
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

function init() {
	var desc = $('.beer-recipe-tout .desc');
	window.dispatcher.on("triggerRecipeText", function(d) {
		var text;
		switch (d) {
			case "in0":
				text = "Dos Equis<br>Lager Especial";
				break;
			case "out0":
				text = "";
				break;
			case "in1":
				text = "Dos Equis<br>Ambar";
				break;
			case "out1":
				text = "";
				break;
			case "in2":
				text = "Dos-A-Rita";
				break;
			case "out2":
				text = "";
				break;
			case "in3":
				text = "Dos Equis<br>Michelada";
				break;
			case "out3":
				text = "";
				break;
			case "in4":
				text = "Dos Sidra";
				break;
			case "out4":
				text = "";
				break;
		}
		desc.html(text)
		if (text.length > 0) {
			desc.addClass("in");			
		} else {
			desc.removeClass("in");
		}
	});
}