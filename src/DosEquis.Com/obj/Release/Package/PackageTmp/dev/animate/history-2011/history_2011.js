(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 630,
	height: 560,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/Assets/Images/touts/2011/history_2011_atlas_P_.png?1474318184484", id:"history_2011_atlas_P_"},
		{src:"/Assets/Images/touts/2011/history_2011_atlas_NP_.jpg?1474318184484", id:"history_2011_atlas_NP_"}
	]
};



lib.ssMetadata = [
		{name:"history_2011_atlas_P_", frames: [[0,0,160,533],[162,0,156,531]]},
		{name:"history_2011_atlas_NP_", frames: [[0,0,213,213],[0,215,213,213]]}
];


// symbols:



(lib.circlenew = function() {
	this.spriteSheet = ss["history_2011_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.circleold = function() {
	this.spriteSheet = ss["history_2011_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.newbottle = function() {
	this.spriteSheet = ss["history_2011_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.oldbottle = function() {
	this.spriteSheet = ss["history_2011_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.circlenew();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,213);


(lib.shine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.2)","rgba(255,255,255,0.698)","rgba(255,255,255,0.2)"],[0,0.471,1],-77.5,0,77.5,0).s().p("EgMGA0uMAAAhpbIYMAAMAAABpbg");
	this.shape.setTransform(77.5,337.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,675);


(lib.oldinside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.oldbottle();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,531);


(lib.oldimage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.circleold();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,213);


(lib.newinside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.newbottle();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,533);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_26 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(26).call(this.frame_26).wait(1));

	// Layer 1
	this.instance = new lib.newinside();
	this.instance.setTransform(79,495.5,1,1,0,0,0,79,495.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:80,regY:266.5,rotation:-0.2,x:79.3,y:266.5},0).wait(1).to({rotation:-0.4,x:78.2},0).wait(1).to({rotation:-0.8,x:76.8},0).wait(1).to({rotation:-1.3,x:74.8,y:266.6},0).wait(1).to({rotation:-1.9,x:72.7},0).wait(1).to({rotation:-2.3,x:70.8,y:266.7},0).wait(1).to({rotation:-2.7,x:69.5,y:266.8},0).wait(1).to({rotation:-2.9,x:68.6},0).wait(1).to({regX:79,regY:495.6,rotation:-3,x:79.1,y:495.6},0).wait(4).to({regX:80,regY:266.5,rotation:-2.8,x:69.1,y:266.8},0).wait(1).to({rotation:-2.4,x:70.7,y:266.7},0).wait(1).to({rotation:-1.8,x:72.9,y:266.6},0).wait(1).to({rotation:-1.1,x:75.8,y:266.5},0).wait(1).to({rotation:-0.4,x:78.4},0).wait(1).to({rotation:0,x:80.1},0).wait(1).to({rotation:0.2,x:81},0).wait(1).to({regX:79,regY:495.5,rotation:0.3,x:79.1,y:495.5},0).to({rotation:0,x:79},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,533);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("APgAAQAAGakjEjQkjEjmaAAQmaAAkjkjQkikjAAmaQAAmaEikjQEjkiGaAAQGaAAEjEiQEjEjAAGag");
	this.shape.setTransform(106.3,102.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_33 = new cjs.Graphics().p("Aq9K9QkikiAAmbQAAmZEikkQEkkiGZAAQGbAAEiEiQEjEkAAGZQAAGbkjEiQkiEjmbAAQmZAAkkkjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(33).to({graphics:mask_graphics_33,x:106.3,y:102.3}).wait(27));

	// Layer 7
	this.instance = new lib.shine();
	this.instance.setTransform(-73.4,148.6,1,0.579,-6.5,0,0,77.4,337.3);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).to({x:304.6},13,cjs.Ease.get(1)).wait(14));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Aq9K9QkikiAAmbQAAmZEikkQEkkiGZAAQGbAAEiEiQEjEkAAGZQAAGbkjEiQkiEjmbAAQmZAAkkkjg");
	mask_1.setTransform(106.3,102.3);

	// Layer 1
	this.instance_1 = new lib.oldimage();
	this.instance_1.setTransform(106.6,106.6,1.451,1.451,0,0,0,106.5,106.5);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:106.5,y:106.5},33,cjs.Ease.get(1)).wait(27));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.298)").s().p("ArZMfIABAAIgBABIAAgBgAqdsfIK+HqQK5HiAAAGQAAAFraExQrWEwgCAGIA74+g");
	this.shape_1.setTransform(76,172);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,2,203.6,250);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(33).call(this.frame_33).wait(1));

	// Layer 3
	this.instance = new lib.oldinside();
	this.instance.setTransform(79,500.5,1,1,0,0,0,79,500.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:78,regY:265.5,rotation:0.2,x:78.8,y:265.6},0).wait(1).to({rotation:0.4,x:79.9,y:265.5},0).wait(1).to({rotation:0.8,x:81.4,y:265.6},0).wait(1).to({rotation:1.3,x:83.4},0).wait(1).to({rotation:1.9,x:85.6},0).wait(1).to({rotation:2.3,x:87.5,y:265.7},0).wait(1).to({rotation:2.7,x:88.8},0).wait(1).to({rotation:2.9,x:89.8,y:265.8},0).wait(1).to({regX:79,regY:500.5,rotation:3,x:79,y:500.5},0).wait(4).to({regX:78,regY:265.5,rotation:2.8,x:89.3,y:265.8},0).wait(1).to({rotation:2.5,x:88.1,y:265.7},0).wait(1).to({rotation:2.1,x:86.6,y:265.6},0).wait(1).to({rotation:1.6,x:84.8},0).wait(1).to({rotation:1.1,x:82.6},0).wait(1).to({rotation:0.5,x:80,y:265.5},0).wait(1).to({rotation:-0.2,x:77.1},0).wait(1).to({regX:79,regY:500.6,rotation:-1,x:79.1,y:500.5},0).wait(1).to({regX:78,regY:265.5,rotation:-0.9,x:74.4,y:265.5},0).wait(1).to({rotation:-0.8,x:74.9,y:265.4},0).wait(1).to({rotation:-0.6,x:75.4,y:265.5},0).wait(1).to({rotation:-0.5,x:75.9},0).wait(1).to({rotation:-0.4,x:76.4},0).wait(1).to({rotation:-0.3,x:76.7,y:265.4},0).wait(1).to({rotation:-0.2,x:77.1,y:265.5},0).wait(1).to({rotation:-0.1,x:77.5,y:265.4},0).wait(1).to({x:77.8},0).wait(1).to({regX:79,regY:500.5,rotation:0,x:79,y:500.5},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,531);


