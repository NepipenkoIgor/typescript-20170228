const menuList = [
    { title: 'JavaScript', items: ['React', 'Angular2', 'Cycle.js'] },
    { title: 'Dart', items: ['Flutter', 'Angular2', 'Polymer'] },
];
function generateMenu(list) {
    let content = `<ul>`;
    for (let a of list) {
        content += `<li><a class='title'>${a.title}</a><ul>`;
        for (let item of a.items) {
            content += `<li><a>${item}</a></li>`;
        }
        content += `</li></ul>`;
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
