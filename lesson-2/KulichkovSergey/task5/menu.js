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
        this._element = opt.element;
        this._menuList = opt.menuList;
        this._element.innerHTML = this._generateMenu(this._menuList);
        this._element.addEventListener('click', this._clickHandler);
    }
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
    Menu.prototype.getElem = function () {
        return this._element;
    };
    Menu.prototype._getElemByTitle = function (title) {
        var titles = this._element.querySelectorAll('.title');
        for (var i = 0; i < titles.length; ++i) {
            if (titles[i].innerHTML === title) {
                return titles[i].parentNode;
            }
        }
        return null;
    };
    Menu.prototype.open = function (title) {
        var elem = this._getElemByTitle(title);
        if (elem) {
            elem.classList.add('menu-open');
        }
    };
    Menu.prototype.close = function (title) {
        var elem = this._getElemByTitle(title);
        if (elem) {
            elem.classList.remove('menu-open');
        }
    };
    Menu.prototype.toggle = function (title) {
        var elem = this._getElemByTitle(title);
        if (elem) {
            elem.classList.toggle('menu-open');
        }
    };
    return Menu;
}());
var element = document.querySelector('.menu');
var nav = new Menu({ element: element, menuList: menuList });
document.getElementById('toggle').onclick = function () {
    nav.toggle('Млекопитающие');
};
document.getElementById('open').onclick = function () {
    nav.open('Рыбы');
};
document.getElementById('close').onclick = function () {
    nav.close('Рыбы');
};
