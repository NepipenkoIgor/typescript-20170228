

// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.

function isInArray<T>(array: T[], ...elements: T[]): boolean {
    return elements.every((element: T) => array.indexOf(element) > -1);
}

// 2)
//  Написать функцию summator(), которая сумирует переданые ей аргументы.
//  Аргументы могут быть либо строкового, либо числового типа. Количество их не ограничено

type sn = string | number;

function summator(...args: number[]): number;
function summator(...args: string[]): number;
function summator(...args: sn[]): sn {
    return args.reduce((sum: number, c: sn) => sum + (typeof c === "string" ? parseInt(c) : c), 0);
}

// На случай если в задании имелась ввиду конкатенация для строк
function summator2(...args: number[]): number;
function summator2(...args: string[]): string;
function summator2(...args: sn[]): sn {
    return args.reduce((sum, c) => (typeof c === "string" ? sum as string + c : sum as number + c));
}

// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.

function getUnique<T>(...arr: T[]): T[] {
    let unique: Set<T> = new Set<T>();
    return arr.filter((el: T) => !unique.has(el) && unique.add(el));
} 

// или без Set
function getUnique2<T>(...arr: T[]): T[] {
    return arr.reduce((res: T[], el: T) => res.indexOf(el) > -1 ? res : res.push(el) && res, []);
} 

// 4)
//    Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
//    цифры и специальные символы должны остаться на месте
//       s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
//       s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
//       s1tar3t 2   low5  ->  t1rat3s 2   wol5

// для простоты: буквы - латинский алфавит, разделители слов - пробелы

function revers(line: string): string {
    // разбиваем на слова, разворачиваем каждое слово и обратно собираем
    return line.split(/( )/).map((el: string) => reversLetters(el.split(""))).join("");
}

function reversLetters(chars: string[]): string {
    // создаем набор букв
    let letters: string[] = chars.filter((char: string) => isLetter(char));
    // заменяем только буквы, на буквы из letters, в обратном порядке
    return chars.map((char: string) => isLetter(char) ? letters.pop() : char).join("");
}

function isLetter(c: string): boolean {
    return c.toLowerCase() != c.toUpperCase();
}

//  5) Улучшите класс с менюшкой добавив публичные методы
//     getElem -возвращает элемент в котором генерится меню;
//      toggle открыть/закрыть элемент меню по метке;
//      close закрыть элемент меню по метке;
//      open открыть элемент меню по метке

//  в интерфейсе реализуйте кнопками вызов этих методов ( например над меню)
//  P.S. для демонстрации


type menuList = { title: string, link?: string, items?: menuList }[];
type menuOpt = { element: HTMLElement, menuList: menuList }
let menuList: menuList = [
    {
        title: 'Животные',
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
                ],
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
    protected _titleToElements: Map<string, HTMLElement[]> = new Map<string, HTMLElement[]>();
    protected _titles: string[] = [];

    public constructor(opt: menuOpt) {
        this._element = opt.element;
        this._menuList = opt.menuList;
        this._element.innerHTML = this._generateMenu(this._menuList);
        this._element.addEventListener('click', this._clickHandler)

        // Запомним соответствие метки и её узлу в дереве
        let titles: NodeListOf<Element> = this._element.getElementsByClassName("title");
        for (let i = 0; i < titles.length; i++) {
            let titleNode: HTMLElement = titles.item(i) as HTMLElement;
            let title: string = titleNode.innerText;
            if (!this._titleToElements.has(title)) {
                this._titleToElements.set(title, []);
            }
            this._titleToElements.get(title).push(titleNode.parentNode as HTMLElement);
            this._titles.push(title);
        } 
    }

    // getElem -возвращает элемент в котором генерится меню;
    public getElem(): HTMLElement {
        return this._element;
    }

    // toggle открыть/закрыть элемент меню по метке;
    public toggle(title: string, open?: boolean): void {
        this._titleToElements.has(title) && this._titleToElements.get(title).forEach((node: HTMLElement) => node.classList.toggle('menu-open', open));
    }

    // close закрыть элемент меню по метке;
    public close(title: string): void {
        this.toggle(title, false);
    } 

    // open открыть элемент меню по метке
    public open(title: string): void {
        this.toggle(title, true);
    }

    // получить все метки (для демонстрации)
    public getTitles(): string[] {
        return this._titles;
    }

    protected _clickHandler(this: void, ev: MouseEvent) {
        let el: HTMLElement = ev.target as HTMLElement;
        let classList = el.classList;
        if (!classList.contains('title')) {
            return;
        }
        let parentLi = el.parentNode as HTMLLIElement;
        parentLi.classList.toggle('menu-open')
    }

    protected _generateMenu(menuList: menuList): string {
        let content: string = `<ul>`;
        for (let a of menuList) {
            content += `<li><a ${a.items ? 'class=title' : ''}
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
let nav = new Menu({ element, menuList });

// для демонстрации
let selector: HTMLSelectElement = document.getElementById("titles") as HTMLSelectElement;
selector.innerHTML = nav.getTitles().reduce((resultHtml:string, title: string) => resultHtml + `<option value = ${title}>${title}</option>`, "");
(document.getElementById("toggle") as HTMLButtonElement).addEventListener("click", () => nav.toggle(selector.value));
(document.getElementById("open") as HTMLButtonElement).addEventListener("click", () => nav.open(selector.value));
(document.getElementById("close") as HTMLButtonElement).addEventListener("click", () => nav.close(selector.value));
