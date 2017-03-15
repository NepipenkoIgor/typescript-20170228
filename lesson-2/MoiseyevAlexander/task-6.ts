// Адаптировал решение http://learn.javascript.ru/task/slider

interface Coords {
  left: number;
  top: number;
}

class Slider {
  protected _element: HTMLElement;
  protected _thumb: HTMLElement;

  public constructor(element: HTMLElement, thumb: HTMLElement) {
    this._element = element;
    this._thumb = thumb;
    this._thumb.addEventListener('mousedown', this._mouseDownHandler.bind(this));
    this._thumb.addEventListener('dragstart', this._dragHandler.bind(this));
  }

  protected _getCoords(elem: HTMLElement): Coords {
    let box:ClientRect = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

  protected _mouseDownHandler(e: MouseEvent) {
    let thumbCoords: Coords = this._getCoords(this._thumb);
    let shiftX: number = e.pageX - thumbCoords.left;
    // shiftY здесь не нужен, слайдер двигается только по горизонтали

    let sliderCoords:Coords = this._getCoords(this._element);

    document.onmousemove = function(e: MouseEvent) {
      //  вычесть координату родителя, т.к. position: relative
      let newLeft: number = e.pageX - shiftX - sliderCoords.left;

      // курсор ушёл вне слайдера
      if (newLeft < 0) {
        newLeft = 0;
      }

      let rightEdge: number = this._element.offsetWidth - this._thumb.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      this._thumb.style.left = newLeft + 'px';
    }.bind(this);

    document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
    }.bind(this);

    return false; // disable selection start (cursor change)
  };

  protected _dragHandler(this: void, e: MouseEvent) {
    return false;
  };
}

let sliderElem:HTMLElement = document.querySelector('.slider') as HTMLElement;
let thumbElem:HTMLElement = sliderElem.children[0] as HTMLElement;

let sl = new Slider(sliderElem, thumbElem);