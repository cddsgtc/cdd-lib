// import * as _ from "lodash"

class _Time {
  state: string
  isRuning: boolean
  private _id: string
  private __date: any
  // private _time: any
  hour: number
  minutes: number
  seconds: number
  year: number
  month: number
  day: number
  duration: number
  dateSeparator: string
  timeSeparator: string
  date: string
  time: string
  ap: string
  everyDuration?(parms: any): any
  constructor(duration: number = 1000) {
    this.duration = duration
    this.init()
  }
  private init() {
    this.isRuning = false
    this.timeSeparator = ':'
    this.dateSeparator = '-'
    this._date = this.__date = new Date()
    this._time = this._date
  }
  // 日期
  get _date(): any {
    return this.__date
  }
  set _date(date: any) {
    this.year = date.getFullYear()
    this.month = date.getMonth() + 1
    this.day = date.getDate()
    this.date = '' + this.year + this.dateSeparator + this.formNumber(this.month) + this.dateSeparator + this.formNumber(this.day)
  }
  // 时间
  get _time(): any {
    return this.__date.getTime()
  }
  set _time(date: any) {
    this.hour = date.getHours() + 1
    this.minutes = date.getMinutes() + 1
    this.seconds = date.getSeconds() + 1
    this.ap = this.hour <= 12 ? 'AM' : 'PM'
    this.time = '' + this.formNumber(this.hour) + this.timeSeparator + this.formNumber(this.minutes) + this.timeSeparator + this.formNumber(this.seconds)
  }
  formNumber(num: number): string {
    return num < 10 ? '0' + num : '' + num
  }
  // 开始计时
  start() {
    this.isRuning = true
    this.main()
  }
  // 技术计时
  stop() {
    this.isRuning = false
  }
  // 主程序
  private main = () => {
    let self = this
    if (this.isRuning) {
      this._time = this._date = new Date()
      this.everyDuration && (this.everyDuration(this))
      setTimeout(() => {
        self.main()
      }, this.duration);
    } else {
      console.log(`time is stop`)
    }
  }
}
// 对文字床度限制
function limitText(str: string, limit: number = 10) {
  let strNew = str + ''
  if (strNew.length > ~~limit) {
    strNew = strNew.substr(0, limit - 3)
    strNew = _.padEnd(strNew, limit, '.')
  }
  return {
    strNew,
    str
  }
}
export {
  limitText,
  _Time
}
