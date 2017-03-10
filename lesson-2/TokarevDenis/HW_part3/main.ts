type sliderOpt = { element: HTMLElement };
type coords = {top: number, left: number};

class Slider {
  protected _element: HTMLElement;

  public constructor(opt: sliderOpt) {
    this._element = opt.element;

    this._element.addEventListener('mousedown', this._mouseDownHandler);
    this._element.addEventListener('dragstart', this._dragStartHandler);
  }

  protected _mouseDownHandler(ev: MouseEvent) {
    let el: HTMLElement = ev.target as HTMLElement;
    let thumbCoords: coords = sl.getCoords(el);
    let shiftX: number = ev.pageX - thumbCoords.left;
    let sliderCoords: coords = sl.getCoords(sliderElem);

    document.onmousemove = function(e) {
      let newLeft: number = e.pageX - shiftX - sliderCoords.left;

      if (newLeft < 0) {
        newLeft = 0;
      }

      let rightEdge: number = sliderElem.offsetWidth - el.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      el.style.left = newLeft + 'px';
    };

    document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
    };

    return false;
  }

  protected _dragStartHandler() {
    return false;
  }

  public getCoords(elem: HTMLElement): coords {
    let box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }
}

let sliderElem = document.querySelector('#slider') as HTMLElement;
let element = document.querySelector('.thumb') as HTMLElement;
let sl = new Slider({ element });