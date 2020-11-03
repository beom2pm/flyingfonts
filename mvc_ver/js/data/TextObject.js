export default class TextObject {
  constructor(...args) {
    this._basicOptions = {
      start_time: '00:00:00.000',
      contents: 'sample'
    };

    this._textOptions = {
      /*
      display: '',
      top: '',
      left: '',
      */
      textDecoration: '',
      textShadow: '',
      letterSpacing: 0,
      wordSpacing: 0,
      lineHeight: 'normal',
      textAlign: 'justify'
    };

    this._fontOptions = {
      color: 'black',
      fontSize: '1.5em',
      opacity: 1,
      fontFamily: 'Georgia, "Malgun Gothic"',
      fontStyle: 'normal',
      fontWeight: 'normal',
      textShadow: ''
    };

    this._motionOptions = new Array();

    this._opacity = 1;

    if (arguments.length > 0){
      console.log(arguments);
      console.log('기존 텍스트오브젝트 가져오기');
    } else {
      console.log('새 템플릿에서 새 텍스트오브젝트 생성');
    }
  }


}
