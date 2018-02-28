function getType(obj: any): string {
  let toString = Object.prototype.toString
  let types: { [params: string]: any } = {
    ['[object Boolean]']: 'boolean',
    ['[object Number]']: 'number',
    ['[object String]']: 'string',
    ['[object Function]']: 'function',
    ['[object Array]']: 'array',
    ['[object Date]']: 'date',
    ['[object RegExp]']: 'regExp',
    ['[object Undefined]']: 'undefined',
    ['[object Null]']: 'null',
    ['[object Map]']: 'map',
    ['[object Set]']: 'set',
    ['[object Object]']: 'object'
  }
  return types[toString.call(obj)]
};

function deepClone(data: any): any {
  let type: string = getType(data);
  let obj: any;
  if (type === 'array') {
    obj = [];
  } else if (type === 'object') {
    obj = {};
  } else {
    //不再具有下一层次
    return data;
  }
  if (type === 'array') {
    for (let i = 0, len = data.length; i < len; i++) {
      obj.push(deepClone(data[i]));
    }
  } else if (type === 'object') {
    for (let key in data) {
      obj[key] = deepClone(data[key]);
    }
  }
  return obj;
}

export {deepClone}