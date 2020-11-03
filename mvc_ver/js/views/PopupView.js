import View from './View.js';
import PopupTemplate from '../templates/PopupTemplate.js';

export default class PopupView extends View {
  constructor(controller) {
    super(controller);
    this.PopupTemplate = new PopupTemplate();
    this.htmlBody = document.querySelector('body');
    this.popup_div = document.querySelector('#popup');
  }

  render(...args) {
    let self = this;
    // 팝업창 열기
    if (arguments[0]){
      this.popup_div.insertAdjacentHTML("afterend", '<div class="modal-backdrop fade in"></div>');
      // html 렌더링
      this.popup_div.innerHTML = this.PopupTemplate.getPopupTemplate(arguments[0]);
      // 이벤트 렌더링
      arguments[0].eventlist.forEach((item, i) => {
        let target_className = item.target;
        let type = item.event_type;
        let event_func = item.func;
        if (target_className != '' && type != ''){
          self.popup_div.addEventListener(type, function(e){
            if (e.target.classList.contains(target_className)){
              event_func(e.target);
              item.status = 1;
            }
          });
        } else {
          event_func();
        }
      });

      // close 작업은 공통적인 부분이므로 다음과 같이 별도로 지정해준다.
      let popup_cancel_btn_arr = this.popup_div.querySelectorAll('.popup_cancel_btn');
      popup_cancel_btn_arr.forEach((item, i) => {
        item.onclick = () => {
          self.controller.closePopup();
        };
      });
    }
    // 팝업창 닫기
    else {
      this.htmlBody.removeChild(document.querySelector('.modal-backdrop'));
      this.popup_div.innerHTML = '';
      // 이벤트 리스너가 중복 할당되는 것을 막기 위해 팝업창 닫을 때 이벤트 다 삭제해주는 부분
      let popupClone = self.popup_div.cloneNode(true);
      self.popup_div.parentNode.replaceChild(popupClone, self.popup_div);
      self.popup_div = document.querySelector('#popup');
    }
  }

}
