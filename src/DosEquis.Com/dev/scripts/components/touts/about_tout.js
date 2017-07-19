(function (lib, img, cjs, ss, an) {
console.log('about-tout',createjs);
var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.foreground = function() {
	this.initialize(img.foreground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,458,394);


(lib.sky = function() {
	this.initialize(img.sky);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1008,295);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.steamcontainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,255,0,0.008)").s().p("AhoBpIAAjRIDRAAIAADRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.steamcontainer, new cjs.Rectangle(-10.5,-10.5,21,21), null);


(lib.steamparticle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#CCCCCC","#595959"],[0,1],0,0,0,0,0,2.7).s().p("AgNAOQgGgGgBgIQABgHAGgGQAGgGAHAAQAIAAAGAGQAHAGAAAHQAAAIgHAGQgGAGgIAAQgHAAgGgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.steamparticle, new cjs.Rectangle(-2,-2,4.1,4), null);


(lib.sky_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sky();
	this.instance.parent = this;
	this.instance.setTransform(1008,0);

	this.instance_1 = new lib.sky();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sky_1, new cjs.Rectangle(0,0,2016,295), null);


(lib._null = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0)").s().p("AgdAeQgNgMAAgSQAAgQANgNQANgNAQAAQASAAAMANQAMANAAAQQAAASgMAMQgMAMgSAAQgQAAgNgMg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._null, new cjs.Rectangle(0,0,8.5,8.5), null);


(lib.foreground_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.foreground();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.foreground_1, new cjs.Rectangle(0,0,458,394), null);


(lib.sky2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{repeat:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1267 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1267).call(this.frame_1267).wait(1));

	// Layer 1
	this.instance = new lib.sky_1();
	this.instance.parent = this;
	this.instance.setTransform(504,147.5,1,1,0,0,0,504,147.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:-46},1263).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2016,295);


(lib.particles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.steamparticle();
	this.instance.parent = this;
	this.instance.setTransform(3.9,4,1,1,26.4,0,0,3.8,3.6);
	this.instance.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance.cache(-4,-4,8,8);

	this.instance_1 = new lib.steamparticle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.1,3.5,1,1,26.4,0,0,3.8,3.6);
	this.instance_1.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_1.cache(-4,-4,8,8);

	this.instance_2 = new lib.steamparticle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(5.3,5,1,1,0,0,0,3.8,3.6);
	this.instance_2.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_2.cache(-4,-4,8,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.particles, new cjs.Rectangle(-2.7,-6.1,14.3,14.6), null);


(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// null
	this.nullMC = new lib._null();
	this.nullMC.parent = this;
	this.nullMC.setTransform(118.8,249.8,1,1,0,0,0,4.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.nullMC).wait(1));

	// foreground
	this.instance = new lib.foreground_1();
	this.instance.parent = this;
	this.instance.setTransform(229,361,1,1,0,0,0,229,197);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// steam container
	this.steamContainer = new lib.steamcontainer();
	this.steamContainer.parent = this;
	this.steamContainer.setTransform(129,271.1,1,1,0,0,0,10.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.steamContainer).wait(1));

	// sky
	this.sky = new lib.sky2();
	this.sky.parent = this;
	this.sky.setTransform(504,147.5,1,1,0,0,0,504,147.5);

	this.timeline.addTween(cjs.Tween.get(this.sky).wait(1));

}).prototype = getMCSymbolPrototype(lib.animation, new cjs.Rectangle(0,0,2016,558), null);


