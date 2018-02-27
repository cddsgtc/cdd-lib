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
    // 全局信息进行包装
    function packageElMsg(Message) {
        return function ({ message = "", type = "info", duration = 3 }) {
            switch (type) {
                case 'info':
                case 'success':
                    duration = 2;
                    break;
                case 'warning':
                case 'error':
                    break;
                default:
                    throw new Error('消息类型错误');
            }
            // 执行message
            Message({
                message: message,
                type: type,
                duration: duration * 1000,
                showClose: true
            });
        };
    }
    exports.packageElMsg = packageElMsg;
});
