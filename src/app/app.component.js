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
var common_1 = require("@angular/common");
var firebase = require("firebase");
var firebaseui = require("firebaseui");
require("firebase/firestore");
require("firebase/auth");
require("firebase/storage");
// import { MatDialog } from '@angular/material';
var dialog_1 = require("@angular/material/dialog");
var common_2 = require("../../node_modules/@angular/common");
var generator_component_1 = require("./generator/generator.component");
var utilities_1 = require("./generator/utilities");
require("hammerjs");
var http_1 = require("@angular/common/http");
var customimagesdialog_component_1 = require("../customimagesdialog/customimagesdialog.component");
var LoginDialogComponent = /** @class */ (function () {
    function LoginDialogComponent() {
    }
    LoginDialogComponent = __decorate([
        core_1.Component({
            templateUrl: './login.component.html'
        })
    ], LoginDialogComponent);
    return LoginDialogComponent;
}());
exports.LoginDialogComponent = LoginDialogComponent;
var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent() {
    }
    DeleteDialogComponent = __decorate([
        core_1.Component({
            templateUrl: './delete.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());
exports.DeleteDialogComponent = DeleteDialogComponent;
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
                firebase.initializeApp(config);
                this.database = firebase.firestore();
                settings = { timestampsInSnapshots: true };
                this.database.settings(settings);
                this.ui = new firebaseui.auth.AuthUI(firebase.auth());
                this.user = firebase.auth().currentUser;
                // this.getDarkPatterns();
                firebase.auth().onAuthStateChanged(function (user) {
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
        firebase.auth().signOut().then(function () {
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
                        storageRef = firebase.storage().ref();
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
                        storageRef = firebase.storage().ref();
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
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
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
        this.dialogRef = this.dialog.open(customimagesdialog_component_1.CustomImagesDialogComponent, {
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
                var storageRef = firebase.storage().ref();
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
    __decorate([
        core_1.ViewChild(generator_component_1.GeneratorComponent),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "generator", void 0);
    __decorate([
        core_1.ViewChild('loaderCanvas'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "loader", void 0);
    __decorate([
        core_1.ViewChildren('fileInput'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "fileInputs", void 0);
    __decorate([
        core_1.HostListener('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "handlekeydown", null);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [common_1.Location, { provide: common_2.LocationStrategy, useClass: common_2.PathLocationStrategy }, utilities_1.Utilities]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, utilities_1.Utilities, dialog_1.MatDialog, common_1.Location])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map