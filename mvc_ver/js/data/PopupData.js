//import ImportOrSaveLocalFile from '../engines/ImportOrSaveLocalFile.js';
//let import_or_save_localFile = new ImportOrSaveLocalFile();
import Project from '../models/Project.js';
import Template from '../models/Template.js';

let popupData;
export default popupData = new Map(
  [
    [
      '새 프로젝트 생성하기',
      {
        message: '새로 생성할 프로젝트의 이름을 입력해주세요<br>' +
                  '※ 폰트날다 계정과 연결된 사용자 본인의 구글 클라우드에 모든 파일이 저장됩니다.',
        html: '<div class="project_name_wrapper wrapper">' +
                '<label class="control-label">새 프로젝트 이름</label>' +
                '<div class="input-group new_project_path">' +
                  '<input type="text" class="new_project_name form-control" placeholder="새 프로젝트 이름" />' +
                '</div>' +
              '</div>' +
              '<div class="alert alert-danger hidden" role="alert">' +
                '<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>' +
                '<span class="sr-only">Error:</span>' +
                '<span class="warning_msg"></span>' +
              '</div>',
        // 동적으로 바인딩할 이벤트(객체 타입)의 배열이다.
        eventlist: [
          {
            target: 'popup_okay_btn',
            event_type: 'click',
            func: function(){
              let popup = document.querySelector('#popup');
              let warning_msg = '';
              let new_project_name = popup.querySelector('.new_project_path .new_project_name').value;
              if (!isNaN(new_project_name) || new_project_name == '') {
                warning_msg = '새로 생성할 프로젝의 이름을 입력해주세요!';
                popup.querySelector('.warning_msg').innerHTML = warning_msg;
                popup.querySelector('.alert-danger').classList.remove('hidden');
                popup.querySelector('.alert-danger').classList.add('show');
              }
              else if (Project.isExistProjectName(new_project_name)){
                warning_msg = '이미 사용하고 있는 프로젝트 이름입니다!';
                popup.querySelector('.warning_msg').innerHTML = warning_msg;
                popup.querySelector('.alert-danger').classList.remove('hidden');
                popup.querySelector('.alert-danger').classList.add('show');
              }
              else {
                // 새로운 프로젝트 생성
                Project.changeProject(new_project_name);
                popup.querySelector('.alert-danger').classList.add('hidden');
                popup.querySelector('.alert-danger').classList.remove('show');
                // 팝업창 닫아야되니까 close 버튼 클릭이벤트 실행시켜줌
                popup.querySelector('.popup_cancel_btn').click();
              }
            }
          }
        ]
      }
    ],
    [
      '새 템플릿 생성하기',
      {
        message: '생성하려는 템플릿의 이름과 단위, 그리고 텍스트 확장 범위를 설정해주세요!<br>' +
                 '※ 템플릿의 단위는 초기 설정 이후 변경이 불가능합니다.',
        html: '<div class="template_name_wrapper wrapper">' +
                '<label class="control-label">템플릿이름</label>' +
                '<div class="input-group new_template_path">' +
                  '<input type="text" class="new_template_name form-control" placeholder="새 템플릿 이름" />' +
                '</div>' +
              '</div>' +
              '<div class="template_unit_wrapper wrapper">' +
                '<label class="control-label">템플릿단위</label>' +
                '<div class="input-group template_unit">' +
                  '<input type="text" class="form-control" aria-label="..." placeholder="템플릿단위" readOnly="true">' +
                  '<div class="input-group-btn">' +
                    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="caret"></span></button>' +
                    '<ul class="dropdown-menu dropdown-menu-right">' +
                      '<li class="template_unit_item"><a class="template_unit_item template_unit_letter" href="#">글자단위</a></li>' +
                      '<li class="template_unit_item"><a class="template_unit_item template_unit_word" href="#">단어단위</a></li>' +
                      '<li class="template_unit_item"><a class="template_unit_item template_unit_sentence" href="#">문장단위</a></li>' +
                    '</ul>' +
                  '</div>' +
                '</div>' +
              '</div>' +
              '<div class="text_expand_wrapper wrapper">' +
                '<label class="control-label">텍스트확장범위</label>' +
                '<div class="text_expand row">' +
                  '<div class="min_number col-xs-5">' +
                    '<div class="row">' +
                      '<span class="min_number_label col-md-6">최소 개수: </span>' +
                      '<div class="min_number_button input-group col-md-6">' +
                        '<input type="text" class="form-control" placeholder="1" value="1">' +
                        '<span class="input-group-btn btn-group-vertical">' +
                          '<button class="btn btn-default number_increase" type="button"> <span class="glyphicon glyphicon-triangle-top number_increase"></span> </button>' +
                          '<button class="btn btn-default number_decrease" type="button"> <span class="glyphicon glyphicon-triangle-bottom number_decrease"></span> </button>' +
                        '</span>' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                  '<div class="max_number col-xs-5">' +
                    '<div class="row">' +
                      '<span class="max_number_label col-md-6">최대 개수: </span>' +
                      '<div class="max_number_button input-group col-md-6">' +
                        '<input type="text" class="form-control" placeholder="1" value="1">' +
                        '<span class="input-group-btn btn-group-vertical">' +
                          '<button class="btn btn-default number_increase" type="button"> <span class="glyphicon glyphicon-triangle-top number_increase"></span> </button>' +
                          '<button class="btn btn-default number_decrease" type="button"> <span class="glyphicon glyphicon-triangle-bottom number_decrease"></span> </button>' +
                        '</span>' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
              '<div class="alert alert-danger hidden" role="alert">' +
                '<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>' +
                '<span class="sr-only">Error:</span>' +
                '<span class="warning_msg"></span>' +
              '</div>',
        eventlist: [
          {
            target: 'template_unit_item',
            event_type: 'click',
            func: function(target){
              let popup = document.querySelector('#popup');
              let input = popup.querySelector('.template_unit input');
              let textValue = target.innerText;
              input.value = textValue;
            }
          },
          {
            target: 'number_increase',
            event_type: 'click',
            func: function(target){
              let input = target.closest('div').querySelector('input');
              let prevValue = input.value || input.placeholder;
              let currValue = parseInt(prevValue) + 1;
              input.value = currValue;
            }
          },
          {
            target: 'number_decrease',
            event_type: 'click',
            func: function(target){
              let input = target.closest('div').querySelector('input');
              let prevValue = input.value || input.placeholder;
              let currValue = parseInt(prevValue) - 1;
              if (currValue < 1) currValue = 1;
              input.value = currValue;
            }
          },
          {
            target: 'popup_okay_btn',
            event_type: 'click',
            func: function(target){
              let warning_msg = '';
              let popup = document.querySelector('#popup');
              let templateUnitArr = new Array();
              popup.querySelectorAll('a.template_unit_item').forEach((item, i) => {
                templateUnitArr.push(item.innerText);
              });
              let templateName = popup.querySelector('.new_template_name').value;
              let templateUnitValue = popup.querySelector('.template_unit input').value;
              let textExpandMin = popup.querySelector('.min_number input').value;
              let textExpandMax = popup.querySelector('.max_number input').value;

              if (!isNaN(templateName)  || templateName == ''){
                // 현재 프로젝트의 템플릿 리스트와 비교해서 중복 체크하는 게 필요함
                warning_msg = '새로 생성할 템플릿의 이름을 입력해주세요!';
                popup.querySelector('.warning_msg').innerHTML = warning_msg;
                popup.querySelector('.alert-danger').classList.remove('hidden');
                popup.querySelector('.alert-danger').classList.add('show');
              }
              else if (templateUnitArr.indexOf(templateUnitValue) == -1){
                warning_msg = '템플릿 단위를 선택하지 않으셨습니다!';
                popup.querySelector('.warning_msg').innerHTML = warning_msg;
                popup.querySelector('.alert-danger').classList.remove('hidden');
                popup.querySelector('.alert-danger').classList.add('show');
              }
              else if (textExpandMax < textExpandMin) {
                warning_msg = '템플릿 확장 범위가 잘못 입력되었습니다!';
                popup.querySelector('.warning_msg').innerHTML = warning_msg;
                popup.querySelector('.alert-danger').classList.remove('hidden');
                popup.querySelector('.alert-danger').classList.add('show');
              }
              else {
                // 이전 템플릿이 있었다면 xml파일로 저장해두고 (필요함)
                // 새 템플릿 생성하는 부분
                Template.changeTemplate(templateName, templateUnitValue, textExpandMax);
                popup.querySelector('.alert-danger').classList.add('hidden');
                popup.querySelector('.alert-danger').classList.remove('show');
                popup.querySelector('.popup_cancel_btn').click();
              }
            }
          }
        ]
      }
    ]
  ]
)
