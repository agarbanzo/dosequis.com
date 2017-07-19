(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 370,
	height: 650,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/Assets/Images/touts/brewing-fullpage/spacerjpg.jpg?1477079965226", id:"spacerjpg"},
		{src:"/Assets/Images/touts/brewing-fullpage/brewingright_atlas_P_.png?1477079965221", id:"brewingright_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"brewingright_atlas_P_", frames: [[0,0,409,579],[0,581,10,10]]}
];


// symbols:



(lib.rightassets = function() {
	this.spriteSheet = ss["brewingright_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.spacerjpg = function() {
	this.initialize(img.spacerjpg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.spacerpng = function() {
	this.spriteSheet = ss["brewingright_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.leavesSPRITE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rightassets();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,409,579);


(lib.leaf1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al1MzQgDgCkugrQkvgqgCgDQgDgCCUpWQCTpTgCgDQgDgCGdisQGaisgCgDIGuEnQGnEjAGADQgDACgpEUQgrEbgCgDQgDgCp4D3QpvD1gKAAIAAAAgAPYjlIABAAIAAAAIgBAAg");
	mask.setTransform(263,457.5);

	// Layer 1
	this.instance = new lib.leavesSPRITE();
	this.instance.setTransform(204.5,289.5,1,1,0,0,0,204.5,289.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(164.5,375.5,197,164);


(lib.cone2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AHCSHQgCgCkghiQkdhhgDgDQgCgCjugwQjtgvgDgDQgCgChsjBQhrjAgDgDQgCgCACq8QADq/gDgCQDNjXgFgFQgCgDFHCFQFBCCACAAQACAGGTLoQGYLugDgDQgCgCi8EaQi6EYgEAAIAAAAgAAUuCIAAAAIAAAAg");
	mask.setTransform(288.4,106.5);

	// Layer 1
	this.instance = new lib.leavesSPRITE();
	this.instance.setTransform(204.5,289.5,1,1,0,0,0,204.5,289.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(205.4,0,166.2,222.5);


(lib.cone1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An4RkIjcxfIIIwsQAGgGGgg1IGhgzIBaYCImbHzImsE2g");
	mask.setTransform(126.5,142.5);

	// Layer 1
	this.instance = new lib.leavesSPRITE();
	this.instance.setTransform(204.5,289.5,1,1,0,0,0,204.5,289.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54,25.1,145,235);


(lib.cone0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao5NSImtwEQBBjVBCjTQCEmmAHAFIKnAzIKmhaIFyGuIhuJDIhuJNIrQIHg");
	mask.setTransform(86,482);

	// Layer 1
	this.instance = new lib.leavesSPRITE();
	this.instance.setTransform(204.5,289.5,1,1,0,0,0,204.5,289.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,376,186,203);


(lib.bigleaf0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AXRZdQkBgWgIACQADgHAWk+QAXlHACACIjKm/QjEm1gCgGIAAAAIAAAAQgFADsMgXQsRgWACACQADADm7BrQm6BsACACIi+i0QADACDynzQDzn3ACADQADADGSkbQGTkbACADQADADE4hTQE3hTACADQADADFRCTQFSCTACADIOYO2QADADgIP8QgHP+ACACIgDAAQgZAAjtgUgA7kBFIAAAAIAAAAg");
	mask.setTransform(233,357.5);

	// Layer 1
	this.instance = new lib.leavesSPRITE();
	this.instance.setTransform(204.5,289.5,1,1,0,0,0,204.5,289.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(56.5,192.5,352.5,330);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaf1();
	this.instance.setTransform(178,134.9,1,1,0,0,0,342.5,510.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.5,-375.5,409,579);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{replay:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_256 = function() {
		this.gotoAndPlay("replay");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(256).call(this.frame_256).wait(1));

	// Layer 1
	this.instance = new lib.bigleaf0();
	this.instance.setTransform(271,148,1,1,0,0,0,327.5,340.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({regX:232.8,regY:357.5,x:176.4,y:165.1},0).wait(13).to({y:165.2},0).wait(5).to({y:165.3},0).wait(4).to({y:165.4},0).wait(3).to({y:165.5},0).wait(3).to({y:165.6},0).wait(2).to({y:165.7},0).wait(3).to({y:165.8},0).wait(1).to({x:176.5},0).wait(2).to({y:165.9},0).wait(2).to({y:166},0).wait(3).to({y:166.1},0).wait(2).to({y:166.2},0).wait(3).to({y:166.3},0).wait(4).to({y:166.4},0).wait(4).to({y:166.5},0).wait(10).to({regX:327.5,regY:340.5,x:271.2,y:149.5},0).wait(1).to({regX:232.8,regY:357.5,x:176.5,y:166.5},0).wait(14).to({y:166.4},0).wait(6).to({y:166.3},0).wait(5).to({y:166.2},0).wait(3).to({y:166.1},0).wait(4).to({y:166},0).wait(3).to({y:165.9},0).wait(3).to({y:165.8},0).wait(1).to({x:176.4},0).wait(2).to({y:165.7},0).wait(2).to({y:165.6},0).wait(3).to({y:165.5},0).wait(3).to({y:165.4},0).wait(4).to({y:165.3},0).wait(4).to({y:165.2},0).wait(4).to({y:165.1},0).wait(12).to({regX:327.5,regY:340.5,x:271,y:148},0).wait(1).to({regX:232.8,regY:357.5,x:176.3,y:165},0).wait(6).to({y:164.9},0).wait(3).to({y:164.8},0).wait(2).to({y:164.7},0).wait(2).to({y:164.6},0).wait(1).to({y:164.5},0).wait(2).to({y:164.4},0).wait(1).to({y:164.3},0).wait(1).to({y:164.2},0).wait(1).to({y:164.1},0).wait(1).to({y:164},0).wait(1).to({y:163.9},0).wait(2).to({y:163.8},0).wait(1).to({y:163.7},0).wait(1).to({y:163.6},0).wait(1).to({y:163.5},0).wait(2).to({y:163.4},0).wait(1).to({y:163.3},0).wait(2).to({y:163.2},0).wait(2).to({y:163.1},0).wait(5).to({regX:327.5,regY:340.5,x:270.9,y:146},0).wait(1).to({regX:232.8,regY:357.5,x:176.3,y:163.1},0).wait(12).to({y:163.2},0).wait(5).to({y:163.3},0).wait(4).to({y:163.4},0).wait(4).to({y:163.5},0).wait(2).to({y:163.6},0).wait(3).to({y:163.7},0).wait(2).to({y:163.8},0).wait(3).to({y:163.9},0).wait(2).to({y:164},0).wait(2).to({y:164.1},0).wait(2).to({y:164.2},0).wait(2).to({y:164.3},0).wait(3).to({y:164.4},0).wait(2).to({y:164.5},0).wait(2).to({y:164.6},0).wait(3).to({y:164.7},0).wait(2).to({y:164.8},0).wait(4).to({y:164.9},0).wait(4).to({y:165},0).wait(10).to({regX:327.5,regY:340.5,x:271,y:148},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-192.5,409.6,579);


(lib.cone2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{repeat:7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_258 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(258).call(this.frame_258).wait(1));

	// Layer 3
	this.instance = new lib.cone2();
	this.instance.setTransform(204.7,284.8,1,1,0,0,0,204.5,284.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({regX:288.4,regY:111.3,x:288.6,y:111.3},0).wait(5).to({y:111.2},0).wait(2).to({y:111.1},0).wait(1).to({y:111},0).wait(2).to({y:110.9},0).wait(1).to({y:110.8},0).wait(1).to({y:110.7},0).wait(1).to({y:110.6},0).wait(1).to({y:110.4},0).wait(1).to({y:110.3},0).wait(1).to({y:110.2},0).wait(1).to({y:110},0).wait(1).to({y:109.8},0).wait(1).to({y:109.7},0).wait(1).to({y:109.5},0).wait(1).to({y:109.3},0).wait(1).to({y:109.2},0).wait(1).to({y:109},0).wait(1).to({y:108.8},0).wait(1).to({y:108.6},0).wait(1).to({y:108.4},0).wait(1).to({y:108.2},0).wait(1).to({y:108},0).wait(1).to({y:107.9},0).wait(1).to({y:107.7},0).wait(1).to({y:107.5},0).wait(1).to({y:107.4},0).wait(1).to({y:107.2},0).wait(1).to({y:107.1},0).wait(1).to({y:106.9},0).wait(1).to({y:106.8},0).wait(1).to({y:106.7},0).wait(1).to({y:106.6},0).wait(2).to({y:106.5},0).wait(1).to({y:106.4},0).wait(4).to({regX:204.5,regY:284.8,x:204.7,y:279.8},0).wait(1).to({regX:288.4,regY:111.3,x:288.6,y:106.4},0).wait(5).to({y:106.5},0).wait(2).to({y:106.6},0).wait(2).to({y:106.7},0).wait(1).to({y:106.8},0).wait(2).to({y:106.9},0).wait(1).to({y:107},0).wait(1).to({y:107.1},0).wait(1).to({y:107.2},0).wait(1).to({y:107.4},0).wait(1).to({y:107.5},0).wait(1).to({y:107.6},0).wait(1).to({y:107.8},0).wait(1).to({y:107.9},0).wait(1).to({y:108.1},0).wait(1).to({y:108.3},0).wait(1).to({y:108.4},0).wait(1).to({y:108.6},0).wait(1).to({y:108.8},0).wait(1).to({y:109},0).wait(1).to({y:109.2},0).wait(1).to({y:109.4},0).wait(1).to({y:109.6},0).wait(1).to({y:109.9},0).wait(1).to({y:110.1},0).wait(1).to({y:110.3},0).wait(1).to({y:110.5},0).wait(1).to({y:110.8},0).wait(1).to({y:111},0).wait(1).to({y:111.2},0).wait(1).to({y:111.4},0).wait(1).to({y:111.7},0).wait(1).to({y:111.9},0).wait(1).to({y:112.1},0).wait(1).to({y:112.4},0).wait(1).to({y:112.6},0).wait(1).to({y:112.8},0).wait(1).to({y:113},0).wait(1).to({y:113.2},0).wait(1).to({y:113.4},0).wait(1).to({y:113.6},0).wait(1).to({y:113.8},0).wait(1).to({y:114},0).wait(1).to({y:114.1},0).wait(1).to({y:114.3},0).wait(1).to({y:114.4},0).wait(1).to({y:114.5},0).wait(1).to({y:114.7},0).wait(1).to({y:114.8},0).wait(1).to({y:114.9},0).wait(1).to({y:115},0).wait(2).to({y:115.1},0).wait(1).to({y:115.2},0).wait(2).to({y:115.3},0).wait(3).to({regX:204.5,regY:284.8,x:204.7,y:288.8},0).wait(1).to({regX:288.4,regY:111.3,x:288.6,y:115.3},0).wait(3).to({y:115.2},0).wait(3).to({y:115.1},0).wait(2).to({y:115},0).wait(2).to({y:114.9},0).wait(1).to({y:114.8},0).wait(1).to({y:114.7},0).wait(1).to({y:114.6},0).wait(1).to({y:114.5},0).wait(1).to({y:114.4},0).wait(1).to({y:114.3},0).wait(1).to({y:114.2},0).wait(1).to({y:114},0).wait(1).to({y:113.9},0).wait(1).to({y:113.7},0).wait(1).to({y:113.6},0).wait(1).to({y:113.4},0).wait(1).to({y:113.2},0).wait(1).to({y:113.1},0).wait(1).to({y:112.9},0).wait(1).to({y:112.7},0).wait(1).to({y:112.5},0).wait(1).to({y:112.2},0).wait(1).to({y:112},0).wait(1).to({y:111.8},0).wait(1).to({y:111.6},0).wait(1).to({y:111.3},0).wait(1).to({y:111.1},0).wait(1).to({y:110.9},0).wait(1).to({y:110.6},0).wait(1).to({y:110.4},0).wait(1).to({y:110.1},0).wait(1).to({y:109.9},0).wait(1).to({y:109.6},0).wait(1).to({y:109.3},0).wait(1).to({y:109.1},0).wait(1).to({y:108.8},0).wait(1).to({y:108.6},0).wait(1).to({y:108.3},0).wait(1).to({y:108.1},0).wait(1).to({y:107.8},0).wait(1).to({y:107.6},0).wait(1).to({y:107.3},0).wait(1).to({y:107.1},0).wait(1).to({y:106.9},0).wait(1).to({y:106.6},0).wait(1).to({y:106.4},0).wait(1).to({y:106.2},0).wait(1).to({y:106},0).wait(1).to({y:105.9},0).wait(1).to({y:105.7},0).wait(1).to({y:105.5},0).wait(1).to({y:105.4},0).wait(1).to({y:105.2},0).wait(1).to({y:105.1},0).wait(1).to({y:105},0).wait(1).to({y:104.9},0).wait(1).to({y:104.8},0).wait(1).to({y:104.7},0).wait(1).to({y:104.6},0).wait(1).to({y:104.5},0).wait(2).to({y:104.4},0).wait(4).to({regX:204.5,regY:284.8,x:204.7,y:277.8},0).wait(1).to({regX:288.4,regY:111.3,x:288.6,y:104.4},0).wait(6).to({y:104.5},0).wait(2).to({y:104.6},0).wait(2).to({y:104.7},0).wait(2).to({y:104.8},0).wait(1).to({y:104.9},0).wait(1).to({y:105},0).wait(2).to({y:105.1},0).wait(1).to({y:105.2},0).wait(1).to({y:105.3},0).wait(1).to({y:105.5},0).wait(1).to({y:105.6},0).wait(1).to({y:105.7},0).wait(1).to({y:105.8},0).wait(1).to({y:106},0).wait(1).to({y:106.1},0).wait(1).to({y:106.3},0).wait(1).to({y:106.4},0).wait(1).to({y:106.6},0).wait(1).to({y:106.7},0).wait(1).to({y:106.9},0).wait(1).to({y:107.1},0).wait(1).to({y:107.3},0).wait(1).to({y:107.4},0).wait(1).to({y:107.6},0).wait(1).to({y:107.8},0).wait(1).to({y:108},0).wait(1).to({y:108.2},0).wait(1).to({y:108.3},0).wait(1).to({y:108.5},0).wait(1).to({y:108.7},0).wait(1).to({y:108.9},0).wait(1).to({y:109.1},0).wait(1).to({y:109.2},0).wait(1).to({y:109.4},0).wait(1).to({y:109.6},0).wait(1).to({y:109.7},0).wait(1).to({y:109.9},0).wait(1).to({y:110},0).wait(1).to({y:110.2},0).wait(1).to({y:110.3},0).wait(1).to({y:110.4},0).wait(1).to({y:110.6},0).wait(1).to({y:110.7},0).wait(1).to({y:110.8},0).wait(1).to({y:110.9},0).wait(2).to({y:111},0).wait(1).to({y:111.1},0).wait(1).to({y:111.2},0).wait(2).to({y:111.3},0).wait(5).to({regX:204.5,regY:284.8,x:204.7,y:284.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,-9.4,409,588.5);


(lib.animation2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"repeat":52});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_184 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(184).call(this.frame_184).wait(1));

	// c0
	this.c0 = new lib.Symbol1();
	this.c0.setTransform(489.2,192.4,0.998,0.998,35.6,0,0,291.2,176);

	this.timeline.addTween(cjs.Tween.get(this.c0).wait(13).to({regX:176.3,regY:164.7,scaleX:1,scaleY:1,rotation:28.5,x:354.2,y:124.5},0).wait(1).to({rotation:23.2,x:319,y:131.2},0).wait(1).to({rotation:19.2,x:293.1,y:136.6},0).wait(1).to({rotation:16.1,x:273.3,y:140.8},0).wait(1).to({rotation:13.6,x:257.9,y:144.3},0).wait(1).to({rotation:11.6,x:245.6,y:147.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:10,x:235.6,y:149.6},0).wait(1).to({rotation:8.6,x:227.4,y:151.6},0).wait(1).to({rotation:7.5,x:220.5,y:153.3},0).wait(1).to({rotation:6.5,x:214.5,y:154.8},0).wait(1).to({rotation:5.7,x:209.5,y:156},0).wait(1).to({rotation:4.9,x:205.2,y:157.2},0).wait(1).to({rotation:4.3,x:201.5,y:158.1},0).wait(1).to({rotation:3.8,x:198.3,y:159},0).wait(1).to({rotation:3.3,x:195.4,y:159.7},0).wait(1).to({rotation:2.9,x:192.9,y:160.3},0).wait(1).to({rotation:2.5,x:190.7,y:161},0).wait(1).to({rotation:2.2,x:188.8,y:161.4},0).wait(1).to({rotation:1.9,x:187.1,y:161.9},0).wait(1).to({rotation:1.6,x:185.6,y:162.3},0).wait(1).to({rotation:1.4,x:184.3,y:162.6},0).wait(1).to({rotation:1.2,x:183.1,y:162.9},0).wait(1).to({rotation:1,x:182.1,y:163.2},0).wait(1).to({rotation:0.8,x:181.2,y:163.4},0).wait(1).to({rotation:0.7,x:180.4,y:163.7},0).wait(1).to({rotation:0.6,x:179.7,y:163.9},0).wait(1).to({rotation:0.5,x:179.1,y:164},0).wait(1).to({rotation:0.4,x:178.6,y:164.2},0).wait(1).to({rotation:0.3,x:178.1,y:164.3},0).wait(1).to({rotation:0.2,x:177.7,y:164.4},0).wait(1).to({x:177.3},0).wait(1).to({rotation:0.1,x:177.1,y:164.5},0).wait(1).to({x:176.8,y:164.6},0).wait(1).to({x:176.7},0).wait(1).to({rotation:0,x:176.5,y:164.7},0).wait(1).to({x:176.4},0).wait(1).to({x:176.3,y:164.8},0).wait(1).to({y:164.7},0).wait(1).to({regX:291.2,regY:176,x:291.2,y:176},0).wait(2).to({regX:176.3,regY:164.7,x:176.3,y:164.7},0).wait(2).to({x:176.4},0).wait(1).to({x:176.3},0).wait(1).to({x:176.4},0).wait(2).to({rotation:-0.1,y:164.8},0).wait(1).to({x:176.3},0).wait(2).to({y:164.9},0).wait(1).to({rotation:-0.2,x:176.4},0).wait(1).to({x:176.3},0).wait(1).to({x:176.4,y:165},0).wait(1).to({rotation:-0.3,x:176.3},0).wait(2).to({rotation:-0.4,y:165.1},0).wait(2).to({rotation:-0.5,y:165.2},0).wait(2).to({rotation:-0.6,y:165.3},0).wait(1).to({y:165.4},0).wait(1).to({rotation:-0.7,y:165.5},0).wait(1).to({rotation:-0.8},0).wait(1).to({y:165.6},0).wait(1).to({rotation:-0.9,y:165.7},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-1.1,y:165.8},0).wait(1).to({rotation:-1.2,y:165.9},0).wait(1).to({y:166},0).wait(1).to({rotation:-1.3,y:166.1},0).wait(1).to({rotation:-1.4,y:166.2},0).wait(1).to({rotation:-1.5},0).wait(1).to({rotation:-1.6,y:166.3},0).wait(1).to({rotation:-1.7,y:166.5},0).wait(1).to({rotation:-1.8},0).wait(1).to({y:166.6},0).wait(1).to({rotation:-1.9,x:176.2,y:166.7},0).wait(1).to({rotation:-2,x:176.3,y:166.8},0).wait(1).to({rotation:-2.1,y:166.9},0).wait(1).to({rotation:-2.2,y:167},0).wait(1).to({x:176.2},0).wait(1).to({rotation:-2.3,y:167.1},0).wait(1).to({rotation:-2.4,y:167.2},0).wait(1).to({rotation:-2.5,x:176.3,y:167.3},0).wait(2).to({rotation:-2.6,y:167.4},0).wait(2).to({rotation:-2.7,y:167.5},0).wait(2).to({rotation:-2.8,y:167.6},0).wait(2).to({rotation:-2.9,y:167.7},0).wait(2).to({x:176.2},0).wait(1).to({y:167.8},0).wait(1).to({rotation:-3},0).wait(2).to({x:176.3},0).wait(2).to({regX:291.2,regY:176.1,x:291.6,y:173.1},0).wait(1).to({regX:176.3,regY:164.7,x:176.2,y:167.8},0).wait(1).to({x:176.3},0).wait(2).to({y:167.7},0).wait(1).to({y:167.8},0).wait(1).to({x:176.2},0).wait(1).to({x:176.3,y:167.7},0).wait(1).to({rotation:-2.9},0).wait(1).to({x:176.2},0).wait(1).to({y:167.6},0).wait(1).to({x:176.3,y:167.7},0).wait(1).to({y:167.6},0).wait(1).to({rotation:-2.8},0).wait(1).to({y:167.5},0).wait(3).to({rotation:-2.7,y:167.4},0).wait(2).to({rotation:-2.6,y:167.3},0).wait(1).to({y:167.4},0).wait(1).to({y:167.3},0).wait(1).to({rotation:-2.5,y:167.2},0).wait(2).to({rotation:-2.4,y:167.1},0).wait(2).to({rotation:-2.3,y:167},0).wait(2).to({rotation:-2.2},0).wait(1).to({rotation:-2.1,y:166.9},0).wait(1).to({y:166.8},0).wait(1).to({rotation:-2,y:166.7},0).wait(2).to({rotation:-1.9,x:176.2,y:166.6},0).wait(1).to({rotation:-1.8,x:176.3,y:166.5},0).wait(1).to({y:166.4},0).wait(1).to({rotation:-1.7},0).wait(1).to({rotation:-1.6,y:166.3},0).wait(1).to({rotation:-1.5,y:166.2},0).wait(2).to({rotation:-1.4,y:166.1},0).wait(1).to({rotation:-1.3,y:166},0).wait(1).to({rotation:-1.2,y:165.9},0).wait(2).to({rotation:-1.1,y:165.8},0).wait(1).to({rotation:-1,y:165.7},0).wait(1).to({y:165.6},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:-0.8,y:165.5},0).wait(2).to({rotation:-0.7,y:165.4},0).wait(1).to({rotation:-0.6,y:165.3},0).wait(2).to({rotation:-0.5,y:165.2},0).wait(2).to({rotation:-0.4,y:165.1},0).wait(1).to({y:165},0).wait(1).to({rotation:-0.3},0).wait(1).to({y:164.9},0).wait(1).to({rotation:-0.2},0).wait(2).to({y:164.8},0).wait(1).to({rotation:-0.1},0).wait(1).to({x:176.4},0).wait(1).to({x:176.3,y:164.7},0).wait(3).to({rotation:0},0).wait(2).to({x:176.4},0).wait(1).to({x:176.3},0).wait(2).to({regX:291.2,regY:176,x:291.2,y:176},0).wait(1));

	// c1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(380.9,196.8,1,1,29.9,0,0,139.1,106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regX:98.5,regY:82,rotation:24.1,x:337.8,y:158.3},0).wait(1).to({rotation:19.7,x:323.2,y:160.6},0).wait(1).to({rotation:16.3,x:312.2,y:162.4},0).wait(1).to({rotation:13.7,x:303.7,y:164},0).wait(1).to({rotation:11.7,x:297,y:165.2},0).wait(1).to({rotation:10,x:291.6,y:166.2},0).wait(1).to({rotation:8.6,x:287.2,y:167.2},0).wait(1).to({rotation:7.5,x:283.5,y:167.9},0).wait(1).to({rotation:6.5,x:280.3,y:168.5},0).wait(1).to({rotation:5.7,x:277.7,y:169.1},0).wait(1).to({rotation:5,x:275.5,y:169.6},0).wait(1).to({rotation:4.3,x:273.5,y:170},0).wait(1).to({rotation:3.8,x:271.8,y:170.3},0).wait(1).to({rotation:3.3,x:270.3,y:170.7},0).wait(1).to({rotation:2.9,x:269,y:171},0).wait(1).to({rotation:2.5,x:267.8,y:171.2},0).wait(1).to({rotation:2.2,x:266.9,y:171.5},0).wait(1).to({rotation:1.9,x:266,y:171.7},0).wait(1).to({rotation:1.7,x:265.2,y:171.9},0).wait(1).to({rotation:1.5,x:264.4,y:172},0).wait(1).to({rotation:1.3,x:263.9,y:172.2},0).wait(1).to({rotation:1.1,x:263.3,y:172.3},0).wait(1).to({rotation:0.9,x:262.9,y:172.4},0).wait(1).to({rotation:0.8,x:262.4,y:172.5},0).wait(1).to({rotation:0.7,x:262,y:172.6},0).wait(1).to({rotation:0.6,x:261.7},0).wait(1).to({rotation:0.5,x:261.4,y:172.7},0).wait(1).to({rotation:0.4,x:261.1,y:172.8},0).wait(1).to({rotation:0.3,x:260.9,y:172.9},0).wait(1).to({rotation:0.2,x:260.7},0).wait(1).to({x:260.6},0).wait(1).to({rotation:0.1,x:260.4},0).wait(1).to({x:260.3,y:173},0).wait(1).to({x:260.2},0).wait(1).to({x:260.1},0).wait(1).to({rotation:0,x:260},0).wait(1).to({y:173.1},0).wait(1).to({y:173},0).wait(2).to({regX:139,regY:106,x:300.5,y:197.1},0).wait(10).to({regX:98.5,regY:82,x:260,y:173},0).wait(2).to({y:173.1},0).wait(1).to({y:173},0).wait(2).to({rotation:0.1},0).wait(1).to({x:260.1},0).wait(2).to({y:172.9},0).wait(1).to({rotation:0.2},0).wait(2).to({rotation:0.3},0).wait(1).to({y:172.8},0).wait(1).to({rotation:0.4},0).wait(1).to({x:260.2},0).wait(1).to({rotation:0.5,y:172.7},0).wait(2).to({rotation:0.6,x:260.3,y:172.6},0).wait(1).to({rotation:0.7},0).wait(1).to({rotation:0.8,y:172.5},0).wait(1).to({x:260.4},0).wait(1).to({rotation:0.9,y:172.4},0).wait(1).to({rotation:1,y:172.3},0).wait(1).to({rotation:1.1,x:260.5},0).wait(1).to({rotation:1.2,y:172.2},0).wait(1).to({x:260.6},0).wait(1).to({rotation:1.3,x:260.5,y:172.1},0).wait(1).to({rotation:1.4,x:260.6,y:172},0).wait(1).to({rotation:1.5},0).wait(1).to({x:260.7,y:171.9},0).wait(1).to({rotation:1.6},0).wait(1).to({rotation:1.7,y:171.8},0).wait(1).to({x:260.8},0).wait(1).to({rotation:1.8},0).wait(2).to({rotation:1.9,y:171.7},0).wait(1).to({x:260.9},0).wait(2).to({rotation:2,y:171.6},0).wait(1).to({y:171.7},0).wait(1).to({y:171.6},0).wait(1).to({y:171.7},0).wait(1).to({regX:139,regY:106,x:300.5,y:197.1},0).wait(1).to({regX:98.5,regY:82,x:260.9,y:171.6},0).wait(1).to({y:171.7},0).wait(2).to({y:171.6},0).wait(4).to({y:171.7},0).wait(2).to({y:171.6},0).wait(1).to({rotation:1.9,y:171.7},0).wait(1).to({x:260.8},0).wait(1).to({x:260.9},0).wait(1).to({x:260.8},0).wait(5).to({rotation:1.8},0).wait(1).to({y:171.8},0).wait(1).to({y:171.7},0).wait(1).to({y:171.8},0).wait(3).to({rotation:1.7},0).wait(1).to({x:260.7},0).wait(1).to({y:171.9},0).wait(2).to({rotation:1.6},0).wait(3).to({rotation:1.5},0).wait(2).to({x:260.6,y:172},0).wait(2).to({rotation:1.4},0).wait(2).to({y:172.1},0).wait(1).to({rotation:1.3,x:260.5},0).wait(2).to({rotation:1.2,x:260.6,y:172.2},0).wait(1).to({x:260.5},0).wait(2).to({rotation:1.1},0).wait(1).to({y:172.3},0).wait(2).to({rotation:1},0).wait(1).to({y:172.4},0).wait(1).to({rotation:0.9,x:260.4},0).wait(3).to({rotation:0.8},0).wait(1).to({x:260.3,y:172.5},0).wait(2).to({rotation:0.7,y:172.6},0).wait(2).to({rotation:0.6},0).wait(3).to({rotation:0.5,x:260.2,y:172.7},0).wait(3).to({rotation:0.4,y:172.8},0).wait(2).to({x:260.1},0).wait(1).to({rotation:0.3},0).wait(2).to({y:172.9},0).wait(2).to({rotation:0.2},0).wait(3).to({y:173},0).wait(1).to({rotation:0.1},0).wait(1).to({x:260,y:172.9},0).wait(1).to({y:173},0).wait(5).to({rotation:0},0).wait(3).to({y:173.1},0).wait(1).to({y:173},0).wait(4).to({regX:139,regY:106,x:300.5,y:197.1},0).wait(1));

	// c2
	this.instance_1 = new lib.cone0();
	this.instance_1.setTransform(402.3,28.4,1,1,27.2,0,0,136.6,405.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({regX:93,regY:477.5,rotation:21.9,x:295.6,y:106.8},0).wait(1).to({rotation:17.9,x:269.7,y:132.3},0).wait(1).to({rotation:14.9,x:250.2,y:151.4},0).wait(1).to({rotation:12.5,x:235.2,y:166.2},0).wait(1).to({rotation:10.6,x:223.4,y:177.9},0).wait(1).to({rotation:9.1,x:213.9,y:187.2},0).wait(1).to({rotation:7.9,x:206,y:195},0).wait(1).to({rotation:6.8,x:199.5,y:201.4},0).wait(1).to({rotation:5.9,x:194,y:206.8},0).wait(1).to({rotation:5.2,x:189.3,y:211.4},0).wait(1).to({rotation:4.5,x:185.2,y:215.4},0).wait(1).to({rotation:3.9,x:181.8,y:218.8},0).wait(1).to({rotation:3.5,x:178.8,y:221.8},0).wait(1).to({rotation:3,x:176.1,y:224.4},0).wait(1).to({rotation:2.6,x:173.7,y:226.7},0).wait(1).to({rotation:2.3,x:171.7,y:228.7},0).wait(1).to({rotation:2,x:169.9,y:230.4},0).wait(1).to({rotation:1.8,x:168.3,y:232},0).wait(1).to({rotation:1.5,x:166.8,y:233.4},0).wait(1).to({rotation:1.3,x:165.6,y:234.6},0).wait(1).to({rotation:1.1,x:164.6,y:235.7},0).wait(1).to({rotation:1,x:163.5,y:236.7},0).wait(1).to({rotation:0.8,x:162.7,y:237.5},0).wait(1).to({rotation:0.7,x:161.9,y:238.2},0).wait(1).to({rotation:0.6,x:161.2,y:238.9},0).wait(1).to({rotation:0.5,x:160.6,y:239.5},0).wait(1).to({rotation:0.4,x:160.1,y:240.1},0).wait(1).to({rotation:0.3,x:159.6,y:240.5},0).wait(1).to({x:159.2,y:240.9},0).wait(1).to({rotation:0.2,x:158.9,y:241.2},0).wait(1).to({x:158.6,y:241.5},0).wait(1).to({rotation:0.1,x:158.3,y:241.7},0).wait(1).to({x:158.1,y:242},0).wait(1).to({x:157.9,y:242.1},0).wait(1).to({rotation:0,x:157.8,y:242.3},0).wait(1).to({x:157.7,y:242.4},0).wait(1).to({x:157.6,y:242.5},0).wait(1).to({x:157.5},0).wait(2).to({regX:136.5,regY:405.4,x:201.1,y:170.4},0).wait(7).to({regX:93,regY:477.5,x:157.5,y:242.5},0).wait(1).to({y:242.6},0).wait(1).to({x:157.6},0).wait(1).to({y:242.7},0).wait(1).to({rotation:-0.1},0).wait(1).to({x:157.7,y:242.8},0).wait(1).to({y:243},0).wait(1).to({x:157.8,y:243.1},0).wait(1).to({rotation:-0.2,y:243.3},0).wait(1).to({x:157.9,y:243.5},0).wait(1).to({rotation:-0.3,x:158,y:243.7},0).wait(1).to({y:244},0).wait(1).to({rotation:-0.4,x:158.1,y:244.3},0).wait(1).to({rotation:-0.5,x:158.2,y:244.6},0).wait(1).to({x:158.3,y:244.8},0).wait(1).to({rotation:-0.6,x:158.4,y:245.1},0).wait(1).to({rotation:-0.7,x:158.6,y:245.5},0).wait(1).to({rotation:-0.8,x:158.7,y:245.8},0).wait(1).to({rotation:-0.9,x:158.8,y:246.2},0).wait(1).to({rotation:-1,x:158.9,y:246.7},0).wait(1).to({rotation:-1.1,x:159.1,y:247},0).wait(1).to({rotation:-1.2,x:159.2,y:247.4},0).wait(1).to({x:159.4,y:247.8},0).wait(1).to({rotation:-1.3,x:159.5,y:248.1},0).wait(1).to({rotation:-1.4,x:159.6,y:248.5},0).wait(1).to({rotation:-1.5,x:159.7,y:248.8},0).wait(1).to({rotation:-1.6,x:159.8,y:249.2},0).wait(1).to({x:159.9,y:249.5},0).wait(1).to({rotation:-1.7,x:160,y:249.7},0).wait(1).to({rotation:-1.8,x:160.1,y:250},0).wait(1).to({x:160.2,y:250.2},0).wait(1).to({rotation:-1.9,y:250.4},0).wait(1).to({x:160.3,y:250.6},0).wait(1).to({x:160.4,y:250.7},0).wait(1).to({rotation:-2,y:250.8},0).wait(1).to({y:250.9},0).wait(1).to({x:160.5},0).wait(1).to({regX:136.6,regY:405.3,x:201.5,y:177.4},0).wait(1).to({regX:93,regY:477.5,x:160.4,y:251.1},0).wait(2).to({y:251},0).wait(2).to({y:250.9},0).wait(2).to({y:250.8},0).wait(1).to({y:250.7},0).wait(1).to({y:250.6},0).wait(1).to({y:250.4},0).wait(1).to({y:250.3},0).wait(1).to({x:160.3,y:250.1},0).wait(1).to({y:250},0).wait(1).to({y:249.8},0).wait(1).to({y:249.6},0).wait(1).to({y:249.3},0).wait(1).to({y:249.1},0).wait(1).to({y:248.8},0).wait(1).to({y:248.6},0).wait(1).to({y:248.3},0).wait(1).to({x:160.2,y:248},0).wait(1).to({y:247.7},0).wait(1).to({y:247.4},0).wait(1).to({y:247},0).wait(1).to({y:246.7},0).wait(1).to({y:246.3},0).wait(1).to({x:160.1,y:245.9},0).wait(1).to({y:245.5},0).wait(1).to({y:245.1},0).wait(1).to({y:244.7},0).wait(1).to({y:244.3},0).wait(1).to({x:160,y:243.9},0).wait(1).to({y:243.5},0).wait(1).to({y:243.1},0).wait(1).to({y:242.7},0).wait(1).to({y:242.3},0).wait(1).to({x:159.9,y:241.9},0).wait(1).to({y:241.5},0).wait(1).to({y:241.1},0).wait(1).to({y:240.7},0).wait(1).to({y:240.4},0).wait(1).to({x:159.8,y:240},0).wait(1).to({y:239.7},0).wait(1).to({y:239.4},0).wait(1).to({y:239.1},0).wait(1).to({y:238.8},0).wait(1).to({y:238.6},0).wait(1).to({y:238.3},0).wait(1).to({x:159.7,y:238.1},0).wait(1).to({y:237.9},0).wait(1).to({y:237.7},0).wait(1).to({y:237.6},0).wait(1).to({y:237.5},0).wait(1).to({y:237.3},0).wait(2).to({y:237.2},0).wait(1).to({y:237.1},0).wait(2).to({regX:136.6,regY:405.3,x:200.8,y:163.4},0).wait(1).to({regX:93,regY:477.5,x:159.7,y:237.1},0).wait(2).to({y:237.2},0).wait(1).to({x:159.6},0).wait(1).to({rotation:-1.9,y:237.3},0).wait(2).to({x:159.5,y:237.5},0).wait(1).to({rotation:-1.8,y:237.6},0).wait(1).to({y:237.7},0).wait(1).to({rotation:-1.7,x:159.4,y:237.8},0).wait(1).to({x:159.3,y:238.1},0).wait(1).to({rotation:-1.6,x:159.2,y:238.2},0).wait(1).to({rotation:-1.5,y:238.5},0).wait(1).to({rotation:-1.4,x:159,y:238.7},0).wait(1).to({x:158.9,y:238.9},0).wait(1).to({rotation:-1.3,y:239.2},0).wait(1).to({rotation:-1.2,x:158.8,y:239.4},0).wait(1).to({rotation:-1.1,x:158.7,y:239.7},0).wait(1).to({rotation:-1,x:158.6,y:240},0).wait(1).to({rotation:-0.9,x:158.5,y:240.3},0).wait(1).to({rotation:-0.8,x:158.3,y:240.5},0).wait(1).to({rotation:-0.7,x:158.2,y:240.8},0).wait(1).to({rotation:-0.6,x:158.1,y:241},0).wait(1).to({rotation:-0.5,y:241.3},0).wait(1).to({rotation:-0.4,x:158,y:241.5},0).wait(1).to({rotation:-0.3,x:157.9,y:241.7},0).wait(1).to({x:157.8,y:241.9},0).wait(1).to({rotation:-0.2,x:157.7,y:242.1},0).wait(1).to({rotation:-0.1,y:242.2},0).wait(1).to({x:157.6,y:242.4},0).wait(1).to({y:242.5},0).wait(1).to({rotation:0,x:157.5,y:242.6},0).wait(3).to({regX:136.5,regY:405.4,x:201.1,y:170.4},0).wait(1));

	// c3
	this.instance_2 = new lib.cone1();
	this.instance_2.setTransform(358.6,96.3,1,1,37.2,0,0,137.4,95.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({regX:126.5,regY:142.5,rotation:31.8,x:290.6,y:165.3},0).wait(1).to({rotation:27.5,x:266.5,y:195.1},0).wait(1).to({rotation:24.1,x:247.6,y:218.5},0).wait(1).to({rotation:21.4,x:232.4,y:237.2},0).wait(1).to({rotation:19.2,x:220.1,y:252.5},0).wait(1).to({rotation:17.4,x:210,y:265},0).wait(1).to({rotation:15.8,x:201.5,y:275.5},0).wait(1).to({rotation:14.5,x:194.3,y:284.3},0).wait(1).to({rotation:13.4,x:188.1,y:291.9},0).wait(1).to({rotation:12.4,x:182.8,y:298.5},0).wait(1).to({rotation:11.6,x:178.1,y:304.2},0).wait(1).to({rotation:10.8,x:174.1,y:309.3},0).wait(1).to({rotation:10.2,x:170.5,y:313.7},0).wait(1).to({rotation:9.6,x:167.2,y:317.6},0).wait(1).to({rotation:9.1,x:164.4,y:321.1},0).wait(1).to({rotation:8.6,x:161.9,y:324.2},0).wait(1).to({rotation:8.2,x:159.7,y:327},0).wait(1).to({rotation:7.8,x:157.6,y:329.4},0).wait(1).to({rotation:7.5,x:155.7,y:331.7},0).wait(1).to({rotation:7.2,x:154.1,y:333.7},0).wait(1).to({rotation:6.9,x:152.6,y:335.5},0).wait(1).to({rotation:6.7,x:151.3,y:337.2},0).wait(1).to({rotation:6.5,x:150.1,y:338.6},0).wait(1).to({rotation:6.3,x:149,y:340},0).wait(1).to({rotation:6.1,x:148,y:341.2},0).wait(1).to({rotation:5.9,x:147.1,y:342.3},0).wait(1).to({rotation:5.8,x:146.3,y:343.3},0).wait(1).to({rotation:5.6,x:145.6,y:344.2},0).wait(1).to({rotation:5.5,x:144.9,y:345},0).wait(1).to({rotation:5.4,x:144.3,y:345.7},0).wait(1).to({rotation:5.3,x:143.8,y:346.4},0).wait(1).to({rotation:5.2,x:143.2,y:347},0).wait(1).to({x:142.8,y:347.5},0).wait(1).to({rotation:5.1,x:142.5,y:348},0).wait(1).to({rotation:5,x:142.1,y:348.4},0).wait(1).to({x:141.9,y:348.7},0).wait(1).to({rotation:4.9,x:141.6,y:349.1},0).wait(1).to({x:141.3,y:349.4},0).wait(1).to({rotation:4.8,x:141.1,y:349.6},0).wait(1).to({x:140.9,y:349.8},0).wait(1).to({x:140.8,y:350},0).wait(1).to({x:140.7,y:350.2},0).wait(1).to({rotation:4.7,x:140.6,y:350.3},0).wait(1).to({x:140.5},0).wait(1).to({x:140.4,y:350.4},0).wait(2).to({y:350.5},0).wait(1).to({regX:137.4,regY:95.5,x:155.1,y:304.6},0).wait(3).to({regX:126.5,regY:142.5,x:140.4,y:350.5},0).wait(5).to({rotation:4.6},0).wait(3).to({x:140.5},0).wait(2).to({rotation:4.5},0).wait(3).to({rotation:4.4,x:140.6,y:350.6},0).wait(2).to({rotation:4.3,x:140.7},0).wait(3).to({rotation:4.2},0).wait(1).to({rotation:4.1,x:140.8,y:350.7},0).wait(1).to({x:140.9,y:350.6},0).wait(1).to({rotation:4},0).wait(2).to({rotation:3.9,x:141,y:350.7},0).wait(1).to({rotation:3.8},0).wait(1).to({rotation:3.7,x:141.1},0).wait(1).to({x:141.2,y:350.8},0).wait(1).to({rotation:3.6,x:141.3,y:350.7},0).wait(1).to({rotation:3.5,y:350.8},0).wait(1).to({rotation:3.4,x:141.4},0).wait(1).to({rotation:3.3,x:141.5},0).wait(1).to({rotation:3.2},0).wait(1).to({x:141.6,y:350.9},0).wait(1).to({rotation:3.1},0).wait(1).to({rotation:3,x:141.8},0).wait(1).to({rotation:2.9},0).wait(1).to({rotation:2.8,x:141.9,y:351},0).wait(1).to({rotation:2.7,x:142},0).wait(1).to({rotation:2.6},0).wait(1).to({rotation:2.5,x:142.1},0).wait(1).to({rotation:2.4,x:142.2},0).wait(1).to({rotation:2.3,x:142.3,y:351.1},0).wait(2).to({rotation:2.2,x:142.4},0).wait(1).to({rotation:2.1},0).wait(1).to({rotation:2,x:142.5,y:351.2},0).wait(1).to({rotation:1.9,x:142.6},0).wait(1).to({x:142.7},0).wait(1).to({rotation:1.8,y:351.3},0).wait(1).to({rotation:1.7},0).wait(1).to({x:142.8},0).wait(1).to({rotation:1.6,x:142.9},0).wait(1).to({rotation:1.5},0).wait(2).to({rotation:1.4,x:143},0).wait(3).to({rotation:1.3,x:143.1},0).wait(3).to({rotation:1.2},0).wait(2).to({y:351.4},0).wait(1).to({x:143.2,y:351.3},0).wait(1).to({x:143.1},0).wait(1).to({regX:137.4,regY:95.5,x:155.1,y:304.6},0).wait(1).to({regX:126.5,regY:142.5,x:143.1,y:351.2},0).wait(1).to({x:143.2},0).wait(2).to({x:143.1},0).wait(1).to({x:143.2},0).wait(1).to({x:143.1},0).wait(1).to({rotation:1.3},0).wait(1).to({y:351.3},0).wait(1).to({y:351.2},0).wait(2).to({rotation:1.4,x:143},0).wait(3).to({rotation:1.5,x:142.9},0).wait(3).to({rotation:1.6},0).wait(1).to({x:142.8},0).wait(1).to({rotation:1.7},0).wait(1).to({rotation:1.8,y:351.1},0).wait(1).to({x:142.7},0).wait(1).to({rotation:1.9},0).wait(1).to({x:142.6},0).wait(1).to({rotation:2,x:142.5},0).wait(1).to({rotation:2.1},0).wait(1).to({rotation:2.2,x:142.4,y:351},0).wait(1).to({x:142.3},0).wait(1).to({rotation:2.3},0).wait(1).to({rotation:2.4,x:142.2},0).wait(1).to({rotation:2.5,y:350.9},0).wait(1).to({rotation:2.6,x:142.1},0).wait(1).to({x:142},0).wait(1).to({rotation:2.7,x:141.9},0).wait(1).to({rotation:2.8,x:141.8},0).wait(1).to({rotation:2.9,y:350.8},0).wait(1).to({rotation:3,x:141.7},0).wait(1).to({rotation:3.1,x:141.6},0).wait(1).to({rotation:3.2},0).wait(1).to({rotation:3.3,x:141.5,y:350.7},0).wait(1).to({rotation:3.4,x:141.4},0).wait(1).to({rotation:3.5,x:141.3},0).wait(1).to({rotation:3.6},0).wait(1).to({x:141.2},0).wait(1).to({rotation:3.7,y:350.6},0).wait(1).to({rotation:3.8,x:141.1},0).wait(1).to({rotation:3.9,x:141},0).wait(1).to({rotation:4},0).wait(1).to({x:140.9},0).wait(1).to({rotation:4.1,y:350.5},0).wait(1).to({rotation:4.2,x:140.8},0).wait(1).to({x:140.7},0).wait(1).to({rotation:4.3},0).wait(1).to({rotation:4.4},0).wait(1).to({x:140.6},0).wait(1).to({rotation:4.5,y:350.4},0).wait(1).to({x:140.5},0).wait(2).to({rotation:4.6},0).wait(2).to({x:140.4},0).wait(2).to({rotation:4.7},0).wait(4).to({regX:137.4,regY:95.5,x:155.1,y:304.6},0).wait(1));

	// c4
	this.c4 = new lib.cone2copy();
	this.c4.setTransform(318.7,251.1,1,1,38.7,0,0,248.7,69.1);

	this.timeline.addTween(cjs.Tween.get(this.c4).wait(20).to({regX:288.6,regY:109.8,rotation:37.5,x:307.5,y:307.7},0).wait(1).to({rotation:36.7,x:295.7,y:307.6},0).wait(1).to({rotation:36.1,x:287.2,y:307.5},0).wait(1).to({rotation:35.7,x:280.9},0).wait(1).to({rotation:35.3,x:276.1,y:307.4},0).wait(1).to({rotation:35.1,x:272.2,y:307.3},0).wait(1).to({rotation:34.8,x:269.1},0).wait(1).to({rotation:34.7,x:266.6},0).wait(1).to({rotation:34.5,x:264.5,y:307.2},0).wait(1).to({rotation:34.4,x:262.7},0).wait(1).to({rotation:34.3,x:261.3},0).wait(1).to({rotation:34.2,x:260},0).wait(1).to({rotation:34.1,x:259},0).wait(1).to({x:258.1},0).wait(1).to({rotation:34,x:257.3},0).wait(1).to({x:256.6},0).wait(1).to({rotation:33.9,x:256},0).wait(1).to({x:255.5},0).wait(1).to({x:255.1,y:307.1},0).wait(1).to({rotation:33.8,x:254.7},0).wait(1).to({x:254.4},0).wait(1).to({x:254.2,y:307.2},0).wait(1).to({x:253.9,y:307.1},0).wait(1).to({x:253.7,y:307.2},0).wait(1).to({x:253.6,y:307.1},0).wait(1).to({rotation:33.7,x:253.4,y:307.2},0).wait(1).to({x:253.3,y:307.1},0).wait(1).to({x:253.2},0).wait(2).to({x:253.1},0).wait(2).to({regX:248.6,regY:69.1,x:242.5,y:251.1},0).wait(2).to({regX:288.6,regY:109.8,x:253.2,y:307.1},0).wait(4).to({x:253.1,y:307.2},0).wait(2).to({y:307.1},0).wait(1).to({rotation:33.8,y:307.2},0).wait(1).to({x:253.2},0).wait(1).to({x:253.1},0).wait(2).to({y:307.1},0).wait(1).to({y:307.2},0).wait(4).to({x:253},0).wait(1).to({rotation:33.9},0).wait(2).to({x:253.1},0).wait(1).to({x:253},0).wait(2).to({x:252.9},0).wait(1).to({rotation:34},0).wait(4).to({rotation:34.1,x:252.8},0).wait(1).to({x:252.9},0).wait(1).to({x:252.8},0).wait(2).to({rotation:34.2,x:252.7},0).wait(1).to({y:307.3},0).wait(1).to({y:307.2},0).wait(1).to({y:307.3},0).wait(1).to({rotation:34.3,x:252.6},0).wait(2).to({x:252.5,y:307.2},0).wait(1).to({rotation:34.4,y:307.3},0).wait(3).to({rotation:34.5},0).wait(1).to({x:252.4},0).wait(2).to({rotation:34.6},0).wait(1).to({x:252.3},0).wait(1).to({y:307.4},0).wait(1).to({rotation:34.7},0).wait(2).to({x:252.2},0).wait(1).to({rotation:34.8},0).wait(1).to({x:252.1},0).wait(1).to({rotation:34.9},0).wait(2).to({x:252},0).wait(1).to({rotation:35},0).wait(2).to({x:251.9},0).wait(1).to({rotation:35.1,y:307.5},0).wait(1).to({y:307.4},0).wait(2).to({x:251.8,y:307.5},0).wait(1).to({rotation:35.2},0).wait(3).to({x:251.7},0).wait(1).to({rotation:35.3},0).wait(3).to({x:251.6},0).wait(1).to({rotation:35.4},0).wait(4).to({x:251.5},0).wait(2).to({x:251.6},0).wait(1).to({rotation:35.5,x:251.5},0).wait(8).to({regX:248.7,regY:69.1,x:242.6,y:251.2},0).wait(1).to({regX:288.6,regY:109.8,x:251.4,y:307.5},0).wait(2).to({x:251.5},0).wait(3).to({rotation:35.4},0).wait(3).to({x:251.6},0).wait(1).to({rotation:35.3,y:307.4},0).wait(1).to({y:307.5},0).wait(1).to({x:251.7},0).wait(1).to({rotation:35.2,y:307.4},0).wait(2).to({x:251.8},0).wait(1).to({rotation:35.1},0).wait(2).to({rotation:35,x:251.9},0).wait(1).to({x:252},0).wait(1).to({rotation:34.9},0).wait(1).to({rotation:34.8,y:307.3},0).wait(1).to({x:252.1,y:307.4},0).wait(1).to({rotation:34.7,x:252.2,y:307.3},0).wait(1).to({rotation:34.6,x:252.3},0).wait(2).to({rotation:34.5,x:252.4},0).wait(1).to({rotation:34.4,x:252.5},0).wait(2).to({rotation:34.3,x:252.6},0).wait(1).to({y:307.2},0).wait(1).to({rotation:34.2,x:252.7},0).wait(1).to({rotation:34.1},0).wait(1).to({x:252.8},0).wait(1).to({rotation:34},0).wait(1).to({x:252.9},0).wait(1).to({rotation:33.9},0).wait(2).to({x:253},0).wait(1).to({rotation:33.8,y:307.1},0).wait(1).to({y:307.2},0).wait(1).to({x:253.1,y:307.1},0).wait(2).to({rotation:33.7},0).wait(3).to({regX:248.6,regY:69.1,x:242.5,y:251.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.3,-394.5,1024.3,1143.9);


(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"repeat":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_166 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(166).call(this.frame_166).wait(1));

	// Layer 1
	this.animation = new lib.animation2();
	this.animation.setTransform(308.1,215.1,1,1,0,0,0,308.1,215.1);

	this.timeline.addTween(cjs.Tween.get(this.animation).wait(7).to({regX:317,regY:176.1,x:317,y:176.1},0).wait(2).to({x:317.1},0).wait(1).to({x:317},0).wait(3).to({rotation:-0.1},0).wait(5).to({rotation:-0.2},0).wait(1).to({x:316.9},0).wait(2).to({rotation:-0.3},0).wait(1).to({x:316.8},0).wait(1).to({rotation:-0.4},0).wait(2).to({y:176},0).wait(1).to({rotation:-0.5,x:316.7,y:176.1},0).wait(1).to({rotation:-0.6},0).wait(1).to({x:316.6},0).wait(1).to({rotation:-0.7,y:176},0).wait(1).to({x:316.5},0).wait(1).to({rotation:-0.8},0).wait(2).to({rotation:-0.9,x:316.4},0).wait(1).to({rotation:-1},0).wait(1).to({x:316.3},0).wait(1).to({rotation:-1.1},0).wait(1).to({rotation:-1.2,y:175.9},0).wait(1).to({x:316.2},0).wait(1).to({rotation:-1.3},0).wait(1).to({rotation:-1.4,x:316.1},0).wait(1).to({y:176},0).wait(1).to({rotation:-1.5,x:316},0).wait(2).to({rotation:-1.6,x:315.9},0).wait(1).to({y:175.9},0).wait(1).to({rotation:-1.7},0).wait(2).to({rotation:-1.8,x:315.8},0).wait(2).to({rotation:-1.9},0).wait(2).to({x:315.7},0).wait(2).to({rotation:-2},0).wait(5).to({regX:308,regY:215.2,x:308.1,y:215.2},0).wait(1).to({regX:317,regY:176.1,x:315.8,y:175.8},0).wait(1).to({y:175.9},0).wait(2).to({y:175.8},0).wait(1).to({y:175.9},0).wait(1).to({rotation:-1.9},0).wait(1).to({y:175.8},0).wait(2).to({x:315.9,y:175.9},0).wait(1).to({rotation:-1.8,y:175.8},0).wait(1).to({x:316,y:175.9},0).wait(1).to({rotation:-1.7,y:175.8},0).wait(2).to({rotation:-1.6,y:175.9},0).wait(1).to({x:316.1},0).wait(1).to({rotation:-1.5},0).wait(2).to({rotation:-1.4,x:316.2},0).wait(1).to({rotation:-1.3},0).wait(1).to({x:316.3},0).wait(1).to({rotation:-1.2},0).wait(1).to({rotation:-1.1,x:316.4},0).wait(1).to({rotation:-1,x:316.5},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:-0.8,x:316.6,y:176},0).wait(1).to({rotation:-0.7,x:316.7},0).wait(1).to({rotation:-0.6},0).wait(1).to({rotation:-0.5,x:316.8},0).wait(1).to({rotation:-0.4,x:316.9},0).wait(1).to({rotation:-0.3,x:317,y:176.1},0).wait(1).to({rotation:-0.2},0).wait(1).to({rotation:0,x:317.1},0).wait(1).to({rotation:0.1,x:317.2,y:176.2},0).wait(1).to({rotation:0.2,x:317.3},0).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.5,x:317.4,y:176.3},0).wait(1).to({rotation:0.6,x:317.5},0).wait(1).to({rotation:0.7,x:317.6},0).wait(1).to({rotation:0.8,x:317.7},0).wait(1).to({rotation:1,x:317.8},0).wait(1).to({rotation:1.1},0).wait(1).to({rotation:1.2,x:317.9,y:176.4},0).wait(1).to({rotation:1.3,x:318},0).wait(1).to({rotation:1.5,x:318.1},0).wait(1).to({rotation:1.6},0).wait(1).to({rotation:1.7,x:318.2},0).wait(1).to({rotation:1.8,x:318.3},0).wait(1).to({rotation:1.9,x:318.4,y:176.5},0).wait(1).to({rotation:2,x:318.5},0).wait(1).to({rotation:2.1},0).wait(1).to({rotation:2.2,x:318.6},0).wait(1).to({rotation:2.3,x:318.7},0).wait(1).to({rotation:2.4,y:176.6},0).wait(1).to({rotation:2.5,x:318.8},0).wait(2).to({rotation:2.6,x:318.9},0).wait(1).to({rotation:2.7},0).wait(1).to({y:176.7},0).wait(1).to({rotation:2.8,x:319},0).wait(2).to({rotation:2.9,x:319.1,y:176.6},0).wait(3).to({rotation:3,y:176.7},0).wait(4).to({regX:308.1,regY:215.1,x:308.2,y:215.2},0).wait(1).to({regX:317,regY:176.1,x:319.1,y:176.7},0).wait(1).to({x:319},0).wait(2).to({rotation:2.9},0).wait(3).to({rotation:2.8},0).wait(1).to({x:318.9},0).wait(1).to({rotation:2.7},0).wait(1).to({x:318.8},0).wait(1).to({rotation:2.6},0).wait(1).to({rotation:2.5,y:176.6},0).wait(1).to({rotation:2.4,x:318.7},0).wait(1).to({rotation:2.3,x:318.6},0).wait(1).to({rotation:2.2},0).wait(1).to({rotation:2.1,x:318.4,y:176.5},0).wait(1).to({rotation:2},0).wait(1).to({rotation:1.9,x:318.3},0).wait(1).to({rotation:1.7},0).wait(1).to({rotation:1.6,x:318.1,y:176.4},0).wait(1).to({rotation:1.5},0).wait(1).to({rotation:1.3,x:318},0).wait(1).to({rotation:1.2,x:317.8},0).wait(1).to({rotation:1.1,y:176.3},0).wait(1).to({rotation:1,x:317.7},0).wait(1).to({rotation:0.8,x:317.6},0).wait(1).to({rotation:0.7,x:317.5},0).wait(1).to({rotation:0.6},0).wait(1).to({rotation:0.5,x:317.4,y:176.2},0).wait(1).to({rotation:0.4,x:317.3},0).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.2,x:317.2},0).wait(2).to({rotation:0.1,x:317.1},0).wait(2).to({rotation:0},0).wait(1).to({y:176.1},0).wait(2).to({regX:308.1,regY:215.1,x:308.1,y:215.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.3,-394.5,1024.3,1143.9);


// stage content:



(lib.brewingright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var self = this;
		
		this.areWeReady = true;
		
		this.start = function() {
			self.animation.play();
			self.animation.animation.play();
			self.animation.animation.c0.play();
			self.animation.animation.c4.play();
		}
		
		this.pause = function() {
			self.animation.stop();
			self.animation.animation.stop();
			self.animation.animation.c0.stop();
			self.animation.animation.c4.stop();
		}
		/*
		setTimeout(function() {
			self.start();
		}, 500);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// spacers
	this.instance = new lib.spacerpng();
	this.instance.setTransform(21,-40);

	this.instance_1 = new lib.spacerjpg();
	this.instance_1.setTransform(0,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// animation
	this.animation = new lib.animation();
	this.animation.setTransform(241.6,359.2,1,1,0,0,0,113.1,262.1);

	this.timeline.addTween(cjs.Tween.get(this.animation).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119.2,27.5,1024.3,1143.9);

})(window.brewingrightLib = window.brewingrightLib ||{}, window.brewingrightImages = window.brewingrightImages ||{}, createjs = createjs||{}, window.brewingrightSs = window.brewingrightSs ||{});