export type menuListType = { title: string, link?: string, label?: string, items?: menuListType }[];
export type menuOpt = { element: HTMLElement, menuList: menuListType };

export interface IMenu {
    getElem(): HTMLElement;
    toggle(el: (HTMLElement | string), direction?: boolean): void;
    open(el: (HTMLElement | string)): void;
    close(el: (HTMLElement | string)): void;
}

export class Menu implements IMenu {
    protected _element: HTMLElement;
    protected _menuList: menuListType;

    public constructor(opt: menuOpt) {
        this._element = opt.element;
        this._menuList = opt.menuList;
        this._element.innerHTML = this._generateMenu(this._menuList);
        this._element.addEventListener('click', this._clickHandler);

        const btns: NodeList = document.querySelectorAll('.js-toggle-menu');
        if (!btns.length) {
            return;
        }
        for (let i: number = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', (e: Event) => {
                const el: HTMLElement = e.target as HTMLElement;
                const direction: string = el.dataset.direction;
                this.toggle(
                    el.dataset.item,
                    direction !== undefined ? (direction === 'open' ? true : false) : undefined
                );
            });
        }
    }

    public getElem(): HTMLElement {
        return this._element;
    }

    public toggle(el: (HTMLElement|string), direction?: boolean): void {
        if (typeof el === 'string') {
            el = document.getElementById('menu-' + el) as HTMLElement;
            if (!el) {
                return;
            }
        }

        const parentLi: HTMLLIElement = el.parentNode as HTMLLIElement;

        if (direction !== undefined) {
            if (direction === true && this.hasClass(parentLi, 'menu-open')) {
                return;
            }
            if (direction === false && !this.hasClass(parentLi, 'menu-open')) {
                return;
            }
        }

        const classList: DOMTokenList = el.classList;
        if (!classList.contains('title')) {
            return;
        }
        parentLi.classList.toggle('menu-open');
    }

    public open(el: (HTMLElement | string)): void {
        this.toggle(el, true);
    }

    public close(el: (HTMLElement | string)): void {
        this.toggle(el, false);
    }

    protected hasClass(element: HTMLElement, cls: string): boolean {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }

    protected _clickHandler(ev: MouseEvent): void {
        const el: HTMLElement = ev.target as HTMLElement;
        this.toggle(el);
    }

    protected _generateMenu(menuList: menuListType): string {
        let content: string = `<ul>`;
        for (const a of menuList) {
            content += `<li><a ${a.label ? 'id="menu-' + a.label + '"' : ''} ${a.items ? 'class=title' : ''}
                ${a.link ? 'href=' + a.link : ''}>${a.title}</a>`;

            if (!a.items || !a.items.length) {
                content += `</li>`;
                continue;
            }
            content += `${this._generateMenu(a.items)}</li>`;
        }
        return `${content}</ul>`;
    }

}