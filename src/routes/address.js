/**
 * @description address router
 */
const router = require('koa-router')()
const loginCheck = require('../middleware/loginCheck')
const { SuccessModel, ErrorModel } = require('../res-model/index')
const {
  createAddress,
  getAddressList,
  getAddressById,
  updateAddress,
} = require('../controller/address')

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

// 获取收货地址列表
router.get('/', loginCheck, async (ctx, next) => {
  const userInfo = ctx.session.userInfo
  const username = userInfo.username

  const list = await getAddressList(username)

  ctx.body = new SuccessModel(list)
})

//根据 id 获取单个收货地址，TODO：1.获取非本用户的地址，2.获取不存在的id
router.get('/:id', loginCheck, async (ctx, next) => {
  const id = ctx.params.id
  const address = await getAddressById(id)
  ctx.body = new SuccessModel(address)
})

// 更新收货地址
router.patch('/:id', loginCheck, async (ctx, next) => {
  const username = ctx.session.userInfo.username
  const id = ctx.params.id
  const data = ctx.request.body

  try {
    const address = await updateAddress(username, id, data)
    ctx.body = new SuccessModel(address)
  } catch (error) {
    console.error(error)
    ctx.body = new ErrorModel(10005, '更新收货地址失败')
  }
})

module.exports = router
