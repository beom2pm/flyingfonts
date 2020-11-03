import Controller from './Controller.js';
import Popup from '../models/Popup.js';
import PopupView from '../views/PopupView.js';

export default class PopupController extends Controller {
  constructor(router){
    super(router);
    this.view = new PopupView(this);
  }

  // Title, Message, Html(팝업창의 내부 html 사용자 정의), EventList(팝업창 내부 이벤트 처리 사용자 정의)
  action(model){
    if (this.model) {
      this.model.removeListener(this)
    }
    this.model = model
    this.model.addListener(this)
    this.view.render(this.model.data);
  }

  listen() {
    this.view.render();
  }

  closePopup() {
    this.model.close();
  }

}
