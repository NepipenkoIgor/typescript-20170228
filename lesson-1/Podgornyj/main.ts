type menuList = {
  title: string;
  items?: menuList;
}[];

const menuList: menuList = [{
  title: 'Животные',
  items: [{
    title: 'Млекопитающие',
    items: [{
      title: 'Коровы'
    },
      {
        title: 'Ослы'
      },
      {
        title: 'Собаки'
      },
      {
        title: 'Тигры'
      }
    ]
  },
    {
      title: 'Другие',
      items: [{
        title: 'Змеи'
      },
        {
          title: 'Птицы'
        },
        {
          title: 'Ящерицы'
        },
      ],
    },
  ]
},
  {
    title: 'Рыбы',
    items: [{
      title: 'Аквариумные',
      items: [{
        title: 'Гуппи'
      },
        {
          title: 'Скалярии'
        }
      ]
    },
      {
        title: 'Форель',
        items: [{
          title: 'Морская форель'
        }]
      },
    ]
  }
];

function generateMenu(list: menuList): string {

  let content: string = `<ul>`;
  for(let i of list){
    if(i.items){
      content += `<li><a class='title'>${i.title}</a>${generateMenu(i.items)}</li>`;
    }else{
      content += `<li><a>${i.title}</a></li>`;
    }
  }
  content += `</ul>`;
  return content;
}

let navMenuList = document.querySelector('.menu') as HTMLDivElement;

navMenuList.innerHTML = generateMenu(menuList);

navMenuList.onclick = (ev: MouseEvent) => {
  let el = ev.target as HTMLAnchorElement;
  let classList = el.classList;
  if (!classList.contains('title')) {
    return;
  }
  let parentLi = el.parentNode as HTMLLIElement;
  parentLi.classList.toggle('menu-open');
};