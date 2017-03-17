/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Flickr = (function () {
    function Flickr(opt) {
        this._elem = opt.elem;
        this._uri = opt.uri;
        this._queryMethod = opt.queryMethod;
        this._apiKey = opt.apiKey;
        this._input = document.querySelector('.flickr-search-input');
        this._searchButton = document.querySelector('.flickr-search-button');
        this._imageBox = document.querySelector('.image-area');
        this._searchButton.addEventListener('click', this.search.bind(this, this.render.bind(this)));
    }
    Flickr.prototype.render = function (data) {
        this._photo = data.photos.photo;
        var content = "";
        for (var _i = 0, _a = this._photo; _i < _a.length; _i++) {
            var photo = _a[_i];
            content += "<div class=\"image-box\">\n<img src=\"https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg\" />\n<p>" + photo.title + "</p></div>";
        }
        this._imageBox.innerHTML = content;
    };
    Flickr.prototype.search = function (cb) {
        if (!this._input.value) {
            return;
        }
        var text = this._input.value;
        var url = this._uri + "method=" + this._queryMethod + "&api_key=" + this._apiKey + "&text=" + text + "&page=1&format=json&\n      nojsoncallback=1";
        this.getPhotos(url, cb);
    };
    Flickr.prototype.getPhotos = function (input, cb) {
        fetch(input)
            .then(function (res) { return res.json(); })
            .then(cb);
    };
    return Flickr;
}());
exports.Flickr = Flickr;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var flickr_1 = __webpack_require__(0);
var elem = document.querySelector('.flickr-box');
new flickr_1.Flickr({
    elem: elem,
    uri: 'https://api.flickr.com/services/rest/?',
    queryMethod: 'flickr.photos.search',
    apiKey: 'df05722919e95bb8904ef25378484604'
});


/***/ })
/******/ ]);