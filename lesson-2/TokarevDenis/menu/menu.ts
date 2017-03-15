type menuList = { title: string, link?: string, items?: menuList }[];
type menuOpt = { element: HTMLElement, menuList: menuList };

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
  public getElemButton: HTMLElement;
  public toggleButton: HTMLElement;
  public openButton: HTMLElement;
  public closeButton: HTMLElement;
  public aimedLi: HTMLLIElement;


  protected _element: HTMLElement;
  protected _menuList: menuList;


  public constructor(opt: menuOpt) {
    this._element = opt.element;
    this._menuList = opt.menuList;
    this._element.innerHTML = this._generateMenu(this._menuList);
    this._element.addEventListener('click', this._clickHandler);

    this.getElemButton = document.querySelector('.get-elem') as HTMLElement;
    this.toggleButton = document.querySelector('.toggle') as HTMLElement;
    this.openButton = document.querySelector('.open') as HTMLElement;
    this.closeButton = document.querySelector('.close') as HTMLElement;
    this.aimedLi = document.getElementsByTagName('li')[0] as HTMLLIElement;
  }

  public getElem(): HTMLElement {
    return this._element;
  }

  public toggle() {
    this.aimedLi.classList.toggle('menu-open');
  }

  public open() {
    this.aimedLi.classList.add('menu-open');
  }

  public close() {
    this.aimedLi.classList.remove('menu-open');
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

function getElement(): HTMLElement {
  return nav.getElem();
}

function toggleLi() {
  nav.toggle();
}

function openLi() {
  nav.open();
}

function closeLi() {
  nav.close();
}