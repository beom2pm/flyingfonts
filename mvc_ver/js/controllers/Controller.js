import Observer from '../apps/Observer.js'

export default class Controller extends Observer {
  constructor(router) {
    super()
    this.router = router
  }

  action() {throw 1}
}
