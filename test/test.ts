///<reference path="../declare/time.d.ts"/>
import {_Time} from '../src/js/class/time'

let time: $time = new _Time()

time.dateSeparator = '$'
console.log(`time is`, time.date, time.year, time.month, time.day, time.hour, time.minutes, time.seconds, time.ap)

function test1() {
  console.log(`测试`)
}

let count = 0
time.everyDuration = function () {
  test1()
  ++count
  console.log(`${count}`)
  if (count >= 10) time.stop()
}
time.start()