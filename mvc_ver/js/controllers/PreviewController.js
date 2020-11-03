import Controller from './Controller.js';
import Template from '../models/Template.js';
import PreviewView from '../views/PreviewView.js';

export default class PreviewController extends Controller {
  constructor(router){
    super(router);
    this.model = Template;
    this.model.addListener(this);
    this.view = new PreviewView(this);
  }

  action(){
    this.view.render(this.model.data);
  }

  listen() {
    this.action();
  }

}
