
type menuList = {
    title: string;
    items: {}[]
}[];

const menu: menuList =[
    {
        title: 'Животные', items: [
        {
            title: 'Млекопитающие', items: [
            {title: 'Коровы'},
            {title: 'Ослы'},
            {title: 'Собаки'},
            {title: 'Тигры'}
        ]
        },
        {
            title: 'Другие', items: [
            {title: 'Змеи'},
            {title: 'Птицы'},
            {title: 'Ящерицы'},
        ],
        },
    ]
    },
    {
        title: 'Рыбы', items: [
        {
            title: 'Аквариумные', items: [
            {title: 'Гуппи'},
            {title: 'Скалярии'}
        ]
        },
        {
            title: 'Форель', items: [
            {title: 'Морская форель'}
        ]
        },
    ]
    }
];

function generateMenu (list: menuList): HTMLUListElement {
    let ul = document.createElement("ul") as HTMLUListElement;
    list.forEach((item) => {
        let li = document.createElement("li") as HTMLLIElement;
        if (Array.isArray(item.items)) {
            li.innerHTML = `<a class='title'>${item.title}</a>`;
            li.appendChild(generateMenu(item.items as menuList));
        }
        else {
            li.innerHTML = `<a>${item.title}</a>`;
        }
        ul.appendChild(li);
    });
    return ul;
};

let navMenuList = document.querySelector('.menu') as HTMLDivElement;
navMenuList.appendChild(generateMenu(menu));

navMenuList.onclick = (ev: MouseEvent) => {
    let el = ev.target as HTMLAnchorElement;
    let classList = el.classList;
    if (!classList.contains('title')) {
        return;
    }
    let parentLi = el.parentNode as HTMLLIElement;
    parentLi.classList.toggle('menu-open')
};