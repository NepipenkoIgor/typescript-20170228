const menu = [
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
function generateMenu(list) {
    let content = `<ul>`;
    for (let a of list) {
        content += '<li>';
        if (a.hasOwnProperty('items')) {
            content += `<a class='title'>${a.title}</a>`;
            content += generateMenu(a.items);
        }
        else {
            content += `<span class='title--end'>${a.title}</span>`;
        }
        content += `</li>`;
    }
    content += `</ul>`;
    return content;
}
let navMenuList2 = document.querySelector('.menu');
navMenuList2.innerHTML = generateMenu(menu);
navMenuList2.onclick = (ev) => {
    let el = ev.target;
    let classList = el.classList;
    if (!classList.contains('title')) {
        return;
    }
    let parentLi = el.parentNode;
    parentLi.classList.toggle('menu-open');
};
