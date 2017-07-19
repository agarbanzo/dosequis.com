(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 630,
	height: 540,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/Assets/Images/touts/2016/spacerjpg.jpg?1476287063137", id:"spacerjpg"},
		{src:"/Assets/Images/touts/2016/history_2016_atlas_P_.png?1476287063133", id:"history_2016_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"history_2016_atlas_P_", frames: [[193,0,167,489],[0,0,191,552],[193,491,152,306],[0,682,123,123],[0,554,121,126]]}
];


// symbols:



(lib.bottleamber = function() {
	this.spriteSheet = ss["history_2016_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottlelager = function() {
	this.spriteSheet = ss["history_2016_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.can = function() {
	this.spriteSheet = ss["history_2016_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.coin = function() {
	this.spriteSheet = ss["history_2016_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.logocircle = function() {
	this.spriteSheet = ss["history_2016_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.spacerjpg = function() {
	this.initialize(img.spacerjpg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.2)","rgba(255,255,255,0.8)","rgba(255,255,255,0.2)"],[0,0.494,1],-46,-16.2,46.2,16.2).s().p("A3hSpMAgngqVIOcFEMggnAqVg");
	this.shape.setTransform(88.2,167.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.4,15.6,301.2,303.6);


(lib.lager = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottlelager();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191,552);


(lib.caninside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.can();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,306);


(lib.amberinside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottleamber();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167,489);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_109 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(109).call(this.frame_109).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmAGBQifiggBjhQABjgCfigQCfigDhABQDhgBCgCgQCgCggBDgQABDhigCgQigCgjhgBQjhABifigg");
	mask.setTransform(59.6,62.1);

	// Layer 4
	this.instance = new lib.Symbol1();
	this.instance.setTransform(-43.5,54.8,1,1,0,0,0,92.7,138.3);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({x:181},11,cjs.Ease.get(1)).wait(81).to({x:-43.5},0).to({x:181},11,cjs.Ease.get(1)).wait(4));

	// Layer 1
	this.instance_1 = new lib.logocircle();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121,126);


(lib.coin_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_103 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(103).call(this.frame_103).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmjGlQiuivAAj2QAAj1CuivQCuiuD1ABQD2gBCvCuQCuCvgBD1QABD2iuCvQivCuj2gBQj1ABiuiug");
	mask.setTransform(61.6,62.1);

	// Layer 3
	this.instance = new lib.Symbol1();
	this.instance.setTransform(-43.5,54.8,1,1,0,0,0,92.7,138.3);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:181},11,cjs.Ease.get(1)).wait(75).to({x:-43.5},0).to({x:181},11,cjs.Ease.get(1)).wait(3));

	// Layer 1
	this.instance_1 = new lib.coin();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(104));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123,123);


(lib.can_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer 1
	this.instance = new lib.caninside();
	this.instance.setTransform(78,276,1,1,0,0,0,78,276);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regX:76,regY:153,rotation:0.1,x:76.1,y:153.1},0).wait(1).to({rotation:0.2,x:76.4,y:153},0).wait(1).to({rotation:0.4,x:76.8},0).wait(1).to({rotation:0.7,x:77.4},0).wait(1).to({rotation:0.9,x:78},0).wait(1).to({rotation:1.2,x:78.6},0).wait(1).to({rotation:1.4,x:78.9},0).wait(1).to({x:79.1},0).wait(1).to({regX:78,regY:275.9,rotation:1.5,x:78,y:275.9},0).wait(6).to({regX:76,regY:153,x:79.2,y:153.1},0).wait(1).to({rotation:1.4,x:79.1},0).wait(1).to({rotation:1.3,x:78.9},0).wait(1).to({rotation:1.2,x:78.7,y:153},0).wait(1).to({rotation:1.1,x:78.3},0).wait(1).to({rotation:0.8,x:77.8,y:153.1},0).wait(1).to({rotation:0.6,x:77.4},0).wait(1).to({rotation:0.4,x:76.9},0).wait(1).to({rotation:0.2,x:76.6},0).wait(1).to({rotation:0.1,x:76.3},0).wait(1).to({rotation:0,x:76.1},0).wait(1).to({y:153},0).wait(1).to({regX:78,regY:276,x:78,y:276},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,306);


(lib.amber = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Layer 1
	this.instance = new lib.amberinside();
	this.instance.setTransform(83.5,440.5,1,1,0,0,0,83.5,440.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regY:244.5,y:244.5},0).wait(1).to({rotation:-0.1,x:83.4},0).wait(1).to({x:83.1},0).wait(1).to({rotation:-0.3,x:82.7},0).wait(1).to({rotation:-0.4,x:82.3,y:244.6},0).wait(1).to({rotation:-0.5,x:82,y:244.5},0).wait(1).to({regY:440.6,x:83.6,y:440.6},0).wait(1).to({regY:244.5,x:82,y:244.5},0).wait(1).to({x:82.1},0).wait(1).to({rotation:-0.4,x:82.3},0).wait(1).to({rotation:-0.3,x:82.6},0).wait(1).to({rotation:-0.2,x:82.9},0).wait(1).to({rotation:-0.1,x:83.3},0).wait(1).to({rotation:0,x:83.5},0).wait(1).to({regY:440.4,y:440.5},0).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167,489);


