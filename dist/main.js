(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-click {\n    pointer-events: none;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlexFill>\n  <div fxLayout=\"row\" fxLayoutWrap>\n    <div fxFlex=\"40\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxFlexOffset=\"5\" fxLayoutAlign=\"start center\">\n      <div class=\"material-text\" fxFlex fxLayoutAlign=\"start center\">Art Generator</div>\n      <div fxFlex class=\"material-text\" style=\"font-size: 14px !important\" fxShow=\"true\" fxShow.md=\"false\" fxShow.sm=\"false\" fxShow.xs=\"false\"\n        fxLayoutAlign=\"end center\">Each piece is algorithmically unique.</div>\n    </div>\n\n    <div fxFlex>\n      <div fxFlex fxFlexOffset=\"7\" fxShow=\"true\" fxLayoutGap=\"5px\" fxShow.md=\"false\" fxShow.sm=\"false\" fxShow.xs=\"false\" fxLayoutAlign=\"start center\">\n        <button matTooltip=\"Customize Patterns\" matTooltipPosition=\"right\" [disabled]=\"!renderDone\" (click)=\"getRandomArt(true)\"\n          class=\"float-left inline\" mat-raised-button>\n          Get New Art</button>\n        <a href=\"#\" target=\"_blank\" class=\"float-left inline\" #downloadLink (click)=\"download(downloadLink)\" download=\"art.jpg\">\n          <button [disabled]=\"!renderDone\" mat-stroked-button>\n            Save this art\n          </button>\n        </a>\n      </div>\n      <div fxFlex fxShow=\"true\" fxLayoutAlign=\"end center\">\n        <button matTooltip=\"Customize Patterns\" matTooltipPosition=\"right\" [fxShow]=\"!login\" (click)=\"openLoginModal()\" mat-stroked-button>\n          <span> Sign In </span>\n        </button>\n        <span *ngIf=\"login\" fxLayoutAlign=\"horizontal center\" fxLayoutGap=\"5px\">\n          <span>{{email}}</span>\n          <button fxFlex=\"5\" (click)=\"signOut()\" fxShow.md=\"false\" fxShow.sm=\"false\" fxShow.xs=\"false\" mat-stroked-button>\n            <span> Sign Out </span>\n          </button>\n        </span>\n      </div>\n      <div fxFlex=\"6\"></div>\n    </div>\n  </div>\n  <div fxFlexOffset=\"2\" fxLayout=\"row\" fxShow=\"false\" fxShow.md=\"true\" fxShow.sm=\"true\" fxShow.xs=\"true\" fxLayoutWrap>\n    <div fxFlex fxFlexOffset=\"5\" fxLayoutAlign=\"start center\"> Each piece is algorithmically unique.</div>\n    <div fxFlex=\"20\" fxLayoutAlign=\"end center\">\n\n\n      <button *ngIf=\"login\" fxFlex=\"5\" (click)=\"signOut()\" mat-stroked-button>\n        <span> Sign Out </span>\n      </button>\n\n    </div>\n  </div>\n  <div fxFlexOffset=\"0\" fxLayout=\"row\" fxShow=\"false\" fxShow.md=\"true\" fxShow.sm=\"true\" fxShow.xs=\"true\" fxLayoutWrap>\n    <div fxFlexOffset=\"4\" fxFlex=\"60\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5\">\n      <button [disabled]=\"!renderDone\" (click)=\"getRandomArt(true)\" class=\"float-left inline\" mat-stroked-button>\n        Get New Art</button>\n      <a href=\"#\" target=\"_blank\" class=\"inline\" #downloadLinkTwo (click)=\"download(downloadLinkTwo)\" download=\"art.jpg\">\n\n        <button [disabled]=\"!renderDone\" mat-stroked-button>\n          Save this art\n        </button>\n      </a>\n    </div>\n    <div fxFlex=\"40\" fxLayoutAlign=\"end center\">\n\n    </div>\n  </div>\n\n  <div fxFlexOffset=\"0\" fxLayout=\"row\" fxShow=\"false\" fxShow.md=\"true\" fxShow.sm=\"true\" fxShow.xs=\"true\" fxLayoutWrap fxLayoutGap=\"5px\"\n    fxLayoutAlign=\"start center\">\n    <div fxFlexOffset=\"4\" fxLayoutAlign=\"start center\">\n      <span (click)=\"filterFavorites()\" class=\"hover-red\">\n        <i class=\"material-icons\">\n          filter_list\n        </i>\n\n        <i [fxShow]=\"showFavorites\" class=\"material-icons\">\n          favorite\n        </i>\n        <i [fxShow]=\"!showFavorites\" class=\"material-icons\">\n          favorite_border\n        </i>\n      </span>\n    </div>\n\n    <!-- <mat-slide-toggle [@.disabled]=\"true\" [checked]=\"true\" (dragChange)=\"toggleImages($event)\"></mat-slide-toggle> -->\n\n    <!-- <mat-slide-toggle [checked]=\"customImagesActive\" (dragChange)=\"toggleImages($event)\"></mat-slide-toggle> -->\n    <span *ngIf=\"ready\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n      <span *ngFor=\"let customImage of customImages; let i = index\" [ngStyle]=\"{'background-image': 'url(' + this.customImages[i]?.src + ')'}\"\n        class=\"tile\">\n        <input #fileInput class=\"file-input\" type=\"file\" multiple (change)=\"uploadCustomImage(i, $event)\">\n        <span class=\"upload hover\" fxLayoutAlign=\"center end\">\n          <i [fxShow]=\"customImage.ready\" class=\"material-icons heart margin-top-auto bottom-0\">\n            arrow_upward\n          </i>\n        </span>\n        <span [fxShow]=\"!customImage.ready\" class=\"upload\" fxLayoutAlign=\"center end\">\n          <div class=\"margin-auto loader small\"></div>\n        </span>\n        <span [fxShow]=\"customImage.fileTooBig\" class=\"upload warning\" fxLayoutAlign=\"end center\" fxLayout=\"column\">\n          <i class=\"material-icons heart margin-top-auto bottom-0\">\n            warning\n          </i>\n        </span>\n      </span>\n    </span>\n  </div>\n\n  <div class=\"min-height-450\" fxLayout=\"row\" fxFlexOffset.md=\"5\" fxFlexOffset.sm=\"5\" fxFlexOffset.xs=\"5\" fxLayout.md=\"column\"\n    fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\">\n    <div class=\"relative overflow-scroll\" fxFlex=\"40\" fxFlexOffset.xl=\"5\" fxFlexOffset.md=\"5\" fxFlexOffset.lg=\"5\" fxFlexOffset.md=\"0\"\n      fxFlexOffset.sm=\"0\" fxFlex.md=\"25\" fxFlex.sm=\"20\" fxFlex.xs=\"20\">\n      <mat-grid-list *ngIf=\"!showFavorites\" class=\"canvas-height\" cols=\"5\" rows=\"5\" gutterSize=\"5px\">\n        <div [fxShow]=\"!imagePopulationDone\" #loaderCanvas class=\"absolute margin-auto loader\">\n        </div>\n        <mat-grid-tile fxLayout=\"row\" *ngFor=\"let savedImg of savedImageArr; let i = index;\">\n          <img class=\"on-hover-outline height-100 width-100 float-left\" [ngClass]=\"{'selected': i === currImageIndex}\" (click)=\"renderImage(i)\"\n            [(src)]=\"savedImageArr[i]['src']\" />\n          <span class=\"img-action-buttons\" fxLayout=\"row\">\n            <span [fxShow.lg]=\"true\" [fxShow.md]=\"true\" [fxShow.sm]=\"false\" [fxShow.xs]=\"false\">\n              <i (click)=\"openDeleteDialog(savedImg, i)\" class=\"material-icons on-hover-trash heart\">\n                delete\n              </i>\n              <i (click)=\"saveToFavorites(savedImg, i)\" class=\"material-icons on-hover-trash heart\" [ngClass]=\"{\n                  'show': savedImg.favorite \n                }\">\n                favorite\n              </i>\n            </span>\n\n            <span [fxShow.xl]=\"false\" [fxShow.lg]=\"false\" [fxShow.md]=\"false\" [fxShow.sm]=\"true\" [fxShow.xs]=\"true\">\n              <i (click)=\"openDeleteDialog(savedImg, i)\" class=\"material-icons heart\">\n                delete_outline\n              </i>\n              <i (click)=\"saveToFavorites(savedImg, i)\" class=\"material-icons heart\">\n                {{ savedImg.favorite ? 'favorite' : 'favorite_border'}}\n              </i>\n            </span>\n          </span>\n        </mat-grid-tile>\n\n      </mat-grid-list>\n\n      <mat-grid-list *ngIf=\"showFavorites\" [ngClass]=\"{'no-click': !showFavorites}\" class=\"canvas-height\" cols=\"5\" rows=\"5\" gutterSize=\"5px\">\n        <mat-grid-tile *ngFor=\"let savedImg of favoritesArr; let i = index;\">\n\n          <img class=\"on-hover-outline height-100 width-100 float-left\" [ngClass]=\"{\n                  'selected': i === currImageIndex\n                }\" (click)=\"renderImage(i)\" [(src)]=\"savedImg.src\" />\n          <span class=\"img-action-buttons\" fxLayout=\"row\">\n\n            <span [fxShow.lg]=\"true\" [fxShow.md]=\"true\" [fxShow.sm]=\"false\" [fxShow.xs]=\"false\">\n\n              <!-- <i (click)=\"openDeleteDialog(savedImg, i)\" class=\"material-icons on-hover-trash\">\n                delete\n              </i> -->\n              <i (click)=\"saveToFavoritesFromFavorite(savedImg, i)\" class=\"material-icons on-hover-trash heart\" [ngClass]=\"{\n                          'show': savedImg.favorite \n                        }\">\n                favorite\n              </i>\n            </span>\n\n\n            <span [fxShow.lg]=\"false\" [fxShow.md]=\"false\" [fxShow.sm]=\"true\" [fxShow.xs]=\"true\">\n              <i (click)=\"openDeleteDialog(savedImg, i)\" class=\"material-icons\">\n                delete_outline\n              </i>\n              <i (click)=\"saveToFavorites(savedImg, i)\" class=\"material-icons heart\">\n                {{ savedImg.favorite ? 'favorite' : 'favorite_border'}}\n              </i>\n            </span>\n          </span>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n    <div fxFlex>\n      <span class=\"text-align-left\" fxFlex=\"7\" fxShow.md=\"false\" fxShow.sm=\"false\" fxShow.xs=\"false\" [fxShow]=\"ready\" fxLayout=\"column\"\n        fxLayoutAlign=\"start center\" fxLayoutGap=\"9px\">\n\n        <span class=\"material-text float-left text-align-center\" fxShow.lg=\"true\" fxShow.md=\"false\" fxShow.sm=\"false\" fxShow.xs=\"false\"\n          (click)=\"filterFavorites()\"><i class=\"material-icons\">\n            filter_list\n          </i>\n\n          <i [fxShow]=\"showFavorites\" class=\"material-icons\">\n            favorite\n          </i>\n          <i [fxShow]=\"!showFavorites\" class=\"material-icons\">\n            favorite_border\n          </i>\n        </span>\n        <mat-slide-toggle matTooltip=\"Customize Patterns\" tool-tip=\"Customize Patterns\" [checked]=\"customImagesActive\" (change)=\"toggleImages()\"></mat-slide-toggle>\n        <span *ngIf=\"ready\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n          <span *ngFor=\"let customImage of customImages; let i = index\" [ngStyle]=\"{'background-image': 'url(' + this.customImages[i]?.src + ')'}\"\n            class=\"tile\">\n            <input #fileInput class=\"file-input\" type=\"file\" multiple (change)=\"uploadCustomImage(i, $event)\">\n            <span class=\"upload hover\" fxLayoutAlign=\"center end\">\n              <i [fxShow]=\"customImage.ready\" class=\"material-icons heart margin-top-auto bottom-0\">\n                arrow_upward\n              </i>\n            </span>\n            <span [fxShow]=\"!customImage.ready\" class=\"upload\" fxLayoutAlign=\"center end\">\n              <div class=\"margin-auto loader small\"></div>\n            </span>\n            <span [fxShow]=\"customImage.fileTooBig\" class=\"upload warning\" fxLayoutAlign=\"end center\" fxLayout=\"column\">\n              <i class=\"material-icons heart margin-top-auto bottom-0\">\n                warning\n              </i>\n            </span>\n          </span>\n        </span>\n      </span>\n      <generator (updateCurrentIndex)=\"updateCurrentIndex($event)\" [currImageIndex]=\"currImageIndex\" [customImagesActive]=\"customImagesActive\"\n        [customImages]=\"customImages\" [savedImageArr]=\"savedImageArr\" [favoritesArr]=\"favoritesArr\" (saveImageFirebase)=\"saveImageFirebase($event)\"\n        (renderDoneEmit)=\"setRenderDone(true)\"></generator>\n    </div>\n  </div>\n  <div fxLayout=\"row\" fxShow=\"true\" fxShow.md=\"false\" fxShow.sm=\"false\" fxShow.xs=\"false\" fxLayoutAlign=\"start start\">\n    <span class=\"material-text\" fxFlexOffset=\"5\" style=\"font-size: 14px !important\">art and code by <a href=\"https://github.com/kvanlaan\"\n        class=\"name\" target=\"_blank\"> Katrina Van Laan</a></span>\n  </div>\n</div>\n<div [fxShow]=\"!ready\" class=\"absolute margin-auto loader\">\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: LoginDialogComponent, DeleteDialogComponent, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialogComponent", function() { return LoginDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebaseui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebaseui */ "./node_modules/firebaseui/dist/npm.js");
/* harmony import */ var firebaseui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebaseui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _generator_generator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generator/generator.component */ "./src/app/generator/generator.component.ts");
/* harmony import */ var _generator_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generator/utilities */ "./src/app/generator/utilities.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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










var LoginDialogComponent = /** @class */ (function () {
    function LoginDialogComponent() {
    }
    LoginDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login.component.html")
        })
    ], LoginDialogComponent);
    return LoginDialogComponent;
}());

