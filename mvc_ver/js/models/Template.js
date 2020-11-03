import Motion from '../data/Motion.js';
import TextObject from '../data/TextObject.js';
import Observer from '../apps/Observer.js';

class TemplateClass extends Observer {
  constructor(...args) {
    super();
    if (arguments.length >= 3) {
      let templateName = arguments[0];
      let templateUnitValue = arguments[1];
      let textExpandMax = arguments[2];

      this._templateName = templateName;
      this._templateUnitValue = templateUnitValue;
      this._textObjects = new Array();
      for (let i = 0; i < textExpandMax; i++) {
        this._textObjects.push(new TextObject());
      }
      // 현재 선택된 텍스트 객체들의 ID를 저장할 멤버변수
      this._currTextObjectIDArr = new Array();
      this._currTextObjectIDArr.push(0);
      this._bindingOption = {
        MotionBinding: {
          repeat: 0,
          duration: 0,
          goback: '',
          direction: ''
        },
        TextBinding: {
          lower_limit: 0,
          upper_limit: 0
        }
      }
      if (arguments[3]) {
        console.log('기존 템플릿 가져오기');
      } else {
        console.log('새 템플릿 생성하기');
      }
    }
  }

  listen() {
    this.notify();
  }

  get name() {
    return this._templateName;
  }

  get unit() {
    return this._templateUnitValue;
  }

  get data() {
    return this;
  }

  changeTemplate(...args) {
    if (arguments.length >= 3) {
      let templateName = arguments[0];
      let templateUnitValue = arguments[1];
      let textExpandMax = arguments[2];

      this._templateName = templateName;
      this._templateUnitValue = templateUnitValue;
      this._textObjects = new Array();
      for (let i = 0; i < textExpandMax; i++) {
        this._textObjects.push(new TextObject());
      }
      // 현재 선택된 텍스트 객체들의 ID를 저장할 멤버변수
      this._currTextObjectIDArr = new Array();
      this._currTextObjectIDArr.push(0);
      this._bindingOption = {
        MotionBinding: {
          repeat: 0,
          duration: 0,
          goback: '',
          direction: ''
        },
        TextBinding: {
          lower_limit: 0,
          upper_limit: 0
        }
      }
      if (arguments[3]) {
        console.log('기존 템플릿 가져오기');
      } else {
        console.log('새 템플릿 생성하기');
        console.log(this.data);
      }
    }
    this.notify();
  }

  resetTemplateObj() {
    this._templateName = '';
    this._templateUnitValue = '';
    this._textObjects = new Array();
    this._currTextObjectIDArr = new Array();
    this._bindingOption = {
      MotionBinding: {
        repeat: 0,
        duration: 0,
        goback: '',
        direction: ''
      },
      TextBinding: {
        lower_limit: 0,
        upper_limit: 0
      }
    }
    console.log(this.data);
    this.notify();
  }


  /*
    addTextObject(contents){
      let newTextObject = new TextObject(contents);
    }

    addMotion(type, properties){

    }
  */
}

// 전역변수로 뺀거 (좀 허술한 싱글톤 객체라고 보면 됨)
let Template;
Template = new TemplateClass;
export default Template;
