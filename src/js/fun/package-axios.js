"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var qs = require("qs");
if (!window.Promise.prototype.finally) {
    window.Promise.prototype.finally = function (callback) {
        var P = this.constructor;
        return this.then(function (value) { return P.resolve(callback()).then(function () { return value; }); }, function (reason) { return P.resolve(callback()).then(function () { throw reason; }); });
    };
}
// 对axios进行拦截设置
function preSetAxios(Msg) {
    // 请求出错
    axios_1.default.interceptors.request.use(function (req) {
        return req;
    }, function (err) {
        console.error("\u8BF7\u6C42\u9519\u8BEF", err);
        Msg({ type: 'error', message: '请求错误', duration: 3 });
        return Promise.reject(err);
    });
    // 返回出错
    axios_1.default.interceptors.response.use(function (res) {
        var result = res.data;
        if (result.error_code == 10001) {
            console.log("\u8BF7\u767B\u5F55");
            Msg({ type: 'error', message: '请登录' });
            return Promise.reject(result);
        }
        else if (result.error_code != 0) {
            console.log('非零', result);
            Msg({
                type: 'error',
                message: result.message
            });
            return Promise.reject(result);
        }
        else if (result.error_code == 0) {
            return res;
        }
    }, function (err) {
        console.error("\u8BF7\u6C42\u51FA\u9519", err);
        Msg({ type: 'error', message: '请求出错' + err.toString(), duration: 3 });
        return Promise.reject(err);
    });
}
exports.preSetAxios = preSetAxios;
function getData(_a) {
    var _b = _a.api, api = _b === void 0 ? '' : _b, _c = _a.data, data = _c === void 0 ? null : _c, _d = _a.modal, modal = _d === void 0 ? 'form' : _d, _e = _a.method, method = _e === void 0 ? 'get' : _e, _f = _a.success, success = _f === void 0 ? null : _f, _g = _a.fail, fail = _g === void 0 ? null : _g, _h = _a.complete, complete = _h === void 0 ? null : _h, _j = _a.beforeRes, beforeRes = _j === void 0 ? null : _j, _k = _a.afterRes, afterRes = _k === void 0 ? null : _k;
    var fetched;
    beforeRes && (beforeRes());
    switch (true) {
        case method == 'get':
            return axios_1.default.get(api, {
                params: __assign({}, data)
            });
        case modal == 'form':
            return axios_1.default({
                method: method,
                url: api,
                data: qs.stringify(data)
            });
        case modal == 'json':
            return axios_1.default({
                method: method,
                url: api,
                data: qs.stringify(data)
            });
        default:
            console.error("\u8C03\u7528\u51FA\u9519");
            break;
    }
}
exports.getData = getData;
