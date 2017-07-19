(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 628,
	height: 515,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/Assets/Images/touts/es-cerveza/spacerpng.png?1476223385917", id:"spacerpng"},
		{src:"/Assets/Images/touts/es-cerveza/es_cerveza_atlas_NP_.jpg?1476223385914", id:"es_cerveza_atlas_NP_"}
	]
};



lib.ssMetadata = [
		{name:"es_cerveza_atlas_NP_", frames: [[0,517,628,515],[0,0,628,515]]}
];


// symbols:



(lib.bg2 = function() {
	this.spriteSheet = ss["es_cerveza_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.front = function() {
	this.spriteSheet = ss["es_cerveza_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.spacerpng = function() {
	this.initialize(img.spacerpng);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.front();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,628,515);


(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{go:3});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(78).call(this.frame_79).wait(1));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_61 = new cjs.Graphics().p("AoYMiIAK28QAJADGPgfIGLggIEEhQIj6ZNg");
	var mask_graphics_62 = new cjs.Graphics().p("AqupAQAJADGPgfIGLggIE7iCIClh9IBkAPIjcbUIyVAUg");
	var mask_graphics_63 = new cjs.Graphics().p("AtYoGQAJACGPgeIGNghIE5iBIClh9IG4hzIowdWIyVAUg");
	var mask_graphics_64 = new cjs.Graphics().p("AvTOxIAL28QAJACGPgeIGMghIE6iBICkh9IG4hzIhGGLIBBE7IDmhBIjvTug");
	var mask_graphics_65 = new cjs.Graphics().p("AvTPRIAL28QAJADGPgfIGMggIE6iCICkh9IKZi0IgEH0IAEDSIjvTvg");
	var mask_graphics_66 = new cjs.Graphics().p("AxGPRIAL28QAJADGPgfIGMggIE6iCICkh9IKZi0IDEBpIAjHvInWVdg");
	var mask_graphics_67 = new cjs.Graphics().p("AzcRnIAL28QAJADGPgfIGMggIE7iCICjh9IKZi0IDhjcIExhQIAAB9IigCWIhFJnIocVng");
	var mask_graphics_68 = new cjs.Graphics().p("AHWRsI63gKIAL28QAJADGPgfIGMggIE7iCICjh9IKZi0IDhjcIExhQIAAB9IgJJJIATYlg");
	var mask_graphics_69 = new cjs.Graphics().p("AFWR2I62gKIAK28QAJADGPgfIGNggIE7iCIClh9IKXi0IDhjcIExhQIDwgUIAZMHIj/X4g");
	var mask_graphics_70 = new cjs.Graphics().p("ADoSlI62gJIAK28QAJACGPgeIGNghIE7iBIClh9IKXi0IDhjdIExhQIHlhyIgjNMIm4YRg");
	var mask_graphics_71 = new cjs.Graphics().p("A6FTuIAL28QAJADGPgfIGMggIE7iCIClh9IKXi0IDhjcIExhQIJ8iHICqiHIAtPAIkKYqI1KAFg");
	var mask_graphics_72 = new cjs.Graphics().p("A7BVGIAL28QAJACGPgeIGMghIE7iBIClh9IKXi0IDhjdIExhQIJ8iHIE/k1IAQQ8ImCZdI1IAEg");
	var mask_graphics_73 = new cjs.Graphics().p("A80VVIAL28QAJACGPgeIGMghIE7iBIClh9IKXi0IDhjdIExhQIJ8iHIE/k1ID1geIjlRaImCZdI1IAEg");
	var mask_graphics_74 = new cjs.Graphics().p("AMudEI1IAFI65gKIAL2+QAJADGPgfIGMggIE7iCIClh9IKZiyIDhjcIEvhQIJ8iHIE/k2IC6ivIDXruIJ6ibIhUJEMAB9AzXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(61).to({graphics:mask_graphics_61,x:251.3,y:442.2}).wait(1).to({graphics:mask_graphics_62,x:267.3,y:433.2}).wait(1).to({graphics:mask_graphics_63,x:284.3,y:427.5}).wait(1).to({graphics:mask_graphics_64,x:295.5,y:428}).wait(1).to({graphics:mask_graphics_65,x:295.5,y:424.7}).wait(1).to({graphics:mask_graphics_66,x:307,y:424.7}).wait(1).to({graphics:mask_graphics_67,x:322,y:409.7}).wait(1).to({graphics:mask_graphics_68,x:322.5,y:410.2}).wait(1).to({graphics:mask_graphics_69,x:335.3,y:409.2}).wait(1).to({graphics:mask_graphics_70,x:346.3,y:404.5}).wait(1).to({graphics:mask_graphics_71,x:364.5,y:396.2}).wait(1).to({graphics:mask_graphics_72,x:370.5,y:387.5}).wait(1).to({graphics:mask_graphics_73,x:382,y:386}).wait(1).to({graphics:mask_graphics_74,x:423.5,y:336.9}).wait(6));

	// Layer 10
	this.instance = new lib.top();
	this.instance.setTransform(314,257.5,1,1,0,0,0,314,257.5);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({_off:false},0).wait(19));

	// Layer 9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_49 = new cjs.Graphics().p("Ap/CLQgBi4ADAHIOlkeIBfDhID6hGIgUD4IiqDnIlekYIriEmIgCi5g");
	var mask_1_graphics_50 = new cjs.Graphics().p("Ap/CLQgBkmADAHIOlkeIBfDhID6hGIgUD6IiqDlInoB9IpYBuIgCkog");
	var mask_1_graphics_51 = new cjs.Graphics().p("Ap9FUIgCkoQgBkmADAHIOlkeIBfDhID6hGIgUD6IhVGAInvEOg");
	var mask_1_graphics_52 = new cjs.Graphics().p("Ap5J/IgEoQQgEoOADAHIOlkeIBfDhID6hGIgUD6IhVGAIhGHvIkiBpg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AthJ/IgFoQQgDoOADAHIOlkeIBfDhID6hGIHRiRIilG+InbM8IkgBpg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AthJ/IgFoQQgDoOADAHIOlkeIBfDhID6hGIHRiRIhLP7ImLCbIiqBkIkgBpg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AxvLKIgFoQQgDoOADAHIOnkeIBfDhID4hGIPtkxImaHHIhzKnInlDIIioBkIkiBpg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AxvLKIgFoQQgDoOADAHIOnkeIBfDhID4hGIPtkxIjwLvIkdF/InlDIIioBkIkiBpg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AyGLKIgEoQQgEoOADAHIOnkeIBfDhID4hGIPtkxIAtNRIo6EdInlDIIioBkIkiBpg");
	var mask_1_graphics_58 = new cjs.Graphics().p("A0KL/IgFoRQgDoNADAGIOnkdIBfDhID6hGIUhmaIhfNuIjoBxIn8D3InjDIIiqBkIkiBpg");
	var mask_1_graphics_59 = new cjs.Graphics().p("A2gMiIgFoRQgDoNADAGIOnkdIBfDhID6hGIYWngIA3MqIpzD7In8D3InjDIIiqBkIkiBpg");
	var mask_1_graphics_60 = new cjs.Graphics().p("A5INeIgEoRQgEoNADAGIOnkdIBfDhID6hGIecpYIkTObIqvECIn8D3InjDIIiqBkIkiBpg");
	var mask_1_graphics_61 = new cjs.Graphics().p("A5rNeIgEoRQgEoNADAGIOnkdIBfDhID6hGIecpYIBGM0IiMB2It8DzIn8D3InjDIIiqBkIkiBpg");
	var mask_1_graphics_62 = new cjs.Graphics().p("A9qODIgEoQQgEoOADAHIOnkeIBfDhID6hGMAiHgKjIFZJsIqKGJIt8DzIn6D4InlDIIiqBkIkiBpg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(49).to({graphics:mask_1_graphics_49,x:261.4,y:263.5}).wait(1).to({graphics:mask_1_graphics_50,x:261.4,y:274.5}).wait(1).to({graphics:mask_1_graphics_51,x:261.4,y:284}).wait(1).to({graphics:mask_1_graphics_52,x:261.4,y:300.5}).wait(1).to({graphics:mask_1_graphics_53,x:284.7,y:300.5}).wait(1).to({graphics:mask_1_graphics_54,x:284.7,y:300.5}).wait(1).to({graphics:mask_1_graphics_55,x:311.7,y:293}).wait(1).to({graphics:mask_1_graphics_56,x:311.7,y:293}).wait(1).to({graphics:mask_1_graphics_57,x:313.9,y:293}).wait(1).to({graphics:mask_1_graphics_58,x:327.2,y:287.7}).wait(1).to({graphics:mask_1_graphics_59,x:342.2,y:284.2}).wait(1).to({graphics:mask_1_graphics_60,x:358.9,y:278.2}).wait(1).to({graphics:mask_1_graphics_61,x:362.4,y:278.2}).wait(1).to({graphics:mask_1_graphics_62,x:387.9,y:274.5}).wait(18));

	// Layer 8
	this.instance_1 = new lib.top();
	this.instance_1.setTransform(314,257.5,1,1,0,0,0,314,257.5);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).wait(31));

	// MASK (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_39 = new cjs.Graphics().p("AvuOkICR3uIOCn0IPKgZQjxDFj8DSQn2GlgwBIQgyBIjXJ4QhrE8hiEvg");
	var mask_2_graphics_40 = new cjs.Graphics().p("AysNCICR3uIOEnzIVECRQjkB6kJCuQoRFciwEAQiyD+ikIwQhREYgvDkg");
	var mask_2_graphics_41 = new cjs.Graphics().p("AysNCICR3uIOEnzIVECRQi8CajhDPQnBGciyEAQiwD/j0HvQh5D4hXDDg");
	var mask_2_graphics_42 = new cjs.Graphics().p("AysNCICR3uIOEnzIVECRQhZDCh8D3Qj5HtiyD9QiyEBm6GfQjeDQi6Cbg");
	var mask_2_graphics_43 = new cjs.Graphics().p("AysNCICR3uIOEnzIVECRQgQDEg0D3QhoHwiyD+QiyEApNGcQkkDPkDCag");
	var mask_2_graphics_44 = new cjs.Graphics().p("AzzNCICR3uIOEnzIVECRQBMDQApEEQBRIJiyD9QiyEBsGGEQmBDBlfCOg");
	var mask_2_graphics_45 = new cjs.Graphics().p("A2KNCICR3uIOEnzIVECRIBiCQQByCxBQCqQEAIeiyD+QiyEBu1FtQnXC2m4CDg");
	var mask_2_graphics_46 = new cjs.Graphics().p("A41NCICR3uIOEnzIVECRICbCYQC2C8CJCzQG3I3iyEAQiyEBxsFRQozCpoSB1g");
	var mask_2_graphics_47 = new cjs.Graphics().p("A8ENCICR3uIOEnzMAh9ABtQCRD2BuEoQDaJOiyEAQhYCAmpCLQjaBHqYCsI1xFog");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_2_graphics_39,x:287.8,y:133.3}).wait(1).to({graphics:mask_2_graphics_40,x:306.8,y:143.1}).wait(1).to({graphics:mask_2_graphics_41,x:306.8,y:143.1}).wait(1).to({graphics:mask_2_graphics_42,x:306.8,y:143.1}).wait(1).to({graphics:mask_2_graphics_43,x:306.8,y:143.1}).wait(1).to({graphics:mask_2_graphics_44,x:313.9,y:143.1}).wait(1).to({graphics:mask_2_graphics_45,x:328.9,y:143.1}).wait(1).to({graphics:mask_2_graphics_46,x:346.1,y:143.1}).wait(1).to({graphics:mask_2_graphics_47,x:366.7,y:143.1}).wait(33));

	// Layer 6
	this.instance_2 = new lib.top();
	this.instance_2.setTransform(314,257.5,1,1,0,0,0,314,257.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(41));

	// MASK (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_25 = new cjs.Graphics().p("AAvPCIjGloMgCHgiHQADgDEcB3IEeB3IiqV7IAyXXIhLAeg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AhlPCIjIloMgCHgiHQADgDGzBRIGzBSQhyDchvEnQjdJMALFyQANF0BrI+QA2EfAzDUIkbBVg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AjnPCIjIloMgCHgiHQADgDI0BAII2BAQimDlikEvQlFJeAMFyQANF0DKIdQBnEPBkDEIoQCWg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AmdPCIjJloMgCHgiHQAEgDLrAaILsAbQjiD1jeFAQm7J+AMFyQAKEjDUGaQAYAvCIDyQBSCTATA/QALAghmBSQgyApg2AjIoPCWg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AnwPCIjIloMgCHgiHQADgDM+AYIM+AYQjsD3jqFAQnSKBANFyQAJEfDKEtQA1BOBkCGQBPBuAUBBQAKAgiXDDQhMBhhOBbIoQCWg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AsNPCIjIloMgCHgiHQADgDRaAQIRcARQk3Duk1E4QpnJvAMF0QAKEpBoEpQAbBOA6CLQAzB6ASA3QAKAgi7DUQheBqhhBkIoSCWg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AsNPCIjIloMgCHgiHQADgDRaAQIRcARQg3CBhLCdQiWE6hkCMQhkCNjcCuQhFA2hIAzIg7AoIjsASIgtB+QgsCKACA/QAKEpBoEpQAbBOA6CLQAzB6ASA3QAKAgi7DUQheBqhhBkIoSCWg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AsfPCIjIloMgCHgiHQADgDRcAQIRaARQAbCdAIC4QAPFxhkCMQhkCNi5CBQg6Aog7AiIgwAaIp8gCIgtB+QgsCKACA/QAKEpBpEpQAaBOA6CLQAzB6ASA3QAKAgi7DUQhfBqhgBkIoSCWg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AuvPCIjIloMgCHgiHQADgDTeAOITcAOQAlCuASDKQAjGUhkCMQhkCNiCBeQgpAdgnAVIgeAPIwWADIgtB+QgsCKACA/QAKEpBpEpQAcBOA6CLQAzB6AQA3QAKAgi7DUQhfBqhgBkIoSCWg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AwtPCIjIloMgCHgiHQADgDUYALIUVAMQBPDGA7DhQB1HEhkCMQhkCNkOAxQhUAPhbAEIxhAEIgtB+QgsCKACA/QAKEpBqEpQAcBOA6CLQAzB6ARA3QAKAgi9DUQheBqhhBkIoSCWg");
	var mask_3_graphics_35 = new cjs.Graphics().p("Ay2PCIjIloMgCHgiHQADgDWhATIWfATQBPDGA6DhQB2HEhkCMQgqA8juAyIltBBQhVAPhbAEIxgAEIgtB+QgsCKACA/QAKEpBpEpQAcBOA6CLQAzB6ASA3QAKAgi9DUQhfBqhgBkIoSCWg");
	var mask_3_graphics_36 = new cjs.Graphics().p("A3xPCIjIloMgCHgiHQADgDc+AaIdAAbQgsDZg/D0QiAHphkCMQgnA3mbAKIk7AGQikAEg4AKQhVAPhbAEIxgAEIgtB+QgsCKACA/QAKEpBqEpQAbBOA6CLQAzB6ASA3QAKAgi9DUQheBqhhBkIoSCWg");
	var mask_3_graphics_37 = new cjs.Graphics().p("EghkAPCIjJloMgCHgiGUAAEgAEAk3AAHMAk0AAHID6IWQj7CVkRCcQogE1hmAgQhoAfiXAPIiCAJQgGgfgHgdQgPg5gHALQgoA4maAJIk7AGQiiAEg5AKQhUAPhbAFIxjADIgtB+QgsCKADBAQAJEoBqEpQAcBOA6CLQAzB6ASA4QAJAfi8DVQhfBqhhBkIoRCVg");
	var mask_3_graphics_38 = new cjs.Graphics().p("EghkAPCIjJloMgCHgiGUAAEgAEAk3AAHMAk0AAHID6IWQj3DGkKDMQoXGXhmAfQhoAgihhSQgygagzgjIgngcQgGgfgHgdQgPg5gHALQgoA4maAJIk7AGQiiAEg5AKQhUAPhbAFIxjADIgtB+QgsCKADBAQAJEoBqEpQAcBOA6CLQAzB6ASA4QAJAfi8DVQhfBqhhBkIoRCVg");
	var mask_3_graphics_39 = new cjs.Graphics().p("EghTAPCIjIloMgCHgiGUAADgAEAk3AAHMAk0AAHIDXVQQvoEailAzQhnAfh5gRQgmgGgjgKIgcgIQgNiOgOiNQgekagIALQgnA4mbAJIk7AGQiiAEg4AKQhVAPhbAFIxiADIgtB+QgsCKACBAQAKEoBqEpQAbBOA6CLQAzB6ASA4QAKAfi9DVQheBqhhBkIoSCVg");
	var mask_3_graphics_40 = new cjs.Graphics().p("EghTAPCIjIloMgCHgiGUAADgAEAk3AAHMAk0AAHIDXVQQkACzkVC2QoqFyhnAgQhnAfhtjpQgihIgfhbIgXhLQgNiOgOiNQgekagIALQgnA4mbAJIk7AGQiiAEg4AKQhVAPhbAFIxiADIgtB+QgsCKACBAQAKEoBqEpQAbBOA6CLQAzB6ASA4QAKAfi9DVQheBqhhBkIoSCVg");
	var mask_3_graphics_41 = new cjs.Graphics().p("EghQAPCIjJloMgCHgiGUAAEgAEAk3AAHMAk0AAHMADRAmaQidALiyARQllAjhmAgQhoAfkvnAQhfiMhoiqIhViPQgMiOgPiNQgekagHALQgoA4maAJIk7AGQiiAEg5AKQhUAPhbAFIxjADIgtB+QgsCKADBAQAJEoBqEpQAcBOA6CLQAzB6ASA4QAJAfi8DVQhfBqhhBkIoRCVg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_3_graphics_25,x:189.3,y:117.8}).wait(1).to({graphics:mask_3_graphics_26,x:204.3,y:117.8}).wait(1).to({graphics:mask_3_graphics_27,x:217.3,y:117.8}).wait(1).to({graphics:mask_3_graphics_28,x:235.5,y:117.8}).wait(1).to({graphics:mask_3_graphics_29,x:243.8,y:117.8}).wait(1).to({graphics:mask_3_graphics_30,x:272.3,y:117.8}).wait(1).to({graphics:mask_3_graphics_31,x:272.3,y:117.8}).wait(1).to({graphics:mask_3_graphics_32,x:274.1,y:117.8}).wait(1).to({graphics:mask_3_graphics_33,x:288.5,y:117.8}).wait(1).to({graphics:mask_3_graphics_34,x:301,y:117.8}).wait(1).to({graphics:mask_3_graphics_35,x:314.8,y:117.8}).wait(1).to({graphics:mask_3_graphics_36,x:346.3,y:117.8}).wait(1).to({graphics:mask_3_graphics_37,x:409,y:117.8}).wait(1).to({graphics:mask_3_graphics_38,x:409,y:117.8}).wait(1).to({graphics:mask_3_graphics_39,x:407.3,y:117.8}).wait(1).to({graphics:mask_3_graphics_40,x:407.3,y:117.8}).wait(1).to({graphics:mask_3_graphics_41,x:407,y:117.8}).wait(39));

	// Layer 4
	this.instance_3 = new lib.top();
	this.instance_3.setTransform(314,257.5,1,1,0,0,0,314,257.5);
	this.instance_3._off = true;

	this.instance_3.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).wait(55));

	// MASK (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_13 = new cjs.Graphics().p("AzpgCQASqRAFAGMAnNAAKIkFGuMgjvANkQAHlKAJlHg");
	var mask_4_graphics_14 = new cjs.Graphics().p("AzpgCQASqRAFAGMAnNAAKIlfMUMgiVAH+QAHlKAJlHg");
	var mask_4_graphics_15 = new cjs.Graphics().p("AzpgCQASqRAFAGMAnNAAKInvSGMggFACMQAHlKAJlHg");
	var mask_4_graphics_16 = new cjs.Graphics().p("Az5JEQAHlKAJlHQASqRAFAGMAnNAAKIpjWog");
	var mask_4_graphics_17 = new cjs.Graphics().p("Az5GuQAHlKAJlHQASqRAFAGMAnNAAKIoiT0Ig3Hgg");
	var mask_4_graphics_18 = new cjs.Graphics().p("Az+GaIAVr1QAWr1AGAGMAnMAAKIohT0IgwISIgRC5IBuDNg");
	var mask_4_graphics_19 = new cjs.Graphics().p("AzpgCQARxWAGAGMAnMAAKIohT0IgwITIgRC4IBuDNI//APIAQxVg");
	var mask_4_graphics_20 = new cjs.Graphics().p("AzjgCQgH2gAGAGMAnMAAKIohT2IgxIRIgQC4IBuDNI/OKjIgJ2fg");
	var mask_4_graphics_21 = new cjs.Graphics().p("AzLgCQgg49AGAGMAnMAAKIohT2IgxIQIgQC5IBuDNI+cPdIgi48g");
	var mask_4_graphics_22 = new cjs.Graphics().p("AzLgCQgg49AGAGMAnMAAKIohT2IgxIQIgQC5IBuDNIm4H5I3kHkIgi48g");
	var mask_4_graphics_23 = new cjs.Graphics().p("AzLgCQgg49AGAGMAnMAAKIohT2IgxIQIgQC5IBuDNImkM5I34CkIgi48g");
	var mask_4_graphics_24 = new cjs.Graphics().p("AypXZIgi49Qgg49AGAGMAnMAAKIohT2IgxIRIgQC4IBuDNIm4Shg");
	var mask_4_graphics_25 = new cjs.Graphics().p("AypUnIgi48Qgg49AGAGMAnMAAKIohT2IgxISIgQC3IDrGaIpxU2g");
	var mask_4_graphics_26 = new cjs.Graphics().p("AypUnIgi48Qgg49AGAGMAnMAAKIohT2IgxISIgQC3IDrGaIBBH+IqyM4g");
	var mask_4_graphics_27 = new cjs.Graphics().p("AypUnIgi48Qgg49AGAGMAnMAAKIohT2IgxISIgQC3IDrGaIA8PjIqtFTg");
	var mask_4_graphics_28 = new cjs.Graphics().p("AD/cRI2PA9Igu9uQgt9uAGAGMAnMAAKIohT2IgxISIgQC3IDrGaIBBWvg");
	var mask_4_graphics_29 = new cjs.Graphics().p("AK3dXQkykeiGgQQiGgQqWD2QlMB7kxB/MgApghAUgAoghAAAGAAGMAnMAAKIohT2IgxITIgQC4IDrGYIBfeAQh+iMiaiPg");
	var mask_4_graphics_30 = new cjs.Graphics().p("Ay5gCUgAygnwAAGAAGMAnMAAKIohT2IgxISIgQC5IDrGaMABzAoqQh5i+iVjBQkomCiGgQQiGgQqgG0QlRDak2DeMgAzgnwg");
	var mask_4_graphics_31 = new cjs.Graphics().p("Ay5gCUgAygnwAAGAAGMAnMAAKIohT2IgxISIgQC5IDrGaMABzAoqQh3g/iShBQkjiDiGgQQiGgQqlC1QlTBbk5BeMgAzgnwg");
	var mask_4_graphics_32 = new cjs.Graphics().p("EAFQAryQjWgZ1PhkMgALgq3UgAKgq4AAGAAGMAnMAAKIohT2IgxISIgQC5IDrGaMACCAwTQhzAiiOAfQjhAwiDAAQgiAAgcgDg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_4_graphics_13,x:106.5,y:43.5}).wait(1).to({graphics:mask_4_graphics_14,x:106.5,y:43.5}).wait(1).to({graphics:mask_4_graphics_15,x:106.5,y:43.5}).wait(1).to({graphics:mask_4_graphics_16,x:106.5,y:51}).wait(1).to({graphics:mask_4_graphics_17,x:106.5,y:66}).wait(1).to({graphics:mask_4_graphics_18,x:106,y:88}).wait(1).to({graphics:mask_4_graphics_19,x:106.5,y:88.8}).wait(1).to({graphics:mask_4_graphics_20,x:108.4,y:121.8}).wait(1).to({graphics:mask_4_graphics_21,x:108.5,y:137.5}).wait(1).to({graphics:mask_4_graphics_22,x:108.5,y:137.5}).wait(1).to({graphics:mask_4_graphics_23,x:108.5,y:137.5}).wait(1).to({graphics:mask_4_graphics_24,x:108.5,y:147.3}).wait(1).to({graphics:mask_4_graphics_25,x:108.5,y:165}).wait(1).to({graphics:mask_4_graphics_26,x:108.5,y:165}).wait(1).to({graphics:mask_4_graphics_27,x:108.5,y:165}).wait(1).to({graphics:mask_4_graphics_28,x:108.5,y:171}).wait(1).to({graphics:mask_4_graphics_29,x:108.5,y:194.3}).wait(1).to({graphics:mask_4_graphics_30,x:108.5,y:232.2}).wait(1).to({graphics:mask_4_graphics_31,x:108.5,y:232.2}).wait(1).to({graphics:mask_4_graphics_32,x:108.4,y:258.6}).wait(48));

	// top
	this.instance_4 = new lib.top();
	this.instance_4.setTransform(314,257.5,1,1,0,0,0,314,257.5);
	this.instance_4._off = true;

	this.instance_4.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).wait(67));

	// bg2
	this.instance_5 = new lib.bg2();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,628,515);


// stage content:
(lib.es_cerveza = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var self = this;
		
		this.areWeReady = true;
		this.isFirstTime = true;
		
		this.start = function() {
			if (self.isFirstTime) {
				self.animation.gotoAndPlay("go");
			}
			self.isFirstTime = false;
		}
		
		this.pause = function() {
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// spacer
	this.instance = new lib.spacerpng();
	this.instance.setTransform(0,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.animation = new lib.animation();
	this.animation.setTransform(314,257.5,1,1,0,0,0,314,257.5);

	this.timeline.addTween(cjs.Tween.get(this.animation).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(314,237.5,628,535);

})(window.esCervezaLib = window.esCervezaLib ||{}, window.esCervezaImages = window.esCervezaImages ||{}, createjs = createjs||{}, window.esCervezaSs = window.esCervezaSs ||{});