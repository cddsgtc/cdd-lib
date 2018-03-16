"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _Time = /** @class */ (function () {
    function _Time(duration) {
        if (duration === void 0) { duration = 1000; }
        var _this = this;
        this.state = '';
        this.isRuning = false;
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
        this.main = function () {
            var self = _this;
            if (_this.isRuning) {
                _this._time = _this._date = _this.__date = new Date();
                _this.everyDuration && (_this.everyDuration(_this));
                _this._id = setTimeout(function () {
                    self.main();
                }, _this.duration);
            }
            else {
                clearTimeout(_this._id);
            }
        };
        this.duration = duration;
        this.init();
    }
    _Time.prototype.init = function () {
        this.isRuning = false;
        this._date = this.__date = new Date();
        this._time = this._date; //初始化时分秒
    };
    Object.defineProperty(_Time.prototype, "dateSeparator", {
        // 日期分割符
        get: function () {
            return this._dateSeparator;
        },
        set: function (separator) {
            this._dateSeparator = separator;
            this._date = this.__date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Time.prototype, "timeSeparator", {
        // 时间分隔符
        get: function () {
            return this._timeSeparator;
        },
        set: function (separator) {
            this._timeSeparator = separator;
            this._time = this.__date;
        },
        enumerable: true,
        configurable: true
    });
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
            this.hour = date.getHours();
            this.minutes = date.getMinutes();
            this.seconds = date.getSeconds();
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
        clearTimeout(this._id);
        console.log("time is up.");
    };
    // 静态方法
    _Time.formatT = function (date) {
        return (new Date(Date.parse(date.split(' ').join('T')))).getTime();
    };
    return _Time;
}());
exports._Time = _Time;
