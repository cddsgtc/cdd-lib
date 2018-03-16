"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
// 对文字床度限制
function limitText(str, limit, rep) {
    if (limit === void 0) { limit = 10; }
    if (rep === void 0) { rep = '.'; }
    var strNew = str + '';
    if (strNew.length > ~~limit) {
        strNew = strNew.substr(0, limit - 3);
        strNew = _.padEnd(strNew, limit, rep);
    }
    return {
        strNew: strNew,
        str: str
    };
}
exports.limitText = limitText;
