export default (err) => {
    if (err.clientErr) {
      return err.clientErr
    }
    switch (err.code) {
      case -1:
        return '您的网络貌似断线了 T_T'
      case 202:
        return '用户名已被占用'
      case 210:
        return '密码错误'
      case 219:
        return '失败次数超过限制,稍后再试'
      default:
        return 'Oops..出错了！'
    }
}