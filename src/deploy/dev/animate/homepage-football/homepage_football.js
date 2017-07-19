(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 500,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Ref1.png?1476984415103", id:"Ref1"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.Ref1 = function() {
	this.initialize(img.Ref1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,91);


(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C18829").s().p("AlEOqQC1iXB4jeQCPkPAAkmQAAkliPkPQh4jei1iXIAPgTQEEB6CxD9QDGEWgBEvQABEwjGEVQixD+kEB5gADCAAQAAEFhuD3IAFAAQBNhzAph8QAtiGAAiHQAAiFgtiGQgph9hNh0IgFAAQBuD3AAEFg");
	this.shape.setTransform(87.6,97.5,0.498,0.498);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C18829").s().p("AhbJ2Qi7jsgmkNQgIg+gBg/QABkvDEkWQCzj9ECh6IARATQi2CXh4DeQiPEPAAElQAAEmCPEPQB4DeC2CXIgRASQjlhsirjagAhTH8Qhuj3AAkFQAAkFBuj3IgFAAQhNB1gpB8QgsCGAACFQAACGAsCHQApB8BNBzIAFAAIAAAAg");
	this.shape_1.setTransform(48.9,97.5,0.498,0.498);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiJAiIAAhDIETAAIAABDg");
	this.shape_2.setTransform(68.2,109.6,0.498,0.498);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiJAiIAAhDIETAAIAABDg");
	this.shape_3.setTransform(68.2,101.6,0.498,0.498);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiJAiIAAhDIETAAIAABDg");
	this.shape_4.setTransform(68.2,93.5,0.498,0.498);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiJAiIAAhDIETAAIAABDg");
	this.shape_5.setTransform(68.2,85.5,0.498,0.498);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.7,49.9,71.1,95.3);


// stage content:
(lib.homepage_football = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.animation();
	this.instance.setTransform(158.5,123.6,1,1,0,0,0,71.5,95.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Ref
	this.instance_1 = new lib.Ref1();
	this.instance_1.setTransform(120,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250,125,500,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;