// stage content:



(lib.history_2016 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		
		var self = this;
		
		this.areWeReady = true;
		this.isFirstTime = true;
		
		this.start = function() {
			//console.log("play");
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
	this.frame_100 = function() {
		this.logo.play();
	}
	this.frame_115 = function() {
		this.coin.play();
	}
	this.frame_121 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(99).call(this.frame_100).wait(15).call(this.frame_115).wait(6).call(this.frame_121).wait(1));

	// spacer
	this.instance = new lib.spacerjpg();
	this.instance.setTransform(0,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122));

	// bottle lager
	this.instance_1 = new lib.lager();
	this.instance_1.setTransform(315,276,1,1,0,0,0,95.5,276);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({x:315.2},0).wait(1).to({x:315.4},0).wait(1).to({x:315.7},0).wait(1).to({x:316.1,y:276.1},0).wait(1).to({x:316.7},0).wait(1).to({x:317.4},0).wait(1).to({x:318.4,y:276.2},0).wait(1).to({x:319.5},0).wait(1).to({x:321,y:276.3},0).wait(1).to({x:322.9,y:276.4},0).wait(1).to({x:325.4,y:276.5},0).wait(1).to({x:328.7,y:276.6},0).wait(1).to({x:333.1,y:276.8},0).wait(1).to({x:339.4,y:277.1},0).wait(1).to({x:347.7,y:277.5},0).wait(1).to({x:356.1,y:277.9},0).wait(1).to({x:362.4,y:278.2},0).wait(1).to({x:366.8,y:278.4},0).wait(1).to({x:370.1,y:278.5},0).wait(1).to({x:372.5,y:278.6},0).wait(1).to({x:374.4,y:278.7},0).wait(1).to({x:375.9,y:278.8},0).wait(1).to({x:377.1},0).wait(1).to({x:378.1,y:278.9},0).wait(1).to({x:378.8},0).wait(1).to({x:379.4},0).wait(1).to({x:379.8,y:279},0).wait(1).to({x:380.1},0).wait(1).to({x:380.3},0).wait(1).to({x:380.5},0).wait(84));

	// can
	this.instance_2 = new lib.can_1();
	this.instance_2.setTransform(381.1,387.2,0.875,0.875,0,0,0,76.1,153.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41).to({_off:false},0).wait(1).to({regX:79.2,regY:153,x:383.7,y:387},0).wait(1).to({x:383.6,y:386.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:383.2,y:386.8},0).wait(1).to({x:382.6,y:386.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:381.9,y:386.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:380.9,y:385.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:379.6,y:385.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:377.9,y:384.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:375.8,y:383.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:373,y:382.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:369.5,y:380.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:364.7,y:378.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:358.2,y:375.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:348.4,y:371.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:333.4,y:365.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:316.2,y:357.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:304.1,y:352.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:296.2,y:349.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:290.8,y:346.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:286.8,y:345},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:283.8,y:343.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:281.4,y:342.7},0).wait(1).to({scaleX:1,scaleY:1,x:279.6,y:341.9},0).wait(1).to({scaleX:1,scaleY:1,x:278.2,y:341.3},0).wait(1).to({scaleX:1,scaleY:1,x:277.1,y:340.8},0).wait(1).to({scaleX:1,scaleY:1,x:276.4,y:340.5},0).wait(1).to({x:275.8,y:340.3},0).wait(1).to({scaleX:1,scaleY:1,x:275.4,y:340.1},0).wait(1).to({x:275.2,y:340},0).wait(1).to({regX:76,x:272},0).wait(51));

	// bottle amber
	this.instance_3 = new lib.amber();
	this.instance_3.setTransform(379.5,278.5,1,1,0,0,0,83.5,244.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).wait(1).to({regX:81.9,x:394.2,y:276.4},0).wait(1).to({x:408.9,y:274.6},0).wait(1).to({x:421.3,y:273},0).wait(1).to({x:431.3,y:271.8},0).wait(1).to({x:439.4,y:270.7},0).wait(1).to({x:445.9,y:269.9},0).wait(1).to({x:451.2,y:269.2},0).wait(1).to({x:455.6,y:268.7},0).wait(1).to({x:459.2,y:268.2},0).wait(1).to({x:462.3,y:267.9},0).wait(1).to({x:464.8,y:267.5},0).wait(1).to({x:467.1,y:267.2},0).wait(1).to({x:469,y:267},0).wait(1).to({x:470.6,y:266.8},0).wait(1).to({x:472.1,y:266.6},0).wait(1).to({x:473.3,y:266.5},0).wait(1).to({x:474.4,y:266.3},0).wait(1).to({x:475.4,y:266.2},0).wait(1).to({x:476.2,y:266.1},0).wait(1).to({x:477,y:266},0).wait(1).to({x:477.6,y:265.9},0).wait(1).to({x:478.2,y:265.8},0).wait(1).to({x:478.7},0).wait(1).to({x:479.1,y:265.7},0).wait(1).to({x:479.5},0).wait(1).to({x:479.8,y:265.6},0).wait(1).to({x:480},0).wait(1).to({x:480.3},0).wait(1).to({x:480.4},0).wait(1).to({x:480.6,y:265.5},0).wait(1).to({x:480.7},0).wait(1).to({x:480.8},0).wait(1).to({x:480.9},0).wait(2).to({regX:83.5,x:482.5},0).wait(61));

	// coin
	this.coin = new lib.coin_1();
	this.coin.setTransform(177.5,84.5,1,1,0,0,0,61.5,61.5);
	this.coin.alpha = 0;
	this.coin._off = true;

	this.timeline.addTween(cjs.Tween.get(this.coin).wait(60).to({_off:false},0).wait(1).to({x:190.4,alpha:0.258},0).wait(1).to({x:199.8,alpha:0.446},0).wait(1).to({x:206.8,alpha:0.586},0).wait(1).to({x:212,alpha:0.691},0).wait(1).to({x:216,alpha:0.771},0).wait(1).to({x:219.1,alpha:0.832},0).wait(1).to({x:221.4,alpha:0.879},0).wait(1).to({x:223.2,alpha:0.915},0).wait(1).to({x:224.6,alpha:0.942},0).wait(1).to({x:225.6,alpha:0.963},0).wait(1).to({x:226.4,alpha:0.978},0).wait(1).to({x:226.9,alpha:0.988},0).wait(1).to({x:227.3,alpha:0.995},0).wait(1).to({x:227.4,alpha:0.999},0).wait(1).to({x:227.5,alpha:1},0).wait(47));

	// logo
	this.logo = new lib.logo();
	this.logo.setTransform(228.6,83.1,0.952,0.952,0,0,0,60.6,63);
	this.logo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(73).to({_off:false},0).wait(1).to({regX:60.5,scaleX:0.97,scaleY:0.97,rotation:-94,x:201.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-157.5,x:182.6,y:83},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-201,x:170},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-232.2,x:160.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-255.8,x:153.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-274.1,x:148.6,y:82.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-288.7,x:144.3,y:83},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-300.5,x:140.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-310.3,x:138},0).wait(1).to({scaleX:1,scaleY:1,rotation:-318.5,x:135.6},0).wait(1).to({rotation:-325.4,x:133.6,y:83.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-331.2,x:131.9,y:83},0).wait(1).to({scaleX:1,scaleY:1,rotation:-336.1,x:130.4},0).wait(1).to({rotation:-340.3,x:129.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-343.9,x:128.2},0).wait(1).to({rotation:-346.9,x:127.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-349.5,x:126.5},0).wait(1).to({rotation:-351.7,x:125.8},0).wait(1).to({rotation:-353.6,x:125.3},0).wait(1).to({rotation:-355.2,x:124.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-356.4,x:124.5},0).wait(1).to({rotation:-357.5,x:124.2},0).wait(1).to({rotation:-358.3,x:123.9},0).wait(1).to({rotation:-359,x:123.8},0).wait(1).to({rotation:-359.4,x:123.6},0).wait(1).to({rotation:-359.8,x:123.5},0).wait(1).to({rotation:-359.9},0).wait(1).to({rotation:-360},0).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(315,245,566,580);

})(window.history16Lib = window.history16Lib ||{}, window.history16Images = window.history16Images ||{}, createjs = createjs||{}, window.history16Ss = window.history16Ss||{});