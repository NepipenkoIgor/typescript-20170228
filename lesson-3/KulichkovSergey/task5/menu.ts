type menuList = {title: string, link?: string, items?: menuList}[];

type menuOpt = {element: HTMLElement, menuList: menuList};

let menuList: menuList = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    {title: 'Коровы'},
                    {title: 'Ослы'},
                    {title: 'Собаки'},
                    {title: 'Тигры'}
                ]
            },
            {
                title: 'Другие',
                items: [
                    {title: 'Змеи'},
                    {title: 'Птицы'},
                    {title: 'Ящерицы'},
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
                    {title: 'Гуппи'},
                    {title: 'Скалярии'}
                ]
            },
            {
                title: 'Форель',
                items: [
                    {title: 'Морская форель'}
                ]
            }
        ]
    }
];

class Menu {
    protected _element: HTMLElement;
    protected _menuList: menuList;

    public constructor(opt: menuOpt) {
        this._element = opt.element;
        this._menuList = opt.menuList;
        this._element.innerHTML = this._generateMenu(this._menuList);
        this._element.addEventListener('click', this._clickHandler);
    }

    public getElem(): HTMLElement {
        return this._element;
    }

    public open(title: string): void {
        const elem: HTMLElement = this._getElemByTitle(title);
        if (elem) {
            elem.classList.add('menu-open');
        }
    }

    public close(title: string): void {
        const elem: HTMLElement = this._getElemByTitle(title);

        if (elem) {
            elem.classList.remove('menu-open');
        }
    }

    public toggle(title: string): void {
        const elem: HTMLElement = this._getElemByTitle(title);

        if (elem) {
            elem.classList.toggle('menu-open');
        }
    }

    protected _clickHandler(this: void, ev: MouseEvent): void {
        const el: HTMLElement = ev.target as HTMLElement;
        const classList: DOMTokenList = el.classList;
        const parentLi: HTMLElement = el.parentNode as HTMLLIElement;

        if (!classList.contains('title')) {
            return;
        }
        parentLi.classList.toggle('menu-open');
    }

    protected _generateMenu(_menuList: menuList): string {
        let content: string = `<ul>`;
        for (const a of _menuList) {
            content += `<li><a ${a.items ? 'class=title' : ''} ${a.link ? 'href=' + a.link : ''}>${a.title}</a>`;
            if (!a.items) {
                content += `</li>`;
                continue;
            }
            content += `${this._generateMenu(a.items)}</li>`;
        }
        return `${content}</ul>`;
    }

    private _getElemByTitle(title: string): HTMLElement {
        const titles: NodeListOf<Element> = this._element.querySelectorAll('.title');

        for (let i: number = 0; i < titles.length; ++i) {
            if (titles[i].innerHTML === title) {
                return titles[i].parentNode as HTMLElement;
            }
        }

        return null;
    }
}

let element: HTMLElement = document.querySelector('.menu') as HTMLElement;
let nav: Menu = new Menu({element, menuList});

document.getElementById('toggle').onclick = () => {
    nav.toggle('Млекопитающие');
};
document.getElementById('open').onclick = () => {
    nav.open('Рыбы');
};
document.getElementById('close').onclick = () => {
    nav.close('Рыбы');
};