(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 683,
	height: 433,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/Assets/Images/touts/us-map/label.jpg?1475703005434", id:"label"},
		{src:"/Assets/Images/touts/us-map/spacerpng.png?1475703005434", id:"spacerpng"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.label = function() {
	this.initialize(img.label);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,637,429);


(lib.spacerpng = function() {
	this.initialize(img.spacerpng);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.label();
	this.instance.setTransform(-318.5,-214.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-318.5,-214.5,637,429);


(lib.shine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-84.3,-24.3,84.1,24.2).s().p("Eg2/Au8MBPqhnaIeVJjMhPrBnag");
	this.shape.setTransform(179.2,287.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.8,-73.9,704,723.2);


(lib.maskmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0E0E").s().p("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");
	this.shape.setTransform(178.7,192.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.8,5.1,593.1,375);


(lib.mapanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(51).call(this.frame_51).wait(1));

	// stroke
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E8DBB1").ss(0.5,1,1).p("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");
	this.shape.setTransform(1.4,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(52));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(1.4,4);

	// Layer 7
	this.instance = new lib.shine();
	this.instance.setTransform(-444.9,12.2,1,1,0,0,0,179,287.6);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(1).to({regX:179.1,x:-266.5},0).wait(1).to({x:-121.9},0).wait(1).to({x:-8.5},0).wait(1).to({x:79.1},0).wait(1).to({x:146.6},0).wait(1).to({x:198.7},0).wait(1).to({x:239.2},0).wait(1).to({x:270.9},0).wait(1).to({x:295.8},0).wait(1).to({x:315.3},0).wait(1).to({x:330.5},0).wait(1).to({x:342.4},0).wait(1).to({x:351.6},0).wait(1).to({x:358.5},0).wait(1).to({x:363.6},0).wait(1).to({x:367.2},0).wait(1).to({x:369.5},0).wait(1).to({x:370.8},0).wait(1).to({regX:179,x:371.1},0).to({_off:true},1).wait(26));

	// Layer 3
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(0.6,-7.1,2.005,2.005,0,0,0,0.1,-0.1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,scaleX:2,scaleY:2,x:0.4,y:-6.9},0).wait(1).to({scaleX:2,scaleY:2},0).wait(1).to({scaleX:1.99,scaleY:1.99},0).wait(1).to({scaleX:1.98,scaleY:1.98},0).wait(1).to({scaleX:1.97,scaleY:1.97},0).wait(1).to({scaleX:1.95,scaleY:1.95},0).wait(1).to({scaleX:1.93,scaleY:1.93},0).wait(1).to({scaleX:1.9,scaleY:1.9},0).wait(1).to({scaleX:1.86,scaleY:1.86},0).wait(1).to({scaleX:1.82,scaleY:1.82},0).wait(1).to({scaleX:1.76,scaleY:1.76},0).wait(1).to({scaleX:1.7,scaleY:1.7},0).wait(1).to({scaleX:1.63,scaleY:1.63},0).wait(1).to({scaleX:1.56,scaleY:1.56},0).wait(1).to({scaleX:1.49,scaleY:1.49},0).wait(1).to({scaleX:1.42,scaleY:1.42},0).wait(1).to({scaleX:1.36,scaleY:1.36},0).wait(1).to({scaleX:1.31,scaleY:1.31},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,x:0.5,y:-7},0).wait(16));

	// shadow
	this.instance_2 = new lib.maskmc();
	this.instance_2.setTransform(-183.4,-195.2,1.043,1.043);
	this.instance_2.alpha = 0.422;
	this.instance_2.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_2.cache(-120,3,597,379);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.3,-194.9,632,404);


// stage content:
(lib.us_map = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var self = this;
		
		this.areWeReady = true;
		this.isFirstTime = true;
		
		this.start = function() {
			if (self.isFirstTime) {
				//console.log("play");
				this.play();
			}
			self.isFirstTime = false;
		}
		
		this.pause = function() {
		}
	}
	this.frame_15 = function() {
		this.animation.play();
	}
	this.frame_42 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(27).call(this.frame_42).wait(1));

	// spacer
	this.instance = new lib.spacerpng();
	this.instance.setTransform(0,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43));

	// map
	this.animation = new lib.mapanim();
	this.animation.setTransform(328.4,-69.6,0.02,0.02,0,0,0,2.5,-5);

	this.timeline.addTween(cjs.Tween.get(this.animation).wait(16).to({x:338.4,y:203.3},0).wait(1).to({regX:2.9,regY:5.5,scaleX:0.52,scaleY:0.52,x:338.6,y:208.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:211.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:338.7,y:212.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:338.8,y:213.7},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:338.7,y:214.3},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:338.8,y:214.6},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:214.7},0).wait(1).to({regX:0.6,regY:-7,scaleX:1.09,scaleY:1.09,x:338.4,y:203.3},0).wait(1).to({regX:2.9,regY:5.5,scaleX:1.08,scaleY:1.08,x:340.9,y:216.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:340.8,y:216.2},0).wait(1).to({scaleX:1,scaleY:1,x:340.7,y:215.7},0).wait(1).to({regX:0.5,regY:-7,scaleX:0.98,scaleY:0.98,x:338.4,y:203.3},0).wait(1).to({regX:2.9,regY:5.5,scaleX:0.98,scaleY:0.98,x:340.7,y:215.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:215.7},0).wait(1).to({scaleX:1,scaleY:1,x:340.8,y:215.8},0).wait(1).to({regX:0.5,regY:-7,scaleX:1,scaleY:1,x:338.4,y:203.3},0).wait(11));

	// pre
	this.instance_1 = new lib.maskmc();
	this.instance_1.setTransform(340,216.2,1.045,1.045,0,0,0,178.7,192.6);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.instance_1.cache(-120,3,597,379);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({regY:192.5,scaleX:1.04,scaleY:1.04,y:216.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:216},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:216.1},0).wait(1).to({scaleX:1,scaleY:1,y:216},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:216.1},0).wait(1).to({scaleX:0.59,scaleY:0.59},0).wait(1).to({scaleX:0.39,scaleY:0.39},0).wait(1).to({regX:180.1,regY:193.5,scaleX:0.03,scaleY:0.03},0).to({_off:true},1).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(341.5,138.2,650,490.4);

})(window.usMapLib = window.usMapLib ||{}, window.usMapImages = window.usMapImages ||{}, createjs = createjs||{}, window.usMapSs = window.usMapSs ||{});