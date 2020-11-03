import View from './View.js';
import ProjectManagementTemplate from '../templates/ProjectManagementTemplate.js';

export default class ProjectManagementView extends View {
  constructor(controller){
    super(controller);
    this.ProjectManagementTemplate = new ProjectManagementTemplate();
    this.pm_section_div = document.querySelector('.project_management_section');
  }

  render(name, list){
    this.pm_section_div.innerHTML = '';
    let headerHTML = this.ProjectManagementTemplate.getHeaderTemplate(name);
    let bodyHTML = '';
    this.pm_section_div.insertAdjacentHTML("beforeend", headerHTML);
    if (list){
      bodyHTML = this.ProjectManagementTemplate.getBodyTemplate(list);
    } else {
      bodyHTML = this.ProjectManagementTemplate.getBodyTemplate();
    }
    this.pm_section_div.insertAdjacentHTML("beforeend", bodyHTML);
  }
}
