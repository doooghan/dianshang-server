/**
 * @description 登陆校验
 */

module.exports = async (ctx, next) => {
  const session = ctx.session
  if (session && session.userInfo) {
    await next()
    return
  }

  ctx.body = {
    errno: -1,
    message: '校验失败',
  }
}
