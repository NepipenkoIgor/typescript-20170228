//  6) Реализуйте слайдер
//  http://learn.javascript.ru/task/slider

class Slider {
    private slider: HTMLDivElement;
    private thumb: HTMLDivElement;

    constructor(slider: HTMLDivElement) {
        this.slider = slider;
        this.thumb = slider.children[0] as HTMLDivElement;
        this.slider.addEventListener("click", this.sliderClickHandler.bind(this));
        this.thumb.addEventListener("mousedown", this.mouseDownHandler.bind(this));
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        this.mouseUpHandler = this.mouseUpHandler.bind(this);
    }

    private mouseDownHandler(event: MouseEvent): void {
        document.addEventListener("mousemove", this.mouseMoveHandler);
        document.addEventListener("mouseup", this.mouseUpHandler);
    }

    private mouseUpHandler(): void {
        document.removeEventListener("mousemove", this.mouseMoveHandler);
        document.removeEventListener("mouseup", this.mouseUpHandler);
    }

    private mouseMoveHandler(event: MouseEvent): void {
        this.moveTo(event.clientX);
    }

    private sliderClickHandler(event: MouseEvent): void {
        this.moveTo(event.clientX);
    }

    private moveTo(clientX: number) {
        let relativeX = clientX + pageXOffset - this.slider.getBoundingClientRect().left;
        if (relativeX < 0) {
            relativeX = 0;
        } else if (relativeX > this.slider.clientWidth) {
            relativeX = this.slider.clientWidth;
        }

        this.thumb.style.left = `${relativeX - (this.thumb.clientWidth / 2)}px`;
    }
}

let slider: Slider = new Slider(document.getElementById("slider") as HTMLDivElement);