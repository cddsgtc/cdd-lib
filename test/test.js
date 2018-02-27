(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../src/js/class/time"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<reference path="../declare/time.d.ts"/>
    const time_1 = require("../src/js/class/time");
    let time = new time_1._Time();
    time.dateSeparator = '$';
    console.log(`time is`, time.date, time.year, time.month, time.day, time.hour, time.minutes, time.seconds, time.ap);
    function test1() {
        console.log(`测试`);
    }
    let count = 0;
    time.everyDuration = function () {
        test1();
        ++count;
        console.log(`${count}`);
        if (count >= 10)
            time.stop();
    };
    time.start();
});
