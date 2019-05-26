"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utilities_1 = require("./utilities");
var GeneratorComponent = /** @class */ (function () {
    function GeneratorComponent(utilities) {
        this.utilities = utilities;
        this.saveImageFirebase = new core_1.EventEmitter();
        this.renderDoneEmit = new core_1.EventEmitter();
        this.savedImageArr = [];
        this.customImages = [];
        this.aggrObjArea = 0;
        this.backgroundShapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
        this.canvasSize = 700;
        this.canvasSizeTwo = 700;
        this.colorArr = [];
        this.currImageIndex = 0;
        this.genTypeArr = ["noPattern", "transPattern", "random"];
        this.layerCounter = 0;
        this.objNum = 23;
        this.patternFill = false;
        this.shapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
        this.smallShapeArr = ['Rectangle', 'Circle'];
        this.renderDone = false;
        this.isBedroom = false;
        // feature detection
        this.isSafari = false;
        this.utilities = utilities;
    }
    GeneratorComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // this.ready = false;
                this.renderDone = false;
                this.initiatePatterns();
                this.populatePatterns();
                this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                this.calculateCanvasSize();
                return [2 /*return*/];
            });
        });
    };
    GeneratorComponent.prototype.initiatePatterns = function () {
        this.patternOne = new Image();
        this.patternOne.crossOrigin = "Anonymous";
        this.patternTwo = new Image();
        this.patternTwo.crossOrigin = "Anonymous";
        this.patternThree = new Image();
        this.patternThree.crossOrigin = "Anonymous";
        this.patternFour = new Image();
        this.patternFour.crossOrigin = "Anonymous";
        this.patternBuddhist = new Image();
        this.patternBuddhist.crossOrigin = "Anonymous";
        this.patternBedroom = new Image();
        this.patternBedroom.crossOrigin = "Anonymous";
        this.patternFive = new Image();
        this.patternFive.crossOrigin = "Anonymous";
        this.patternSix = new Image();
        this.patternSix.crossOrigin = "Anonymous";
        this.patternBedroom.src = 'assets/haystacks.jpg';
        this.patternFive.crossOrigin = "Anonymous";
    };
    GeneratorComponent.prototype.populatePatterns = function () {
        // pattern set up
        this.patternBedroom.onload = function () {
            var pattern = this.ctx.createPattern(this.patternBedroom, 'repeat');
            this.ctx.fillStyle = pattern;
        }.bind(this);
        this.patternBuddhist.src = 'assets/buddhist.png';
        this.patternBuddhist.onload = function () {
            var pattern = this.ctx.createPattern(this.patternBuddhist, 'repeat');
            this.ctx.fillStyle = pattern;
        }.bind(this);
        this.patternThree.src = 'assets/van.jpg';
        this.patternThree.onload = function () {
            var pattern = this.ctx.createPattern(this.patternThree, 'repeat');
            this.ctx.fillStyle = pattern;
        }.bind(this);
        this.patternFive.src = 'assets/frieze.jpg';
        this.patternFive.onload = function () {
            var pattern = this.ctx.createPattern(this.patternFive, 'repeat');
            this.ctx.fillStyle = pattern;
        }.bind(this);
        this.patternOne.src = 'assets/arabesque_pattern.jpg';
        this.patternOne.onload = function () {
            var pattern = this.ctx.createPattern(this.patternOne, 'repeat');
            this.ctx.fillStyle = pattern;
        }.bind(this);
        this.patternSix.src = 'assets/trunks.png';
        this.patternSix.onload = function () {
            var pattern = this.ctx.createPattern(this.patternSix, 'repeat');
            this.ctx.fillStyle = pattern;
        }.bind(this);
        this.patternTwo.src = 'assets/kosovo_map.jpg';
        this.patternTwo.onload = function () {
            var pattern = this.ctx.createPattern(this.patternTwo, 'repeat');
            this.ctx.fillStyle = pattern;
        }.bind(this);
        this.patternFour.src = 'assets/mexico_flag.jpg';
        this.patternFour.onload = function () {
            var pattern = this.ctx.createPattern(this.patternFour, 'repeat');
            this.ctx.fillStyle = pattern;
        }.bind(this);
    };
    GeneratorComponent.prototype.calculateCanvasSize = function () {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvasSize = this.canvas.clientHeight;
        this.ctx.canvas.width = this.canvasSize;
        this.ctx.canvas.height = this.canvasSize;
        this.canvasTwo = document.getElementById("myCanvasTwo");
        this.ctxTwo = this.canvasTwo.getContext("2d");
        this.canvasSizeTwo = this.canvasTwo.clientHeight;
        this.ctxTwo.canvas.width = this.canvasSizeTwo;
        this.ctxTwo.canvas.height = this.canvasSizeTwo;
    };
    GeneratorComponent.prototype.getRandomArt = function (clear, recurseStep) {
        // hide favorites because we're about to switch to savedimagearr
        // hiding stuff since a new image is being drawn
        this.loader.nativeElement.style.visibility = "visible";
        this.singleLayer = false;
        //these values are related to what the art will look like 
        var recurse = false;
        this.objNum = Math.floor(Math.random() * 23) + 10;
        this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
        this.isTrunks = false;
        this.isArabesque = false;
        this.isMexico = false;
        this.isFrieze = false;
        this.isBedroom = false;
        this.isFriezeTwo = false;
        if (recurseStep === undefined) {
            this.genType = this.genTypeArr[Math.floor(Math.random() * this.genTypeArr.length)];
            this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
            // if no recurse, this means this is a new piece, not just a layer, so clear and calculate recurse chance
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = 'white';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            recurse = this.utilities.randomlyChooseTrueOrFalse();
        }
        else {
            // if recurseStep is defined then we know
            recurse = true;
        }
        if (this.genType === 'noPattern' || (this.genType === 'transPattern' && this.singleLayer)) {
            this.isTrunks = this.utilities.randomlyChooseTrueOrFalseThird();
            if (!this.isTrunks) {
                if (this.utilities.randomlyChooseTrueOrFalseThird) {
                    this.isArabesque = false;
                    this.isFrieze = true;
                    this.isFriezeTwo = false;
                    this.isMexico = false;
                    if (this.utilities.randomlyChooseTrueOrFalseThird) {
                        this.isFriezeTwo = true;
                        this.isFrieze = false;
                    }
                }
                else {
                    this.isFrieze = false;
                    this.isFriezeTwo = false;
                    this.isArabesque = true;
                    this.isMexico = false;
                    if (this.utilities.randomlyChooseTrueOrFalseThird) {
                        this.isFriezeTwo = true;
                        this.isArabesque = false;
                    }
                }
            }
            else {
                this.isArabesque = false;
                this.isFrieze = false;
                this.isFriezeTwo = false;
                this.isMexico = false;
            }
            this.isArabesque = false;
            this.isFrieze = false;
            this.isFriezeTwo = false;
            this.isMexico = false;
            this.isTrunks = false;
            var solidSwitch = Math.floor(Math.random() * 7) + 1;
            if (solidSwitch === 1) {
                this.isArabesque = true;
            }
            else if (solidSwitch === 2) {
                this.isArabesque = true;
            }
            else if (solidSwitch === 3) {
                this.isTrunks = false;
            }
            else if (solidSwitch === 4) {
                this.isFrieze = true;
            }
            else if (solidSwitch === 5) {
                this.isFrieze = true;
            }
            else if (solidSwitch === 6) {
                this.isFriezeTwo = true;
            }
            else {
                this.isMexico = true;
            }
        }
        console.log('metadata: genType', this.genType, 'this.isTrunks:', this.isTrunks, 'this.isArabesque', this.isArabesque);
        // because it's fast - we only care about making the load if it's new AND layers
        if (!recurse && recurseStep === undefined) {
            this.singleLayer = true;
        }
        if (recurse && recurseStep === undefined) {
            recurseStep = Math.floor(Math.random() * 9) + 4;
            var img = new Image();
            img.src = this.canvas.toDataURL();
            img.onload = function () {
                this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
                this.getRandomArtAlg(clear, recurse, recurseStep);
            }.bind(this);
        }
        else {
            this.getRandomArtAlg(clear, recurse, recurseStep);
        }
    };
    GeneratorComponent.prototype.getRandomArtAlg = function (clear, recurse, recurseStep) {
        // setup
        this.randomScheme = "Random";
        this.colorArr = this.getRandomColorArr();
        var rand = 1;
        this.patternOffset = 0;
        var offsetRand = this.utilities.randomlyChooseTrueOrFalse();
        if (offsetRand) {
            this.patternOffset = Math.floor(Math.random() * 100) - 100;
        }
        // first layer of small objects;
        this.resetForNewLayer();
        this.getFirstSmallLayer();
        this.resetForNewLayer();
        // layer of transparent objects
        var norm = true;
        rand = Math.floor(Math.random() * 3) + 1;
        if (rand === 2) {
            norm = false;
        }
        var trapTrans = 2;
        if (rand === 2) {
            trapTrans = this.utilities.randomlyChooseOneOrTwo();
        }
        var layerNum = 20;
        if (norm || trapTrans === 1) {
            if (trapTrans === 1) {
                layerNum = 10;
                this.backgroundShapeArr = ['Rectangle', 'Circle', 'Line'];
            }
            else {
                this.backgroundShapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
            }
            while (this.layerCounter < layerNum) {
                this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
                this.randomStrokeOpacity = Math.random() * 1;
                this.randomShapeOpacity = Math.random() * 1;
                var randomShape = this.backgroundShapeArr[Math.floor(Math.random() * this.shapeArr.length)];
                var stroke = this.getRandomRgb();
                if (this.randomScheme === 'Complementary') {
                    var complStroke = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
                    this.ctx.strokeStyle = complStroke.substring(0, complStroke.length - 1) + ',' + this.randomStrokeOpacity + ")";
                }
                else if (this.randomScheme !== 'Monochromatic') {
                    this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';
                }
                else {
                    this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';
                }
                rand = this.utilities.randomlyChooseOneOrTwo();
                if (rand === 1) {
                    this.ctx.strokeStyle = 'black';
                }
                // if (!this.isSafari) {
                this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
                // }
                this.ctx.globalAlpha = (Math.random() * .4);
                this.ctx.fillStyle = this.randomColor;
                this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
                this.ctx.lineWidth = Math.random() * 10;
                this.drawShape(randomShape);
                this.layerCounter++;
            }
        }
        this.resetForNewLayer();
        // layer of main shapes
        var objNum = this.objNum;
        if (this.genType === 'transPattern') {
            objNum = Math.floor(Math.random() * 23) + 19;
        }
        this.getMainLayer(objNum, norm, rand, trapTrans);
        this.resetForNewLayer();
        // second small layer
        this.getSecondSmallLayer(norm);
        if (recurse && recurseStep && recurseStep > 1) {
            recurseStep--;
            this.getRandomArt(clear, recurseStep);
        }
        else {
            this.saveCurrentArt(clear);
        }
    };
    GeneratorComponent.prototype.getSecondSmallLayer = function (norm) {
        var count = 25;
        if (norm) {
            count = 45;
        }
        while (this.layerCounter <= count) {
            this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
            this.randomStrokeOpacity = Math.random() * 1;
            this.randomShapeOpacity = Math.random() * .5;
            var randomShape = this.smallShapeArr[Math.floor(Math.random() * this.shapeArr.length)];
            var stroke = this.getRandomRgb();
            this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
            var blackStroke = this.utilities.randomlyChooseTrueOrFalse();
            if (blackStroke) {
                this.ctx.strokeStyle = 'black';
            }
            this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
            // Safari feature detection
            // if (!this.isSafari) {
            // this.ctx.globalAlpha = 1;
            // this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
            // const rand = Math.floor(Math.random() * 2) + 1;
            // if (rand === 1) {
            // this.ctx.globalAlpha = this.randomShapeOpacity;
            // }
            // } else {
            // this.ctx.globalAlpha = this.randomShapeOpacity;
            // }
            this.ctx.fillStyle = this.randomColor;
            this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
            this.ctx.lineWidth = Math.random() * 10;
            this.drawShape(randomShape, true);
            this.layerCounter++;
        }
    };
    GeneratorComponent.prototype.getFirstSmallLayer = function () {
        while (this.layerCounter <= 25) {
            this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
            this.randomStrokeOpacity = Math.random();
            this.randomShapeOpacity = Math.random();
            var randomShape = this.smallShapeArr[Math.floor(Math.random() * this.shapeArr.length)];
            var stroke = this.getRandomRgb();
            if (this.randomScheme === 'Complementary') {
                var complStroke = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
                this.ctx.strokeStyle = complStroke.substring(0, complStroke.length - 1) + ',' + this.randomStrokeOpacity + ")";
            }
            else if (this.randomScheme !== 'Monochromatic') {
                this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
            }
            else {
                this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
            }
            var rand = this.utilities.randomlyChooseOneOrTwo();
            if (rand === 1) {
                this.ctx.strokeStyle = 'black';
            }
            if (!this.isSafari) {
                this.ctx.globalAlpha = 1;
                this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
                rand = Math.floor(Math.random() * 2) + 1;
                if (rand === 1) {
                    this.ctx.globalAlpha = this.randomShapeOpacity;
                }
            }
            else {
                this.ctx.globalAlpha = this.randomShapeOpacity;
            }
            this.ctx.fillStyle = this.randomColor;
            this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
            this.ctx.lineWidth = Math.random() * 10;
            this.drawShape(randomShape, true);
            this.layerCounter++;
        }
    };
    GeneratorComponent.prototype.resetForNewLayer = function () {
        this.layerCounter = 0;
        this.ctx.globalAlpha = 1;
        this.aggrObjArea = 0;
        this.shapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
    };
    GeneratorComponent.prototype.getMainLayer = function (objNum, norm, rand, trapTrans) {
        this.shapeArr = ['Rectangle', 'Triangle', 'Line'];
        if (this.genType !== 'random') {
            this.patternFill = false;
        }
        else {
            this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
            if (this.patternFill === false) {
                this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
            }
        }
        if (this.genType === 'all') {
            this.patternFill = true;
        }
        norm = false;
        if (!norm) {
            objNum = Math.floor(Math.random() * 1) + 5;
            this.shapeArr = ['Trapezoid', 'Line'];
            if (this.singleLayer) {
                this.isTrunks = this.utilities.randomlyChooseTrueOrFalse();
                if (this.isTrunks) {
                    this.isArabesque = false;
                    this.isFrieze = false;
                    this.isFriezeTwo = false;
                    this.patternFill = true;
                    this.isMexico = this.utilities.randomlyChooseTrueOrFalse();
                    if (this.isMexico) {
                        this.isTrunks = false;
                    }
                }
                else {
                    this.patternFill = false;
                }
            }
        }
        while (this.layerCounter < objNum) {
            this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
            this.randomShapeOpacity = Math.random();
            if (this.randomShapeOpacity < 0) {
                this.randomShapeOpacity = 0;
            }
            if (this.layerCounter === (objNum - 1) || this.layerCounter === (objNum)) {
                this.randomShapeOpacity = 0;
                this.patternFill = false;
            }
            if (this.layerCounter === (objNum - 2)) {
                this.randomShapeOpacity = .1;
            }
            var randomShape = this.shapeArr[Math.floor(Math.random() * this.shapeArr.length)];
            var stroke = this.getRandomRgb();
            this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';
            rand = Math.floor(Math.random() * 2) + 1;
            if (rand === 1) {
                this.ctx.strokeStyle = 'black';
            }
            this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
            this.ctx.fillStyle = this.randomColor;
            // default is middle
            var newLineWidth = Math.random() * 5 + 1;
            if (this.layerCounter < (objNum / 4) || (this.layerCounter > (objNum * .5) && this.layerCounter < (objNum * .6))) {
                newLineWidth = Math.random() * 20 + 16;
            }
            this.ctx.lineWidth = newLineWidth;
            this.drawShape(randomShape, false, true);
            this.layerCounter++;
        }
    };
    GeneratorComponent.prototype.drawShape = function (shape, small, main) {
        var offset_x = 0;
        var offset_y = 0;
        var isOffset = false;
        var isOffset = this.utilities.randomlyChooseTrueOrFalse();
        var xPos = Math.random() * this.canvasSize;
        var yPos = Math.random() * this.canvasSize;
        var height = Math.random() * this.canvasSize;
        var width = Math.random() * this.canvasSize;
        var currObjArea = height * width;
        this.patternSwitch = Math.floor(Math.random() * 8) + 1;
        rand = this.utilities.randomlyChooseOneOrTwo();
        if (this.genType === "noPattern" && main) {
            this.patternFill = true;
        }
        if (this.patternFill && this.imagesActive) {
            if (this.patternSwitch === 1) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternThree, 'repeat');
                isOffset = true;
                offset_x = this.patternOffset;
                offset_y = this.patternOffset;
            }
            else if (this.patternSwitch === 2) {
                if (rand === 1) {
                    this.ctx.fillStyle = this.ctx.createPattern(this.patternTwo, 'repeat');
                }
                else if (rand === 2) {
                    this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, 'no-repeat');
                }
            }
            else if (this.patternSwitch === 3) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternSix, 'repeat');
                isOffset = true;
                offset_x = this.patternOffset;
                offset_y = this.patternOffset;
            }
            else if (this.patternSwitch === 4) {
                if (rand === 1) {
                    this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, 'no-repeat');
                }
                else if (rand === 2) {
                    this.ctx.fillStyle = this.ctx.createPattern(this.patternSix, 'repeat');
                    isOffset = true;
                    offset_x = this.patternOffset;
                    offset_y = this.patternOffset;
                }
            }
            else if (this.patternSwitch === 5) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternTwo, 'repeat');
            }
            else if (this.patternSwitch === 6) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternOne, 'repeat');
            }
            else if (this.patternSwitch === 7) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternFive, 'repeat');
                isOffset = true;
                offset_x = this.patternOffset;
                offset_y = this.patternOffset;
            }
            else {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, 'no-repeat');
            }
            if (this.isFrieze && main) {
                offset_x = this.patternOffset;
                offset_y = this.patternOffset;
                isOffset = true;
                this.ctx.fillStyle = this.ctx.createPattern(this.patternThree, 'repeat');
            }
            if (this.isFriezeTwo && main) {
                offset_x = this.patternOffset;
                offset_y = this.patternOffset;
                isOffset = true;
                this.ctx.fillStyle = this.ctx.createPattern(this.patternFive, 'repeat');
            }
            if (this.isTrunks && main) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternSix, 'repeat');
                isOffset = true;
                offset_x = this.patternOffset;
                offset_y = this.patternOffset;
            }
            if (this.isArabesque && main) {
                offset_x = this.patternOffset;
                offset_y = this.patternOffset;
                isOffset = false;
                this.ctx.fillStyle = this.ctx.createPattern(this.patternOne, 'repeat');
            }
            if (this.isMexico && main) {
                // if(rand === 1) {
                offset_x = 0;
                offset_y = 0;
                isOffset = false;
                this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, 'no-repeat');
            }
            if (this.isBedroom && main) {
                // if(rand === 1) {
                offset_x = 0;
                offset_y = 0;
                isOffset = false;
                this.ctx.fillStyle = this.ctx.createPattern(this.patternBedroom, 'repeat');
            }
            if (isOffset) {
                this.ctx.translate(offset_x, offset_y);
            }
        }
        rand = Math.floor(Math.random() * 100) + 1;
        if (small || (this.aggrObjArea + currObjArea + 250) >= (Math.pow(this.canvasSize, 2))) {
            height = Math.random() * this.canvasSize / 25;
            width = Math.random() * this.canvasSize / 25;
            currObjArea = height * width;
        }
        switch (shape) {
            case 'Rectangle':
                this.ctx.fillRect(xPos, yPos, width, height);
                this.ctx.strokeRect(xPos, yPos, width, height);
                break;
            case 'Trapezoid':
                this.ctx.beginPath();
                var rand1 = Math.random() * this.canvasSize;
                var y1 = Math.random() * this.canvasSize;
                //first point
                this.ctx.moveTo(rand1, y1);
                var rand2 = Math.random() * this.canvasSize;
                //second point completes first side
                var y2 = Math.random() * this.canvasSize;
                this.ctx.lineTo(rand2, y2);
                var rand3 = Math.random() * this.canvasSize;
                var y3 = Math.random() * this.canvasSize;
                // third point completes second side
                this.ctx.lineTo(rand3, y3);
                // fourth point -- cannot cross first line
                //logic here such 
                var heightLow = Math.max(y1, y3);
                var heightHigh = Math.min(y1, y3);
                var leftMost = Math.min(rand1, rand3);
                var rightMost = Math.max(rand1, rand3);
                var addToLeftMost = Math.random() * (rightMost - leftMost);
                var rand4 = leftMost + addToLeftMost;
                var y4 = heightLow - (Math.random() * (heightLow - heightHigh));
                if (rand1 === leftMost && y1 === heightHigh && rand4 < rand2) {
                    y4 = y1 + Math.random() * this.canvasSize;
                }
                this.ctx.lineTo(rand4, y4);
                this.ctx.fill();
                this.ctx.lineTo(rand1, y1);
                this.ctx.stroke();
                currObjArea = this.calcPolygonArea([{ x: rand1, y: y1 }, { x: rand2, y: rand1 }, { x: rand3, y: rand2 }, { x: rand4, y: y2 }]);
                break;
            case 'Triangle':
                this.ctx.beginPath();
                rand1 = xPos;
                rand2 = yPos;
                var ty1 = Math.random() * this.canvasSize;
                var ty2 = Math.random() * this.canvasSize;
                this.ctx.moveTo(rand1, ty1);
                this.ctx.lineTo(rand2, rand1);
                this.ctx.lineTo(rand2, ty2);
                this.ctx.stroke();
                this.ctx.lineTo(rand1, ty1);
                this.ctx.fill();
                currObjArea = this.calcPolygonArea([{ x: rand1, y: ty1 }, { x: rand2, y: rand1 }, { x: rand2, y: ty2 }]);
                break;
            case 'Line':
                rand1 = Math.random() * this.canvasSize;
                var rand = Math.floor(Math.random() * 2) + 1;
                if (rand === 1) {
                    rand2 = rand1 + 15;
                }
                else {
                    rand2 = rand1 - 15;
                }
                var ly1 = Math.random() * this.canvasSize;
                var ly2 = Math.random() * this.canvasSize;
                this.ctx.moveTo(rand1, ly1);
                this.ctx.lineTo(rand2, rand1);
                this.ctx.lineTo(rand2, ly2);
                this.ctx.stroke();
                // pythagorean theorem
                currObjArea = this.ctx.lineWidth * (this.getDistance(rand1, ly1, rand2, rand1) + this.getDistance(rand2, rand1, rand2, ly2));
                break;
            case 'Circle':
                var radius = width / 2;
                this.ctx.beginPath();
                this.ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI, false);
                this.ctx.fill();
                this.ctx.stroke();
                currObjArea = Math.PI * Math.pow(radius, 2);
                // get better with calculating for circles
                break;
        }
        if (this.patternFill) {
            if (isOffset) {
                this.ctx.translate(-offset_x, -offset_y);
            }
        }
        this.aggrObjArea += currObjArea;
    };
    GeneratorComponent.prototype.renderImage = function (index) {
        if (index !== undefined) {
            this.currImageIndex = index;
        }
        var img = new Image();
        if (this.savedImageArr[this.currImageIndex]) {
            img.src = this.savedImageArr[this.currImageIndex].src;
        }
        else {
            img.src = this.canvas.toDataURL();
        }
        img.onload = function () {
            this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
            this.drawImageScaled(img, this.ctxTwo);
            this.renderDone = true;
            this.renderDoneEmit.emit(true);
            this.loader.nativeElement.style.visibility = "hidden";
        }.bind(this);
    };
    GeneratorComponent.prototype.drawImageScaled = function (img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        console.log('canvas width', canvas.width);
        console.log('canvas height', canvas.height);
        var ratio = Math.min(hRatio, vRatio);
        console.log('ratio width', img.width * ratio);
        console.log('ratio height', img.height * ratio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    };
    GeneratorComponent.prototype.saveCurrentArt = function (isNew, source) {
        var newSource = this.canvas.toDataURL();
        if (source) {
            newSource = source;
        }
        var imgObj = {
            'name': this.savedImageArr.length + 'index',
            'src': newSource, 'favorite': false
        };
        var res = true;
        isNew = true;
        if (isNew) {
            this.savedImageArr.push(imgObj);
        }
        else {
            this.savedImageArr[this.currImageIndex] = imgObj;
        }
        this.currImageIndex = this.savedImageArr.length - 1;
        this.saveImageFirebase.emit(imgObj);
        this.loader.nativeElement.style.visibility = "hidden";
        this.renderDone = true;
        this.renderDoneEmit.emit(true);
        this.renderImage();
    };
    GeneratorComponent.prototype.setCustomImages = function () {
        for (var _i = 0, _a = this.customImages; _i < _a.length; _i++) {
            var img = _a[_i];
            var fileName = img.name;
            var fileUrl = img.src;
            if (fileName === 'uploadCustom1') {
                this.patternOne.src = fileUrl;
                this.patternOne.crossOrigin = "Anonymous";
                this.patternOne.onload = function () {
                    var pattern = this.ctx.createPattern(this.patternOne, 'repeat');
                    this.ctx.fillStyle = pattern;
                    this.customImages[0].ready = true;
                }.bind(this);
            }
            if (fileName === 'uploadCustom2') {
                this.patternTwo.src = fileUrl;
                this.patternTwo.onload = function () {
                    var pattern = this.ctx.createPattern(this.patternTwo, 'repeat');
                    this.ctx.fillStyle = pattern;
                    this.customImages[1].ready = true;
                }.bind(this);
            }
            if (fileName === 'uploadCustom3') {
                this.patternThree.src = fileUrl;
                this.patternThree.onload = function () {
                    var pattern = this.ctx.createPattern(this.patternThree, 'repeat');
                    this.ctx.fillStyle = pattern;
                    this.customImages[2].ready = true;
                }.bind(this);
            }
            if (fileName === 'uploadCustom4') {
                this.patternFour.src = fileUrl;
                this.patternFour.onload = function () {
                    var pattern = this.ctx.createPattern(this.patternFour, 'repeat');
                    this.ctx.fillStyle = pattern;
                    this.customImages[3].ready = true;
                }.bind(this);
            }
            if (fileName === 'uploadCustom5') {
                this.patternFive.src = fileUrl;
                this.patternFive.onload = function () {
                    var pattern = this.ctx.createPattern(this.patternFive, 'repeat');
                    this.ctx.fillStyle = pattern;
                    this.customImages[4].ready = true;
                }.bind(this);
            }
            if (fileName === 'uploadCustom6') {
                this.patternSix.src = fileUrl;
                this.patternSix.onload = function () {
                    var pattern = this.ctx.createPattern(this.patternSix, 'repeat');
                    this.ctx.fillStyle = pattern;
                    this.customImages[5].ready = true;
                }.bind(this);
            }
        }
        // this.ready = true;
    };
    // helpers
    GeneratorComponent.prototype.getDistance = function (x1, y1, x2, y2) {
        var xs = x2 - x1, ys = y2 - y1;
        xs *= xs;
        ys *= ys;
        return Math.sqrt(xs + ys);
    };
    GeneratorComponent.prototype.calcPolygonArea = function (vertices) {
        var total = 0;
        for (var i = 0, l = vertices.length; i < l; i++) {
            var addX = vertices[i].x;
            var addY = vertices[i == vertices.length - 1 ? 0 : i + 1].y;
            var subX = vertices[i == vertices.length - 1 ? 0 : i + 1].x;
            var subY = vertices[i].y;
            total += (addX * addY * 0.5);
            total -= (subX * subY * 0.5);
        }
        return Math.abs(total);
    };
    //BBOOK WUZ HERE
    GeneratorComponent.prototype.getRandomColorArr = function () {
        var counter = 0;
        var colorArr = [];
        while (counter <= this.objNum + 1) {
            var tempRgb = this.getRandomRgb();
            var tempRgbString = 'rgb(' + tempRgb.r + ',' + tempRgb.g + ',' + tempRgb.b + ')';
            colorArr.push(tempRgbString);
            counter++;
        }
        return colorArr;
    };
    GeneratorComponent.prototype.getRandomRgb = function () {
        var num = Math.round(0xffffff * Math.random());
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        return { 'r': r, 'g': g, 'b': b };
    };
    __decorate([
        core_1.ViewChild('loaderCanvas'),
        __metadata("design:type", Object)
    ], GeneratorComponent.prototype, "loader", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], GeneratorComponent.prototype, "saveImageFirebase", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], GeneratorComponent.prototype, "renderDoneEmit", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GeneratorComponent.prototype, "savedImageArr", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GeneratorComponent.prototype, "customImages", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], GeneratorComponent.prototype, "imagesActive", void 0);
    GeneratorComponent = __decorate([
        core_1.Component({
            selector: 'generator',
            templateUrl: './generator.component.html',
            styleUrls: ['./generator.component.css'],
            providers: [utilities_1.Utilities]
        }),
        __metadata("design:paramtypes", [utilities_1.Utilities])
    ], GeneratorComponent);
    return GeneratorComponent;
}());
exports.GeneratorComponent = GeneratorComponent;
//# sourceMappingURL=backupoldgenerator.js.map