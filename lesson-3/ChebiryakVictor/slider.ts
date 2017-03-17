export type coordObj = { left: number, top: number };
export class Slider {
    protected _element: HTMLElement;
    protected _thumb: HTMLElement;

    public constructor(element: HTMLElement) {
        this._element = element;
        this._thumb = document.querySelector('.thumb') as HTMLElement;
        this._thumb.addEventListener('mousedown', this._mouseDownHandler.bind(this));
        this._thumb.addEventListener('dragstart', () => false);
    }

    private _mouseDownHandler(ev: MouseEvent): boolean {
        const thumbCoords: coordObj = Slider.getCoords(this._thumb);
        const shiftX: number = ev.pageX - thumbCoords.left;
        const sliderCoords: coordObj = Slider.getCoords(this._element);

        document.onmousemove = (e: MouseEvent) => {
            let newLeft: number = e.pageX - shiftX - sliderCoords.left;

            if (newLeft < 0) {
                newLeft = 0;
            }
            const rightEdge: number = this._element.offsetWidth - this._thumb.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }

            this._thumb.style.left = newLeft + 'px';
        };

        document.onmouseup = () => {
            document.onmousemove = document.onmouseup = null;
        };

        return false;
    }

    private static getCoords(elem: HTMLElement): coordObj {
        const box: coordObj = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };

    }
}