import Controller from './Controller.js'
import MenuData from '../data/MenuData.js'
import Menu from '../models/Menu.js'
import FullMenuView from '../views/FullMenuView.js'

export default class FullMenuController extends Controller {
  constructor(router) {
    super(router);
    this.model = Menu.root || (Menu.root = new Menu('root', false));
    this.model.addListener(this);
    this.view = new FullMenuView(this);
  }

  // 라우터에서 컨트롤러의 action을 가장 먼저 실행시킨다. init 역할이라고 보면 될듯
  action(model) {
    this.view.render(this.model.list);
  }

  // 모델이 바뀌면 뷰도 바꿀 수 있도록 해주는 역할인듯
  listen() {
    this.action()
  }

}
