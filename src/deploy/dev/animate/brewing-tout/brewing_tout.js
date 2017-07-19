(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 458,
	height: 558,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/Assets/Images/touts/brewing/flowersuse.png?1475274572605", id:"flowersuse"},
		{src:"/Assets/Images/touts/brewing/brewing_tout_atlas_NP_.jpg?1475274572602", id:"brewing_tout_atlas_NP_"}
	]
};



lib.ssMetadata = [
		{name:"brewing_tout_atlas_NP_", frames: [[0,0,458,558],[0,560,10,10]]}
];


// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["brewing_tout_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.flowersuse = function() {
	this.initialize(img.flowersuse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,458,558);


(lib.spacerjpg = function() {
	this.spriteSheet = ss["brewing_tout_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({regX:78.2,regY:351,x:93.4,y:98.1},0).wait(2).to({y:98.2},0).wait(2).to({x:93.3,y:98.3},0).wait(2).to({y:98.4},0).wait(1).to({y:98.5},0).wait(1).to({rotation:157.9},0).wait(1).to({y:98.6},0).wait(1).to({x:93.2},0).wait(1).to({y:98.7},0).wait(1).to({x:93.1,y:98.8},0).wait(1).to({x:93.2},0).wait(1).to({x:93.1,y:98.9},0).wait(1).to({y:99},0).wait(1).to({y:99.1},0).wait(1).to({rotation:157.8,x:93,y:99.2},0).wait(1).to({y:99.3},0).wait(2).to({x:92.9,y:99.4},0).wait(1).to({y:99.5},0).wait(1).to({y:99.6},0).wait(1).to({y:99.7},0).wait(1).to({rotation:157.7,x:92.8,y:99.8},0).wait(1).to({x:92.7,y:99.9},0).wait(1).to({y:100.1},0).wait(1).to({y:100.2},0).wait(1).to({y:100.3},0).wait(1).to({x:92.6,y:100.4},0).wait(1).to({rotation:157.6,y:100.5},0).wait(1).to({x:92.5,y:100.7},0).wait(1).to({y:100.8},0).wait(1).to({x:92.4,y:101},0).wait(2).to({rotation:157.5,x:92.3,y:101.2},0).wait(1).to({y:101.3},0).wait(1).to({x:92.2,y:101.4},0).wait(1).to({y:101.6},0).wait(2).to({y:101.8},0).wait(1).to({rotation:157.4,x:92.1,y:101.9},0).wait(1).to({y:102},0).wait(1).to({x:92,y:102.1},0).wait(1).to({y:102.2},0).wait(1).to({y:102.3},0).wait(1).to({y:102.4},0).wait(1).to({x:91.9,y:102.5},0).wait(1).to({rotation:157.3,y:102.6},0).wait(1).to({x:91.8,y:102.7},0).wait(1).to({y:102.8},0).wait(2).to({y:102.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:103},0).wait(1).to({x:91.7},0).wait(1).to({y:103.1},0).wait(1).to({y:103.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:157.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:91.6,y:103.3},0).wait(2).to({y:103.4},0).wait(1).to({x:91.5},0).wait(1).to({x:91.6,y:103.5},0).wait(1).to({x:91.5},0).wait(1).to({y:103.6},0).wait(1).to({x:91.6},0).wait(1).to({x:91.5},0).wait(1).to({y:103.7},0).wait(2).to({regX:133.3,regY:295.4,x:63.6,y:172.5},0).wait(1).to({regX:78.2,regY:351,x:91.3,y:103.5},0).wait(1).to({y:103.3},0).wait(1).to({y:103.2},0).wait(1).to({y:103.1},0).wait(1).to({y:103},0).wait(1).to({y:102.8},0).wait(1).to({y:102.7},0).wait(1).to({rotation:157.3,y:102.6},0).wait(1).to({y:102.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:102.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:102.2},0).wait(1).to({y:102},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({y:101.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:101.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:101.5},0).wait(1).to({rotation:157.4},0).wait(1).to({y:101.3},0).wait(1).to({y:101.2},0).wait(1).to({y:101},0).wait(2).to({y:100.8},0).wait(1).to({y:100.7},0).wait(1).to({y:100.6},0).wait(1).to({y:100.5},0).wait(1).to({rotation:157.5,y:100.4},0).wait(1).to({y:100.2},0).wait(1).to({y:100.1},0).wait(1).to({y:100},0).wait(1).to({y:99.9},0).wait(1).to({y:99.7},0).wait(1).to({y:99.6},0).wait(1).to({y:99.5},0).wait(1).to({y:99.4},0).wait(1).to({rotation:157.6,y:99.2},0).wait(1).to({y:99.1},0).wait(1).to({y:99},0).wait(1).to({y:98.9},0).wait(1).to({y:98.7},0).wait(1).to({y:98.6},0).wait(1).to({y:98.5},0).wait(1).to({y:98.4},0).wait(1).to({y:98.2},0).wait(1).to({y:98.1},0).wait(1).to({rotation:157.7,y:98},0).wait(1).to({y:97.9},0).wait(1).to({y:97.7},0).wait(1).to({y:97.6},0).wait(1).to({y:97.5},0).wait(1).to({y:97.4},0).wait(1).to({y:97.2},0).wait(1).to({y:97.1},0).wait(1).to({y:97},0).wait(1).to({rotation:157.8,y:96.9},0).wait(1).to({y:96.7},0).wait(1).to({y:96.6},0).wait(1).to({y:96.5},0).wait(1).to({y:96.4},0).wait(1).to({x:91.2,y:96.3},0).wait(1).to({y:96.1},0).wait(1).to({y:96},0).wait(1).to({x:91.3,y:95.9},0).wait(1).to({rotation:157.9,y:95.8},0).wait(1).to({y:95.6},0).wait(1).to({y:95.5},0).wait(1).to({y:95.4},0).wait(1).to({y:95.3},0).wait(1).to({y:95.1},0).wait(1).to({y:95},0).wait(1).to({y:94.9},0).wait(1).to({y:94.8},0).wait(1).to({y:94.6},0).wait(1).to({rotation:158,y:94.5},0).wait(1).to({y:94.4},0).wait(1).to({y:94.3},0).wait(1).to({y:94.2},0).wait(1).to({x:91.2,y:94},0).wait(1).to({regX:133.4,regY:295.6,x:62.5,y:162.4},0).wait(1).to({regX:78.2,regY:351,x:91.4,y:94.1},0).wait(2).to({x:91.5,y:94.2},0).wait(2).to({y:94.3},0).wait(2).to({x:91.6,y:94.4},0).wait(2).to({y:94.5},0).wait(2).to({x:91.7,y:94.6},0).wait(2).to({y:94.7},0).wait(1).to({x:91.8,y:94.8},0).wait(2).to({y:94.9},0).wait(1).to({x:91.9,y:95},0).wait(1).to({y:95.1},0).wait(2).to({x:92,y:95.2},0).wait(1).to({y:95.3},0).wait(1).to({x:92.1,y:95.4},0).wait(1).to({y:95.5},0).wait(1).to({x:92.2,y:95.6},0).wait(1).to({y:95.7},0).wait(1).to({x:92.3,y:95.8},0).wait(1).to({y:95.9},0).wait(1).to({x:92.4,y:96},0).wait(1).to({y:96.1},0).wait(1).to({x:92.5,y:96.2},0).wait(1).to({y:96.3},0).wait(1).to({x:92.6,y:96.4},0).wait(1).to({y:96.5},0).wait(1).to({x:92.7,y:96.6},0).wait(1).to({y:96.7},0).wait(1).to({x:92.8,y:96.8},0).wait(1).to({y:96.9},0).wait(1).to({x:92.9,y:97},0).wait(1).to({y:97.1},0).wait(2).to({x:93,y:97.2},0).wait(1).to({y:97.3},0).wait(1).to({x:93.1,y:97.4},0).wait(2).to({y:97.5},0).wait(2).to({x:93.2,y:97.6},0).wait(2).to({y:97.7},0).wait(2).to({x:93.3,y:97.8},0).wait(2).to({y:97.9},0).wait(3).to({x:93.4,y:98},0).wait(3).to({regX:133.4,regY:295.6,x:64.5,y:166.4},0).wait(1));

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
	this.frame_250 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(250).call(this.frame_250).wait(1));

	// Layer 1
	this.instance = new lib.l3();
	this.instance.setTransform(271,42,1,1,0,0,0,261,317);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regX:136,regY:351,x:146,y:76},0).wait(1).to({y:75.9},0).wait(1).to({rotation:0.1},0).wait(1).to({y:75.8},0).wait(1).to({x:145.9,y:75.7},0).wait(2).to({rotation:0.2,y:75.6},0).wait(1).to({y:75.5},0).wait(1).to({y:75.4},0).wait(1).to({y:75.3},0).wait(1).to({rotation:0.3,y:75.2},0).wait(1).to({x:145.8,y:75.1},0).wait(1).to({y:75},0).wait(1).to({rotation:0.4,y:74.9},0).wait(1).to({y:74.8},0).wait(1).to({rotation:0.5,x:145.7,y:74.6},0).wait(1).to({y:74.5},0).wait(1).to({rotation:0.6,y:74.4},0).wait(1).to({y:74.3},0).wait(1).to({rotation:0.7,y:74},0).wait(1).to({y:73.9},0).wait(1).to({rotation:0.8,x:145.6,y:73.7},0).wait(1).to({y:73.6},0).wait(1).to({rotation:0.9,x:145.5,y:73.4},0).wait(1).to({y:73.2},0).wait(1).to({rotation:1,y:73.1},0).wait(1).to({rotation:1.1,y:72.9},0).wait(1).to({x:145.4,y:72.8},0).wait(1).to({rotation:1.2,y:72.6},0).wait(1).to({x:145.3,y:72.4},0).wait(1).to({rotation:1.3,y:72.2},0).wait(1).to({y:72.1},0).wait(1).to({rotation:1.4,x:145.2,y:71.9},0).wait(1).to({rotation:1.5,x:145.3,y:71.7},0).wait(1).to({x:145.2,y:71.6},0).wait(1).to({rotation:1.6,y:71.4},0).wait(1).to({y:71.3},0).wait(1).to({rotation:1.7,x:145.1,y:71.1},0).wait(1).to({y:71},0).wait(1).to({rotation:1.8,y:70.8},0).wait(1).to({y:70.6},0).wait(1).to({y:70.5},0).wait(1).to({rotation:1.9,y:70.4},0).wait(1).to({x:145,y:70.3},0).wait(1).to({rotation:2,y:70.2},0).wait(1).to({y:70.1},0).wait(1).to({y:70},0).wait(1).to({rotation:2.1,y:69.9},0).wait(1).to({x:144.9,y:69.8},0).wait(1).to({y:69.7},0).wait(1).to({rotation:2.2,y:69.6},0).wait(1).to({y:69.5},0).wait(1).to({y:69.4},0).wait(2).to({rotation:2.3,y:69.3},0).wait(1).to({y:69.2},0).wait(1).to({y:69.1},0).wait(1).to({x:144.8},0).wait(1).to({rotation:2.4,x:144.9,y:69},0).wait(1).to({x:144.8,y:68.9},0).wait(2).to({regX:261.1,regY:316.9,x:271.2,y:40.1},0).wait(1).to({regX:136,regY:351,x:144.8,y:69},0).wait(1).to({y:69.2},0).wait(1).to({rotation:2.3,y:69.3},0).wait(1).to({y:69.4},0).wait(1).to({y:69.6},0).wait(1).to({rotation:2.2,y:69.7},0).wait(1).to({y:69.8},0).wait(1).to({rotation:2.1,x:144.9,y:70},0).wait(1).to({y:70.1},0).wait(1).to({y:70.3},0).wait(1).to({rotation:2,y:70.5},0).wait(1).to({y:70.6},0).wait(1).to({rotation:1.9,x:145,y:70.7},0).wait(1).to({y:70.9},0).wait(1).to({rotation:1.8,x:145.1,y:71.1},0).wait(1).to({y:71.3},0).wait(1).to({rotation:1.7,y:71.5},0).wait(1).to({y:71.7},0).wait(1).to({rotation:1.6,y:71.9},0).wait(1).to({rotation:1.5,x:145.2,y:72.1},0).wait(1).to({y:72.4},0).wait(1).to({rotation:1.4,y:72.6},0).wait(1).to({x:145.3,y:72.8},0).wait(1).to({rotation:1.3,y:73},0).wait(1).to({rotation:1.2,y:73.3},0).wait(1).to({x:145.4,y:73.6},0).wait(1).to({rotation:1.1,y:73.8},0).wait(1).to({rotation:1,x:145.5,y:74.1},0).wait(1).to({rotation:0.9,y:74.4},0).wait(1).to({y:74.6},0).wait(1).to({rotation:0.8,x:145.6,y:74.8},0).wait(1).to({rotation:0.7,y:75.1},0).wait(1).to({y:75.4},0).wait(1).to({rotation:0.6,x:145.7,y:75.6},0).wait(1).to({rotation:0.5,y:75.8},0).wait(1).to({y:76},0).wait(1).to({rotation:0.4,x:145.8,y:76.2},0).wait(1).to({y:76.4},0).wait(1).to({rotation:0.3,y:76.6},0).wait(1).to({y:76.7},0).wait(1).to({rotation:0.2,x:145.9,y:76.9},0).wait(1).to({y:77},0).wait(1).to({y:77.2},0).wait(1).to({rotation:0.1,y:77.3},0).wait(1).to({y:77.4},0).wait(1).to({x:146,y:77.6},0).wait(1).to({rotation:0,y:77.7},0).wait(1).to({y:77.8},0).wait(1).to({y:77.9},0).wait(1).to({rotation:-0.1,y:78},0).wait(2).to({y:78.1},0).wait(1).to({y:78.2},0).wait(1).to({x:146.1},0).wait(1).to({rotation:-0.2,y:78.4},0).wait(2).to({y:78.5},0).wait(2).to({y:78.6},0).wait(3).to({rotation:-0.3,y:78.7},0).wait(1).to({x:146.2},0).wait(1).to({x:146.1,y:78.8},0).wait(1).to({regX:260.9,regY:316.9,x:271,y:44},0).wait(1).to({regX:136,regY:351,x:146.4,y:78.7},0).wait(1).to({x:146.5,y:78.6},0).wait(1).to({x:146.7},0).wait(1).to({x:146.8,y:78.5},0).wait(1).to({x:147,y:78.4},0).wait(1).to({x:147.1,y:78.3},0).wait(1).to({x:147.3,y:78.2},0).wait(1).to({x:147.5,y:78.1},0).wait(1).to({x:147.7,y:78},0).wait(1).to({x:147.9,y:77.8},0).wait(1).to({x:148.1,y:77.7},0).wait(1).to({x:148.4,y:77.6},0).wait(1).to({x:148.6,y:77.4},0).wait(1).to({x:148.9,y:77.3},0).wait(1).to({x:149.2,y:77.1},0).wait(1).to({x:149.5,y:76.9},0).wait(1).to({x:149.8,y:76.7},0).wait(1).to({x:150.1,y:76.5},0).wait(1).to({x:150.5,y:76.4},0).wait(1).to({x:150.8,y:76.2},0).wait(1).to({x:151.2,y:76},0).wait(1).to({x:151.5,y:75.8},0).wait(1).to({x:151.8,y:75.6},0).wait(1).to({x:152.1,y:75.4},0).wait(1).to({x:152.4,y:75.3},0).wait(1).to({x:152.7,y:75.1},0).wait(1).to({rotation:-0.2,x:153,y:74.9},0).wait(1).to({x:153.2,y:74.8},0).wait(1).to({x:153.5,y:74.6},0).wait(1).to({x:153.7,y:74.5},0).wait(1).to({x:153.9,y:74.4},0).wait(1).to({x:154.1,y:74.3},0).wait(1).to({x:154.3,y:74.2},0).wait(1).to({x:154.5,y:74.1},0).wait(1).to({x:154.7,y:74},0).wait(1).to({x:154.8,y:73.9},0).wait(1).to({x:155,y:73.8},0).wait(1).to({x:155.1,y:73.7},0).wait(1).to({regX:261.1,regY:316.9,x:280.2,y:39.1},0).wait(1).to({regX:136,regY:351,x:155.1,y:73.7},0).wait(1).to({x:155},0).wait(2).to({x:154.9},0).wait(1).to({y:73.8},0).wait(1).to({x:154.8},0).wait(1).to({x:154.7},0).wait(1).to({x:154.6},0).wait(1).to({y:73.9},0).wait(1).to({x:154.5},0).wait(1).to({x:154.4},0).wait(1).to({x:154.3},0).wait(1).to({x:154.2},0).wait(1).to({x:154.1,y:74},0).wait(1).to({x:154},0).wait(1).to({x:153.9},0).wait(1).to({x:153.7,y:74.1},0).wait(1).to({x:153.6},0).wait(1).to({x:153.5},0).wait(1).to({x:153.4,y:74.2},0).wait(1).to({x:153.3},0).wait(1).to({x:153.1},0).wait(1).to({x:153,y:74.3},0).wait(1).to({x:152.8},0).wait(1).to({x:152.7,y:74.4},0).wait(1).to({x:152.5},0).wait(1).to({x:152.3},0).wait(1).to({x:152.1,y:74.5},0).wait(1).to({x:152,y:74.6},0).wait(1).to({x:151.8},0).wait(1).to({rotation:-0.1,x:151.7},0).wait(1).to({x:151.5,y:74.7},0).wait(1).to({x:151.3},0).wait(1).to({x:151.1,y:74.8},0).wait(1).to({x:151},0).wait(1).to({x:150.8,y:74.9},0).wait(1).to({x:150.6},0).wait(1).to({x:150.4,y:75},0).wait(1).to({x:150.2},0).wait(1).to({x:150.1},0).wait(1).to({x:149.9,y:75.1},0).wait(1).to({x:149.8},0).wait(1).to({x:149.6,y:75.2},0).wait(1).to({x:149.4},0).wait(1).to({x:149.3,y:75.3},0).wait(1).to({x:149.1},0).wait(1).to({x:149},0).wait(1).to({x:148.9},0).wait(1).to({x:148.7,y:75.4},0).wait(1).to({x:148.6,y:75.5},0).wait(1).to({x:148.5},0).wait(1).to({x:148.3},0).wait(1).to({x:148.2},0).wait(1).to({x:148.1,y:75.6},0).wait(1).to({x:148},0).wait(1).to({rotation:0,x:147.9,y:75.7},0).wait(1).to({x:147.8},0).wait(1).to({x:147.6},0).wait(2).to({x:147.5},0).wait(1).to({x:147.3,y:75.8},0).wait(2).to({x:147.2},0).wait(1).to({x:147.1,y:75.9},0).wait(1).to({x:147},0).wait(1).to({x:146.9},0).wait(2).to({x:146.8},0).wait(1).to({x:146.7},0).wait(1).to({x:146.6,y:76},0).wait(2).to({x:146.5},0).wait(1).to({x:146.4},0).wait(1).to({x:146.3,y:76.1},0).wait(2).to({x:146.2},0).wait(2).to({x:146.1},0).wait(1).to({x:146},0).wait(2).to({regX:261,regY:317,x:271,y:42},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-275,458,558);


