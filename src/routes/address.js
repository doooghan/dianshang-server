/**
 * @description address router
 */
const router = require('koa-router')()
const loginCheck = require('../middleware/loginCheck')
const { SuccessModel, ErrorModel } = require('../res-model/index')
const { createAddress } = require('../controller/address')

router.prefix('/api/user/address')

// 新建收货地址
router.post('/', loginCheck, async (ctx, next) => {
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  const data = ctx.request.body

  try {
    const newAddress = await createAddress(username, data)
    ctx.body = new SuccessModel(newAddress)
  } catch (error) {
    console.error(error)
    ctx.body = new ErrorModel(10004, '新建收货地址失败')
  }
})

module.exports = router
