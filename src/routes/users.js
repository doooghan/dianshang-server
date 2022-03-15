const router = require('koa-router')()

const { register } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../res-model/index')

router.prefix('/api/user')

router.post('/register', async (ctx, next) => {
  const { username, password } = ctx.request.body
  try {
    const newUser = await register(username, password)
    ctx.body = new SuccessModel(newUser)
  } catch (error) {
    console.error(error)
    ctx.body = new ErrorModel(10001, `注册失败 - error:${error.message}`)
  }
})

module.exports = router
