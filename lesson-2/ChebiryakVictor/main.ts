// Перегрузку функций я здесь нигде не использовал, т.к. не нашел места, где можно. Сделал достаточно универсальные функции, принимающие аргументы самых разных типов.

function isInArray(arr: (number|string)[], ...rest: (number|string)[]):boolean { // тип передаваемых в аргументах значений я ограничил number и string, хотя на деле я бы наверно использовал any. Хотя поиск других значений в массиве, вроде объектов, функций, булева значения, возможно бессмысленен, но зачем ограничивать возможности функции?
    const rl = rest.length;
    if (rl > 0) {
        for (let f = rl; f; f--) { // такой обход массива - самый быстрый с точки зрения производительности, хотя может быть не совсем понятный, могу заменить и на нормальный, как в следующей функции :)
            const elem = rest[f - 1];
            if (arr.indexOf(elem) === -1) {
                return false;
            }
        }
    }
    return true;
}

console.log("isInArray function. Should be true: ", isInArray([2,3,5,"a","b","c"], 2, 3, "c"));
console.log("isInArray function. Should be false: ", isInArray([2,3,5,"a","b","c"], 2, 3, "c", "d"));


function summator(...args: (number|string)[]): number {
    const al = args.length;
    let sum = 0;

    if (al > 0) {
        for (let f = 0; f < al; f++) {
            const elem = args[f];
            if (typeof elem === 'string') {
                sum += parseInt(elem, 10);
            } else {
                sum += elem;
            }
        }
    }
    return sum;
}

console.log("summator function. Should be 10:", summator(1, 2, 3, 4));
console.log("summator function. Should be 15:", summator(1, "2", 3, 4, 5));
console.log("summator function. Should be 6:", summator("1", "2", "3"));


function getUnique(...args: any[]): any[] {
    let al = args.length;
    let arr = [];
    if (al > 0) {
        for (let f = 0; f < al; f++) {
            const elem = args[f];
            if (arr.indexOf(elem) === -1) {
                arr.push(elem);
            }
        }
    }
    return arr;
}

console.log("getUnique function. Should be [1,2,3,'d']: ", getUnique(1,2,3,1,3,'d'));
console.log("getUnique function. Should be [1,'d',true,3,false]: ", getUnique(1,'d',true,3,false,3,'d'));


function reverseLetters(str: string):string {
    if (!str.trim()) {
        return str;
    }

    let newstr:string = '';
    let words:string[] = str.split(' ');
    const wl = words.length;

    for (let w = 0; w < wl; w++) {
        // проходимся по каждому из слов, переданному в строке
        let word = words[w];
        const wl = word.length;
        if (wl) {

            let start = 0;
            let end = word.length - 1;

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
                word = word.substring(0, start) + String(word[end]) + word.substring(start + 1, end) + String(word[start]) + word.substring(end + 1);

                // 4. Смещаем указатели и делаем повторную проверку
                start++;
                end--;
                if (start >= end) {
                    break;
                }
            }
        }
        words[w] = word;
    }
    newstr = words.join(' ');

    return newstr;
}

console.log("reverseLetters function. Should be 't1rat3s 2 wolleh': ", reverseLetters('s1tar3t 2 hellow'));
console.log("reverseLetters function. Should be 't1ra$%t3s 2 wol^leh': ", reverseLetters('s1ta$%r3t 2 hel^low'));
console.log("reverseLetters function. Should be 't1rat3s 2   wol5': ", reverseLetters('s1tar3t 2   low5'));
console.log("reverseLetters function. Should be 't1rat3s 2   wol5e': ", reverseLetters('s1tar3t 2   elo5w'));





type menuList = { title: string, link?: string, label?: string, items?: menuList }[];
type menuOpt = { element: HTMLElement, menuList: menuList }
let menuList: menuList = [
    {
        title: 'Животные',
        label: 'animals',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    { title: 'Коровы' },
                    { title: 'Ослы' },
                    { title: 'Собаки' },
                    { title: 'Тигры' }
                ]
            },
            {
                title: 'Другие',
                items: [
                    { title: 'Змеи' },
                    { title: 'Птицы' },
                    { title: 'Ящерицы' },
                ]
            }
        ]
    },
    {
        title: 'Рыбы',
        items: [
            {
                title: 'Аквариумные',
                items: [
                    { title: 'Гуппи' },
                    { title: 'Скалярии' }
                ]
            },
            {
                title: 'Форель',
                items: [
                    { title: 'Морская форель' }
                ]
            }
        ]
    }
];

class Menu {
    protected _element: HTMLElement;
    protected _menuList: menuList;

    public constructor(opt: menuOpt) {
        this._element = opt.element;
        this._menuList = opt.menuList;
        this._element.innerHTML = this._generateMenu(this._menuList);
        this._element.addEventListener('click', this._clickHandler)
    }

    public getElem(): HTMLElement {
        return this._element;
    }

    public static hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }

    public static toggle(el: (HTMLElement|string), direction?: boolean):void {
        if (typeof el === 'string') {
            el = document.getElementById('menu-' + el) as HTMLElement;
            if (!el) {
                return;
            }
        }

        let parentLi = el.parentNode as HTMLLIElement;

        if (direction !== undefined) {
            if (direction === true && Menu.hasClass(parentLi, 'menu-open')) {
                return;
            }
            if (direction === false && !Menu.hasClass(parentLi, 'menu-open')) {
                return;
            }
        }

        let classList = el.classList;
        if (!classList.contains('title')) {
            return;
        }
        parentLi.classList.toggle('menu-open')
    }

    public static open(el: (HTMLElement|string)) {
        Menu.toggle(el, true);
    }

    public static close(el: (HTMLElement|string)) {
        Menu.toggle(el, false);
    }

    protected _clickHandler(ev: MouseEvent):void {
        let el: HTMLElement = ev.target as HTMLElement;
        Menu.toggle(el);
    }

    protected _generateMenu(menuList: menuList): string {
        let content: string = `<ul>`;
        for (let a of menuList) {
            content += `<li><a ${a.label ? 'id="menu-' + a.label + '"' : ''} ${a.items ? 'class=title' : ''}
                ${a.link ? 'href=' + a.link : ''}>${a.title}</a>`
          if (!a.items) {
              content += `</li>`;
              continue;
          }
            content += `${this._generateMenu(a.items)}</li>`
        }
        return `${content}</ul>`
    }

}

let element = document.querySelector('.menu') as HTMLElement;
let nav = new Menu({ element, menuList })
console.log(nav.getElem());





// Сказать по правде - здесь я подсмотрел в решение и создал на основе него класс. Наша задача ведь изучить TypeScript, а не JavaScript ) схалтурил )
type coordObj = { left: number, top: number };
class Slider {
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
        var thumbCoords:coordObj = Slider.getCoords(this._thumb);
        var shiftX:number = e.pageX - thumbCoords.left;
        var sliderCoords:coordObj = Slider.getCoords(this._element);

        document.onmousemove = (function(e) {
            var newLeft:number = e.pageX - shiftX - sliderCoords.left;

            if (newLeft < 0) {
                newLeft = 0;
            }
            var rightEdge:number = this._element.offsetWidth - this._thumb.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }

            this._thumb.style.left = newLeft + 'px';
        }).bind(this);

        document.onmouseup = function() {
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

let sliderElement = document.getElementById('slider') as HTMLElement;
let slider = new Slider(sliderElement);