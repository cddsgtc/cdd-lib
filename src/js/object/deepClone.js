(function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    var v = factory(require, exports)
    if (v !== undefined) module.exports = v
  }
  else if (typeof define === "function" && define.amd) {
    define(["require", "exports"], factory)
  }
})(function (require, exports) {
  "use strict"
  Object.defineProperty(exports, "__esModule", {value: true})

  function getType(obj) {
    var toString = Object.prototype.toString
    var types = (_a = {},
      _a['[object Boolean]'] = 'boolean',
      _a['[object Number]'] = 'number',
      _a['[object String]'] = 'string',
      _a['[object Function]'] = 'function',
      _a['[object Array]'] = 'array',
      _a['[object Date]'] = 'date',
      _a['[object RegExp]'] = 'regExp',
      _a['[object Undefined]'] = 'undefined',
      _a['[object Null]'] = 'null',
      _a['[object Map]'] = 'map',
      _a['[object Set]'] = 'set',
      _a['[object Object]'] = 'object',
      _a)
    return types[toString.call(obj)]
    var _a
  }
  

  function deepClone(data) {
    var type = getType(data)
    var obj
    if (type === 'array') {
      obj = []
    }
    else if (type === 'object') {
      obj = {}
    }
    else {
      //不再具有下一层次
      return data
    }
    if (type === 'array') {
      for (var i = 0, len = data.length; i < len; i++) {
        obj.push(deepClone(data[i]))
      }
    }
    else if (type === 'object') {
      for (var key in data) {
        obj[key] = deepClone(data[key])
      }
    }
    return obj
  }

  exports.deepClone = deepClone
})
