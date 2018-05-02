webpackJsonp([1,4],{

/***/ 290:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 290;


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(401);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 399:
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

var AppComponent = (function () {
    function AppComponent() {
        this.objNum = 10;
        this.colorSchemes = ['Monchromatic', 'Complementary', 'Analogous', 'Color Triad', 'Color Tetrad',
            'Split Complementary'];
        this.shapeArr = ['Rectangle', 'Triangle', 'Circle'];
        this.recursionStep = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var canvas = document.getElementById("myCanvas");
        var randomScheme = this.colorSchemes[Math.floor(Math.random() * this.colorSchemes.length)];
        var num = 0;
        while (num < this.objNum) {
            var ctx = canvas.getContext("2d");
            var colorArr = this.genColors('Complementary');
            var randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];
            var randomA = Math.random() * 1;
            randomColor = randomColor.substring(0, randomColor.length - 1) + ',' + randomA + ")";
            var randomShape = this.shapeArr[Math.floor(Math.random() * this.shapeArr.length)];
            ctx.fillStyle = randomColor;
            var compl = this.getComplementary(this.convertFromRgbStringToObj(randomColor));
            console.log('test', compl);
            // newCompl =  this.convertToRgbString(compl);
            var red = compl.r;
            var green = compl.g;
            var blue = compl.b;
            ctx.strokeStyle = this.rgbToHex(red, green, blue);
            console.log('test', this.rgbToHex(red, green, blue));
            ctx.lineWidth = Math.random() * 10;
            var xPos = Math.random() * 900;
            var yPos = Math.random() * 900;
            var height = Math.random() * 900;
            var width = Math.random() * 900;
            switch (randomShape) {
                case 'Rectangle':
                    ctx.fillRect(xPos, yPos, width, height);
                    ctx.strokeRect(xPos, yPos, width, height);
                    break;
                case 'Triangle':
                    ctx.beginPath();
                    var rand1 = Math.random() * 900;
                    var rand2 = Math.random() * 900;
                    ctx.moveTo(rand1, Math.random() * 900);
                    ctx.lineTo(rand2, rand1);
                    ctx.lineTo(rand2, Math.random() * 900);
                    ctx.fill();
                    ctx.stroke();
                    break;
                case 'Circle':
                    var centerX = Math.random() * 900;
                    var centerY = Math.random() * 900;
                    var radius = Math.random() * 450;
                    ctx.beginPath();
                    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
                    ctx.fill();
                    ctx.stroke();
                    break;
            }
            num++;
        }
    };
    AppComponent.prototype.componentToHex = function (c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };
    AppComponent.prototype.rgbToHex = function (r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    };
    AppComponent.prototype.genColors = function (scheme) {
        switch (scheme) {
            case 'Monchromatic':
                return [];
            case 'Complementary':
                return this.getComplementaryScheme();
            case 'Analogous':
                return [];
            case 'Color Triad':
                return [];
            case 'Color Tetrad':
                return [];
            case 'Split Complementary':
                return [];
        }
    };
    AppComponent.prototype.getMono = function () {
    };
    AppComponent.prototype.randomRgb = function () {
        var num = Math.round(0xffffff * Math.random());
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        return { 'r': r, 'g': g, 'b': b };
    };
    AppComponent.prototype.getComplementaryScheme = function () {
        var tempRgb = this.randomRgb();
        var complementaryColorArr = ['rgb(' + tempRgb.r + ',' + tempRgb.g + ',' + tempRgb.b + ')'];
        this.recursionStep = 0;
        var currRgb = tempRgb;
        while (this.recursionStep <= this.objNum) {
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
        console.log('r', r);
        console.log('g', g);
        console.log('b', b);
        return { 'r': r, 'g': g, 'b': b };
    };
    AppComponent.prototype.getComplementary = function (rgb) {
        // complement
        var temphsv = this.RGB2HSV(rgb);
        temphsv.hue = this.HueShift(temphsv.hue, 180.0);
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
    //Adding HueShift via Jacob (see comments)
    AppComponent.prototype.HueShift = function (h, s) {
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
    AppComponent.prototype.getColorTriad = function () {
    };
    AppComponent.prototype.getColorTetrad = function () {
    };
    AppComponent.prototype.getSplitComplementary = function () {
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

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(399);
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

/***/ 401:
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

module.exports = "<!-- <h1>\n  {{title}}\n</h1> -->\n<canvas id=\"myCanvas\" width=\"900\" height=\"900\"\nstyle=\"margin: auto;\">\nYour browser does not support the canvas element.\n</canvas>\n"

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(291);


/***/ })

},[472]);
//# sourceMappingURL=main.bundle.js.map