import View from './View.js';
import FullMenuTemplate from '../templates/FullMenuTemplate.js';

export default class FullMenuView extends View {
  constructor(controller) {
    super(controller);
    this.FullMenuTemplate = new FullMenuTemplate();
    // 각 뷰에서 접근하는 DOM 요소 선언
    this.ul = document.querySelector('#fullMenuBar_contents ul');
  }

  render(list) {
    this.ul.innerHTML = this.FullMenuTemplate.getUlTemplate(list);
  }

}
