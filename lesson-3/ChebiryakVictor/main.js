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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Menu = (function () {
    function Menu(opt) {
        var _this = this;
        this._element = opt.element;
        this._menuList = opt.menuList;
        this._element.innerHTML = this._generateMenu(this._menuList);
        this._element.addEventListener('click', this._clickHandler);
        var btns = document.querySelectorAll('.js-toggle-menu');
        if (!btns.length) {
            return;
        }
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function (e) {
                var el = e.target;
                var direction = el.dataset.direction;
                _this.toggle(el.dataset.item, direction !== undefined ? (direction === 'open' ? true : false) : undefined);
            });
        }
    }
    Menu.prototype.getElem = function () {
        return this._element;
    };
    Menu.prototype.toggle = function (el, direction) {
        if (typeof el === 'string') {
            el = document.getElementById('menu-' + el);
            if (!el) {
                return;
            }
        }
        var parentLi = el.parentNode;
        if (direction !== undefined) {
            if (direction === true && this.hasClass(parentLi, 'menu-open')) {
                return;
            }
            if (direction === false && !this.hasClass(parentLi, 'menu-open')) {
                return;
            }
        }
        var classList = el.classList;
        if (!classList.contains('title')) {
            return;
        }
        parentLi.classList.toggle('menu-open');
    };
    Menu.prototype.open = function (el) {
        this.toggle(el, true);
    };
    Menu.prototype.close = function (el) {
        this.toggle(el, false);
    };
    Menu.prototype.hasClass = function (element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    };
    Menu.prototype._clickHandler = function (ev) {
        var el = ev.target;
        this.toggle(el);
    };
    Menu.prototype._generateMenu = function (menuList) {
        var content = "<ul>";
        for (var _i = 0, menuList_1 = menuList; _i < menuList_1.length; _i++) {
            var a = menuList_1[_i];
            content += "<li><a " + (a.label ? 'id="menu-' + a.label + '"' : '') + " " + (a.items ? 'class=title' : '') + "\n                " + (a.link ? 'href=' + a.link : '') + ">" + a.title + "</a>";
            if (!a.items || !a.items.length) {
                content += "</li>";
                continue;
            }
            content += this._generateMenu(a.items) + "</li>";
        }
        return content + "</ul>";
    };
    return Menu;
}());
exports.Menu = Menu;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Slider = (function () {
    function Slider(element) {
        this._element = element;
        this._thumb = document.querySelector('.thumb');
        this._thumb.addEventListener('mousedown', this._mouseDownHandler.bind(this));
        this._thumb.addEventListener('dragstart', function () { return false; });
    }
    Slider.prototype._mouseDownHandler = function (ev) {
        var _this = this;
        var thumbCoords = Slider.getCoords(this._thumb);
        var shiftX = ev.pageX - thumbCoords.left;
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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var menu_1 = __webpack_require__(0);
var slider_1 = __webpack_require__(1);
var menuList = [
    {
        title: 'Животные',
        label: 'animals',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    { title: 'Коровы' },
                    { title: 'Ослы' },
                    { title: 'Собаки' },
                    { title: 'Тигры' }
                ]
            },
            {
                title: 'Другие',
                items: [
                    { title: 'Змеи' },
                    { title: 'Птицы' },
                    { title: 'Ящерицы' },
                ]
            }
        ]
    },
    {
        title: 'Рыбы',
        items: [
            {
                title: 'Аквариумные',
                items: [
                    { title: 'Гуппи' },
                    { title: 'Скалярии' }
                ]
            },
            {
                title: 'Форель',
                items: [
                    { title: 'Морская форель' }
                ]
            }
        ]
    }
];
var element = document.querySelector('.menu');
var nav = new menu_1.Menu({ element: element, menuList: menuList });
var sliderElement = document.getElementById('slider');
var slider = new slider_1.Slider(sliderElement);


/***/ })
/******/ ]);