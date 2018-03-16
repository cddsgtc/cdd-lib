"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 全局信息进行包装
function packageElMsg(Message) {
    return function (_a) {
        var _b = _a.message, message = _b === void 0 ? "" : _b, _c = _a.type, type = _c === void 0 ? "info" : _c, _d = _a.duration, duration = _d === void 0 ? 3 : _d;
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
