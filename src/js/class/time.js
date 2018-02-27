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
    class _Time {
        constructor(duration = 1000) {
            this.state = '';
            this.isRuning = false;
            this._id = '';
            this.__date = '';
            // private _time: any
            this.hour = 0;
            this.minutes = 0;
            this.seconds = 0;
            this.year = 1990;
            this.month = 0;
            this.day = 0;
            this.duration = 1000;
            // dateSeparator: string = '-'
            this._dateSeparator = '-';
            // timeSeparator: string = ':'
            this._timeSeparator = ':';
            this.date = '';
            this.time = '';
            this.ap = '';
            // 主程序
            this.main = () => {
                let self = this;
                if (this.isRuning) {
                    this._time = this._date = this.__date = new Date();
                    this.everyDuration && (this.everyDuration(this));
                    _Time._id = setTimeout(() => {
                        self.main();
                    }, this.duration);
                }
                else {
                    clearTimeout(_Time._id);
                }
            };
            this.duration = duration;
            this.init();
        }
        init() {
            this.isRuning = false;
            this._date = this.__date = new Date();
            this._time = this._date; //初始化时分秒
        }
        // 日期分割符
        get dateSeparator() {
            return this._dateSeparator;
        }
        set dateSeparator(separator) {
            this._dateSeparator = separator;
            this._date = new Date();
        }
        // 时间分隔符
        get timeSeparator() {
            return this._timeSeparator;
        }
        set timeSeparator(separator) {
            this._timeSeparator = separator;
            this._time = this._date;
        }
        // 日期
        get _date() {
            return this.__date;
        }
        set _date(date) {
            this.year = date.getFullYear();
            this.month = date.getMonth() + 1;
            this.day = date.getDate();
            this.date = '' + this.year + this.dateSeparator + this.formNumber(this.month) + this.dateSeparator + this.formNumber(this.day);
        }
        // 时间
        get _time() {
            return this.__date.getTime();
        }
        set _time(date) {
            this.hour = date.getHours();
            this.minutes = date.getMinutes();
            this.seconds = date.getSeconds();
            this.ap = this.hour <= 12 ? 'AM' : 'PM';
            this.time = '' + this.formNumber(this.hour) + this.timeSeparator + this.formNumber(this.minutes) + this.timeSeparator + this.formNumber(this.seconds);
        }
        formNumber(num) {
            return num < 10 ? '0' + num : '' + num;
        }
        // 开始计时
        start() {
            this.isRuning = true;
            this.main();
        }
        // 技术计时
        stop() {
            this.isRuning = false;
            clearTimeout(_Time._id);
            console.log(`time is up.`);
        }
        // 静态方法
        static formatT(date) {
            return (new Date(Date.parse(date.split(' ').join('T')))).getTime();
        }
    }
    exports._Time = _Time;
});
