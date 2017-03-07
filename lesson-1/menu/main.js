const menuList = [{
        title: 'Животные',
        items: [{
                title: 'Млекопитающие',
                items: [
                    { title: 'Коровы' },
                    { title: 'Ослы' },
                    { title: 'Собаки' },
                    { title: 'Тигры' }
                ]
            }, {
                title: 'Другие',
                items: [
                    { title: 'Змеи' }, {
                        title: 'Птицы',
                        items: [
                            { title: 'Голуби',
                                items: [{
                                        title: 'Крупные'
                                    }, {
                                        title: 'Мелкие'
                                    }] },
                            { title: 'Вороны' }
                        ]
                    },
                    { title: 'Ящерицы' },
                ],
            },]
    }, {
        title: 'Рыбы',
        items: [{
                title: 'Аквариумные',
                items: [
                    { title: 'Гуппи' },
                    { title: 'Скалярии' }
                ]
            }, {
                title: 'Форель',
                items: [
                    { title: 'Морская форель' }
                ]
            },]
    }];
function generateMenu(list) {
    let content = `<ul>`;
    for (let a of list) {
        content += `<li><a class='title'>${a.title}</a>`;
        if (a.items) {
            content += generateMenu(a.items);
            content += `</li>`;
        }
    }
    content += `</ul>`;
    return content;
}
let navMenuList = document.querySelector('.menu');
navMenuList.innerHTML = generateMenu(menuList);
navMenuList.onclick = (ev) => {
    let el = ev.target;
    let classList = el.classList;
    if (!classList.contains('title')) {
        return;
    }
    let parentLi = el.parentNode;
    parentLi.classList.toggle('menu-open');
};
