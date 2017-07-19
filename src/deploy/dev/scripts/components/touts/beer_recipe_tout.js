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
		{src:"/Assets/Images/touts/beer-recipe/bg.jpg?1474495288316", id:"bg"},
		{src:"/Assets/Images/touts/beer-recipe/beer_recipe_tout_atlas_P_.png?1474495288313", id:"beer_recipe_tout_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"beer_recipe_tout_atlas_P_", frames: [[0,0,186,360],[0,362,191,349],[216,602,152,178],[188,0,216,307],[193,309,216,291],[0,713,214,308]]}
];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,458,558);


(lib.bottleamber = function() {
	this.spriteSheet = ss["beer_recipe_tout_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottlelager = function() {
	this.spriteSheet = ss["beer_recipe_tout_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.can = function() {
	this.spriteSheet = ss["beer_recipe_tout_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dosarita = function() {
	this.spriteSheet = ss["beer_recipe_tout_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dossidra = function() {
	this.spriteSheet = ss["beer_recipe_tout_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.michelada = function() {
	this.spriteSheet = ss["beer_recipe_tout_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,458,558);


(lib.michelada_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.michelada();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,214,308);


(lib.lager = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottlelager();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191,349);


(lib.dosarita_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dosarita();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216,307);


(lib.dissidra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dossidra();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216,291);


(lib.can_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.can();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,178);


(lib.bottleamber_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottleamber();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,360);


// stage content:
(lib.beer_recipe_tout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{repeat:18});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var self = this;
		
		window.dispatcher.trigger("triggerRecipeText", "in0");
		
		this.areWeReady = true;
		this.isFirstTime = true;
		
		this.start = function() {
			this.play();
		}
		this.pause = function() {
			this.stop();
		}
	}
	this.frame_57 = function() {
		window.dispatcher.trigger("triggerRecipeText", "out0");
	}
	this.frame_97 = function() {
		window.dispatcher.trigger("triggerRecipeText", "in1");
	}
	this.frame_180 = function() {
		window.dispatcher.trigger("triggerRecipeText", "out1");
	}
	this.frame_217 = function() {
		window.dispatcher.trigger("triggerRecipeText", "in2");
	}
	this.frame_300 = function() {
		window.dispatcher.trigger("triggerRecipeText", "out2");
	}
	this.frame_339 = function() {
		window.dispatcher.trigger("triggerRecipeText", "in3");
	}
	this.frame_422 = function() {
		window.dispatcher.trigger("triggerRecipeText", "out3");
	}
	this.frame_464 = function() {
		window.dispatcher.trigger("triggerRecipeText", "in4");
	}
	this.frame_547 = function() {
		window.dispatcher.trigger("triggerRecipeText", "out4");
	}
	this.frame_589 = function() {
		window.dispatcher.trigger("triggerRecipeText", "in0");
	}
	this.frame_652 = function() {
		this.gotoAndPlay("repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(57).call(this.frame_57).wait(40).call(this.frame_97).wait(83).call(this.frame_180).wait(37).call(this.frame_217).wait(83).call(this.frame_300).wait(39).call(this.frame_339).wait(83).call(this.frame_422).wait(42).call(this.frame_464).wait(83).call(this.frame_547).wait(42).call(this.frame_589).wait(63).call(this.frame_652).wait(1));

	// green bottle
	this.instance = new lib.lager();
	this.instance.setTransform(269.5,501,1,1,0,0,0,95.5,276);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({regY:174.5,x:269.9,y:399.5},0).wait(1).to({x:271.2},0).wait(1).to({x:273.5,y:399.4},0).wait(1).to({rotation:-0.1,x:277.2,y:399.3},0).wait(1).to({x:282.4,y:399.1},0).wait(1).to({rotation:-0.2,x:289.5,y:399},0).wait(1).to({rotation:-0.3,x:299.1,y:398.7},0).wait(1).to({rotation:-0.4,x:311.9,y:398.4},0).wait(1).to({rotation:-0.5,x:328.9,y:397.9},0).wait(1).to({rotation:-0.7,x:351.7,y:397.3},0).wait(1).to({rotation:-1,x:382.7,y:396.5},0).wait(1).to({rotation:-1.4,x:426.8,y:395.3},0).wait(1).to({rotation:-2,x:494,y:393.6},0).wait(1).to({regY:276.2,rotation:-3,x:619.2,y:491.9},0).to({_off:true},1).wait(500).to({_off:false,regY:276.1,x:-81.4,y:503.6},0).wait(1).to({regY:174.5,rotation:-2.2,x:5.7,y:401.4},0).wait(1).to({rotation:-1.7,x:67.8,y:400.9},0).wait(1).to({rotation:-1.3,x:112.2,y:400.6},0).wait(1).to({rotation:-1,x:145.1,y:400.3},0).wait(1).to({rotation:-0.8,x:170.4,y:400.2},0).wait(1).to({rotation:-0.7,x:190.1,y:400},0).wait(1).to({rotation:-0.5,x:205.8,y:399.9},0).wait(1).to({rotation:-0.4,x:218.4,y:399.8},0).wait(1).to({rotation:-0.3,x:228.6},0).wait(1).to({x:236.9,y:399.7},0).wait(1).to({rotation:-0.2,x:243.6,y:399.6},0).wait(1).to({x:249.2},0).wait(1).to({rotation:-0.1,x:253.7},0).wait(1).to({x:257.4},0).wait(1).to({x:260.4,y:399.5},0).wait(1).to({x:262.8},0).wait(1).to({rotation:0,x:264.7},0).wait(1).to({x:266.3},0).wait(1).to({x:267.4,y:399.4},0).wait(1).to({x:268.3,y:399.5},0).wait(1).to({x:268.9},0).wait(1).to({x:269.3},0).wait(1).to({x:269.5},0).wait(1).to({regY:276,y:501},0).wait(62));

	// green can
	this.instance_1 = new lib.can_1();
	this.instance_1.setTransform(185,536,1,1,0,0,0,76,153);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55).to({regY:89,x:185.4,y:472},0).wait(1).to({x:186.7},0).wait(1).to({x:189.2},0).wait(1).to({rotation:-0.1,x:192.9},0).wait(1).to({x:198.3,y:472.1},0).wait(1).to({rotation:-0.2,x:205.7},0).wait(1).to({rotation:-0.3,x:215.7,y:472.2},0).wait(1).to({rotation:-0.4,x:228.9,y:472.3},0).wait(1).to({rotation:-0.5,x:246.5,y:472.4},0).wait(1).to({rotation:-0.7,x:270.1,y:472.6},0).wait(1).to({rotation:-1,x:302.3,y:472.9},0).wait(1).to({rotation:-1.4,x:348,y:473.2},0).wait(1).to({rotation:-2,x:417.4,y:473.7},0).wait(1).to({regY:153,rotation:-3,x:545,y:538.5},0).to({_off:true},1).wait(500).to({_off:false,regX:75.9,x:-166,y:538.6},0).wait(1).to({regX:76,regY:89,rotation:-2.2,x:-77.3,y:473.9},0).wait(1).to({rotation:-1.7,x:-15.5,y:473.4},0).wait(1).to({rotation:-1.3,x:28.6,y:473.1},0).wait(1).to({rotation:-1,x:61.4,y:472.9},0).wait(1).to({rotation:-0.8,x:86.5,y:472.7},0).wait(1).to({rotation:-0.7,x:106.1,y:472.6},0).wait(1).to({rotation:-0.5,x:121.7,y:472.5},0).wait(1).to({rotation:-0.4,x:134.2,y:472.4},0).wait(1).to({rotation:-0.3,x:144.3,y:472.3},0).wait(1).to({x:152.6,y:472.2},0).wait(1).to({rotation:-0.2,x:159.3},0).wait(1).to({x:164.8,y:472.1},0).wait(1).to({rotation:-0.1,x:169.3},0).wait(1).to({x:173},0).wait(1).to({x:176},0).wait(1).to({x:178.4},0).wait(1).to({rotation:0,x:180.3,y:472},0).wait(1).to({x:181.8},0).wait(1).to({x:183},0).wait(1).to({x:183.8},0).wait(1).to({x:184.4},0).wait(1).to({x:184.8},0).wait(1).to({x:185},0).wait(1).to({regY:153,y:536},0).wait(60));

	// amber
	this.instance_2 = new lib.bottleamber_1();
	this.instance_2.setTransform(-74,388.7,1,1,-3,0,0,93,180.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).wait(1).to({regY:180,rotation:-2.4,x:-14.8,y:387.9},0).wait(1).to({rotation:-1.9,x:31.6,y:387.5},0).wait(1).to({rotation:-1.6,x:67.8,y:387.2},0).wait(1).to({rotation:-1.3,x:96.4,y:386.9},0).wait(1).to({rotation:-1.1,x:119.3,y:386.7},0).wait(1).to({rotation:-0.9,x:137.9,y:386.6},0).wait(1).to({rotation:-0.7,x:153,y:386.5},0).wait(1).to({rotation:-0.6,x:165.5,y:386.4},0).wait(1).to({rotation:-0.5,x:175.9,y:386.3},0).wait(1).to({rotation:-0.4,x:184.6,y:386.2},0).wait(1).to({rotation:-0.3,x:191.9},0).wait(1).to({x:198,y:386.1},0).wait(1).to({rotation:-0.2,x:203.1,y:386},0).wait(1).to({x:207.4},0).wait(1).to({rotation:-0.1,x:211},0).wait(1).to({x:214,y:385.9},0).wait(1).to({x:216.5},0).wait(1).to({x:218.5},0).wait(1).to({rotation:0,x:220.1},0).wait(1).to({x:221.5},0).wait(1).to({x:222.4,y:385.8},0).wait(1).to({x:223.1,y:385.9},0).wait(1).to({x:223.6},0).wait(1).to({x:223.9},0).wait(1).to({x:224,y:386},0).wait(72).to({x:224.3},0).wait(1).to({x:225.3},0).wait(1).to({x:227.1},0).wait(1).to({rotation:-0.1,x:230},0).wait(1).to({x:233.9,y:386.1},0).wait(1).to({x:239.3},0).wait(1).to({rotation:-0.2,x:246.5,y:386.2},0).wait(1).to({rotation:-0.3,x:255.8,y:386.3},0).wait(1).to({rotation:-0.4,x:268.1},0).wait(1).to({rotation:-0.6,x:284,y:386.5},0).wait(1).to({rotation:-0.8,x:305.1,y:386.7},0).wait(1).to({rotation:-1.1,x:333.4,y:386.9},0).wait(1).to({rotation:-1.4,x:373.1,y:387.2},0).wait(1).to({rotation:-2,x:432.6,y:387.7},0).wait(1).to({rotation:-3,x:536,y:388.5},0).to({_off:true},1).wait(462));

	// dos-arita
	this.instance_3 = new lib.dosarita_1();
	this.instance_3.setTransform(-112,417,1,1,-3,0,0,107.9,153.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(199).to({_off:false},0).wait(1).to({regX:108,rotation:-2.5,x:-50.1,y:414.7},0).wait(1).to({rotation:-2,x:-0.4,y:413},0).wait(1).to({rotation:-1.7,x:39.4,y:411.5},0).wait(1).to({rotation:-1.4,x:71.6,y:410.3},0).wait(1).to({rotation:-1.2,x:97.9,y:409.4},0).wait(1).to({rotation:-1,x:119.5,y:408.6},0).wait(1).to({rotation:-0.8,x:137.4,y:408},0).wait(1).to({rotation:-0.7,x:152.4,y:407.4},0).wait(1).to({rotation:-0.6,x:165.1,y:406.9},0).wait(1).to({rotation:-0.5,x:175.8,y:406.6},0).wait(1).to({rotation:-0.4,x:185,y:406.2},0).wait(1).to({rotation:-0.3,x:192.8,y:405.9},0).wait(1).to({x:199.4,y:405.7},0).wait(1).to({rotation:-0.2,x:205.2,y:405.5},0).wait(1).to({x:210,y:405.3},0).wait(1).to({x:214.2,y:405.1},0).wait(1).to({rotation:-0.1,x:217.8,y:405},0).wait(1).to({x:220.8,y:404.9},0).wait(1).to({x:223.3,y:404.8},0).wait(1).to({x:225.5,y:404.7},0).wait(1).to({rotation:0,x:227.2},0).wait(1).to({x:228.7,y:404.6},0).wait(1).to({x:229.8},0).wait(1).to({x:230.7},0).wait(1).to({x:231.3,y:404.5},0).wait(1).to({x:231.8},0).wait(1).to({x:232},0).wait(74).to({x:232.4},0).wait(1).to({x:233.7,y:404.6},0).wait(1).to({x:236.1,y:404.7},0).wait(1).to({rotation:-0.1,x:239.9,y:404.9},0).wait(1).to({x:245.2,y:405.3},0).wait(1).to({rotation:-0.2,x:252.6,y:405.6},0).wait(1).to({rotation:-0.3,x:262.5,y:406.2},0).wait(1).to({rotation:-0.4,x:275.6,y:407},0).wait(1).to({rotation:-0.5,x:293.1,y:408},0).wait(1).to({rotation:-0.7,x:316.4,y:409.3},0).wait(1).to({rotation:-1,x:348.4,y:411.1},0).wait(1).to({rotation:-1.4,x:393.7,y:413.6},0).wait(1).to({rotation:-2,x:462.7,y:417.5},0).wait(1).to({regX:108.1,regY:153.6,rotation:-3,x:586.1,y:424.6},0).to({_off:true},1).wait(339));

	// michelada
	this.instance_4 = new lib.michelada_1();
	this.instance_4.setTransform(-116,411.1,1,1,-3,0,0,107,154.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(323).to({_off:false},0).wait(1).to({regY:154,rotation:-2.5,x:-51.5,y:410.9},0).wait(1).to({rotation:-2,x:0.4},0).wait(1).to({rotation:-1.7,x:41.9},0).wait(1).to({rotation:-1.4,x:75.5,y:411},0).wait(1).to({rotation:-1.2,x:103,y:410.9},0).wait(1).to({rotation:-1,x:125.5,y:411},0).wait(1).to({rotation:-0.8,x:144.2},0).wait(1).to({rotation:-0.7,x:159.8},0).wait(1).to({rotation:-0.6,x:173.1,y:410.9},0).wait(1).to({rotation:-0.5,x:184.3,y:411},0).wait(1).to({rotation:-0.4,x:193.8},0).wait(1).to({rotation:-0.3,x:201.9,y:410.9},0).wait(1).to({x:208.9},0).wait(1).to({rotation:-0.2,x:214.9},0).wait(1).to({x:220,y:411},0).wait(1).to({x:224.3,y:410.9},0).wait(1).to({rotation:-0.1,x:228.1},0).wait(1).to({x:231.2},0).wait(1).to({x:233.9},0).wait(1).to({x:236.1,y:411},0).wait(1).to({rotation:0,x:237.9,y:410.9},0).wait(1).to({x:239.4,y:411},0).wait(1).to({x:240.6,y:410.9},0).wait(1).to({x:241.5,y:411},0).wait(1).to({x:242.2},0).wait(1).to({x:242.6},0).wait(1).to({x:242.9},0).wait(1).to({x:243},0).wait(66).to({x:243.3},0).wait(1).to({x:244.3},0).wait(1).to({x:246},0).wait(1).to({x:248.7},0).wait(1).to({rotation:-0.1,x:252.4},0).wait(1).to({x:257.5},0).wait(1).to({rotation:-0.2,x:264.2},0).wait(1).to({rotation:-0.3,x:272.8},0).wait(1).to({rotation:-0.4,x:283.8},0).wait(1).to({rotation:-0.5,x:298},0).wait(1).to({rotation:-0.6,x:316.1},0).wait(1).to({rotation:-0.8,x:339.9},0).wait(1).to({rotation:-1.1,x:371.5},0).wait(1).to({rotation:-1.5,x:415.1},0).wait(1).to({rotation:-2.1,x:479.6},0).wait(1).to({regX:107.1,rotation:-3,x:589,y:411.1},0).to({_off:true},1).wait(220));

	// Layer 9
	this.instance_5 = new lib.dissidra();
	this.instance_5.setTransform(-119,423.1,1,1,-3,0,0,108,145.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(443).to({_off:false},0).wait(1).to({regY:145.5,rotation:-2.5,x:-59.8,y:422.6},0).wait(1).to({rotation:-2.1,x:-11.6,y:422.2},0).wait(1).to({rotation:-1.7,x:27.6,y:421.9},0).wait(1).to({rotation:-1.5,x:59.7,y:421.7},0).wait(1).to({rotation:-1.2,x:86.1,y:421.5},0).wait(1).to({rotation:-1.1,x:108.2,y:421.3},0).wait(1).to({rotation:-0.9,x:126.5,y:421.2},0).wait(1).to({rotation:-0.8,x:142.1,y:421.1},0).wait(1).to({rotation:-0.6,x:155.4,y:421},0).wait(1).to({x:166.7,y:420.9},0).wait(1).to({rotation:-0.5,x:176.4,y:420.8},0).wait(1).to({rotation:-0.4,x:184.7},0).wait(1).to({rotation:-0.3,x:192,y:420.7},0).wait(1).to({x:198.2},0).wait(1).to({rotation:-0.2,x:203.6,y:420.6},0).wait(1).to({x:208.3},0).wait(1).to({x:212.3},0).wait(1).to({rotation:-0.1,x:215.8},0).wait(1).to({x:218.7,y:420.5},0).wait(1).to({x:221.3},0).wait(1).to({x:223.4},0).wait(1).to({rotation:0,x:225.2},0).wait(1).to({x:226.8},0).wait(1).to({x:228},0).wait(1).to({x:229,y:420.4},0).wait(1).to({x:229.8,y:420.5},0).wait(1).to({x:230.3},0).wait(1).to({x:230.7},0).wait(1).to({x:230.9},0).wait(1).to({x:231},0).wait(71).to({x:231.3},0).wait(1).to({x:232.3},0).wait(1).to({x:234.1},0).wait(1).to({x:236.8},0).wait(1).to({rotation:-0.1,x:240.6},0).wait(1).to({x:245.7},0).wait(1).to({rotation:-0.2,x:252.5},0).wait(1).to({rotation:-0.3,x:261.3},0).wait(1).to({rotation:-0.4,x:272.5},0).wait(1).to({rotation:-0.5,x:286.9},0).wait(1).to({rotation:-0.6,x:305.4},0).wait(1).to({rotation:-0.8,x:329.6},0).wait(1).to({rotation:-1.1,x:361.7},0).wait(1).to({rotation:-1.5,x:406.1},0).wait(1).to({rotation:-2.1,x:471.7},0).wait(1).to({regX:108.2,regY:145.6,rotation:-3,x:583.1,y:420.6},0).to({_off:true},1).wait(93));

	// green bg
	this.instance_6 = new lib.Symbol1();
	this.instance_6.setTransform(229,279,1,1,0,0,0,229,279);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(559).to({_off:false},0).to({alpha:1},7).wait(87));

	// orange bg
	this.instance_7 = new lib.Symbol1();
	this.instance_7.setTransform(229,279,1,1,0,0,0,229,279);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;
	this.instance_7.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 20, 0, -33))];
	this.instance_7.cache(-2,-2,462,562);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(433).to({_off:false},0).to({alpha:1},10).wait(210));

	// orange bg
	this.instance_8 = new lib.Symbol1();
	this.instance_8.setTransform(229,279,1,1,0,0,0,229,279);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;
	this.instance_8.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 20, 0, -67))];
	this.instance_8.cache(-2,-2,462,562);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(314).to({_off:false},0).to({alpha:1},9).to({_off:true},110).wait(220));

	// orange bg
	this.instance_9 = new lib.Symbol1();
	this.instance_9.setTransform(229,279,1,1,0,0,0,229,279);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;
	this.instance_9.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 20, 0, -33))];
	this.instance_9.cache(-2,-2,462,562);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(190).to({_off:false},0).to({alpha:1},9).wait(454));

	// orange bg
	this.instance_10 = new lib.Symbol1();
	this.instance_10.setTransform(229,279,1,1,0,0,0,229,279);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;
	this.instance_10.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, -52))];
	this.instance_10.cache(-2,-2,462,562);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(69).to({_off:false},0).to({alpha:1},9).to({_off:true},121).wait(454));

	// green bg
	this.instance_11 = new lib.Symbol1();
	this.instance_11.setTransform(229,279,1,1,0,0,0,229,279);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},78).wait(575));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(229,-794,1504,2000);

})(window.beerRecipeToutLib = window.beerRecipeToutLib||{}, window.beerRecipeToutImages = window.beerRecipeToutImages||{}, createjs = createjs||{}, window.beerRecipeToutSs = window.beerRecipeToutSs||{});