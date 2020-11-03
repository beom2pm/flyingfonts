export default class FavoriteMenuTemplate {
  constructor(){
  }

  liTag(strings, icon, subtitle){
    let result = '';
    result = strings[0] + icon + strings[1] + subtitle + strings[2];
    return result;
  }

  getLiTemplate(menuList){
    let result = '';
    for (let menu of menuList) {
      for (let item of menu.list) {
        if (item.isFavorite){
          let icon = item.icon_html;
          let subtitle = item.subtitle;
          result += this.liTag`<li><a href="#">${icon}<span class="menu_subtitle">${subtitle}</span></a></li>`;
        }
      }
    }
    return result;
  }

}
