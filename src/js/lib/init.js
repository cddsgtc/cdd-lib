(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./promise.min", "vue", "element-ui", "./element-ui-package", "./package-axios", "./_api"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /// <reference path="init.d.ts"/>
    // 第一部分，对element的添加
    require("./promise.min");
    const vue_1 = require("vue");
    const element_ui_1 = require("element-ui");
    // 消息包装
    const element_ui_package_1 = require("./element-ui-package");
    // axios的包装
    const package_axios_1 = require("./package-axios");
    // 接口
    const _api_1 = require("./_api");
    // 组件列表
    let _comp = [element_ui_1.Button, element_ui_1.Select, element_ui_1.Checkbox, element_ui_1.CheckboxGroup, element_ui_1.Pagination, element_ui_1.Popover];
    // 使用
    for (let item of _comp) {
        vue_1.default.use(item);
    }
    let message = element_ui_1.Message; //由于模块不能直接使用所以需要赋值使用
    vue_1.default.prototype.msgbox = element_ui_1.MessageBox;
    vue_1.default.prototype.loading = element_ui_1.Loading.service;
    vue_1.default.prototype.msg = element_ui_package_1.packageElMsg(message);
    // 第二部分，axios的封装
    package_axios_1.preSetAxios(vue_1.default.prototype.msg);
    vue_1.default.prototype.$getData = package_axios_1.getData;
    // 接口
    vue_1.default.prototype.Api = _api_1.default;
});
