export default class ProjectManagementTemplate {
  constructor(){

  }

  headerTag(strings, name){
    let result = '';
    result = strings[0] + name + strings[1];
    return result;
  }

  bodyTag(strings, name, unit){
    let result = '';
    result = strings[0] + name + strings[1] + unit + strings[2];
    return result;
  }

  getHeaderTemplate(name){
    let result = '';
    result = this.headerTag`<div class="panel-heading">${name}</div>`;
    return result;
  }

  getBodyTemplate(templates){
    let result = '<div class="panel-body">';
    result += '<ul class="list-group">';
    if (templates){
      templates.forEach((item, i) => {
        let name = item.name;
        let unit = item.unit;
        result += this.bodyTag
        `<li class="list-group-item" style="border-radius: 0 !important;">
            <span class="badge">${unit}</span>
              ${name}
          </li>`;
      });
    }
    result += '</ul></div>';
    return result;
  }


}
