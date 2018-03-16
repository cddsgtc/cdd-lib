(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "lodash"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _ = require("lodash");
    // 对文字床度限制
    function limitText(str, limit) {
        if (limit === void 0) { limit = 10; }
        var strNew = str + '';
        if (strNew.length > ~~limit) {
            strNew = strNew.substr(0, limit - 3);
            strNew = _.padEnd(strNew, limit, '.');
        }
        return {
            strNew: strNew,
            str: str
        };
    }
    exports.limitText = limitText;
});