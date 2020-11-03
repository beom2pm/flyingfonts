import Controller from './Controller.js';
import MenuData from '../data/MenuData.js';
import Menu from '../models/Menu.js';
import FavoriteMenuView from '../views/FavoriteMenuView.js';
import FullMenuController from './FullMenuController.js';

export default class FavoriteMenuController extends Controller {
  constructor(router) {
    super(router);
    this.model = Menu.root || (Menu.root = new Menu());
    this.model.addListener(this);
    this.view = new FavoriteMenuView(this);
    this._fullMenuController = new FullMenuController();
  }

  action(model) {
    this.view.render(this.model.list);
  }

  listen() {
    this.action()
  }

  select(item){
    switch (item) {
      case '애니메이션 실행':
        this._fullMenuController.select('애니메이션 실행하기');
        break;
      case '텍스트 선택':
        this._fullMenuController.select('텍스트 선택모드');
        break;
    }
  }

}
