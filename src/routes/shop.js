/**
 * @description shop router
 */
const router = require('koa-router')()
const { SuccessModel } = require('../res-model/index')
const { getHotList, getShopInfo } = require('../controller/shop')
const { getProductsByShopId } = require('../controller/product')

router.prefix('/api/shop')

// 热门店铺
router.get('/hot-list', async (ctx, next) => {
  const list = await getHotList()
  ctx.body = new SuccessModel(list)
})

// 单个商店的信息
router.get('/:id', async (ctx, next) => {
  const id = ctx.params.id
  const shop = await getShopInfo(id)
  ctx.body = new SuccessModel(shop)
})

// 查询某商店的商品列表
router.get('/:id/products', async (ctx, next) => {
  const shopId = ctx.params.id
  const tab = ctx.query.tab || 'all'
  const products = await getProductsByShopId(shopId, tab)
  ctx.body = new SuccessModel(products)
})

module.exports = router
