export default class Router extends Map {
  constructor() {
    super()
  }

  route(key, ...args) {
    this.get(key).action(...args)
  }
}
