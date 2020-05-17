(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxFlexFill>\n  <div fxLayout=\"row\" fxLayoutWrap>\n    <div fxFlex=\"40\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxFlexOffset=\"5\" fxFlexOffset.sm=\"1\"\n      fxLayoutAlign=\"start center\">\n      <div class=\"material-text iphone-6-bottom-margin\" fxFlex fxLayoutAlign=\"start center\">Art Generator</div>\n      <div fxFlex class=\"material-text\" style=\"font-size: 14px !important\" fxShow=\"true\" fxShow.md=\"false\"\n        fxShow.sm=\"false\" fxShow.xs=\"false\" fxLayoutAlign=\"end center\">Each piece is algorithmically unique.</div>\n    </div>\n\n    <div fxFlex>\n      <div fxFlex fxFlexOffset=\"7\" fxShow=\"true\" fxLayoutGap=\"5px\" fxShow.md=\"false\" fxShow.sm=\"false\" fxShow.xs=\"false\"\n        fxLayoutAlign=\"start center\">\n        <button [disabled]=\"!renderDone\" (click)=\"getRandomArt(true)\" class=\"float-left inline\" mat-stroked-button>\n          Get New Art</button>\n        <a href=\"#\" target=\"_blank\" class=\"float-left inline\" #downloadLink (click)=\"download(downloadLink)\"\n          download=\"art.jpg\">\n          <button [disabled]=\"!renderDone\" mat-stroked-button>\n            Save this art\n          </button>\n        </a>\n      </div>\n      <div fxFlex fxShow=\"true\" fxLayoutAlign=\"end center\">\n        <button [fxShow]=\"!login\" (click)=\"openLoginModal()\" mat-stroked-button>\n          <span> Sign In </span>\n        </button>\n        <span *ngIf=\"login\" fxLayoutAlign=\"horizontal center\" fxLayoutGap=\"5px\">\n          <span>{{email}}</span>\n          <button (click)=\"signOut()\" fxShow.md=\"false\" fxShow.sm=\"false\" fxShow.xs=\"false\"\n            mat-stroked-button>\n            <span> Sign Out </span>\n          </button>\n        </span>\n      </div>\n      <div fxFlex=\"6\" fxShow.md=\"false\" fxShow.sm=\"false\" fxShow.xs=\"false\"></div>\n    </div>\n  </div>\n  <div fxFlexOffset=\"2\" fxLayout=\"row\" fxShow=\"false\" fxShow.md=\"true\" fxShow.sm=\"true\" fxShow.xs=\"true\" fxLayoutWrap>\n    <div fxFlex fxFlexOffset=\"5\" fxFlexOffset.sm=\"1\" class=\"material-text\"\n      style=\"font-size: 14px !important; text-align: left\" fxLayoutAlign=\"start center\"> Each piece is algorithmically\n      unique.</div>\n    <div fxFlex=\"20\" fxLayoutAlign=\"end center\">\n      <button *ngIf=\"login\" fxFlex=\"5\" (click)=\"signOut()\" mat-stroked-button>\n        <span> Sign Out </span>\n      </button>\n    </div>\n  </div>\n\n  <div style=\"padding-top: 15px; padding-bottom: 10px;\" class=\"iphone-6-margin\" fxLayout=\"row\" fxShow=\"false\" fxShow.md=\"true\"\n    fxShow.sm=\"true\" fxShow.xs=\"true\" fxLayoutWrap fxLayoutAlign=\"center center\">\n    <mat-button-toggle-group [(ngModel)]=\"isMainPhotoView\">\n      <mat-button-toggle [value]=\"true\"> <i class=\"material-icons\">\n          photo\n        </i></mat-button-toggle>\n      <mat-button-toggle [value]=\"false\"> <i class=\"material-icons\">\n          view_module\n        </i></mat-button-toggle>\n    </mat-button-toggle-group>\n  </div>\n  <div style=\"padding-top: 5px; padding-bottom: 5px\" fxFlexOffset=\"1\" fxLayout=\"row\" fxShow=\"false\" fxShow.md=\"true\"\n    fxShow.sm=\"true\" fxShow.xs=\"true\" fxLayoutWrap>\n    <div fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\" style=\"padding-right: 5px\">\n      <button [disabled]=\"!renderDone\" (click)=\"getRandomArt(true)\" class=\"float-left inline\" mat-stroked-button>\n        Get New Art</button>\n      <a href=\"#\" target=\"_blank\" class=\"inline\" #downloadLinkTwo (click)=\"!renderDone && download(downloadLinkTwo)\"\n        download=\"artGenerator.jpg\">\n        <i class=\"material-icons\">\n          save_alt\n        </i>\n      </a>\n    </div>\n\n    <div [fxShow.md]=\"!isMainPhotoView\" [fxShow.sm]=\"!isMainPhotoView\" [fxShow.xs]=\"!isMainPhotoView\" fxLayout=\"row\"\n      fxFlex fxLayoutAlign=\"end center\">\n      <span (click)=\"filterFavorites()\" class=\"hover-red\">\n        <i class=\"material-icons\">\n          filter_list\n        </i>\n\n        <i [fxShow]=\"showFavorites\" class=\"material-icons\">\n          favorite\n        </i>\n        <i [fxShow]=\"!showFavorites\" class=\"material-icons\">\n          favorite_border\n        </i>\n      </span>\n    </div>\n    <div [fxShow.md]=\"isMainPhotoView\" [fxShow.sm]=\"isMainPhotoView\" [fxShow.xs]=\"isMainPhotoView\" fxLayout=\"row\"\n      fxLayoutAlign=\"end center\" fxLayoutGap=\"5px\">\n      <mat-slide-toggle matTooltip=\"Lock/Customize Patterns\" [checked]=\"customImagesActive\"\n        (change)=\"toggleImages()\"></mat-slide-toggle>\n      <span *ngIf=\"ready\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <span *ngFor=\"let customImage of customImages; let i = index\"\n          [ngStyle]=\"{'background-image': 'url(' + this.customImages[i]?.src + ')'}\" class=\"tile\">\n          <input #fileInput class=\"file-input\" type=\"file\" multiple (change)=\"uploadCustomImage(i, $event)\">\n          <span class=\"upload hover\" fxLayoutAlign=\"center end\">\n            <i [fxShow]=\"customImage.ready\" class=\"material-icons heart margin-top-auto bottom-0\">\n              arrow_upward\n            </i>\n          </span>\n          <span [fxShow]=\"!customImage.ready\" class=\"upload\" fxLayoutAlign=\"center end\">\n            <div class=\"margin-auto loader small\"></div>\n          </span>\n          <span [fxShow]=\"customImage.fileTooBig\" class=\"upload warning\" fxLayoutAlign=\"end center\" fxLayout=\"column\">\n            <i class=\"material-icons heart margin-top-auto bottom-0\">\n              warning\n            </i>\n          </span>\n        </span>\n      </span>\n    </div>\n  </div>\n  <div class=\"min-height-450 iphone-6-top-margin\" fxLayout=\"row\" fxFlexOffset.md=\"5\" fxFlexOffset.sm=\"2\" fxLayout.md=\"column\"\n    fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\">\n    <div class=\"relative overflow-scroll\" fxFlex=\"40\" fxFlexOffset.xl=\"5\" fxFlexOffset.md=\"5\" fxFlexOffset.lg=\"5\"\n      fxFlexOffset.md=\"0\" fxFlexOffset.sm=\"0\" [fxShow.md]=\"!isMainPhotoView\" [fxShow.sm]=\"!isMainPhotoView\"\n      [fxShow.xs]=\"!isMainPhotoView\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\">\n      <mat-grid-list *ngIf=\"!showFavorites\" class=\"canvas-height\" cols=\"5\" rows=\"5\" gutterSize=\"5px\">\n        <div [fxShow]=\"!imagePopulationDone\" #loaderCanvas class=\"absolute margin-auto loader\">\n        </div>\n        <mat-grid-tile fxLayout=\"row\" *ngFor=\"let savedImg of savedImageArr; let i = index;\">\n          <img class=\"on-hover-outline height-100 width-100 float-left\" [ngClass]=\"{'selected': i === currImageIndex}\"\n            (click)=\"renderImage(i)\" [(src)]=\"savedImageArr[i]['src']\" />\n          <span class=\"img-action-buttons\" fxLayout=\"row\">\n            <span [fxShow.lg]=\"true\" [fxShow.md]=\"true\" [fxShow.sm]=\"false\" [fxShow.xs]=\"false\">\n              <i (click)=\"openDeleteDialog(savedImg, i)\" class=\"material-icons on-hover-trash heart\">\n                delete\n              </i>\n              <i (click)=\"saveToFavorites(savedImg, i)\" class=\"material-icons on-hover-trash heart\" [ngClass]=\"{\n                  'show': savedImg.favorite \n                }\">\n                favorite\n              </i>\n            </span>\n\n            <span [fxShow.xl]=\"false\" [fxShow.lg]=\"false\" [fxShow.md]=\"false\" [fxShow.sm]=\"true\" [fxShow.xs]=\"true\">\n              <i (click)=\"openDeleteDialog(savedImg, i)\" class=\"material-icons heart\">\n                delete_outline\n              </i>\n              <i (click)=\"saveToFavorites(savedImg, i)\" class=\"material-icons heart\">\n                {{ savedImg.favorite ? 'favorite' : 'favorite_border'}}\n              </i>\n            </span>\n          </span>\n        </mat-grid-tile>\n\n      </mat-grid-list>\n\n      <mat-grid-list *ngIf=\"showFavorites\" [ngClass]=\"{'no-click': !showFavorites}\" class=\"canvas-height\" cols=\"5\"\n        rows=\"5\" gutterSize=\"5px\">\n        <mat-grid-tile *ngFor=\"let savedImg of favoritesArr; let i = index;\">\n\n          <img class=\"on-hover-outline height-100 width-100 float-left\" [ngClass]=\"{\n                  'selected': i === currImageIndex\n                }\" (click)=\"renderImage(i)\" [(src)]=\"savedImg.src\" />\n          <span class=\"img-action-buttons\" fxLayout=\"row\">\n\n            <span [fxShow.lg]=\"true\" [fxShow.md]=\"true\" [fxShow.sm]=\"false\" [fxShow.xs]=\"false\">\n\n              <!-- <i (click)=\"openDeleteDialog(savedImg, i)\" class=\"material-icons on-hover-trash\">\n                delete\n              </i> -->\n              <i (click)=\"saveToFavoritesFromFavorite(savedImg, i)\" class=\"material-icons on-hover-trash heart\"\n                [ngClass]=\"{\n                          'show': savedImg.favorite \n                        }\">\n                favorite\n              </i>\n            </span>\n\n\n            <span [fxShow.lg]=\"false\" [fxShow.md]=\"false\" [fxShow.sm]=\"true\" [fxShow.xs]=\"true\">\n              <i (click)=\"openDeleteDialog(savedImg, i)\" class=\"material-icons\">\n                delete_outline\n              </i>\n              <i (click)=\"saveToFavorites(savedImg, i)\" class=\"material-icons heart\">\n                {{ savedImg.favorite ? 'favorite' : 'favorite_border'}}\n              </i>\n            </span>\n          </span>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n    <div fxFlex>\n      <span class=\"text-align-left\" fxFlex=\"7\" fxShow.md=\"false\" fxShow.sm=\"false\" fxShow.xs=\"false\" [fxShow]=\"ready\"\n        fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"9px\">\n\n        <span class=\"material-text float-left text-align-center\" fxShow.lg=\"true\" fxShow.md=\"false\" fxShow.sm=\"false\"\n          fxShow.xs=\"false\" (click)=\"filterFavorites()\"><i class=\"material-icons\">\n            filter_list\n          </i>\n\n          <i [fxShow]=\"showFavorites\" class=\"material-icons\">\n            favorite\n          </i>\n          <i [fxShow]=\"!showFavorites\" class=\"material-icons\">\n            favorite_border\n          </i>\n        </span>\n        <mat-slide-toggle matTooltip=\"Lock/Customize Patterns\"  [checked]=\"customImagesActive\"\n          (change)=\"toggleImages()\"></mat-slide-toggle>\n        <span *ngIf=\"ready\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n          <span *ngFor=\"let customImage of customImages; let i = index\"\n            [ngStyle]=\"{'background-image': 'url(' + this.customImages[i]?.src + ')'}\" class=\"tile\">\n            <input #fileInput class=\"file-input\" type=\"file\" multiple (change)=\"uploadCustomImage(i, $event)\">\n            <span class=\"upload hover\" fxLayoutAlign=\"center end\">\n              <i [fxShow]=\"customImage.ready\" class=\"material-icons heart margin-top-auto bottom-0\">\n                arrow_upward\n              </i>\n            </span>\n            <span [fxShow]=\"!customImage.ready\" class=\"upload\" fxLayoutAlign=\"center end\">\n              <div class=\"margin-auto loader small\"></div>\n            </span>\n            <span [fxShow]=\"customImage.fileTooBig\" class=\"upload warning\" fxLayoutAlign=\"end center\" fxLayout=\"column\">\n              <i class=\"material-icons heart margin-top-auto bottom-0\">\n                warning\n              </i>\n            </span>\n          </span>\n\n          <i (click)=\"openCustomImagesDialog(true)\" style=\"margin-top: 4.5px\" class=\"material-icons\">\n            info_outline\n            </i>\n        </span>\n\n      </span>\n      <generator [fxShow.md]=\"isMainPhotoView\" [fxShow.sm]=\"isMainPhotoView\" [fxShow.xs]=\"isMainPhotoView\"\n        (updateCurrentIndex)=\"updateCurrentIndex($event)\" [currImageIndex]=\"currImageIndex\"\n        [customImagesActive]=\"customImagesActive\" [customImages]=\"customImages\" [savedImageArr]=\"savedImageArr\"\n        [favoritesArr]=\"favoritesArr\" (saveImageFirebase)=\"saveImageFirebase($event)\"\n        (renderDoneEmit)=\"setRenderDone(true)\"></generator>\n    </div>\n  </div>\n  <div fxLayout=\"row\" fxShow=\"true\" fxShow.md=\"false\" fxShow.sm=\"false\" fxShow.xs=\"false\" fxLayoutAlign=\"start start\">\n    <span fxLayout=\"row\" class=\"material-text\" fxFlexOffset=\"5\" fxLayoutGap=\"3px\" style=\"font-size: 14px !important; text-align: left\"> <span>Art and Code by <a\n        href=\"https://github.com/kvanlaan\" class=\"name\" target=\"_blank\"> Katrina Van Laan</a></span>&nbsp;<span>\n          <!-- QA by <a\n          href=\"https://www.linkedin.com/in/brian-bookman-353213159\" class=\"name\" target=\"_blank\">Brian Bookman.</a>\n         -->\n        \n        </span> </span>\n  </div>\n</div>\n<div [fxShow]=\"!ready\" class=\"absolute margin-auto loader\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/delete.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delete.component.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #delete id='delete' class=\"margin-auto\" style=\"z-index: 100\">\n\n  <button class=\"material-text float-right hover\" style=\"min-width: 0px !important; margin-right: -20px !important; margin-top: -20px !important; opacity: .5\"\n    mat-icon-button [mat-dialog-close]=\"false\">X</button>\n  <span>\n    <h2 class=\"material-text\" mat-dialog-title> Are you sure you want to delete this image?\n    </h2>\n    <button class=\"material-text\" mat-button [mat-dialog-close]=\"true\">Yes</button>\n  </span>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/generator/generator.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/generator/generator.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relative\" fxLayout=\"start start\">\n \n  <canvas #myCanvasTwo id=\"myCanvasTwo\" class=\"canvas-height\">\n    Your browser does not support the canvas element.\n  </canvas>\n\n   \n  <canvas #myCanvasThree id=\"myCanvasThree\" class=\"canvas-height-2\">\n    Your browser does not support the canvas element.\n  </canvas>\n\n  <canvas fxShow=\"false\" #myCanvas id=\"myCanvas\" class=\"hidden full-height\">\n    Your browser does not support the canvas element.\n  </canvas>\n\n  <div [fxShow]=\"renderDone\" #loaderCanvas class=\"absolute margin-auto loader\">\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login.component.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-auto z-index-100\">\n\n<button class=\"material-text float-right hover\" style=\"min-width: 0px !important; margin-right: -20px !important; margin-top: -20px !important; opacity: .5\"  mat-icon-button mat-dialog-close>X</button><span>\n  <h2 class=\"material-text\" mat-dialog-title> Sign In </h2>\n  <mat-dialog-content>\n\n    <div id=\"loader\">Loading...</div>\n    <div id=\"user-signed-out\">\n      <div id=\"firebaseui-container\"></div>\n    </div>\n  </mat-dialog-content>\n</span>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/customimagesdialog/customimagesdialog.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/customimagesdialog/customimagesdialog.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  style=\"z-index: 100\">\n\n  <button class=\"material-text float-right hover\" style=\"min-width: 0px !important; margin-right: -20px !important; margin-top: -20px !important; opacity: .5\"\n    mat-icon-button (click)=\"close()\">X</button>\n  <span>\n    <h2 class=\"material-text\" mat-dialog-title> <span *ngIf=\"!readOnly\">You've Activated</span> Custom Images<span *ngIf=\"!readOnly\">!</span>\n    </h2>\n    <mat-dialog-content fxLayout=\"row\" class=\"mat-typography\">\n<div fxLayout=\"column\">\n\n  <img src=\"assets/uploadintstructions.png\"/>\n  <!-- <div>\n    <mat-icon  [disabled]=\"photoIndex > 0\" (click)=\"photoIndex > 0 && decrementPhotoIndex()\">navigate_before</mat-icon>\n    <mat-icon  [disabled]=\"photoIndex < (this.photos.length-1)\" (click)=\"photoIndex < (this.photos.length-1)  && incrementPhotoIndex()\">navigate_next</mat-icon>\n  </div> -->\n</div>\n    \n    <p class=\"mat-typography\" style=\"text-align: left; margin-top: 22.5px\">\n      Click on the swatches to upload your custom image to Art Generator.\n      <br>\n      <br>\n      We've started you out with 6 template images.\n      <br>\n      <mat-checkbox [fxShow]=\"!readOnly\" (change)=\"toggleShowCustomImages($event)\">Don't Show this Again</mat-checkbox>\n    </p>\n\n  </mat-dialog-content>\n\n  </span>\n</div>");

