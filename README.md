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
## limitText

限制一段文字的长短并添加符号，类似String的padEnd，但是该方法是限制和替代而不是补全。

用法：

limitText(str:string,limit:10,rep:'.')

eg:
```js
let str = "你好啊，想要去那里，我想去一个好地方"
limitText(str)//=>你好啊，想要去...
```
## deepClone

深层复制一个对象
虽然现在已经有了Object.assign这样的原生方法，但是有些地方还是要用到自己写的。

用法：
```js
deepClone(obj|array)//=>新的 obj|array
```
该方法不会拷贝原型的属性。