(lib.circlenew_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_58 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(58).call(this.frame_58).wait(1));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_45 = new cjs.Graphics().p("Aq9K9QkikiAAmbQAAmZEikkQEkkiGZAAQGbAAEiEiQEjEkAAGZQAAGbkjEiQkiEjmbAAQmZAAkkkjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(45).to({graphics:mask_graphics_45,x:106.3,y:102.3}).wait(14));

	// Layer 7
	this.instance = new lib.shine();
	this.instance.setTransform(-73.4,148.6,1,0.579,-6.5,0,0,77.4,337.3);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({x:304.6},13,cjs.Ease.get(1)).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("APgAAQAAGakjEjQkjEjmaAAQmaAAkjkjQkikjAAmaQAAmaEikjQEjkiGaAAQGaAAEjEiQEjEjAAGag");
	this.shape.setTransform(106.3,102.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(59));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Aq9K9QkikiAAmbQAAmZEikkQEkkiGZAAQGbAAEiEiQEjEkAAGZQAAGbkjEiQkiEjmbAAQmZAAkkkjg");
	mask_1.setTransform(106.3,102.3);

	// Layer 1
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(106.5,106.5,1.404,1.404,0,0,0,106.5,106.5);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1},31,cjs.Ease.get(1)).wait(28));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.298)").s().p("ALbMZIAAAAIAAAAIAAAAgAraCPILHnXQK9nSAFACQAFACASMWQAQMUAFAFI21qKg");
	this.shape_1.setTransform(134.4,174.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.1,2,201.5,251.7);