/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-click {\n    pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1jbGljayB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebaseui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebaseui */ "./node_modules/firebaseui/dist/esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _generator_generator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generator/generator.component */ "./src/app/generator/generator.component.ts");
/* harmony import */ var _generator_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./generator/utilities */ "./src/app/generator/utilities.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _customimagesdialog_customimagesdialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../customimagesdialog/customimagesdialog.component */ "./src/customimagesdialog/customimagesdialog.component.ts");
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







// import { MatDialog } from '@angular/material';







var LoginDialogComponent = /** @class */ (function () {
    function LoginDialogComponent() {
    }
    LoginDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login.component.html")).default
        })
    ], LoginDialogComponent);
    return LoginDialogComponent;
}());

var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent() {
    }
    DeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __importDefault(__webpack_require__(/*! raw-loader!./delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/delete.component.html")).default
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
        this.isMainPhotoView = true;
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
        this.disableCustomImagesDialogKey = 'dontShowCustomImagesDialog';
        this.utilities = utilities;
        this.location = location;
        this.localStorage = localStorage;
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
                                    if (!(!this.login && !user && location.href.indexOf('loggedOut') >= 0 && location.href.indexOf('authenticationTriggered') > -0)) return [3 /*break*/, 1];
                                    this.openLoginModal();
                                    return [3 /*break*/, 6];
                                case 1:
                                    this.user = user;
                                    if (!this.user) return [3 /*break*/, 3];
                                    return [4 /*yield*/, this.handleSignedInUser()];
                                case 2:
                                    _a = _b.sent();
                                    return [3 /*break*/, 5];
                                case 3: return [4 /*yield*/, this.handleSignedOutUser()];
                                case 4:
                                    _a = _b.sent();
                                    _b.label = 5;
                                case 5:
                                    _a;
                                    _b.label = 6;
                                case 6: return [2 /*return*/];
                            }
                        });
                    });
                }.bind(this));
                return [2 /*return*/];
            });
        });
    };
    AppComponent.prototype.showMobileNextImageArrow = function () {
        if (this.isMainPhotoView) {
            if (!this.showFavorites) {
                if (this.currImageIndex < this.savedImageArr.length - 1) {
                    return true;
                }
            }
        }
        return false;
    };
    AppComponent.prototype.showMobilePreviousImageArrow = function () {
        if (this.isMainPhotoView) {
            if (this.currImageIndex > 0) {
                return true;
            }
        }
        return false;
    };
    AppComponent.prototype.openDeleteDialog = function (imgObj, index) {
        this.delete(imgObj, index);
        // if (!document.getElementById('delete')) {
        //   this.dialogRef = this.dialog.open(DeleteDialogComponent, {
        //     width: '300px'
        //   });
        //   this.dialogRef.afterClosed().subscribe(result => {
        //     if (result) {
        //       this.delete(imgObj, index);
        //     }
        //   });
        // }
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
                        if (location.hash.split('/') && location.hash.split('/')[1]) {
                            this.guid = location.hash.split('/')[1];
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
                                                    _this.customImagesActive = true;
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
                        if (location.href.indexOf('authenticationTriggered') < 0) {
                            location.href += '/authenticationTriggered';
                        }
                        this.dialogRef = this.dialog.open(LoginDialogComponent, {
                            width: '300px'
                        });
                        this.dialogRef.afterClosed().subscribe(function (result) {
                        });
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
                        }
                        if (!!document.getElementById('firebaseui-container')) return [3 /*break*/, 7];
                        this.login = false;
                        if (!!this.user) return [3 /*break*/, 7];
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
                                                    _this.customImagesActive = true;
                                                    _this.customImages[parseInt(img)].src = url;
                                                }
                                            }).catch(function (error) {
                                                console.log('error', error);
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
                    case 7: return [2 /*return*/];
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
            if (!this.getFromLocal(this.disableCustomImagesDialogKey)) {
                this.openCustomImagesDialog();
            }
        }
        else {
            this.customImagesActive = false;
            this.generator.initiatePatterns();
        }
    };
    AppComponent.prototype.openCustomImagesDialog = function (readOnly) {
        var _this = this;
        this.dialogRef = this.dialog.open(_customimagesdialog_customimagesdialog_component__WEBPACK_IMPORTED_MODULE_12__["CustomImagesDialogComponent"], {
            width: '300px',
            data: {
                readOnly: readOnly
            }
        });
        this.dialogRef.afterClosed().subscribe(function (dontShowAgain) {
            _this.saveToLocal(_this.disableCustomImagesDialogKey, dontShowAgain);
        });
    };
    AppComponent.prototype.getFromLocal = function (key) {
        var item = this.localStorage.getItem(key);
        if (item && item !== "undefined") {
            return JSON.parse(this.localStorage.getItem(key));
        }
        return;
    };
    AppComponent.prototype.saveToLocal = function (key, value) {
        this.localStorage.setItem(key, JSON.stringify(value));
    };
    AppComponent.prototype.deleteFromLocal = function (key) {
        this.localStorage.removeItem(key);
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
            this.customImagesActive = true;
            this.fileInputs._results[fileIndex].value = '';
        }
    };
    AppComponent.prototype.renderImage = function (index) {
        this.isMainPhotoView = true;
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
    AppComponent.prototype.incrementCurrentIndex = function () {
        this.currImageIndex++;
        this.renderImage();
    };
    AppComponent.prototype.decrementCurrentIndex = function () {
        this.currImageIndex--;
        this.renderImage();
    };
    AppComponent.prototype.setRenderDone = function (bool) {
        this.renderDone = bool;
        this.ready = bool;
    };
    AppComponent.prototype.setCustomImages = function () {
        this.generator.setCustomImages(true);
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
    AppComponent.prototype.delete = function (imageObjOld, index) {
        if (index === undefined) {
            index = this.currImageIndex;
        }
        if (index < this.currImageIndex) {
            this.currImageIndex--;
        }
        // if (this.user) {
        //   const trimmedName = this.email;
        //   this.database.collection('users/' + trimmedName + '/images').doc(imageObj.name).delete().then(function (docRef) {
        //     console.log('Successfully deleted');
        //   })
        //     .catch(function (error) {
        //       console.error('Error adding document: ', error);
        //     });
        // } else if(this.guid) {
        //   this.database.collection('users/' + this.guid + '/images').doc(imageObj.name).delete().then(function (docRef) {
        //     console.log('Successfully deleted');
        //   })
        //     .catch(function (error) {
        //       console.error('Error adding document: ', error);
        //     });
        // }
        for (var _i = 0, _a = this.savedImageArr; _i < _a.length; _i++) {
            var imageObj = _a[_i];
            this.database.collection('users/' + this.guid + '/images').doc(imageObj.name).delete().then(function (docRef) {
                console.log('Successfully deleted');
            })
                .catch(function (error) {
                console.error('Error adding document: ', error);
            });
        }
        this.savedImageArr.splice(index, 1);
        if (this.savedImageArr.length) {
            if (index > this.savedImageArr.length - 1) {
                index--;
                this.renderImage(index);
            }
            if (index === this.currImageIndex || index === 0) {
                this.renderImage(index);
            }
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
        element.href = this.generator.canvasTwo.toDataURL();
        return;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] },
        { type: _generator_utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_generator_generator_component__WEBPACK_IMPORTED_MODULE_8__["GeneratorComponent"]),
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"] }, _generator_utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"]],
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], _generator_utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/divider.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/checkbox.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button-toggle.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-spinner.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tooltip.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/slide-toggle.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _generator_generator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./generator/generator.component */ "./src/app/generator/generator.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _customimagesdialog_customimagesdialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../customimagesdialog/customimagesdialog.component */ "./src/customimagesdialog/customimagesdialog.component.ts");
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
                _customimagesdialog_customimagesdialog_component__WEBPACK_IMPORTED_MODULE_19__["CustomImagesDialogComponent"],
                _generator_generator_component__WEBPACK_IMPORTED_MODULE_15__["GeneratorComponent"]
            ],
            entryComponents: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["LoginDialogComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_2__["DeleteDialogComponent"],
                _customimagesdialog_customimagesdialog_component__WEBPACK_IMPORTED_MODULE_19__["CustomImagesDialogComponent"]
            ],
            imports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/generator/generator.component.css":
