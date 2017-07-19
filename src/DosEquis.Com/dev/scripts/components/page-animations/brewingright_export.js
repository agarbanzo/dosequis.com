(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/Assets/Images/touts/brewing-fullpage/spacerjpg.jpg?1477061894844", id:"spacerjpg"},
		{src:"/Assets/Images/touts/brewing-fullpage/spacerpng.png?1477061894844", id:"spacerpng"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.spacerjpg = function() {
	this.initialize(img.spacerjpg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.spacerpng = function() {
	this.initialize(img.spacerpng);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Az/jMMAn/AAAIAAGZMgn/AAAg");
	this.shape.setTransform(128,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCBA81").s().p("Az/DNIAAmZMAn+AAAIAAGZg");
	this.shape_1.setTransform(128,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,258,43);


// stage content:
(lib.brewingright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var self = this;
		
		this.areWeReady = true;
		this.isFirstTime = true;
		
		this.start = function() {
			console.log("play");
			if (self.isFirstTime) {
				self.play();
			}
			self.isFirstTime = false;
		}
		
		this.pause = function() {
		}
		/*
		setTimeout(function() {
			self.start();
		}, 1000);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(1,1,1).p("AOEAAQAAFukIEDQkHEEl1AAQl0AAkHkEQkIkDAAluQAAltEIkEQEHkDF0AAQF1AAEHEDQEIEEAAFtg");
	this.shape.setTransform(143,125.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCBA81").s().p("Ap7JxQkIkDABluQgBltEIkDQEHkDF0gBQF1ABEHEDQEIEDAAFtQAAFukIEDQkHEEl1AAQl0AAkHkEg");
	this.shape_1.setTransform(143,125.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 4
	this.instance = new lib.Symbol1();
	this.instance.setTransform(153,124.5,1,1,0,0,0,128,20.5);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-3,-3,262,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.spacerpng();
	this.instance_1.setTransform(21,-40);

	this.instance_2 = new lib.spacerjpg();
	this.instance_2.setTransform(0,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,85,287.5,255);

})(window.brewingrightLib = window.brewingrightLib ||{}, window.brewingrightImages = window.brewingrightImages ||{}, createjs = createjs||{}, window.brewingrightSs = window.brewingrightSs ||{});