var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent() {
    }
    DeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./delete.component.html */ "./src/app/delete.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());

var AppComponent = /** @class */ (function () {
    function AppComponent(http, utilities, dialog, location) {
        this.http = http;
        this.utilities = utilities;
        this.dialog = dialog;
        this.location = location;
        this.currImageIndex = 0;
        this.customImages = [{ 'name': 'uploadCustom1', 'crossOrigin': "Anonymous", 'src': 'assets/arabesque_pattern.jpg', 'ready': true, 'fileTooBig': false },
            { 'name': 'uploadCustom2', 'crossOrigin': "Anonymous", 'src': 'assets/kosovo_map.jpg', 'ready': true, 'fileTooBig': false },
            { 'name': 'uploadCustom3', 'crossOrigin': "Anonymous", 'src': 'assets/frieze.jpg', 'ready': true, 'fileTooBig': false },
            { 'name': 'uploadCustom4', 'crossOrigin': "Anonymous", 'src': 'assets/mexico_flag.jpg', 'ready': true, 'fileTooBig': false },
            { 'name': 'uploadCustom5', 'crossOrigin': "Anonymous", 'src': 'assets/van.jpg', 'ready': true, 'fileTooBig': false },
            { 'name': 'uploadCustom6', 'crossOrigin': "Anonymous", 'src': 'assets/trunks.png', 'ready': true, 'fileTooBig': false }
        ];
        this.displayName = '';
        this.email = '';
        this.imagesActive = false;
        this.imagePopulationDone = true;
        this.login = false;
        this.newUser = false;
        this.suffix = '';
        this.ready = false;
        this.renderDone = false;
        this.shapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
        this.showFavorites = false;
        this.savedImageArr = [];
        this.darkDatabaseList = [];
        this.customImagesActive = false;
        this.utilities = utilities;
        this.location = location;
    }
    AppComponent.prototype.handlekeydown = function (e) {
        var currIndex = this.currImageIndex;
        if (e.keyCode === 39) {
            if ((currIndex + 1) < this.savedImageArr.length) {
                this.currImageIndex++;
                this.renderImage(this.currImageIndex);
            }
        }
        if (e.keyCode === 40) {
            if (currIndex + 5 < this.savedImageArr.length) {
                this.currImageIndex = currIndex + 5;
                this.renderImage(this.currImageIndex);
            }
        }
        if (e.keyCode === 38) {
            if (currIndex - 5 >= 0) {
                this.currImageIndex = currIndex - 5;
                this.renderImage(this.currImageIndex);
            }
        }
        if (e.keyCode === 37) {
            if (currIndex - 1 >= 0) {
                this.currImageIndex--;
                this.renderImage(this.currImageIndex);
            }
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var config, settings;
            return __generator(this, function (_a) {
                this.renderDone = false;
                config = {
                    apiKey: "AIzaSyD98GbUHORmW3-C9nxvqboQLapTXxnSMM0",
                    authDomain: "artgenerator-8008a.firebaseapp.com",
                    databaseURL: "https://artgenerator-8008a.firebaseio.com",
                    projectId: "artgenerator-8008a",
                    storageBucket: "artgenerator-8008a.appspot.com",
                    messagingSenderId: "858892303412"
                };
                firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"](config);
                this.database = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
                settings = { timestampsInSnapshots: true };
                this.database.settings(settings);
                this.ui = new firebaseui__WEBPACK_IMPORTED_MODULE_3__["auth"].AuthUI(firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]());
                this.user = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
                // this.getDarkPatterns();
                firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    this.user = user;
                                    if (!this.user) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.handleSignedInUser()];
                                case 1:
                                    _a = _b.sent();
                                    return [3 /*break*/, 4];
                                case 2: return [4 /*yield*/, this.handleSignedOutUser()];
                                case 3:
                                    _a = _b.sent();
                                    _b.label = 4;
                                case 4:
                                    _a;
                                    return [2 /*return*/];
                            }
                        });
                    });
                }.bind(this));
                return [2 /*return*/];
            });
        });
    };
    // getDarkPatterns() {
    //   if (this.darkDatabaseList.length === 0) {
    //     return new Promise(resolve => {
    //       this.http.get('http://localhost:4201/artImages').subscribe(function (this, res: any) {
    //         res.forEach(function (this, item) {
    //           if (item["metadata"]["name"].indexOf('dark') > -1) {
    //             this.darkDatabaseList.push(item["metadata"]["name"]);
    //           } 
    //         }.bind(this));
    //         // this.patternDatabaseList = res.map(function (item) { return item["metadata"]["name"]; });
    //         resolve();
    //       }.bind(this))
    //     });
    //   }
    //   return;
    // }
    AppComponent.prototype.openLoginDialog = function () {
        this.dialogRef = this.dialog.open(LoginDialogComponent, {
            width: '300px'
        });
        this.dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    AppComponent.prototype.openDeleteDialog = function (imgObj, index) {
        var _this = this;
        if (!document.getElementById('delete')) {
            this.dialogRef = this.dialog.open(DeleteDialogComponent, {
                width: '300px'
            });
            this.dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    _this.delete(imgObj, index);
                }
            });
        }
    };
    AppComponent.prototype.signOut = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut().then(function () {
        }).catch(function (error) {
        });
        if (window.history.length > 1 && this.guid) {
            location.href = '#loggedOut/' + this.guid;
        }
        this.resetImages();
    };
    AppComponent.prototype.handleSignedInUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var trimmedName, _i, _a, img, storageRef, _loop_1, this_1, _b, _c, _d, img;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.displayName = this.user.displayName;
                        this.email = this.user.email;
                        this.login = true;
                        this.email = this.user.email;
                        if (location.hash.split('/') && location.hash.split('/')[1] && location.hash.split('/')[2]) {
                            this.guid = location.hash.split('/')[2];
                        }
                        trimmedName = this.email;
                        location.href = '#user/' + this.email + '/' + this.guid;
                        if (!this.newUser) return [3 /*break*/, 1];
                        if (this.savedImageArr.length) {
                            for (_i = 0, _a = this.savedImageArr; _i < _a.length; _i++) {
                                img = _a[_i];
                                this.saveImageFirebase(img);
                            }
                        }
                        return [3 /*break*/, 7];
                    case 1:
                        this.savedImageArr = [];
                        if (!((!this.newUser) || (this.newUser && this.savedImageArr.length === 0))) return [3 /*break*/, 7];
                        storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
                        if (this.ready && this.renderDone) {
                            this.imagePopulationDone = false;
                        }
                        _loop_1 = function (img) {
                            var numerator;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        numerator = (parseInt(img) + 1);
                                        return [4 /*yield*/, storageRef.child(trimmedName + '/customImages/uploadCustom' + numerator).getDownloadURL().then(function (url) {
                                                if (url) {
                                                    _this.customImages[parseInt(img)].src = url;
                                                }
                                            }).catch(function (error) {
                                            })];
                                    case 1:
                                        _a.sent();
                                        if (parseInt(img) == (this_1.customImages.length - 1)) {
                                            this_1.setCustomImages();
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _b = [];
                        for (_c in this.customImages)
                            _b.push(_c);
                        _d = 0;
                        _e.label = 2;
                    case 2:
                        if (!(_d < _b.length)) return [3 /*break*/, 5];
                        img = _b[_d];
                        return [5 /*yield**/, _loop_1(img)];
                    case 3:
                        _e.sent();
                        _e.label = 4;
                    case 4:
                        _d++;
                        return [3 /*break*/, 2];
                    case 5: return [4 /*yield*/, this.database.collection('users/' + trimmedName + '/images').get().then(function (querySnapshot) {
                            querySnapshot.forEach(function (doc) {
                                _this.savedImageArr.push(doc.data());
                            });
                            if (querySnapshot.docs.length) {
                                _this.imagePopulationDone = true;
                                _this.renderImage(0);
                            }
                            else {
                                _this.imagePopulationDone = true;
                                if (_this.savedImageArr.length === 0) {
                                    _this.getRandomArt(true);
                                }
                            }
                        })];
                    case 6:
                        _e.sent();
                        _e.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.openLoginModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.openLoginDialog();
                        return [4 /*yield*/, this.ui.start('#firebaseui-container', this.getUiConfig())];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.handleSignedOutUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var guid, storageRef, _loop_2, this_2, _a, _b, _i, img;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        guid = '';
                        if (location.hash.split('/') && location.hash.split('/')[1]) {
                            this.guid = location.hash.split('/')[1];
                            guid = this.guid;
                            guid = location.hash.split('/')[1];
                        }
                        if (!!document.getElementById('firebaseui-container')) return [3 /*break*/, 9];
                        this.login = false;
                        if (!!this.user) return [3 /*break*/, 9];
                        if (!(location.href.indexOf('loggedOut') < 0)) return [3 /*break*/, 1];
                        this.guid = this.utilities.getGuid();
                        location.href = '#loggedOut/' + this.guid;
                        return [3 /*break*/, 7];
                    case 1:
                        if (!guid) return [3 /*break*/, 7];
                        if (this.ready && this.renderDone) {
                            this.imagePopulationDone = false;
                        }
                        storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
                        _loop_2 = function (img) {
                            var numerator;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        numerator = (parseInt(img) + 1);
                                        return [4 /*yield*/, storageRef.child(guid + '/customImages/uploadCustom' + numerator).getDownloadURL().then(function (url) {
                                                if (url) {
                                                    _this.customImages[parseInt(img)].src = url;
                                                }
                                            }).catch(function (error) {
                                            })];
                                    case 1:
                                        _a.sent();
                                        if (parseInt(img) == (this_2.customImages.length - 1)) {
                                            this_2.setCustomImages();
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_2 = this;
                        _a = [];
                        for (_b in this.customImages)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        img = _a[_i];
                        return [5 /*yield**/, _loop_2(img)];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        this.savedImageArr = [];
                        return [4 /*yield*/, this.database.collection('users/' + guid + '/images').get().then(function (querySnapshot) {
                                querySnapshot.forEach(function (doc) {
                                    _this.savedImageArr.push(doc.data());
                                });
                                if (querySnapshot.docs.length) {
                                    _this.imagePopulationDone = true;
                                    _this.renderImage(0);
                                }
                                else {
                                    _this.imagePopulationDone = true;
                                    // this.getRandomArt(true);
                                }
                            })];
                    case 6:
                        _c.sent();
                        _c.label = 7;
                    case 7: return [4 /*yield*/, this.openLoginModal()];
                    case 8:
                        _c.sent();
                        _c.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.getUiConfig = function () {
        var uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                    this.login = true;
                    console.log('authResult', authResult);
                    this.suffix = '/' + this.guid;
                    this.displayName = authResult.additionalUserInfo.profile.name.replace(/\s/g, '');
                    if (authResult.additionalUserInfo.isNewUser) {
                        this.newUser = true;
                    }
                    else {
                        this.newUser = false;
                    }
                    if (authResult.user) {
                        this.user = authResult.user;
                    }
                    this.dialogRef.close(LoginDialogComponent);
                    return false;
                }.bind(this),
                uiShown: function () {
                    // The widget is rendered.
                    // Hide the loader.
                    document.getElementById('loader').style.display = 'none';
                }
            },
            signInSuccessUrl: '' + location.host + '/#user/' + this.displayName + this.suffix,
            signInOptions: [
                firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider.PROVIDER_ID,
                firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider.PROVIDER_ID,
                firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].EmailAuthProvider.PROVIDER_ID
            ]
        };
        return uiConfig;
    };
    AppComponent.prototype.resetImages = function () {
        this.customImages =
            [{ 'name': 'uploadCustom1', 'crossOrigin': "Anonymous", 'src': 'assets/arabesque_pattern.jpg', 'ready': true, 'fileTooBig': false },
                { 'name': 'uploadCustom2', 'crossOrigin': "Anonymous", 'src': 'assets/kosovo_map.jpg', 'ready': true, 'fileTooBig': false },
                { 'name': 'uploadCustom3', 'crossOrigin': "Anonymous", 'src': 'assets/frieze.jpg', 'ready': true, 'fileTooBig': false },
                { 'name': 'uploadCustom4', 'crossOrigin': "Anonymous", 'src': 'assets/mexico_flag.jpg', 'ready': true, 'fileTooBig': false },
                { 'name': 'uploadCustom5', 'crossOrigin': "Anonymous", 'src': 'assets/van.jpg', 'ready': true, 'fileTooBig': false },
                { 'name': 'uploadCustom6', 'crossOrigin': "Anonymous", 'src': 'assets/trunks.png', 'ready': true, 'fileTooBig': false }
            ];
    };
    AppComponent.prototype.toggleImages = function () {
        if (!this.customImagesActive) {
            // this.resetImages();
            this.setCustomImages();
            this.customImagesActive = true;
        }
        else {
            this.customImagesActive = false;
            this.generator.initiatePatterns();
        }
    };
    AppComponent.prototype.uploadCustomImage = function (fileIndex, event) {
        var _this = this;
        var fileName = 'uploadCustom' + (fileIndex + 1);
        var replaceObj = this.customImages.find(function (img) { return img.name === fileName; });
        var replaceIndex = this.customImages.indexOf(replaceObj);
        this.customImages[replaceIndex].fileTooBig = false;
        if (event.target.files && event.target.files[0]) {
            this.customImages[replaceIndex].ready = false;
            var file = event.target.files[0];
            var url = window.URL.createObjectURL(file);
            var newImg = new Image();
            newImg.crossOrigin = "Anonymous";
            newImg.src = url;
            var fileUrl = newImg.src;
            var trimmedName = this.guid;
            if (this.user) {
                this.email = this.user.email;
                trimmedName = this.email;
            }
            // checking if file exceeds storage limit of  1048487 bites ~ 1 MB
            var fileSize = file.size / 1024 / 1024;
            if (fileSize > 1) {
                this.fileInputs._results[fileIndex].value = '';
                this.customImages[replaceIndex].ready = true;
                this.customImages[replaceIndex].fileTooBig = true;
                alert('File size exceeds 1 MB');
                setTimeout(function () {
                    _this.customImages[replaceIndex].fileTooBig = false;
                }, 2000);
                return;
            }
            else {
                var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
                storageRef.child(trimmedName + '/customImages/' + fileName).put(file).then(function (snapshot) {
                    console.log('Uploaded a blob or file!', snapshot);
                });
            }
            if (replaceIndex >= 0) {
                this.customImages[replaceIndex].src = fileUrl;
            }
            else {
                this.customImages.push({ 'name': fileName, 'crossOrigin': "Anonymous", 'src': fileUrl, 'ready': true, 'fileTooBig': false });
            }
            this.setCustomImages();
            this.fileInputs._results[fileIndex].value = '';
        }
    };
    AppComponent.prototype.renderImage = function (index) {
        // if(this.showFavorites) {
        if (index !== undefined) {
            this.currImageIndex = index;
        }
        this.generator.renderImage(index, this.showFavorites);
        // } else {
        // }
    };
    AppComponent.prototype.updateCurrentIndex = function (index) {
        this.currImageIndex = index;
    };
    AppComponent.prototype.setRenderDone = function (bool) {
        this.renderDone = bool;
        this.ready = bool;
    };
    AppComponent.prototype.setCustomImages = function () {
        this.generator.setCustomImages(true);
        this.customImagesActive = true;
    };
    AppComponent.prototype.getRandomArt = function (clear, recurseStep) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.generator.getRandomArt(clear);
                return [2 /*return*/];
            });
        });
    };
    AppComponent.prototype.filterFavorites = function () {
        this.favoritesArr = this.savedImageArr.filter(function (imgObj) {
            if (imgObj.favorite) {
                return imgObj;
            }
        });
        this.showFavorites = !this.showFavorites;
    };
    AppComponent.prototype.delete = function (imageObj, index) {
        if (index === undefined) {
            index = this.currImageIndex;
        }
        if (index < this.currImageIndex) {
            this.currImageIndex--;
        }
        if (this.user) {
            var trimmedName = this.email;
            this.database.collection('users/' + trimmedName + '/images').doc(imageObj.name).delete().then(function (docRef) {
                console.log('Successfully deleted');
            })
                .catch(function (error) {
                console.error('Error adding document: ', error);
            });
        }
        this.savedImageArr.splice(index, 1);
        if (index > this.savedImageArr.length - 1) {
            index--;
            this.renderImage(index);
        }
        if (index === this.currImageIndex || index === 0) {
            this.renderImage(index);
        }
    };
    AppComponent.prototype.saveImageFirebase = function (imageObj) {
        var trimmedName = this.guid;
        if (this.user) {
            this.email = this.user.email;
            trimmedName = this.email;
        }
        if (this.utilities.byteCount(imageObj.src) > 1048487) {
            var tooLong = true;
            var compSize = 1.0;
            while (tooLong && (compSize > 0)) {
                if (this.utilities.byteCount(imageObj.src) > 1048487) {
                    var canvasSrc = this.generator.canvas.toDataURL("image/jpeg", compSize);
                    if (this.utilities.byteCount(canvasSrc) <= 1048487) {
                        imageObj.src = canvasSrc;
                        tooLong = false;
                    }
                    else {
                        imageObj.src = canvasSrc;
                        compSize = compSize - .01;
                    }
                }
            }
        }
        this.database.collection('users/' + trimmedName + '/images').doc(imageObj.name).set({
            'name': imageObj.name, 'src': imageObj.src, 'favorite': false
        }).then(function (docRef) {
            // console.log('Document written with ID: ', docRef.id);
        }).catch(function (error) {
            console.error('Error adding document: ', error);
        });
    };
    AppComponent.prototype.saveToFavorites = function (imageObj, index) {
        var val = true;
        if (this.savedImageArr[index].favorite) {
            val = false;
        }
        this.savedImageArr[index].favorite = val;
        var trimmedName = this.guid;
        if (this.user) {
            trimmedName = this.email;
        }
        this.database.collection('users/' + trimmedName + '/images').doc(imageObj.name).set({
            'name': imageObj.name, 'src': imageObj.src, 'favorite': val
        }).then(function (docRef) {
            // console.log('Document written with ID: ', docRef.id);
        }).catch(function (error) {
            console.error('Error adding document: ', error);
        });
    };
    AppComponent.prototype.download = function (element) {
        element.href = this.generator.canvas.toDataURL();
        return;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_generator_generator_component__WEBPACK_IMPORTED_MODULE_5__["GeneratorComponent"]),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "generator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loaderCanvas'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "loader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('fileInput'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "fileInputs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "handlekeydown", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"] }, _generator_utilities__WEBPACK_IMPORTED_MODULE_6__["Utilities"]]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _generator_utilities__WEBPACK_IMPORTED_MODULE_6__["Utilities"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _generator_generator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generator/generator.component */ "./src/app/generator/generator.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_2__["LoginDialogComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_2__["DeleteDialogComponent"],
                _generator_generator_component__WEBPACK_IMPORTED_MODULE_8__["GeneratorComponent"]
            ],
            entryComponents: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["LoginDialogComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_2__["DeleteDialogComponent"]
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/delete.component.html":
/*!***************************************!*\
  !*** ./src/app/delete.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #delete id='delete' class=\"margin-auto\" style=\"z-index: 100\">\n\n  <button class=\"material-text float-right hover\" style=\"min-width: 0px !important; margin-right: -20px !important; margin-top: -20px !important; opacity: .5\"\n    mat-icon-button [mat-dialog-close]=\"false\">X</button>\n  <span>\n    <h2 class=\"material-text\" mat-dialog-title> Are you sure you want to delete this image?\n    </h2>\n    <button class=\"material-text\" mat-button [mat-dialog-close]=\"true\">Yes</button>\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/generator/generator.component.css":
/*!***************************************************!*\
  !*** ./src/app/generator/generator.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/generator/generator.component.html":
/*!****************************************************!*\
  !*** ./src/app/generator/generator.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"relative\" fxLayout=\"start start\">\n\n  <canvas #myCanvasTwo id=\"myCanvasTwo\" class=\"canvas-height\">\n    Your browser does not support the canvas element.\n  </canvas>\n\n  <canvas fxShow=\"false\" #myCanvas id=\"myCanvas\" class=\"hidden full-height\">\n    Your browser does not support the canvas element.\n  </canvas>\n\n  <div [fxShow]=\"renderDone\" #loaderCanvas class=\"absolute margin-auto loader\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/generator/generator.component.ts":
/*!**************************************************!*\
  !*** ./src/app/generator/generator.component.ts ***!
  \**************************************************/
/*! exports provided: GeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorComponent", function() { return GeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/app/generator/utilities.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




var GeneratorComponent = /** @class */ (function () {
    function GeneratorComponent(http, utilities) {
        this.http = http;
        this.utilities = utilities;
        this.saveImageFirebase = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.renderDoneEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.savedImageArr = [];
        this.favoritesArr = [];
        this.customImagesActive = false;
        this.updateCurrentIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        this.largeRecurseStep = false;
        this.forceBeginPath = false;
        this.patternFillSingleBegun = false;
        this.transform = false;
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
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref();
        if (this.darkDatabaseList.length === 0 || this.patternDatabaseList.length === 0) {
            return new Promise(function (resolve) {
                _this.http.get('http://localhost:4201/artImages').subscribe(function (res) {
                    res.forEach(function (item) {
                        if (item["metadata"]["name"].indexOf('dark') > -1) {
                            storageRef.child(item["metadata"]["name"]).getDownloadURL().then(function (url) {
                                var darkImage = new Image();
                                darkImage.src = url;
                                darkImage.crossOrigin = "Anonymous";
                                this.darkDatabaseList.push(darkImage);
                            }.bind(this));
                        }
                        else {
                            storageRef.child(item["metadata"]["name"]).getDownloadURL().then(function (url) {
                                var darkImage = new Image();
                                darkImage.src = url;
                                darkImage.crossOrigin = "Anonymous";
                                this.patternDatabaseList.push(darkImage);
                            }.bind(this));
                        }
                    }.bind(this));
                    // this.patternDatabaseList = res.map(function (item) { return item["metadata"]["name"]; });
                    resolve();
                }.bind(_this));
                // });
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
            var pattern = this.ctx.createPattern(this.patternOne, 'repeat');
            this.ctx.fillStyle = pattern;
            // this.customImages[0].ready = true;
            // this.customImagesLoaded.push(this.patternOne);
            this.patternTwo.src = this.initialImages[1].src;
            this.patternTwo.onload = function () {
                var pattern = this.ctx.createPattern(this.patternTwo, 'repeat');
                this.ctx.fillStyle = pattern;
                // this.customImages[1].ready = true;
                // this.customImagesLoaded.push(this.patternTwo);
                this.patternThree.src = this.initialImages[2].src;
                this.patternThree.onload = function () {
                    var pattern = this.ctx.createPattern(this.patternThree, 'repeat');
                    this.ctx.fillStyle = pattern;
                    // this.customImages[2].ready = true;
                    // this.customImagesLoaded.push(this.patternThree);
                    this.patternFour.src = this.initialImages[3].src;
                    this.patternFour.onload = function () {
                        var pattern = this.ctx.createPattern(this.patternFour, 'repeat');
                        this.ctx.fillStyle = pattern;
                        // this.customImages[3].ready = true;
                        // this.customImagesLoaded.push(this.patternFour);
                        this.patternFive.src = this.initialImages[4].src;
                        this.patternFive.onload = function () {
                            var pattern = this.ctx.createPattern(this.patternFive, 'repeat');
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
                                                pattern = this.ctx.createPattern(this.patternSix, 'repeat');
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
    };
    GeneratorComponent.prototype.getRandomArt = function (clear, recurseStep) {
        return __awaiter(this, void 0, void 0, function () {
            var recurse, solidSwitch, maxDarkIndex, one, two, three, four, five, darkOne, darkThree, darkFour, darkFive, maxDarkIndex, one, two, three, four, five, darkOne, darkThree, darkFour, darkFive, solidSwitch, img;
            return __generator(this, function (_a) {
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
                    this.genType = this.genTypeArr[Math.floor(Math.random() * this.genTypeArr.length)];
                    this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
                    // if no recurse, this means this is a new piece, not just a layer, so clear and calculate recurse chance
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    this.ctx.fillStyle = 'white';
                    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                    recurse = this.utilities.randomlyChooseTrueOrFalse();
                    if (!recurse) {
                        this.singleLayer = true;
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
                            this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
                            this.getRandomArtAlg(clear, recurse, recurseStep);
                        }.bind(this);
                    }
                    else {
                        this.getRandomArtAlg(clear, recurse, recurseStep);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    GeneratorComponent.prototype.getRandomArtAlg = function (clear, recurse, recurseStep) {
        this.patternFillSingleBegun = false;
        this.beginPath = this.utilities.randomlyChooseTrueOrFalse();
        this.randomScheme = "Random";
        this.colorArr = this.getRandomColorArr();
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
                // this.ctx.globalAlpha = (Math.random() * .4);
                this.ctx.globalAlpha = .4 - (layerNum / this.layerCounter * .01);
                console.log('trans global alpha', this.ctx.globalAlpha);
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
            this.getSecondSmallLayer(true);
            this.resetForNewLayer();
            this.forceBeginPath = false;
        }
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
            // this.ctx.globalAlpha = .1;
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
                this.beginPath = false;
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
                this.ctx.globalAlpha = this.layerCounter / objNum + .4;
            }
            else {
                this.ctx.globalAlpha = 1;
            }
            console.log('main global alpha', this.ctx.globalAlpha);
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
            this.drawShape(randomShape, false, true);
            this.layerCounter++;
        }
    };
    GeneratorComponent.prototype.drawShape = function (shape, small, main) {
        var offset_x = 0;
        var offset_y = 0;
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
        // if (this.largeRecurseStep) {
        //   this.patternFill = false;
        // }
        if (!this.singleLayer && main && !this.utilities.randomlyChooseTrueOrFalse()) {
            this.transform = true;
            //  this.ctx.save();
            if (this.utilities.randomlyChooseTrueOrFalse) {
                // this.ctx.setTransform(1, .6, .2, 1, 0, 0);
            }
            else {
                // this.ctx.setTransform(1, .2, .6, 1, 0, 0);
            }
        }
        else {
            this.transform = false;
        }
        if (this.patternFill) {
            if (!this.patternFillSingleBegun && (this.isFrieze || this.isFriezeTwo || this.isTrunks || this.isArabesque || this.isMexico || this.isBedroom)) {
                this.patternFillSingleBegun = true;
            }
            else {
                offset_x = Math.floor(Math.random() * this.canvasSize / 2.5) - this.canvasSize / 2.5;
                offset_y = Math.floor(Math.random() * this.canvasSize / 2.5) - this.canvasSize / 2.5;
                this.ctx.translate(offset_x, offset_y);
            }
            if (this.patternSwitch === 1) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternThree, 'repeat');
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
            }
            else if (this.patternSwitch === 4) {
                if (rand === 1) {
                    this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, 'no-repeat');
                }
                else if (rand === 2) {
                    this.ctx.fillStyle = this.ctx.createPattern(this.patternSix, 'repeat');
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
            }
            else {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, 'no-repeat');
            }
            if (this.isFrieze && main) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternThree, 'repeat');
            }
            if (this.isFriezeTwo && main) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternFive, 'repeat');
            }
            if (this.isTrunks && main) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternSix, 'repeat');
            }
            if (this.isArabesque && main) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternOne, 'repeat');
            }
            if (this.isMexico && main) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, 'no-repeat');
            }
            if (this.isBedroom && main) {
                this.ctx.fillStyle = this.ctx.createPattern(this.patternBedroom, 'repeat');
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
                // omitting begin path triggers the wireframe look
                if (!this.forceBeginPath && this.singleLayer) {
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
                if (!this.forceBeginPath && this.singleLayer) {
                }
                else {
                    this.ctx.beginPath();
                }
                this.ctx.setLineDash([]);
                if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
                    if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
                        if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
                            // this.ctx.lineWidth = 2;
                        }
                    }
                }
                rand1 = xPos;
                rand2 = yPos;
                var ty1 = Math.random() * this.canvasSize;
                var ty2 = Math.random() * this.canvasSize;
                // vertex one
                this.ctx.moveTo(rand1, ty1);
                // vertex two
                this.ctx.lineTo(rand2, rand1);
                this.ctx.stroke();
                // vertex three
                this.ctx.lineTo(rand2, ty2);
                this.ctx.stroke();
                this.ctx.lineTo(rand1, ty1);
                // const set y diff
                var yDiff = 50;
                this.ctx.lineTo(rand1, ty1 - yDiff);
                this.ctx.stroke();
                this.ctx.lineTo(rand2, rand1 - yDiff);
                this.ctx.stroke();
                this.ctx.lineTo(rand2, rand1);
                this.ctx.moveTo(rand2, rand1 - yDiff);
                this.ctx.stroke();
                this.ctx.lineTo(rand2, ty2 - yDiff);
                this.ctx.stroke();
                this.ctx.lineTo(rand2, ty2);
                this.ctx.moveTo(rand2, ty2 - yDiff);
                this.ctx.stroke();
                this.ctx.lineTo(rand1, ty1 - yDiff);
                this.ctx.stroke();
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
                this.ctx.translate(-offset_x, -offset_y);
            }
        }
        this.ctx.setLineDash([]);
        this.aggrObjArea += currObjArea;
        // if(this.transform) {
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
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
        img.onload = function () {
            this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
            this.drawImageScaled(img, this.ctxTwo);
            this.renderDone = true;
            this.renderDoneEmit.emit(true);
            this.loader.nativeElement.style.visibility = "hidden";
            if (index === undefined) {
                this.updateCurrentIndex.emit(this.savedImageArr.length - 1);
            }
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
    GeneratorComponent.prototype.setCustomImages = function (clear) {
        this.patternOne.src = this.customImages[0].src;
        this.patternOne.crossOrigin = "Anonymous";
        this.patternOne.onload = function () {
            var pattern = this.ctx.createPattern(this.patternOne, 'repeat');
            this.ctx.fillStyle = pattern;
            this.customImages[0].ready = true;
            this.customImagesLoaded.push(this.patternOne);
            this.patternTwo.src = this.customImages[1].src;
            this.patternTwo.onload = function () {
                var pattern = this.ctx.createPattern(this.patternTwo, 'repeat');
                this.ctx.fillStyle = pattern;
                this.customImages[1].ready = true;
                this.customImagesLoaded.push(this.patternTwo);
                this.patternThree.src = this.customImages[2].src;
                this.patternThree.onload = function () {
                    var pattern = this.ctx.createPattern(this.patternThree, 'repeat');
                    this.ctx.fillStyle = pattern;
                    this.customImages[2].ready = true;
                    this.customImagesLoaded.push(this.patternThree);
                    this.patternFour.src = this.customImages[3].src;
                    this.patternFour.onload = function () {
                        var pattern = this.ctx.createPattern(this.patternFour, 'repeat');
                        this.ctx.fillStyle = pattern;
                        this.customImages[3].ready = true;
                        this.customImagesLoaded.push(this.patternFour);
                        this.patternFive.src = this.customImages[4].src;
                        this.patternFive.onload = function () {
                            var pattern = this.ctx.createPattern(this.patternFive, 'repeat');
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
                                                pattern = this.ctx.createPattern(this.patternSix, 'repeat');
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loaderCanvas'),
        __metadata("design:type", Object)
    ], GeneratorComponent.prototype, "loader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GeneratorComponent.prototype, "saveImageFirebase", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GeneratorComponent.prototype, "renderDoneEmit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GeneratorComponent.prototype, "savedImageArr", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GeneratorComponent.prototype, "favoritesArr", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GeneratorComponent.prototype, "customImages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GeneratorComponent.prototype, "customImagesActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GeneratorComponent.prototype, "updateCurrentIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GeneratorComponent.prototype, "currImageIndex", void 0);
    GeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'generator',
            template: __webpack_require__(/*! ./generator.component.html */ "./src/app/generator/generator.component.html"),
            styles: [__webpack_require__(/*! ./generator.component.css */ "./src/app/generator/generator.component.css")],
            providers: [_utilities__WEBPACK_IMPORTED_MODULE_1__["Utilities"]]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _utilities__WEBPACK_IMPORTED_MODULE_1__["Utilities"]])
    ], GeneratorComponent);
    return GeneratorComponent;
}());



