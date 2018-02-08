declare module 'vue'
declare module "element-ui"
declare module "Promise"
declare module 'qs'

interface Window {
  [params: string]: any
}

// getData
interface $getData {
  api: string
  data: any
  method: string
  modal: string
  beforeRes(): any
  success?(res: any): any
  fail?(err: any): any
  complete(): any
  [params: string]: any
}
