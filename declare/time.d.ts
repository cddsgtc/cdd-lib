declare function _Time(): $time;//构造函数
declare interface $time {//time实例
  state: string
  isRuning: boolean
  hour: number
  minutes: number
  seconds: number
  year: number
  month: number
  day: number
  dateSeparator: string
  timeSeparator: string
  date: string
  time: string
  ap: string
  start(): any
  stop(): any
  everyDuration?(parms?: any): any
}

declare class Promise<T> {
  static reject:any
}
