(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 566,
	height: 542,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/spacerjpg.jpg?1476999844402", id:"spacerjpg"},
		{src:"images/glass_of_lager_atlas_P_.png?1476999844397", id:"glass_of_lager_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"glass_of_lager_atlas_P_", frames: [[0,526,307,73],[0,0,208,524]]}
];


// symbols:



(lib.coaster = function() {
	this.spriteSheet = ss["glass_of_lager_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.glass2 = function() {
	this.spriteSheet = ss["glass_of_lager_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.spacerjpg = function() {
	this.initialize(img.spacerjpg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.glass2();
	this.instance.setTransform(-104,-263);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-263,208,524.5);


(lib.coaster_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coaster();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,307,73);


(lib.glass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{go:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(36).call(this.frame_36).wait(1));

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(107,479.5,1,1,0,0,0,3,218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({regY:218.1,x:107.1,y:479.6},0).wait(1).to({regX:0,regY:-1,rotation:-0.1,x:103.8,y:260.5},0).wait(1).to({rotation:-0.2,x:103.4},0).wait(1).to({rotation:-0.3,x:102.9},0).wait(1).to({rotation:-0.4,x:102.3},0).wait(1).to({regX:3.1,regY:218.2,rotation:-0.5,x:107.1,y:479.6},0).wait(1).to({regX:0,regY:-1,x:102.2,y:260.4},0).wait(1).to({rotation:-0.4,x:102.4},0).wait(1).to({x:102.6},0).wait(1).to({rotation:-0.3,x:102.9},0).wait(1).to({rotation:-0.2,x:103.3},0).wait(1).to({rotation:-0.1,x:103.6},0).wait(1).to({rotation:0,x:103.8},0).wait(1).to({regX:3,regY:218,x:107,y:479.5},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.5,208,524);


(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"go":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(51).call(this.frame_51).wait(1));

	// glass
	this.glass = new lib.glass();
	this.glass.setTransform(395.1,26.6,0.201,0.201,0,0,0,104.2,261.8);

	this.timeline.addTween(cjs.Tween.get(this.glass).wait(7).to({regX:102.1,regY:260.5,scaleX:0.2,scaleY:0.2,x:394.4},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:393.5,y:27.3},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:392.1,y:28.6},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:389.9,y:30.6},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:386.9,y:33.3},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:382.8,y:37},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:377.3,y:41.9},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:370.3,y:48.2},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:361,y:56.5},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:348.7,y:67.4},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:332.2,y:82.2},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:309.2,y:102.8},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:276.9,y:131.7},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:238,y:166.5},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:205.5,y:195.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:184.1,y:214.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:170.3,y:227},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:161.4,y:234.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:155.7,y:240.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:152.2,y:243.2},0).wait(1).to({scaleX:1,scaleY:1,x:150.4,y:244.8},0).wait(1).to({regX:104,regY:261.5,scaleX:1,scaleY:1,x:152,y:246.5},0).wait(24));

	// coaster
	this.instance = new lib.coaster_1();
	this.instance.setTransform(395.6,70,0.201,0.201,0,0,0,153.5,36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({regY:36.5,scaleX:0.2,scaleY:0.2,x:395.3,y:70.4},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:394.5,y:71.7},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:393.1,y:74},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:391,y:77.5},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:387.9,y:82.4},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:383.9,y:89},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:378.5,y:97.7},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:371.6,y:109.1},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:362.4,y:123.9},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:350.4,y:143.5},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:334.1,y:170.1},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:311.4,y:207},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:279.6,y:258.7},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:241.2,y:321.2},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:209.3,y:373.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:188.2,y:407.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:174.7,y:429.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:165.9,y:443.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:160.3,y:453.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:156.8,y:458.7},0).wait(1).to({scaleX:1,scaleY:1,x:155.1,y:461.6},0).wait(1).to({scaleX:1,scaleY:1,x:154.5,y:462.5},0).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364.7,-26.3,61.7,105.3);


// stage content:



(lib.glass_of_lager = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var self = this;
		
		this.areWeReady = true;
		this.isFirstTime = true;
		
		this.start = function() {
			if (self.isFirstTime) {
				self.animation.gotoAndPlay("go");
				self.animation.glass.gotoAndPlay("go");
			}
			self.isFirstTime = false;
		}
		
		this.pause = function() {
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// spacers
	this.instance = new lib.spacerjpg();
	this.instance.setTransform(0,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.animation = new lib.animation();
	this.animation.setTransform(280.5,293.5,1,1,0,0,0,153.5,261.5);

	this.timeline.addTween(cjs.Tween.get(this.animation).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(283,255,553.4,127);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;