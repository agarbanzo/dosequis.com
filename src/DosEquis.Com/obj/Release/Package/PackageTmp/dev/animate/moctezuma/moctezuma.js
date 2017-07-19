(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 534,
	height: 533,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/Assets/Images/touts/moctezuma/rings.png?1477167284383", id:"rings"},
		{src:"/Assets/Images/touts/moctezuma/spacerjpg.jpg?1477167284383", id:"spacerjpg"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.rings = function() {
	this.initialize(img.rings);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,528,528);


(lib.spacerjpg = function() {
	this.initialize(img.spacerjpg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DCBA81").s().p("A9aAAQACABOlzQQOmzSABACUAdkAmZAADAAGQACABuyTOQuwTNACADIAAABMgdXgmgg");
	this.shape.setTransform(188.4,246.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,376.8,492.8);


(lib.SPRITE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rings();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,528,528);


(lib.shine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.2)","rgba(255,255,255,0.847)","rgba(255,255,255,0.2)"],[0,0.471,1],-77.5,0,77.5,0).s().p("EgMGA0uMAAAhpbIYMAAMAAABpbg");
	this.shape.setTransform(77.5,337.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,675);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0.333,1],0.6,0.6,0,0.6,0.6,226.6).s().p("EAAAAmZQAAgDupzLQurzLAAgBUAAAgAGAdUgmRIOqTNQOnTIAEABQgEACunTLQupTOgBAAIAAAAgAdVgCIAAAAIAAAAIAAAAg");
	this.shape.setTransform(187.6,246.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5CD98").s().p("AlKAAIFKmxIFLGxIlLGyg");
	this.shape_1.setTransform(187.6,246.4,5.666,5.666);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-3,379.8,495.5);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5B076").s().p("Aj3AzIAVAAIgDANIAJABIAJglIg4gFIgSgXIAZggIA5APIgFANIAJABIANgdIg7gUIAjgtIAmAUIgHANIAHAEIAPgZIgrgbIAfgnIAdAbIgGALIAHAFIASgUIglglIAbglIAiApIgIAKIAEAFIAVgPIgng5IAegmIAoBOIAOgGIgnhcIAcgkIAnB3IAQgDIgfiVIAYghIAUAcIATCWIAVAAIgBhjIAbAjIgDA/IgMAAIAAADIAJACIABAJIgcgGIgyAEIADAHIAGABIADALQgIACgIADIgFAEIgCAVQgIABgNAGIgMAEIAEAJIAkANIAEAUQgFABgKAHIgKAGIAAACIAEgBIABAFIAQgPIAWgDIADAMIAMAEIgBAIQgIgCgVAJIgTAIIADAGIACgCIACABIAEAJIAigOIAkAFIgBgIIgSgGIgBgRIAkAdIADAQIADAFIAAAEIgOgDIACAJIAFADIAOAmQABADAAACIgCAIIgNgBIgEAEIgEgBIgBAFIAJALIAFgDIgDgFIAAgDIAOgBQADAAACADIAFAEIAJgIIAIAEIgIANIgTAGIgCARIADAAIALAQIgDAFIgMgEIgDAIQAAAHAKgBIAAANIgSgCIAAAQIAOgFIADABIAJAQIgDARIgiAIIgDBFQAAALADACIAKADIhUBwgAhKDJIgdABIgCAFQAKADAiAGIALgNIgIgmIgLAHIgIAAgAhSB5IAFAhIgVACIgGAFIAiAFIAHgCQAJgGAFgHIgPgoQgHAKgLAAgAiVBYIgDAfIAMgFQACgOADgOgAhVA5QAJAGgEASIAHABQADAFgBAHIAKAAQADgSgLgQIgNgLgABIBYIACgTIgKgKIgGgBIgWATIgBAEIADAFIAFAAIAdACgAhxgKIgJAGIgMAgQgGARgDAPIAOgBQAIgcAKgZIAJgRIAOgUIgGgGgAARARIAVAWIAEAAIAagOIACgVIgDgEIgXAJIgbgIgAhdAYIAJAKIAFgFIgLgNIgNACIgEALIAIgGgAhJgcQgaAcgEAKIADABIAWgaQAXgcAJgEIgDgIIgYAbgABUEGIgIhFIAAgGIACgBIAMBNIgBABgABZC4IADgBIAPA5IgEAFgABmC0IADgBIAQAqIgDAFgABxCoIABgEIAUApIgDAEgAB2CWIABgDIAbArIgDADgAB0B/IAAgEIAoA0IgCADgAB1BwIAAgCIAxA0IgBADgAB1BlIAAgDIA8AyIgCADgAB1BaIAAgCIBHAuIgDADgAB2BRIAAgCIBRAoIgCADgAB2BJIAAgCIBdAgIgCAEgAB5BCIACgBIAAgBIBmAVIgDAFgAB/A5IABgBIByAHIgFAGgACBAuICFgJIgGAGIh/AFgAB+AlIChghIgGAIIiaAbgAB7AdICVgzIAEAGIiYAugAB4AUICFhDIAEAGIiIA+gAB1ALIB3hRIADAFIh5BOgAByAEIgBgGIgMgLIACgLIAAgJIgEgMIACgEIAFADIACANIAJABIAKAHIABgEIgHAQIAAADIgBAGIBghcIAGAJIhpBYIgBADgAB0gRIAAADIAFABIAAgCIACgEIgDgBgAB7gqIA+heIAMAPIhFBXgAByg7IgDAAIgCgJIAshvIAOAUIgBgBIgyBngABehUQgHgDgfgDIgegCIADgEIgJgNIALAAIACAGIAbAAIAFAHIAmAEQgJgjgIgLQgigIgRABIAAgDIAaABIABgCIAWADIADgGIgEgCIAAgFQgPgFgDAAIAAgFIAQADIAAgCIgFgIIgLgBIgDgHIAUAEIANAfIABgDIgCgFIANhSIAhAsIgFATIgKgFIgUBJIgNgiIgBADIAWA6IgGAHQAAgFgNgFg");
	this.shape.setTransform(186.7,246.3,5.666,5.666);

	this.instance = new lib.bg();
	this.instance.setTransform(189.9,246.5,1,1,0,0,0,189.9,246.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0.4,375.5,492.1);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol4();
	this.instance.setTransform(188.1,246.5,1,1,0,0,0,188.3,246.4);
	this.instance.alpha = 0.32;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(189.9,246.5,1,1,0,0,0,189.9,246.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0.1,376.8,492.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5B076").s().p("Aj3AzIAVAAIgDANIAJABIAJglIg4gFIgSgXIAZggIA5APIgFANIAJABIANgdIg7gUIAjgtIAmAUIgHANIAHAEIAPgZIgrgbIAfgnIAdAbIgGALIAHAFIASgUIglglIAbglIAiApIgIAKIAEAFIAVgPIgng5IAegmIAoBOIAOgGIgnhcIAcgkIAnB3IAQgDIgfiVIAYghIAUAcIATCWIAVAAIgBhjIAbAjIgDA/IgMAAIAAADIAJACIABAJIgcgGIgyAEIADAHIAGABIADALQgIACgIADIgFAEIgCAVQgIABgNAGIgMAEIAEAJIAkANIAEAUQgFABgKAHIgKAGIAAACIAEgBIABAFIAQgPIAWgDIADAMIAMAEIgBAIQgIgCgVAJIgTAIIADAGIACgCIACABIAEAJIAigOIAkAFIgBgIIgSgGIgBgRIAkAdIADAQIADAFIAAAEIgOgDIACAJIAFADIAOAmQABADAAACIgCAIIgNgBIgEAEIgEgBIgBAFIAJALIAFgDIgDgFIAAgDIAOgBQADAAACADIAFAEIAJgIIAIAEIgIANIgTAGIgCARIADAAIALAQIgDAFIgMgEIgDAIQAAAHAKgBIAAANIgSgCIAAAQIAOgFIADABIAJAQIgDARIgiAIIgDBFQAAALADACIAKADIhUBwgAhKDJIgdABIgCAFQAKADAiAGIALgNIgIgmIgLAHIgIAAgAhSB5IAFAhIgVACIgGAFIAiAFIAHgCQAJgGAFgHIgPgoQgHAKgLAAgAiVBYIgDAfIAMgFQACgOADgOgAhVA5QAJAGgEASIAHABQADAFgBAHIAKAAQADgSgLgQIgNgLgABIBYIACgTIgKgKIgGgBIgWATIgBAEIADAFIAFAAIAdACgAhxgKIgJAGIgMAgQgGARgDAPIAOgBQAIgcAKgZIAJgRIAOgUIgGgGgAARARIAVAWIAEAAIAagOIACgVIgDgEIgXAJIgbgIgAhdAYIAJAKIAFgFIgLgNIgNACIgEALIAIgGgAhJgcQgaAcgEAKIADABIAWgaQAXgcAJgEIgDgIIgYAbgABUEGIgIhFIAAgGIACgBIAMBNIgBABgABZC4IADgBIAPA5IgEAFgABmC0IADgBIAQAqIgDAFgABxCoIABgEIAUApIgDAEgAB2CWIABgDIAbArIgDADgAB0B/IAAgEIAoA0IgCADgAB1BwIAAgCIAxA0IgBADgAB1BlIAAgDIA8AyIgCADgAB1BaIAAgCIBHAuIgDADgAB2BRIAAgCIBRAoIgCADgAB2BJIAAgCIBdAgIgCAEgAB5BCIACgBIAAgBIBmAVIgDAFgAB/A5IABgBIByAHIgFAGgACBAuICFgJIgGAGIh/AFgAB+AlIChghIgGAIIiaAbgAB7AdICVgzIAEAGIiYAugAB4AUICFhDIAEAGIiIA+gAB1ALIB3hRIADAFIh5BOgAByAEIgBgGIgMgLIACgLIAAgJIgEgMIACgEIAFADIACANIAJABIAKAHIABgEIgHAQIAAADIgBAGIBghcIAGAJIhpBYIgBADgAB0gRIAAADIAFABIAAgCIACgEIgDgBgAB7gqIA+heIAMAPIhFBXgAByg7IgDAAIgCgJIAshvIAOAUIgBgBIgyBngABehUQgHgDgfgDIgegCIADgEIgJgNIALAAIACAGIAbAAIAFAHIAmAEQgJgjgIgLQgigIgRABIAAgDIAaABIABgCIAWADIADgGIgEgCIAAgFQgPgFgDAAIAAgFIAQADIAAgCIgFgIIgLgBIgDgHIAUAEIANAfIABgDIgCgFIANhSIAhAsIgFATIgKgFIgUBJIgNgiIgBADIAWA6IgGAHQAAgFgNgFg");
	this.shape.setTransform(186.7,246.3,5.666,5.666);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.bg();
	this.instance.setTransform(189.9,246.5,1,1,0,0,0,189.9,246.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EggoAAAQADABQK1XQQM1ZACADUAgyAqmAAEAAGQACABwZVUQwYVUADADIAAABMgglgqtg");
	this.shape_1.setTransform(190.2,246.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-26.9,417.9,546.6);


(lib.ringsSPRITE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SPRITE();
	this.instance.setTransform(264,264,1,1,0,0,0,264,264);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 193, 193, 193, 0)];
	this.instance.cache(-2,-2,532,532);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,528,528);


(lib.ring33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A96d7QsbsZAAxiQAAxhMbsaQMZsZRhAAQRiAAMZMZQMbMaAARhQAARisbMZQsZMaxiAAQxhAAsZsagA3r3oQpzJyAAN2QAAN1JzJzQJzJzN2AAQN0AAJzpzQJzpzAAt1QAAt2pzpyQpzpzt0AAQt2AApzJzg");
	mask.setTransform(265.1,264.2);

	// Layer 1
	this.instance = new lib.ringsSPRITE();
	this.instance.setTransform(264,264,1,1,0,0,0,264,264);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:9.2},0).wait(1).to({rotation:15.1,y:264.1},0).wait(1).to({rotation:19.1,y:264},0).wait(1).to({rotation:21.8,y:264.1},0).wait(1).to({rotation:23.8,y:264},0).wait(1).to({rotation:25.2},0).wait(1).to({rotation:26.3,x:264.1},0).wait(1).to({rotation:27.2,x:264},0).wait(1).to({rotation:27.9},0).wait(1).to({rotation:28.4},0).wait(1).to({rotation:28.8},0).wait(1).to({rotation:29.1,y:264.1},0).wait(1).to({rotation:29.4,y:264},0).wait(1).to({rotation:29.6},0).wait(1).to({rotation:29.7},0).wait(1).to({rotation:29.8,y:264.1},0).wait(1).to({rotation:29.9,y:264},0).wait(1).to({rotation:30,y:264.1},0).wait(2).to({regX:264.1,regY:263.9,x:264.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-6.7,542,542);


(lib.ring22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3lXlQpxpxAAt0QAAt0JxpxQJypxNzAAQN0AAJyJxQJxJxAAN0QAAN0pxJxQpyJyt0AAQtzAApypygAzOzLQn9H8ABLPQgBLOH9H8QH9H9LPAAQLNAAH9n9QH8n8ABrOQgBrPn8n8Qn9n9rNAAQrPAAn9H9g");
	mask.setTransform(265.2,264.3);

	// Layer 1
	this.instance = new lib.ringsSPRITE();
	this.instance.setTransform(264,264,1,1,0,0,0,264,264);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:6.7},0).wait(1).to({rotation:10.8},0).wait(1).to({rotation:13.4},0).wait(1).to({rotation:15.2},0).wait(1).to({rotation:16.4},0).wait(1).to({rotation:17.3},0).wait(1).to({rotation:18},0).wait(1).to({rotation:18.5},0).wait(1).to({rotation:18.9},0).wait(1).to({rotation:19.2},0).wait(1).to({rotation:19.5},0).wait(1).to({rotation:19.6},0).wait(1).to({rotation:19.8},0).wait(1).to({rotation:19.9},0).wait(2).to({rotation:20},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51.6,50.7,427.2,427.2);


(lib.ring11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsKaSQn/n+AArTQAArQH/n+QH/n/LPAAQLSAAH/H/QH+H+AALQQAALTn+H+Qn/H+rSAAQrPAAn/n+g");
	mask.setTransform(219.6,219.3);

	// Layer 1
	this.instance = new lib.ringsSPRITE();
	this.instance.setTransform(264,264,1,1,0,0,0,264,264);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90.5,90,348.6,348.6);


// stage content:
(lib.moctezuma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{repeat:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var self = this;
		
		this.areWeReady = true;
		this.isFirstTime = true;
		
		this.start = function() {
			if (self.isFirstTime) {
				self.play();
			}
			self.isFirstTime = false;
		}
		
		this.pause = function() {
		}
		
		/*setTimeout(function() {
			self.start();
		}, 300);*/
	}
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(79).call(this.frame_79).wait(1));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_46 = new cjs.Graphics().p("A4BgGIL+vtQMAvrADAAIYCfYI4Jflg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(46).to({graphics:mask_graphics_46,x:266.1,y:266.7}).wait(15).to({graphics:null,x:0,y:0}).wait(19));

	// shine
	this.instance = new lib.shine();
	this.instance.setTransform(30.4,234.8,0.823,0.823,-6.5,0,0,77.4,337.3);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).to({regX:77.5,x:500.1,y:234.7},14,cjs.Ease.get(1)).to({_off:true},1).wait(19));

	// anim1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(267.4,266.9,0.823,0.823,0,0,0,190,246.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({regX:190.2,regY:246.4,scaleX:0.79,x:267.5,y:266.7},0).wait(1).to({scaleX:0.62,x:267.4},0).wait(1).to({scaleX:0.28},0).wait(1).to({scaleX:0.07,x:267.3},0).wait(1).to({regX:191.8,regY:246.6,scaleX:0.03,y:266.9},0).to({_off:true},1).wait(10).to({_off:false},0).wait(1).to({regX:190.2,regY:246.4,scaleX:0.04,x:267.2,y:266.7},0).wait(1).to({scaleX:0.08},0).wait(1).to({scaleX:0.16,x:267.1},0).wait(1).to({scaleX:0.3,x:266.8},0).wait(1).to({scaleX:0.5,x:266.5},0).wait(1).to({scaleX:0.67,x:266.3},0).wait(1).to({scaleX:0.77,x:266.1},0).wait(1).to({scaleX:0.81,x:266},0).wait(1).to({regX:190,regY:246.6,scaleX:0.82,x:267.4,y:266.9},0).wait(50));

	// anim2
	this.instance_2 = new lib.Symbol2copy();
	this.instance_2.setTransform(266.8,266.9,0.03,0.823,0,0,180,190.1,246.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(1).to({regX:188.1,regY:246.5,scaleX:0.07,x:266.9,y:266.8},0).wait(1).to({scaleX:0.23,x:267.2},0).wait(1).to({scaleX:0.58,x:267.9},0).wait(1).to({scaleX:0.78,x:268.3},0).wait(1).to({regX:189.9,regY:246.6,scaleX:0.82,x:266.8,y:266.9},0).wait(1).to({regX:188.1,regY:246.5,scaleX:0.8,x:268.2,y:266.8},0).wait(1).to({scaleX:0.7,x:268},0).wait(1).to({scaleX:0.46,x:267.6},0).wait(1).to({scaleX:0.18,x:267.1},0).wait(1).to({scaleX:0.06,x:266.9},0).wait(1).to({regX:190.1,regY:246.6,scaleX:0.03,x:266.8,y:266.9},0).to({_off:true},1).wait(58));

	// spacer
	this.instance_3 = new lib.spacerjpg();
	this.instance_3.setTransform(21,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

	// ring1
	this.instance_4 = new lib.ring11();
	this.instance_4.setTransform(267,267,0.1,0.1,0,0,0,264.5,264.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).wait(1).to({regX:219.6,regY:219.3,scaleX:0.55,scaleY:0.55,x:242.1,y:242},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:234.1,y:233.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:229.8,y:229.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:227.1,y:226.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:225.4,y:225.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:224.2,y:223.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:223.4,y:223.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:222.8,y:222.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:222.5,y:222.2},0).wait(1).to({scaleX:1,scaleY:1,x:222.3,y:222},0).wait(1).to({scaleX:1,scaleY:1,x:222.1,y:221.8},0).wait(1).to({regX:264,regY:264,scaleX:1,scaleY:1,x:267,y:267},0).wait(43));

	// ring2
	this.instance_5 = new lib.ring22();
	this.instance_5.setTransform(267,267,0.1,0.1,0,0,0,264.5,264.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({_off:false},0).wait(1).to({regX:265.1,regY:264.3,scaleX:0.55,scaleY:0.55,x:267.3,y:266.9},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:267.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:267.5,y:266.8},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:267.6},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:264,regY:264,scaleX:1,scaleY:1,x:267,y:267},0).wait(41));

	// ring3
	this.instance_6 = new lib.ring33();
	this.instance_6.setTransform(267,267,0.1,0.1,0,0,0,264.5,264.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({_off:false},0).wait(1).to({regX:265.1,regY:264.2,scaleX:0.55,scaleY:0.55,x:267.3,y:266.8},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:267.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:267.5,y:266.7},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:267.6},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:264,regY:264,scaleX:1,scaleY:1,x:267,y:267},0).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(225,238.5,566,557);

})(window.moctezumaLib = window.moctezumaLib ||{}, window.moctezumaImages = window.moctezumaImages ||{}, createjs = createjs||{}, window.moctezumaSs = window.moctezumaSs ||{});