export declare type coordObj = {
    left: number;
    top: number;
};
export declare class Slider {
    protected _element: HTMLElement;
    protected _thumb: HTMLElement;
    constructor(element: HTMLElement);
    private _mouseDownHandler(ev);
    private static getCoords(elem);
}
