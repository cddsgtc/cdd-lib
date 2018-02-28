(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../src/js/class/time", "../src/js/object/deepClone"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<reference path="../declare/time.d.ts"/>
    var time_1 = require("../src/js/class/time");
    var deepClone_1 = require("../src/js/object/deepClone");
    var time = new time_1._Time();
    time.dateSeparator = '$';
    console.log("time is", time.date, time.year, time.month, time.day, time.hour, time.minutes, time.seconds, time.ap);
    function test1() {
        console.log("\u6D4B\u8BD5");
    }
    // let count = 0
    // time.everyDuration = function () {
    //   test1()
    //   ++count
    //   console.log(`${count}`)
    //   if (count >= 10) time.stop()
    // }
    // time.start()
    console.log("\u6D4B\u8BD5deepClone");
    // console.log(`deepClone is`,deepClone)
    var testo = { name: 'cdd' };
    var test2 = ['name', 23, testo];
    var o = ['name', 'cdd', test2];
    var o2 = deepClone_1.deepClone(o);
    o[2][2].age = 23;
    console.log("\u6D4B\u8BD5\u6570\u636E\uFF1A", o, '\n', o2);
    console.log("\u6D4B\u8BD5\u7ED3\u679C\uFF1A", o[2][2].age !== o2[2][2].age ? '通过' : '未通过');
});
