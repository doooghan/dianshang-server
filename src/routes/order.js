/**
 * @description order router
 */
const router = require('koa-router')()
const loginCheck = require('../middleware/loginCheck')
const { SuccessModel, ErrorModel } = require('../res-model/index')
const { createOrder, getOrderList } = require('../controller/order')

router.prefix('/api/order')

// 创建订单
router.post('/', loginCheck, async (ctx, next) => {
  const username = ctx.session.userInfo.username
  const data = ctx.request.body

  try {
    const newOrder = await createOrder(username, data)
    ctx.body = new SuccessModel(newOrder)
  } catch (error) {
    console.error(error)
    ctx.body = new ErrorModel(10006, '订单创建失败')
  }
})

router.get('/', loginCheck, async (ctx, next) => {
  const username = ctx.session.userInfo.username
  const list = await getOrderList(username)
  ctx.body = new SuccessModel(list)
})

module.exports = router
