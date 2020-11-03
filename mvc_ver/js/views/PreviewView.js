import View from './View.js';
import PreviewTemplate from '../templates/PreviewTemplate.js';

export default class PreviewView extends View {
  constructor(controller){
    super(controller);
    this.PreviewTemplate = new PreviewTemplate();
    this.preview_div = document.querySelector('.preview');
  }

  render(data){
    if (data._textObjects){
      this.preview_div.innerHTML = '';
      data._textObjects.forEach((item, i) => {
        let textContent = item._basicOptions.contents;
        let textOptions = item._textOptions;
        let fontOptions = item._fontOptions;
        let textObjectHTML = this.PreviewTemplate.getTextObjectTemplate(i, textContent);
        this.preview_div.insertAdjacentHTML("beforeend", textObjectHTML);
        // #text+인덱스 에 붙일 css 스타일 값
        let textObjectDiv = this.preview_div.querySelector('#txt' + i);
        Object.assign(textObjectDiv.style, textOptions);
        Object.assign(textObjectDiv.style, fontOptions);
      });
    }
  }
}
