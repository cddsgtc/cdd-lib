declare module _Time{
  
}
interface $time {
  state: string
  isRuning: boolean
  _id: string
  hour: number
  minute: number
  second: number
  year: number
  month: number
  day: number
  dateSeparator: string
  timeSeparator: string
  date: string
  time: string
  start(): any
  stop(): any
  main(): any
  everySecond?(parms?: any): any
}
