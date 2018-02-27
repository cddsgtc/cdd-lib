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
    let base = 'api';
    exports.default = {
        status: `${base}/api/Account/status`,
        asset: `${base}/api/Account/asset`,
        history_trade: `${base}/api/Account/history_trade`,
        // 日志信息
        log: `${base}/api/Account/log`,
        // 账户信息
        profit: `${base}/api/Account/profit`,
    };
});
