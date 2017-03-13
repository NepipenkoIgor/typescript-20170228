var Slider = (function () {
    function Slider(opt) {
        this.mouseMoveHandler = this.originMouseMoveHandler.bind(this);
        this.el = opt.el;
        this.thumb = opt.thumb;
        this.initThumbLeft = opt.initThumbLeft;
        this.init();
    }
    Slider.prototype.init = function () {
        this.thumbWidth = this.thumb.offsetWidth;
        this.thumb.style.left = this.initThumbLeft + 'px';
        this.thumb.addEventListener('mousedown', this.mouseDownHandler.bind(this));
        this.maxVal = this.el.offsetWidth - this.thumbWidth;
    };
    Slider.prototype.mouseDownHandler = function (e) {
        e.preventDefault();
        this.startCursorPos = e.pageX;
        this.currentThumbPos = parseInt(this.thumb.style.left.replace('px', ''));
        document.addEventListener('mousemove', this.mouseMoveHandler);
        document.addEventListener('mouseup', this.mouseUpHandler.bind(this));
    };
    Slider.prototype.originMouseMoveHandler = function (e) {
        var displace = e.pageX - this.startCursorPos;
        var newPos = this.currentThumbPos + displace;
        if (newPos <= this.maxVal && newPos >= 0) {
            this.thumb.style.left = newPos + 'px';
        }
    };
    Slider.prototype.mouseUpHandler = function (e) {
        document.removeEventListener('mousemove', this.mouseMoveHandler);
    };
    return Slider;
}());
var sliderEl = document.querySelector('.slider');
var thumbEl = document.querySelector('.thumb');
var someSlider = new Slider({
    el: sliderEl,
    thumb: thumbEl,
    initThumbLeft: 50
});
