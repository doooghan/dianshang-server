const router = require('koa-router')()

const { register, login, getInfo } = require('../controller/user')
const loginCheck = require('../middleware/loginCheck')
const { SuccessModel, ErrorModel } = require('../res-model/index')

router.prefix('/api/user')

// 注册
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

// 登陆
router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body
  const res = await login(username, password)
  if (res) {
    ctx.session.userInfo = { username }
    ctx.body = new SuccessModel()
  } else {
    ctx.body = new ErrorModel(10002, '用户名或密码错误')
  }
})

// 获取用户信息
router.get('/info/', loginCheck, async (ctx, next) => {
  const userInfo = ctx.session.userInfo
  const username = userInfo.username

  const res = await getInfo(username)
  ctx.body = new SuccessModel(res)
})

module.exports = router
