export declare type sn = (number | string);
export declare type snb = (number | string | boolean);
export declare function isInArray(arr: sn[], ...rest: sn[]): boolean;
export declare function isNumber(val: sn): val is number;
export declare function summator(...args: sn[]): number;
export declare function getUnique<T extends snb>(...args: T[]): T[];
export declare function reverseLetters(str: string): string;
export declare type coordObj = {
    left: number;
    top: number;
};
export declare class Slider {
    protected _element: HTMLElement;
    protected _thumb: HTMLElement;
    constructor(element: HTMLElement);
    private _mouseDownHandler(e);
    private static getCoords(elem);
}
