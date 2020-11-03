export default class PreviewTemplate {
  constructor() {

  }

  textObjectTag(...args){
    let result = '';
    let strings = arguments[0];
    let index = arguments[1];
    let content = arguments[arguments.length - 1];
    for(let i = 0; i < 11; i++){
      result += strings[i] + index;
    }
    result += strings[11] + content + strings[12];
    return result;
  }

  getTextObjectTemplate(index, content){
    let result = '';
    result = this.textObjectTag
    `<div class="textObject width_middle height_middle">
      <div id="txt${index}Binding">
        <div id="txt${index}Opacity">
          <div id="txt${index}Line">
            <div id="txt${index}Circle">
              <div id="txt${index}Rectangle">
                <div id="txt${index}Blink">
                  <div id="txt${index}Shake">
                    <div id="txt${index}Appear">
                      <div id="txt${index}Rotation">
                        <div id="txt${index}Scale">
                          <div id="txt${index}">${content}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    return result;
  }
}
