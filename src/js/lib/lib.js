// import * as _ from "lodash"
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
    var _Time = /** @class */ (function () {
        function _Time(duration) {
            if (duration === void 0) { duration = 1000; }
            var _this = this;
            // 主程序
            this.main = function () {
                var self = _this;
                if (_this.isRuning) {
                    _this._time = _this._date = new Date();
                    _this.everyDuration && (_this.everyDuration(_this));
                    setTimeout(function () {
                        self.main();
                    }, _this.duration);
                }
                else {
                    console.log("time is stop");
                }
            };
            this.duration = duration;
            this.init();
        }
        _Time.prototype.init = function () {
            this.isRuning = false;
            this.timeSeparator = ':';
            this.dateSeparator = '-';
            this._date = this.__date = new Date();
            this._time = this._date;
        };
        Object.defineProperty(_Time.prototype, "_date", {
            // 日期
            get: function () {
                return this.__date;
            },
            set: function (date) {
                this.year = date.getFullYear();
                this.month = date.getMonth() + 1;
                this.day = date.getDate();
                this.date = '' + this.year + this.dateSeparator + this.formNumber(this.month) + this.dateSeparator + this.formNumber(this.day);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_Time.prototype, "_time", {
            // 时间
            get: function () {
                return this.__date.getTime();
            },
            set: function (date) {
                this.hour = date.getHours() + 1;
                this.minutes = date.getMinutes() + 1;
                this.seconds = date.getSeconds() + 1;
                this.ap = this.hour <= 12 ? 'AM' : 'PM';
                this.time = '' + this.formNumber(this.hour) + this.timeSeparator + this.formNumber(this.minutes) + this.timeSeparator + this.formNumber(this.seconds);
            },
            enumerable: true,
            configurable: true
        });
        _Time.prototype.formNumber = function (num) {
            return num < 10 ? '0' + num : '' + num;
        };
        // 开始计时
        _Time.prototype.start = function () {
            this.isRuning = true;
            this.main();
        };
        // 技术计时
        _Time.prototype.stop = function () {
            this.isRuning = false;
        };
        return _Time;
    }());
    exports._Time = _Time;
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