/***/ }),

/***/ "./src/app/generator/utilities.ts":
/*!****************************************!*\
  !*** ./src/app/generator/utilities.ts ***!
  \****************************************/
/*! exports provided: Utilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utilities", function() { return Utilities; });
var Utilities = /** @class */ (function () {
    function Utilities() {
    }
    Utilities.prototype.getGuid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    Utilities.prototype.byteCount = function (s) {
        return encodeURI(s).split(/%..|./).length - 1;
    };
    Utilities.prototype.randomlyChooseOneOrTwo = function () {
        var num = Math.random() + 1;
        if (num < 1.5) {
            return 1;
        }
        else {
            return 2;
        }
    };
    Utilities.prototype.randomlyChooseTrueOrFalse = function () {
        var num = Math.random() + 1;
        if (num < 1.5) {
            return false;
        }
        else {
            return true;
        }
    };
    Utilities.prototype.randomlyChooseTrueOrFalseThird = function () {
        var num = Math.random() + 3;
        if (num < 1.5) {
            return true;
        }
        else {
            return false;
        }
    };
    Utilities.prototype.randomlyChooseTrueOrFalseThirdReal = function () {
        var num = Math.random() * 3;
        if (num <= 2) {
            return true;
        }
        else {
            return false;
        }
    };
    Utilities.prototype.randomlyChooseTrueOrFalse10Real = function () {
        var num = Math.random() * 10;
        if (num < 5) {
            return true;
        }
        else {
            return false;
        }
    };
    Utilities.prototype.randomlyChooseTrueOrFalseQuarter = function () {
        var num = Math.random() * 4;
        if (num < 3) {
            return 'repeat';
        }
        else {
            return 'no-repeat';
        }
    };
    return Utilities;
}());



/***/ }),

/***/ "./src/app/login.component.html":
/*!**************************************!*\
  !*** ./src/app/login.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-auto z-index-100\">\n\n<button class=\"material-text float-right hover\" style=\"min-width: 0px !important; margin-right: -20px !important; margin-top: -20px !important; opacity: .5\"  mat-icon-button mat-dialog-close>X</button><span>\n  <h2 class=\"material-text\" mat-dialog-title> Sign In </h2>\n  <mat-dialog-content>\n\n    <div id=\"loader\">Loading...</div>\n    <div id=\"user-signed-out\">\n      <div id=\"firebaseui-container\"></div>\n    </div>\n  </mat-dialog-content>\n</span>\n</div>"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kvanlaan/Documents/generator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map