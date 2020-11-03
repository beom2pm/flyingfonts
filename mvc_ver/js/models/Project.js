import Observer from '../apps/Observer.js';
import Template from '../models/Template.js';

class Project extends Observer {
  constructor(projectName, templates) {
    super();
    if (projectName){
      this._projectName = projectName;
    } else {
      this._projectName = '새 프로젝트';
    }
    this._templateList = new Array();
    if (templates){
      let len = templates.length;
      for (let i = 0; i < len; i++){
        this._templateList.push(templates[i]);
      }
    }
  }

  listen() {
    this.notify();
  }

  get name() {
    return this._projectName;
  }

  get list() {
    return this._templateList;
  }

  addTemplate(templateName, templateUnit) {
    if (templateName && templateUnit){
      let temp = {
        name: templateName,
        unit: templateUnit
      };
      this._templateList.push(temp);
      //this.notify();
    }
  }

  // 프로젝트 이름이 중복될 경우 true 반환
  // 현재 아직 로컬 부분이 해결되지 않아 항상 false 반환하게 함
  isExistProjectName(name){
    return false;
  }

  // 한 프로젝트 내에 템플릿 이름이 중복일 경우 true 반환
  isExistTemplateName(name){
    if (this._templateList.indexOf(name) != -1){
      return true;
    }
    return false;
  }

  changeProject(...args){
    if (arguments.length >= 1){
      let projectName = arguments[0];
      this._projectName = projectName;
      this._templateList = new Array();
      // 템플릿 객체 초기화해야함 (필요)
      Template.resetTemplateObj();
      if (arguments[1]) {
        let templates = arguments[1];
        templates.forEach((item, i) => {
          this._templateList.push(item);
        });
      }
    }
    this.notify();
  }

}

export default new Project;
