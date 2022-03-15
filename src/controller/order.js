/**
 * @description order controller
 */

const Order = require('../models/Order')
const Address = require('../models/Address')
const Product = require('../models/Product')

/**
 * 创建订单
 * @param {String} username
 * @param {Object} data 订单信息体
 * @returns
 */
async function createOrder(username, data = {}) {
  const { addressId, shopId, shopName, isCanceled, products } = data

  const address = await Address.findById(addressId)

  // 可以替换 5-test-order 内的函数题， 这里需要多次查询, 且用到了 Promise.all，但是逻辑更清晰
  const productListWithSales = await Promise.all(
    products.map(async (p) => {
      const product = await Product.findById(p.id)
      return { product, orderSales: p.num }
    })
  )
  const newOrder = await Order.create({
    username,
    shopId,
    shopName,
    isCanceled,
    address,
    products: productListWithSales,
  })

  return newOrder
}

module.exports = { createOrder }
