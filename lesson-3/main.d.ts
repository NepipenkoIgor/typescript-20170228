declare type opt = {
    elem: HTMLDivElement;
    uri: string;
    queryMethod: string;
    apiKey: string;
};
declare class Flickr {
    protected elem: HTMLDivElement;
    protected input: HTMLInputElement;
    protected searchButton: HTMLButtonElement;
    protected imagesBox: HTMLDivElement;
    protected uri: string;
    protected queryMethod: string;
    protected apiKey: string;
    protected photos: any[];
    constructor(opt: opt);
    protected render(body: any): void;
    protected search(cb: (body: any) => any): void;
    protected getPhotos(input: string | Request, cb: (body: any) => any): void;
}
declare let elem: HTMLDivElement;
