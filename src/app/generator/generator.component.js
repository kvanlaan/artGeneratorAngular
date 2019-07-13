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
var http_1 = require("@angular/common/http");
var firebase = require("firebase");
var GeneratorComponent = /** @class */ (function () {
    function GeneratorComponent(http, utilities) {
        this.http = http;
        this.utilities = utilities;
        this.saveImageFirebase = new core_1.EventEmitter();
        this.renderDoneEmit = new core_1.EventEmitter();
        this.savedImageArr = [];
        this.favoritesArr = [];
        this.customImagesActive = false;
        this.updateCurrentIndex = new core_1.EventEmitter();
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
        this.patternDatabaseList = [];
        this.darkDatabaseList = [];
        this.beginPath = false;
        // feature detection
        this.isSafari = false;
        this.startingRecurseStep = 0;
        this.customImagesLoaded = [];
        this.initialImages = [{ 'name': 'uploadCustom1', 'crossOrigin': "Anonymous", 'src': 'assets/arabesque_pattern.jpg', 'ready': true, 'fileTooBig': false },
            { 'name': 'uploadCustom2', 'crossOrigin': "Anonymous", 'src': 'assets/kosovo_map.jpg', 'ready': true, 'fileTooBig': false },
            { 'name': 'uploadCustom3', 'crossOrigin': "Anonymous", 'src': 'assets/frieze.jpg', 'ready': true, 'fileTooBig': false },
            { 'name': 'uploadCustom4', 'crossOrigin': "Anonymous", 'src': 'assets/mexico_flag.jpg', 'ready': true, 'fileTooBig': false },
            { 'name': 'uploadCustom5', 'crossOrigin': "Anonymous", 'src': 'assets/van.jpg', 'ready': true, 'fileTooBig': false },
            { 'name': 'uploadCustom6', 'crossOrigin': "Anonymous", 'src': 'assets/trunks.png', 'ready': true, 'fileTooBig': false }
        ];
        this.offset_x = 0;
        this.offset_y = 0;
        this.fullCanvasSize = 0;
        this.largeRecurseStep = false;
        this.forceBeginPath = false;
        this.patternFillSingleBegun = false;
        this.transform = false;
        this.repeat = 'repeat';
        this.utilities = utilities;
    }
    GeneratorComponent.prototype.ngOnInit = function () {
        // this.ready = false;
        this.renderDone = false;
        this.initiatePatterns();
        this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        this.calculateCanvasSize();
        this.getDarkPatterns();
    };
    GeneratorComponent.prototype.getDarkPatterns = function () {
        var _this = this;
        var storageRef = firebase.storage().ref();
        if (this.darkDatabaseList.length === 0 || this.patternDatabaseList.length === 0) {
            return new Promise(function (resolve) {
                if (!_this.artImagesSubscription) { }
                _this.artImagesSubscription = _this.http.get(window.location.origin + '/artImages').subscribe(function (res) {
                    res.forEach(function (item) {
                        if (item["metadata"]["name"].indexOf('dark') > -1) {
                            storageRef.child(item["metadata"]["name"]).getDownloadURL().then(function (url) {
                                var darkImage = new Image();
                                darkImage.crossOrigin = "Anonymous";
                                darkImage.src = url;
                                this.darkDatabaseList.push(darkImage);
                            }.bind(this));
                        }
                        else {
                            storageRef.child(item["metadata"]["name"]).getDownloadURL().then(function (url) {
                                var darkImage = new Image();
                                darkImage.crossOrigin = "Anonymous";
                                darkImage.src = url;
                                this.patternDatabaseList.push(darkImage);
                            }.bind(this));
                        }
                    }.bind(this));
                    resolve();
                }.bind(_this));
            });
        }
        return;
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
        this.patternOne.src = this.initialImages[0].src;
        this.patternOne.crossOrigin = "Anonymous";
        this.patternOne.onload = function () {
            var pattern = this.ctx.createPattern(this.patternOne, this.repeat);
            this.ctx.fillStyle = pattern;
            // this.customImages[0].ready = true;
            // this.customImagesLoaded.push(this.patternOne);
            this.patternTwo.src = this.initialImages[1].src;
            this.patternTwo.onload = function () {
                var pattern = this.ctx.createPattern(this.patternTwo, this.repeat);
                this.ctx.fillStyle = pattern;
                // this.customImages[1].ready = true;
                // this.customImagesLoaded.push(this.patternTwo);
                this.patternThree.src = this.initialImages[2].src;
                this.patternThree.onload = function () {
                    var pattern = this.ctx.createPattern(this.patternThree, this.repeat);
                    this.ctx.fillStyle = pattern;
                    // this.customImages[2].ready = true;
                    // this.customImagesLoaded.push(this.patternThree);
                    this.patternFour.src = this.initialImages[3].src;
                    this.patternFour.onload = function () {
                        var pattern = this.ctx.createPattern(this.patternFour, this.repeat);
                        this.ctx.fillStyle = pattern;
                        // this.customImages[3].ready = true;
                        // this.customImagesLoaded.push(this.patternFour);
                        this.patternFive.src = this.initialImages[4].src;
                        this.patternFive.onload = function () {
                            var pattern = this.ctx.createPattern(this.patternFive, this.repeat);
                            this.ctx.fillStyle = pattern;
                            // this.customImages[4].ready = true;
                            // this.customImagesLoaded.push(this.patternFive);
                            this.patternSix.src = this.initialImages[5].src;
                            this.patternSix.onload = function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var pattern;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                pattern = this.ctx.createPattern(this.patternSix, this.repeat);
                                                this.ctx.fillStyle = pattern;
                                                // this.customImages[5].ready = true;
                                                // this.customImagesLoaded.push(this.patternSix);
                                                return [4 /*yield*/, this.getRandomArt(true)];
                                            case 1:
                                                // this.customImages[5].ready = true;
                                                // this.customImagesLoaded.push(this.patternSix);
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            }.bind(this);
                        }.bind(this);
                    }.bind(this);
                }.bind(this);
            }.bind(this);
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
        console.log('context height before scale', this.ctx.canvas.height);
        this.ctx.scale(.6, .6);
        console.log('context height after scale', this.ctx.canvas.height);
        console.log('canvas size after scale', this.canvasSize);
        this.ctxTwo.scale(.6, .6);
        this.restoreScale = 1.667;
        this.fullCanvasSize = this.ctx.canvas.width * this.restoreScale;
        console.log('full canva sizee', this.fullCanvasSize);
    };
    GeneratorComponent.prototype.getRandomArt = function (clear, recurseStep) {
        return __awaiter(this, void 0, void 0, function () {
            var recurse, solidSwitch, maxDarkIndex, one, two, three, four, five, darkOne, darkThree, darkFour, darkFive, maxDarkIndex, one, two, three, four, five, darkOne, darkThree, darkFour, darkFive, solidSwitch, img;
            return __generator(this, function (_a) {
                this.colorArr = this.getRandomColorArr();
                // hide favorites because we're about to switch to savedimagearr
                // hiding stuff since a new image is being drawn]
                this.loader.nativeElement.style.visibility = "visible";
                this.singleLayer = false;
                recurse = false;
                this.objNum = Math.floor(Math.random() * 23) + 10;
                this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
                this.isTrunks = false;
                this.isArabesque = false;
                this.isMexico = false;
                this.isFrieze = false;
                this.isBedroom = false;
                this.isFriezeTwo = false;
                if (this.customImagesActive) {
                    this.patternOne = this.customImagesLoaded[0];
                    this.patternTwo = this.customImagesLoaded[1];
                    this.patternThree = this.customImagesLoaded[2];
                    this.patternFour = this.customImagesLoaded[3];
                    this.patternFive = this.customImagesLoaded[4];
                    this.patternSix = this.customImagesLoaded[5];
                }
                if (recurseStep === undefined) {
                    this.offset_x = Math.floor(Math.random() * this.canvasSize / 2.5) - this.canvasSize / 2.5;
                    this.offset_y = Math.floor(Math.random() * this.canvasSize / 2.5) - this.canvasSize / 2.5;
                    //  this.ctx.translate(this.offset_x, this.offset_y);
                    this.genType = this.genTypeArr[Math.floor(Math.random() * this.genTypeArr.length)];
                    this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
                    // if no recurse, this means t his is a new piece, not just a layer, so clear and calculate recurse chance
                    this.ctx.clearRect(0, 0, this.fullCanvasSize, this.fullCanvasSize);
                    this.ctx.fillStyle = 'white';
                    this.ctx.fillRect(0, 0, this.fullCanvasSize, this.fullCanvasSize);
                    recurse = this.utilities.randomlyChooseTrueOrFalse();
                    this.singleLayer = true;
                    if (!recurse) {
                        // this.ctx.save();
                        this.singleLayer = true;
                        this.forceTrapezoidBeginPath = this.utilities.randomlyChooseTrueOrFalse();
                        // this.ctx.scale(1.2, 1.2);
                        // this.ctxTwo.scale(1.2, 1.2);
                        // this.restoreScale = 1.282;
                        // this.fullCanvasSize = this.ctx.canvas.width * this.restoreScale;
                        console.log('full canvas size', this.fullCanvasSize);
                        this.ctx.clearRect(0, 0, this.fullCanvasSize, this.fullCanvasSize);
                        this.ctx.fillStyle = 'white';
                        this.ctx.fillRect(0, 0, this.fullCanvasSize, this.fullCanvasSize);
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
                            solidSwitch = Math.floor(Math.random() * 7) + 1;
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
                        this.beginPath = false;
                        maxDarkIndex = this.darkDatabaseList.length - 1;
                        one = Math.floor(Math.random() * maxDarkIndex);
                        two = Math.floor(Math.random() * maxDarkIndex);
                        three = Math.floor(Math.random() * maxDarkIndex);
                        four = Math.floor(Math.random() * maxDarkIndex);
                        five = Math.floor(Math.random() * maxDarkIndex);
                        if (!this.customImagesActive && this.darkDatabaseList.length >= 6) {
                            darkOne = this.darkDatabaseList[one];
                            this.patternSix = darkOne;
                            darkThree = this.darkDatabaseList[three];
                            this.patternThree = darkThree;
                            darkFour = this.darkDatabaseList[four];
                            this.patternFour = darkFour;
                            darkFive = this.darkDatabaseList[five];
                            this.getRandomArtAlg(clear, recurse, recurseStep);
                        }
                        else {
                            this.getRandomArtAlg(clear, recurse, recurseStep);
                        }
                    }
                }
                else {
                    // if recurseStep is defined then we know
                    recurse = true;
                }
                if (recurse) {
                    if (!this.customImagesActive && !this.utilities.randomlyChooseTrueOrFalseThirdReal()) {
                        maxDarkIndex = this.patternDatabaseList.length - 1;
                        one = Math.floor(Math.random() * maxDarkIndex);
                        two = Math.floor(Math.random() * maxDarkIndex);
                        three = Math.floor(Math.random() * maxDarkIndex);
                        four = Math.floor(Math.random() * maxDarkIndex);
                        five = Math.floor(Math.random() * maxDarkIndex);
                        if (this.patternDatabaseList.length >= 6) {
                            darkOne = this.patternDatabaseList[one];
                            this.patternSix = darkOne;
                            darkThree = this.patternDatabaseList[three];
                            this.patternThree = darkThree;
                            darkFour = this.patternDatabaseList[four];
                            this.patternFour = darkFour;
                            darkFive = this.patternDatabaseList[five];
                            this.patternFive = darkFive;
                        }
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
                        solidSwitch = Math.floor(Math.random() * 7) + 1;
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
                    // because it's fast - we only care about making the load if it's new AND layers
                    if (recurse && recurseStep === undefined) {
                        recurseStep = Math.floor(Math.random() * 9) + 4;
                        this.startingRecurseStep = recurseStep;
                        if (recurseStep > 18) {
                            this.largeRecurseStep = true;
                        }
                        else {
                            this.largeRecurseStep = false;
                        }
                        img = new Image();
                        img.src = this.canvas.toDataURL();
                        img.onload = function () {
                            this.ctx.drawImage(img, 0, 0, this.fullCanvasSize, this.fullCanvasSize, 0, 0, this.fullCanvasSize, this.fullCanvasSize);
                            this.getRandomArtAlg(clear, recurse, recurseStep);
                        }.bind(this);
                        // this.ctx.translate(-this.offset_x, -this.offset_y);
                        // console.log('offset end', this.offset_x);
                        // console.log('offset', this.offset_y);
                    }
                    else {
                        this.getRandomArtAlg(clear, recurse, recurseStep);
                    }
                }
                else {
                    // }
                    // this.ctx.translate(-this.offset_x, -this.offset_y);
                    // console.log('offset end', this.offset_x);
                    // console.log('offset', this.offset_y);
                }
                return [2 /*return*/];
            });
        });
    };
    GeneratorComponent.prototype.getRandomArtAlg = function (clear, recurse, recurseStep) {
        this.patternFillSingleBegun = false;
        this.beginPath = this.utilities.randomlyChooseTrueOrFalse();
        this.randomScheme = "Random";
        var rand = 1;
        this.patternOffset = 0;
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
        norm = true;
        var trapTrans = 2;
        if (rand === 2) {
            trapTrans = this.utilities.randomlyChooseOneOrTwo();
        }
        trapTrans = 1;
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
                //this.ctx.globalAlpha = (Math.random() * .4);
                this.ctx.globalAlpha = .4 - (layerNum / this.layerCounter * .01);
                this.ctx.fillStyle = this.randomColor;
                this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
                this.ctx.lineWidth = Math.random() * 10;
                if (this.singleLayer) {
                    this.ctx.lineWidth = Math.random() * 3.2;
                    var rand_1 = this.utilities.randomlyChooseTrueOrFalse();
                    if (rand_1) {
                        if (this.forceTrapezoidBeginPath) {
                            this.ctx.lineWidth = Math.random() * 10;
                        }
                        else {
                            this.ctx.lineWidth = Math.random() * 7;
                        }
                    }
                    //   console.log('TRAP');
                    // console.log('norm', norm);
                    // console.log('traptrans', trapTrans);
                    // console.log('shape opacity', this.randomShapeOpacity);
                    // console.log('random shape ocaicty', this.randomStrokeOpacity);
                }
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
        if (this.singleLayer) {
            // this.getFirstSmallLayer(true);
            this.getSecondSmallLayer(norm);
        }
        else {
            this.getSecondSmallLayer(norm);
        }
        this.resetForNewLayer();
        // if(!this.beginPath) {
        // this.beginPath = true;
        // this.getSecondSmallLayer(norm);
        // this.resetForNewLayer();
        // }
        // if (this.singleLayer && ((this.genType === "noPattern" || this.genType === "random"))) {
        //   this.forceBeginPath = true;
        //   this.getSecondSmallLayer(true);
        //   this.resetForNewLayer();
        //   this.forceBeginPath = false;
        // }
        if (this.singleLayer) {
            this.forceBeginPath = true;
            this.getFirstSmallLayer(true);
            this.resetForNewLayer();
            this.forceBeginPath = false;
        }
        this.ctx.globalAlpha = 1;
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
        // norm = true;
        if (norm) {
            count = 45;
        }
        if (this.singleLayer) {
            count = 75;
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
            if (this.singleLayer) {
                this.ctx.lineWidth = Math.random() * 3.2;
                var rand = this.utilities.randomlyChooseTrueOrFalse();
                if (rand) {
                    if (this.forceTrapezoidBeginPath) {
                        this.ctx.lineWidth = Math.random() * 10;
                    }
                    else {
                        this.ctx.lineWidth = Math.random() * 7;
                    }
                }
                // console.log('shape opacity', this.randomShapeOpacity);
                // console.log('random shape ocaicty', this.randomStrokeOpacity);
                // console.log('linewidth', this.ctx.lineWidth);
                // console.log('strokestyle', this.ctx.strokeStyle);
                // console.log('DONE');
            }
            this.drawShape(randomShape, true);
            this.layerCounter++;
        }
    };
    GeneratorComponent.prototype.getFirstSmallLayer = function (smallCount) {
        var smallCounter = 25;
        if (this.singleLayer) {
            smallCounter = 100;
            if (smallCount) {
                smallCounter = 65;
                if (this.forceBeginPath) {
                    smallCounter = 45;
                }
            }
        }
        while (this.layerCounter <= smallCounter) {
            this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
            this.randomStrokeOpacity = Math.random();
            this.randomShapeOpacity = Math.random();
            var rand = this.utilities.randomlyChooseOneOrTwo();
            if (rand === 1) {
                // this.ctx.strokeStyle = 'black';
            }
            rand = Math.floor(Math.random() * 2) + 1;
            if (rand === 1 && smallCount && this.layerCounter === smallCounter) {
                // if(this.randomShapeOpacity < .5) {
                //   this.randomShapeOpacity = .6;
                // }
                // this.randomShapeOpacity = 0;
                // this.randomShapeOpacity = Math.random() + .5
            }
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
            // if (!this.isSafari) {
            this.ctx.globalAlpha = 1;
            this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
            // if(!smallCount) {
            // if(!smallCount || (smallCount && this.layerCounter > 2 && !this.forceBeginPath)) {
            // if(!smallCount || (smallCount && !this.forceBeginPath)) {
            // if(!this.forceBeginPath) {
            // if (!this.forceBeginPath && smallCount && smallCounter >= 1) {
            //   rand = 2
            // }
            if (smallCount && !this.forceBeginPath && smallCounter < 2) {
                // rand = 2;
            }
            // || (!smallCount && this.singleLayer)
            if (rand === 1) {
                this.ctx.globalAlpha = this.randomShapeOpacity;
                if (smallCount && this.layerCounter === smallCounter) {
                    console.log('LAST IS GLOBAL ALPHA', this.ctx.globalAlpha);
                }
            }
            else {
                // if (smallCount && !this.forceBeginPath) {
                //   this.randomShapeOpacity = Math.random() * .5;
                //   this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
                // }
            }
            // }
            // }
            // } 
            // else {
            //   this.ctx.globalAlpha = this.randomShapeOpacity;
            // }
            this.ctx.fillStyle = this.randomColor;
            this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
            // if (rand !== 1 && smallCount && !this.forceBeginPath && (!this.patternFill || smallCounter < 20)) {
            if (rand !== 1 && smallCount && !this.forceBeginPath && !this.patternFill) {
                this.randomShapeOpacity = Math.random() * .5;
                this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
                this.ctx.fillStyle = this.randomColor;
            }
            this.ctx.lineWidth = Math.random() * 10;
            if (this.singleLayer) {
                this.ctx.lineWidth = Math.random() * 3.2;
                var rand_2 = this.utilities.randomlyChooseTrueOrFalse();
                if (rand_2) {
                    if (this.forceTrapezoidBeginPath) {
                        this.ctx.lineWidth = Math.random() * 10;
                    }
                    else {
                        this.ctx.lineWidth = Math.random() * 7;
                    }
                }
            }
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
        norm = false;
        if (!norm) {
            objNum = Math.floor(Math.random() * 1) + 5;
            this.shapeArr = ['Trapezoid', 'Line'];
            if (this.singleLayer) {
                objNum = 6;
                // this.beginPath = false;
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
            if (this.singleLayer) {
                this.ctx.globalAlpha = this.layerCounter / objNum + .1;
            }
            else {
                this.ctx.globalAlpha = 1;
            }
            var randomShape = this.shapeArr[Math.floor(Math.random() * this.shapeArr.length)];
            // if (this.singleLayer && randomShape !== 'Line') {
            //   var randomShape = this.shapeArr[Math.floor(Math.random() * this.shapeArr.length)];
            // }
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
            if (this.singleLayer) {
                this.patternFill = true;
                this.ctx.lineWidth = Math.random() * 3.2;
                var rand_3 = this.utilities.randomlyChooseTrueOrFalse();
                if (rand_3) {
                    this.ctx.lineWidth = Math.random() * 10;
                }
                // console.log('norm', norm);
                // console.log('traptrans', trapTrans);
                // console.log('shape opacity', this.randomShapeOpacity);
                // console.log('random shape ocaicty', this.randomStrokeOpacity);
                // console.log('linewidth', this.ctx.lineWidth);
                // console.log('strokestyle', this.ctx.strokeStyle);
            }
            this.drawShape(randomShape, false, true);
            this.layerCounter++;
        }
    };
    GeneratorComponent.prototype.drawShape = function (shape, small, main) {
        this.repeat = this.utilities.randomlyChooseTrueOrFalse() ? 'no-repeat' : 'repeat';
        var offset_x = 0;
        var offset_y = 0;
        var xPos = (Math.random() * this.canvasSize) + (this.fullCanvasSize - (this.canvasSize * 1.5)) / 2;
        var yPos = (Math.random() * this.canvasSize) + (this.fullCanvasSize - (this.canvasSize * 1.5)) / 2;
        var height = (Math.random() * this.canvasSize) / 2;
        var width = (Math.random() * this.canvasSize) / 2;
        var currObjArea = height * width;
        this.patternSwitch = Math.floor(Math.random() * 8) + 1;
        rand = this.utilities.randomlyChooseOneOrTwo();
        if (this.genType === "noPattern" && main) {
            this.patternFill = true;
        }
        // if (this.largeRecurseStep) {
        //   this.patternFill = false;
        // }
        // if(!this.singleLayer && main && !this.utilities.randomlyChooseTrueOrFalse()) {
        //   this.transform = true;
        //   //  this.ctx.save();
        //   if(this.utilities.randomlyChooseTrueOrFalse) {
        // // this.ctx.setTransform(1, .6, .2, 1, 0, 0);
        //   } else {
        //     // this.ctx.setTransform(1, .2, .6, 1, 0, 0);
        //   }
        // } else {
        //   this.transform = false;
        // }
        if (this.patternFill) {
            // this.ctx.translate(this.offset_x, this.offset_y);
            if (!this.patternFillSingleBegun && (this.isFrieze || this.isFriezeTwo || this.isTrunks || this.isArabesque || this.isMexico || this.isBedroom)) {
                this.patternFillSingleBegun = true;
            }
            else {
                offset_x = Math.floor(Math.random() * this.canvasSize / 2.5) - this.canvasSize / 2.5;
                offset_y = Math.floor(Math.random() * this.canvasSize / 2.5) - this.canvasSize / 2.5;
                // this.ctx.translate(offset_x, offset_y);
            }
            if (this.patternSwitch === 1) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternThree, this.repeat);
            }
            else if (this.patternSwitch === 2) {
                if (rand === 1) {
                    this.ctx.fillStyle = this.ctx.createPattern(this.patternTwo, this.repeat);
                }
                else if (rand === 2) {
                    this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, this.repeat);
                }
            }
            else if (this.patternSwitch === 3) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternSix, this.repeat);
            }
            else if (this.patternSwitch === 4) {
                if (rand === 1) {
                    this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, this.repeat);
                }
                else if (rand === 2) {
                    this.ctx.fillStyle = this.ctx.createPattern(this.patternSix, this.repeat);
                }
            }
            else if (this.patternSwitch === 5) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternTwo, this.repeat);
            }
            else if (this.patternSwitch === 6) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternOne, this.repeat);
            }
            else if (this.patternSwitch === 7) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternFive, this.repeat);
            }
            else {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, this.repeat);
            }
            if (this.isFrieze && main) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternThree, this.repeat);
            }
            if (this.isFriezeTwo && main) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternFive, this.repeat);
            }
            if (this.isTrunks && main) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternSix, this.repeat);
            }
            if (this.isArabesque && main) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternOne, this.repeat);
            }
            if (this.isMexico && main) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, this.repeat);
            }
            if (this.isBedroom && main) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternBedroom, this.repeat);
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
                if (xPos + width > (this.canvasSize + 300)) {
                    width = width - 200;
                }
                if (yPos + height > (this.canvasSize + 300)) {
                    height = height - 200;
                }
                this.ctx.fillRect(xPos, yPos, width, height);
                this.ctx.strokeRect(xPos, yPos, width, height);
                break;
            case 'Trapezoid':
                // omitting begin path triggers the wireframe look
                if (!this.forceBeginPath && this.singleLayer) {
                    if (this.forceTrapezoidBeginPath) {
                        this.ctx.beginPath();
                    }
                }
                else {
                    this.ctx.beginPath();
                }
                if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
                    if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
                        if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
                            // this.ctx.lineWidth = 2;
                        }
                    }
                }
                var rand1 = (Math.random() * this.canvasSize) + (this.fullCanvasSize - this.canvasSize) / 2;
                var y1 = (Math.random() * this.canvasSize) + (this.fullCanvasSize - this.canvasSize) / 2;
                //first point
                this.ctx.moveTo(rand1, y1);
                var rand2 = (Math.random() * this.canvasSize) + (this.fullCanvasSize - this.canvasSize) / 2;
                //second point completes first side
                var y2 = (Math.random() * this.canvasSize) + (this.fullCanvasSize - this.canvasSize) / 2;
                this.ctx.lineTo(rand2, y2);
                var rand3 = (Math.random() * this.canvasSize) + (this.fullCanvasSize - this.canvasSize) / 2;
                ;
                var y3 = (Math.random() * this.canvasSize) + (this.fullCanvasSize - this.canvasSize) / 2;
                ;
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
                if (!this.forceBeginPath && this.singleLayer) {
                    if (!this.forceTrapezoidBeginPath) {
                        this.ctx.beginPath();
                    }
                }
                else {
                    this.ctx.beginPath();
                }
                if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
                    if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
                        if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
                            // this.ctx.lineWidth = 2;
                        }
                    }
                }
                rand1 = xPos;
                rand2 = yPos;
                var ty1 = (Math.random() * this.canvasSize) + (this.fullCanvasSize - this.canvasSize) / 2;
                var ty2 = (Math.random() * this.canvasSize) + (this.fullCanvasSize - this.canvasSize) / 2;
                // vertex one
                this.ctx.moveTo(rand1, ty1);
                // vertex two
                this.ctx.lineTo(rand2, rand1);
                // this.ctx.stroke();
                // vertex three
                this.ctx.lineTo(rand2, ty2);
                this.ctx.stroke();
                this.ctx.lineTo(rand1, ty1);
                // const set y diff
                //  const yDiff = 50;
                //  this.ctx.lineTo(rand1, ty1-yDiff);
                //  this.ctx.stroke();
                //  this.ctx.lineTo(rand2, rand1-yDiff);
                //  this.ctx.stroke();
                //  this.ctx.lineTo(rand2, rand1);
                //  this.ctx.moveTo(rand2, rand1-yDiff);
                //  this.ctx.stroke();
                //  this.ctx.lineTo(rand2, ty2-yDiff);
                //  this.ctx.stroke();
                //  this.ctx.lineTo(rand2, ty2);
                //  this.ctx.moveTo(rand2, ty2-yDiff);
                //  this.ctx.stroke();
                //  this.ctx.lineTo(rand1, ty1-yDiff);
                //  this.ctx.stroke();
                this.ctx.fill();
                currObjArea = this.calcPolygonArea([{ x: rand1, y: ty1 }, { x: rand2, y: rand1 }, { x: rand2, y: ty2 }]);
                break;
            case 'Line':
                // this.ctx.beginPath();
                if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
                    if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
                        if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
                            // this.ctx.setLineDash([5, 15]);
                            // this.ctx.lineWidth = 2;
                        }
                    }
                }
                rand1 = (Math.random() * this.canvasSize) + (this.fullCanvasSize - this.canvasSize) / 2;
                var rand = Math.floor(Math.random() * 2) + 1;
                if (rand === 1) {
                    rand2 = rand1 + 15;
                }
                else {
                    rand2 = rand1 - 15;
                }
                var ly1 = (Math.random() * this.canvasSize) + (this.fullCanvasSize - this.canvasSize) / 2;
                var ly2 = (Math.random() * this.canvasSize) + (this.fullCanvasSize - this.canvasSize) / 2;
                this.ctx.moveTo(rand1, ly1);
                this.ctx.lineTo(rand2, rand1);
                this.ctx.lineTo(rand2, ly2);
                this.ctx.stroke();
                // pythagorean theorem
                currObjArea = this.ctx.lineWidth * (this.getDistance(rand1, ly1, rand2, rand1) + this.getDistance(rand2, rand1, rand2, ly2));
                break;
            case 'Circle':
                var radius = width / 2;
                if (!this.forceBeginPath && (this.singleLayer)) {
                }
                else {
                    this.ctx.beginPath();
                }
                this.ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI, false);
                this.ctx.fill();
                this.ctx.stroke();
                currObjArea = Math.PI * Math.pow(radius, 2);
                // get better with calculating for circles
                break;
        }
        if (this.patternFill) {
            if (!this.patternFillSingleBegun && (this.isFrieze || this.isFriezeTwo || this.isTrunks || this.isArabesque || this.isMexico || this.isBedroom)) {
            }
            else {
                // this.ctx.translate(-offset_x, -offset_y);
            }
            // this.ctx.translate(-this.offset_x, -this.offset_y);
        }
        this.aggrObjArea += currObjArea;
        // if(this.transform) {
        // this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        // this.ctx.restore();    // }
    };
    GeneratorComponent.prototype.renderImage = function (index, favorites) {
        if (index !== undefined) {
            this.currImageIndex = index;
        }
        var img = new Image();
        var imageArr = this.savedImageArr;
        if (favorites) {
            imageArr = this.favoritesArr;
        }
        if (imageArr[this.currImageIndex]) {
            img.src = imageArr[this.currImageIndex].src;
        }
        else {
            img.src = this.canvas.toDataURL();
        }
        this.ctxTwo.save();
        this.ctxTwo.scale(this.restoreScale, this.restoreScale);
        img.onload = function () {
            this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
            this.drawImageScaled(img, this.ctxTwo);
            if (this.singleLayer) {
                // this.ctx.restore();
            }
            this.ctxTwo.restore();
            if (this.singleLayer) {
                //  this.ctxTwo.scale(this.restoreScale, this.restoreScale);
                // this.restoreScale = 2
                // this.fullCanvasSize = this.ctx.canvas.width * this.restoreScale;
                //  this.ctxTwo.scale(.5, .5);
            }
            this.renderDone = true;
            this.renderDoneEmit.emit(true);
            this.loader.nativeElement.style.visibility = "hidden";
            if (index === undefined) {
                this.updateCurrentIndex.emit(this.savedImageArr.length - 1);
            }
            console.log('this.gentype', this.genType, 'is single layer', this.singleLayer);
        }.bind(this);
    };
    GeneratorComponent.prototype.drawImageScaled = function (img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.min(hRatio, vRatio);
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
        // this.saveImageFirebase.emit(imgObj);
        this.loader.nativeElement.style.visibility = "hidden";
        this.renderDone = true;
        this.renderDoneEmit.emit(true);
        this.renderImage();
    };
    GeneratorComponent.prototype.setCustomImages = function (clear) {
        this.patternOne.src = this.customImages[0].src;
        this.patternOne.crossOrigin = "Anonymous";
        this.patternOne.onload = function () {
            var pattern = this.ctx.createPattern(this.patternOne, this.repeat);
            this.ctx.fillStyle = pattern;
            this.customImages[0].ready = true;
            this.customImagesLoaded.push(this.patternOne);
            this.patternTwo.src = this.customImages[1].src;
            this.patternTwo.onload = function () {
                var pattern = this.ctx.createPattern(this.patternTwo, this.repeat);
                this.ctx.fillStyle = pattern;
                this.customImages[1].ready = true;
                this.customImagesLoaded.push(this.patternTwo);
                this.patternThree.src = this.customImages[2].src;
                this.patternThree.onload = function () {
                    var pattern = this.ctx.createPattern(this.patternThree, this.repeat);
                    this.ctx.fillStyle = pattern;
                    this.customImages[2].ready = true;
                    this.customImagesLoaded.push(this.patternThree);
                    this.patternFour.src = this.customImages[3].src;
                    this.patternFour.onload = function () {
                        var pattern = this.ctx.createPattern(this.patternFour, this.repeat);
                        this.ctx.fillStyle = pattern;
                        this.customImages[3].ready = true;
                        this.customImagesLoaded.push(this.patternFour);
                        this.patternFive.src = this.customImages[4].src;
                        this.patternFive.onload = function () {
                            var pattern = this.ctx.createPattern(this.patternFive, this.repeat);
                            this.ctx.fillStyle = pattern;
                            this.customImages[4].ready = true;
                            this.customImagesLoaded.push(this.patternFive);
                            this.patternSix.src = this.customImages[5].src;
                            this.patternSix.onload = function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var pattern;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                pattern = this.ctx.createPattern(this.patternSix, this.repeat);
                                                this.ctx.fillStyle = pattern;
                                                this.customImages[5].ready = true;
                                                this.customImagesLoaded.push(this.patternSix);
                                                return [4 /*yield*/, this.getRandomArt(clear)];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            }.bind(this);
                        }.bind(this);
                    }.bind(this);
                }.bind(this);
            }.bind(this);
        }.bind(this);
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
        // let counter = 0;
        // var colorArr = [];
        // for (var i = 0; i < 5; i++) {
        //   var num = Math.round(0xffffff * Math.random());
        //   var r = num >> 16;
        //   var g = num >> 8 & 255;
        //   var b = num & 255;
        //   const tempRgb = { 'r': r, 'g': g, 'b': b };
        //   //  var tempRgb = this.getRandomRgb();
        //   var tempRgbString = 'rgb(' + tempRgb.r + ',' + tempRgb.g + ',' + tempRgb.b + ')';
        //   colorArr.push(tempRgbString);
        // }
        // // while (counter <= this.objNum + 1) {
        // //   var tempRgb = this.getRandomRgb();
        // //   var tempRgbString = 'rgb(' + tempRgb.r + ',' + tempRgb.g + ',' + tempRgb.b + ')';
        // //   colorArr.push(tempRgbString);
        // //   counter++;
        // // }
        // return colorArr;
        var tempRgb = this.getRandomRgb();
        var complementaryColorArr = ['rgb(' + tempRgb.r + ',' + tempRgb.g + ',' + tempRgb.b + ')'];
        var currRgb = tempRgb;
        for (var i = 0; i < 6; i++) {
            currRgb = this.getComplementary(currRgb);
            complementaryColorArr.push(this.convertToRgbString(currRgb));
        }
        return complementaryColorArr;
    };
    GeneratorComponent.prototype.convertToRgbString = function (rgbObj) {
        return 'rgb(' + rgbObj.r + ',' + rgbObj.g + ',' + rgbObj.b + ')';
    };
    GeneratorComponent.prototype.getComplementary = function (rgb) {
        var temphsv = this.RGB2HSV(rgb);
        temphsv.hue = this.hueShift(temphsv.hue, 180.0);
        var finRgb = this.HSV2RGB(temphsv);
        return finRgb;
    };
    GeneratorComponent.prototype.RGB2HSV = function (rgb) {
        var hsv;
        hsv = new Object();
        var max = Math.max(rgb.r, rgb.g, rgb.b);
        var dif = max - Math.min(rgb.r, rgb.g, rgb.b);
        hsv.saturation = (max == 0.0) ? 0 : (100 * dif / max);
        if (hsv.saturation == 0)
            hsv.hue = 0;
        else if (rgb.r == max)
            hsv.hue = 60.0 * (rgb.g - rgb.b) / dif;
        else if (rgb.g == max)
            hsv.hue = 120.0 + 60.0 * (rgb.b - rgb.r) / dif;
        else if (rgb.b == max)
            hsv.hue = 240.0 + 60.0 * (rgb.r - rgb.g) / dif;
        if (hsv.hue < 0.0)
            hsv.hue += 360.0;
        hsv.value = Math.round(max * 100 / 255);
        hsv.hue = Math.round(hsv.hue);
        hsv.saturation = Math.round(hsv.saturation);
        return hsv;
    };
    // RGB2HSV and HSV2RGB are based on Color Match Remix [http://color.twysted.net/]
    // which is based on or copied from ColorMatch 5K [http://colormatch.dk/]
    GeneratorComponent.prototype.HSV2RGB = function (hsv) {
        var rgb = { 'r': null, 'g': null, 'b': null };
        if (hsv.saturation == 0) {
            rgb['r'] = Math.round(hsv.value * 2.55);
            rgb['g'] = Math.round(hsv.value * 2.55);
            rgb['b'] = Math.round(hsv.value * 2.55);
        }
        else {
            hsv.hue /= 60;
            hsv.saturation /= 100;
            hsv.value /= 100;
            var i = Math.floor(hsv.hue);
            var f = hsv.hue - i;
            var p = hsv.value * (1 - hsv.saturation);
            var q = hsv.value * (1 - hsv.saturation * f);
            var t = hsv.value * (1 - hsv.saturation * (1 - f));
            switch (i) {
                case 0:
                    rgb.r = hsv.value;
                    rgb.g = t;
                    rgb.b = p;
                    break;
                case 1:
                    rgb.r = q;
                    rgb.g = hsv.value;
                    rgb.b = p;
                    break;
                case 2:
                    rgb.r = p;
                    rgb.g = hsv.value;
                    rgb.b = t;
                    break;
                case 3:
                    rgb.r = p;
                    rgb.g = q;
                    rgb.b = hsv.value;
                    break;
                case 4:
                    rgb.r = t;
                    rgb.g = p;
                    rgb.b = hsv.value;
                    break;
                default:
                    rgb.r = hsv.value;
                    rgb.g = p;
                    rgb.b = q;
            }
            rgb.r = Math.round(rgb.r * 255);
            rgb.g = Math.round(rgb.g * 255);
            rgb.b = Math.round(rgb.b * 255);
        }
        return rgb;
    };
    //Adding hueShift via Jacob (see comments)
    GeneratorComponent.prototype.hueShift = function (h, s) {
        h += s;
        while (h >= 360.0)
            h -= 360.0;
        while (h < 0.0)
            h += 360.0;
        return h;
    };
    //min max via Hairgami_Master (see comments)
    GeneratorComponent.prototype.min3 = function (a, b, c) {
        return (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);
    };
    GeneratorComponent.prototype.max3 = function (a, b, c) {
        return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
    };
    GeneratorComponent.prototype.getRandomRgb = function () {
        var num = Math.round(0xffffff * Math.random());
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        // if((r + g + b) > 450) {
        //   const diff = (r + g + b) - 450;
        //   const sub = diff/3;
        //   r = r - sub;
        //   g = g - sub;
        //   b = b - sub;
        // }
        var retVal = { 'r': r, 'g': g, 'b': b };
        // const rgb = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
        // const rgbArr = rgb.split(',')
        // console.log('rgb', rgb);
        // const oneEntry= rgbArr[0].substring(4, rgbArr[0].length);
        // console.log('oneEntry', oneEntry);
        // const retVal =  { 'r': oneEntry, 'g': rgbArr[1], 'b': rgbArr[2].substring(0, rgbArr[2].length -1) };
        // console.log('retVAl', retVal);
        return retVal;
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
    ], GeneratorComponent.prototype, "favoritesArr", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GeneratorComponent.prototype, "customImages", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], GeneratorComponent.prototype, "customImagesActive", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], GeneratorComponent.prototype, "updateCurrentIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GeneratorComponent.prototype, "currImageIndex", void 0);
    GeneratorComponent = __decorate([
        core_1.Component({
            selector: 'generator',
            templateUrl: './generator.component.html',
            styleUrls: ['./generator.component.css'],
            providers: [utilities_1.Utilities]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, utilities_1.Utilities])
    ], GeneratorComponent);
    return GeneratorComponent;
}());
exports.GeneratorComponent = GeneratorComponent;
//# sourceMappingURL=generator.component.js.map