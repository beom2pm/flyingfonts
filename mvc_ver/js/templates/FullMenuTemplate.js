export default class FullMenuTemplate {
  constructor(){
  }

  ulTag(strings, title, items) {
    let result;
    result = strings[0] + title + strings[1] + items + strings[2];
    return result;
  }

  liTag(strings, item){
    let result;
    result = strings[0] + item + strings[1];
    return result;
  }

  getUlTemplate(menuList){
    let result = '';
    for (let menu of menuList){
      let title = menu.title;
      let items;
      for (let item of menu.list) {
        items += this.liTag`<li><a href="#">${item}</a></li>`;
      }
      result += this.ulTag`<li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="true">${title}<span class="caret"></span></a>
                      <ul class="dropdown-menu" role="menu">
                        ${items}
                      </ul>
                  </li>`;
    }
    return result;
  }


}
