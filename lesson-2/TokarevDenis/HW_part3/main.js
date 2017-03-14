var Slider = (function () {
    function Slider(opt) {
        this._element = opt.element;
        this._element.addEventListener('mousedown', this._mouseDownHandler);
        this._element.addEventListener('dragstart', this._dragStartHandler);
    }
    Slider.prototype._mouseDownHandler = function (ev) {
        var el = ev.target;
        var thumbCoords = sl.getCoords(el);
        var shiftX = ev.pageX - thumbCoords.left;
        var sliderCoords = sl.getCoords(sliderElem);
        document.onmousemove = function (e) {
            var newLeft = e.pageX - shiftX - sliderCoords.left;
            if (newLeft < 0) {
                newLeft = 0;
            }
            var rightEdge = sliderElem.offsetWidth - el.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }
            el.style.left = newLeft + 'px';
        };
        document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
        };
        return false;
    };
    Slider.prototype._dragStartHandler = function () {
        return false;
    };
    Slider.prototype.getCoords = function (elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    };
    return Slider;
}());
var sliderElem = document.querySelector('#slider');
var element = document.querySelector('.thumb');
var sl = new Slider({ element: element });
