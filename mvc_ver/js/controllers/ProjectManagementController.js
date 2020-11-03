import Controller from './Controller.js';
import Template from '../models/Template.js';
import Project from '../models/Project.js';
import ProjectManagementView from '../views/ProjectManagementView.js';

export default class ProjectManagementController extends Controller {
  constructor(router){
    super(router);
    this.model_project = Project;
    this.model_template = Template;
    this.model_project.addListener(this);
    this.model_template.addListener(this);
    this.view = new ProjectManagementView(this);
  }

  action(){
    this.view.render(this.model_project.name, this.model_project.list);
  }

  listen() {
    // 일단 새 템플릿 생성하게 되면 프로젝트 리스트에 반영을 해줘야 함
    this.model_project.addTemplate(this.model_template.name, this.model_template.unit);
    this.action();
  }

}
