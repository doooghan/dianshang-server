/**
 * @description product controller
 */
const Product = require('../models/Product')

/**
 * 查询某商店的商品列表
 * @param {String} shopId 商品id
 * @param {String} tab 商品分类
 * @returns Product List
 */
async function getProductsByShopId(shopId, tab = 'all') {
  const products = await Product.find({
    shopId,
    tabs: {
      $in: tab,
    },
  })
  return products
}

module.exports = { getProductsByShopId }
