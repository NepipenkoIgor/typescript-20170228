type menuList = {
  title: string;
  items: (menuList|string)[]
}[]

const menuList: menuList = [
  { title: 'JavaScript', items: [ [{title: 'React', items: ['1', '2', '3']}, {title: 'Smth', items: ['4', '5', '6']}], 'Angular2', 'Cycle.js'] },
  { title: 'Dart', items: ['Flutter', 'Angular2', 'Polymer'] },
];

function generateMenu(list: menuList, flg?: boolean): string {

  let content: string = flg ? `` : `<ul>`;
  for (let a of list) {
    content += `<li><a class='title'>${a.title}</a><ul>`;
    for (let item of a.items) {
      if(Array.isArray(item))
      {
        content += generateMenu(item, true);
      }
      else
      {
        content += `<li><a>${item}</a></li>`;
      }
    }
    content += `</li></ul>`
  }
  content += flg ? `` : `</ul>`;
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
  parentLi.classList.toggle('menu-open')
};