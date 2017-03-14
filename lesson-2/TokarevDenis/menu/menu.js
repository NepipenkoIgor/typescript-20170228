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
        this.getElemButton = document.querySelector('.get-elem');
        this.toggleButton = document.querySelector('.toggle');
        this.openButton = document.querySelector('.open');
        this.closeButton = document.querySelector('.close');
        this.aimedLi = document.getElementsByTagName('li')[0];
    }
    getElem() {
        return this._element;
    }
    toggle() {
        this.aimedLi.classList.toggle('menu-open');
    }
    open() {
        this.aimedLi.classList.add('menu-open');
    }
    close() {
        this.aimedLi.classList.remove('menu-open');
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
            content += `<li><a ${a.items ? 'class=title' : ''}
      ${a.link ? 'href=' + a.link : ''}>${a.title}</a>`;
            if (!a.items) {
                content += `</li>`;
                continue;
            }
            content += `${this._generateMenu(a.items)}</li>`;
        }
        return `${content}</ul>`;
    }
}
let element = document.querySelector('.menu');
let nav = new Menu({ element, menuList });
function getElement() {
    return nav.getElem();
}
function toggleLi() {
    nav.toggle();
}
function openLi() {
    nav.open();
}
function closeLi() {
    nav.close();
}
