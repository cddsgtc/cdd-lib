interface Object {
  [params: string]: any
}

Object.prototype.has = function (proper: string) {
  return this.hasOwnProperty(proper)
}