/*!***************************************************!*\
  !*** ./src/app/generator/generator.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYXRvci9nZW5lcmF0b3IuY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/app/generator/utilities.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var fast_average_color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fast-average-color */ "./node_modules/fast-average-color/dist/index.esm.js");
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref();
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
                            // if(recurse) {
                            this.ctx.scale(.5175, .5175);
                            this.ctxTwo.scale(.5175, .5175);
                            this.restoreScale = 1.932367149758454;
                            // } else {
                            //   this.ctx.scale(.579, .579)
                            //   this.ctxTwo.scale(.579, .579)
                            //   this.restoreScale = 1.72711571675;
                            //   }
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
                        fac = new fast_average_color__WEBPACK_IMPORTED_MODULE_7__["default"]();
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
    GeneratorComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _utilities__WEBPACK_IMPORTED_MODULE_1__["Utilities"] }
    ]; };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./generator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/generator/generator.component.html")).default,
            providers: [_utilities__WEBPACK_IMPORTED_MODULE_1__["Utilities"]],
            styles: [__importDefault(__webpack_require__(/*! ./generator.component.css */ "./src/app/generator/generator.component.css")).default]
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
    Utilities.prototype.randomlyChooseTrueOrFalseSpecial = function () {
        var num = Math.random() * 3;
        if (num <= 1.77) {
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

/***/ "./src/customimagesdialog/customimagesdialog.component.css":
/*!*****************************************************************!*\
  !*** ./src/customimagesdialog/customimagesdialog.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY3VzdG9taW1hZ2VzZGlhbG9nL2N1c3RvbWltYWdlc2RpYWxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/customimagesdialog/customimagesdialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/customimagesdialog/customimagesdialog.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomImagesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomImagesDialogComponent", function() { return CustomImagesDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var CustomImagesDialogComponent = /** @class */ (function () {
    function CustomImagesDialogComponent(dialogRef, dialogData) {
        this.dialogRef = dialogRef;
        this.readOnly = true;
        this.disable = true;
        this.readOnly = dialogData.readOnly;
    }
    CustomImagesDialogComponent.prototype.toggleShowCustomImages = function (event) {
        this.disable = event.checked;
    };
    CustomImagesDialogComponent.prototype.close = function () {
        this.dialogRef.close(this.disable);
    };
    CustomImagesDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
    ]; };
    CustomImagesDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customimagesdialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./customimagesdialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/customimagesdialog/customimagesdialog.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./customimagesdialog.component.css */ "./src/customimagesdialog/customimagesdialog.component.css")).default]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], CustomImagesDialogComponent);
    return CustomImagesDialogComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /Users/katrinavanlaan/workspace/mstuff/artHeroku/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map