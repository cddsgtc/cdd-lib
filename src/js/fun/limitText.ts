import * as _ from "lodash"

// 对文字床度限制
function limitText(str: string, limit: number = 10) {
  let strNew = str + ''
  if (strNew.length > ~~limit) {
    strNew = strNew.substr(0, limit - 3)
    strNew = _.padEnd(strNew, limit, '.')
  }
  return {
    strNew,
    str
  }
}
export {
  limitText
}
