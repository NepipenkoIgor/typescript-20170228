let menuList = [
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
class Menu {
    constructor(opt) {
        this._element = opt.element;
        this._menuList = opt.menuList;
        this._element.innerHTML = this._generateMenu(this._menuList);
        this._element.addEventListener('click', this._clickHandler);
    }
    _clickHandler(ev) {
        let el = ev.target;
        let classList = el.classList;
        if (!classList.contains('title')) {
            return;
        }
        let parentLi = el.parentNode;
        parentLi.classList.toggle('menu-open');
    }
    _generateMenu(menuList) {
        let content = `<ul>`;
        for (let a of menuList) {
            content += `<li data-title="${a.title}"><a ${a.items ? 'class=title' : ''}
      ${a.link ? 'href=' + a.link : ''}>${a.title}</a>`;
            if (!a.items) {
                content += `</li>`;
                continue;
            }
            content += `${this._generateMenu(a.items)}</li>`;
        }
        return `${content}</ul>`;
    }
    getElem() {
        return this._element;
    }
    _getMenuItemByTitle(title) {
        let listItem = document.querySelector(`li[data-title='${title}']`);
        return listItem;
    }
    open(title) {
        let listItem = this._getMenuItemByTitle(title);
        if (listItem) {
            listItem.classList.add('menu-open');
        }
    }
    close(title) {
        let listItem = this._getMenuItemByTitle(title);
        if (listItem) {
            listItem.classList.remove('menu-open');
        }
    }
    toggle(title) {
        let listItem = this._getMenuItemByTitle(title);
        if (listItem) {
            listItem.classList.toggle('menu-open');
        }
    }
}
let element = document.querySelector('.menu');
let nav = new Menu({ element, menuList });
console.log(nav.getElem());
