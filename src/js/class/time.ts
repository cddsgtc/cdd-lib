class _Time {
  static _id:any
  state: string = ''
  isRuning: boolean = false
  private _id: string = ''
  private __date: any = ''
  // private _time: any
  hour: number = 0
  minutes: number = 0
  seconds: number = 0
  year: number = 1990
  month: number = 0
  day: number = 0
  duration: number = 1000
  dateSeparator: string = '-'
  timeSeparator: string = ':'
  date: string = ''
  time: string = ''
  ap: string = ''
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
    this._time = this._date//初始化时分秒
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
    this.hour = date.getHours()
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
    clearTimeout(_Time._id)
    console.log(`time is up.`)
  }
  // 静态方法
  static formatT(date: string) {
    return (new Date(Date.parse(date.split(' ').join('T')))).getTime()

  }
  // 主程序
  private main = () => {
    let self = this
    if (this.isRuning) {
      this._time = this._date = this.__date = new Date()
      this.everyDuration && (this.everyDuration(this))
      _Time._id = setTimeout(() => {
        self.main()
      }, this.duration);
    } else {
      clearTimeout(_Time._id)
    }
  }
}
export {
  _Time
}
