// Адаптировал решение http://learn.javascript.ru/task/slider
class Slider {
    constructor(element, thumb) {
        this._element = element;
        this._thumb = thumb;
        this._thumb.addEventListener('mousedown', this._mouseDownHandler.bind(this));
        this._thumb.addEventListener('dragstart', this._dragHandler.bind(this));
    }
    _getCoords(elem) {
        let box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
    _mouseDownHandler(e) {
        let thumbCoords = this._getCoords(this._thumb);
        let shiftX = e.pageX - thumbCoords.left;
        // shiftY здесь не нужен, слайдер двигается только по горизонтали
        let sliderCoords = this._getCoords(this._element);
        document.onmousemove = function (e) {
            //  вычесть координату родителя, т.к. position: relative
            let newLeft = e.pageX - shiftX - sliderCoords.left;
            // курсор ушёл вне слайдера
            if (newLeft < 0) {
                newLeft = 0;
            }
            let rightEdge = this._element.offsetWidth - this._thumb.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }
            this._thumb.style.left = newLeft + 'px';
        }.bind(this);
        document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
        }.bind(this);
        return false; // disable selection start (cursor change)
    }
    ;
    _dragHandler(e) {
        return false;
    }
    ;
}
let sliderElem = document.querySelector('.slider');
let thumbElem = sliderElem.children[0];
let sl = new Slider(sliderElem, thumbElem);
