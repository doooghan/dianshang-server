const router = require('koa-router')()

const { register } = require('../controller/user')

router.prefix('/api/user')

router.post('/register', async (ctx, next) => {
  const { username, password } = ctx.request.body
  try {
    const newUser = await register(username, password)
    ctx.body = {
      errno: 0,
      data: newUser,
    }
  } catch (error) {
    console.error(error)
    ctx.body = {
      errno: 10001,
      message: `注册失败 - error:${error.message}`,
    }
  }
})

module.exports = router
