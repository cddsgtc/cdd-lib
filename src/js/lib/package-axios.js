import axios from "axios";
import * as qs from "qs";
if (!window.Promise.prototype.finally) {
    window.Promise.prototype.finally = function (callback) {
        let P = this.constructor;
        return this.then((value) => P.resolve(callback()).then(() => value), (reason) => P.resolve(callback()).then(() => { throw reason; }));
    };
}
// 对axios进行拦截设置
function preSetAxios(Msg) {
    // 请求出错
    axios.interceptors.request.use((req) => {
        return req;
    }, (err) => {
        console.error(`请求错误`, err);
        Msg({ type: 'error', message: '请求错误', duration: 3 });
        return Promise.reject(err);
    });
    // 返回出错
    axios.interceptors.response.use((res) => {
        let result = res.data;
        if (result.error_code == 10001) {
            console.log(`请登录`);
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
    }, (err) => {
        console.error(`请求出错`, err);
        Msg({ type: 'error', message: '请求出错' + err.toString(), duration: 3 });
        return Promise.reject(err);
    });
}
function getData({ api = '', data = null, modal = 'form', method = 'get', success = null, fail = null, complete = null, beforeRes = null, afterRes = null }) {
    let fetched;
    beforeRes && (beforeRes());
    switch (true) {
        case method == 'get':
            return axios.get(api, {
                params: Object.assign({}, data)
            });
        case modal == 'form':
            return axios({
                method: method,
                url: api,
                data: qs.stringify(data)
            });
        case modal == 'json':
            return axios({
                method: method,
                url: api,
                data: qs.stringify(data)
            });
        default:
            console.error(`调用出错`);
            break;
    }
}
export { preSetAxios, getData };
