type menuLayer = {
    title: string;
    items?: menuLayer[];
}

const menu: menuLayer[] = [
    {
        title: 'Животные', items: [
            {
                title: 'Млекопитающие', items: [
                    { title: 'Коровы' },
                    { title: 'Ослы' },
                    { title: 'Собаки' },
                    { title: 'Тигры' }
                ]
            },
            {
                title: 'Другие', items: [
                    { title: 'Змеи' },
                    { title: 'Птицы' },
                    { title: 'Ящерицы' },
                ],
            },
        ]
    },
    {
        title: 'Рыбы', items: [
            {
                title: 'Аквариумные', items: [
                    { title: 'Гуппи' },
                    { title: 'Скалярии' }
                ]
            },
            {
                title: 'Форель', items: [
                    { title: 'Морская форель' }
                ]
            },
        ]
    }
];

function generateMenu(list: menuLayer[]): string {

  let content: string = `<ul>`;
  for (let a of list) {
    content += '<li>';
    if(a.hasOwnProperty('items')){
      content += `<a class='title'>${a.title}</a>`;
      content += generateMenu(a.items);
    }else{
      content += `<span class='title--end'>${a.title}</span>`;
    }
    content += `</li>`;
  }
  content += `</ul>`;
  return content;
}

let navMenuList2 = document.querySelector('.menu') as HTMLDivElement;
navMenuList2.innerHTML = generateMenu(menu);
navMenuList2.onclick = (ev: MouseEvent) => {
  let el = ev.target as HTMLAnchorElement;
  let classList = el.classList;
  if (!classList.contains('title')) {
    return;
  }
  let parentLi = el.parentNode as HTMLLIElement;
  parentLi.classList.toggle('menu-open')
}