// stage content:
(lib.history_2011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
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
	}
	this.frame_5 = function() {
		this.newBottle.play();
	}
	this.frame_7 = function() {
		this.oldBottle.play();
	}
	this.frame_48 = function() {
		this.oldBottle.play();
	}
	this.frame_52 = function() {
		this.newCircle.play();
	}
	this.frame_54 = function() {
		this.oldCircle.play();
	}
	this.frame_101 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(2).call(this.frame_7).wait(41).call(this.frame_48).wait(4).call(this.frame_52).wait(2).call(this.frame_54).wait(47).call(this.frame_101).wait(1));

	// circle-old
	this.oldCircle = new lib.Symbol3();
	this.oldCircle.setTransform(51.5,405.5,0.256,0.256,0,0,0,5.3,252.7);
	this.oldCircle._off = true;

	this.timeline.addTween(cjs.Tween.get(this.oldCircle).wait(53).to({_off:false},0).wait(1).to({regX:104.5,regY:127.2,scaleX:0.82,scaleY:0.82,rotation:-0.7,x:143.2,y:271.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-0.9,x:163.6,y:238.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:-1,x:172,y:225.5},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:175.4,y:220},0).wait(1).to({regX:3.6,regY:251.6,scaleX:1.1,scaleY:1.1,x:69.6,y:358.6},0).wait(1).to({regX:104.5,regY:127.2,scaleX:1.09,scaleY:1.09,rotation:-0.8,x:177.6,y:221.2},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:-0.5,x:176.5,y:224.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:0,x:174.7,y:228.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.5,x:172.5,y:233.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:0.9,x:171,y:237.3},0).wait(1).to({regX:3.6,regY:251.7,scaleX:0.98,scaleY:0.98,rotation:1,x:69.6,y:358.6},0).wait(1).to({regX:104.5,regY:127.2,scaleX:0.98,scaleY:0.98,rotation:0.9,x:170.8,y:237.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:0.8,x:171.2,y:236.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.5,x:172,y:234.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:0.2,x:172.8,y:232.3},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:0.1,x:173.3,y:230.8},0).wait(1).to({regX:3.6,regY:251.6,scaleX:1.03,scaleY:1.03,rotation:0,x:69.5,y:358.5},0).wait(1).to({regX:104.5,regY:127.2,scaleX:1.03,scaleY:1.03,x:173.3,y:230.5},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:173.1,y:230.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:172.7,y:231.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:172.2,y:231.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:171.7,y:232.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:171.1,y:233.2},0).wait(1).to({scaleX:1,scaleY:1,x:170.7,y:233.7},0).wait(1).to({scaleX:1,scaleY:1,x:170.4,y:234},0).wait(1).to({regX:3.5,regY:251.5,scaleX:1,scaleY:1,x:69.5,y:358.5},0).wait(23));

	// circle-new
	this.newCircle = new lib.circlenew_1();
	this.newCircle.setTransform(574.6,372.6,0.218,0.218,0,0,0,209,252.1);
	this.newCircle._off = true;

	this.timeline.addTween(cjs.Tween.get(this.newCircle).wait(51).to({_off:false},0).wait(1).to({regX:107.1,regY:128.1,scaleX:0.8,scaleY:0.8,rotation:1,x:483.8,y:262.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:1.3,x:462.8,y:235.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:1.4,x:454.2,y:225},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:450.7,y:220.6},0).wait(1).to({regX:207.6,regY:251.6,scaleX:1.1,scaleY:1.1,x:558.6,y:358.5},0).wait(1).to({regX:107.1,regY:128.1,scaleX:1.09,scaleY:1.09,rotation:1.3,x:451.9,y:221.4},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:0.9,x:452.8,y:224.6},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:0.3,x:454.4,y:229.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-0.4,x:456.2,y:234.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-0.9,x:457.6,y:238.1},0).wait(1).to({regX:207.6,regY:251.7,scaleX:0.98,scaleY:0.98,rotation:-1,x:558.5,y:358.6},0).wait(1).to({regX:107.1,regY:128.1,scaleX:0.98,scaleY:0.98,rotation:-0.9,x:457.8,y:238.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-0.8,x:457.5,y:237.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.5,x:457,y:236.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-0.2,x:456.4,y:234.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-0.1,x:456.1,y:233},0).wait(1).to({regX:207.6,regY:251.7,scaleX:1.02,scaleY:1.02,rotation:0,x:558.5,y:358.6},0).wait(1).to({regX:107.1,regY:128.1,scaleX:1.02,scaleY:1.02,x:456.1,y:232.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:456.3,y:232.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:456.5,y:233.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:456.9,y:233.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:457.3,y:234.2},0).wait(1).to({scaleX:1,scaleY:1,x:457.7,y:234.6},0).wait(1).to({scaleX:1,scaleY:1,x:457.9,y:234.9},0).wait(1).to({regX:207.5,regY:251.5,scaleX:1,scaleY:1,x:558.5,y:358.5},0).wait(26));

	// bottle-new
	this.newBottle = new lib.Symbol4();
	this.newBottle.setTransform(328,499.4,1,1,0,0,0,80,497.4);

	this.timeline.addTween(cjs.Tween.get(this.newBottle).wait(6).to({regX:68.4,regY:266.8,x:316.5,y:268.8},0).wait(1).to({x:317},0).wait(1).to({x:317.8},0).wait(1).to({x:319},0).wait(1).to({x:320.6},0).wait(1).to({x:322.7},0).wait(1).to({x:325.4},0).wait(1).to({x:328.7},0).wait(1).to({x:332.8},0).wait(1).to({x:337.9},0).wait(1).to({x:344},0).wait(1).to({x:351.6},0).wait(1).to({x:360.8},0).wait(1).to({x:372.1},0).wait(1).to({x:385.9},0).wait(1).to({x:402.6},0).wait(1).to({x:421.7},0).wait(1).to({x:441.8},0).wait(1).to({x:461},0).wait(1).to({x:477.6},0).wait(1).to({x:491.5},0).wait(1).to({x:502.9},0).wait(1).to({x:512.1},0).wait(1).to({x:519.7},0).wait(1).to({x:525.9},0).wait(1).to({x:530.9},0).wait(1).to({x:535.1},0).wait(1).to({x:538.4},0).wait(1).to({x:541.1},0).wait(1).to({x:543.2},0).wait(1).to({x:544.8},0).wait(1).to({x:546},0).wait(1).to({x:546.8},0).wait(1).to({x:547.3},0).wait(1).to({regX:80,regY:497.4,x:559,y:499.4},0).wait(62));

	// bottle-old
	this.oldBottle = new lib.Symbol2();
	this.oldBottle.setTransform(331,493.5,1,1,0,0,0,79,489.5);

	this.timeline.addTween(cjs.Tween.get(this.oldBottle).wait(8).to({regX:86.7,regY:265.8,x:338.5,y:269.8},0).wait(1).to({x:338},0).wait(1).to({x:337.1},0).wait(1).to({x:335.8},0).wait(1).to({x:334},0).wait(1).to({x:331.7},0).wait(1).to({x:328.7},0).wait(1).to({x:324.9},0).wait(1).to({x:320.3},0).wait(1).to({x:314.6},0).wait(1).to({x:307.7},0).wait(1).to({x:299.3},0).wait(1).to({x:288.9},0).wait(1).to({x:276.2},0).wait(1).to({x:260.7},0).wait(1).to({x:242.1},0).wait(1).to({x:220.7},0).wait(1).to({x:198.1},0).wait(1).to({x:176.6},0).wait(1).to({x:157.9},0).wait(1).to({x:142.3},0).wait(1).to({x:129.6},0).wait(1).to({x:119.2},0).wait(1).to({x:110.8},0).wait(1).to({x:103.8},0).wait(1).to({x:98.1},0).wait(1).to({x:93.5},0).wait(1).to({x:89.8},0).wait(1).to({x:86.8},0).wait(1).to({x:84.4},0).wait(1).to({x:82.6},0).wait(1).to({x:81.3},0).wait(1).to({x:80.4},0).wait(1).to({x:79.9},0).wait(1).to({regX:79,regY:489.5,x:72,y:493.5},0).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(83,282,640,596);

})(window.historyElevenLib = window.historyElevenLib||{}, window.historyElevenImages = window.historyElevenImages||{}, createjs = createjs||{}, window.historyElevenSs = window.historyElevenSs||{});