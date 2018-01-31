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
        constructor() {
            // 主程序
            this.main = () => {
                let self = this;
                if (this.isRuning) {
                    this._time = this._date = new Date();
                    this.everySecond && (this.everySecond(this));
                    setTimeout(() => {
                        self.main();
                    }, 1000);
                }
                else {
                    console.log(`time is stop`);
                }
            };
            this.init();
        }
        init() {
            this.isRuning = false;
            this.timeSeparator = ':';
            this.dateSeparator = '-';
            this._date = this.__date = new Date();
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
            this.hour = date.getHours() + 1;
            this.minutes = date.getMinutes() + 1;
            this.seconds = date.getSeconds() + 1;
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
        }
    }
    exports._Time = _Time;
});
