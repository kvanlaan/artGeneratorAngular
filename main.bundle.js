webpackJsonp([1,4],{

/***/ 291:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 291;


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(402);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var tinycolor;
var ColorScheme;
var AppComponent = (function () {
    function AppComponent() {
        this.objNum = 23;
        this.canvasSize = 800;
        this.maxArea = (800 * 800);
        // colorSchemes = ['Monchromatic', 'Complementary', 'Analogous', 'Triad', 'Tetrad',
        //   'Split Complementary'];
        this.colorSchemes = ['Monochromatic', 'Complementary', 'Random'];
        this.shapeArr = ['Rectangle', 'Triangle', 'Circle'];
        this.recursionStep = 0;
        this.aggrObjArea = 0;
        this.redoList = [];
        this.undoList = [];
        this.disableRedo = true;
        this.disableUndo = true;
    }
    AppComponent.prototype.getRandomArt = function (clear) {
        this.aggrObjArea = 0;
        this.objNum = Math.floor(Math.random() * 23) + 10;
        if (clear) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        var randomScheme = this.colorSchemes[Math.floor(Math.random() * this.colorSchemes.length)];
        randomScheme = "Random";
        var num = 0;
        var colorArr = this.genColors("Random");
        var randomColor = colorArr[Math.floor(Math.random() * (colorArr.length - 1))];
        var randomB = Math.random() * 1;
        console.log('colorArr', colorArr);
        console.log('randomColor before', randomColor);
        randomColor = randomColor.substring(0, randomColor.length - 1) + ',' + randomB + ")";
        console.log('random past');
        this.ctx.fillStyle = randomColor;
        // var rand = Math.floor(Math.random() * 2) + 1;
        // if(rand === 1) {
        // ctx.fillStyle = 'black';
        // } else {
        //   ctx.fillStyle = 'white';
        // }
        // ctx.fillRect(0, 0, canvas.width, canvas.height);
        while (num <= 10) {
            var randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];
            var randomStrokeOpacity = Math.random() * 1;
            var randomShapeOpacity = Math.random() * 1;
            var randomShape = this.shapeArr[Math.floor(Math.random() * this.shapeArr.length)];
            var stroke = this.getStroke(randomScheme, randomColor);
            if (randomScheme === 'Complementary') {
                var complStroke = colorArr[Math.floor(Math.random() * colorArr.length)];
                this.ctx.strokeStyle = complStroke.substring(0, complStroke.length - 1) + ',' + randomStrokeOpacity + ")";
            }
            else if (randomScheme !== 'Monochromatic') {
                console.log('setting stroke to color', randomScheme);
                this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
            }
            else {
                console.log('setting stroke to black', randomScheme);
                this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
            }
            var rand = Math.floor(Math.random() * 2) + 1;
            if (rand === 1) {
                this.ctx.strokeStyle = 'black';
            }
            console.log('random color', randomColor);
            randomColor = randomColor.substring(0, randomColor.length - 1) + ',' + randomShapeOpacity + ")";
            console.log('here past error');
            this.ctx.fillStyle = randomColor;
            this.ctx.lineWidth = Math.random() * 10;
            this.drawShape(randomShape, true);
            num++;
        }
        num = 0;
        while (num < this.objNum) {
            var randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];
            var randomStrokeOpacity = Math.random() * 1;
            var randomShapeOpacity = Math.random() * 1;
            var randomShape = this.shapeArr[Math.floor(Math.random() * this.shapeArr.length)];
            // var randomAC = Math.random() * 1;
            var stroke = this.getStroke(randomScheme, randomColor);
            if (randomScheme === 'Complementary') {
                var complStroke = colorArr[Math.floor(Math.random() * colorArr.length)];
                this.ctx.strokeStyle = complStroke.substring(0, complStroke.length - 1) + ',' + randomStrokeOpacity + ")";
            }
            else if (randomScheme !== 'Monochromatic') {
                this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
            }
            else {
                // ctx.strokeStyle = stroke.substring(0, stroke.length - 1) + ',' + randomA + ")";
                // this.ctx.strokeStyle = 'black';
                this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
            }
            var rand = Math.floor(Math.random() * 2) + 1;
            if (rand === 1) {
                this.ctx.strokeStyle = 'black';
            }
            randomColor = randomColor.substring(0, randomColor.length - 1) + ',' + randomShapeOpacity + ")";
            this.ctx.fillStyle = randomColor;
            this.ctx.lineWidth = Math.random() * 10;
            this.drawShape(randomShape);
            num++;
        }
        this.saveArt(clear);
    };
    AppComponent.prototype.saveArt = function (clear) {
        if (clear) {
            this.undoList = [];
            this.redoList = [];
        }
        this.undoList.push(this.canvas.toDataURL());
        this.redoList = [];
        this.disableCheck();
    };
    AppComponent.prototype.undo = function () {
        if (this.undoList.length > 1) {
            var redoState = this.undoList.pop();
            this.redoList.push(redoState);
            var restoreState = this.undoList[this.undoList.length - 1];
            var img = new Image();
            img.src = restoreState;
            this.ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);
            img.onload = function () {
                this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
            }.bind(this);
        }
        this.disableCheck();
    };
    AppComponent.prototype.disableCheck = function () {
        if (this.redoList.length === 0) {
            this.disableRedo = true;
        }
        else {
            this.disableRedo = false;
        }
        if (this.undoList.length <= 1) {
            this.disableUndo = true;
        }
        else {
            this.disableUndo = false;
        }
    };
    AppComponent.prototype.redo = function () {
        if (this.redoList.length) {
            var restoreState = this.redoList.pop();
            var img = new Image();
            img.src = restoreState;
            this.ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);
            img.onload = function () {
                this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
                this.undoList.push(this.canvas.toDataURL());
            }.bind(this);
        }
        this.disableCheck();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.getRandomArt(true);
    };
    AppComponent.prototype.drawShape = function (shape, small) {
        var xPos = Math.random() * this.canvasSize;
        var yPos = Math.random() * this.canvasSize;
        var height = Math.random() * this.canvasSize;
        var width = Math.random() * this.canvasSize;
        var currObjArea = height * width;
        if (small || (this.aggrObjArea + currObjArea) >= this.maxArea) {
            height = Math.random() * this.canvasSize / 25;
            var width = Math.random() * this.canvasSize / 25;
            currObjArea = height * width;
        }
        if (small) {
            var xPos = Math.random() * this.canvasSize / 2;
            var yPos = (Math.random() * this.canvasSize) + (this.canvasSize / 2);
        }
        this.aggrObjArea += currObjArea;
        switch (shape) {
            case 'Rectangle':
                this.ctx.fillRect(xPos, yPos, width, height);
                this.ctx.strokeRect(xPos, yPos, width, height);
                break;
            case 'Triangle':
                this.ctx.beginPath();
                var rand1 = Math.random() * this.canvasSize;
                var rand2 = Math.random() * this.canvasSize;
                this.ctx.moveTo(rand1, Math.random() * this.canvasSize);
                this.ctx.lineTo(rand2, rand1);
                this.ctx.lineTo(rand2, Math.random() * this.canvasSize);
                this.ctx.fill();
                this.ctx.stroke();
                break;
            case 'Circle':
                var radius = width / 2;
                this.ctx.beginPath();
                this.ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI, false);
                this.ctx.fill();
                this.ctx.stroke();
                break;
        }
    };
    AppComponent.prototype.getStroke = function (scheme, color) {
        switch (scheme) {
            case 'Random':
                return this.getRandomRgb();
            case 'Monochromatic':
                return this.getRandomRgb();
            case 'Complementary':
                return this.getComplementary(this.convertFromRgbStringToObj(color));
            case 'Analogous':
                return [];
            case 'Color Triad':
                return [];
            case 'Tetrad':
                return this.getRandomRgb();
            case 'Split Complementary':
                return [];
        }
    };
    AppComponent.prototype.componentToHex = function (c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };
    //BBOOK WUZ HERE
    AppComponent.prototype.rgbToHex = function (r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    };
    AppComponent.prototype.genColors = function (scheme) {
        switch (scheme) {
            case 'Random':
                return this.getRandom();
            case 'Monochromatic':
                return this.getMono();
            case 'Complementary':
                return this.getComplementaryScheme();
            case 'Analogous':
                return [];
            case 'Color Triad':
                return [];
            case 'Tetrad':
                return this.getTetrad();
            case 'Split Complementary':
                return [];
        }
    };
    AppComponent.prototype.getMono = function () {
        this.recursionStep = 0;
        var tempRgb = this.getRandomRgb();
        var tempRgbString = 'rgb(' + tempRgb.r + ',' + tempRgb.g + ',' + tempRgb.b + ')';
        var monoColorArr = [];
        while (this.recursionStep <= (this.objNum + 600)) {
            monoColorArr.push(tempRgbString);
            this.recursionStep++;
        }
        return monoColorArr;
    };
    AppComponent.prototype.getRandom = function () {
        this.recursionStep = 0;
        var colorArr = [];
        while (this.recursionStep <= this.objNum + 1) {
            var tempRgb = this.getRandomRgb();
            var tempRgbString = 'rgb(' + tempRgb.r + ',' + tempRgb.g + ',' + tempRgb.b + ')';
            colorArr.push(tempRgbString);
            this.recursionStep++;
        }
        return colorArr;
    };
    AppComponent.prototype.getRandomRgb = function () {
        var num = Math.round(0xffffff * Math.random());
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        return { 'r': r, 'g': g, 'b': b };
    };
    AppComponent.prototype.getComplementaryScheme = function () {
        var tempRgb = this.getRandomRgb();
        var complementaryColorArr = ['rgb(' + tempRgb.r + ',' + tempRgb.g + ',' + tempRgb.b + ')'];
        this.recursionStep = 0;
        var currRgb = tempRgb;
        while (this.recursionStep <= (this.objNum + 200)) {
            // recursion
            currRgb = this.getComplementary(currRgb);
            complementaryColorArr.push(this.convertToRgbString(currRgb));
            this.recursionStep++;
        }
        return complementaryColorArr;
    };
    AppComponent.prototype.convertToRgbString = function (rgbObj) {
        return 'rgb(' + rgbObj.r + ',' + rgbObj.g + ',' + rgbObj.b + ')';
    };
    AppComponent.prototype.convertFromRgbStringToObj = function (rgbString) {
        var rgbStringArr = rgbString.split(',');
        var r = rgbStringArr[0].substring(4);
        r = r.substring(0, r.length - 1);
        var g = rgbStringArr[1];
        g = g.substring(0, g.length - 1);
        var b = rgbStringArr[2];
        b = b.substring(0, b.length - 1);
        return { 'r': r, 'g': g, 'b': b };
    };
    AppComponent.prototype.getComplementary = function (rgb) {
        var temphsv = this.RGB2HSV(rgb);
        temphsv.hue = this.hueShift(temphsv.hue, 180.0);
        var finRgb = this.HSV2RGB(temphsv);
        return finRgb;
    };
    AppComponent.prototype.RGB2HSV = function (rgb) {
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
    AppComponent.prototype.HSV2RGB = function (hsv) {
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
    AppComponent.prototype.hueShift = function (h, s) {
        h += s;
        while (h >= 360.0)
            h -= 360.0;
        while (h < 0.0)
            h += 360.0;
        return h;
    };
    //min max via Hairgami_Master (see comments)
    AppComponent.prototype.min3 = function (a, b, c) {
        return (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);
    };
    AppComponent.prototype.max3 = function (a, b, c) {
        return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
    };
    AppComponent.prototype.getAnalogous = function () {
    };
    AppComponent.prototype.getTriad = function () {
    };
    AppComponent.prototype.getTetrad = function () {
        var scheme = new ColorScheme;
        scheme.from_hue(21)
            .scheme('tetrad')
            .variation('soft');
        var colors = scheme.colors();
        return colors;
    };
    AppComponent.prototype.getSplitComplementary = function () {
    };
    AppComponent.prototype.saveImage = function (link) {
        link.href = this.canvas.toDataURL();
        link.download = 'test.png';
    };
    AppComponent.prototype.download = function (element) {
        element.href = this.canvas.toDataURL();
        return;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(457),
            styles: [__webpack_require__(455)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(400);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(189)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

module.exports = "<!-- <h1>\n  {{title}}\n</h1> -->\n<button (click)=\"getRandomArt(true)\" style=\"margin-bottom: auto\" class=\"float-left inline\">Get New Art</button>\n<button (click)=\"getRandomArt(false)\" style=\"margin-bottom: auto\" class=\"float-left inline\">Add New Layer</button>\n<button [disabled]=\"disableUndo\" (click)=\"undo()\" style=\"margin-bottom: auto\" class=\"float-left inline\">Undo Layer</button>\n<button  [disabled]=\"disableRedo\" (click)=\"redo()\" style=\"margin-bottom: auto\" class=\"float-left inline\">Redo Layer</button>\n<button style=\"margin-bottom: auto\" class=\"float-left inline\"><a class=\"float-left inline\" href=\"#\" target=\"_blank\" #downloadLink (click)=\"download(downloadLink)\" download=\"test.jpg\">\n Save this art! </a></button>\n<br>\n<canvas id=\"myCanvas\" width=\"800\" height=\"800\" style=\"display: inline; margin-left: auto; margin-right: auto\">\nYour browser does not support the canvas element.\n</canvas>\n"

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(292);


/***/ })

},[472]);
//# sourceMappingURL=main.bundle.js.map