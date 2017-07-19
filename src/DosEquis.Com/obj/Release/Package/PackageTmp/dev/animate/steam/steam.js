(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1500,
	height: 1220,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/Assets/Images/touts/steam/spacerjpg.jpg?1476470297885", id:"spacerjpg"},
		{src:"/Assets/Images/touts/steam/spacerpng.png?1476470297885", id:"spacerpng"}
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


(lib.steamcontainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,255,0,0.008)").s().p("AhoBpIAAjRIDRAAIAADRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-10.5,21,21);


(lib.steamparticle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#CCCCCC","#595959"],[0,1],0,0,0,0,0,2.7).s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAHQAAAIgGAGQgGAFgIAAQgHAAgGgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,4.1,4);


(lib.particles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.steamparticle();
	this.instance.setTransform(3.9,4,1,1,26.4,0,0,3.8,3.6);
	this.instance.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance.cache(-4,-4,8,8);

	this.instance_1 = new lib.steamparticle();
	this.instance_1.setTransform(5.1,3.5,1,1,26.4,0,0,3.8,3.6);
	this.instance_1.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_1.cache(-4,-4,8,8);

	this.instance_2 = new lib.steamparticle();
	this.instance_2.setTransform(5.3,5,1,1,0,0,0,3.8,3.6);
	this.instance_2.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_2.cache(-4,-4,8,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-6.1,14.3,14.6);


(lib.Steam1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{repeat:2});

	// timeline functions:
	this.frame_0 = function() {
		var numFrames = this.totalFrames;
		var ran = Math.floor(Math.random()*numFrames);
		this.gotoAndPlay(ran);
	}
	this.frame_124 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(124).call(this.frame_124).wait(1));

	// Layer 2
	this.instance = new lib.particles();
	this.instance.setTransform(3,5.7,1.146,0.756,-32.1,0,0,1.2,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({regX:2.7,regY:-0.7,scaleX:1.26,scaleY:0.88,rotation:-30.9,x:3.1,y:1.9,alpha:0.976},0).wait(1).to({scaleX:1.36,scaleY:0.99,rotation:-29.7,x:2.8,y:0.6,alpha:0.953},0).wait(1).to({scaleX:1.47,scaleY:1.11,rotation:-28.5,x:2.5,y:-0.7,alpha:0.93},0).wait(1).to({scaleX:1.57,scaleY:1.22,rotation:-27.4,x:2.2,y:-1.9,alpha:0.907},0).wait(1).to({scaleX:1.67,scaleY:1.33,rotation:-26.3,x:1.9,y:-3.1,alpha:0.885},0).wait(1).to({scaleX:1.77,scaleY:1.43,rotation:-25.2,x:1.6,y:-4.3,alpha:0.864},0).wait(1).to({scaleX:1.87,scaleY:1.54,rotation:-24.1,x:1.4,y:-5.4,alpha:0.843},0).wait(1).to({scaleX:1.96,scaleY:1.64,rotation:-23.1,x:1.1,y:-6.6,alpha:0.822},0).wait(1).to({scaleX:2.05,scaleY:1.74,rotation:-22.1,x:1,y:-7.7,alpha:0.802},0).wait(1).to({scaleX:2.14,scaleY:1.84,rotation:-21.1,x:0.7,y:-8.7,alpha:0.782},0).wait(1).to({scaleX:2.23,scaleY:1.94,rotation:-20.1,x:0.5,y:-9.7,alpha:0.763},0).wait(1).to({scaleX:2.32,scaleY:2.03,rotation:-19.1,x:0.4,y:-10.8,alpha:0.744},0).wait(1).to({scaleX:2.4,scaleY:2.12,rotation:-18.2,x:0.2,y:-11.8,alpha:0.726},0).wait(1).to({scaleX:2.49,scaleY:2.21,rotation:-17.3,x:0,y:-12.8,alpha:0.708},0).wait(1).to({scaleX:2.57,scaleY:2.3,rotation:-16.4,x:-0.1,y:-13.8,alpha:0.69},0).wait(1).to({scaleX:2.65,scaleY:2.39,rotation:-15.5,x:-0.2,y:-14.7,alpha:0.673},0).wait(1).to({scaleX:2.73,scaleY:2.47,rotation:-14.6,x:-0.4,y:-15.6,alpha:0.656},0).wait(1).to({scaleX:2.8,scaleY:2.55,rotation:-13.8,x:-0.5,y:-16.5,alpha:0.639},0).wait(1).to({scaleX:2.88,scaleY:2.63,rotation:-13,x:-0.6,y:-17.4,alpha:0.623},0).wait(1).to({scaleX:2.95,scaleY:2.71,rotation:-12.1,x:-0.7,y:-18.2,alpha:0.607},0).wait(1).to({scaleX:3.02,scaleY:2.79,rotation:-11.4,x:-0.8,y:-19,alpha:0.591},0).wait(1).to({scaleX:3.09,scaleY:2.87,rotation:-10.6,x:-0.9,y:-19.8,alpha:0.576},0).wait(1).to({scaleX:3.16,scaleY:2.94,rotation:-9.8,x:-1,y:-20.6,alpha:0.561},0).wait(1).to({scaleX:3.23,scaleY:3.02,rotation:-9.1,x:-1.1,y:-21.4,alpha:0.546},0).wait(1).to({scaleX:3.29,scaleY:3.09,rotation:-8.3,y:-22.2,alpha:0.532},0).wait(1).to({scaleX:3.36,scaleY:3.16,rotation:-7.6,x:-1.2,y:-22.9,alpha:0.518},0).wait(1).to({scaleX:3.42,scaleY:3.23,rotation:-6.9,x:-1.3,y:-23.6,alpha:0.504},0).wait(1).to({scaleX:3.48,scaleY:3.29,rotation:-6.2,y:-24.3,alpha:0.49},0).wait(1).to({scaleX:3.55,scaleY:3.36,rotation:-5.6,x:-1.4,y:-25,alpha:0.477},0).wait(1).to({scaleX:3.6,scaleY:3.42,rotation:-4.9,y:-25.6,alpha:0.464},0).wait(1).to({scaleX:3.66,scaleY:3.49,rotation:-4.3,x:-1.5,y:-26.3,alpha:0.451},0).wait(1).to({scaleX:3.72,scaleY:3.55,rotation:-3.6,y:-26.9,alpha:0.439},0).wait(1).to({scaleX:3.78,scaleY:3.61,rotation:-3,y:-27.5,alpha:0.427},0).wait(1).to({scaleX:3.83,scaleY:3.67,rotation:-2.4,y:-28.1,alpha:0.415},0).wait(1).to({scaleX:3.88,scaleY:3.73,rotation:-1.8,x:-1.6,y:-28.7,alpha:0.403},0).wait(1).to({scaleX:3.94,scaleY:3.78,rotation:-1.2,x:-1.7,y:-29.3,alpha:0.392},0).wait(1).to({scaleX:3.99,scaleY:3.84,rotation:-0.7,y:-29.8,alpha:0.38},0).wait(1).to({scaleX:4.04,scaleY:3.89,rotation:-0.1,y:-30.3,alpha:0.369},0).wait(1).to({scaleX:4.09,scaleY:3.95,rotation:0.4,y:-30.8,alpha:0.359},0).wait(1).to({scaleX:4.14,scaleY:4,rotation:1,y:-31.4,alpha:0.348},0).wait(1).to({scaleX:4.18,scaleY:4.05,rotation:1.5,y:-31.9,alpha:0.338},0).wait(1).to({scaleX:4.23,scaleY:4.1,rotation:2,x:-1.8,y:-32.3,alpha:0.328},0).wait(1).to({scaleX:4.27,scaleY:4.15,rotation:2.5,x:-1.7,y:-32.8,alpha:0.318},0).wait(1).to({scaleX:4.32,scaleY:4.2,rotation:3,x:-1.8,y:-33.3,alpha:0.308},0).wait(1).to({scaleX:4.36,scaleY:4.25,rotation:3.5,y:-33.8,alpha:0.299},0).wait(1).to({scaleX:4.4,scaleY:4.29,rotation:3.9,y:-34.2,alpha:0.29},0).wait(1).to({scaleX:4.45,scaleY:4.34,rotation:4.4,y:-34.7,alpha:0.281},0).wait(1).to({scaleX:4.49,scaleY:4.38,rotation:4.8,y:-35.1,alpha:0.272},0).wait(1).to({scaleX:4.53,scaleY:4.42,rotation:5.3,y:-35.5,alpha:0.263},0).wait(1).to({scaleX:4.56,scaleY:4.47,rotation:5.7,y:-35.8,alpha:0.255},0).wait(1).to({scaleX:4.6,scaleY:4.51,rotation:6.1,y:-36.2,alpha:0.246},0).wait(1).to({scaleX:4.64,scaleY:4.55,rotation:6.5,y:-36.6,alpha:0.238},0).wait(1).to({scaleX:4.68,scaleY:4.59,rotation:6.9,y:-37,alpha:0.23},0).wait(1).to({scaleX:4.71,scaleY:4.63,rotation:7.3,y:-37.4,alpha:0.223},0).wait(1).to({scaleX:4.75,scaleY:4.66,rotation:7.7,y:-37.7,alpha:0.215},0).wait(1).to({scaleX:4.78,scaleY:4.7,rotation:8.1,y:-38,alpha:0.208},0).wait(1).to({scaleX:4.81,scaleY:4.74,rotation:8.5,y:-38.4,alpha:0.2},0).wait(1).to({scaleX:4.85,scaleY:4.77,rotation:8.8,y:-38.7,alpha:0.193},0).wait(1).to({scaleX:4.88,scaleY:4.8,rotation:9.2,y:-39,alpha:0.186},0).wait(1).to({scaleX:4.91,scaleY:4.84,rotation:9.5,y:-39.3,alpha:0.18},0).wait(1).to({scaleX:4.94,scaleY:4.87,rotation:9.8,y:-39.6,alpha:0.173},0).wait(1).to({scaleX:4.97,scaleY:4.9,rotation:10.2,y:-39.9,alpha:0.167},0).wait(1).to({scaleX:5,scaleY:4.93,rotation:10.5,y:-40.2,alpha:0.16},0).wait(1).to({scaleX:5.02,scaleY:4.96,rotation:10.8,x:-1.7,y:-40.4,alpha:0.154},0).wait(1).to({scaleX:5.05,scaleY:4.99,rotation:11.1,x:-1.8,y:-40.7,alpha:0.148},0).wait(1).to({scaleX:5.08,scaleY:5.02,rotation:11.4,x:-1.7,y:-41,alpha:0.143},0).wait(1).to({scaleX:5.1,scaleY:5.05,rotation:11.7,x:-1.8,y:-41.2,alpha:0.137},0).wait(1).to({scaleX:5.13,scaleY:5.08,rotation:12,x:-1.7,y:-41.5,alpha:0.131},0).wait(1).to({scaleX:5.16,scaleY:5.11,rotation:12.2,y:-41.7,alpha:0.126},0).wait(1).to({scaleX:5.18,scaleY:5.13,rotation:12.5,y:-41.9,alpha:0.121},0).wait(1).to({scaleX:5.2,scaleY:5.16,rotation:12.8,y:-42.1,alpha:0.116},0).wait(1).to({scaleX:5.23,scaleY:5.18,rotation:13,y:-42.4,alpha:0.111},0).wait(1).to({scaleX:5.25,scaleY:5.21,rotation:13.3,y:-42.6,alpha:0.106},0).wait(1).to({scaleX:5.27,scaleY:5.23,rotation:13.5,y:-42.8,alpha:0.101},0).wait(1).to({scaleX:5.29,scaleY:5.25,rotation:13.7,y:-42.9,alpha:0.096},0).wait(1).to({scaleX:5.31,scaleY:5.27,rotation:14,y:-43.2,alpha:0.092},0).wait(1).to({scaleX:5.33,scaleY:5.3,rotation:14.2,y:-43.3,alpha:0.088},0).wait(1).to({scaleX:5.35,scaleY:5.32,rotation:14.4,x:-1.6,y:-43.5,alpha:0.083},0).wait(1).to({scaleX:5.37,scaleY:5.34,rotation:14.6,y:-43.7,alpha:0.079},0).wait(1).to({scaleX:5.39,scaleY:5.36,rotation:14.8,x:-1.7,y:-43.9,alpha:0.075},0).wait(1).to({scaleX:5.4,scaleY:5.38,rotation:15,y:-44,alpha:0.072},0).wait(1).to({scaleX:5.42,scaleY:5.4,rotation:15.2,x:-1.6,y:-44.2,alpha:0.068},0).wait(1).to({scaleX:5.44,scaleY:5.41,rotation:15.4,x:-1.7,y:-44.4,alpha:0.064},0).wait(1).to({scaleX:5.45,scaleY:5.43,rotation:15.5,x:-1.6,y:-44.5,alpha:0.061},0).wait(1).to({scaleX:5.47,scaleY:5.45,rotation:15.7,y:-44.6,alpha:0.057},0).wait(1).to({scaleX:5.48,scaleY:5.46,rotation:15.9,y:-44.8,alpha:0.054},0).wait(1).to({scaleX:5.5,scaleY:5.48,rotation:16,x:-1.7,y:-44.9,alpha:0.051},0).wait(1).to({scaleX:5.51,scaleY:5.49,rotation:16.2,x:-1.6,y:-45.1,alpha:0.048},0).wait(1).to({scaleX:5.53,scaleY:5.51,rotation:16.4,y:-45.2,alpha:0.045},0).wait(1).to({scaleX:5.54,scaleY:5.52,rotation:16.5,y:-45.3,alpha:0.042},0).wait(1).to({scaleX:5.55,scaleY:5.54,rotation:16.6,y:-45.4,alpha:0.039},0).wait(1).to({scaleX:5.56,scaleY:5.55,rotation:16.8,y:-45.5,alpha:0.037},0).wait(1).to({scaleX:5.58,scaleY:5.56,rotation:16.9,y:-45.6,alpha:0.034},0).wait(1).to({scaleX:5.59,scaleY:5.58,rotation:17,y:-45.8,alpha:0.032},0).wait(1).to({scaleX:5.6,scaleY:5.59,rotation:17.1,alpha:0.029},0).wait(1).to({scaleX:5.61,scaleY:5.6,rotation:17.3,y:-45.9,alpha:0.027},0).wait(1).to({scaleX:5.62,scaleY:5.61,rotation:17.4,y:-46,alpha:0.025},0).wait(1).to({scaleX:5.63,scaleY:5.62,rotation:17.5,x:-1.5,y:-46.1,alpha:0.023},0).wait(1).to({scaleX:5.64,scaleY:5.63,rotation:17.6,x:-1.6,y:-46.2,alpha:0.021},0).wait(1).to({scaleX:5.65,scaleY:5.64,rotation:17.7,y:-46.3,alpha:0.019},0).wait(1).to({scaleX:5.65,scaleY:5.65,x:-1.5,alpha:0.017},0).wait(1).to({scaleX:5.66,scaleY:5.65,rotation:17.8,x:-1.6,y:-46.4,alpha:0.016},0).wait(1).to({scaleX:5.67,scaleY:5.66,rotation:17.9,alpha:0.014},0).wait(1).to({scaleX:5.67,scaleY:5.67,rotation:18,x:-1.5,y:-46.5,alpha:0.013},0).wait(1).to({scaleX:5.68,scaleY:5.68,rotation:18.1,y:-46.6,alpha:0.011},0).wait(1).to({scaleX:5.69,scaleY:5.68,alpha:0.01},0).wait(1).to({scaleX:5.69,scaleY:5.69,rotation:18.2,y:-46.7,alpha:0.009},0).wait(1).to({scaleX:5.7,scaleY:5.7,y:-46.8,alpha:0.007},0).wait(1).to({scaleX:5.7,scaleY:5.7,rotation:18.3,x:-1.6,alpha:0.006},0).wait(1).to({scaleX:5.71,scaleY:5.71,x:-1.5,alpha:0.005},0).wait(1).to({scaleX:5.71,scaleY:5.71,rotation:18.4,y:-46.9},0).wait(1).to({scaleX:5.72,scaleY:5.71,alpha:0.004},0).wait(1).to({scaleX:5.72,scaleY:5.72,rotation:18.5,alpha:0.003},0).wait(1).to({scaleX:5.72,scaleY:5.72,alpha:0.002},0).wait(1).to({scaleX:5.72,scaleY:5.72,y:-47},0).wait(1).to({scaleX:5.73,scaleY:5.73,rotation:18.6,alpha:0.001},0).wait(1).to({scaleX:5.73,scaleY:5.73},0).wait(1).to({scaleX:5.73,scaleY:5.73},0).wait(1).to({scaleX:5.73,scaleY:5.73,alpha:0},0).wait(2).to({scaleX:5.73,scaleY:5.73},0).wait(1).to({regX:1.8,regY:1.4,x:-13.8,y:-36.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-1.8,13.2,15.7);


(lib.Steam0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"repeat":2});

	// timeline functions:
	this.frame_0 = function() {
		var numFrames = this.totalFrames;
		var ran = Math.floor(Math.random()*numFrames);
		this.gotoAndPlay(ran);
	}
	this.frame_124 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(124).call(this.frame_124).wait(1));

	// Layer 2
	this.instance = new lib.particles();
	this.instance.setTransform(2.9,0.8,1.686,1.686,-32.1,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({regX:2.7,regY:-0.7,scaleX:1.87,scaleY:1.87,rotation:-32.8,x:2.7,y:-4.8,alpha:0.976},0).wait(1).to({scaleX:2.04,scaleY:2.04,rotation:-33.4,x:2.5,y:-6.2,alpha:0.953},0).wait(1).to({scaleX:2.21,scaleY:2.21,rotation:-34.1,x:2.3,y:-7.6,alpha:0.93},0).wait(1).to({scaleX:2.38,scaleY:2.38,rotation:-34.7,x:2,y:-8.9,alpha:0.907},0).wait(1).to({scaleX:2.54,scaleY:2.54,rotation:-35.3,x:1.8,y:-10.2,alpha:0.885},0).wait(1).to({scaleX:2.7,scaleY:2.7,rotation:-35.9,x:1.6,y:-11.5,alpha:0.864},0).wait(1).to({scaleX:2.86,scaleY:2.86,rotation:-36.5,x:1.3,y:-12.7,alpha:0.843},0).wait(1).to({scaleX:3.01,scaleY:3.01,rotation:-37.1,x:1.1,y:-14,alpha:0.822},0).wait(1).to({scaleX:3.16,scaleY:3.16,rotation:-37.6,x:0.9,y:-15.2,alpha:0.802},0).wait(1).to({scaleX:3.31,scaleY:3.31,rotation:-38.2,x:0.6,y:-16.3,alpha:0.782},0).wait(1).to({scaleX:3.45,scaleY:3.45,rotation:-38.7,x:0.4,y:-17.5,alpha:0.763},0).wait(1).to({scaleX:3.59,scaleY:3.59,rotation:-39.3,x:0.1,y:-18.6,alpha:0.744},0).wait(1).to({scaleX:3.73,scaleY:3.73,rotation:-39.8,x:-0.1,y:-19.7,alpha:0.726},0).wait(1).to({scaleX:3.87,scaleY:3.87,rotation:-40.3,x:-0.3,y:-20.8,alpha:0.708},0).wait(1).to({scaleX:4,scaleY:4,rotation:-40.8,x:-0.6,y:-21.8,alpha:0.69},0).wait(1).to({scaleX:4.13,scaleY:4.13,rotation:-41.3,x:-0.8,y:-22.8,alpha:0.673},0).wait(1).to({scaleX:4.26,scaleY:4.26,rotation:-41.7,x:-1.1,y:-23.8,alpha:0.656},0).wait(1).to({scaleX:4.38,scaleY:4.38,rotation:-42.2,x:-1.3,y:-24.8,alpha:0.639},0).wait(1).to({scaleX:4.5,scaleY:4.5,rotation:-42.7,x:-1.6,y:-25.8,alpha:0.623},0).wait(1).to({scaleX:4.62,scaleY:4.62,rotation:-43.1,x:-1.8,y:-26.8,alpha:0.607},0).wait(1).to({scaleX:4.74,scaleY:4.74,rotation:-43.6,x:-2.1,y:-27.6,alpha:0.591},0).wait(1).to({scaleX:4.85,scaleY:4.85,rotation:-44,x:-2.3,y:-28.6,alpha:0.576},0).wait(1).to({scaleX:4.96,scaleY:4.96,rotation:-44.4,x:-2.6,y:-29.4,alpha:0.561},0).wait(1).to({scaleX:5.07,scaleY:5.07,rotation:-44.8,x:-2.8,y:-30.3,alpha:0.546},0).wait(1).to({scaleX:5.18,scaleY:5.18,rotation:-45.2,x:-3,y:-31.1,alpha:0.532},0).wait(1).to({scaleX:5.28,scaleY:5.28,rotation:-45.6,x:-3.2,y:-32,alpha:0.518},0).wait(1).to({scaleX:5.39,scaleY:5.39,rotation:-46,x:-3.5,y:-32.7,alpha:0.504},0).wait(1).to({scaleX:5.49,scaleY:5.49,rotation:-46.4,x:-3.8,y:-33.5,alpha:0.49},0).wait(1).to({scaleX:5.59,scaleY:5.59,rotation:-46.7,x:-3.9,y:-34.3,alpha:0.477},0).wait(1).to({scaleX:5.68,scaleY:5.68,rotation:-47.1,x:-4.2,y:-35,alpha:0.464},0).wait(1).to({scaleX:5.78,scaleY:5.78,rotation:-47.5,x:-4.4,y:-35.8,alpha:0.451},0).wait(1).to({scaleX:5.87,scaleY:5.87,rotation:-47.8,x:-4.6,y:-36.5,alpha:0.439},0).wait(1).to({scaleX:5.96,scaleY:5.96,rotation:-48.2,x:-4.9,y:-37.2,alpha:0.427},0).wait(1).to({scaleX:6.05,scaleY:6.05,rotation:-48.5,x:-5.1,y:-37.9,alpha:0.415},0).wait(1).to({scaleX:6.14,scaleY:6.14,rotation:-48.8,x:-5.3,y:-38.5,alpha:0.403},0).wait(1).to({scaleX:6.22,scaleY:6.22,rotation:-49.1,x:-5.5,y:-39.2,alpha:0.392},0).wait(1).to({scaleX:6.31,scaleY:6.31,rotation:-49.4,x:-5.8,y:-39.8,alpha:0.38},0).wait(1).to({scaleX:6.39,scaleY:6.39,rotation:-49.8,x:-5.9,y:-40.4,alpha:0.369},0).wait(1).to({scaleX:6.47,scaleY:6.47,rotation:-50.1,x:-6.2,y:-41.1,alpha:0.359},0).wait(1).to({scaleX:6.55,scaleY:6.55,rotation:-50.4,x:-6.4,y:-41.6,alpha:0.348},0).wait(1).to({scaleX:6.62,scaleY:6.62,rotation:-50.6,x:-6.6,y:-42.3,alpha:0.338},0).wait(1).to({scaleX:6.7,scaleY:6.7,rotation:-50.9,x:-6.8,y:-42.8,alpha:0.328},0).wait(1).to({scaleX:6.77,scaleY:6.77,rotation:-51.2,x:-7,y:-43.3,alpha:0.318},0).wait(1).to({scaleX:6.84,scaleY:6.84,rotation:-51.5,x:-7.2,y:-43.9,alpha:0.308},0).wait(1).to({scaleX:6.92,scaleY:6.92,rotation:-51.7,x:-7.4,y:-44.4,alpha:0.299},0).wait(1).to({scaleX:6.98,scaleY:6.98,rotation:-52,x:-7.6,y:-44.9,alpha:0.29},0).wait(1).to({scaleX:7.05,scaleY:7.05,rotation:-52.2,x:-7.8,y:-45.4,alpha:0.281},0).wait(1).to({scaleX:7.12,scaleY:7.12,rotation:-52.5,x:-7.9,y:-46,alpha:0.272},0).wait(1).to({scaleX:7.18,scaleY:7.18,rotation:-52.7,x:-8.1,y:-46.4,alpha:0.263},0).wait(1).to({scaleX:7.25,scaleY:7.25,rotation:-53,x:-8.3,y:-46.9,alpha:0.255},0).wait(1).to({scaleX:7.31,scaleY:7.31,rotation:-53.2,x:-8.5,y:-47.3,alpha:0.246},0).wait(1).to({scaleX:7.37,scaleY:7.37,rotation:-53.4,x:-8.7,y:-47.8,alpha:0.238},0).wait(1).to({scaleX:7.43,scaleY:7.43,rotation:-53.7,x:-8.8,y:-48.3,alpha:0.23},0).wait(1).to({scaleX:7.48,scaleY:7.48,rotation:-53.9,x:-9,y:-48.7,alpha:0.223},0).wait(1).to({scaleX:7.54,scaleY:7.54,rotation:-54.1,x:-9.1,y:-49.1,alpha:0.215},0).wait(1).to({scaleX:7.6,scaleY:7.6,rotation:-54.3,x:-9.3,y:-49.5,alpha:0.208},0).wait(1).to({scaleX:7.65,scaleY:7.65,rotation:-54.5,x:-9.5,y:-49.9,alpha:0.2},0).wait(1).to({scaleX:7.7,scaleY:7.7,rotation:-54.7,x:-9.7,y:-50.3,alpha:0.193},0).wait(1).to({scaleX:7.75,scaleY:7.75,rotation:-54.9,x:-9.8,y:-50.6,alpha:0.186},0).wait(1).to({scaleX:7.8,scaleY:7.8,rotation:-55.1,x:-10,y:-51,alpha:0.18},0).wait(1).to({scaleX:7.85,scaleY:7.85,rotation:-55.3,x:-10.1,y:-51.4,alpha:0.173},0).wait(1).to({scaleX:7.9,scaleY:7.9,rotation:-55.4,x:-10.2,y:-51.7,alpha:0.167},0).wait(1).to({scaleX:7.95,scaleY:7.95,rotation:-55.6,x:-10.4,y:-52.1,alpha:0.16},0).wait(1).to({scaleX:7.99,scaleY:7.99,rotation:-55.8,x:-10.5,y:-52.4,alpha:0.154},0).wait(1).to({scaleX:8.04,scaleY:8.04,rotation:-55.9,x:-10.7,y:-52.8,alpha:0.148},0).wait(1).to({scaleX:8.08,scaleY:8.08,rotation:-56.1,x:-10.8,y:-53,alpha:0.143},0).wait(1).to({scaleX:8.12,scaleY:8.12,rotation:-56.3,x:-10.9,y:-53.4,alpha:0.137},0).wait(1).to({scaleX:8.16,scaleY:8.16,rotation:-56.4,x:-11,y:-53.6,alpha:0.131},0).wait(1).to({scaleX:8.2,scaleY:8.2,rotation:-56.6,x:-11.2,y:-54,alpha:0.126},0).wait(1).to({scaleX:8.24,scaleY:8.24,rotation:-56.7,x:-11.3,y:-54.2,alpha:0.121},0).wait(1).to({scaleX:8.28,scaleY:8.28,rotation:-56.9,x:-11.4,y:-54.5,alpha:0.116},0).wait(1).to({scaleX:8.32,scaleY:8.32,rotation:-57,x:-11.5,y:-54.8,alpha:0.111},0).wait(1).to({scaleX:8.36,scaleY:8.36,rotation:-57.1,x:-11.6,y:-55,alpha:0.106},0).wait(1).to({scaleX:8.39,scaleY:8.39,rotation:-57.3,x:-11.8,y:-55.3,alpha:0.101},0).wait(1).to({scaleX:8.42,scaleY:8.42,rotation:-57.4,x:-11.9,y:-55.6,alpha:0.096},0).wait(1).to({scaleX:8.46,scaleY:8.46,rotation:-57.5,x:-12,y:-55.8,alpha:0.092},0).wait(1).to({scaleX:8.49,scaleY:8.49,rotation:-57.6,x:-12.1,y:-56,alpha:0.088},0).wait(1).to({scaleX:8.52,scaleY:8.52,rotation:-57.8,x:-12.2,y:-56.3,alpha:0.083},0).wait(1).to({scaleX:8.55,scaleY:8.55,rotation:-57.9,y:-56.5,alpha:0.079},0).wait(1).to({scaleX:8.58,scaleY:8.58,rotation:-58,x:-12.4,y:-56.7,alpha:0.075},0).wait(1).to({scaleX:8.61,scaleY:8.61,rotation:-58.1,y:-56.9,alpha:0.072},0).wait(1).to({scaleX:8.64,scaleY:8.64,rotation:-58.2,x:-12.6,y:-57.1,alpha:0.068},0).wait(1).to({scaleX:8.66,scaleY:8.66,rotation:-58.3,y:-57.3,alpha:0.064},0).wait(1).to({scaleX:8.69,scaleY:8.69,rotation:-58.4,x:-12.8,y:-57.5,alpha:0.061},0).wait(1).to({scaleX:8.72,scaleY:8.72,rotation:-58.5,y:-57.6,alpha:0.057},0).wait(1).to({scaleX:8.74,scaleY:8.74,rotation:-58.6,x:-12.9,y:-57.8,alpha:0.054},0).wait(1).to({scaleX:8.76,scaleY:8.76,rotation:-58.7,x:-13,y:-58,alpha:0.051},0).wait(1).to({scaleX:8.79,scaleY:8.79,rotation:-58.8,y:-58.2,alpha:0.048},0).wait(1).to({scaleX:8.81,scaleY:8.81,x:-13.2,y:-58.3,alpha:0.045},0).wait(1).to({scaleX:8.83,scaleY:8.83,rotation:-58.9,y:-58.5,alpha:0.042},0).wait(1).to({scaleX:8.85,scaleY:8.85,rotation:-59,x:-13.3,y:-58.6,alpha:0.039},0).wait(1).to({scaleX:8.87,scaleY:8.87,rotation:-59.1,x:-13.4,y:-58.8,alpha:0.037},0).wait(1).to({scaleX:8.89,scaleY:8.89,y:-58.9,alpha:0.034},0).wait(1).to({scaleX:8.91,scaleY:8.91,rotation:-59.2,x:-13.5,y:-59,alpha:0.032},0).wait(1).to({scaleX:8.93,scaleY:8.93,rotation:-59.3,y:-59.1,alpha:0.029},0).wait(1).to({scaleX:8.94,scaleY:8.94,x:-13.6,y:-59.2,alpha:0.027},0).wait(1).to({scaleX:8.96,scaleY:8.96,rotation:-59.4,y:-59.4,alpha:0.025},0).wait(1).to({scaleX:8.97,scaleY:8.97,rotation:-59.5,x:-13.7,y:-59.5,alpha:0.023},0).wait(1).to({scaleX:8.99,scaleY:8.99,y:-59.6,alpha:0.021},0).wait(1).to({scaleX:9,scaleY:9,rotation:-59.6,x:-13.8,y:-59.7,alpha:0.019},0).wait(1).to({scaleX:9.02,scaleY:9.02,y:-59.8,alpha:0.017},0).wait(1).to({scaleX:9.03,scaleY:9.03,rotation:-59.7,x:-13.9,y:-59.9,alpha:0.016},0).wait(1).to({scaleX:9.04,scaleY:9.04,alpha:0.014},0).wait(1).to({scaleX:9.05,scaleY:9.05,y:-60,alpha:0.013},0).wait(1).to({scaleX:9.06,scaleY:9.06,rotation:-59.8,x:-14,y:-60.1,alpha:0.011},0).wait(1).to({scaleX:9.07,scaleY:9.07,y:-60.2,alpha:0.01},0).wait(1).to({scaleX:9.08,scaleY:9.08,rotation:-59.9,alpha:0.009},0).wait(1).to({scaleX:9.09,scaleY:9.09,x:-14.1,y:-60.3,alpha:0.007},0).wait(1).to({scaleX:9.1,scaleY:9.1,y:-60.4,alpha:0.006},0).wait(1).to({scaleX:9.1,scaleY:9.1,alpha:0.005},0).wait(1).to({scaleX:9.11,scaleY:9.11,rotation:-60,y:-60.5},0).wait(1).to({scaleX:9.12,scaleY:9.12,x:-14.2,alpha:0.004},0).wait(1).to({scaleX:9.12,scaleY:9.12,y:-60.6,alpha:0.003},0).wait(1).to({scaleX:9.13,scaleY:9.13,alpha:0.002},0).wait(1).to({scaleX:9.13,scaleY:9.13},0).wait(1).to({scaleX:9.13,scaleY:9.13,rotation:-60.1,alpha:0.001},0).wait(1).to({scaleX:9.14,scaleY:9.14,y:-60.7},0).wait(1).to({scaleX:9.14,scaleY:9.14},0).wait(1).to({scaleX:9.14,scaleY:9.14,alpha:0},0).wait(1).to({scaleX:9.14,scaleY:9.14},0).wait(2).to({regX:1.6,regY:1.2,scaleX:9.14,scaleY:9.14,x:-3.8,y:-40.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-10.6,16.3,20.7);


// stage content:



(lib.steam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var self = this;
		
		this.areWeReady = true;
		this.isFirstTime = true;
		
		this.smokeArray = [];
		
		this.num0Particles = 15;
		this.num1Particles = 15;
		
		createSmoke();
		
		this.start = function() {
			for (var i = 0; i < self.smokeArray.length; i++) {
				self.smokeArray[i].play();
			}
		}
		
		this.pause = function() {
			for (var i = 0; i < self.smokeArray.length; i++) {
				self.smokeArray[i].stop();
			}
		}
		
		function createSmoke() {
			for (var i = 0; i < self.num0Particles; i++) {
				var p = new lib.Steam0();
				self.steamContainer.addChild(p);
				self.smokeArray.push(p);
			}
			for (var i = 0; i < self.num1Particles; i++) {
				var p = new lib.Steam1();
				self.steamContainer.addChild(p);
				self.smokeArray.push(p);
			}
		}
		
		setTimeout(function() {
			self.start();
		}, 1000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// spacers
	this.instance = new lib.spacerpng();
	this.instance.setTransform(3,-19);

	this.instance_1 = new lib.spacerjpg();
	this.instance_1.setTransform(3,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// animation
	this.steamContainer = new lib.steamcontainer();
	this.steamContainer.setTransform(506.9,616,1.5,1.5,0,0,180,10.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.steamContainer).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(753,591,535.4,635);

})(window.steamLib = window.steamLib ||{}, window.steamImages = window.steamImages ||{}, createjs = createjs||{}, window.steamSs = window.steamSs ||{});