"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Utilities = Utilities;
//# sourceMappingURL=utilities.js.map