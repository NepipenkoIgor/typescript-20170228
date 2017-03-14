// Перегрузку функций я здесь нигде не использовал, т.к. не нашел места, где можно. Сделал достаточно универсальные функции, принимающие аргументы самых разных типов.
function isInArray(arr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var rl = rest.length;
    if (rl > 0) {
        for (var f = rl; f; f--) {
            var elem = rest[f - 1];
            if (arr.indexOf(elem) === -1) {
                return false;
            }
        }
    }
    return true;
}
console.log("isInArray function. Should be true: ", isInArray([2, 3, 5, "a", "b", "c"], 2, 3, "c"));
console.log("isInArray function. Should be false: ", isInArray([2, 3, 5, "a", "b", "c"], 2, 3, "c", "d"));
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var al = args.length;
    var sum = 0;
    if (al > 0) {
        for (var f = 0; f < al; f++) {
            var elem = args[f];
            if (typeof elem === 'string') {
                sum += parseInt(elem, 10);
            }
            else {
                sum += elem;
            }
        }
    }
    return sum;
}
console.log("summator function. Should be 10:", summator(1, 2, 3, 4));
console.log("summator function. Should be 15:", summator(1, "2", 3, 4, 5));
console.log("summator function. Should be 6:", summator("1", "2", "3"));
function getUnique() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var al = args.length;
    var arr = [];
    if (al > 0) {
        for (var f = 0; f < al; f++) {
            var elem = args[f];
            if (arr.indexOf(elem) === -1) {
                arr.push(elem);
            }
        }
    }
    return arr;
}
console.log("getUnique function. Should be [1,2,3,'d']: ", getUnique(1, 2, 3, 1, 3, 'd'));
console.log("getUnique function. Should be [1,'d',true,3,false]: ", getUnique(1, 'd', true, 3, false, 3, 'd'));
function reverseLetters(str) {
    if (!str.trim()) {
        return str;
    }
    var newstr = '';
    var words = str.split(' ');
    var wl = words.length;
    for (var w = 0; w < wl; w++) {
        // проходимся по каждому из слов, переданному в строке
        var word = words[w];
        var wl_1 = word.length;
        if (wl_1) {
            var start = 0;
            var end = word.length - 1;
            while (true) {
                // будем идти с разных концов слова, сдвигая указатели start и end
                // 1. Первым шагом проверяем являются ли символы, на которых находятся указатели, буквами
                while (!String(word[start]).match(/[a-z]/i)) {
                    start++;
                    if (start > wl_1) {
                        break;
                    }
                }
                while (!String(word[end]).match(/[a-z]/i)) {
                    end--;
                    if (end < 0) {
                        break;
                    }
                }
                // 2. Проверяем, если один указатель зашел за другой, значит мы поменяли местами все буквы
                if (start >= end) {
                    break;
                }
                // 3. Производим замену символов местами
                word = word.substring(0, start) + String(word[end]) + word.substring(start + 1, end) + String(word[start]) + word.substring(end + 1);
                // 4. Смещаем указатели и делаем повторную проверку
                start++;
                end--;
                if (start >= end) {
                    break;
                }
            }
        }
        words[w] = word;
    }
    newstr = words.join(' ');
    return newstr;
}
console.log("reverseLetters function. Should be 't1rat3s 2 wolleh': ", reverseLetters('s1tar3t 2 hellow'));
console.log("reverseLetters function. Should be 't1ra$%t3s 2 wol^leh': ", reverseLetters('s1ta$%r3t 2 hel^low'));
console.log("reverseLetters function. Should be 't1rat3s 2   wol5': ", reverseLetters('s1tar3t 2   low5'));
console.log("reverseLetters function. Should be 't1rat3s 2   wol5e': ", reverseLetters('s1tar3t 2   elo5w'));
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
var Menu = (function () {
    function Menu(opt) {
        this._element = opt.element;
        this._menuList = opt.menuList;
        this._element.innerHTML = this._generateMenu(this._menuList);
        this._element.addEventListener('click', this._clickHandler);
    }
    Menu.prototype.getElem = function () {
        return this._element;
    };
    Menu.hasClass = function (element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    };
    Menu.toggle = function (el, direction) {
        if (typeof el === 'string') {
            el = document.getElementById('menu-' + el);
            if (!el) {
                return;
            }
        }
        var parentLi = el.parentNode;
        if (direction !== undefined) {
            if (direction === true && Menu.hasClass(parentLi, 'menu-open')) {
                return;
            }
            if (direction === false && !Menu.hasClass(parentLi, 'menu-open')) {
                return;
            }
        }
        var classList = el.classList;
        if (!classList.contains('title')) {
            return;
        }
        parentLi.classList.toggle('menu-open');
    };
    Menu.open = function (el) {
        Menu.toggle(el, true);
    };
    Menu.close = function (el) {
        Menu.toggle(el, false);
    };
    Menu.prototype._clickHandler = function (ev) {
        var el = ev.target;
        Menu.toggle(el);
    };
    Menu.prototype._generateMenu = function (menuList) {
        var content = "<ul>";
        for (var _i = 0, menuList_1 = menuList; _i < menuList_1.length; _i++) {
            var a = menuList_1[_i];
            content += "<li><a " + (a.label ? 'id="menu-' + a.label + '"' : '') + " " + (a.items ? 'class=title' : '') + "\n                " + (a.link ? 'href=' + a.link : '') + ">" + a.title + "</a>";
            if (!a.items) {
                content += "</li>";
                continue;
            }
            content += this._generateMenu(a.items) + "</li>";
        }
        return content + "</ul>";
    };
    return Menu;
}());
var element = document.querySelector('.menu');
var nav = new Menu({ element: element, menuList: menuList });
console.log(nav.getElem());
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
        var thumbCoords = Slider.getCoords(this._thumb);
        var shiftX = e.pageX - thumbCoords.left;
        var sliderCoords = Slider.getCoords(this._element);
        document.onmousemove = (function (e) {
            var newLeft = e.pageX - shiftX - sliderCoords.left;
            if (newLeft < 0) {
                newLeft = 0;
            }
            var rightEdge = this._element.offsetWidth - this._thumb.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }
            this._thumb.style.left = newLeft + 'px';
        }).bind(this);
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
var sliderElement = document.getElementById('slider');
var slider = new Slider(sliderElement);
