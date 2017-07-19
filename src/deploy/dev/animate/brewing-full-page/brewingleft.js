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
		{src:"/Assets/Images/touts/brewing-fullpage/spacerjpg.jpg?1477074713656", id:"spacerjpg"},
		{src:"/Assets/Images/touts/brewing-fullpage/brewingleft_atlas_P_.png?1477074713653", id:"brewingleft_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"brewingleft_atlas_P_", frames: [[0,0,458,558],[0,560,10,10]]}
];


// symbols:



(lib.flowersuse = function() {
	this.spriteSheet = ss["brewingleft_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.spacerjpg = function() {
	this.initialize(img.spacerjpg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.spacerpng = function() {
	this.spriteSheet = ss["brewingleft_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.flowersSPRITE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flowersuse();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,458,558);


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


(lib.l3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1zqVMAoogEyIC/ZdMgonAEyg");
	mask.setTransform(151.5,361.4);

	// Layer 3
	this.instance = new lib.flowersSPRITE();
	this.instance.setTransform(235.5,279.1,1,1,-6.7,0,0,229.1,279);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.8,264.5,279.4,193.8);


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


(lib.frontLeaf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{replay:6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_100 = function() {
		this.gotoAndPlay("replay");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100).call(this.frame_100).wait(1));

	// Layer 1
	this.instance = new lib.l4();
	this.instance.setTransform(114,64.5,1,1,0,0,0,388,397.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({regX:363.8,regY:434.7,x:89.8,y:101.3},0).wait(1).to({y:101.4},0).wait(1).to({x:89.7},0).wait(2).to({y:101.5},0).wait(2).to({y:101.6},0).wait(1).to({x:89.6},0).wait(1).to({y:101.7},0).wait(2).to({x:89.5,y:101.8},0).wait(1).to({y:101.9},0).wait(2).to({x:89.4,y:102},0).wait(1).to({y:102.1},0).wait(1).to({y:102.2},0).wait(1).to({x:89.3,y:102.3},0).wait(1).to({y:102.4},0).wait(1).to({x:89.2,y:102.5},0).wait(1).to({y:102.6},0).wait(1).to({x:89.1,y:102.7},0).wait(1).to({y:102.8},0).wait(1).to({x:89,y:102.9},0).wait(1).to({x:88.9,y:103},0).wait(1).to({y:103.1},0).wait(1).to({x:88.8,y:103.2},0).wait(1).to({y:103.3},0).wait(1).to({x:88.7,y:103.4},0).wait(1).to({y:103.6},0).wait(1).to({x:88.6,y:103.7},0).wait(1).to({y:103.8},0).wait(1).to({x:88.5,y:103.9},0).wait(2).to({x:88.4,y:104},0).wait(1).to({y:104.1},0).wait(1).to({y:104.2},0).wait(1).to({x:88.3,y:104.3},0).wait(2).to({x:88.2,y:104.4},0).wait(1).to({y:104.5},0).wait(2).to({y:104.6},0).wait(1).to({x:88.1},0).wait(1).to({y:104.7},0).wait(2).to({y:104.8},0).wait(1).to({x:88},0).wait(2).to({y:104.9},0).wait(1).to({regX:388,regY:397.9,x:112.2,y:68.1},0).to({x:113.5,y:65.4},24).to({x:114,y:64.5},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274,-333.4,458,558);


(lib.l32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{repeat:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_224 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(224).call(this.frame_224).wait(1));

	// Layer 1
	this.instance = new lib.l3();
	this.instance.setTransform(271,42,1,1,0,0,0,261,317);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regX:151.4,regY:361.4,x:161.4,y:86.4},0).wait(2).to({rotation:0.1,y:86.3},0).wait(1).to({x:161.3},0).wait(1).to({y:86.2},0).wait(2).to({rotation:0.2,y:86.1},0).wait(2).to({y:86},0).wait(1).to({rotation:0.3,x:161.2,y:85.9},0).wait(2).to({y:85.8},0).wait(1).to({rotation:0.4,y:85.7},0).wait(1).to({x:161.1},0).wait(1).to({rotation:0.5,x:161,y:85.6},0).wait(1).to({y:85.5},0).wait(1).to({rotation:0.6,y:85.4},0).wait(1).to({x:160.9,y:85.3},0).wait(1).to({rotation:0.7,y:85.2},0).wait(1).to({y:85.1},0).wait(1).to({rotation:0.8,x:160.8,y:85},0).wait(1).to({rotation:0.9,y:84.8},0).wait(1).to({y:84.7},0).wait(1).to({rotation:1,x:160.7,y:84.6},0).wait(1).to({x:160.6,y:84.5},0).wait(1).to({rotation:1.1,y:84.4},0).wait(1).to({rotation:1.2,x:160.5,y:84.2},0).wait(1).to({y:84.1},0).wait(1).to({rotation:1.3,y:84},0).wait(1).to({x:160.4,y:83.9},0).wait(1).to({rotation:1.4,y:83.8},0).wait(1).to({rotation:1.5,y:83.7},0).wait(1).to({x:160.3,y:83.6},0).wait(1).to({rotation:1.6,y:83.4},0).wait(2).to({rotation:1.7,x:160.2,y:83.3},0).wait(1).to({y:83.2},0).wait(1).to({rotation:1.8,y:83},0).wait(1).to({x:160.1},0).wait(1).to({rotation:1.9,y:82.9},0).wait(1).to({x:160,y:82.8},0).wait(1).to({rotation:2,y:82.7},0).wait(2).to({y:82.6},0).wait(1).to({rotation:2.1},0).wait(1).to({x:159.9,y:82.5},0).wait(1).to({y:82.4},0).wait(1).to({rotation:2.2},0).wait(1).to({y:82.3},0).wait(1).to({y:82.2},0).wait(1).to({rotation:2.3,y:82.1},0).wait(3).to({x:159.7,y:82},0).wait(1).to({rotation:2.4,x:159.8},0).wait(2).to({x:159.7,y:81.9},0).wait(1).to({regX:261.1,regY:316.9,x:271.2,y:42.1},0).wait(1).to({regX:151.4,regY:361.4,rotation:2.3,x:159.8,y:82.3},0).wait(1).to({rotation:2.1,x:159.9,y:82.6},0).wait(1).to({rotation:1.9,x:160,y:82.9},0).wait(1).to({rotation:1.7,x:160.2,y:83.3},0).wait(1).to({rotation:1.5,x:160.3,y:83.6},0).wait(1).to({rotation:1.3,x:160.4,y:84.1},0).wait(1).to({rotation:1.1,x:160.6,y:84.6},0).wait(1).to({rotation:0.8,x:160.8,y:85},0).wait(1).to({rotation:0.6,x:161,y:85.5},0).wait(1).to({rotation:0.3,x:161.2,y:86.1},0).wait(1).to({rotation:0,x:161.5,y:86.7},0).wait(1).to({rotation:-0.3,x:161.7,y:87.3},0).wait(1).to({rotation:-0.7,x:162,y:87.9},0).wait(1).to({rotation:-1,x:162.2,y:88.6},0).wait(1).to({rotation:-1.3,x:162.5,y:89.2},0).wait(1).to({rotation:-1.7,x:162.8,y:89.8},0).wait(1).to({rotation:-2,x:163,y:90.3},0).wait(1).to({rotation:-2.2,x:163.3,y:90.8},0).wait(1).to({rotation:-2.4,x:163.4,y:91.2},0).wait(1).to({rotation:-2.7,x:163.6,y:91.6},0).wait(1).to({rotation:-2.8,x:163.8,y:91.9},0).wait(1).to({rotation:-3,x:163.9,y:92.3},0).wait(1).to({rotation:-3.1,x:164.1,y:92.5},0).wait(1).to({rotation:-3.3,x:164.2,y:92.7},0).wait(1).to({rotation:-3.4,x:164.3,y:93},0).wait(1).to({rotation:-3.5,x:164.4,y:93.2},0).wait(2).to({rotation:-3.6,x:164.5,y:93.4},0).wait(1).to({rotation:-3.7,y:93.5},0).wait(1).to({x:164.6,y:93.6},0).wait(1).to({regX:260.9,regY:316.9,rotation:-3.8,x:271,y:42},0).wait(1).to({regX:151.4,regY:361.4,rotation:-3.7,x:164.7,y:93.6},0).wait(1).to({y:93.5},0).wait(1).to({x:164.6},0).wait(1).to({rotation:-3.6,y:93.4},0).wait(2).to({x:164.5,y:93.3},0).wait(1).to({rotation:-3.5,y:93.2},0).wait(1).to({x:164.4},0).wait(1).to({y:93.1},0).wait(1).to({rotation:-3.4,y:93},0).wait(1).to({y:92.9},0).wait(1).to({rotation:-3.3,x:164.3,y:92.8},0).wait(2).to({rotation:-3.2,x:164.2,y:92.7},0).wait(1).to({y:92.6},0).wait(1).to({rotation:-3.1,x:164.1,y:92.5},0).wait(1).to({y:92.4},0).wait(1).to({rotation:-3,y:92.3},0).wait(1).to({x:164,y:92.1},0).wait(1).to({rotation:-2.9,x:163.9},0).wait(1).to({rotation:-2.8,y:91.9},0).wait(1).to({x:163.8,y:91.8},0).wait(1).to({rotation:-2.7,y:91.7},0).wait(1).to({rotation:-2.6,x:163.7,y:91.5},0).wait(1).to({y:91.4},0).wait(1).to({rotation:-2.5,x:163.6,y:91.3},0).wait(1).to({rotation:-2.4,x:163.5,y:91.1},0).wait(1).to({rotation:-2.3,y:91},0).wait(1).to({x:163.4,y:90.8},0).wait(1).to({rotation:-2.2,y:90.7},0).wait(1).to({rotation:-2.1,x:163.3,y:90.5},0).wait(1).to({rotation:-2,x:163.2,y:90.4},0).wait(1).to({rotation:-1.9,x:163.1,y:90.2},0).wait(1).to({rotation:-1.8,x:163,y:90},0).wait(1).to({y:89.9},0).wait(1).to({rotation:-1.7,x:162.9,y:89.7},0).wait(1).to({rotation:-1.6,x:162.8,y:89.6},0).wait(1).to({rotation:-1.5,y:89.4},0).wait(1).to({x:162.7,y:89.3},0).wait(1).to({rotation:-1.4,x:162.6,y:89.2},0).wait(1).to({rotation:-1.3,y:89},0).wait(1).to({rotation:-1.2,x:162.5,y:88.9},0).wait(1).to({x:162.4,y:88.8},0).wait(1).to({rotation:-1.1,y:88.6},0).wait(1).to({rotation:-1,x:162.3},0).wait(1).to({x:162.4,y:88.4},0).wait(1).to({rotation:-0.9,x:162.3,y:88.3},0).wait(1).to({y:88.2},0).wait(1).to({rotation:-0.8,x:162.2,y:88.1},0).wait(1).to({x:162.1,y:88},0).wait(1).to({rotation:-0.7,y:87.9},0).wait(1).to({y:87.8},0).wait(1).to({rotation:-0.6,x:162},0).wait(1).to({y:87.6},0).wait(1).to({rotation:-0.5,y:87.5},0).wait(2).to({x:161.9,y:87.4},0).wait(1).to({rotation:-0.4,y:87.3},0).wait(1).to({y:87.2},0).wait(1).to({rotation:-0.3,x:161.8},0).wait(1).to({y:87.1},0).wait(1).to({y:87},0).wait(1).to({regX:261.1,regY:316.9,rotation:-0.2,x:271.2,y:42.1},0).wait(1).to({regX:151.4,regY:361.4,x:161.7,y:87},0).wait(1).to({x:161.6},0).wait(11).to({y:86.9},0).wait(2).to({y:87},0).wait(1).to({y:86.9},0).wait(4).to({x:161.5},0).wait(1).to({x:161.6},0).wait(1).to({x:161.5},0).wait(1).to({x:161.6},0).wait(1).to({x:161.5},0).wait(2).to({rotation:-0.1,y:86.8},0).wait(8).to({y:86.7},0).wait(1).to({y:86.8},0).wait(1).to({y:86.7},0).wait(1).to({x:161.4},0).wait(1).to({x:161.5},0).wait(1).to({x:161.4},0).wait(1).to({x:161.5},0).wait(1).to({x:161.4},0).wait(6).to({y:86.6},0).wait(1).to({rotation:0},0).wait(1).to({y:86.7},0).wait(1).to({y:86.6},0).wait(13).to({x:161.3,y:86.5},0).wait(1).to({x:161.4,y:86.6},0).wait(3).to({x:161.3},0).wait(2).to({regX:261,regY:317,x:271,y:42},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-299.8,520.1,607.7);


(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"repeat":57});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_230 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(230).call(this.frame_230).wait(1));

	// leaf front
	this.c0 = new lib.frontLeaf();
	this.c0.setTransform(132.3,120,1,1,-25.4,0,0,115,59.6);

	this.timeline.addTween(cjs.Tween.get(this.c0).wait(10).to({x:127.8},0).wait(1).to({regX:88.8,regY:103.1,rotation:-20.9,x:113.4,y:170.3},0).wait(1).to({rotation:-16.9,x:105.2,y:169.9},0).wait(1).to({rotation:-13.7,x:98.5,y:169.4},0).wait(1).to({rotation:-11.2,x:93.3,y:168.8},0).wait(1).to({rotation:-9.1,x:89.2,y:168.4},0).wait(1).to({rotation:-7.5,x:86,y:168},0).wait(1).to({rotation:-6.3,x:83.4,y:167.6},0).wait(1).to({rotation:-5.2,x:81.4,y:167.3},0).wait(1).to({rotation:-4.4,x:79.7,y:167},0).wait(1).to({rotation:-3.7,x:78.3,y:166.8},0).wait(1).to({rotation:-3.1,x:77.1,y:166.6},0).wait(1).to({rotation:-2.7,x:76.2,y:166.5},0).wait(1).to({rotation:-2.2,x:75.4,y:166.3},0).wait(1).to({rotation:-1.9,x:74.6,y:166.2},0).wait(1).to({rotation:-1.6,x:74.1,y:166.1},0).wait(1).to({rotation:-1.4,x:73.6,y:166},0).wait(1).to({rotation:-1.1,x:73.2},0).wait(1).to({rotation:-1,x:72.8,y:165.8},0).wait(1).to({rotation:-0.8,x:72.5},0).wait(1).to({rotation:-0.7,x:72.2},0).wait(1).to({rotation:-0.5,x:71.9,y:165.7},0).wait(1).to({rotation:-0.4,x:71.8},0).wait(1).to({x:71.6,y:165.6},0).wait(1).to({rotation:-0.3,x:71.4},0).wait(1).to({rotation:-0.2,x:71.3},0).wait(1).to({x:71.2},0).wait(1).to({rotation:-0.1,y:165.5},0).wait(1).to({x:71.1},0).wait(1).to({x:71},0).wait(1).to({rotation:0},0).wait(3).to({x:70.9},0).wait(2).to({regX:115,regY:59.5,x:97.1,y:122},0).wait(13).to({regX:88.8,regY:103.1,x:70.9,y:165.6},0).wait(2).to({rotation:-0.1,x:71,y:165.7},0).wait(1).to({rotation:-0.2,y:165.8},0).wait(1).to({rotation:-0.3,x:71.1,y:165.9},0).wait(1).to({rotation:-0.4,x:71.2,y:166.1},0).wait(1).to({rotation:-0.5,x:71.3,y:166.3},0).wait(1).to({rotation:-0.7,x:71.4,y:166.5},0).wait(1).to({rotation:-0.9,x:71.6,y:166.7},0).wait(1).to({rotation:-1.1,x:71.8,y:167.1},0).wait(1).to({rotation:-1.4,x:71.9,y:167.3},0).wait(1).to({rotation:-1.6,x:72.1,y:167.7},0).wait(1).to({rotation:-1.9,x:72.4,y:168.1},0).wait(1).to({rotation:-2.2,x:72.7,y:168.5},0).wait(1).to({rotation:-2.6,x:72.9,y:169},0).wait(1).to({rotation:-2.9,x:73.2,y:169.4},0).wait(1).to({rotation:-3.3,x:73.5,y:169.9},0).wait(1).to({rotation:-3.7,x:73.8,y:170.4},0).wait(1).to({rotation:-4.1,x:74.1,y:170.9},0).wait(1).to({rotation:-4.4,x:74.4,y:171.4},0).wait(1).to({rotation:-4.8,x:74.8,y:171.9},0).wait(1).to({rotation:-5.2,x:75.1,y:172.4},0).wait(1).to({rotation:-5.6,x:75.4,y:172.9},0).wait(1).to({rotation:-5.9,x:75.6,y:173.4},0).wait(1).to({rotation:-6.3,x:75.9,y:173.8},0).wait(1).to({rotation:-6.6,x:76.1,y:174.2},0).wait(1).to({rotation:-6.9,x:76.4,y:174.5},0).wait(1).to({rotation:-7.1,x:76.6,y:174.8},0).wait(1).to({rotation:-7.3,x:76.8,y:175.1},0).wait(1).to({rotation:-7.5,x:76.9,y:175.3},0).wait(1).to({rotation:-7.6,x:77,y:175.5},0).wait(1).to({rotation:-7.8,x:77.1,y:175.6},0).wait(1).to({x:77.2,y:175.8},0).wait(1).to({rotation:-7.9},0).wait(1).to({regX:114.9,regY:59.6,x:97.2,y:129.1},0).wait(1).to({regX:88.8,regY:103.1,x:77.3,y:175.7},0).wait(2).to({y:175.6},0).wait(1).to({y:175.5},0).wait(2).to({y:175.4},0).wait(1).to({y:175.2},0).wait(1).to({rotation:-7.8,y:175.1},0).wait(1).to({y:174.9},0).wait(1).to({y:174.7},0).wait(1).to({y:174.5},0).wait(1).to({x:77.2,y:174.2},0).wait(1).to({rotation:-7.7,y:173.9},0).wait(1).to({y:173.6},0).wait(1).to({y:173.4},0).wait(1).to({rotation:-7.6,x:77.1,y:173},0).wait(1).to({y:172.6},0).wait(1).to({y:172.3},0).wait(1).to({rotation:-7.5,y:171.8},0).wait(1).to({x:77,y:171.3},0).wait(1).to({rotation:-7.4,y:171},0).wait(1).to({x:76.9,y:170.4},0).wait(1).to({rotation:-7.3,y:169.9},0).wait(1).to({y:169.3},0).wait(1).to({rotation:-7.2,x:76.8,y:168.8},0).wait(1).to({y:168.3},0).wait(1).to({rotation:-7.1,x:76.7,y:167.7},0).wait(1).to({rotation:-7,y:167.1},0).wait(1).to({x:76.6,y:166.4},0).wait(1).to({rotation:-6.9,y:165.8},0).wait(1).to({rotation:-6.8,y:165.1},0).wait(1).to({x:76.5,y:164.5},0).wait(1).to({rotation:-6.7,y:163.8},0).wait(1).to({rotation:-6.6,x:76.4,y:163.1},0).wait(1).to({y:162.4},0).wait(1).to({rotation:-6.5,x:76.3,y:161.8},0).wait(1).to({rotation:-6.4,y:161.1},0).wait(1).to({x:76.2,y:160.4},0).wait(1).to({rotation:-6.3,x:76.1,y:159.7},0).wait(1).to({rotation:-6.2,y:159},0).wait(1).to({y:158.4},0).wait(1).to({rotation:-6.1,x:76,y:157.7},0).wait(1).to({rotation:-6,y:157.1},0).wait(1).to({x:75.9,y:156.6},0).wait(1).to({rotation:-5.9,y:156},0).wait(1).to({y:155.4},0).wait(1).to({rotation:-5.8,x:75.8,y:154.9},0).wait(1).to({y:154.4},0).wait(1).to({rotation:-5.7,y:154},0).wait(1).to({x:75.7,y:153.5},0).wait(1).to({rotation:-5.6,y:153.2},0).wait(1).to({x:75.6,y:152.8},0).wait(1).to({x:75.7,y:152.4},0).wait(1).to({rotation:-5.5,x:75.6,y:152.1},0).wait(1).to({y:151.8},0).wait(1).to({y:151.6},0).wait(1).to({y:151.5},0).wait(1).to({rotation:-5.4,y:151.3},0).wait(1).to({x:75.5,y:151.1},0).wait(1).to({y:151},0).wait(1).to({y:150.9},0).wait(2).to({regX:114.9,regY:59.6,x:97.4,y:105.1},0).wait(1).to({regX:88.8,regY:103.1,x:75.5,y:150.9},0).wait(5).to({x:75.4,y:151},0).wait(1).to({rotation:-5.3,x:75.5},0).wait(1).to({x:75.4,y:151.1},0).wait(2).to({y:151.2},0).wait(1).to({rotation:-5.2,y:151.3},0).wait(1).to({x:75.3,y:151.4},0).wait(1).to({rotation:-5.1,y:151.6},0).wait(1).to({x:75.2,y:151.7},0).wait(1).to({y:151.8},0).wait(1).to({rotation:-5,y:151.9},0).wait(1).to({rotation:-4.9,x:75.1,y:152.1},0).wait(1).to({y:152.2},0).wait(1).to({rotation:-4.8,x:75,y:152.5},0).wait(1).to({y:152.6},0).wait(1).to({rotation:-4.7,x:74.9,y:152.8},0).wait(1).to({rotation:-4.6,x:74.8,y:153},0).wait(1).to({rotation:-4.5,y:153.2},0).wait(1).to({x:74.7,y:153.4},0).wait(1).to({rotation:-4.4,x:74.6,y:153.7},0).wait(1).to({rotation:-4.3,y:153.9},0).wait(1).to({rotation:-4.2,x:74.4,y:154.1},0).wait(1).to({rotation:-4.1,y:154.4},0).wait(1).to({rotation:-4,x:74.3,y:154.7},0).wait(1).to({rotation:-3.9,x:74.2,y:155},0).wait(1).to({rotation:-3.8,x:74.1,y:155.2},0).wait(1).to({rotation:-3.7,x:74,y:155.5},0).wait(1).to({rotation:-3.6,y:155.9},0).wait(1).to({rotation:-3.4,x:73.9,y:156.1},0).wait(1).to({rotation:-3.3,x:73.8,y:156.5},0).wait(1).to({rotation:-3.2,x:73.7,y:156.8},0).wait(1).to({rotation:-3.1,x:73.5,y:157.1},0).wait(1).to({rotation:-3,y:157.4},0).wait(1).to({rotation:-2.8,x:73.3,y:157.8},0).wait(1).to({rotation:-2.7,y:158.1},0).wait(1).to({rotation:-2.6,x:73.1,y:158.5},0).wait(1).to({rotation:-2.5,x:73,y:158.8},0).wait(1).to({rotation:-2.3,x:72.9,y:159.1},0).wait(1).to({rotation:-2.2,y:159.4},0).wait(1).to({rotation:-2.1,x:72.7,y:159.8},0).wait(1).to({rotation:-2,x:72.6,y:160.1},0).wait(1).to({rotation:-1.9,x:72.5,y:160.5},0).wait(1).to({rotation:-1.7,x:72.4,y:160.8},0).wait(1).to({rotation:-1.6,x:72.3,y:161.1},0).wait(1).to({rotation:-1.5,x:72.2,y:161.4},0).wait(1).to({rotation:-1.4,x:72.1,y:161.7},0).wait(1).to({rotation:-1.3,y:161.9},0).wait(1).to({rotation:-1.2,x:72,y:162.3},0).wait(1).to({rotation:-1.1,x:71.9,y:162.6},0).wait(1).to({rotation:-1,x:71.8,y:162.8},0).wait(1).to({rotation:-0.9,x:71.7,y:163.1},0).wait(1).to({rotation:-0.8,x:71.6,y:163.3},0).wait(1).to({rotation:-0.7,y:163.5},0).wait(1).to({rotation:-0.6,x:71.5,y:163.8},0).wait(1).to({rotation:-0.5,y:163.9},0).wait(1).to({x:71.4,y:164.1},0).wait(1).to({rotation:-0.4,y:164.3},0).wait(1).to({rotation:-0.3,x:71.3,y:164.5},0).wait(1).to({x:71.2,y:164.6},0).wait(1).to({rotation:-0.2,y:164.8},0).wait(1).to({y:164.9},0).wait(1).to({x:71.1,y:165},0).wait(1).to({rotation:-0.1,y:165.1},0).wait(1).to({y:165.2},0).wait(1).to({x:71},0).wait(1).to({rotation:0,y:165.3},0).wait(2).to({y:165.4},0).wait(2).to({regX:115,regY:59.5,x:97.1,y:122},0).wait(1));

	// cone back
	this.instance = new lib.l1();
	this.instance.setTransform(208.1,100.6,1,1,12.5,0,0,216,172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({regX:148,regY:137.1,rotation:10.3,x:120,y:54.2},0).wait(1).to({rotation:8.3,x:94.8,y:56.3},0).wait(1).to({rotation:6.7,x:74.2,y:58.2},0).wait(1).to({rotation:5.5,x:57.8,y:59.6},0).wait(1).to({rotation:4.5,x:45,y:60.8},0).wait(1).to({rotation:3.7,x:34.9,y:61.7},0).wait(1).to({rotation:3.1,x:26.9,y:62.4},0).wait(1).to({rotation:2.6,x:20.3,y:63},0).wait(1).to({rotation:2.2,x:15,y:63.5},0).wait(1).to({rotation:1.8,x:10.6,y:63.9},0).wait(1).to({rotation:1.5,x:6.9,y:64.3},0).wait(1).to({rotation:1.3,x:3.9,y:64.5},0).wait(1).to({rotation:1.1,x:1.3,y:64.8},0).wait(1).to({rotation:0.9,x:-0.9,y:65},0).wait(1).to({rotation:0.8,x:-2.8,y:65.2},0).wait(1).to({rotation:0.7,x:-4.3,y:65.3},0).wait(1).to({rotation:0.6,x:-5.7,y:65.5},0).wait(1).to({rotation:0.5,x:-6.9,y:65.6},0).wait(1).to({rotation:0.4,x:-7.9,y:65.7},0).wait(1).to({rotation:0.3,x:-8.7,y:65.8},0).wait(1).to({x:-9.5},0).wait(1).to({rotation:0.2,x:-10.1,y:65.9},0).wait(1).to({x:-10.6},0).wait(1).to({rotation:0.1,x:-11.1,y:66},0).wait(1).to({x:-11.5},0).wait(1).to({x:-11.8},0).wait(1).to({x:-12.1,y:66.1},0).wait(1).to({rotation:0,x:-12.3},0).wait(1).to({x:-12.5},0).wait(1).to({x:-12.6},0).wait(1).to({x:-12.8,y:66.2},0).wait(1).to({y:66.1},0).wait(1).to({x:-12.9},0).wait(2).to({regX:216,regY:172,x:55,y:101},0).wait(12).to({regX:148,regY:137.1,x:-13,y:66.1},0).wait(3).to({x:-12.9},0).wait(1).to({x:-13},0).wait(3).to({rotation:-0.1,y:66.2},0).wait(3).to({y:66.3},0).wait(2).to({rotation:-0.2,x:-13.1},0).wait(2).to({y:66.4},0).wait(1).to({rotation:-0.3},0).wait(1).to({y:66.5},0).wait(2).to({rotation:-0.4,x:-13.2,y:66.6},0).wait(2).to({rotation:-0.5,y:66.7},0).wait(1).to({x:-13.3},0).wait(1).to({rotation:-0.6,y:66.8},0).wait(2).to({rotation:-0.7,y:67},0).wait(1).to({x:-13.4},0).wait(1).to({rotation:-0.8,y:67.1},0).wait(1).to({rotation:-0.9,y:67.2},0).wait(1).to({x:-13.5,y:67.3},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-1.1,x:-13.6},0).wait(1).to({y:67.5},0).wait(1).to({rotation:-1.2,x:-13.7,y:67.6},0).wait(1).to({rotation:-1.3,y:67.7},0).wait(1).to({rotation:-1.4,x:-13.8,y:67.8},0).wait(1).to({rotation:-1.5},0).wait(1).to({rotation:-1.6,x:-13.9,y:68},0).wait(1).to({y:68.1},0).wait(1).to({rotation:-1.7,y:68.2},0).wait(1).to({rotation:-1.8,x:-14,y:68.3},0).wait(1).to({rotation:-1.9,x:-14.1,y:68.4},0).wait(1).to({rotation:-2,y:68.5},0).wait(1).to({rotation:-2.1,x:-14.2,y:68.6},0).wait(1).to({rotation:-2.2,y:68.8},0).wait(1).to({rotation:-2.3,y:68.9},0).wait(1).to({rotation:-2.4,x:-14.3,y:69},0).wait(1).to({rotation:-2.5,x:-14.4,y:69.1},0).wait(1).to({rotation:-2.6,x:-14.5,y:69.2},0).wait(1).to({rotation:-2.7,y:69.4},0).wait(1).to({rotation:-2.8,x:-14.6,y:69.5},0).wait(1).to({rotation:-2.9,y:69.6},0).wait(1).to({rotation:-3,x:-14.7,y:69.7},0).wait(1).to({rotation:-3.1,y:69.9},0).wait(1).to({rotation:-3.2,x:-14.8,y:70},0).wait(1).to({rotation:-3.3,x:-14.9,y:70.1},0).wait(1).to({rotation:-3.4,y:70.2},0).wait(1).to({rotation:-3.5,x:-15,y:70.4},0).wait(1).to({rotation:-3.6,y:70.5},0).wait(1).to({rotation:-3.7,x:-15.1,y:70.6},0).wait(1).to({rotation:-3.8,y:70.7},0).wait(1).to({rotation:-3.9,y:70.9},0).wait(1).to({rotation:-4,x:-15.2},0).wait(1).to({rotation:-4.1,x:-15.3,y:71.1},0).wait(1).to({rotation:-4.2,y:71.2},0).wait(1).to({rotation:-4.3,y:71.3},0).wait(1).to({x:-15.4,y:71.4},0).wait(1).to({rotation:-4.4,y:71.5},0).wait(1).to({rotation:-4.5,x:-15.5,y:71.6},0).wait(1).to({rotation:-4.6,y:71.7},0).wait(1).to({rotation:-4.7,x:-15.6,y:71.8},0).wait(1).to({y:71.9},0).wait(1).to({rotation:-4.8},0).wait(1).to({rotation:-4.9,x:-15.7,y:72},0).wait(1).to({y:72.1},0).wait(1).to({rotation:-5,y:72.2},0).wait(2).to({rotation:-5.1,x:-15.8,y:72.3},0).wait(1).to({y:72.4},0).wait(1).to({rotation:-5.2},0).wait(1).to({y:72.5},0).wait(2).to({rotation:-5.3,x:-15.9},0).wait(1).to({y:72.6},0).wait(2).to({rotation:-5.4},0).wait(1).to({y:72.7},0).wait(2).to({y:72.8},0).wait(1).to({y:72.7},0).wait(1).to({y:72.8},0).wait(1).to({y:72.7},0).wait(1).to({regX:216,regY:171.9,x:55.1,y:101},0).wait(1).to({regX:148,regY:137.1,x:-15.8,y:72.8},0).wait(1).to({y:72.9},0).wait(1).to({x:-15.9},0).wait(1).to({x:-15.8,y:72.8},0).wait(5).to({rotation:-5.3,y:72.7},0).wait(2).to({y:72.6},0).wait(1).to({rotation:-5.2,x:-15.7},0).wait(2).to({y:72.5},0).wait(1).to({rotation:-5.1},0).wait(1).to({y:72.4},0).wait(1).to({rotation:-5,x:-15.6,y:72.3},0).wait(2).to({rotation:-4.9,y:72.2},0).wait(1).to({y:72.1},0).wait(1).to({rotation:-4.8,y:72},0).wait(1).to({x:-15.5},0).wait(1).to({rotation:-4.7,y:71.9},0).wait(1).to({rotation:-4.6,y:71.8},0).wait(1).to({rotation:-4.5,x:-15.4,y:71.7},0).wait(1).to({y:71.6},0).wait(1).to({rotation:-4.4,y:71.5},0).wait(1).to({rotation:-4.3,x:-15.3,y:71.4},0).wait(1).to({rotation:-4.2,x:-15.2},0).wait(1).to({rotation:-4.1,y:71.2},0).wait(1).to({rotation:-4,y:71.1},0).wait(1).to({rotation:-3.9,x:-15.1,y:71},0).wait(1).to({y:70.9},0).wait(1).to({rotation:-3.8,x:-15,y:70.7},0).wait(1).to({rotation:-3.6,y:70.6},0).wait(1).to({rotation:-3.5,x:-14.9,y:70.5},0).wait(1).to({rotation:-3.4,x:-14.8,y:70.4},0).wait(1).to({rotation:-3.3,y:70.2},0).wait(1).to({rotation:-3.2,x:-14.7,y:70.1},0).wait(1).to({rotation:-3.1,x:-14.6,y:70},0).wait(1).to({rotation:-3,y:69.8},0).wait(1).to({rotation:-2.9,x:-14.5,y:69.7},0).wait(1).to({rotation:-2.8,y:69.5},0).wait(1).to({rotation:-2.6,x:-14.4,y:69.4},0).wait(1).to({rotation:-2.5,y:69.2},0).wait(1).to({rotation:-2.4,x:-14.3,y:69.1},0).wait(1).to({rotation:-2.3,x:-14.2,y:69},0).wait(1).to({rotation:-2.2,y:68.8},0).wait(1).to({rotation:-2.1,x:-14.1,y:68.7},0).wait(1).to({rotation:-2,y:68.5},0).wait(1).to({rotation:-1.8,x:-14,y:68.4},0).wait(1).to({rotation:-1.7,x:-13.9,y:68.3},0).wait(1).to({rotation:-1.6,y:68.1},0).wait(1).to({rotation:-1.5,x:-13.8,y:68},0).wait(1).to({rotation:-1.4,x:-13.7,y:67.9},0).wait(1).to({rotation:-1.3,y:67.8},0).wait(1).to({rotation:-1.2,x:-13.6,y:67.6},0).wait(1).to({rotation:-1.1,y:67.5},0).wait(1).to({rotation:-1,x:-13.5},0).wait(1).to({rotation:-0.9,x:-13.4,y:67.3},0).wait(1).to({rotation:-0.8,y:67.2},0).wait(1).to({y:67.1},0).wait(1).to({rotation:-0.7,x:-13.3,y:67},0).wait(1).to({rotation:-0.6},0).wait(1).to({rotation:-0.5,x:-13.2,y:66.8},0).wait(2).to({rotation:-0.4,x:-13.1,y:66.7},0).wait(1).to({y:66.6},0).wait(1).to({rotation:-0.3},0).wait(1).to({x:-13,y:66.5},0).wait(1).to({rotation:-0.2,y:66.4},0).wait(2).to({rotation:-0.1,y:66.3},0).wait(1).to({x:-12.9},0).wait(1).to({x:-13},0).wait(1).to({y:66.2},0).wait(1).to({rotation:0,x:-12.9},0).wait(4).to({regX:216,regY:172,x:55,y:101},0).wait(1));

	// cone1
	this.anim1 = new lib.l32();
	this.anim1.setTransform(310.8,150.7,1,1,45.7,0,0,272.9,44.1);

	this.timeline.addTween(cjs.Tween.get(this.anim1).wait(8).to({regX:163.3,regY:89.3,rotation:39.7,x:166.4,y:115.3},0).wait(1).to({rotation:34.3,x:135.1,y:126.1},0).wait(1).to({rotation:29.5,x:108.4,y:135.8},0).wait(1).to({rotation:25.4,x:85.9,y:144.2},0).wait(1).to({rotation:21.9,x:67.3,y:151.4},0).wait(1).to({rotation:18.9,x:52,y:157.4},0).wait(1).to({rotation:16.4,x:39.3,y:162.6},0).wait(1).to({rotation:14.3,x:28.8,y:166.9},0).wait(1).to({rotation:12.5,x:19.9,y:170.5},0).wait(1).to({rotation:11,x:12.5,y:173.6},0).wait(1).to({rotation:9.7,x:6.2,y:176.3},0).wait(1).to({rotation:8.5,x:0.7,y:178.5},0).wait(1).to({rotation:7.5,x:-4,y:180.5},0).wait(1).to({rotation:6.7,x:-8.1,y:182.2},0).wait(1).to({rotation:5.9,x:-11.6,y:183.7},0).wait(1).to({rotation:5.3,x:-14.7,y:185},0).wait(1).to({rotation:4.7,x:-17.5,y:186.2},0).wait(1).to({rotation:4.1,x:-19.9,y:187.2},0).wait(1).to({rotation:3.7,x:-22,y:188.1},0).wait(1).to({rotation:3.3,x:-23.9,y:188.9},0).wait(1).to({rotation:2.9,x:-25.6,y:189.6},0).wait(1).to({rotation:2.6,x:-27.1,y:190.3},0).wait(1).to({rotation:2.3,x:-28.4,y:190.9},0).wait(1).to({rotation:2,x:-29.6,y:191.4},0).wait(1).to({rotation:1.8,x:-30.8,y:191.8},0).wait(1).to({rotation:1.5,x:-31.7,y:192.2},0).wait(1).to({rotation:1.4,x:-32.5,y:192.5},0).wait(1).to({rotation:1.2,x:-33.3,y:192.9},0).wait(1).to({rotation:1,x:-34,y:193.2},0).wait(1).to({rotation:0.9,x:-34.6,y:193.5},0).wait(1).to({rotation:0.8,x:-35.1,y:193.7},0).wait(1).to({rotation:0.7,x:-35.7,y:193.9},0).wait(1).to({rotation:0.6,x:-36.1,y:194.1},0).wait(1).to({rotation:0.5,x:-36.5,y:194.2},0).wait(1).to({rotation:0.4,x:-36.8,y:194.4},0).wait(1).to({rotation:0.3,x:-37.1,y:194.5},0).wait(1).to({x:-37.4,y:194.7},0).wait(1).to({rotation:0.2,x:-37.6},0).wait(1).to({x:-37.8,y:194.8},0).wait(1).to({rotation:0.1,x:-38,y:194.9},0).wait(1).to({x:-38.1},0).wait(1).to({x:-38.2,y:195},0).wait(1).to({x:-38.4},0).wait(1).to({rotation:0,y:195.1},0).wait(1).to({x:-38.5},0).wait(2).to({x:-38.6},0).wait(2).to({regX:273,regY:44.1,x:71,y:150},0).wait(2).to({regX:163.3,regY:89.3,x:-38.7,y:195.2},0).wait(4).to({x:-38.6},0).wait(3).to({rotation:-0.1,y:195.3},0).wait(2).to({y:195.4},0).wait(1).to({x:-38.5},0).wait(1).to({x:-38.6},0).wait(1).to({rotation:-0.2,x:-38.5,y:195.5},0).wait(2).to({y:195.6},0).wait(1).to({rotation:-0.3,x:-38.4,y:195.7},0).wait(2).to({y:195.8},0).wait(1).to({rotation:-0.4},0).wait(1).to({y:195.9},0).wait(1).to({x:-38.3,y:196},0).wait(1).to({rotation:-0.5,y:196.1},0).wait(1).to({x:-38.2,y:196.2},0).wait(1).to({rotation:-0.6,y:196.3},0).wait(1).to({x:-38.1,y:196.4},0).wait(1).to({rotation:-0.7,y:196.5},0).wait(1).to({y:196.6},0).wait(1).to({rotation:-0.8,x:-38,y:196.7},0).wait(1).to({rotation:-0.9,x:-37.9,y:196.9},0).wait(2).to({rotation:-1,x:-37.8,y:197.1},0).wait(1).to({rotation:-1.1,y:197.2},0).wait(1).to({y:197.3},0).wait(1).to({rotation:-1.2,x:-37.7,y:197.5},0).wait(1).to({rotation:-1.3,y:197.6},0).wait(1).to({x:-37.6,y:197.7},0).wait(1).to({rotation:-1.4,x:-37.5,y:197.8},0).wait(1).to({rotation:-1.5,x:-37.4,y:198},0).wait(1).to({y:198.1},0).wait(1).to({rotation:-1.6,x:-37.3,y:198.3},0).wait(1).to({rotation:-1.7,x:-37.2,y:198.4},0).wait(1).to({rotation:-1.8,y:198.5},0).wait(1).to({y:198.6},0).wait(1).to({rotation:-1.9,x:-37.1,y:198.8},0).wait(1).to({rotation:-2,x:-37,y:198.9},0).wait(1).to({x:-36.9,y:199.1},0).wait(1).to({rotation:-2.1,y:199.2},0).wait(1).to({rotation:-2.2,x:-36.8,y:199.3},0).wait(1).to({y:199.4},0).wait(1).to({rotation:-2.3,x:-36.7,y:199.6},0).wait(1).to({rotation:-2.4,y:199.7},0).wait(2).to({rotation:-2.5,x:-36.6,y:199.8},0).wait(1).to({x:-36.5,y:199.9},0).wait(1).to({rotation:-2.6,y:200},0).wait(1).to({x:-36.4,y:200.1},0).wait(1).to({rotation:-2.7,y:200.2},0).wait(1).to({y:200.3},0).wait(1).to({y:200.4},0).wait(1).to({rotation:-2.8},0).wait(1).to({x:-36.3,y:200.5},0).wait(1).to({y:200.6},0).wait(1).to({rotation:-2.9},0).wait(1).to({x:-36.2,y:200.7},0).wait(4).to({x:-36.1,y:200.8},0).wait(1).to({x:-36.2},0).wait(1).to({rotation:-3},0).wait(1).to({regX:272.9,regY:44.1,x:71,y:150},0).wait(1).to({regX:163.3,regY:89.3,rotation:-2.9,x:-36.1,y:200.8},0).wait(2).to({x:-36.2,y:200.7},0).wait(2).to({y:200.6},0).wait(1).to({rotation:-2.8},0).wait(1).to({y:200.5},0).wait(1).to({x:-36.3},0).wait(1).to({y:200.4},0).wait(1).to({rotation:-2.7},0).wait(1).to({x:-36.4,y:200.3},0).wait(1).to({y:200.2},0).wait(1).to({rotation:-2.6,y:200.1},0).wait(2).to({rotation:-2.5,x:-36.5,y:200},0).wait(1).to({y:199.8},0).wait(1).to({rotation:-2.4,x:-36.6,y:199.7},0).wait(2).to({rotation:-2.3,x:-36.7,y:199.6},0).wait(1).to({rotation:-2.2,y:199.5},0).wait(1).to({x:-36.8,y:199.4},0).wait(1).to({rotation:-2.1,x:-36.9,y:199.3},0).wait(1).to({y:199.1},0).wait(1).to({rotation:-2,y:199},0).wait(1).to({x:-37},0).wait(1).to({rotation:-1.9,x:-37.1,y:198.9},0).wait(1).to({y:198.7},0).wait(1).to({rotation:-1.8,x:-37.2,y:198.6},0).wait(2).to({rotation:-1.7,y:198.5},0).wait(1).to({y:198.4},0).wait(1).to({rotation:-1.6,x:-37.3,y:198.3},0).wait(2).to({y:198.2},0).wait(1).to({rotation:-1.5,y:198.1},0).wait(1).to({x:-37.4},0).wait(2).to({y:198},0).wait(1).to({rotation:-1.4,y:197.9},0).wait(1).to({x:-37.5},0).wait(4).to({rotation:-1.3,y:197.8},0).wait(1).to({x:-37.6},0).wait(1).to({x:-37.5},0).wait(2).to({x:-37.6,y:197.7},0).wait(5).to({regX:272.9,regY:44.2,rotation:-1.2,x:71,y:150.1},0).wait(1).to({regX:163.3,regY:89.3,x:-37.6,y:197.6},0).wait(4).to({y:197.5},0).wait(1).to({y:197.6},0).wait(1).to({y:197.5},0).wait(3).to({y:197.4},0).wait(1).to({rotation:-1.1},0).wait(1).to({x:-37.7,y:197.3},0).wait(3).to({rotation:-1,y:197.2},0).wait(1).to({y:197.1},0).wait(2).to({x:-37.8,y:197},0).wait(1).to({rotation:-0.9,y:196.9},0).wait(1).to({x:-37.9},0).wait(1).to({rotation:-0.8,y:196.8},0).wait(1).to({y:196.7},0).wait(1).to({y:196.6},0).wait(1).to({rotation:-0.7,x:-38,y:196.5},0).wait(1).to({y:196.4},0).wait(1).to({rotation:-0.6},0).wait(1).to({x:-38.1,y:196.3},0).wait(1).to({rotation:-0.5,y:196.2},0).wait(1).to({y:196.1},0).wait(1).to({x:-38.2,y:196},0).wait(1).to({rotation:-0.4,y:195.9},0).wait(2).to({rotation:-0.3,x:-38.3,y:195.8},0).wait(1).to({y:195.7},0).wait(1).to({y:195.6},0).wait(1).to({rotation:-0.2,x:-38.4,y:195.5},0).wait(2).to({y:195.4},0).wait(1).to({rotation:-0.1,x:-38.5},0).wait(1).to({y:195.3},0).wait(2).to({y:195.2},0).wait(1).to({rotation:0},0).wait(2).to({y:195.1},0).wait(1).to({x:-38.6},0).wait(3).to({regX:273,regY:44.1,x:71,y:150},0).wait(1));

	// leaf back
	this.instance_1 = new lib.l2();
	this.instance_1.setTransform(138.3,80.7,1,1,24.4,0,0,411.4,227.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({regX:374.5,regY:163.6,rotation:20.7,x:118.7,y:7.8},0).wait(1).to({rotation:17.3,x:107.6,y:8.7},0).wait(1).to({rotation:14.5,x:98.2,y:9.5},0).wait(1).to({rotation:12.1,x:90.5,y:10.4},0).wait(1).to({rotation:10.2,x:84.1,y:11.2},0).wait(1).to({rotation:8.6,x:79,y:11.9},0).wait(1).to({rotation:7.3,x:74.8,y:12.6},0).wait(1).to({rotation:6.2,x:71.4,y:13.1},0).wait(1).to({rotation:5.3,x:68.5,y:13.5},0).wait(1).to({rotation:4.6,x:66.2,y:13.9},0).wait(1).to({rotation:4,x:64.1,y:14.3},0).wait(1).to({rotation:3.4,x:62.4,y:14.6},0).wait(1).to({rotation:3,x:61,y:14.9},0).wait(1).to({rotation:2.6,x:59.7,y:15.1},0).wait(1).to({rotation:2.2,x:58.6,y:15.4},0).wait(1).to({rotation:1.9,x:57.7,y:15.5},0).wait(1).to({rotation:1.7,x:56.9,y:15.7},0).wait(1).to({rotation:1.5,x:56.1,y:15.8},0).wait(1).to({rotation:1.3,x:55.5,y:15.9},0).wait(1).to({rotation:1.1,x:55,y:16},0).wait(1).to({rotation:0.9,x:54.5,y:16.1},0).wait(1).to({rotation:0.8,x:54.1,y:16.2},0).wait(1).to({rotation:0.7,x:53.7,y:16.3},0).wait(1).to({rotation:0.6,x:53.4},0).wait(1).to({rotation:0.5,x:53.1,y:16.4},0).wait(1).to({rotation:0.4,x:52.9},0).wait(1).to({rotation:0.3,x:52.6,y:16.5},0).wait(1).to({x:52.4},0).wait(1).to({rotation:0.2,x:52.3,y:16.6},0).wait(1).to({x:52.2},0).wait(1).to({rotation:0.1,x:52},0).wait(1).to({x:51.9},0).wait(1).to({x:51.8},0).wait(1).to({x:51.7,y:16.7},0).wait(1).to({rotation:0},0).wait(1).to({x:51.6},0).wait(5).to({regX:411.4,regY:227.7,x:88.4,y:80.7},0).wait(5).to({regX:374.5,regY:163.6,x:51.5,y:16.7},0).wait(1).to({y:16.6},0).wait(1).to({x:51.6,y:16.7},0).wait(1).to({x:51.5},0).wait(2).to({y:16.8},0).wait(1).to({rotation:-0.1},0).wait(1).to({x:51.4,y:16.9},0).wait(1).to({x:51.5},0).wait(1).to({x:51.4,y:17},0).wait(1).to({rotation:-0.2,y:17.1},0).wait(1).to({x:51.3},0).wait(1).to({y:17.2},0).wait(1).to({rotation:-0.3,y:17.3},0).wait(1).to({y:17.4},0).wait(1).to({x:51.2,y:17.6},0).wait(1).to({rotation:-0.4,y:17.7},0).wait(1).to({x:51.1,y:17.8},0).wait(1).to({rotation:-0.5,x:51,y:18},0).wait(1).to({y:18.1},0).wait(1).to({rotation:-0.6,x:50.9,y:18.3},0).wait(1).to({y:18.4},0).wait(1).to({rotation:-0.7,x:50.8,y:18.6},0).wait(1).to({rotation:-0.8,x:50.7,y:18.7},0).wait(1).to({x:50.6,y:18.9},0).wait(1).to({rotation:-0.9,y:19.1},0).wait(1).to({rotation:-1,x:50.5,y:19.3},0).wait(1).to({x:50.4,y:19.5},0).wait(1).to({rotation:-1.1,y:19.6},0).wait(1).to({rotation:-1.2,x:50.3,y:19.8},0).wait(1).to({x:50.2,y:20},0).wait(1).to({rotation:-1.3,x:50.1,y:20.2},0).wait(1).to({y:20.3},0).wait(1).to({rotation:-1.4,x:50,y:20.5},0).wait(1).to({rotation:-1.5,y:20.7},0).wait(1).to({x:49.9,y:20.9},0).wait(1).to({rotation:-1.6,x:49.8,y:21},0).wait(1).to({y:21.1},0).wait(1).to({rotation:-1.7,y:21.3},0).wait(1).to({x:49.7,y:21.4},0).wait(1).to({rotation:-1.8,x:49.6,y:21.5},0).wait(1).to({y:21.6},0).wait(1).to({x:49.5,y:21.7},0).wait(1).to({rotation:-1.9},0).wait(1).to({y:21.8},0).wait(1).to({y:21.9},0).wait(3).to({y:22},0).wait(2).to({regX:411.4,regY:227.7,rotation:-2,x:88.5,y:84.8},0).wait(1).to({regX:374.5,regY:163.6,x:49.4,y:22},0).wait(1).to({x:49.5},0).wait(2).to({x:49.4},0).wait(2).to({y:21.9},0).wait(1).to({x:49.5},0).wait(1).to({x:49.4},0).wait(2).to({x:49.3,y:21.8},0).wait(2).to({rotation:-2.1},0).wait(1).to({y:21.7},0).wait(1).to({y:21.6},0).wait(2).to({rotation:-2.2,x:49.2},0).wait(1).to({y:21.5},0).wait(1).to({y:21.4},0).wait(1).to({x:49.1},0).wait(1).to({rotation:-2.3,y:21.3},0).wait(1).to({x:49,y:21.2},0).wait(1).to({rotation:-2.4,y:21.1},0).wait(1).to({y:21},0).wait(1).to({x:48.9,y:20.9},0).wait(1).to({rotation:-2.5,y:20.8},0).wait(1).to({x:48.8,y:20.7},0).wait(1).to({rotation:-2.6,y:20.6},0).wait(1).to({x:48.7,y:20.5},0).wait(1).to({rotation:-2.7,y:20.4},0).wait(1).to({x:48.6,y:20.3},0).wait(1).to({rotation:-2.8,y:20.1},0).wait(1).to({x:48.5,y:20},0).wait(1).to({rotation:-2.9,x:48.4,y:19.9},0).wait(1).to({rotation:-3,y:19.8},0).wait(1).to({x:48.3,y:19.6},0).wait(1).to({rotation:-3.1,x:48.2,y:19.5},0).wait(1).to({x:48.1,y:19.3},0).wait(1).to({rotation:-3.2,y:19.2},0).wait(1).to({rotation:-3.3,x:48,y:19},0).wait(1).to({x:47.9,y:18.9},0).wait(1).to({rotation:-3.4,y:18.7},0).wait(1).to({rotation:-3.5,x:47.8,y:18.6},0).wait(1).to({rotation:-3.6,x:47.7,y:18.4},0).wait(1).to({x:47.6,y:18.2},0).wait(1).to({rotation:-3.7,x:47.5,y:18.1},0).wait(1).to({rotation:-3.8,y:17.9},0).wait(1).to({x:47.4,y:17.8},0).wait(1).to({rotation:-3.9,x:47.3,y:17.6},0).wait(1).to({rotation:-4,x:47.2,y:17.4},0).wait(1).to({rotation:-4.1,x:47.1,y:17.3},0).wait(1).to({y:17.1},0).wait(1).to({rotation:-4.2,x:47,y:16.9},0).wait(1).to({rotation:-4.3,x:46.9,y:16.8},0).wait(1).to({rotation:-4.4,x:46.8,y:16.6},0).wait(1).to({y:16.4},0).wait(1).to({rotation:-4.5,x:46.7,y:16.3},0).wait(1).to({rotation:-4.6,x:46.6,y:16.2},0).wait(1).to({x:46.5,y:16},0).wait(1).to({rotation:-4.7,y:15.9},0).wait(1).to({rotation:-4.8,x:46.4,y:15.7},0).wait(1).to({x:46.3,y:15.6},0).wait(1).to({rotation:-4.9,y:15.4},0).wait(1).to({rotation:-5,x:46.2,y:15.3},0).wait(1).to({x:46.1,y:15.1},0).wait(1).to({rotation:-5.1,y:15},0).wait(1).to({x:46,y:14.9},0).wait(1).to({rotation:-5.2,y:14.8},0).wait(1).to({x:45.9,y:14.7},0).wait(1).to({rotation:-5.3,y:14.6},0).wait(1).to({y:14.5},0).wait(1).to({rotation:-5.4,x:45.8,y:14.4},0).wait(1).to({x:45.7,y:14.3},0).wait(1).to({y:14.2},0).wait(1).to({rotation:-5.5},0).wait(1).to({x:45.6,y:14.1},0).wait(2).to({rotation:-5.6,y:14},0).wait(1).to({x:45.5,y:13.9},0).wait(2).to({y:13.8},0).wait(2).to({rotation:-5.7},0).wait(1).to({x:45.4},0).wait(2).to({x:45.5,y:13.7},0).wait(1).to({x:45.4},0).wait(1).to({regX:411.4,regY:227.6,x:88.5,y:73.7},0).wait(1).to({regX:374.5,regY:163.6,x:45.5,y:13.8},0).wait(2).to({rotation:-5.6,x:45.6},0).wait(2).to({rotation:-5.5,x:45.7,y:13.9},0).wait(1).to({rotation:-5.4,x:45.8},0).wait(1).to({rotation:-5.3,x:45.9,y:14},0).wait(1).to({rotation:-5.2,x:46},0).wait(1).to({rotation:-5,x:46.2},0).wait(1).to({rotation:-4.9,x:46.4,y:14.1},0).wait(1).to({rotation:-4.7,x:46.5,y:14.2},0).wait(1).to({rotation:-4.5,x:46.7,y:14.3},0).wait(1).to({rotation:-4.3,x:47,y:14.4},0).wait(1).to({rotation:-4.1,x:47.2,y:14.5},0).wait(1).to({rotation:-3.8,x:47.4,y:14.7},0).wait(1).to({rotation:-3.6,x:47.7,y:14.8},0).wait(1).to({rotation:-3.3,x:47.9,y:14.9},0).wait(1).to({rotation:-3,x:48.3,y:15},0).wait(1).to({rotation:-2.8,x:48.6,y:15.2},0).wait(1).to({rotation:-2.5,x:48.9,y:15.3},0).wait(1).to({rotation:-2.2,x:49.2,y:15.5},0).wait(1).to({rotation:-1.9,x:49.5,y:15.6},0).wait(1).to({rotation:-1.7,x:49.8,y:15.8},0).wait(1).to({rotation:-1.4,x:50,y:15.9},0).wait(1).to({rotation:-1.2,x:50.3,y:16},0).wait(1).to({rotation:-1,x:50.5,y:16.2},0).wait(1).to({rotation:-0.8,x:50.8,y:16.3},0).wait(1).to({rotation:-0.6,x:51,y:16.4},0).wait(1).to({rotation:-0.4,x:51.1,y:16.5},0).wait(1).to({rotation:-0.3,x:51.3},0).wait(1).to({rotation:-0.2,x:51.4,y:16.6},0).wait(1).to({rotation:-0.1,x:51.5,y:16.7},0).wait(1).to({rotation:0,x:51.6},0).wait(2).to({regX:411.4,regY:227.7,x:88.4,y:80.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-387.8,-296.7,1061.6,826.5);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"repeat":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_252 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(252).call(this.frame_252).wait(1));

	// Layer 1
	this.animation = new lib.animation();
	this.animation.setTransform(421.1,13.9,1,1,0,0,0,234.1,-55.1);

	this.timeline.addTween(cjs.Tween.get(this.animation).wait(4).to({regX:97.3,regY:109.4,x:284.3,y:178.4},0).wait(6).to({x:284.4},0).wait(5).to({y:178.5},0).wait(1).to({x:284.5,y:178.4},0).wait(1).to({rotation:-0.1,y:178.5},0).wait(4).to({x:284.6,y:178.6},0).wait(3).to({x:284.7,y:178.7},0).wait(2).to({rotation:-0.2,x:284.8},0).wait(2).to({y:178.8},0).wait(1).to({x:284.9},0).wait(1).to({y:178.9},0).wait(1).to({x:285},0).wait(1).to({x:285.1,y:179},0).wait(1).to({rotation:-0.3},0).wait(1).to({x:285.2},0).wait(1).to({y:179.1},0).wait(2).to({x:285.3,y:179.2},0).wait(1).to({rotation:-0.4,x:285.4,y:179.3},0).wait(1).to({x:285.5},0).wait(2).to({x:285.6,y:179.4},0).wait(1).to({rotation:-0.5,y:179.5},0).wait(1).to({x:285.7},0).wait(1).to({x:285.8,y:179.6},0).wait(1).to({x:285.9},0).wait(1).to({y:179.7},0).wait(1).to({rotation:-0.6,x:286},0).wait(1).to({y:179.8},0).wait(1).to({x:286.1},0).wait(1).to({x:286.2,y:179.9},0).wait(1).to({rotation:-0.7,x:286.3,y:180},0).wait(2).to({x:286.4},0).wait(1).to({y:180.1},0).wait(1).to({x:286.5,y:180.2},0).wait(1).to({rotation:-0.8,x:286.6},0).wait(1).to({y:180.3},0).wait(1).to({x:286.7},0).wait(2).to({x:286.8,y:180.4},0).wait(2).to({rotation:-0.9,x:286.9,y:180.5},0).wait(2).to({x:287},0).wait(1).to({y:180.6},0).wait(1).to({x:287.1},0).wait(3).to({rotation:-1,y:180.7},0).wait(1).to({x:287.2},0).wait(3).to({y:180.8},0).wait(1).to({x:287.3},0).wait(6).to({regX:234.1,regY:-54.9,x:421.2,y:14},0).wait(1).to({regX:97.3,regY:109.4,x:287.2,y:180.6},0).wait(8).to({x:287.1},0).wait(1).to({rotation:-0.9,y:180.5},0).wait(2).to({x:287},0).wait(1).to({y:180.4},0).wait(1).to({x:286.9},0).wait(1).to({y:180.3},0).wait(1).to({x:286.8},0).wait(1).to({rotation:-0.8},0).wait(1).to({x:286.7,y:180.2},0).wait(1).to({x:286.6,y:180.1},0).wait(1).to({x:286.5},0).wait(1).to({rotation:-0.7,y:180},0).wait(1).to({x:286.4},0).wait(1).to({x:286.3,y:179.9},0).wait(1).to({x:286.2,y:179.8},0).wait(1).to({rotation:-0.6,x:286.1},0).wait(1).to({y:179.7},0).wait(1).to({x:285.9,y:179.6},0).wait(1).to({rotation:-0.5,x:285.8,y:179.5},0).wait(1).to({x:285.7,y:179.4},0).wait(1).to({x:285.6,y:179.3},0).wait(1).to({rotation:-0.4,x:285.5,y:179.2},0).wait(1).to({x:285.4,y:179.1},0).wait(1).to({rotation:-0.3,x:285.3},0).wait(1).to({x:285.1,y:178.9},0).wait(1).to({x:285,y:178.8},0).wait(1).to({rotation:-0.2,x:284.9,y:178.7},0).wait(1).to({x:284.8,y:178.6},0).wait(1).to({rotation:-0.1,x:284.7,y:178.5},0).wait(1).to({x:284.5,y:178.4},0).wait(1).to({rotation:0,x:284.4,y:178.3},0).wait(1).to({x:284.2,y:178.2},0).wait(1).to({rotation:0.1,x:284.1,y:178.1},0).wait(1).to({x:284,y:178},0).wait(1).to({rotation:0.2,x:283.8,y:177.9},0).wait(1).to({x:283.7,y:177.8},0).wait(1).to({x:283.6,y:177.6},0).wait(1).to({rotation:0.3,x:283.4,y:177.5},0).wait(1).to({x:283.3,y:177.4},0).wait(1).to({rotation:0.4,x:283.2,y:177.3},0).wait(1).to({x:283.1,y:177.2},0).wait(1).to({rotation:0.5,x:283,y:177.1},0).wait(1).to({x:282.8,y:177},0).wait(1).to({x:282.7,y:176.9},0).wait(1).to({rotation:0.6,x:282.6,y:176.8},0).wait(1).to({x:282.5,y:176.7},0).wait(1).to({x:282.4},0).wait(1).to({rotation:0.7,x:282.3,y:176.6},0).wait(1).to({x:282.2,y:176.5},0).wait(1).to({x:282.1,y:176.4},0).wait(1).to({rotation:0.8,x:282,y:176.3},0).wait(1).to({x:281.9},0).wait(1).to({y:176.2},0).wait(1).to({rotation:0.9,x:281.8},0).wait(1).to({y:176.1},0).wait(1).to({x:281.7,y:176},0).wait(1).to({x:281.6},0).wait(2).to({y:175.9},0).wait(1).to({rotation:1,x:281.5},0).wait(2).to({y:175.8},0).wait(1).to({x:281.4},0).wait(4).to({regX:234.1,regY:-55.1,x:421.1,y:13.9},0).to({regY:-54.9,rotation:-1,x:421.2,y:14},35).wait(1).to({regX:97.3,regY:109.4,x:287.2,y:180.6},0).wait(10).to({rotation:-0.9,x:287.1,y:180.5},0).wait(2).to({x:287},0).wait(1).to({y:180.4},0).wait(1).to({x:286.9},0).wait(2).to({x:286.8,y:180.3},0).wait(2).to({rotation:-0.8},0).wait(1).to({x:286.7,y:180.2},0).wait(1).to({x:286.6,y:180.1},0).wait(2).to({x:286.5,y:180},0).wait(1).to({rotation:-0.7,x:286.4},0).wait(1).to({y:179.9},0).wait(1).to({x:286.3},0).wait(1).to({x:286.2,y:179.8},0).wait(1).to({rotation:-0.6,x:286.1},0).wait(1).to({y:179.7},0).wait(1).to({x:286,y:179.6},0).wait(1).to({rotation:-0.5,x:285.9,y:179.5},0).wait(1).to({x:285.8},0).wait(1).to({x:285.7,y:179.4},0).wait(1).to({x:285.6,y:179.3},0).wait(1).to({rotation:-0.4,y:179.2},0).wait(1).to({x:285.4},0).wait(1).to({y:179.1},0).wait(1).to({rotation:-0.3,x:285.3},0).wait(1).to({x:285.2,y:179},0).wait(1).to({x:285.1,y:178.9},0).wait(1).to({x:285},0).wait(1).to({rotation:-0.2,y:178.8},0).wait(1).to({x:284.9},0).wait(1).to({x:284.8,y:178.7},0).wait(1).to({y:178.6},0).wait(1).to({x:284.7},0).wait(1).to({rotation:-0.1,x:284.6,y:178.5},0).wait(3).to({x:284.5,y:178.4},0).wait(2).to({x:284.4,y:178.3},0).wait(1).to({rotation:0},0).wait(1).to({x:284.3},0).wait(1).to({y:178.2},0).wait(6).to({regX:234.1,regY:-55.1,x:421.1,y:13.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.8,-227.7,1061.6,826.5);


// stage content:



(lib.brewingleft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var self = this;
		
		this.areWeReady = true;
		
		this.start = function() {
			self.main_mc.play();
			self.main_mc.animation.play();
			self.main_mc.animation.anim1.play();
			self.main_mc.animation.c0.play();
		}
		
		this.pause = function() {
			self.main_mc.stop();
			self.main_mc.animation.stop();
			self.main_mc.animation.anim1.stop();
			self.main_mc.animation.c0.stop();
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
	this.instance.setTransform(12,-20);

	this.instance_1 = new lib.spacerjpg();
	this.instance_1.setTransform(0,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// animation
	this.main_mc = new lib.main();
	this.main_mc.setTransform(-65.7,284.4,1.251,1.251,0,0,180,299,147.8);

	this.timeline.addTween(cjs.Tween.get(this.main_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-583.4,139.7,1328,1033.8);

})(window.brewingleftLib = window.brewingleftLib ||{}, window.brewingleftImages = window.brewingleftImages ||{}, createjs = createjs||{}, window.brewingleftSs = window.brewingleftSs ||{});