(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"repeat":29});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_202 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(202).call(this.frame_202).wait(1));

	// leaf front
	this.instance = new lib.frontLeaf();
	this.instance.setTransform(97.1,122,1,1,0,0,0,115,59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({regX:89.7,regY:101.3,x:71.8,y:163.8},0).wait(2).to({y:163.7},0).wait(1).to({y:163.8},0).wait(1).to({x:71.9},0).wait(1).to({rotation:-0.1,x:71.8},0).wait(1).to({x:71.9},0).wait(2).to({rotation:-0.2},0).wait(1).to({x:72},0).wait(1).to({y:163.9},0).wait(1).to({rotation:-0.3},0).wait(1).to({x:72.1},0).wait(1).to({rotation:-0.4},0).wait(1).to({y:164},0).wait(1).to({rotation:-0.5,x:72.2},0).wait(1).to({rotation:-0.6,x:72.3},0).wait(1).to({rotation:-0.7,y:164.1},0).wait(1).to({x:72.4},0).wait(1).to({rotation:-0.8},0).wait(1).to({rotation:-0.9,x:72.5,y:164.2},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-1.1,x:72.7,y:164.3},0).wait(1).to({rotation:-1.2},0).wait(1).to({rotation:-1.3,x:72.8},0).wait(1).to({rotation:-1.4,y:164.4},0).wait(1).to({rotation:-1.5,x:72.9},0).wait(1).to({rotation:-1.6,x:73},0).wait(1).to({rotation:-1.8,x:73.1,y:164.6},0).wait(1).to({rotation:-1.9,x:73.2},0).wait(1).to({rotation:-2,x:73.3},0).wait(1).to({rotation:-2.2,x:73.5,y:164.7},0).wait(1).to({rotation:-2.3,x:73.6,y:164.8},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-2.6,x:73.7,y:164.9},0).wait(1).to({rotation:-2.8,x:73.9,y:165},0).wait(1).to({rotation:-2.9,x:74},0).wait(1).to({rotation:-3.1,x:74.1,y:165.1},0).wait(1).to({rotation:-3.2,x:74.2,y:165.2},0).wait(1).to({rotation:-3.4,x:74.4},0).wait(1).to({rotation:-3.6,x:74.5,y:165.3},0).wait(1).to({rotation:-3.7,x:74.6},0).wait(1).to({rotation:-3.9,x:74.8,y:165.4},0).wait(1).to({rotation:-4.1,y:165.5},0).wait(1).to({rotation:-4.2,x:75},0).wait(1).to({rotation:-4.4,x:75.1,y:165.6},0).wait(1).to({rotation:-4.6,x:75.2,y:165.7},0).wait(1).to({rotation:-4.7,x:75.4,y:165.8},0).wait(1).to({rotation:-4.9,x:75.5,y:165.9},0).wait(1).to({rotation:-5.1,x:75.7},0).wait(1).to({rotation:-5.2,x:75.8},0).wait(1).to({rotation:-5.4,x:75.9,y:166},0).wait(1).to({rotation:-5.6,x:76.1},0).wait(1).to({rotation:-5.7,x:76.2,y:166.1},0).wait(1).to({rotation:-5.9,x:76.3,y:166.2},0).wait(1).to({rotation:-6,x:76.4},0).wait(1).to({rotation:-6.2,x:76.5,y:166.3},0).wait(1).to({rotation:-6.3,x:76.6},0).wait(1).to({rotation:-6.4,x:76.7,y:166.4},0).wait(1).to({rotation:-6.6,x:76.8},0).wait(1).to({rotation:-6.7,x:76.9,y:166.5},0).wait(1).to({rotation:-6.8,x:77,y:166.6},0).wait(1).to({rotation:-6.9,x:77.1},0).wait(1).to({rotation:-7,x:77.2},0).wait(1).to({rotation:-7.1,x:77.3},0).wait(1).to({rotation:-7.2,x:77.4,y:166.7},0).wait(1).to({rotation:-7.3},0).wait(1).to({rotation:-7.4,x:77.5},0).wait(1).to({rotation:-7.5,y:166.8},0).wait(1).to({x:77.6},0).wait(1).to({rotation:-7.6},0).wait(1).to({rotation:-7.7,x:77.7},0).wait(1).to({x:77.8,y:166.9},0).wait(1).to({rotation:-7.8},0).wait(3).to({rotation:-7.9},0).wait(1).to({x:77.9},0).wait(3).to({regX:114.9,regY:59.6,x:97.2,y:122.1},0).wait(1).to({regX:89.7,regY:101.3,x:78,y:166.8},0).wait(4).to({x:77.9},0).wait(2).to({rotation:-7.8},0).wait(1).to({y:166.7},0).wait(1).to({x:77.8},0).wait(1).to({x:77.9},0).wait(1).to({rotation:-7.7,x:77.8,y:166.8},0).wait(1).to({y:166.7},0).wait(1).to({rotation:-7.6},0).wait(1).to({x:77.7},0).wait(2).to({rotation:-7.5},0).wait(1).to({x:77.6,y:166.6},0).wait(1).to({rotation:-7.4},0).wait(1).to({rotation:-7.3,x:77.5},0).wait(2).to({rotation:-7.2,x:77.4},0).wait(1).to({rotation:-7.1,y:166.5},0).wait(1).to({x:77.3},0).wait(1).to({rotation:-7,x:77.2},0).wait(1).to({rotation:-6.9,y:166.4},0).wait(1).to({rotation:-6.8,x:77.1},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:-6.6,x:77},0).wait(1).to({rotation:-6.5,x:76.9},0).wait(1).to({rotation:-6.4,x:76.8,y:166.3},0).wait(1).to({rotation:-6.3},0).wait(1).to({rotation:-6.2,x:76.6,y:166.2},0).wait(1).to({rotation:-6.1},0).wait(1).to({rotation:-6,x:76.5,y:166.1},0).wait(1).to({rotation:-5.9,x:76.4},0).wait(1).to({rotation:-5.8,x:76.3},0).wait(1).to({rotation:-5.7,x:76.2,y:166},0).wait(1).to({rotation:-5.5,x:76.1},0).wait(1).to({rotation:-5.4,x:76,y:165.9},0).wait(1).to({rotation:-5.3,x:75.9,y:165.8},0).wait(1).to({rotation:-5.1,x:75.8},0).wait(1).to({rotation:-5,x:75.7,y:165.7},0).wait(1).to({rotation:-4.9,x:75.6},0).wait(1).to({rotation:-4.7,x:75.5,y:165.6},0).wait(1).to({rotation:-4.6,x:75.3},0).wait(1).to({rotation:-4.4,x:75.2,y:165.5},0).wait(1).to({rotation:-4.3,x:75.1,y:165.4},0).wait(1).to({rotation:-4.1,x:75},0).wait(1).to({rotation:-4,x:74.9,y:165.3},0).wait(1).to({rotation:-3.8,x:74.8},0).wait(1).to({rotation:-3.7,x:74.7},0).wait(1).to({rotation:-3.5,x:74.6,y:165.1},0).wait(1).to({rotation:-3.4,x:74.5},0).wait(1).to({rotation:-3.2,x:74.4},0).wait(1).to({rotation:-3.1,x:74.2,y:165},0).wait(1).to({rotation:-2.9,x:74.1,y:164.9},0).wait(1).to({rotation:-2.8,x:74},0).wait(1).to({rotation:-2.7,x:73.9,y:164.8},0).wait(1).to({rotation:-2.5,x:73.8,y:164.7},0).wait(1).to({rotation:-2.4,x:73.7},0).wait(1).to({rotation:-2.2,x:73.6,y:164.6},0).wait(1).to({rotation:-2.1,x:73.5},0).wait(1).to({rotation:-2,x:73.4,y:164.5},0).wait(1).to({rotation:-1.8,x:73.3,y:164.4},0).wait(1).to({rotation:-1.7,x:73.2},0).wait(1).to({rotation:-1.6,x:73.1,y:164.3},0).wait(1).to({rotation:-1.5,x:73},0).wait(1).to({rotation:-1.4,x:72.9,y:164.2},0).wait(1).to({rotation:-1.3,x:72.8},0).wait(1).to({rotation:-1.1,x:72.7},0).wait(1).to({rotation:-1,y:164.1},0).wait(1).to({rotation:-0.9,x:72.6},0).wait(1).to({x:72.5,y:164},0).wait(1).to({rotation:-0.8},0).wait(1).to({rotation:-0.7,x:72.4},0).wait(1).to({rotation:-0.6,x:72.3,y:163.9},0).wait(1).to({rotation:-0.5},0).wait(1).to({x:72.2},0).wait(1).to({rotation:-0.4,y:163.8},0).wait(1).to({rotation:-0.3},0).wait(1).to({x:72.1},0).wait(1).to({rotation:-0.2},0).wait(1).to({y:163.7},0).wait(1).to({rotation:-0.1,x:72},0).wait(3).to({x:71.9},0).wait(1).to({rotation:0},0).wait(1).to({y:163.6},0).wait(1).to({y:163.7},0).wait(2).to({regX:115,regY:59.5,x:97.1,y:122},0).wait(1));

	// cone0
	this.anim0 = new lib.hop();
	this.anim0.setTransform(104.4,122.2,1,1,0,0,0,68.4,169);

	this.timeline.addTween(cjs.Tween.get(this.anim0).wait(30).to({regX:92.1,regY:99.1,x:128.1,y:52.3},0).wait(7).to({x:128.2},0).wait(3).to({x:128.3},0).wait(1).to({y:52.4},0).wait(1).to({rotation:-0.1,x:128.4,y:52.3},0).wait(1).to({y:52.4},0).wait(2).to({x:128.5},0).wait(1).to({x:128.6},0).wait(1).to({x:128.7},0).wait(2).to({x:128.8},0).wait(1).to({x:128.9},0).wait(1).to({rotation:-0.2,y:52.5},0).wait(1).to({x:129},0).wait(1).to({x:129.1},0).wait(1).to({x:129.2},0).wait(1).to({x:129.3},0).wait(1).to({x:129.4},0).wait(1).to({rotation:-0.3,x:129.5,y:52.6},0).wait(1).to({x:129.6},0).wait(1).to({x:129.7},0).wait(1).to({x:129.9},0).wait(1).to({x:130},0).wait(1).to({rotation:-0.4,x:130.1,y:52.7},0).wait(1).to({x:130.2},0).wait(1).to({x:130.3},0).wait(1).to({x:130.4},0).wait(1).to({x:130.6},0).wait(1).to({x:130.7,y:52.8},0).wait(1).to({rotation:-0.5,x:130.8},0).wait(1).to({x:130.9},0).wait(1).to({x:131},0).wait(1).to({x:131.1},0).wait(1).to({x:131.2,y:52.9},0).wait(1).to({rotation:-0.6,x:131.3},0).wait(1).to({x:131.4},0).wait(1).to({x:131.5},0).wait(1).to({x:131.6},0).wait(2).to({x:131.7},0).wait(1).to({x:131.8},0).wait(1).to({rotation:-0.7,x:131.9},0).wait(1).to({y:53},0).wait(1).to({y:52.9},0).wait(1).to({x:132,y:53},0).wait(1).to({x:132.1},0).wait(7).to({regX:68.4,regY:169,x:109.4,y:123.2},0).wait(1).to({regX:92.1,regY:99.1,x:132.2,y:53.1},0).wait(1).to({x:132.1},0).wait(2).to({x:132,y:53},0).wait(1).to({rotation:-0.8,x:131.9},0).wait(1).to({x:131.8},0).wait(1).to({x:131.7},0).wait(1).to({rotation:-0.9,x:131.6},0).wait(1).to({x:131.4},0).wait(1).to({x:131.3},0).wait(1).to({rotation:-1,x:131},0).wait(1).to({rotation:-1.1,x:130.8,y:52.9},0).wait(1).to({x:130.5},0).wait(1).to({rotation:-1.2,x:130.3},0).wait(1).to({rotation:-1.3,x:130},0).wait(1).to({x:129.7,y:52.8},0).wait(1).to({rotation:-1.4,x:129.3,y:52.7},0).wait(1).to({rotation:-1.5,x:128.9,y:52.8},0).wait(1).to({rotation:-1.6,x:128.6,y:52.7},0).wait(1).to({rotation:-1.7,x:128.2},0).wait(1).to({rotation:-1.8,x:127.8,y:52.6},0).wait(1).to({rotation:-1.9,x:127.3},0).wait(1).to({rotation:-2,x:126.9},0).wait(1).to({rotation:-2.1,x:126.5,y:52.5},0).wait(1).to({rotation:-2.2,x:126},0).wait(1).to({rotation:-2.4,x:125.5,y:52.4},0).wait(1).to({rotation:-2.5,x:125},0).wait(1).to({rotation:-2.6,x:124.6,y:52.3},0).wait(1).to({rotation:-2.7,x:124.1},0).wait(1).to({rotation:-2.8,x:123.7},0).wait(1).to({rotation:-2.9,x:123.2,y:52.2},0).wait(1).to({rotation:-3.1,x:122.7},0).wait(1).to({rotation:-3.2,x:122.3},0).wait(1).to({rotation:-3.3,x:122,y:52.1},0).wait(1).to({x:121.6},0).wait(1).to({rotation:-3.4,x:121.2},0).wait(1).to({rotation:-3.5,x:120.9,y:52},0).wait(1).to({rotation:-3.6,x:120.6},0).wait(1).to({rotation:-3.7,x:120.3},0).wait(1).to({x:120.1},0).wait(1).to({rotation:-3.8,x:119.9},0).wait(1).to({x:119.7},0).wait(1).to({rotation:-3.9,x:119.5,y:51.9},0).wait(1).to({x:119.4},0).wait(1).to({x:119.3},0).wait(1).to({x:119.2},0).wait(2).to({regX:68.4,regY:169,rotation:-4,x:100.4,y:123.3},0).wait(1).to({regX:92.1,regY:99.1,rotation:-3.9,x:119.2,y:51.9},0).wait(4).to({x:119.3},0).wait(2).to({x:119.4},0).wait(1).to({rotation:-3.8},0).wait(1).to({x:119.5},0).wait(2).to({x:119.6},0).wait(1).to({rotation:-3.7,x:119.7,y:52},0).wait(1).to({x:119.8,y:51.9},0).wait(1).to({rotation:-3.6,x:119.9,y:52},0).wait(1).to({x:120,y:51.9},0).wait(1).to({rotation:-3.5,x:120.2},0).wait(1).to({x:120.3},0).wait(1).to({rotation:-3.4,x:120.4,y:52},0).wait(1).to({rotation:-3.3,x:120.6},0).wait(1).to({x:120.7},0).wait(1).to({rotation:-3.2,x:120.9},0).wait(1).to({rotation:-3.1,x:121.1},0).wait(1).to({rotation:-3,x:121.2},0).wait(1).to({rotation:-2.9,x:121.5},0).wait(1).to({x:121.7},0).wait(1).to({rotation:-2.8,x:121.9},0).wait(1).to({rotation:-2.7,x:122},0).wait(1).to({rotation:-2.6,x:122.3},0).wait(1).to({rotation:-2.5,x:122.5,y:52.1},0).wait(1).to({rotation:-2.4,x:122.7,y:52},0).wait(1).to({rotation:-2.3,x:123},0).wait(1).to({rotation:-2.2,x:123.2,y:52.1},0).wait(1).to({rotation:-2.1,x:123.5},0).wait(1).to({rotation:-1.9,x:123.7},0).wait(1).to({rotation:-1.8,x:123.9},0).wait(1).to({rotation:-1.7,x:124.2},0).wait(1).to({rotation:-1.6,x:124.4},0).wait(1).to({rotation:-1.5,x:124.6},0).wait(1).to({rotation:-1.4,x:124.9},0).wait(1).to({rotation:-1.3,x:125.2},0).wait(1).to({rotation:-1.2,x:125.4,y:52.2},0).wait(1).to({rotation:-1.1,x:125.6},0).wait(1).to({rotation:-1,x:125.8},0).wait(1).to({rotation:-0.9,x:126},0).wait(1).to({rotation:-0.8,x:126.2,y:52.3},0).wait(1).to({rotation:-0.7,x:126.4},0).wait(1).to({rotation:-0.6,x:126.6},0).wait(1).to({x:126.8},0).wait(1).to({rotation:-0.5,x:126.9},0).wait(1).to({rotation:-0.4,x:127.1},0).wait(1).to({x:127.2},0).wait(1).to({rotation:-0.3,x:127.3},0).wait(1).to({rotation:-0.2,x:127.5},0).wait(1).to({x:127.6},0).wait(1).to({x:127.7},0).wait(1).to({rotation:-0.1,x:127.8},0).wait(2).to({x:127.9},0).wait(1).to({rotation:0,y:52.4},0).wait(1).to({x:128,y:52.3},0).wait(1).to({y:52.4},0).wait(2).to({regX:68.4,regY:169,x:104.4,y:122.2},0).wait(1));

	// cone back
	this.instance_1 = new lib.l1();
	this.instance_1.setTransform(55,101,1,1,0,0,0,216,172);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({regX:148,regY:137.1,x:-13,y:66.1},0).wait(3).to({x:-12.9},0).wait(1).to({x:-13},0).wait(3).to({rotation:-0.1,y:66.2},0).wait(3).to({y:66.3},0).wait(2).to({rotation:-0.2,x:-13.1},0).wait(2).to({y:66.4},0).wait(1).to({rotation:-0.3},0).wait(1).to({y:66.5},0).wait(2).to({rotation:-0.4,x:-13.2,y:66.6},0).wait(2).to({rotation:-0.5,y:66.7},0).wait(1).to({x:-13.3},0).wait(1).to({rotation:-0.6,y:66.8},0).wait(2).to({rotation:-0.7,y:67},0).wait(1).to({x:-13.4},0).wait(1).to({rotation:-0.8,y:67.1},0).wait(1).to({rotation:-0.9,y:67.2},0).wait(1).to({x:-13.5,y:67.3},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-1.1,x:-13.6},0).wait(1).to({y:67.5},0).wait(1).to({rotation:-1.2,x:-13.7,y:67.6},0).wait(1).to({rotation:-1.3,y:67.7},0).wait(1).to({rotation:-1.4,x:-13.8,y:67.8},0).wait(1).to({rotation:-1.5},0).wait(1).to({rotation:-1.6,x:-13.9,y:68},0).wait(1).to({y:68.1},0).wait(1).to({rotation:-1.7,y:68.2},0).wait(1).to({rotation:-1.8,x:-14,y:68.3},0).wait(1).to({rotation:-1.9,x:-14.1,y:68.4},0).wait(1).to({rotation:-2,y:68.5},0).wait(1).to({rotation:-2.1,x:-14.2,y:68.6},0).wait(1).to({rotation:-2.2,y:68.8},0).wait(1).to({rotation:-2.3,y:68.9},0).wait(1).to({rotation:-2.4,x:-14.3,y:69},0).wait(1).to({rotation:-2.5,x:-14.4,y:69.1},0).wait(1).to({rotation:-2.6,x:-14.5,y:69.2},0).wait(1).to({rotation:-2.7,y:69.4},0).wait(1).to({rotation:-2.8,x:-14.6,y:69.5},0).wait(1).to({rotation:-2.9,y:69.6},0).wait(1).to({rotation:-3,x:-14.7,y:69.7},0).wait(1).to({rotation:-3.1,y:69.9},0).wait(1).to({rotation:-3.2,x:-14.8,y:70},0).wait(1).to({rotation:-3.3,x:-14.9,y:70.1},0).wait(1).to({rotation:-3.4,y:70.2},0).wait(1).to({rotation:-3.5,x:-15,y:70.4},0).wait(1).to({rotation:-3.6,y:70.5},0).wait(1).to({rotation:-3.7,x:-15.1,y:70.6},0).wait(1).to({rotation:-3.8,y:70.7},0).wait(1).to({rotation:-3.9,y:70.9},0).wait(1).to({rotation:-4,x:-15.2},0).wait(1).to({rotation:-4.1,x:-15.3,y:71.1},0).wait(1).to({rotation:-4.2,y:71.2},0).wait(1).to({rotation:-4.3,y:71.3},0).wait(1).to({x:-15.4,y:71.4},0).wait(1).to({rotation:-4.4,y:71.5},0).wait(1).to({rotation:-4.5,x:-15.5,y:71.6},0).wait(1).to({rotation:-4.6,y:71.7},0).wait(1).to({rotation:-4.7,x:-15.6,y:71.8},0).wait(1).to({y:71.9},0).wait(1).to({rotation:-4.8},0).wait(1).to({rotation:-4.9,x:-15.7,y:72},0).wait(1).to({y:72.1},0).wait(1).to({rotation:-5,y:72.2},0).wait(2).to({rotation:-5.1,x:-15.8,y:72.3},0).wait(1).to({y:72.4},0).wait(1).to({rotation:-5.2},0).wait(1).to({y:72.5},0).wait(2).to({rotation:-5.3,x:-15.9},0).wait(1).to({y:72.6},0).wait(2).to({rotation:-5.4},0).wait(1).to({y:72.7},0).wait(2).to({y:72.8},0).wait(1).to({y:72.7},0).wait(1).to({y:72.8},0).wait(1).to({y:72.7},0).wait(1).to({regX:216,regY:171.9,x:55.1,y:101},0).wait(1).to({regX:148,regY:137.1,x:-15.8,y:72.8},0).wait(1).to({y:72.9},0).wait(1).to({x:-15.9},0).wait(1).to({x:-15.8,y:72.8},0).wait(5).to({rotation:-5.3,y:72.7},0).wait(2).to({y:72.6},0).wait(1).to({rotation:-5.2,x:-15.7},0).wait(2).to({y:72.5},0).wait(1).to({rotation:-5.1},0).wait(1).to({y:72.4},0).wait(1).to({rotation:-5,x:-15.6,y:72.3},0).wait(2).to({rotation:-4.9,y:72.2},0).wait(1).to({y:72.1},0).wait(1).to({rotation:-4.8,y:72},0).wait(1).to({x:-15.5},0).wait(1).to({rotation:-4.7,y:71.9},0).wait(1).to({rotation:-4.6,y:71.8},0).wait(1).to({rotation:-4.5,x:-15.4,y:71.7},0).wait(1).to({y:71.6},0).wait(1).to({rotation:-4.4,y:71.5},0).wait(1).to({rotation:-4.3,x:-15.3,y:71.4},0).wait(1).to({rotation:-4.2,x:-15.2},0).wait(1).to({rotation:-4.1,y:71.2},0).wait(1).to({rotation:-4,y:71.1},0).wait(1).to({rotation:-3.9,x:-15.1,y:71},0).wait(1).to({y:70.9},0).wait(1).to({rotation:-3.8,x:-15,y:70.7},0).wait(1).to({rotation:-3.6,y:70.6},0).wait(1).to({rotation:-3.5,x:-14.9,y:70.5},0).wait(1).to({rotation:-3.4,x:-14.8,y:70.4},0).wait(1).to({rotation:-3.3,y:70.2},0).wait(1).to({rotation:-3.2,x:-14.7,y:70.1},0).wait(1).to({rotation:-3.1,x:-14.6,y:70},0).wait(1).to({rotation:-3,y:69.8},0).wait(1).to({rotation:-2.9,x:-14.5,y:69.7},0).wait(1).to({rotation:-2.8,y:69.5},0).wait(1).to({rotation:-2.6,x:-14.4,y:69.4},0).wait(1).to({rotation:-2.5,y:69.2},0).wait(1).to({rotation:-2.4,x:-14.3,y:69.1},0).wait(1).to({rotation:-2.3,x:-14.2,y:69},0).wait(1).to({rotation:-2.2,y:68.8},0).wait(1).to({rotation:-2.1,x:-14.1,y:68.7},0).wait(1).to({rotation:-2,y:68.5},0).wait(1).to({rotation:-1.8,x:-14,y:68.4},0).wait(1).to({rotation:-1.7,x:-13.9,y:68.3},0).wait(1).to({rotation:-1.6,y:68.1},0).wait(1).to({rotation:-1.5,x:-13.8,y:68},0).wait(1).to({rotation:-1.4,x:-13.7,y:67.9},0).wait(1).to({rotation:-1.3,y:67.8},0).wait(1).to({rotation:-1.2,x:-13.6,y:67.6},0).wait(1).to({rotation:-1.1,y:67.5},0).wait(1).to({rotation:-1,x:-13.5},0).wait(1).to({rotation:-0.9,x:-13.4,y:67.3},0).wait(1).to({rotation:-0.8,y:67.2},0).wait(1).to({y:67.1},0).wait(1).to({rotation:-0.7,x:-13.3,y:67},0).wait(1).to({rotation:-0.6},0).wait(1).to({rotation:-0.5,x:-13.2,y:66.8},0).wait(2).to({rotation:-0.4,x:-13.1,y:66.7},0).wait(1).to({y:66.6},0).wait(1).to({rotation:-0.3},0).wait(1).to({x:-13,y:66.5},0).wait(1).to({rotation:-0.2,y:66.4},0).wait(2).to({rotation:-0.1,y:66.3},0).wait(1).to({x:-12.9},0).wait(1).to({x:-13},0).wait(1).to({y:66.2},0).wait(1).to({rotation:0,x:-12.9},0).wait(4).to({regX:216,regY:172,x:55,y:101},0).wait(1));

	// cone1
	this.anim1 = new lib.l32();
	this.anim1.setTransform(71,150,1,1,0,0,0,273,44.1);

	this.timeline.addTween(cjs.Tween.get(this.anim1).wait(30).to({regX:148.5,regY:71.3,x:-53.5,y:177.2},0).wait(4).to({x:-53.4},0).wait(2).to({y:177.3},0).wait(1).to({rotation:-0.1},0).wait(2).to({y:177.4},0).wait(2).to({y:177.5},0).wait(1).to({rotation:-0.2},0).wait(1).to({x:-53.3,y:177.6},0).wait(1).to({x:-53.4,y:177.7},0).wait(1).to({rotation:-0.3,x:-53.3},0).wait(1).to({y:177.8},0).wait(2).to({rotation:-0.4,y:177.9},0).wait(1).to({y:178},0).wait(1).to({x:-53.2,y:178.1},0).wait(1).to({rotation:-0.5,y:178.2},0).wait(1).to({y:178.3},0).wait(1).to({rotation:-0.6,x:-53.1,y:178.5},0).wait(1).to({y:178.6},0).wait(1).to({rotation:-0.7,y:178.7},0).wait(1).to({y:178.8},0).wait(1).to({rotation:-0.8,x:-53,y:178.9},0).wait(1).to({rotation:-0.9,y:179.1},0).wait(1).to({y:179.2},0).wait(1).to({rotation:-1,x:-52.9,y:179.4},0).wait(1).to({rotation:-1.1,x:-53,y:179.5},0).wait(1).to({x:-52.9,y:179.6},0).wait(1).to({rotation:-1.2,y:179.8},0).wait(1).to({rotation:-1.3,y:179.9},0).wait(1).to({x:-52.8,y:180.1},0).wait(1).to({rotation:-1.4,x:-52.7,y:180.2},0).wait(1).to({rotation:-1.5,y:180.4},0).wait(1).to({x:-52.6,y:180.5},0).wait(1).to({rotation:-1.6,y:180.7},0).wait(1).to({rotation:-1.7,y:180.8},0).wait(1).to({rotation:-1.8,x:-52.5,y:181},0).wait(1).to({y:181.1},0).wait(1).to({rotation:-1.9,y:181.3},0).wait(1).to({rotation:-2,y:181.5},0).wait(1).to({x:-52.4,y:181.6},0).wait(1).to({rotation:-2.1,x:-52.3,y:181.8},0).wait(1).to({rotation:-2.2,y:181.9},0).wait(1).to({y:182},0).wait(1).to({rotation:-2.3,x:-52.2,y:182.2},0).wait(1).to({rotation:-2.4,y:182.3},0).wait(1).to({y:182.4},0).wait(1).to({rotation:-2.5,y:182.5},0).wait(1).to({x:-52.1,y:182.6},0).wait(1).to({rotation:-2.6,y:182.8},0).wait(2).to({rotation:-2.7,x:-52,y:182.9},0).wait(1).to({y:183},0).wait(1).to({y:183.1},0).wait(1).to({rotation:-2.8},0).wait(1).to({y:183.2},0).wait(1).to({y:183.3},0).wait(1).to({rotation:-2.9,y:183.4},0).wait(1).to({x:-51.9},0).wait(1).to({y:183.5},0).wait(5).to({rotation:-3},0).wait(1).to({regX:272.9,regY:44.1,x:71,y:150},0).wait(1).to({regX:148.5,regY:71.3,rotation:-2.9,x:-51.9,y:183.5},0).wait(2).to({y:183.4},0).wait(2).to({x:-52,y:183.3},0).wait(1).to({rotation:-2.8,y:183.2},0).wait(1).to({x:-52.1,y:183.1},0).wait(1).to({x:-52.2,y:183},0).wait(1).to({x:-52.1,y:182.9},0).wait(1).to({rotation:-2.7,x:-52.2,y:182.8},0).wait(1).to({x:-52.3,y:182.7},0).wait(1).to({y:182.6},0).wait(1).to({rotation:-2.6,x:-52.4,y:182.5},0).wait(1).to({x:-52.5,y:182.3},0).wait(1).to({rotation:-2.5,x:-52.6,y:182.2},0).wait(1).to({x:-52.7,y:182},0).wait(1).to({rotation:-2.4,x:-52.8,y:181.8},0).wait(1).to({x:-52.9,y:181.6},0).wait(1).to({rotation:-2.3,x:-53,y:181.5},0).wait(1).to({rotation:-2.2,y:181.3},0).wait(1).to({x:-53.2,y:181.1},0).wait(1).to({rotation:-2.1,x:-53.3,y:180.9},0).wait(1).to({x:-53.4,y:180.7},0).wait(1).to({rotation:-2,x:-53.5,y:180.5},0).wait(1).to({x:-53.6,y:180.3},0).wait(1).to({rotation:-1.9,x:-53.7,y:180.1},0).wait(1).to({x:-53.8,y:179.9},0).wait(1).to({rotation:-1.8,y:179.8},0).wait(1).to({x:-53.9,y:179.6},0).wait(1).to({rotation:-1.7,x:-54,y:179.5},0).wait(1).to({y:179.3},0).wait(1).to({rotation:-1.6,x:-54.1,y:179.2},0).wait(1).to({x:-54.2,y:179.1},0).wait(1).to({y:179},0).wait(1).to({rotation:-1.5,x:-54.3,y:178.9},0).wait(1).to({y:178.8},0).wait(1).to({x:-54.4,y:178.7},0).wait(2).to({rotation:-1.4,x:-54.5,y:178.6},0).wait(1).to({y:178.5},0).wait(2).to({x:-54.6,y:178.4},0).wait(1).to({y:178.3},0).wait(1).to({rotation:-1.3,x:-54.7},0).wait(1).to({y:178.2},0).wait(3).to({y:178.1},0).wait(2).to({y:178},0).wait(1).to({x:-54.8},0).wait(2).to({regX:272.9,regY:44.2,rotation:-1.2,x:69,y:148.1},0).wait(1).to({regX:148.5,regY:71.3,x:-54.8,y:177.9},0).wait(1).to({x:-54.7},0).wait(9).to({rotation:-1.1},0).wait(1).to({x:-54.6,y:177.8},0).wait(2).to({x:-54.5},0).wait(1).to({rotation:-1},0).wait(1).to({y:177.7},0).wait(1).to({x:-54.4},0).wait(2).to({rotation:-0.9},0).wait(1).to({x:-54.3},0).wait(1).to({rotation:-0.8,y:177.6},0).wait(1).to({x:-54.2},0).wait(2).to({rotation:-0.7,x:-54.1},0).wait(1).to({y:177.5},0).wait(1).to({rotation:-0.6,x:-54},0).wait(2).to({rotation:-0.5,x:-53.9},0).wait(1).to({y:177.4},0).wait(2).to({rotation:-0.4,x:-53.8},0).wait(2).to({rotation:-0.3,x:-53.7,y:177.3},0).wait(3).to({rotation:-0.2,x:-53.6,y:177.2},0).wait(1).to({x:-53.5},0).wait(2).to({rotation:-0.1},0).wait(2).to({x:-53.4},0).wait(2).to({rotation:0},0).wait(1).to({y:177.1},0).wait(1).to({x:-53.3},0).wait(1).to({x:-53.4},0).wait(3).to({regX:273,regY:44.1,x:71,y:150},0).wait(1));

	// leaf back
	this.instance_2 = new lib.l2();
	this.instance_2.setTransform(-94,132,1,1,0,0,0,229,279);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({regX:411.4,regY:227.7,x:88.4,y:80.7},0).wait(1).to({regX:374.5,regY:163.6,x:51.5,y:16.7},0).wait(1).to({x:51.6},0).wait(1).to({x:51.5},0).wait(2).to({rotation:-0.1},0).wait(1).to({x:51.4},0).wait(2).to({rotation:-0.2,y:16.8},0).wait(1).to({x:51.3},0).wait(1).to({rotation:-0.3},0).wait(1).to({x:51.2,y:16.9},0).wait(1).to({rotation:-0.4,x:51.1},0).wait(1).to({rotation:-0.5,y:17},0).wait(1).to({x:51},0).wait(1).to({rotation:-0.6,x:50.9,y:17.1},0).wait(1).to({rotation:-0.7,x:50.7,y:17.2},0).wait(1).to({rotation:-0.8,x:50.6},0).wait(1).to({rotation:-0.9,y:17.3},0).wait(1).to({rotation:-1,x:50.5,y:17.4},0).wait(1).to({rotation:-1.1,x:50.4},0).wait(1).to({rotation:-1.2,x:50.2,y:17.5},0).wait(1).to({rotation:-1.3},0).wait(1).to({rotation:-1.4,x:50.1,y:17.6},0).wait(1).to({rotation:-1.5,x:50,y:17.7},0).wait(1).to({x:49.8},0).wait(1).to({rotation:-1.6,y:17.8},0).wait(1).to({rotation:-1.7,y:17.9},0).wait(1).to({rotation:-1.8,x:49.7},0).wait(1).to({x:49.6},0).wait(1).to({rotation:-1.9},0).wait(1).to({x:49.5},0).wait(1).to({y:18},0).wait(3).to({regX:411.4,regY:227.7,rotation:-2,x:88.5,y:80.8},0).wait(1).to({regX:374.5,regY:163.6,rotation:-1.9,x:49.4,y:18},0).wait(1).to({x:49.5},0).wait(3).to({y:17.9},0).wait(4).to({x:49.6,y:17.8},0).wait(1).to({rotation:-1.8,x:49.5},0).wait(1).to({x:49.6},0).wait(1).to({y:17.7},0).wait(2).to({rotation:-1.7,x:49.7,y:17.6},0).wait(2).to({x:49.8,y:17.5},0).wait(1).to({rotation:-1.6,y:17.4},0).wait(1).to({y:17.3},0).wait(1).to({x:49.9},0).wait(1).to({rotation:-1.5,y:17.2},0).wait(1).to({x:50,y:17.1},0).wait(1).to({rotation:-1.4,x:50.1,y:16.9},0).wait(2).to({rotation:-1.3,x:50.2,y:16.7},0).wait(1).to({rotation:-1.2,y:16.6},0).wait(1).to({x:50.3,y:16.5},0).wait(1).to({rotation:-1.1,x:50.4,y:16.4},0).wait(1).to({x:50.5,y:16.2},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-0.9,x:50.6,y:16},0).wait(1).to({x:50.7,y:15.9},0).wait(1).to({rotation:-0.8,y:15.7},0).wait(1).to({rotation:-0.7,x:50.8,y:15.6},0).wait(1).to({rotation:-0.6,x:50.9,y:15.5},0).wait(1).to({rotation:-0.5,x:51,y:15.3},0).wait(1).to({x:51.1,y:15.1},0).wait(1).to({rotation:-0.4,x:51.2,y:14.9},0).wait(1).to({rotation:-0.3,x:51.3,y:14.8},0).wait(1).to({rotation:-0.2,x:51.4,y:14.6},0).wait(1).to({rotation:-0.1,x:51.5,y:14.4},0).wait(1).to({rotation:0,x:51.6,y:14.3},0).wait(1).to({rotation:0.1,x:51.7,y:14.1},0).wait(1).to({rotation:0.2,x:51.8,y:13.9},0).wait(1).to({rotation:0.3,x:51.9,y:13.7},0).wait(1).to({rotation:0.4,x:52,y:13.5},0).wait(1).to({rotation:0.5,x:52.1,y:13.4},0).wait(1).to({rotation:0.6,x:52.2,y:13.2},0).wait(1).to({x:52.3,y:13},0).wait(1).to({rotation:0.7,x:52.4,y:12.8},0).wait(1).to({rotation:0.8,x:52.5,y:12.7},0).wait(1).to({rotation:0.9,x:52.7,y:12.5},0).wait(1).to({rotation:1,x:52.8,y:12.3},0).wait(1).to({rotation:1.1,x:52.9,y:12.1},0).wait(1).to({rotation:1.2,x:53,y:11.9},0).wait(1).to({rotation:1.3,y:11.7},0).wait(1).to({rotation:1.4,x:53.2,y:11.6},0).wait(1).to({rotation:1.5,y:11.4},0).wait(1).to({rotation:1.6,x:53.3,y:11.2},0).wait(1).to({rotation:1.7,x:53.5,y:11.1},0).wait(1).to({x:53.6,y:11},0).wait(1).to({rotation:1.8,y:10.8},0).wait(1).to({rotation:1.9,x:53.7,y:10.6},0).wait(1).to({rotation:2,x:53.8,y:10.5},0).wait(1).to({x:53.9,y:10.4},0).wait(1).to({rotation:2.1,x:54,y:10.3},0).wait(1).to({rotation:2.2,y:10.1},0).wait(1).to({x:54.1,y:10},0).wait(1).to({rotation:2.3,x:54.2,y:9.9},0).wait(1).to({y:9.8},0).wait(1).to({rotation:2.4,x:54.3,y:9.7},0).wait(1).to({x:54.4,y:9.6},0).wait(1).to({rotation:2.5,y:9.5},0).wait(1).to({x:54.5},0).wait(1).to({rotation:2.6,y:9.4},0).wait(1).to({y:9.3},0).wait(1).to({x:54.6},0).wait(1).to({rotation:2.7,y:9.2},0).wait(1).to({x:54.7,y:9.1},0).wait(2).to({x:54.6},0).wait(1).to({x:54.7},0).wait(1).to({rotation:2.8,y:9},0).wait(3).to({regX:411.4,regY:227.6,x:88.5,y:74.8},0).wait(1).to({regX:374.5,regY:163.6,x:54.7,y:9.1},0).wait(3).to({rotation:2.7},0).wait(1).to({y:9.2},0).wait(2).to({y:9.3},0).wait(2).to({rotation:2.6,x:54.6,y:9.4},0).wait(1).to({x:54.5,y:9.5},0).wait(1).to({y:9.6},0).wait(1).to({rotation:2.5,y:9.7},0).wait(1).to({x:54.4,y:9.9},0).wait(1).to({rotation:2.4},0).wait(1).to({x:54.3,y:10.1},0).wait(1).to({rotation:2.3,y:10.3},0).wait(1).to({x:54.2,y:10.4},0).wait(1).to({rotation:2.2,x:54.1,y:10.6},0).wait(1).to({rotation:2.1,y:10.8},0).wait(1).to({x:54,y:11},0).wait(1).to({rotation:2,x:53.9,y:11.1},0).wait(1).to({rotation:1.9,x:53.8,y:11.4},0).wait(1).to({rotation:1.8,x:53.7,y:11.6},0).wait(1).to({x:53.6,y:11.8},0).wait(1).to({rotation:1.7,x:53.5,y:12},0).wait(1).to({rotation:1.6,x:53.4,y:12.3},0).wait(1).to({rotation:1.5,x:53.3,y:12.6},0).wait(1).to({rotation:1.4,x:53.2,y:12.8},0).wait(1).to({rotation:1.3,x:53.1,y:13},0).wait(1).to({rotation:1.2,x:53,y:13.2},0).wait(1).to({rotation:1.1,x:52.9,y:13.5},0).wait(1).to({x:52.8,y:13.8},0).wait(1).to({rotation:1,x:52.7,y:14},0).wait(1).to({rotation:0.9,x:52.6,y:14.3},0).wait(1).to({rotation:0.8,x:52.5,y:14.5},0).wait(1).to({rotation:0.7,x:52.4,y:14.7},0).wait(1).to({rotation:0.6,x:52.3,y:14.9},0).wait(1).to({y:15.1},0).wait(1).to({rotation:0.5,x:52.2,y:15.4},0).wait(1).to({rotation:0.4,x:52.1,y:15.5},0).wait(1).to({x:52,y:15.7},0).wait(1).to({rotation:0.3,y:15.8},0).wait(1).to({rotation:0.2,x:51.9,y:16},0).wait(1).to({y:16.1},0).wait(1).to({x:51.8,y:16.3},0).wait(1).to({rotation:0.1,x:51.7,y:16.4},0).wait(2).to({y:16.5},0).wait(1).to({rotation:0,y:16.6},0).wait(1).to({x:51.6},0).wait(1).to({y:16.7},0).wait(2).to({regX:411.4,regY:227.7,x:88.4,y:80.7},0).wait(1));

	// stem bottom
	this.instance_3 = new lib.stem();
	this.instance_3.setTransform(196.7,56.2,1,1,13.7,0,0,204,297.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(203));

	// stem top
	this.instance_4 = new lib.stem();
	this.instance_4.setTransform(195.8,-7.3,1,1,137.7,0,0,204,297.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(203));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-337,870.1,831.9);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"repeat":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_280 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(280).call(this.frame_280).wait(1));

	// Layer 1
	this.animation = new lib.animation();
	this.animation.setTransform(421.1,13.9,1,1,0,0,0,234.1,-55.1);

	this.timeline.addTween(cjs.Tween.get(this.animation).wait(30).to({regX:34.3,regY:100.4,x:221.3,y:169.4},0).wait(7).to({x:221.4},0).wait(2).to({y:169.5},0).wait(3).to({x:221.5},0).wait(1).to({rotation:-0.1},0).wait(1).to({y:169.6},0).wait(3).to({y:169.7},0).wait(1).to({x:221.6},0).wait(1).to({y:169.8},0).wait(2).to({x:221.7},0).wait(1).to({rotation:-0.2,y:169.9},0).wait(1).to({x:221.8},0).wait(1).to({y:170},0).wait(1).to({x:221.9,y:170.1},0).wait(2).to({y:170.2},0).wait(1).to({x:222},0).wait(1).to({rotation:-0.3,y:170.3},0).wait(1).to({x:222.1,y:170.4},0).wait(1).to({x:222.2},0).wait(1).to({y:170.5},0).wait(1).to({x:222.3,y:170.6},0).wait(1).to({rotation:-0.4,y:170.7},0).wait(1).to({x:222.4},0).wait(1).to({y:170.8},0).wait(1).to({x:222.5,y:170.9},0).wait(1).to({rotation:-0.5,x:222.6,y:171},0).wait(1).to({x:222.7},0).wait(1).to({y:171.1},0).wait(1).to({x:222.8,y:171.2},0).wait(1).to({y:171.3},0).wait(1).to({rotation:-0.6,x:222.9},0).wait(1).to({x:223,y:171.4},0).wait(1).to({y:171.5},0).wait(1).to({x:223.1,y:171.6},0).wait(1).to({rotation:-0.7,x:223.2,y:171.7},0).wait(2).to({x:223.3,y:171.8},0).wait(1).to({y:171.9},0).wait(1).to({x:223.4,y:172},0).wait(1).to({rotation:-0.8,x:223.5},0).wait(1).to({y:172.1},0).wait(1).to({x:223.6},0).wait(1).to({y:172.2},0).wait(1).to({x:223.7,y:172.3},0).wait(1).to({y:172.4},0).wait(1).to({rotation:-0.9},0).wait(1).to({x:223.8,y:172.5},0).wait(2).to({x:223.9,y:172.6},0).wait(2).to({x:224,y:172.7},0).wait(2).to({rotation:-1},0).wait(1).to({x:224.1,y:172.8},0).wait(5).to({y:172.9},0).wait(3).to({x:224.2},0).wait(2).to({regX:234.1,regY:-54.9,x:421.2,y:14},0).wait(1).to({regX:34.3,regY:100.4,x:224.1,y:172.7},0).wait(5).to({x:224},0).wait(1).to({y:172.6},0).wait(3).to({rotation:-0.9,x:223.9},0).wait(1).to({y:172.5},0).wait(2).to({x:223.8,y:172.4},0).wait(1).to({y:172.3},0).wait(2).to({x:223.7,y:172.2},0).wait(1).to({rotation:-0.8,x:223.6},0).wait(1).to({x:223.5,y:172.1},0).wait(1).to({y:172},0).wait(1).to({x:223.4,y:171.9},0).wait(1).to({rotation:-0.7,y:171.8},0).wait(1).to({x:223.3,y:171.7},0).wait(1).to({x:223.2},0).wait(1).to({x:223.1,y:171.5},0).wait(1).to({rotation:-0.6,x:223},0).wait(1).to({y:171.3},0).wait(1).to({x:222.9,y:171.2},0).wait(1).to({rotation:-0.5,x:222.7,y:171.1},0).wait(1).to({x:222.6,y:170.9},0).wait(1).to({y:170.8},0).wait(1).to({rotation:-0.4,x:222.4,y:170.7},0).wait(1).to({x:222.3,y:170.6},0).wait(1).to({rotation:-0.3,x:222.2,y:170.4},0).wait(1).to({x:222.1,y:170.2},0).wait(1).to({x:222,y:170.1},0).wait(1).to({rotation:-0.2,x:221.9,y:170},0).wait(1).to({x:221.8,y:169.8},0).wait(1).to({rotation:-0.1,x:221.6,y:169.7},0).wait(1).to({x:221.5,y:169.5},0).wait(1).to({rotation:0,x:221.4,y:169.4},0).wait(1).to({x:221.3,y:169.2},0).wait(1).to({rotation:0.1,x:221.1,y:169},0).wait(1).to({x:221,y:168.8},0).wait(1).to({rotation:0.2,x:220.9,y:168.7},0).wait(1).to({x:220.7,y:168.5},0).wait(1).to({x:220.6,y:168.4},0).wait(1).to({rotation:0.3,x:220.5,y:168.2},0).wait(1).to({x:220.4,y:168.1},0).wait(1).to({rotation:0.4,x:220.3,y:167.9},0).wait(1).to({x:220.1,y:167.8},0).wait(1).to({rotation:0.5,x:220,y:167.6},0).wait(1).to({x:219.9,y:167.5},0).wait(1).to({x:219.8,y:167.3},0).wait(1).to({rotation:0.6,x:219.7,y:167.2},0).wait(1).to({x:219.6,y:167},0).wait(1).to({x:219.5},0).wait(1).to({rotation:0.7,x:219.4,y:166.8},0).wait(1).to({x:219.3,y:166.7},0).wait(1).to({x:219.2,y:166.6},0).wait(1).to({rotation:0.8,y:166.5},0).wait(1).to({x:219.1,y:166.4},0).wait(1).to({x:219,y:166.3},0).wait(1).to({rotation:0.9,x:218.9,y:166.2},0).wait(1).to({y:166.1},0).wait(2).to({x:218.8,y:166},0).wait(1).to({x:218.7,y:165.9},0).wait(2).to({rotation:1,x:218.6,y:165.8},0).wait(4).to({y:165.7},0).wait(3).to({regX:234.1,regY:-55.1,x:421.1,y:13.9},0).to({regY:-54.9,rotation:-1,x:421.2,y:14},37).wait(1).to({regX:34.3,regY:100.4,x:224.1,y:172.7},0).wait(6).to({x:224},0).wait(1).to({y:172.6},0).wait(3).to({rotation:-0.9,x:223.9},0).wait(1).to({y:172.5},0).wait(2).to({x:223.8,y:172.4},0).wait(2).to({y:172.3},0).wait(1).to({x:223.7},0).wait(1).to({y:172.2},0).wait(1).to({rotation:-0.8,x:223.6},0).wait(1).to({y:172.1},0).wait(1).to({x:223.5,y:172},0).wait(1).to({x:223.4},0).wait(1).to({y:171.9},0).wait(1).to({rotation:-0.7,x:223.3,y:171.8},0).wait(1).to({y:171.7},0).wait(1).to({x:223.2,y:171.6},0).wait(1).to({x:223.1,y:171.5},0).wait(1).to({rotation:-0.6,x:223,y:171.4},0).wait(1).to({y:171.3},0).wait(1).to({x:222.9,y:171.2},0).wait(1).to({rotation:-0.5,x:222.8,y:171.1},0).wait(1).to({x:222.7},0).wait(1).to({x:222.6,y:170.9},0).wait(1).to({x:222.5,y:170.8},0).wait(1).to({rotation:-0.4,y:170.7},0).wait(1).to({x:222.4,y:170.6},0).wait(1).to({x:222.3,y:170.5},0).wait(1).to({rotation:-0.3,x:222.2},0).wait(1).to({x:222.1,y:170.3},0).wait(1).to({y:170.2},0).wait(1).to({x:222},0).wait(1).to({rotation:-0.2,y:170.1},0).wait(1).to({x:221.9,y:170},0).wait(1).to({x:221.8,y:169.9},0).wait(1).to({x:221.7,y:169.8},0).wait(1).to({y:169.7},0).wait(1).to({rotation:-0.1,x:221.6},0).wait(1).to({y:169.6},0).wait(1).to({x:221.5},0).wait(1).to({y:169.5},0).wait(1).to({x:221.4,y:169.4},0).wait(2).to({rotation:0,y:169.3},0).wait(1).to({x:221.3},0).wait(3).to({y:169.2},0).wait(4).to({regX:234.1,regY:-55.1,x:421.1,y:13.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-268.1,870.1,831.9);


// stage content:



(lib.brewing_tout = function(mode,startPosition,loop) {
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
		
		/*setTimeout(function() {
			self.start();
		}, 500);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// animation
	this.main_mc = new lib.main();
	this.main_mc.setTransform(350.1,354.9,1,1,0,0,0,299.1,147.8);

	this.timeline.addTween(cjs.Tween.get(this.main_mc).wait(1));

	// spacers
	this.instance = new lib.spacerjpg();
	this.instance.setTransform(0,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(144,218,1053,831.9);

})(window.brewingToutLib = window.brewingToutLib||{}, window.brewingToutImages = window.brewingToutImages||{}, createjs = createjs||{}, window.brewingToutSs = window.brewingToutSs||{});