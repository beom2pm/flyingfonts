export default class Observer extends Set {
  addListener(listener) {
    super.add(listener)
  }

  removeListener(listener) {
    super.delete(listener)
  }

  // 상태가 변경됐음을 알리는 함수
  notify() {
    this.forEach((item, i) => {
      item.listen(this);
    });
  }

  // notify를 통해 변경사항을 받는 함수
  listen() {throw 1}

  has() {throw 1}

  delete() {throw 1}

  add() {throw 1}
}
