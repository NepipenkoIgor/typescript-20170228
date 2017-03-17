"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isInArray(arr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return rest.length
        ? rest.reduce(function (val, elem) { return val ? arr.includes(elem) : false; }, true)
        : false;
}
exports.isInArray = isInArray;
function isNumber(val) {
    return typeof val === 'number';
}
exports.isNumber = isNumber;
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.length
        ? args.reduce(function (sum, val) { return !isNumber(val) ? sum + Number(val) : sum + val; }, 0)
        : 0;
}
exports.summator = summator;
function getUnique() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.length
        ? args.reduce(function (arr, val) { return !arr.includes(val) ? arr.concat(val) : arr; }, [])
        : [];
}
exports.getUnique = getUnique;
function reverseLetters(str) {
    if (!str.trim()) {
        return str;
    }
    var newstr = '';
    var words = str.split(' ');
    words.map(function (word, w) {
        var wl = word.length;
        if (!wl) {
            return;
        }
        var start = 0;
        var end = wl - 1;
        while (true) {
            while (!String(word[start]).match(/[a-z]/i)) {
                start++;
                if (start > wl) {
                    break;
                }
            }
            while (!String(word[end]).match(/[a-z]/i)) {
                end--;
                if (end < 0) {
                    break;
                }
            }
            if (start >= end) {
                break;
            }
            word = word.substring(0, start)
                + String(word[end])
                + word.substring(start + 1, end)
                + String(word[start]) + word.substring(end + 1);
            start++;
            end--;
            if (start >= end) {
                break;
            }
        }
        words[w] = word;
    });
    newstr = words.join(' ');
    return newstr;
}
exports.reverseLetters = reverseLetters;
var Slider = (function () {
    function Slider(element) {
        this._element = element;
        this._thumb = document.querySelector('.thumb');
        this._thumb.addEventListener('mousedown', this._mouseDownHandler.bind(this));
        this._thumb.addEventListener('dragstart', function () {
            return false;
        });
    }
    Slider.prototype._mouseDownHandler = function (e) {
        var _this = this;
        var thumbCoords = Slider.getCoords(this._thumb);
        var shiftX = e.pageX - thumbCoords.left;
        var sliderCoords = Slider.getCoords(this._element);
        document.onmousemove = function (e) {
            var newLeft = e.pageX - shiftX - sliderCoords.left;
            if (newLeft < 0) {
                newLeft = 0;
            }
            var rightEdge = _this._element.offsetWidth - _this._thumb.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }
            _this._thumb.style.left = newLeft + 'px';
        };
        document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
        };
        return false;
    };
    Slider.getCoords = function (elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    };
    return Slider;
}());
exports.Slider = Slider;
