// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.
function isInArray(array) {
    var elements = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        elements[_i - 1] = arguments[_i];
    }
    return elements.every(function (element) { return array.indexOf(element) > -1; });
}
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (sum, c) { return sum + (typeof c === "string" ? parseInt(c) : c); }, 0);
}
function summator2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (sum, c) { return (typeof c === "string" ? sum + c : sum + c); });
}
// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.
function getUnique() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var unique = new Set();
    return arr.filter(function (el) { return !unique.has(el) && unique.add(el); });
}
// или без Set
function getUnique2() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr.reduce(function (res, el) { return res.indexOf(el) > -1 ? res : res.push(el) && res; }, []);
}
// 4)
//    Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
//    цифры и специальные символы должны остаться на месте
//       s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
//       s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
//       s1tar3t 2   low5  ->  t1rat3s 2   wol5
// для простоты: буквы - латинский алфавит, разделители слов - пробелы
function revers(line) {
    // разбиваем на слова, разворачиваем каждое слово и обратно собираем
    return line.split(/( )/).map(function (el) { return reversLetters(el.split("")); }).join("");
}
function reversLetters(chars) {
    // создаем набор букв
    var letters = chars.filter(function (char) { return isLetter(char); });
    // заменяем только буквы, на буквы из letters, в обратном порядке
    return chars.map(function (char) { return isLetter(char) ? letters.pop() : char; }).join("");
}
function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}
var menuList = [
    {
        title: 'Животные',
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
                ],
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
        this._titleToElements = new Map();
        this._titles = [];
        this._element = opt.element;
        this._menuList = opt.menuList;
        this._element.innerHTML = this._generateMenu(this._menuList);
        this._element.addEventListener('click', this._clickHandler);
        // Запомним соответствие метки и её узлу в дереве
        var titles = this._element.getElementsByClassName("title");
        for (var i = 0; i < titles.length; i++) {
            var titleNode = titles.item(i);
            var title = titleNode.innerText;
            if (!this._titleToElements.has(title)) {
                this._titleToElements.set(title, []);
            }
            this._titleToElements.get(title).push(titleNode.parentNode);
            this._titles.push(title);
        }
    }
    // getElem -возвращает элемент в котором генерится меню;
    Menu.prototype.getElem = function () {
        return this._element;
    };
    // toggle открыть/закрыть элемент меню по метке;
    Menu.prototype.toggle = function (title, open) {
        this._titleToElements.has(title) && this._titleToElements.get(title).forEach(function (node) { return node.classList.toggle('menu-open', open); });
    };
    // close закрыть элемент меню по метке;
    Menu.prototype.close = function (title) {
        this.toggle(title, false);
    };
    // open открыть элемент меню по метке
    Menu.prototype.open = function (title) {
        this.toggle(title, true);
    };
    // получить все метки (для демонстрации)
    Menu.prototype.getTitles = function () {
        return this._titles;
    };
    Menu.prototype._clickHandler = function (ev) {
        var el = ev.target;
        var classList = el.classList;
        if (!classList.contains('title')) {
            return;
        }
        var parentLi = el.parentNode;
        parentLi.classList.toggle('menu-open');
    };
    Menu.prototype._generateMenu = function (menuList) {
        var content = "<ul>";
        for (var _i = 0, menuList_1 = menuList; _i < menuList_1.length; _i++) {
            var a = menuList_1[_i];
            content += "<li><a " + (a.items ? 'class=title' : '') + "\n      " + (a.link ? 'href=' + a.link : '') + ">" + a.title + "</a>";
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
// для демонстрации
var selector = document.getElementById("titles");
selector.innerHTML = nav.getTitles().reduce(function (resultHtml, title) { return resultHtml + ("<option value = " + title + ">" + title + "</option>"); }, "");
document.getElementById("toggle").addEventListener("click", function () { return nav.toggle(selector.value); });
document.getElementById("open").addEventListener("click", function () { return nav.open(selector.value); });
document.getElementById("close").addEventListener("click", function () { return nav.close(selector.value); });
