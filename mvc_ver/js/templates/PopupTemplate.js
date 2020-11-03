export default class PopupTemplate {
  constructor(){
  }

  popupTag(strings, popup_title, popup_message, popup_html){
    let result = '';
    result = strings[0] + popup_title + strings[1] + popup_message + strings[2] + popup_html + strings[3];
    return result;
  }

  getPopupTemplate(data){
    let popup_title = data.title;
    let popup_message = data.message;
    let popup_html = data.html;
    let result = '';
    result += this.popupTag`<div class="modal fade in" role="dialog" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" style="display: block;">
                              <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <button type="button" class="close popup_cancel_btn" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">×</span>
                                    </button>
                                    <h4 class="modal-title" id="myModalLabel">${popup_title}</h4>
                                  </div>
                                  <div class="modal-body">
                                    <p>${popup_message}</p>
                                    ${popup_html}
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-default popup_cancel_btn" data-dismiss="modal">취소</button>
                                    <button type="button" class="btn btn-primary popup_okay_btn">확인</button>
                                  </div>
                                </div>
                              </div>
                            </div>`;
    return result;
  }

}
