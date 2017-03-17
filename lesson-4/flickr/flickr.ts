// https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch

// `${this.uri}method=${this.qyeryMethod}&api_key=${this.apiKey}&text=${text}&page=1&format=json&nojsoncallback=1`
// https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg
// uri: 'https://api.flickr.com/services/rest/?',
//     queryMethod: 'flickr.photos.search',
//     apiKey: 'df05722919e95bb8904ef25378484604'


// debounce => lodash
// promise.all => owner


export class Flickr implements IFlickr {
  private _elem: HTMLDivElement;
  private _uri: string;
  private _queryMethod: string;
  private _apiKey: string;
  private _input: HTMLInputElement;
  private _searchButton: HTMLButtonElement;
  private _imageBox: HTMLDivElement;

  private _photo: Photo[];

  public constructor(opt: opt) {
    this._elem = opt.elem;
    this._uri = opt.uri;
    this._queryMethod = opt.queryMethod;
    this._apiKey = opt.apiKey;
    this._input = document.querySelector('.flickr-search-input') as HTMLInputElement;
    this._searchButton = document.querySelector('.flickr-search-button') as HTMLButtonElement;
    this._imageBox = document.querySelector('.image-area') as HTMLDivElement;

    this._searchButton.addEventListener('click', this.search.bind(this, this.render.bind(this)));
  }


  public render(data: PhotoRes): void {
    this._photo = data.photos.photo;
    let content: string = ``;
    for (const photo of this._photo) {
      content += `<div class="image-box">
<img src="https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg" />
<p>${photo.title}</p></div>`;
    }
    this._imageBox.innerHTML = content;
  }

  public search(cb: (res: Response) => Promise<PhotoRes>): void {
    if (!this._input.value) {
      return;
    }

    const text: string = this._input.value;
    const url: string =
      `${this._uri}method=${this._queryMethod}&api_key=${this._apiKey}&text=${text}&page=1&format=json&
      nojsoncallback=1`;
    this.getPhotos(url, cb);
  }

  public getPhotos(input: string, cb: (res: Response) => Promise<PhotoRes>): void {
    fetch(input)
      .then((res: Response) => res.json())
      .then(cb);
  }
}