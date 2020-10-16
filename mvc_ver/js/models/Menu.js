// model 클래스 따로 안 뒀음.
// 모델은 애플리케이션의 데이터를 가지고 있어야 하고, 그에 대한 처리를 할 수 있어야 함.
// 다만, 코드의 가독성 및 유지보수성을 위해 데이터 자체에 대한 값들은 data 클래스로 분리했음.
import MenuData from '../data/MenuData.js';
import Observer from '../apps/Observer.js';

export default class Menu extends Observer {
  constructor() {
    super();
    this._menuData = MenuData;
    this._menuList = new Array();
    this._menuData = this._menuData.sort((a, b) => a.parent - b.parent);
    for (let data of this._menuData) {
      if (data.parent == ''){
        let tempArr = {title: data.title, list: []};
        this._menuList.push(tempArr);
      } else {
        let tempList = this._menuList.find(item => item.title === data.parent);
        tempList.list.push(data.title);
      }
    }
  }

  listen() {
    this.notify();
  }

  get list() {
    return this._menuList;
  }

  checkItemFavorite(title) {
    let item = this._menuData.find(menu => menu.title === title);
    return item.favorite;
  }

}
