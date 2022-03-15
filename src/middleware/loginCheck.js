/**
 * @description 登陆校验
 */
const { ErrorModel } = require('../res-model/index')

module.exports = async (ctx, next) => {
  const session = ctx.session
  if (session && session.userInfo) {
    await next()
    return
  }
  ctx.body = ErrorModel(10002, '登陆校验失败')
}
