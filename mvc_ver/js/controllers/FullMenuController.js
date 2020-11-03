import Controller from './Controller.js';
import MenuData from '../data/MenuData.js';
import Menu from '../models/Menu.js';
import Popup from '../models/Popup.js';
import FullMenuView from '../views/FullMenuView.js';
//import Template from '../models/Template.js';

export default class FullMenuController extends Controller {
  constructor(router) {
    super(router);
    this.model = Menu.root || (Menu.root = new Menu());
    this.popup = Popup.root || (Popup.root = new Popup());
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

  // 메뉴 클릭 시 각 메뉴별로 작업 전달
  select(item) {
    switch (item) {
      case '새 프로젝트 생성하기':
        this.popup.set_values(item);
        this.router.route('popup', this.popup);
        break;
      case '새 템플릿 생성하기':
        this.popup.set_values(item);
        this.router.route('popup', this.popup);
        break;
      case '애니메이션 실행하기':
        js_to_css();
        break;
      case '텍스트 선택모드':
        //console.log(Template.root);
        break;
      default:
        console.log('아직 작업 함수가 작성되지 않은 메뉴입니다!');
    }
  }

}
