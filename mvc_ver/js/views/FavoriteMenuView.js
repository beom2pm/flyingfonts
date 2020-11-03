import View from './View.js';
import FavoriteMenuTemplate from '../templates/FavoriteMenuTemplate.js';

export default class FavoriteMenuView extends View {
  constructor(controller){
    super(controller);
    this.FavoriteMenuTemplate = new FavoriteMenuTemplate();
    this.menubar_wrapper = document.querySelector('#favoriteMenuBar_wrapper');
    this.flexible_ul = document.querySelector('#favoriteMenuBar_contents .flexible_ul');
  }

  render(list){
    this.flexible_ul.innerHTML = this.FavoriteMenuTemplate.getLiTemplate(list);
    let menu_list = this.flexible_ul.querySelectorAll('li a');
    menu_list.forEach((item, i) => {
      item.onclick = () => this.controller.select(item.querySelector('span').innerHTML);
    });

  }
}
