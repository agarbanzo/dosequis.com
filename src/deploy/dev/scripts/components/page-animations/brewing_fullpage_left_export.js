(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 367,
	height: 398,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/Assets/Images/touts/brewing-fullpage/flowersuse.png?1477057830243", id:"flowersuse"},
		{src:"/Assets/Images/touts/brewing-fullpage/spacerjpg.jpg?1477057830243", id:"spacerjpg"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.flowersuse = function() {
	this.initialize(img.flowersuse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,458,558);


(lib.spacerjpg = function() {
	this.initialize(img.spacerjpg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.flowersSPRITE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flowersuse();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,458,558);


(lib.stem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AADgRIp+BVIgMiKIL4hhIIXECIiCBNg");
	mask.setTransform(206.1,307.1);

	// Layer 1
	this.instance = new lib.flowersSPRITE();
	this.instance.setTransform(229,279,1,1,0,0,0,229,279);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(141.3,290.3,129.8,33.8);


(lib.l4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuAP0IAA/nIcBAAIAAfng");
	mask.setTransform(363.8,434.7);

	// Layer 1
	this.instance = new lib.flowersSPRITE();
	this.instance.setTransform(229,279,1,1,0,0,0,229,279);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(274.1,333.5,179.5,202.5);


(lib.l35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AraM1IAA5pIW1AAIhjErIALCBIBYApIAASUg");
	mask.setTransform(78.2,351);

	// Layer 3
	this.instance = new lib.flowersSPRITE();
	this.instance.setTransform(229,279,1,1,0,0,0,229,279);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.1,268.9,146.2,164.2);


(lib.l3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0cM1IAA5pMAo6AAAIAAZpg");
	mask.setTransform(136,351);

	// Layer 3
	this.instance = new lib.flowersSPRITE();
	this.instance.setTransform(229,279,1,1,0,0,0,229,279);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,268.9,262,164.2);


(lib.l2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aq1NWIAA6sIVrAAIAAasg");
	mask.setTransform(374.5,163.6);

	// Layer 1
	this.instance = new lib.flowersSPRITE();
	this.instance.setTransform(229,279,1,1,0,0,0,229,279);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(305,78.1,139,171);


(lib.l1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Av8PyIAA/jIf5AAIAAfjg");
	mask.setTransform(148,137.1);

	// Layer 1
	this.instance = new lib.flowersSPRITE();
	this.instance.setTransform(229,279,1,1,0,0,0,229,279);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45.9,36.1,204.2,202.1);


(lib.hop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{repeat:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_209 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(209).call(this.frame_209).wait(1));

	// Layer 1
	this.instance = new lib.l35();
	this.instance.setTransform(64.5,166.4,0.949,0.949,158,0,0,133.4,295.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({regX:78.2,regY:351,x:93.4,y:98.1},0).wait(2).to({x:93.5},0).wait(1).to({x:93.4},0).wait(5).to({y:98.2},0).wait(3).to({x:93.3},0).wait(1).to({rotation:157.9,x:93.4},0).wait(1).to({x:93.3},0).wait(3).to({y:98.3},0).wait(2).to({y:98.2},0).wait(1).to({y:98.3},0).wait(3).to({y:98.4},0).wait(1).to({y:98.3},0).wait(1).to({x:93.2,y:98.4},0).wait(1).to({rotation:157.8},0).wait(5).to({x:93.1,y:98.5},0).wait(1).to({x:93.2},0).wait(4).to({rotation:157.7,x:93.1,y:98.6},0).wait(3).to({y:98.7},0).wait(4).to({x:93,y:98.8},0).wait(1).to({y:98.7},0).wait(1).to({rotation:157.6,y:98.8},0).wait(1).to({y:98.9},0).wait(1).to({y:98.8},0).wait(1).to({x:92.9,y:98.9},0).wait(1).to({x:93},0).wait(2).to({x:92.9},0).wait(2).to({rotation:157.5,y:99},0).wait(3).to({y:99.1},0).wait(1).to({x:92.8},0).wait(3).to({y:99.2},0).wait(1).to({rotation:157.4},0).wait(2).to({y:99.3},0).wait(1).to({x:92.7,y:99.2},0).wait(1).to({y:99.3},0).wait(4).to({y:99.4},0).wait(2).to({rotation:157.3,y:99.3},0).wait(1).to({x:92.6,y:99.4},0).wait(2).to({x:92.7,y:99.5},0).wait(1).to({x:92.6,y:99.4},0).wait(2).to({y:99.5},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(2).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:99.6},0).wait(1).to({rotation:157.2},0).wait(1).to({x:92.5},0).wait(1).to({x:92.6},0).wait(1).to({x:92.5},0).wait(5).to({y:99.7},0).wait(2).to({x:92.6},0).wait(1).to({x:92.5},0).wait(7).to({regX:133.3,regY:295.4,x:64.6,y:168.5},0).wait(1).to({regX:78.2,regY:351,x:92.3,y:99.6},0).wait(2).to({x:92.4,y:99.5},0).wait(1).to({x:92.3},0).wait(1).to({y:99.6},0).wait(1).to({x:92.4,y:99.5},0).wait(2).to({y:99.4},0).wait(1).to({y:99.5},0).wait(2).to({rotation:157.3,y:99.4},0).wait(2).to({scaleX:0.95,scaleY:0.95,x:92.5},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(2).to({scaleX:0.95,scaleY:0.95,y:99.3},0).wait(1).to({x:92.4},0).wait(1).to({x:92.5},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(2).to({y:99.2},0).wait(1).to({rotation:157.4},0).wait(3).to({x:92.6},0).wait(1).to({y:99.1},0).wait(3).to({x:92.5},0).wait(1).to({x:92.6},0).wait(2).to({y:99},0).wait(1).to({y:99.1},0).wait(1).to({rotation:157.5},0).wait(1).to({x:92.7,y:99},0).wait(2).to({y:98.9},0).wait(1).to({y:99},0).wait(2).to({y:98.9},0).wait(7).to({rotation:157.6,x:92.8,y:98.8},0).wait(5).to({y:98.7},0).wait(5).to({x:92.9,y:98.6},0).wait(2).to({rotation:157.7,x:92.8,y:98.7},0).wait(1).to({x:92.9,y:98.6},0).wait(2).to({y:98.5},0).wait(2).to({y:98.6},0).wait(1).to({y:98.5},0).wait(5).to({x:93},0).wait(1).to({y:98.4},0).wait(1).to({rotation:157.8,y:98.5},0).wait(1).to({y:98.4},0).wait(3).to({y:98.3},0).wait(1).to({x:93.1,y:98.4},0).wait(1).to({x:93,y:98.3},0).wait(2).to({x:93.1},0).wait(1).to({x:93},0).wait(1).to({x:93.1},0).wait(1).to({y:98.2},0).wait(1).to({rotation:157.9},0).wait(3).to({x:93.2},0).wait(1).to({x:93.1,y:98.1},0).wait(2).to({y:98.2},0).wait(1).to({y:98.1},0).wait(1).to({x:93.2},0).wait(2).to({y:98},0).wait(1).to({y:98.1},0).wait(1).to({y:98},0).wait(1).to({rotation:158},0).wait(3).to({x:93.3},0).wait(1).to({x:93.2},0).wait(1).to({x:93.3,y:97.9},0).wait(1).to({x:93.2},0).wait(1).to({regX:133.4,regY:295.6,x:64.5,y:166.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-314.1,-111.8,601,653.4);


(lib.frontLeaf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.l4();
	this.instance.setTransform(114,64.5,1,1,0,0,0,388,397.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274,-333.4,458,558);


(lib.l32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"repeat":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_278 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(278).call(this.frame_278).wait(1));

	// Layer 1
	this.instance = new lib.l3();
	this.instance.setTransform(271,42,1,1,0,0,0,261,317);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regX:136,regY:351,x:146,y:76},0).wait(2).to({rotation:0.1,y:75.9},0).wait(2).to({x:145.9,y:75.8},0).wait(2).to({rotation:0.2,y:75.7},0).wait(2).to({y:75.6},0).wait(1).to({y:75.5},0).wait(1).to({rotation:0.3,y:75.4},0).wait(1).to({x:145.8},0).wait(1).to({y:75.3},0).wait(1).to({rotation:0.4,y:75.2},0).wait(1).to({y:75.1},0).wait(1).to({rotation:0.5,x:145.7,y:75},0).wait(1).to({y:74.9},0).wait(1).to({rotation:0.6},0).wait(1).to({y:74.8},0).wait(1).to({rotation:0.7,y:74.6},0).wait(1).to({y:74.5},0).wait(1).to({rotation:0.8,x:145.6,y:74.4},0).wait(1).to({y:74.3},0).wait(1).to({rotation:0.9,x:145.5,y:74.2},0).wait(1).to({y:74},0).wait(1).to({rotation:1,y:73.9},0).wait(1).to({rotation:1.1,y:73.8},0).wait(1).to({x:145.4,y:73.7},0).wait(1).to({rotation:1.2,y:73.6},0).wait(1).to({x:145.3,y:73.4},0).wait(1).to({rotation:1.3,y:73.3},0).wait(1).to({y:73.2},0).wait(1).to({rotation:1.4,x:145.2,y:73},0).wait(1).to({rotation:1.5,x:145.3,y:72.9},0).wait(1).to({x:145.2,y:72.8},0).wait(1).to({rotation:1.6,y:72.7},0).wait(1).to({y:72.6},0).wait(1).to({rotation:1.7,x:145.1,y:72.5},0).wait(1).to({y:72.4},0).wait(1).to({rotation:1.8,y:72.3},0).wait(1).to({y:72.1},0).wait(1).to({y:72},0).wait(1).to({rotation:1.9},0).wait(1).to({x:145,y:71.9},0).wait(1).to({rotation:2,y:71.8},0).wait(2).to({y:71.7},0).wait(1).to({rotation:2.1,y:71.6},0).wait(1).to({x:144.9,y:71.5},0).wait(1).to({y:71.4},0).wait(1).to({rotation:2.2},0).wait(1).to({y:71.3},0).wait(3).to({rotation:2.3,y:71.1},0).wait(2).to({y:71},0).wait(1).to({x:144.8},0).wait(1).to({rotation:2.4,x:144.9},0).wait(1).to({x:144.8,y:70.9},0).wait(2).to({regX:261.1,regY:316.9,x:271.2,y:42.1},0).wait(1).to({regX:136,regY:351,x:144.8,y:71},0).wait(1).to({y:71.1},0).wait(1).to({rotation:2.3},0).wait(1).to({y:71.2},0).wait(1).to({y:71.3},0).wait(1).to({rotation:2.2,y:71.4},0).wait(2).to({rotation:2.1,x:144.9,y:71.6},0).wait(2).to({y:71.7},0).wait(1).to({rotation:2,y:71.9},0).wait(2).to({rotation:1.9,x:145,y:72},0).wait(1).to({y:72.1},0).wait(1).to({rotation:1.8,x:145.1,y:72.2},0).wait(1).to({y:72.4},0).wait(1).to({rotation:1.7,y:72.5},0).wait(1).to({y:72.6},0).wait(1).to({rotation:1.6,y:72.7},0).wait(1).to({rotation:1.5,x:145.2,y:72.8},0).wait(1).to({y:73},0).wait(1).to({rotation:1.4,y:73.1},0).wait(1).to({x:145.3,y:73.2},0).wait(1).to({rotation:1.3,y:73.4},0).wait(1).to({rotation:1.2,y:73.5},0).wait(1).to({x:145.4,y:73.7},0).wait(1).to({rotation:1.1,y:73.8},0).wait(1).to({rotation:1,x:145.5,y:74},0).wait(1).to({rotation:0.9,y:74.2},0).wait(1).to({y:74.3},0).wait(1).to({rotation:0.8,x:145.6,y:74.4},0).wait(1).to({rotation:0.7,y:74.6},0).wait(1).to({y:74.8},0).wait(1).to({rotation:0.6,x:145.7,y:74.9},0).wait(1).to({rotation:0.5,y:75},0).wait(1).to({y:75.1},0).wait(1).to({rotation:0.4,x:145.8,y:75.3},0).wait(1).to({y:75.4},0).wait(1).to({rotation:0.3,y:75.5},0).wait(1).to({y:75.6},0).wait(1).to({rotation:0.2,x:145.9,y:75.7},0).wait(2).to({y:75.9},0).wait(1).to({rotation:0.1},0).wait(1).to({y:76},0).wait(1).to({x:146,y:76.1},0).wait(1).to({rotation:0},0).wait(1).to({y:76.2},0).wait(1).to({y:76.3},0).wait(1).to({rotation:-0.1},0).wait(2).to({y:76.4},0).wait(2).to({x:146.1,y:76.5},0).wait(1).to({rotation:-0.2,y:76.6},0).wait(4).to({y:76.7},0).wait(3).to({rotation:-0.3,y:76.8},0).wait(1).to({x:146.2},0).wait(1).to({x:146.1},0).wait(1).to({regX:260.9,regY:316.9,x:271,y:42},0).wait(1).to({regX:136,regY:351,x:146.2,y:76.7},0).wait(1).to({x:146.3},0).wait(3).to({y:76.8},0).wait(5).to({x:146.2},0).wait(6).to({x:146.3},0).wait(1).to({y:76.7},0).wait(6).to({x:146.2},0).wait(2).to({x:146.3},0).wait(6).to({x:146.2},0).wait(1).to({x:146.3},0).wait(6).to({x:146.2},0).wait(1).to({x:146.3},0).wait(7).to({rotation:-0.2},0).wait(2).to({y:76.6},0).wait(7).to({y:76.7},0).wait(9).to({y:76.6},0).wait(3).to({regX:261.1,regY:316.9,x:271.2,y:42.1},0).wait(1).to({regX:136,regY:351,x:146.2,y:76.7},0).wait(5).to({y:76.6},0).wait(3).to({y:76.7},0).wait(2).to({x:146.1,y:76.6},0).wait(1).to({x:146.2},0).wait(2).to({x:146.1},0).wait(1).to({x:146.2},0).wait(2).to({x:146.1},0).wait(2).to({x:146.2},0).wait(1).to({x:146.1},0).wait(2).to({y:76.5},0).wait(1).to({y:76.6},0).wait(2).to({y:76.5},0).wait(6).to({rotation:-0.1},0).wait(4).to({y:76.4},0).wait(2).to({x:146},0).wait(1).to({x:146.1},0).wait(1).to({x:146},0).wait(1).to({x:146.1},0).wait(1).to({x:146},0).wait(1).to({x:146.1,y:76.3},0).wait(1).to({x:146,y:76.4},0).wait(2).to({y:76.3},0).wait(2).to({x:146.1},0).wait(1).to({x:146},0).wait(8).to({rotation:0},0).wait(3).to({y:76.2},0).wait(14).to({x:145.9},0).wait(2).to({x:146},0).wait(3).to({x:145.9},0).wait(3).to({regX:261,regY:317,x:271,y:42},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-275,458,558);


(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// leaf front
	this.instance = new lib.frontLeaf();
	this.instance.setTransform(97.1,122,1,1,0,0,0,115,59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// cone0
	this.anim0 = new lib.hop();
	this.anim0.setTransform(104.4,122.2,1,1,0,0,0,68.4,169);

	this.timeline.addTween(cjs.Tween.get(this.anim0).wait(1));

	// cone back
	this.instance_1 = new lib.l1();
	this.instance_1.setTransform(55,101,1,1,0,0,0,216,172);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// cone1
	this.anim1 = new lib.l32();
	this.anim1.setTransform(71,150,1,1,0,0,0,273,44.1);

	this.timeline.addTween(cjs.Tween.get(this.anim1).wait(1));

	// leaf back
	this.instance_2 = new lib.l2();
	this.instance_2.setTransform(-94,132,1,1,0,0,0,229,279);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// stem bottom
	this.instance_3 = new lib.stem();
	this.instance_3.setTransform(196.7,56.2,1,1,13.7,0,0,204,297.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// stem top
	this.instance_4 = new lib.stem();
	this.instance_4.setTransform(195.8,-7.3,1,1,137.7,0,0,204,297.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-337,870.1,831.9);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"repeat":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_286 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(286).call(this.frame_286).wait(1));

	// Layer 1
	this.animation = new lib.animation();
	this.animation.setTransform(421.1,13.9,1,1,0,0,0,234.1,-55.1);

	this.timeline.addTween(cjs.Tween.get(this.animation).wait(30).to({regX:36,regY:98.2,x:223,y:167.2},0).wait(4).to({x:223.1},0).wait(1).to({y:167.3},0).wait(2).to({x:223.2},0).wait(1).to({rotation:-0.1,y:167.4},0).wait(2).to({y:167.5},0).wait(1).to({x:223.3,y:167.6},0).wait(1).to({x:223.4},0).wait(1).to({rotation:-0.2,y:167.7},0).wait(1).to({x:223.5,y:167.8},0).wait(1).to({x:223.6,y:167.9},0).wait(1).to({y:168},0).wait(1).to({rotation:-0.3,x:223.7,y:168.1},0).wait(1).to({x:223.8,y:168.2},0).wait(1).to({x:223.9,y:168.3},0).wait(1).to({rotation:-0.4,x:224,y:168.4},0).wait(1).to({x:224.1,y:168.6},0).wait(1).to({x:224.2,y:168.7},0).wait(1).to({rotation:-0.5,x:224.3,y:168.8},0).wait(1).to({x:224.4,y:169},0).wait(1).to({rotation:-0.6,x:224.6,y:169.2},0).wait(1).to({x:224.7,y:169.3},0).wait(1).to({rotation:-0.7,x:224.8,y:169.5},0).wait(1).to({x:225,y:169.7},0).wait(1).to({rotation:-0.8,x:225.1,y:169.8},0).wait(1).to({x:225.3,y:170},0).wait(1).to({rotation:-0.9,x:225.4,y:170.2},0).wait(1).to({x:225.6,y:170.4},0).wait(1).to({rotation:-1,x:225.7,y:170.6},0).wait(1).to({rotation:-1.1,x:225.9,y:170.8},0).wait(1).to({x:226.1,y:171},0).wait(1).to({rotation:-1.2,x:226.2,y:171.2},0).wait(1).to({x:226.5,y:171.4},0).wait(1).to({rotation:-1.3,x:226.6,y:171.6},0).wait(1).to({rotation:-1.4,x:226.8,y:171.8},0).wait(1).to({x:227,y:172.1},0).wait(1).to({rotation:-1.5,x:227.1,y:172.3},0).wait(1).to({rotation:-1.6,x:227.4,y:172.5},0).wait(1).to({x:227.5,y:172.8},0).wait(1).to({rotation:-1.7,x:227.7,y:173},0).wait(1).to({rotation:-1.8,x:227.9,y:173.2},0).wait(1).to({x:228.1,y:173.4},0).wait(1).to({rotation:-1.9,x:228.3,y:173.6},0).wait(1).to({rotation:-2,x:228.4,y:173.8},0).wait(1).to({x:228.6,y:174.1},0).wait(1).to({rotation:-2.1,x:228.8,y:174.3},0).wait(1).to({x:228.9,y:174.4},0).wait(1).to({rotation:-2.2,x:229.1,y:174.6},0).wait(1).to({x:229.2,y:174.8},0).wait(1).to({rotation:-2.3,x:229.4,y:175},0).wait(1).to({rotation:-2.4,x:229.6,y:175.1},0).wait(1).to({x:229.7,y:175.3},0).wait(1).to({rotation:-2.5,x:229.8,y:175.5},0).wait(1).to({x:230,y:175.7},0).wait(1).to({x:230.1,y:175.8},0).wait(1).to({rotation:-2.6,x:230.2,y:176},0).wait(1).to({x:230.3,y:176.1},0).wait(1).to({rotation:-2.7,x:230.4,y:176.2},0).wait(1).to({x:230.5,y:176.3},0).wait(1).to({x:230.6,y:176.4},0).wait(1).to({rotation:-2.8,x:230.7,y:176.5},0).wait(1).to({x:230.8,y:176.6},0).wait(1).to({y:176.7},0).wait(1).to({x:230.9,y:176.8},0).wait(2).to({rotation:-2.9,x:231,y:176.9},0).wait(2).to({x:231.1},0).wait(1).to({y:177},0).wait(3).to({regX:234.1,regY:-55,x:421.2,y:13.9},0).wait(1).to({regX:36,regY:98.2,x:231,y:176.9},0).wait(4).to({y:176.8},0).wait(2).to({x:230.9},0).wait(1).to({rotation:-2.8,y:176.7},0).wait(2).to({x:230.8},0).wait(1).to({y:176.6},0).wait(1).to({x:230.7,y:176.5},0).wait(1).to({y:176.4},0).wait(1).to({rotation:-2.7,x:230.6},0).wait(1).to({x:230.5,y:176.3},0).wait(1).to({x:230.4,y:176.2},0).wait(1).to({y:176.1},0).wait(1).to({rotation:-2.6,x:230.3,y:176},0).wait(1).to({x:230.2,y:175.9},0).wait(1).to({x:230.1,y:175.8},0).wait(1).to({rotation:-2.5,x:229.9,y:175.6},0).wait(1).to({x:229.8,y:175.5},0).wait(1).to({rotation:-2.4,y:175.3},0).wait(1).to({x:229.6,y:175.2},0).wait(1).to({x:229.5,y:175},0).wait(1).to({rotation:-2.3,x:229.3,y:174.9},0).wait(1).to({x:229.2,y:174.8},0).wait(1).to({rotation:-2.2,x:229.1,y:174.6},0).wait(1).to({x:228.9,y:174.4},0).wait(1).to({rotation:-2.1,x:228.8,y:174.3},0).wait(1).to({rotation:-2,x:228.6,y:174.1},0).wait(1).to({x:228.5,y:173.9},0).wait(1).to({rotation:-1.9,x:228.3,y:173.7},0).wait(1).to({x:228.1,y:173.4},0).wait(1).to({rotation:-1.8,x:228,y:173.2},0).wait(1).to({x:227.8,y:173},0).wait(1).to({rotation:-1.7,x:227.6,y:172.8},0).wait(1).to({rotation:-1.6,x:227.5,y:172.6},0).wait(1).to({x:227.2,y:172.4},0).wait(1).to({rotation:-1.5,x:227.1,y:172.2},0).wait(1).to({rotation:-1.4,x:226.9,y:171.9},0).wait(1).to({x:226.7,y:171.7},0).wait(1).to({rotation:-1.3,x:226.5,y:171.5},0).wait(1).to({rotation:-1.2,x:226.3,y:171.3},0).wait(1).to({x:226.2,y:171.1},0).wait(1).to({rotation:-1.1,x:226,y:170.8},0).wait(1).to({rotation:-1,x:225.8,y:170.6},0).wait(1).to({x:225.6,y:170.4},0).wait(1).to({rotation:-0.9,x:225.4,y:170.2},0).wait(1).to({rotation:-0.8,x:225.3,y:170},0).wait(1).to({x:225.1,y:169.8},0).wait(1).to({rotation:-0.7,x:224.9,y:169.6},0).wait(1).to({x:224.8,y:169.4},0).wait(1).to({rotation:-0.6,x:224.6,y:169.2},0).wait(1).to({x:224.5,y:169},0).wait(1).to({rotation:-0.5,x:224.3,y:168.8},0).wait(1).to({x:224.2,y:168.6},0).wait(1).to({rotation:-0.4,x:224.1,y:168.5},0).wait(1).to({x:224,y:168.3},0).wait(1).to({rotation:-0.3,x:223.8,y:168.2},0).wait(1).to({x:223.7,y:168},0).wait(1).to({rotation:-0.2,x:223.6,y:167.9},0).wait(1).to({x:223.5,y:167.8},0).wait(1).to({x:223.4,y:167.7},0).wait(1).to({y:167.6},0).wait(1).to({rotation:-0.1,x:223.3,y:167.5},0).wait(1).to({x:223.2,y:167.4},0).wait(1).to({y:167.3},0).wait(1).to({x:223.1,y:167.2},0).wait(1).to({rotation:0,x:223},0).wait(2).to({y:167.1},0).wait(4).to({regX:234.1,regY:-55.1,x:421.1,y:13.9},0).to({regY:-55,rotation:-2.9,x:421.2},43).wait(1).to({regX:36,regY:98.2,x:231,y:176.9},0).wait(3).to({y:176.8},0).wait(2).to({x:230.9},0).wait(1).to({rotation:-2.8,y:176.7},0).wait(1).to({x:230.8},0).wait(1).to({y:176.6},0).wait(1).to({x:230.7,y:176.5},0).wait(1).to({rotation:-2.7,x:230.6,y:176.4},0).wait(1).to({x:230.5,y:176.3},0).wait(1).to({x:230.4,y:176.2},0).wait(1).to({rotation:-2.6,x:230.3,y:176.1},0).wait(1).to({x:230.2,y:175.9},0).wait(1).to({x:230.1,y:175.8},0).wait(1).to({rotation:-2.5,x:229.9,y:175.6},0).wait(1).to({x:229.8,y:175.4},0).wait(1).to({rotation:-2.4,x:229.7,y:175.3},0).wait(1).to({x:229.5,y:175.1},0).wait(1).to({rotation:-2.3,x:229.3,y:174.9},0).wait(1).to({rotation:-2.2,x:229.2,y:174.7},0).wait(1).to({x:229,y:174.5},0).wait(1).to({rotation:-2.1,x:228.8,y:174.3},0).wait(1).to({rotation:-2,x:228.6,y:174},0).wait(1).to({x:228.4,y:173.8},0).wait(1).to({rotation:-1.9,x:228.2,y:173.5},0).wait(1).to({rotation:-1.8,x:228,y:173.3},0).wait(1).to({rotation:-1.7,x:227.8,y:173},0).wait(1).to({x:227.6,y:172.7},0).wait(1).to({rotation:-1.6,x:227.3,y:172.5},0).wait(1).to({rotation:-1.5,x:227.1,y:172.2},0).wait(1).to({rotation:-1.4,x:226.9,y:171.9},0).wait(1).to({rotation:-1.3,x:226.7,y:171.6},0).wait(1).to({x:226.4,y:171.3},0).wait(1).to({rotation:-1.2,x:226.2,y:171.1},0).wait(1).to({rotation:-1.1,x:225.9,y:170.8},0).wait(1).to({rotation:-1,x:225.7,y:170.5},0).wait(1).to({rotation:-0.9,x:225.5,y:170.3},0).wait(1).to({x:225.3,y:170},0).wait(1).to({rotation:-0.8,x:225.1,y:169.7},0).wait(1).to({rotation:-0.7,x:224.9,y:169.5},0).wait(1).to({rotation:-0.6,x:224.7,y:169.3},0).wait(1).to({x:224.5,y:169},0).wait(1).to({rotation:-0.5,x:224.3,y:168.8},0).wait(1).to({rotation:-0.4,x:224.2,y:168.6},0).wait(1).to({x:224,y:168.4},0).wait(1).to({rotation:-0.3,x:223.8,y:168.2},0).wait(1).to({x:223.7,y:168},0).wait(1).to({rotation:-0.2,x:223.6,y:167.9},0).wait(1).to({x:223.5,y:167.8},0).wait(1).to({x:223.4,y:167.6},0).wait(1).to({rotation:-0.1,x:223.3,y:167.5},0).wait(1).to({x:223.2,y:167.4},0).wait(1).to({x:223.1,y:167.3},0).wait(1).to({rotation:0,y:167.2},0).wait(1).to({x:223},0).wait(1).to({y:167.1},0).wait(3).to({regX:234.1,regY:-55.1,x:421.1,y:13.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-268.1,870.1,831.9);


// stage content:



(lib.brewingfullpageleft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		this.areWeReady = true;
		
		this.start = function() {
			self.main_mc.play();
			self.main_mc.animation.play();
			self.main_mc.animation.anim0.play();
			self.main_mc.animation.anim1.play();
		}
		
		this.pause = function() {
			self.main_mc.stop();
			self.main_mc.animation.stop();
			self.main_mc.animation.anim0.stop();
			self.main_mc.animation.anim1.stop();
		}
		
		setTimeout(function() {
			self.start();
		}, 500);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// animation
	this.main_mc = new lib.main();
	this.main_mc.setTransform(-73.9,166.9,1,1,0,0,180,299.1,147.8);

	this.timeline.addTween(cjs.Tween.get(this.main_mc).wait(1));

	// spacers
	this.instance = new lib.spacerjpg();
	this.instance.setTransform(0,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(1,1,1).p("EgbtAqfIgLAAMAAAhU9MA3xAAAIAAAK");
	this.shape.setTransform(180.4,190.5,1.011,0.701);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCBA81").s().p("EgcQArhIAAiNMAAAhU0MA3lAAAIA9AAMAAABXBg");
	this.shape_1.setTransform(184,195.8,1.011,0.701);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-884.5,-50.1,1435,831.9);

})(window.brewingFullpageLeftLib = window.brewingFullpageLeftLib ||{}, window.brewingFullpageLeftImages = window.brewingFullpageLeftImages ||{}, createjs = createjs||{}, window.brewingFullpageLeftpageSs = window.brewingFullpageLeftpageSs ||{});