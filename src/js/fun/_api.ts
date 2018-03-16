let base = 'api'
export default {
  status: `${base}/api/Account/status`,//关闭开启自动交易
  asset:`${base}/api/Account/asset`,//当前用户资产
  history_trade: `${base}/api/Account/history_trade`,//交易详情
  // 日志信息
  log: `${base}/api/Account/log`,//获取日志信息
  // 账户信息
  profit: `${base}/api/Account/profit`,//用户持仓&收益
}
