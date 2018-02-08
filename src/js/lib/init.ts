/// <reference path="init.d.ts"/>
// 第一部分，对element的添加
import './promise.min'
import Vue from "vue"
import {
  Button,
  Select,
  Checkbox,
  CheckboxGroup,
  MessageBox,
  Message,
  Loading,
  Pagination,
  Popover
} from 'element-ui'
// 消息包装
import { packageElMsg } from "./element-ui-package"
// axios的包装
import { preSetAxios, getData } from "./package-axios"
// 接口
import Api from "./_api"
// 组件列表
let _comp = [Button, Select, Checkbox, CheckboxGroup, Pagination, Popover]
// 使用
for (let item of _comp) {
  Vue.use(item)
}
let message = Message//由于模块不能直接使用所以需要赋值使用
Vue.prototype.msgbox = MessageBox
Vue.prototype.loading = Loading.service
Vue.prototype.msg = packageElMsg(message)

// 第二部分，axios的封装
preSetAxios(Vue.prototype.msg)
Vue.prototype.$getData = getData
// 接口
Vue.prototype.Api = Api
