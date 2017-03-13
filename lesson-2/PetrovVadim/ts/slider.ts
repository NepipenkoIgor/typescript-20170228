type sliderOpt = {el:HTMLElement, thumb:HTMLElement, initThumbLeft:number};

class Slider {

	protected el:HTMLElement;
	protected thumb:HTMLElement;
	thumbWidth:number;
	initThumbLeft:number;
	currentThumbPos:number;
	startCursorPos:number;
	maxVal:number;

	init():void{
		this.thumbWidth = this.thumb.offsetWidth;
		this.thumb.style.left = this.initThumbLeft + 'px';
		this.thumb.addEventListener('mousedown', this.mouseDownHandler.bind(this));
		this.maxVal = this.el.offsetWidth - this.thumbWidth;
	}
	
	public constructor(opt: sliderOpt) {
		this.el = opt.el;
		this.thumb = opt.thumb;
		this.initThumbLeft = opt.initThumbLeft;
		this.init();
	}

	mouseDownHandler(e:MouseEvent):void{
		e.preventDefault();
		this.startCursorPos = e.pageX;
		this.currentThumbPos = parseInt(this.thumb.style.left.replace('px',''));
		document.addEventListener('mousemove', this.mouseMoveHandler);
		document.addEventListener('mouseup', this.mouseUpHandler.bind(this));
	}

	private originMouseMoveHandler(e:MouseEvent){
		let displace = e.pageX - this.startCursorPos;
		let newPos = this.currentThumbPos + displace;
		if( newPos <= this.maxVal && newPos >= 0 ) {
			this.thumb.style.left = newPos + 'px';
		}

	}
	mouseMoveHandler = this.originMouseMoveHandler.bind(this); 

	mouseUpHandler(e:MouseEvent){
		document.removeEventListener('mousemove', this.mouseMoveHandler );
	}
}

let sliderEl = document.querySelector('.slider') as HTMLElement;
let thumbEl = document.querySelector('.thumb') as HTMLElement;
let someSlider = new Slider({ 
	el: sliderEl, 
	thumb: thumbEl,
	initThumbLeft: 50
});