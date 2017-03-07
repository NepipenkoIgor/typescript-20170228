type MenuItem = {
    title: string
    items?: MenuItem[]
}

type Menu = MenuItem[]

const menu: Menu = [
    {
        title: 'Животные', items: [
            {
                title: 'Млекопитающие', items: [
                    {
                        title: 'Коровы', items: [
                            { title: 'Коровы молочной породы' },
                            { title: 'Мясные породы коров' }
                        ]
                    },
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

function generateMenu(menu: Menu): string {
    let content: string = '<ul>';
    for (let menuItem of menu) {
        if (menuItem.items) {
            content += `<li><a class='title'>${menuItem.title}</a>${generateMenu(menuItem.items)}</li>`;
            continue
        }
        content += `<li><a>${menuItem.title}</a></li>`;
    }
    content += '</ul>';
    return content;
}

const navMenuList = document.querySelector('.menu') as HTMLDivElement;

navMenuList.innerHTML = generateMenu(menu);

navMenuList.onclick = (ev: MouseEvent) => {
    let el = ev.target as HTMLAnchorElement;
    let classList = el.classList;
    if (!classList.contains('title')) {
        return;
    }
    let parentLi = el.parentNode as HTMLLIElement;
    parentLi.classList.toggle('menu-open')
}