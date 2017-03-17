export declare type menuListType = {
    title: string;
    link?: string;
    label?: string;
    items?: menuListType;
}[];
export declare type menuOpt = {
    element: HTMLElement;
    menuList: menuListType;
};
export interface IMenu {
    getElem(): HTMLElement;
    toggle(el: (HTMLElement | string), direction?: boolean): void;
    open(el: (HTMLElement | string)): void;
    close(el: (HTMLElement | string)): void;
}
export declare class Menu implements IMenu {
    protected _element: HTMLElement;
    protected _menuList: menuListType;
    constructor(opt: menuOpt);
    getElem(): HTMLElement;
    toggle(el: (HTMLElement | string), direction?: boolean): void;
    open(el: (HTMLElement | string)): void;
    close(el: (HTMLElement | string)): void;
    protected hasClass(element: HTMLElement, cls: string): boolean;
    protected _clickHandler(ev: MouseEvent): void;
    protected _generateMenu(menuList: menuListType): string;
}
