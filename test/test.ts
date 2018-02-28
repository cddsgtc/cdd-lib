///<reference path="../declare/time.d.ts"/>
import {_Time} from '../src/js/class/time'
import {deepClone} from "../src/js/object/deepClone"

let time: $time = new _Time()

time.dateSeparator = '$'
console.log(`time is`, time.date, time.year, time.month, time.day, time.hour, time.minutes, time.seconds, time.ap)

function test1() {
  console.log(`测试`)
}

// let count = 0
// time.everyDuration = function () {
//   test1()
//   ++count
//   console.log(`${count}`)
//   if (count >= 10) time.stop()
// }
// time.start()

console.log(`测试deepClone`)
// console.log(`deepClone is`,deepClone)
let testo: { [params: string]: any } = {name: 'cdd'}
let test2: any[] = ['name', 23, testo]
let o = ['name', 'cdd', test2]
let o2 = deepClone(o)
o[2][2].age = 23
console.log(`测试数据：`, o, '\n', o2)
console.log(`测试结果：`, o[2][2].age !== o2[2][2].age ? '通过' : '未通过')
