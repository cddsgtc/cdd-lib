# my-lib
个人常用库积累

## _Time 
* 类
* 实例属性与方法
```typescript
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
  ap:stringxx
  start(): any
  stop(): any
  main(): any
  everySecond?(parms?: any): any
}
```