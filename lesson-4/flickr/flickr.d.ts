/// <reference types="interfaces" />
export declare class Flickr implements IFlickr {
    private _elem;
    private _uri;
    private _queryMethod;
    private _apiKey;
    private _input;
    private _searchButton;
    private _imageBox;
    private _photo;
    constructor(opt: opt);
    render(data: PhotoRes): void;
    search(cb: (res: Response) => Promise<PhotoRes>): void;
    getPhotos(input: string, cb: (res: Response) => Promise<PhotoRes>): void;
}
