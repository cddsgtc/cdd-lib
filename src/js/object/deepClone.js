(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getType(obj) {
        let toString = Object.prototype.toString;
        let types = {
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
        };
        return types[toString.call(obj)];
    }
    ;
    function deepClone(data) {
        let type = getType(data);
        let obj;
        if (type === 'array') {
            obj = [];
        }
        else if (type === 'object') {
            obj = {};
        }
        else {
            //不再具有下一层次
            return data;
        }
        if (type === 'array') {
            for (let i = 0, len = data.length; i < len; i++) {
                obj.push(deepClone(data[i]));
            }
        }
        else if (type === 'object') {
            for (let key in data) {
                obj[key] = deepClone(data[key]);
            }
        }
        return obj;
    }
    exports.deepClone = deepClone;
});
