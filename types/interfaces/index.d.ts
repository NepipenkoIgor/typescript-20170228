type Photo = {
  farm: string,
  server: string,
  id: string,
  secret: string,
  title: string,
  owner: string
};

type PhotoRes = {
  photos: {
    photo: Photo[]
  }
};

type opt = {
  elem: HTMLDivElement,
  uri: string,
  queryMethod: string,
  apiKey: string
};

interface IFlickr {
  render(data: PhotoRes): void;
  search(cb: (res: Response) => Promise<PhotoRes>): void;
  getPhotos(input: string, cb: (res: Response) => Promise<PhotoRes>): void;
}