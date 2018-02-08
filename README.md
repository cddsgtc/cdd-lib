# my-lib
个人常用库积累

## _Time 
* 类
* 实例属性与方法
```typescript
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
  duration:number
  dateSeparator: string
  timeSeparator: string
  date: string
  time: string
  ap: string
  start(): any
  stop(): any
  everyDuration?(parms?: any): any
}
```