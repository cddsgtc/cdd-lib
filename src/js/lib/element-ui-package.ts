// 全局信息进行包装
export function packageElMsg(Message: any): any {
  return function ({
    message = "",
    type = "info",
    duration = 3
}) {
    switch (type) {
      case 'info':
      case 'success':
        duration = 2
        break;
      case 'warning':
      case 'error':
        break;
      default:
        throw new Error('消息类型错误')
    }
    // 执行message
    Message({
      message: message,
      type: type,
      duration: duration * 1000,
      showClose: true
    })
  }
}
