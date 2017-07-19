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
		{src:"/Assets/Images/touts/beer-finder/map.png?1474650282789", id:"map"},
		{src:"/Assets/Images/touts/beer-finder/spacerjpg.jpg?1474650282789", id:"spacerjpg"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.map = function() {
	this.initialize(img.map);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,458,172);


(lib.spacerjpg = function() {
	this.initialize(img.spacerjpg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.tabSPRITE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F8E9C0","#B38146"],[0,1],-70.9,-29.2,50.7,14).s().p("AktGnQksqFgMi1QgIhtAphvQAqhuBRhaQC4jLEWgHQEQgHC4DWQBOBbApBvQAoBsgGBhQgICSk2KdQibFOiQEwQiUkfiWlEgAjZp4QhXBXAAB6QAAB6BXBWQBWBXB6AAQB4AABXhXQBWhWAAh6QAAh6hWhXQhXhWh4AAQh6AAhWBWg");
	this.shape.setTransform(61.6,103.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.1,207);


(lib.map_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.map();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,458,172);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2D2D2D","#000000","#000000"],[0,0.537,1],0,-238.9,0,239).s().p("EgjxArmMAAAhXLMBHjAAAMAAABXLg");
	this.shape.setTransform(229,279);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,458,558);


(lib.sp2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{repeat:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		var maxFrames = 70;
		var num = Math.floor(Math.random()*maxFrames + 1);
		this.gotoAndPlay(num);
	}
	this.frame_83 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(81).call(this.frame_83).wait(1));

	// Layer 1
	this.instance = new lib.tabSPRITE();
	this.instance.setTransform(16.4,54.5,0.265,0.265,0,0,0,61.6,205.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({y:37.2},4,cjs.Ease.get(1)).to({y:54.5},5,cjs.Ease.get(1)).to({regY:205.4,scaleY:0.26},2).to({regY:205.2,scaleY:0.27},3).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.7,54.9);


(lib.hero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"repeat":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_84 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(84).call(this.frame_84).wait(1));

	// Layer 3
	this.instance = new lib.tabSPRITE();
	this.instance.setTransform(16.4,54.5,0.265,0.265,0,0,0,61.6,205.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({y:38.7},4,cjs.Ease.get(1)).to({y:54.5},4,cjs.Ease.get(-1)).to({regY:205.4,scaleY:0.26},2).to({regY:205.2,scaleY:0.27},3).wait(68));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.7,54.9);


// stage content:



(lib.beer_finder_tout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;

		this.areWeReady = true;
		this.numTabs = 5;

		this.start = function() {
			for (var i=0; i<this.numTabs; i++) {
				var tab = this["t"+i];
				tab.play();
			}
		}

		this.pause = function() {
			for (var i=0; i<this.numTabs; i++) {
				var tab = this["t"+i];
				tab.stop();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// t0
	this.t0 = new lib.sp2();
	this.t0.setTransform(89.1,385.6,0.508,0.508,0,0,0,16.4,27.6);

	this.timeline.addTween(cjs.Tween.get(this.t0).wait(1));

	// t1
	this.t1 = new lib.hero();
	this.t1.setTransform(234.2,381.1,3.175,3.175,0,0,0,16.4,27.4);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// t2
	this.t2 = new lib.hero();
	this.t2.setTransform(234.4,469.2,1.573,1.387,0,54.8,35.2,16.4,54.5);
	this.t2.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t3
	this.t3 = new lib.sp2();
	this.t3.setTransform(333.3,393.1,1.255,1.255,0,0,0,16.4,27.6);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t4
	this.t4 = new lib.sp2();
	this.t4.setTransform(445,395.1,0.508,0.508,0,0,0,16.4,27.6);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// map
	this.instance = new lib.map_1();
	this.instance.setTransform(229,472,1,1,0,0,0,229,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(229,279,1,1,0,0,0,229,279);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// spacers
	this.instance_2 = new lib.spacerjpg();
	this.instance_2.setTransform(15,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(229,263,466.7,581.8);

})(window.beerFinderToutLib = window.beerFinderToutLib||{}, window.beerFinderToutImages = window.beerFinderToutImages||{}, createjs = createjs||{}, window.beerFinderToutSs = window.beerFinderToutSs||{});
