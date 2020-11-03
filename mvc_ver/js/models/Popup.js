import PopupData from '../data/PopupData.js';
import Observer from '../apps/Observer.js';

export default class Popup extends Observer {
  constructor() {
    super();
    this._popupData = PopupData;
    this._popupObject = {
      title: '',
      message: '',
      html: '',
      eventlist: ''
    };
  }

  listen() {
    this.notify();
  }

  set_values(title){
    let current_data = this._popupData.get(title);
    this._popupObject.title = title;
    this._popupObject.message = current_data.message;
    this._popupObject.html = current_data.html;
    this._popupObject.eventlist = current_data.eventlist;
  }

  close(){
    this.notify();  
  }

  get data() {
    return this._popupObject;
  }

}
