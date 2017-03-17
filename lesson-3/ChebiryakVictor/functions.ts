export type sn = (number | string);
export type snb = (number | string | boolean);

export function isInArray(arr: sn[], ...rest: sn[]): boolean {
    return rest.length
        ? rest.reduce(
            (val: boolean, elem: sn) => val ? arr.includes(elem) : false,
            true
        )
        : false;
}

export function isNumber(val: sn): val is number {
    return typeof val === 'number';
}

export function summator(...args: sn[]): number {
    return args.length
        ? args.reduce<number>((sum: number, val: sn) => !isNumber(val) ? sum + Number(val) : sum + val, 0)
        : 0;
}

export function getUnique<T extends snb>(...args: T[]): T[] {
    return args.length
        ? args.reduce((arr: T[], val: T) => !arr.includes(val) ? arr.concat(val) : arr, [])
        : [];
}

export function reverseLetters(str: string): string {
    if (!str.trim()) {
        return str;
    }

    let newstr: string = '';
    const words: string[] = str.split(' ');

    // проходимся по каждому из слов, переданному в строке
    words.map((word: string, w: number) => {
        const wl: number = word.length;

        if (!wl) {
            return;
        }

        let start: number = 0;
        let end: number = wl - 1;

        while (true) {
            // будем идти с разных концов слова, сдвигая указатели start и end
            // 1. Первым шагом проверяем являются ли символы, на которых находятся указатели, буквами
            while (!String(word[start]).match(/[a-z]/i)) {
                start++;
                if (start > wl) {
                    break;
                }
            }
            while (!String(word[end]).match(/[a-z]/i)) {
                end--;
                if (end < 0) {
                    break;
                }
            }

            // 2. Проверяем, если один указатель зашел за другой, значит мы поменяли местами все буквы
            if (start >= end) {
                break;
            }

            // 3. Производим замену символов местами
            word = word.substring(0, start)
                    + String(word[end])
                    + word.substring(start + 1, end)
                    + String(word[start]) + word.substring(end + 1);

            // 4. Смещаем указатели и делаем повторную проверку
            start++;
            end--;
            if (start >= end) {
                break;
            }
        }
        words[w] = word;
    });
    newstr = words.join(' ');

    return newstr;
}





export type coordObj = { left: number, top: number };
export class Slider {
    protected _element: HTMLElement;
    protected _thumb: HTMLElement;

    public constructor(element: HTMLElement) {
        this._element = element;
        this._thumb = document.querySelector('.thumb') as HTMLElement
        this._thumb.addEventListener('mousedown', this._mouseDownHandler.bind(this))
        this._thumb.addEventListener('dragstart', function() {
            return false;
        });
    }

    private _mouseDownHandler(e: MouseEvent):boolean {
        let thumbCoords:coordObj = Slider.getCoords(this._thumb);
        let shiftX:number = e.pageX - thumbCoords.left;
        let sliderCoords:coordObj = Slider.getCoords(this._element);

        document.onmousemove = (e) => {
            var newLeft:number = e.pageX - shiftX - sliderCoords.left;

            if (newLeft < 0) {
                newLeft = 0;
            }
            var rightEdge:number = this._element.offsetWidth - this._thumb.offsetWidth;
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
        var box:coordObj = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };

    }
}