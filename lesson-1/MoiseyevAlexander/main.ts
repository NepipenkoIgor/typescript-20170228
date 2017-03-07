type menuList = {
  title: string;
  items?: menuList;
}[];

const menuData: menuList = [
  {
    title: 'Животные', items: [
      {
        title: 'Млекопитающие', items: [
          { title: 'Коровы' },
          { title: 'Ослы' },
          { title: 'Собаки' },
          { title: 'Тигры' }
        ]
      }, {
        title: 'Другие', items: [
          { title: 'Змеи' },
          { title: 'Птицы' },
          { title: 'Ящерицы' }
        ],
      }
    ]
  }, {
    title: 'Рыбы', items: [
      {
        title: 'Аквариумные', items: [
          { title: 'Гуппи' },
          { title: 'Скалярии' }
        ]
      }, {
        title: 'Форель', items: [
          { title: 'Морская форель' }
        ]
      }
    ]
  }
];

function generateMenu(list: menuList): string {
  let content: string = `<ul>`;
  for (let a of list) {
    if (a.items) {
      content += `<li><a class='title'>${a.title}</a>${generateMenu(a.items)}</li>`;
    } else {
      content += `<li><a>${a.title}</a></li>`;
    }
  }
  content += `</ul>`;
  return content;
}

let navMenuList = document.querySelector('.menu') as HTMLDivElement;
navMenuList.innerHTML = generateMenu(menuData);
navMenuList.onclick = (ev: MouseEvent) => {
  let el = ev.target as HTMLAnchorElement;
  let classList = el.classList;
  if (!classList.contains('title')) {
    return;
  }
  let parentLi = el.parentNode as HTMLLIElement;
  parentLi.classList.toggle('menu-open');
}