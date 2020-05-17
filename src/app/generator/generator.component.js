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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
require("firebase/firestore");
require("firebase/auth");
require("firebase/storage");
var fast_average_color_1 = require("fast-average-color");
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
        this.transDatabaseList = [];
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
        this.lowestPoint = 0;
        this.rightmostPoint = 0;
        this.largeRecurseStep = false;
        this.forceBeginPath = false;
        this.patternFillSingleBegun = false;
        this.transform = false;
        this.repeat = 'repeat';
        this.leftmostPoint = 0;
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
                                // this.patternDatabaseList.push(darkImage)
                            }.bind(this));
                        }
                        else if (item["metadata"]["name"].indexOf('trans') > -1) {
                            storageRef.child(item["metadata"]["name"]).getDownloadURL().then(function (url) {
                                var transImage = new Image();
                                transImage.crossOrigin = "Anonymous";
                                transImage.src = url;
                                this.transDatabaseList.push(transImage);
                                // this.patternDatabaseList.push(darkImage)
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
            this.patternTwo.src = this.initialImages[1].src;
            this.patternTwo.onload = function () {
                var pattern = this.ctx.createPattern(this.patternTwo, this.repeat);
                this.ctx.fillStyle = pattern;
                this.patternThree.src = this.initialImages[2].src;
                this.patternThree.onload = function () {
                    var pattern = this.ctx.createPattern(this.patternThree, this.repeat);
                    this.ctx.fillStyle = pattern;
                    this.patternFour.src = this.initialImages[3].src;
                    this.patternFour.onload = function () {
                        var pattern = this.ctx.createPattern(this.patternFour, this.repeat);
                        this.ctx.fillStyle = pattern;
                        this.patternFive.src = this.initialImages[4].src;
                        this.patternFive.onload = function () {
                            var pattern = this.ctx.createPattern(this.patternFive, this.repeat);
                            this.ctx.fillStyle = pattern;
                            this.patternSix.src = this.initialImages[5].src;
                            this.patternSix.onload = function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var pattern;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                pattern = this.ctx.createPattern(this.patternSix, this.repeat);
                                                this.ctx.fillStyle = pattern;
                                                return [4 /*yield*/, this.getRandomArt(true)];
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
        this.ctx.scale(.5175, .5175);
        this.ctxTwo.scale(.5175, .5175);
        this.restoreScale = 1.932367149758454;
        this.fullCanvasSize = this.ctx.canvas.width * this.restoreScale;
        this.leftmostPoint = this.fullCanvasSize;
    };
    GeneratorComponent.prototype.getRandomArt = function (clear, recurseStep) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, recurse, solidSwitch, maxDarkIndex, one, three, four, five, darkOne, darkThree, darkFour, solidSwitch, maxDarkIndex, one, three, four, five, darkThree, darkFour, darkFive, img;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getRandomColorArr()];
                    case 1:
                        _a.colorArr = _b.sent();
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
                            this.offset_x = (Math.random() * 50) - 50;
                            this.offset_y = (Math.random() * 50) - 50;
                            this.genType = this.genTypeArr[Math.floor(Math.random() * this.genTypeArr.length)];
                            this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
                            // if no recurse, this means t his is a new piece, not just a layer, so clear and calculate recurse chance
                            this.ctx.clearRect(0, 0, this.fullCanvasSize, this.fullCanvasSize);
                            this.ctx.fillStyle = 'white';
                            this.ctx.fillRect(0, 0, this.fullCanvasSize, this.fullCanvasSize);
                            this.ctx.translate(this.offset_x, this.offset_y);
                            recurse = this.utilities.randomlyChooseTrueOrFalse();
                            this.recurse = recurse;
                            this.ctx.scale(this.restoreScale, this.restoreScale);
                            this.ctxTwo.scale(this.restoreScale, this.restoreScale);
                            if (recurse) {
                                this.ctx.scale(.5175, .5175);
                                this.ctxTwo.scale(.5175, .5175);
                                this.restoreScale = 1.932367149758454;
                            }
                            else {
                                this.ctx.scale(.679, .679);
                                this.ctxTwo.scale(.579, .79);
                                this.restoreScale = 1.72711571675;
                            }
                            this.fullCanvasSize = this.ctx.canvas.width * this.restoreScale;
                            this.singleLayer = true;
                            if (!recurse) {
                                this.singleLayer = true;
                                this.forceTrapezoidBeginPath = this.utilities.randomlyChooseTrueOrFalse();
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
                        if (!recurse) return [3 /*break*/, 5];
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
                        if (!(recurse && recurseStep === undefined)) return [3 /*break*/, 2];
                        if (!this.customImagesActive) {
                            maxDarkIndex = this.patternDatabaseList.length - 1;
                            one = Math.floor(Math.random() * maxDarkIndex);
                            three = Math.floor(Math.random() * maxDarkIndex);
                            four = Math.floor(Math.random() * maxDarkIndex);
                            five = Math.floor(Math.random() * maxDarkIndex);
                            if (this.patternDatabaseList.length >= 6) {
                                darkThree = this.patternDatabaseList[three];
                                this.patternOne = darkThree;
                                this.patternTwo = darkThree;
                                this.patternThree = darkThree;
                                darkFour = this.patternDatabaseList[four];
                                this.patternFour = darkThree;
                                darkFive = this.patternDatabaseList[five];
                                this.patternFive = darkFive;
                                this.patternSix = darkFive;
                            }
                        }
                        recurseStep = Math.floor(Math.random() * 4) + 4;
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
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.getRandomArtAlg(clear, recurse, recurseStep)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    GeneratorComponent.prototype.getRandomArtAlg = function (clear, recurse, recurseStep) {
        return __awaiter(this, void 0, void 0, function () {
            var rand, norm, trapTrans, layerNum, _a, randomShape, stroke, rand_1, objNum;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.patternFillSingleBegun = false;
                        this.beginPath = this.utilities.randomlyChooseTrueOrFalse();
                        this.randomScheme = "Random";
                        rand = 1;
                        this.patternOffset = 0;
                        // first layer of small objects;
                        this.resetForNewLayer();
                        return [4 /*yield*/, this.getFirstSmallLayer()];
                    case 1:
                        _b.sent();
                        this.resetForNewLayer();
                        norm = true;
                        trapTrans = 1;
                        layerNum = 10;
                        if (!(norm || trapTrans === 1)) return [3 /*break*/, 6];
                        if (trapTrans === 1) {
                            if (this.startingRecurseStep === recurseStep) {
                                layerNum = 30;
                            }
                            this.backgroundShapeArr = ['Rectangle', 'Circle', 'Line'];
                        }
                        else {
                            this.backgroundShapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
                        }
                        _b.label = 2;
                    case 2:
                        if (!(this.layerCounter < layerNum)) return [3 /*break*/, 6];
                        // this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
                        _a = this;
                        return [4 /*yield*/, this.getRandomRgb()];
                    case 3:
                        // this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
                        _a.randomColor = _b.sent();
                        this.randomColor = 'rgb(' + this.randomColor['r'] + ',' + this.randomColor['g'] + ',' + this.randomColor['b'] + ')';
                        this.randomStrokeOpacity = Math.random() * 1;
                        this.randomShapeOpacity = Math.random() * 1;
                        randomShape = this.backgroundShapeArr[Math.floor(Math.random() * this.shapeArr.length)];
                        return [4 /*yield*/, this.getRandomRgb()];
                    case 4:
                        stroke = _b.sent();
                        this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';
                        rand = this.utilities.randomlyChooseOneOrTwo();
                        if (rand === 1) {
                            this.ctx.strokeStyle = 'black';
                        }
                        this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
                        this.ctx.globalAlpha = .4 - (layerNum / this.layerCounter * .01);
                        this.ctx.fillStyle = this.randomColor;
                        this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
                        this.ctx.lineWidth = Math.random() * 10;
                        if (this.singleLayer) {
                            this.ctx.lineWidth = Math.random() * 3.2;
                            rand_1 = this.utilities.randomlyChooseTrueOrFalse();
                            if (rand_1) {
                                if (this.forceTrapezoidBeginPath) {
                                    this.ctx.lineWidth = Math.random() * 10;
                                }
                                else {
                                    this.ctx.lineWidth = Math.random() * 7;
                                }
                            }
                        }
                        return [4 /*yield*/, this.drawShape(randomShape)];
                    case 5:
                        _b.sent();
                        this.layerCounter++;
                        return [3 /*break*/, 2];
                    case 6:
                        this.resetForNewLayer();
                        objNum = this.objNum;
                        if (this.genType === 'transPattern') {
                            objNum = Math.floor(Math.random() * 23) + 19;
                        }
                        if (this.recurse) {
                            this.normalColor = true;
                        }
                        if (!(recurseStep !== undefined)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.getMainLayer(objNum, norm, rand, trapTrans, recurseStep)];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, this.getMainLayer(objNum, norm, rand, trapTrans)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10:
                        this.resetForNewLayer();
                        if (!this.singleLayer) return [3 /*break*/, 12];
                        // this.getFirstSmallLayer(true);
                        return [4 /*yield*/, this.getSecondSmallLayer(norm)];
                    case 11:
                        // this.getFirstSmallLayer(true);
                        _b.sent();
                        return [3 /*break*/, 14];
                    case 12: return [4 /*yield*/, this.getSecondSmallLayer(norm)];
                    case 13:
                        _b.sent();
                        _b.label = 14;
                    case 14:
                        this.resetForNewLayer();
                        if (!this.singleLayer) return [3 /*break*/, 16];
                        this.forceBeginPath = true;
                        return [4 /*yield*/, this.getFirstSmallLayer(true)];
                    case 15:
                        _b.sent();
                        this.resetForNewLayer();
                        this.forceBeginPath = false;
                        _b.label = 16;
                    case 16:
                        this.ctx.globalAlpha = 1;
                        if (!(recurse && recurseStep && recurseStep > 1)) return [3 /*break*/, 18];
                        recurseStep--;
                        return [4 /*yield*/, this.getRandomArt(clear, recurseStep)];
                    case 17:
                        _b.sent();
                        return [3 /*break*/, 19];
                    case 18:
                        this.saveCurrentArt(clear);
                        this.ctx.translate(-this.offset_x, -this.offset_y);
                        _b.label = 19;
                    case 19: return [2 /*return*/];
                }
            });
        });
    };
    GeneratorComponent.prototype.getSecondSmallLayer = function (norm) {
        return __awaiter(this, void 0, void 0, function () {
            var count, light, _a, randomShape, stroke, blackStroke, rand;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        count = 25;
                        // norm = true;
                        if (norm) {
                            count = 45;
                        }
                        if (this.singleLayer) {
                            count = 60;
                        }
                        _b.label = 1;
                    case 1:
                        if (!(this.layerCounter <= count)) return [3 /*break*/, 5];
                        light = true;
                        if (!this.recurse) {
                            light = this.utilities.randomlyChooseTrueOrFalse();
                        }
                        _a = this;
                        return [4 /*yield*/, this.getRandomRgb(false, light)];
                    case 2:
                        _a.randomColor = _b.sent();
                        this.randomStrokeOpacity = Math.random() * 1;
                        this.randomShapeOpacity = Math.random() * .5;
                        randomShape = this.smallShapeArr[Math.floor(Math.random() * this.shapeArr.length)];
                        return [4 /*yield*/, this.getRandomRgb(true)];
                    case 3:
                        stroke = _b.sent();
                        this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
                        blackStroke = this.utilities.randomlyChooseTrueOrFalse();
                        if (blackStroke && this.recurse) {
                            this.ctx.strokeStyle = 'black';
                        }
                        this.randomColor = 'rgb(' + this.randomColor['r'] + ',' + this.randomColor['g'] + ',' + this.randomColor['b'] + ',' + this.randomShapeOpacity + ")";
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
                        if (this.recurse) {
                            this.patternFill = true;
                        }
                        this.ctx.lineWidth = Math.random() * 10;
                        if (this.singleLayer) {
                            this.ctx.lineWidth = Math.random() * 3.2;
                            if (!this.recurse) {
                                this.ctx.lineWidth = Math.random() * 3.2;
                            }
                            rand = this.utilities.randomlyChooseTrueOrFalse();
                            if (rand) {
                                if (this.forceTrapezoidBeginPath) {
                                    this.ctx.lineWidth = Math.random() * 8;
                                }
                                else {
                                    this.ctx.lineWidth = Math.random() * 7;
                                }
                            }
                        }
                        return [4 /*yield*/, this.drawShape(randomShape, true)];
                    case 4:
                        _b.sent();
                        this.layerCounter++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    GeneratorComponent.prototype.getFirstSmallLayer = function (smallCount) {
        return __awaiter(this, void 0, void 0, function () {
            var smallCounter, rand, randomShape, stroke, complStroke, rand_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        smallCounter = 25;
                        if (this.singleLayer) {
                            smallCounter = 100;
                            if (smallCount) {
                                smallCounter = 65;
                                if (this.forceBeginPath) {
                                    smallCounter = 45;
                                }
                            }
                        }
                        _a.label = 1;
                    case 1:
                        if (!(this.layerCounter <= smallCounter)) return [3 /*break*/, 4];
                        this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
                        this.randomStrokeOpacity = Math.random();
                        this.randomShapeOpacity = Math.random();
                        rand = this.utilities.randomlyChooseOneOrTwo();
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
                        randomShape = this.smallShapeArr[Math.floor(Math.random() * this.shapeArr.length)];
                        return [4 /*yield*/, this.getRandomRgb()];
                    case 2:
                        stroke = _a.sent();
                        if (this.randomScheme === 'Complementary') {
                            complStroke = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
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
                        if (rand === 1) {
                            this.ctx.globalAlpha = this.randomShapeOpacity;
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
                            rand_2 = this.utilities.randomlyChooseTrueOrFalse();
                            if (rand_2) {
                                if (this.forceTrapezoidBeginPath) {
                                    this.ctx.lineWidth = Math.random() * 10;
                                }
                                else {
                                    this.ctx.lineWidth = Math.random() * 5;
                                }
                            }
                        }
                        return [4 /*yield*/, this.drawShape(randomShape, true)];
                    case 3:
                        _a.sent();
                        this.layerCounter++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GeneratorComponent.prototype.resetForNewLayer = function () {
        this.layerCounter = 0;
        this.ctx.globalAlpha = 1;
        this.aggrObjArea = 0;
        this.dark = false;
        this.normalColor = false;
        this.shapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
    };
    GeneratorComponent.prototype.getMainLayer = function (objNum, norm, rand, trapTrans, recurseStep) {
        return __awaiter(this, void 0, void 0, function () {
            var light, _a, randomShape, dark, stroke, newLineWidth, rand_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
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
                        // norm = false;
                        // if (!norm) {
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
                                if (this.patternFill === false) {
                                    this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
                                    if (this.patternFill === false) {
                                        this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
                                    }
                                }
                            }
                        }
                        _b.label = 1;
                    case 1:
                        if (!(this.layerCounter < objNum)) return [3 /*break*/, 7];
                        light = false;
                        if (this.recurse) {
                            light = true;
                        }
                        _a = this;
                        return [4 /*yield*/, this.getRandomRgb(false, true)];
                    case 2:
                        _a.randomColor = _b.sent();
                        this.randomColor = 'rgb(' + this.randomColor['r'] + ',' + this.randomColor['g'] + ',' + this.randomColor['b'] + ')';
                        this.randomShapeOpacity = Math.random();
                        if (this.randomShapeOpacity < 0) {
                            this.randomShapeOpacity = 0;
                        }
                        if (this.layerCounter === (objNum)) {
                            this.randomShapeOpacity = 0;
                            this.patternFill = false;
                        }
                        // if (!this.recurse && this.layerCounter === (objNum - 2)) {
                        //   this.randomShapeOpacity = .1;
                        // }
                        if (!this.recurse && this.layerCounter === (objNum - 1)) {
                            this.randomShapeOpacity = .1;
                        }
                        if (this.singleLayer) {
                            if (this.recurse) {
                                this.ctx.globalAlpha = this.layerCounter / objNum + .2;
                            }
                            else {
                                this.ctx.globalAlpha = this.layerCounter / objNum + .1;
                            }
                        }
                        else {
                            // if(this.utilities.randomlyChooseTrueOrFalse()) {
                            this.ctx.globalAlpha = this.layerCounter / objNum + .1;
                            // }
                        }
                        randomShape = this.shapeArr[Math.floor(Math.random() * this.shapeArr.length)];
                        // if (this.singleLayer && randomShape !== 'Line') {
                        //   var randomShape = this.shapeArr[Math.floor(Math.random() * this.shapeArr.length)];
                        // }
                        // var stroke = await this.getRandomRgb(false, false, dark);
                        // this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';
                        rand = Math.floor(Math.random() * 2) + 1;
                        if (!(rand === 1)) return [3 /*break*/, 3];
                        this.ctx.strokeStyle = 'black';
                        return [3 /*break*/, 5];
                    case 3:
                        dark = this.utilities.randomlyChooseOneOrTwo();
                        return [4 /*yield*/, this.getRandomRgb(false, false, dark)];
                    case 4:
                        stroke = _b.sent();
                        this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';
                        _b.label = 5;
                    case 5:
                        this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
                        this.ctx.fillStyle = this.randomColor;
                        newLineWidth = Math.random() * 5 + 1;
                        if (this.layerCounter < (objNum / 4) || (this.layerCounter > (objNum * .5) && this.layerCounter < (objNum * .6))) {
                            newLineWidth = Math.random() * 20 + 16;
                            if (this.layerCounter === (objNum - 1) || this.layerCounter === (objNum)) {
                                newLineWidth = Math.random() * 20 + 16;
                                this.ctx.globalAlpha = 1;
                            }
                            if (this.layerCounter === (objNum - 2)) {
                                newLineWidth = Math.random() * 20 + 16;
                                this.ctx.globalAlpha = 1;
                            }
                            if (!this.singleLayer && recurseStep === 1) {
                                if (this.layerCounter === (objNum - 3)) {
                                    newLineWidth = Math.random() * 20 + 16;
                                }
                            }
                            if (recurseStep < 3) {
                                this.ctx.globalAlpha = 1;
                            }
                        }
                        this.ctx.lineWidth = newLineWidth;
                        if (this.singleLayer) {
                            this.patternFill = true;
                            this.ctx.lineWidth = Math.random() * 3.2;
                            rand_3 = this.utilities.randomlyChooseTrueOrFalse();
                            if (rand_3) {
                                this.ctx.lineWidth = Math.random() * 10;
                            }
                        }
                        return [4 /*yield*/, this.drawShape(randomShape, false, true)];
                    case 6:
                        _b.sent();
                        this.layerCounter++;
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    GeneratorComponent.prototype.setXYExtremes = function (xPos, yPos, small) {
        if (xPos < this.leftmostPoint) {
            this.leftmostPoint = xPos;
        }
        if (xPos > this.rightmostPoint) {
            this.rightmostPoint = xPos;
        }
        if (yPos > this.rightmostPoint) {
            this.lowestPoint = xPos;
        }
    };
    GeneratorComponent.prototype.onload2promise = function (obj) {
        return new Promise(function (resolve, reject) {
            obj.onload = function () { return resolve(obj); };
            obj.onerror = reject;
        });
    };
    GeneratorComponent.prototype.drawShape = function (shape, small, main) {
        return __awaiter(this, void 0, void 0, function () {
            var offset_x, offset_y, xPos, yPos, height, width, currObjArea, dontBeginPath, rand1, y1, rand2, y2, rand3, y3, heightLow, heightHigh, leftMost, rightMost, addToLeftMost, rand4, y4, ty1, ty2, rand, ly1, ly2, radius;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.repeat = this.utilities.randomlyChooseTrueOrFalse() ? 'no-repeat' : 'repeat';
                        if (this.recurse) {
                            this.repeat = 'repeat';
                        }
                        ;
                        this.repeat = 'repeat';
                        offset_x = 0;
                        offset_y = 0;
                        xPos = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2.5);
                        yPos = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2.75);
                        if (xPos > 1500) {
                            console.log('XPOS', xPos);
                        }
                        // small
                        this.setXYExtremes(xPos, yPos, small);
                        height = (Math.random() * this.canvasSize) / 2;
                        width = (Math.random() * this.canvasSize) / 2;
                        currObjArea = height * width;
                        this.patternSwitch = Math.floor(Math.random() * 8) + 1;
                        rand = this.utilities.randomlyChooseOneOrTwo();
                        if (this.genType === "noPattern" && main) {
                            this.patternFill = true;
                        }
                        if (!this.patternFill) return [3 /*break*/, 48];
                        // this.ctx.translate(this.offset_x, this.offset_y);
                        if (!this.patternFillSingleBegun && (this.isFrieze || this.isFriezeTwo || this.isTrunks || this.isArabesque || this.isMexico || this.isBedroom)) {
                            this.patternFillSingleBegun = true;
                        }
                        else {
                            offset_x = Math.floor(Math.random() * this.canvasSize / 2.5) - this.canvasSize / 2.5;
                            offset_y = Math.floor(Math.random() * this.canvasSize / 2.5) - this.canvasSize / 2.5;
                            // this.ctx.translate(offset_x, offset_y);
                        }
                        if (!(this.patternSwitch === 1)) return [3 /*break*/, 3];
                        this.currentImage = this.patternThree;
                        if (!!this.currentImage.complete) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.onload2promise(this.currentImage)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.ctx.fillStyle = this.ctx.createPattern(this.patternThree, this.repeat);
                        return [3 /*break*/, 32];
                    case 3:
                        if (!(this.patternSwitch === 2)) return [3 /*break*/, 10];
                        if (!(rand === 1)) return [3 /*break*/, 6];
                        this.currentImage = this.patternTwo;
                        this.currentImage = this.patternThree;
                        if (!!this.currentImage.complete) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.onload2promise(this.currentImage)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        this.ctx.fillStyle = this.ctx.createPattern(this.patternTwo, this.repeat);
                        return [3 /*break*/, 9];
                    case 6:
                        if (!(rand === 2)) return [3 /*break*/, 9];
                        this.currentImage = this.patternFour;
                        this.currentImage = this.patternThree;
                        if (!!this.currentImage.complete) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.onload2promise(this.currentImage)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, this.repeat);
                        _a.label = 9;
                    case 9: return [3 /*break*/, 32];
                    case 10:
                        if (!(this.patternSwitch === 3)) return [3 /*break*/, 13];
                        this.currentImage = this.patternSix;
                        this.currentImage = this.patternThree;
                        if (!!this.currentImage.complete) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.onload2promise(this.currentImage)];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12:
                        this.ctx.fillStyle = this.ctx.createPattern(this.patternSix, this.repeat);
                        return [3 /*break*/, 32];
                    case 13:
                        if (!(this.patternSwitch === 4)) return [3 /*break*/, 20];
                        if (!(rand === 1)) return [3 /*break*/, 16];
                        this.currentImage = this.patternFour;
                        this.currentImage = this.patternThree;
                        if (!!this.currentImage.complete) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.onload2promise(this.currentImage)];
                    case 14:
                        _a.sent();
                        _a.label = 15;
                    case 15:
                        this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, this.repeat);
                        return [3 /*break*/, 19];
                    case 16:
                        if (!(rand === 2)) return [3 /*break*/, 19];
                        this.currentImage = this.patternSix;
                        this.currentImage = this.patternThree;
                        if (!!this.currentImage.complete) return [3 /*break*/, 18];
                        return [4 /*yield*/, this.onload2promise(this.currentImage)];
                    case 17:
                        _a.sent();
                        _a.label = 18;
                    case 18:
                        this.ctx.fillStyle = this.ctx.createPattern(this.patternSix, this.repeat);
                        _a.label = 19;
                    case 19: return [3 /*break*/, 32];
                    case 20:
                        if (!(this.patternSwitch === 5)) return [3 /*break*/, 23];
                        this.currentImage = this.patternTwo;
                        this.currentImage = this.patternThree;
                        if (!!this.currentImage.complete) return [3 /*break*/, 22];
                        return [4 /*yield*/, this.onload2promise(this.currentImage)];
                    case 21:
                        _a.sent();
                        _a.label = 22;
                    case 22:
                        this.ctx.fillStyle = this.ctx.createPattern(this.patternTwo, this.repeat);
                        return [3 /*break*/, 32];
                    case 23:
                        if (!(this.patternSwitch === 6)) return [3 /*break*/, 26];
                        this.currentImage = this.patternOne;
                        this.currentImage = this.patternThree;
                        if (!!this.currentImage.complete) return [3 /*break*/, 25];
                        return [4 /*yield*/, this.onload2promise(this.currentImage)];
                    case 24:
                        _a.sent();
                        _a.label = 25;
                    case 25:
                        this.ctx.fillStyle = this.ctx.createPattern(this.patternOne, this.repeat);
                        return [3 /*break*/, 32];
                    case 26:
                        if (!(this.patternSwitch === 7)) return [3 /*break*/, 29];
                        this.currentImage = this.patternFive;
                        this.currentImage = this.patternThree;
                        if (!!this.currentImage.complete) return [3 /*break*/, 28];
                        return [4 /*yield*/, this.onload2promise(this.currentImage)];
                    case 27:
                        _a.sent();
                        _a.label = 28;
                    case 28:
                        this.ctx.fillStyle = this.ctx.createPattern(this.patternFive, this.repeat);
                        return [3 /*break*/, 32];
                    case 29:
                        this.currentImage = this.patternFour;
                        this.currentImage = this.patternThree;
                        if (!!this.currentImage.complete) return [3 /*break*/, 31];
                        return [4 /*yield*/, this.onload2promise(this.currentImage)];
                    case 30:
                        _a.sent();
                        _a.label = 31;
                    case 31:
                        this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, this.repeat);
                        _a.label = 32;
                    case 32:
                        if (!(this.isFrieze && main)) return [3 /*break*/, 35];
                        this.currentImage = this.patternThree;
                        this.currentImage = this.patternThree;
                        if (!!this.currentImage.complete) return [3 /*break*/, 34];
                        return [4 /*yield*/, this.onload2promise(this.currentImage)];
                    case 33:
                        _a.sent();
                        _a.label = 34;
                    case 34:
                        this.ctx.fillStyle = this.ctx.createPattern(this.patternThree, this.repeat);
                        _a.label = 35;
                    case 35:
                        if (!(this.isFriezeTwo && main)) return [3 /*break*/, 38];
                        this.currentImage = this.patternFive;
                        this.currentImage = this.patternThree;
                        if (!!this.currentImage.complete) return [3 /*break*/, 37];
                        return [4 /*yield*/, this.onload2promise(this.currentImage)];
                    case 36:
                        _a.sent();
                        _a.label = 37;
                    case 37:
                        this.ctx.fillStyle = this.ctx.createPattern(this.patternFive, this.repeat);
                        _a.label = 38;
                    case 38:
                        if (!(this.isTrunks && main)) return [3 /*break*/, 41];
                        this.currentImage = this.patternSix;
                        this.currentImage = this.patternThree;
                        if (!!this.currentImage.complete) return [3 /*break*/, 40];
                        return [4 /*yield*/, this.onload2promise(this.currentImage)];
                    case 39:
                        _a.sent();
                        _a.label = 40;
                    case 40:
                        this.ctx.fillStyle = this.ctx.createPattern(this.patternSix, this.repeat);
                        _a.label = 41;
                    case 41:
                        if (!(this.isArabesque && main)) return [3 /*break*/, 44];
                        this.currentImage = this.patternOne;
                        this.currentImage = this.patternThree;
                        if (!!this.currentImage.complete) return [3 /*break*/, 43];
                        return [4 /*yield*/, this.onload2promise(this.currentImage)];
                    case 42:
                        _a.sent();
                        _a.label = 43;
                    case 43:
                        this.ctx.fillStyle = this.ctx.createPattern(this.patternOne, this.repeat);
                        _a.label = 44;
                    case 44:
                        if (!(this.isMexico && main)) return [3 /*break*/, 47];
                        this.currentImage = this.patternFour;
                        this.currentImage = this.patternThree;
                        if (!!this.currentImage.complete) return [3 /*break*/, 46];
                        return [4 /*yield*/, this.onload2promise(this.currentImage)];
                    case 45:
                        _a.sent();
                        _a.label = 46;
                    case 46:
                        console.log('this.currentImage', this.currentImage);
                        this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, this.repeat);
                        _a.label = 47;
                    case 47:
                        if (this.isBedroom && main) {
                            this.currentImage = this.patternBedroom;
                            this.ctx.fillStyle = this.ctx.createPattern(this.patternBedroom, this.repeat);
                        }
                        _a.label = 48;
                    case 48:
                        rand = Math.floor(Math.random() * 100) + 1;
                        if (small || (this.aggrObjArea + currObjArea + 250) >= (Math.pow(this.canvasSize, 2))) {
                            height = Math.random() * this.canvasSize / 25;
                            width = Math.random() * this.canvasSize / 25;
                            currObjArea = height * width;
                        }
                        switch (shape) {
                            case 'Rectangle':
                                if ((xPos + width + this.offset_x + this.ctx.lineWidth) > this.fullCanvasSize) {
                                    width = (this.fullCanvasSize - xPos - this.offset_x - this.ctx.lineWidth - 2);
                                }
                                if ((yPos + height + this.offset_y + this.ctx.lineWidth) > this.fullCanvasSize) {
                                    height = (this.fullCanvasSize - yPos - this.offset_y - this.ctx.lineWidth - 10);
                                }
                                this.setXYExtremes(width + xPos, height + yPos, small);
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
                                    dontBeginPath = this.utilities.randomlyChooseTrueOrFalse10Real();
                                    if (dontBeginPath) {
                                        this.ctx.beginPath();
                                    }
                                }
                                if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
                                    if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
                                        if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
                                            // this.ctx.lineWidth = 2;
                                        }
                                    }
                                }
                                rand1 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
                                y1 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
                                if (y1 > this.fullCanvasSize + this.offset_y + this.ctx.lineWidth) {
                                    y1 = (this.fullCanvasSize - this.offset_y - this.ctx.lineWidth - 5);
                                }
                                this.setXYExtremes(rand1, y1, small);
                                //first point
                                this.ctx.moveTo(rand1, y1);
                                rand2 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
                                y2 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
                                if (y2 > this.fullCanvasSize) {
                                    y2 = (this.fullCanvasSize - 10);
                                }
                                this.ctx.lineTo(rand2, y2);
                                this.setXYExtremes(rand2, y2, small);
                                rand3 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
                                y3 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
                                if (y3 > this.fullCanvasSize) {
                                    y3 = (this.fullCanvasSize - 10);
                                }
                                this.setXYExtremes(rand3, y3, small);
                                // third point completes second side
                                this.ctx.lineTo(rand3, y3);
                                heightLow = Math.max(y1, y3);
                                heightHigh = Math.min(y1, y3);
                                leftMost = Math.min(rand1, rand3);
                                rightMost = Math.max(rand1, rand3);
                                addToLeftMost = Math.random() * (rightMost - leftMost);
                                rand4 = leftMost + addToLeftMost;
                                y4 = heightLow - (Math.random() * (heightLow - heightHigh));
                                if (rand1 === leftMost && y1 === heightHigh && rand4 < rand2) {
                                    y4 = y1 + Math.random() * this.canvasSize;
                                }
                                if (y4 > this.fullCanvasSize) {
                                    y4 = (this.fullCanvasSize - 10);
                                }
                                this.setXYExtremes(rand4, y4, small);
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
                                ty1 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
                                ty2 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
                                // vertex one
                                if (ty1 > this.fullCanvasSize + this.ctx.lineWidth + this.offset_y) {
                                    ty1 = (this.fullCanvasSize - this.offset_y - this.ctx.lineWidth - 5);
                                }
                                this.ctx.moveTo(rand1, ty1);
                                this.setXYExtremes(0, ty1, small);
                                // vertex two
                                this.ctx.lineTo(rand2, rand1);
                                // this.ctx.stroke();
                                if (rand1 > this.fullCanvasSize) {
                                    rand1 = (this.fullCanvasSize - 10);
                                }
                                this.setXYExtremes(0, rand1, small);
                                if (ty2 > (this.fullCanvasSize + this.ctx.lineWidth + this.offset_y)) {
                                    ty2 = (this.fullCanvasSize - this.ctx.lineWidth - this.offset_y - 5);
                                }
                                // vertex three
                                this.ctx.lineTo(rand2, ty2);
                                this.setXYExtremes(0, ty2, small);
                                this.ctx.stroke();
                                this.ctx.lineTo(rand1, ty1);
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
                                rand1 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
                                rand = Math.floor(Math.random() * 2) + 1;
                                if (rand === 1) {
                                    rand2 = rand1 + 15;
                                }
                                else {
                                    rand2 = rand1 - 15;
                                }
                                ly1 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
                                ly2 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
                                this.setXYExtremes(rand1, ly1, small);
                                this.setXYExtremes(rand2, rand1, small);
                                this.setXYExtremes(rand2, ly2, small);
                                this.ctx.moveTo(rand1, ly1);
                                this.ctx.lineTo(rand2, rand1);
                                this.ctx.lineTo(rand2, ly2);
                                this.ctx.stroke();
                                // pythagorean theorem
                                currObjArea = this.ctx.lineWidth * (this.getDistance(rand1, ly1, rand2, rand1) + this.getDistance(rand2, rand1, rand2, ly2));
                                break;
                            case 'Circle':
                                radius = width / 2;
                                if (!this.forceBeginPath && (this.singleLayer)) {
                                }
                                else {
                                    this.ctx.beginPath();
                                }
                                if ((xPos - radius + this.offset_x - this.ctx.lineWidth) < 0) {
                                    if (this.offset_x < 0) {
                                        xPos = radius - this.offset_x + this.ctx.lineWidth + 5;
                                    }
                                    else {
                                        xPos = radius + this.ctx.lineWidth + 5;
                                    }
                                }
                                if ((yPos - radius + this.offset_y - this.ctx.lineWidth) < 0) {
                                    if (this.offset_y < 0) {
                                        yPos = radius - this.offset_y + this.ctx.lineWidth + 5;
                                    }
                                    else {
                                        yPos = radius + this.ctx.lineWidth + 5;
                                    }
                                }
                                this.ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI, false);
                                this.ctx.fill();
                                this.ctx.stroke();
                                this.setXYExtremes(width + xPos, width + yPos, small);
                                currObjArea = Math.PI * Math.pow(radius, 2);
                                // get better with calculating for circles
                                break;
                        }
                        if (this.patternFill) {
                            if (!this.patternFillSingleBegun && (this.isFrieze || this.isFriezeTwo || this.isTrunks || this.isArabesque || this.isMexico || this.isBedroom)) {
                            }
                            else {
                            }
                        }
                        this.aggrObjArea += currObjArea;
                        return [2 /*return*/];
                }
            });
        });
    };
    GeneratorComponent.prototype.renderImage = function (index, favorites) {
        // if((this.fullCanvasSize - this.rightmostPoint) < (this.fullCanvasSize - (this.canvasSize * 1.5)/2)) {
        var overflowX = this.rightmostPoint - (this.canvasSize + ((this.fullCanvasSize - this.canvasSize) / 2));
        var overflowY = this.lowestPoint - (this.canvasSize + ((this.fullCanvasSize - this.canvasSize) / 2));
        overflowY = 0;
        if (overflowX > ((this.fullCanvasSize - this.canvasSize) / 2)) {
            overflowX = ((this.fullCanvasSize - this.canvasSize) / 2);
        }
        if (overflowX > ((this.fullCanvasSize - this.canvasSize) / 2)) {
            overflowX = ((this.fullCanvasSize - this.canvasSize) / 2);
        }
        console.log('leftmost point', this.leftmostPoint, 'starting point', ((this.fullCanvasSize - this.canvasSize) / 2));
        var startingPointDiff = 0;
        if (this.leftmostPoint < ((this.fullCanvasSize - this.canvasSize) / 2)) {
            startingPointDiff = ((this.fullCanvasSize - this.canvasSize) / 2) - this.leftmostPoint;
            console.log('this.leftmost');
            if (this.leftmostPoint && startingPointDiff) {
                //  this.ctx.translate((startingPointDiff), (overflowY/2))
                //  this.ctxTwo.translate((startingPointDiff), (overflowY/2))
            }
        }
        else {
            overflowX = overflowX - ((this.leftmostPoint - ((this.fullCanvasSize - this.canvasSize) / 2)) * 2);
        }
        // this.ctx.translate((-overflowX/2), (overflowY/2))
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
            // this.ctxTwo.translate((overflowX/2), (-overflowY/2))
            if (this.leftmostPoint && startingPointDiff) {
                // this.ctxTwo.translate((-startingPointDiff), (overflowY/2))
            }
            this.ctxTwo.restore();
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
        this.saveImageFirebase.emit(imgObj);
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
        return __awaiter(this, void 0, void 0, function () {
            var tempRgb, complementaryColorArr, currRgb, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRandomRgb()];
                    case 1:
                        tempRgb = _a.sent();
                        complementaryColorArr = ['rgb(' + tempRgb.r + ',' + tempRgb.g + ',' + tempRgb.b + ')'];
                        currRgb = tempRgb;
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < 6)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getRandomRgb()];
                    case 3:
                        currRgb = _a.sent();
                        complementaryColorArr.push(this.convertToRgbString(currRgb));
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, complementaryColorArr];
                }
            });
        });
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
    //Adding hueShift 
    GeneratorComponent.prototype.hueShift = function (h, s) {
        h += s;
        while (h >= 360.0)
            h -= 360.0;
        while (h < 0.0)
            h += 360.0;
        return h;
    };
    //min max 
    GeneratorComponent.prototype.min3 = function (a, b, c) {
        return (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);
    };
    GeneratorComponent.prototype.max3 = function (a, b, c) {
        return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
    };
    GeneratorComponent.prototype.setLastImageColor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fac, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fac = new fast_average_color_1.default();
                        _a = this;
                        return [4 /*yield*/, fac.getColorAsync(this.currentImage)];
                    case 1:
                        _a.lastImageColor = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GeneratorComponent.prototype.getRandomRgb = function (isSecondSmallLayer, light, dark) {
        return __awaiter(this, void 0, void 0, function () {
            var num, r, g, b, retVal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        num = Math.round(0xffffff * Math.random());
                        r = num >> 16;
                        g = num >> 8 & 255;
                        b = num & 255;
                        if (!isSecondSmallLayer) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setLastImageColor()];
                    case 1:
                        _a.sent();
                        if ((this.lastImageColor.r + this.lastImageColor.g + this.lastImageColor.b) < 400) {
                            while (((r + g + b) < 620)) {
                                num = Math.round(0xffffff * Math.random());
                                r = num >> 16;
                                g = num >> 8 & 255;
                                b = num & 255;
                            }
                        }
                        else {
                            while (((r + g + b) > 120)) {
                                num = Math.round(0xffffff * Math.random());
                                r = num >> 16;
                                g = num >> 8 & 255;
                                b = num & 255;
                            }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        // if(light) { 
                        if (this.utilities.randomlyChooseTrueOrFalseThirdReal() && !light) {
                            while (((r + g + b) < 620)) {
                                num = Math.round(0xffffff * Math.random());
                                r = num >> 16;
                                g = num >> 8 & 255;
                                b = num & 255;
                            }
                        }
                        else {
                            while (((r + g + b) < 620) && ((((r + g + b) > 220) || ((r + g + b) < 120)))) {
                                num = Math.round(0xffffff * Math.random());
                                r = num >> 16;
                                g = num >> 8 & 255;
                                b = num & 255;
                            }
                        }
                        if (light) {
                            while (((r + g + b) < 620)) {
                                num = Math.round(0xffffff * Math.random());
                                r = num >> 16;
                                g = num >> 8 & 255;
                                b = num & 255;
                            }
                        }
                        if (dark) {
                            while (((r + g + b) > 220) || ((r + g + b) < 120)) {
                                num = Math.round(0xffffff * Math.random());
                                r = num >> 16;
                                g = num >> 8 & 255;
                                b = num & 255;
                            }
                        }
                        _a.label = 3;
                    case 3:
                        retVal = { 'r': r, 'g': g, 'b': b };
                        return [2 /*return*/, retVal];
                }
            });
        });
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