(lib.Steam1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"repeat":6});

	// timeline functions:
	this.frame_0 = function() {
		var numFrames = this.totalFrames;
		var ran = Math.floor(Math.random()*numFrames);
		this.gotoAndPlay(ran);
		this.stop();
	}
	this.frame_128 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(128).call(this.frame_128).wait(1));

	// Layer 2
	this.instance = new lib.particles();
	this.instance.parent = this;
	this.instance.setTransform(2.9,5.5,1.024,1.024,-32.1,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({regY:1.5,scaleX:0.66,scaleY:0.66,x:3,y:5.6},0).wait(1).to({regX:2.7,regY:-0.7,scaleX:0.78,scaleY:0.78,rotation:-30.9,x:2.6,y:2.6,alpha:0.976},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-29.7,x:2.3,y:1.3,alpha:0.953},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-28.5,x:2,y:0,alpha:0.93},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:-27.4,x:1.7,y:-1.2,alpha:0.907},0).wait(1).to({scaleX:1.24,scaleY:1.24,rotation:-26.3,x:1.4,y:-2.4,alpha:0.885},0).wait(1).to({scaleX:1.35,scaleY:1.35,rotation:-25.2,x:1.1,y:-3.6,alpha:0.864},0).wait(1).to({scaleX:1.46,scaleY:1.46,rotation:-24.1,x:0.9,y:-4.8,alpha:0.843},0).wait(1).to({scaleX:1.56,scaleY:1.56,rotation:-23.1,x:0.6,y:-5.9,alpha:0.822},0).wait(1).to({scaleX:1.66,scaleY:1.66,rotation:-22.1,x:0.3,y:-7,alpha:0.802},0).wait(1).to({scaleX:1.76,scaleY:1.76,rotation:-21.1,x:0.2,y:-8,alpha:0.782},0).wait(1).to({scaleX:1.86,scaleY:1.86,rotation:-20.1,x:-0.1,y:-9.1,alpha:0.763},0).wait(1).to({scaleX:1.96,scaleY:1.96,rotation:-19.1,x:-0.2,y:-10.2,alpha:0.744},0).wait(1).to({scaleX:2.05,scaleY:2.05,rotation:-18.2,x:-0.4,y:-11.2,alpha:0.726},0).wait(1).to({scaleX:2.14,scaleY:2.14,rotation:-17.3,x:-0.6,y:-12.1,alpha:0.708},0).wait(1).to({scaleX:2.23,scaleY:2.23,rotation:-16.4,x:-0.7,y:-13.1,alpha:0.69},0).wait(1).to({scaleX:2.32,scaleY:2.32,rotation:-15.5,x:-0.9,y:-14,alpha:0.673},0).wait(1).to({scaleX:2.41,scaleY:2.41,rotation:-14.6,x:-1,y:-15,alpha:0.656},0).wait(1).to({scaleX:2.49,scaleY:2.49,rotation:-13.8,x:-1.1,y:-15.8,alpha:0.639},0).wait(1).to({scaleX:2.57,scaleY:2.57,rotation:-13,x:-1.3,y:-16.7,alpha:0.623},0).wait(1).to({scaleX:2.65,scaleY:2.65,rotation:-12.1,x:-1.4,y:-17.5,alpha:0.607},0).wait(1).to({scaleX:2.73,scaleY:2.73,rotation:-11.4,x:-1.5,y:-18.4,alpha:0.591},0).wait(1).to({scaleX:2.81,scaleY:2.81,rotation:-10.6,x:-1.6,y:-19.2,alpha:0.576},0).wait(1).to({scaleX:2.89,scaleY:2.89,rotation:-9.8,x:-1.7,y:-20,alpha:0.561},0).wait(1).to({scaleX:2.96,scaleY:2.96,rotation:-9.1,x:-1.8,y:-20.7,alpha:0.546},0).wait(1).to({scaleX:3.04,scaleY:3.04,rotation:-8.3,x:-1.9,y:-21.5,alpha:0.532},0).wait(1).to({scaleX:3.11,scaleY:3.11,rotation:-7.6,x:-2,y:-22.2,alpha:0.518},0).wait(1).to({scaleX:3.18,scaleY:3.18,rotation:-6.9,y:-22.9,alpha:0.504},0).wait(1).to({scaleX:3.25,scaleY:3.25,rotation:-6.2,x:-2.1,y:-23.6,alpha:0.49},0).wait(1).to({scaleX:3.31,scaleY:3.31,rotation:-5.6,y:-24.3,alpha:0.477},0).wait(1).to({scaleX:3.38,scaleY:3.38,rotation:-4.9,x:-2.2,y:-25,alpha:0.464},0).wait(1).to({scaleX:3.44,scaleY:3.44,rotation:-4.3,x:-2.3,y:-25.6,alpha:0.451},0).wait(1).to({scaleX:3.51,scaleY:3.51,rotation:-3.6,y:-26.2,alpha:0.439},0).wait(1).to({scaleX:3.57,scaleY:3.57,rotation:-3,x:-2.4,y:-26.8,alpha:0.427},0).wait(1).to({scaleX:3.63,scaleY:3.63,rotation:-2.4,y:-27.4,alpha:0.415},0).wait(1).to({scaleX:3.69,scaleY:3.69,rotation:-1.8,y:-28,alpha:0.403},0).wait(1).to({scaleX:3.75,scaleY:3.75,rotation:-1.2,y:-28.6,alpha:0.392},0).wait(1).to({scaleX:3.8,scaleY:3.8,rotation:-0.7,x:-2.5,y:-29.1,alpha:0.38},0).wait(1).to({scaleX:3.86,scaleY:3.86,rotation:-0.1,y:-29.7,alpha:0.369},0).wait(1).to({scaleX:3.91,scaleY:3.91,rotation:0.4,x:-2.6,y:-30.2,alpha:0.359},0).wait(1).to({scaleX:3.97,scaleY:3.97,rotation:1,y:-30.7,alpha:0.348},0).wait(1).to({scaleX:4.02,scaleY:4.02,rotation:1.5,y:-31.2,alpha:0.338},0).wait(1).to({scaleX:4.07,scaleY:4.07,rotation:2,y:-31.7,alpha:0.328},0).wait(1).to({scaleX:4.12,scaleY:4.12,rotation:2.5,y:-32.2,alpha:0.318},0).wait(1).to({scaleX:4.17,scaleY:4.17,rotation:3,y:-32.6,alpha:0.308},0).wait(1).to({scaleX:4.22,scaleY:4.22,rotation:3.5,y:-33.1,alpha:0.299},0).wait(1).to({scaleX:4.26,scaleY:4.26,rotation:3.9,x:-2.7,y:-33.6,alpha:0.29},0).wait(1).to({scaleX:4.31,scaleY:4.31,rotation:4.4,y:-34,alpha:0.281},0).wait(1).to({scaleX:4.35,scaleY:4.35,rotation:4.8,y:-34.4,alpha:0.272},0).wait(1).to({scaleX:4.4,scaleY:4.4,rotation:5.3,y:-34.8,alpha:0.263},0).wait(1).to({scaleX:4.44,scaleY:4.44,rotation:5.7,y:-35.2,alpha:0.255},0).wait(1).to({scaleX:4.48,scaleY:4.48,rotation:6.1,y:-35.6,alpha:0.246},0).wait(1).to({scaleX:4.52,scaleY:4.52,rotation:6.5,y:-36,alpha:0.238},0).wait(1).to({scaleX:4.56,scaleY:4.56,rotation:6.9,y:-36.3,alpha:0.23},0).wait(1).to({scaleX:4.6,scaleY:4.6,rotation:7.3,y:-36.7,alpha:0.223},0).wait(1).to({scaleX:4.64,scaleY:4.64,rotation:7.7,y:-37,alpha:0.215},0).wait(1).to({scaleX:4.68,scaleY:4.68,rotation:8.1,x:-2.8,y:-37.4,alpha:0.208},0).wait(1).to({scaleX:4.72,scaleY:4.72,rotation:8.5,x:-2.7,y:-37.8,alpha:0.2},0).wait(1).to({scaleX:4.75,scaleY:4.75,rotation:8.8,y:-38.1,alpha:0.193},0).wait(1).to({scaleX:4.79,scaleY:4.79,rotation:9.2,y:-38.4,alpha:0.186},0).wait(1).to({scaleX:4.82,scaleY:4.82,rotation:9.5,y:-38.7,alpha:0.18},0).wait(1).to({scaleX:4.85,scaleY:4.85,rotation:9.8,y:-39,alpha:0.173},0).wait(1).to({scaleX:4.89,scaleY:4.89,rotation:10.2,y:-39.2,alpha:0.167},0).wait(1).to({scaleX:4.92,scaleY:4.92,rotation:10.5,y:-39.6,alpha:0.16},0).wait(1).to({scaleX:4.95,scaleY:4.95,rotation:10.8,y:-39.8,alpha:0.154},0).wait(1).to({scaleX:4.98,scaleY:4.98,rotation:11.1,x:-2.8,y:-40.1,alpha:0.148},0).wait(1).to({scaleX:5.01,scaleY:5.01,rotation:11.4,x:-2.7,y:-40.4,alpha:0.143},0).wait(1).to({scaleX:5.04,scaleY:5.04,rotation:11.7,x:-2.8,y:-40.6,alpha:0.137},0).wait(1).to({scaleX:5.07,scaleY:5.07,rotation:12,x:-2.7,y:-40.8,alpha:0.131},0).wait(1).to({scaleX:5.09,scaleY:5.09,rotation:12.2,y:-41.1,alpha:0.126},0).wait(1).to({scaleX:5.12,scaleY:5.12,rotation:12.5,y:-41.3,alpha:0.121},0).wait(1).to({scaleX:5.15,scaleY:5.15,rotation:12.8,y:-41.6,alpha:0.116},0).wait(1).to({scaleX:5.17,scaleY:5.17,rotation:13,y:-41.8,alpha:0.111},0).wait(1).to({scaleX:5.2,scaleY:5.2,rotation:13.3,y:-42,alpha:0.106},0).wait(1).to({scaleX:5.22,scaleY:5.22,rotation:13.5,y:-42.2,alpha:0.101},0).wait(1).to({scaleX:5.24,scaleY:5.24,rotation:13.7,y:-42.4,alpha:0.096},0).wait(1).to({scaleX:5.27,scaleY:5.27,rotation:14,y:-42.6,alpha:0.092},0).wait(1).to({scaleX:5.29,scaleY:5.29,rotation:14.2,y:-42.8,alpha:0.088},0).wait(1).to({scaleX:5.31,scaleY:5.31,rotation:14.4,y:-43,alpha:0.083},0).wait(1).to({scaleX:5.33,scaleY:5.33,rotation:14.6,y:-43.1,alpha:0.079},0).wait(1).to({scaleX:5.35,scaleY:5.35,rotation:14.8,y:-43.3,alpha:0.075},0).wait(1).to({scaleX:5.37,scaleY:5.37,rotation:15,y:-43.5,alpha:0.072},0).wait(1).to({scaleX:5.39,scaleY:5.39,rotation:15.2,y:-43.7,alpha:0.068},0).wait(1).to({scaleX:5.41,scaleY:5.41,rotation:15.4,y:-43.8,alpha:0.064},0).wait(1).to({scaleX:5.42,scaleY:5.42,rotation:15.5,y:-43.9,alpha:0.061},0).wait(1).to({scaleX:5.44,scaleY:5.44,rotation:15.7,y:-44.1,alpha:0.057},0).wait(1).to({scaleX:5.46,scaleY:5.46,rotation:15.9,y:-44.2,alpha:0.054},0).wait(1).to({scaleX:5.47,scaleY:5.47,rotation:16,y:-44.4,alpha:0.051},0).wait(1).to({scaleX:5.49,scaleY:5.49,rotation:16.2,y:-44.5,alpha:0.048},0).wait(1).to({scaleX:5.51,scaleY:5.51,rotation:16.4,y:-44.6,alpha:0.045},0).wait(1).to({scaleX:5.52,scaleY:5.52,rotation:16.5,x:-2.6,y:-44.7,alpha:0.042},0).wait(1).to({scaleX:5.53,scaleY:5.53,rotation:16.6,x:-2.7,y:-44.8,alpha:0.039},0).wait(1).to({scaleX:5.55,scaleY:5.55,rotation:16.8,y:-45,alpha:0.037},0).wait(1).to({scaleX:5.56,scaleY:5.56,rotation:16.9,x:-2.6,y:-45.1,alpha:0.034},0).wait(1).to({scaleX:5.57,scaleY:5.57,rotation:17,y:-45.2,alpha:0.032},0).wait(1).to({scaleX:5.58,scaleY:5.58,rotation:17.1,x:-2.7,y:-45.3,alpha:0.029},0).wait(1).to({scaleX:5.6,scaleY:5.6,rotation:17.3,x:-2.6,y:-45.4,alpha:0.027},0).wait(1).to({scaleX:5.61,scaleY:5.61,rotation:17.4,x:-2.7,y:-45.5,alpha:0.025},0).wait(1).to({scaleX:5.62,scaleY:5.62,rotation:17.5,x:-2.6,alpha:0.023},0).wait(1).to({scaleX:5.63,scaleY:5.63,rotation:17.6,y:-45.6,alpha:0.021},0).wait(1).to({scaleX:5.64,scaleY:5.64,rotation:17.7,y:-45.7,alpha:0.019},0).wait(1).to({scaleX:5.64,scaleY:5.64,y:-45.8,alpha:0.017},0).wait(1).to({scaleX:5.65,scaleY:5.65,rotation:17.8,y:-45.9,alpha:0.016},0).wait(1).to({scaleX:5.66,scaleY:5.66,rotation:17.9,alpha:0.014},0).wait(1).to({scaleX:5.67,scaleY:5.67,rotation:18,alpha:0.013},0).wait(1).to({scaleX:5.68,scaleY:5.68,rotation:18.1,y:-46.1,alpha:0.011},0).wait(1).to({scaleX:5.68,scaleY:5.68,alpha:0.01},0).wait(1).to({scaleX:5.69,scaleY:5.69,rotation:18.2,alpha:0.009},0).wait(1).to({scaleX:5.69,scaleY:5.69,y:-46.2,alpha:0.007},0).wait(1).to({scaleX:5.7,scaleY:5.7,rotation:18.3,alpha:0.006},0).wait(1).to({scaleX:5.7,scaleY:5.7,y:-46.3,alpha:0.005},0).wait(1).to({scaleX:5.71,scaleY:5.71,rotation:18.4},0).wait(1).to({scaleX:5.71,scaleY:5.71,alpha:0.004},0).wait(1).to({scaleX:5.72,scaleY:5.72,rotation:18.5,y:-46.4,alpha:0.003},0).wait(1).to({scaleX:5.72,scaleY:5.72,alpha:0.002},0).wait(1).to({scaleX:5.72,scaleY:5.72},0).wait(1).to({scaleX:5.73,scaleY:5.73,rotation:18.6,y:-46.5,alpha:0.001},0).wait(1).to({scaleX:5.73,scaleY:5.73,y:-46.4},0).wait(1).to({scaleX:5.73,scaleY:5.73},0).wait(1).to({scaleX:5.73,scaleY:5.73,y:-46.5,alpha:0},0).wait(2).to({scaleX:5.73,scaleY:5.73},0).wait(1).to({regX:1.8,regY:1.4,x:-13.8,y:-36.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-2.3,13.2,16.9);


(lib.Steam0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"repeat":6});

	// timeline functions:
	this.frame_0 = function() {
		var numFrames = this.totalFrames;
		var ran = Math.floor(Math.random()*numFrames);
		this.gotoAndPlay(ran);
		
		this.stop();
	}
	this.frame_25 = function() {
		console.log("going");
	}
	this.frame_128 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25).wait(103).call(this.frame_128).wait(1));

	// Layer 2
	this.instance = new lib.particles();
	this.instance.parent = this;
	this.instance.setTransform(2.9,1.4,1.024,1.024,-32.1,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({regY:1.5,scaleX:1.46,scaleY:1.46,y:0.9},0).wait(1).to({regX:2.7,regY:-0.7,scaleX:1.65,scaleY:1.65,rotation:-32.8,x:2.7,y:-4.2,alpha:0.976},0).wait(1).to({scaleX:1.83,scaleY:1.83,rotation:-33.4,x:2.4,y:-5.6,alpha:0.953},0).wait(1).to({scaleX:2,scaleY:2,rotation:-34.1,x:2.2,y:-7,alpha:0.93},0).wait(1).to({scaleX:2.18,scaleY:2.18,rotation:-34.7,x:2,y:-8.4,alpha:0.907},0).wait(1).to({scaleX:2.35,scaleY:2.35,rotation:-35.3,x:1.7,y:-9.7,alpha:0.885},0).wait(1).to({scaleX:2.51,scaleY:2.51,rotation:-35.9,x:1.5,y:-11,alpha:0.864},0).wait(1).to({scaleX:2.67,scaleY:2.67,rotation:-36.5,x:1.3,y:-12.3,alpha:0.843},0).wait(1).to({scaleX:2.83,scaleY:2.83,rotation:-37.1,x:1,y:-13.5,alpha:0.822},0).wait(1).to({scaleX:2.98,scaleY:2.98,rotation:-37.6,x:0.8,y:-14.7,alpha:0.802},0).wait(1).to({scaleX:3.14,scaleY:3.14,rotation:-38.2,x:0.5,y:-15.9,alpha:0.782},0).wait(1).to({scaleX:3.28,scaleY:3.28,rotation:-38.7,x:0.2,y:-17.1,alpha:0.763},0).wait(1).to({scaleX:3.43,scaleY:3.43,rotation:-39.3,x:0,y:-18.2,alpha:0.744},0).wait(1).to({scaleX:3.57,scaleY:3.57,rotation:-39.8,x:-0.2,y:-19.3,alpha:0.726},0).wait(1).to({scaleX:3.71,scaleY:3.71,rotation:-40.3,x:-0.5,y:-20.4,alpha:0.708},0).wait(1).to({scaleX:3.85,scaleY:3.85,rotation:-40.8,x:-0.7,y:-21.5,alpha:0.69},0).wait(1).to({scaleX:3.98,scaleY:3.98,rotation:-41.3,x:-1,y:-22.5,alpha:0.673},0).wait(1).to({scaleX:4.11,scaleY:4.11,rotation:-41.7,x:-1.2,y:-23.5,alpha:0.656},0).wait(1).to({scaleX:4.24,scaleY:4.24,rotation:-42.2,x:-1.5,y:-24.5,alpha:0.639},0).wait(1).to({scaleX:4.36,scaleY:4.36,rotation:-42.7,x:-1.8,y:-25.5,alpha:0.623},0).wait(1).to({scaleX:4.49,scaleY:4.49,rotation:-43.1,x:-2,y:-26.4,alpha:0.607},0).wait(1).to({scaleX:4.61,scaleY:4.61,rotation:-43.6,x:-2.3,y:-27.3,alpha:0.591},0).wait(1).to({scaleX:4.72,scaleY:4.72,rotation:-44,x:-2.5,y:-28.2,alpha:0.576},0).wait(1).to({scaleX:4.84,scaleY:4.84,rotation:-44.4,x:-2.7,y:-29.1,alpha:0.561},0).wait(1).to({scaleX:4.95,scaleY:4.95,rotation:-44.8,x:-3,y:-29.9,alpha:0.546},0).wait(1).to({scaleX:5.06,scaleY:5.06,rotation:-45.2,x:-3.2,y:-30.8,alpha:0.532},0).wait(1).to({scaleX:5.17,scaleY:5.17,rotation:-45.6,x:-3.5,y:-31.6,alpha:0.518},0).wait(1).to({scaleX:5.28,scaleY:5.28,rotation:-46,x:-3.7,y:-32.4,alpha:0.504},0).wait(1).to({scaleX:5.38,scaleY:5.38,rotation:-46.4,x:-4,y:-33.2,alpha:0.49},0).wait(1).to({scaleX:5.48,scaleY:5.48,rotation:-46.7,x:-4.2,y:-34.1,alpha:0.477},0).wait(1).to({scaleX:5.58,scaleY:5.58,rotation:-47.1,x:-4.5,y:-34.8,alpha:0.464},0).wait(1).to({scaleX:5.68,scaleY:5.68,rotation:-47.5,x:-4.8,y:-35.5,alpha:0.451},0).wait(1).to({scaleX:5.77,scaleY:5.77,rotation:-47.8,x:-5,y:-36.2,alpha:0.439},0).wait(1).to({scaleX:5.87,scaleY:5.87,rotation:-48.2,x:-5.2,y:-36.9,alpha:0.427},0).wait(1).to({scaleX:5.96,scaleY:5.96,rotation:-48.5,x:-5.4,y:-37.6,alpha:0.415},0).wait(1).to({scaleX:6.05,scaleY:6.05,rotation:-48.8,x:-5.7,y:-38.3,alpha:0.403},0).wait(1).to({scaleX:6.14,scaleY:6.14,rotation:-49.1,x:-5.9,y:-38.9,alpha:0.392},0).wait(1).to({scaleX:6.22,scaleY:6.22,rotation:-49.4,x:-6.1,y:-39.6,alpha:0.38},0).wait(1).to({scaleX:6.31,scaleY:6.31,rotation:-49.8,x:-6.3,y:-40.2,alpha:0.369},0).wait(1).to({scaleX:6.39,scaleY:6.39,rotation:-50.1,x:-6.6,y:-40.8,alpha:0.359},0).wait(1).to({scaleX:6.47,scaleY:6.47,rotation:-50.4,x:-6.8,y:-41.4,alpha:0.348},0).wait(1).to({scaleX:6.55,scaleY:6.55,rotation:-50.6,x:-7,y:-42,alpha:0.338},0).wait(1).to({scaleX:6.63,scaleY:6.63,rotation:-50.9,x:-7.1,y:-42.6,alpha:0.328},0).wait(1).to({scaleX:6.7,scaleY:6.7,rotation:-51.2,x:-7.4,y:-43.1,alpha:0.318},0).wait(1).to({scaleX:6.78,scaleY:6.78,rotation:-51.5,x:-7.6,y:-43.7,alpha:0.308},0).wait(1).to({scaleX:6.85,scaleY:6.85,rotation:-51.7,x:-7.8,y:-44.2,alpha:0.299},0).wait(1).to({scaleX:6.92,scaleY:6.92,rotation:-52,x:-8,y:-44.7,alpha:0.29},0).wait(1).to({scaleX:6.99,scaleY:6.99,rotation:-52.2,x:-8.2,y:-45.2,alpha:0.281},0).wait(1).to({scaleX:7.06,scaleY:7.06,rotation:-52.5,x:-8.3,y:-45.7,alpha:0.272},0).wait(1).to({scaleX:7.12,scaleY:7.12,rotation:-52.7,x:-8.5,y:-46.2,alpha:0.263},0).wait(1).to({scaleX:7.19,scaleY:7.19,rotation:-53,x:-8.7,y:-46.7,alpha:0.255},0).wait(1).to({scaleX:7.25,scaleY:7.25,rotation:-53.2,x:-8.9,y:-47.2,alpha:0.246},0).wait(1).to({scaleX:7.31,scaleY:7.31,rotation:-53.4,x:-9.1,y:-47.6,alpha:0.238},0).wait(1).to({scaleX:7.38,scaleY:7.38,rotation:-53.7,x:-9.3,y:-48,alpha:0.23},0).wait(1).to({scaleX:7.43,scaleY:7.43,rotation:-53.9,x:-9.4,y:-48.4,alpha:0.223},0).wait(1).to({scaleX:7.49,scaleY:7.49,rotation:-54.1,x:-9.6,y:-48.9,alpha:0.215},0).wait(1).to({scaleX:7.55,scaleY:7.55,rotation:-54.3,x:-9.8,y:-49.3,alpha:0.208},0).wait(1).to({scaleX:7.61,scaleY:7.61,rotation:-54.5,x:-10,y:-49.7,alpha:0.2},0).wait(1).to({scaleX:7.66,scaleY:7.66,rotation:-54.7,x:-10.1,y:-50.1,alpha:0.193},0).wait(1).to({scaleX:7.71,scaleY:7.71,rotation:-54.9,x:-10.2,y:-50.5,alpha:0.186},0).wait(1).to({scaleX:7.76,scaleY:7.76,rotation:-55.1,x:-10.4,y:-50.8,alpha:0.18},0).wait(1).to({scaleX:7.81,scaleY:7.81,rotation:-55.3,x:-10.6,y:-51.2,alpha:0.173},0).wait(1).to({scaleX:7.86,scaleY:7.86,rotation:-55.4,x:-10.8,y:-51.6,alpha:0.167},0).wait(1).to({scaleX:7.91,scaleY:7.91,rotation:-55.6,x:-10.9,y:-51.9,alpha:0.16},0).wait(1).to({scaleX:7.96,scaleY:7.96,rotation:-55.8,x:-11,y:-52.2,alpha:0.154},0).wait(1).to({scaleX:8,scaleY:8,rotation:-55.9,x:-11.2,y:-52.6,alpha:0.148},0).wait(1).to({scaleX:8.05,scaleY:8.05,rotation:-56.1,x:-11.4,y:-52.9,alpha:0.143},0).wait(1).to({scaleX:8.09,scaleY:8.09,rotation:-56.3,y:-53.2,alpha:0.137},0).wait(1).to({scaleX:8.14,scaleY:8.14,rotation:-56.4,x:-11.6,y:-53.5,alpha:0.131},0).wait(1).to({scaleX:8.18,scaleY:8.18,rotation:-56.6,x:-11.7,y:-53.8,alpha:0.126},0).wait(1).to({scaleX:8.22,scaleY:8.22,rotation:-56.7,x:-11.9,y:-54.1,alpha:0.121},0).wait(1).to({scaleX:8.26,scaleY:8.26,rotation:-56.9,x:-12,y:-54.3,alpha:0.116},0).wait(1).to({scaleX:8.29,scaleY:8.29,rotation:-57,x:-12.1,y:-54.6,alpha:0.111},0).wait(1).to({scaleX:8.33,scaleY:8.33,rotation:-57.1,x:-12.2,y:-54.9,alpha:0.106},0).wait(1).to({scaleX:8.37,scaleY:8.37,rotation:-57.3,x:-12.4,y:-55.1,alpha:0.101},0).wait(1).to({scaleX:8.4,scaleY:8.4,rotation:-57.4,y:-55.3,alpha:0.096},0).wait(1).to({scaleX:8.44,scaleY:8.44,rotation:-57.5,x:-12.5,y:-55.6,alpha:0.092},0).wait(1).to({scaleX:8.47,scaleY:8.47,rotation:-57.6,x:-12.6,y:-55.8,alpha:0.088},0).wait(1).to({scaleX:8.5,scaleY:8.5,rotation:-57.8,x:-12.8,y:-56,alpha:0.083},0).wait(1).to({scaleX:8.53,scaleY:8.53,rotation:-57.9,y:-56.3,alpha:0.079},0).wait(1).to({scaleX:8.57,scaleY:8.57,rotation:-58,x:-13,y:-56.5,alpha:0.075},0).wait(1).to({scaleX:8.59,scaleY:8.59,rotation:-58.1,x:-13.1,y:-56.7,alpha:0.072},0).wait(1).to({scaleX:8.62,scaleY:8.62,rotation:-58.2,x:-13.2,y:-57,alpha:0.068},0).wait(1).to({scaleX:8.65,scaleY:8.65,rotation:-58.3,y:-57.1,alpha:0.064},0).wait(1).to({scaleX:8.68,scaleY:8.68,rotation:-58.4,x:-13.3,y:-57.3,alpha:0.061},0).wait(1).to({scaleX:8.7,scaleY:8.7,rotation:-58.5,x:-13.4,y:-57.5,alpha:0.057},0).wait(1).to({scaleX:8.73,scaleY:8.73,rotation:-58.6,x:-13.5,y:-57.7,alpha:0.054},0).wait(1).to({scaleX:8.75,scaleY:8.75,rotation:-58.7,x:-13.6,y:-57.9,alpha:0.051},0).wait(1).to({scaleX:8.78,scaleY:8.78,rotation:-58.8,y:-58,alpha:0.048},0).wait(1).to({scaleX:8.8,scaleY:8.8,x:-13.7,y:-58.2,alpha:0.045},0).wait(1).to({scaleX:8.82,scaleY:8.82,rotation:-58.9,x:-13.8,y:-58.3,alpha:0.042},0).wait(1).to({scaleX:8.84,scaleY:8.84,rotation:-59,y:-58.4,alpha:0.039},0).wait(1).to({scaleX:8.86,scaleY:8.86,rotation:-59.1,x:-13.9,y:-58.6,alpha:0.037},0).wait(1).to({scaleX:8.88,scaleY:8.88,x:-14,y:-58.7,alpha:0.034},0).wait(1).to({scaleX:8.9,scaleY:8.9,rotation:-59.2,y:-58.9,alpha:0.032},0).wait(1).to({scaleX:8.92,scaleY:8.92,rotation:-59.3,x:-14.1,y:-59,alpha:0.029},0).wait(1).to({scaleX:8.94,scaleY:8.94,x:-14.2,y:-59.1,alpha:0.027},0).wait(1).to({scaleX:8.95,scaleY:8.95,rotation:-59.4,y:-59.2,alpha:0.025},0).wait(1).to({scaleX:8.97,scaleY:8.97,rotation:-59.5,x:-14.3,y:-59.3,alpha:0.023},0).wait(1).to({scaleX:8.98,scaleY:8.98,y:-59.4,alpha:0.021},0).wait(1).to({scaleX:9,scaleY:9,rotation:-59.6,x:-14.4,y:-59.5,alpha:0.019},0).wait(1).to({scaleX:9.01,scaleY:9.01,y:-59.6,alpha:0.017},0).wait(1).to({scaleX:9.02,scaleY:9.02,rotation:-59.7,x:-14.5,y:-59.7,alpha:0.016},0).wait(1).to({scaleX:9.04,scaleY:9.04,y:-59.8,alpha:0.014},0).wait(1).to({scaleX:9.05,scaleY:9.05,y:-59.9,alpha:0.013},0).wait(1).to({scaleX:9.06,scaleY:9.06,rotation:-59.8,x:-14.6,y:-60,alpha:0.011},0).wait(1).to({scaleX:9.07,scaleY:9.07,alpha:0.01},0).wait(1).to({scaleX:9.08,scaleY:9.08,rotation:-59.9,x:-14.7,y:-60.1,alpha:0.009},0).wait(1).to({scaleX:9.09,scaleY:9.09,alpha:0.007},0).wait(1).to({scaleX:9.09,scaleY:9.09,y:-60.2,alpha:0.006},0).wait(1).to({scaleX:9.1,scaleY:9.1,alpha:0.005},0).wait(1).to({scaleX:9.11,scaleY:9.11,rotation:-60,y:-60.3},0).wait(1).to({scaleX:9.12,scaleY:9.12,x:-14.8,alpha:0.004},0).wait(1).to({scaleX:9.12,scaleY:9.12,y:-60.4,alpha:0.003},0).wait(1).to({scaleX:9.13,scaleY:9.13,alpha:0.002},0).wait(1).to({scaleX:9.13,scaleY:9.13},0).wait(1).to({scaleX:9.13,scaleY:9.13,rotation:-60.1,alpha:0.001},0).wait(1).to({scaleX:9.14,scaleY:9.14,x:-14.9,y:-60.5},0).wait(1).to({scaleX:9.14,scaleY:9.14},0).wait(1).to({scaleX:9.14,scaleY:9.14,alpha:0},0).wait(1).to({scaleX:9.14,scaleY:9.14},0).wait(2).to({regX:1.6,regY:1.2,scaleX:9.14,scaleY:9.14,x:-3.8,y:-40.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-6.3,13.2,15.9);


// stage content:
(lib.about_tout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		this.smokeArray = [];
		this.num0Particles = 15;
		this.num1Particles = 15;
		this.areWeReady = true;
		this.numTabs = 5;
		
		this.start = function() {
			this.animation.sky.play();
			console.log("start");
			/*for (var i = 0; i < self.smokeArray.length; i++) {
				self.smokeArray[i].play();
			}*/
		}
		
		this.pause = function() {
		//	//console.log("pause");
			this.animation.sky.stop();
		//	for (var i = 0; i < self.smokeArray.length; i++) {
		//		self.smokeArray[i].stop();
		//	}
		}
		
		//function createSmoke() {
		//	for (var i = 0; i < self.num0Particles; i++) {
		//		var p = new lib.Steam0();
		//		self.animation.steamContainer.addChild(p);
		//		self.smokeArray.push(p);
		//	}
		//	for (var i = 0; i < self.num1Particles; i++) {
		//		var p = new lib.Steam1();
		//		self.animation.steamContainer.addChild(p);
		//		self.smokeArray.push(p);
		//	}
		//}
		
		//createSmoke();
		this.pause();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// animation
	this.animation = new lib.animation();
	this.animation.parent = this;
	this.animation.setTransform(1008,147.5,1,1,0,0,0,1008,147.5);

	this.timeline.addTween(cjs.Tween.get(this.animation).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(229,279,2016,558);
// library properties:
lib.properties = {
	width: 458,
	height: 558,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/Assets/Images/touts/about/foreground.png?1475279034140", id:"foreground"},
		{src:"/Assets/Images/touts/about/sky.jpg?1475279034140", id:"sky"}
	],
	preloads: []
};




})(window.aboutToutLib = window.aboutToutLib ||{}, window.aboutToutImages = window.aboutToutImages ||{}, createjs = createjs||{}, window.aboutToutSs = window.aboutToutSs ||{});