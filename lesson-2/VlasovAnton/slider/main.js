//  6) Реализуйте слайдер
//  http://learn.javascript.ru/task/slider
var Slider = (function () {
    function Slider(slider) {
        this.slider = slider;
        this.thumb = slider.children[0];
        this.slider.addEventListener("click", this.sliderClickHandler.bind(this));
        this.thumb.addEventListener("mousedown", this.mouseDownHandler.bind(this));
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        this.mouseUpHandler = this.mouseUpHandler.bind(this);
    }
    Slider.prototype.mouseDownHandler = function (event) {
        document.addEventListener("mousemove", this.mouseMoveHandler);
        document.addEventListener("mouseup", this.mouseUpHandler);
    };
    Slider.prototype.mouseUpHandler = function () {
        document.removeEventListener("mousemove", this.mouseMoveHandler);
        document.removeEventListener("mouseup", this.mouseUpHandler);
    };
    Slider.prototype.mouseMoveHandler = function (event) {
        this.moveTo(event.clientX);
    };
    Slider.prototype.sliderClickHandler = function (event) {
        this.moveTo(event.clientX);
    };
    Slider.prototype.moveTo = function (clientX) {
        var relativeX = clientX + pageXOffset - this.slider.getBoundingClientRect().left;
        if (relativeX < 0) {
            relativeX = 0;
        }
        else if (relativeX > this.slider.clientWidth) {
            relativeX = this.slider.clientWidth;
        }
        this.thumb.style.left = relativeX - (this.thumb.clientWidth / 2) + "px";
    };
    return Slider;
}());
var slider = new Slider(document.getElementById("slider"));
