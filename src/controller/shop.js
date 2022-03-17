/**
 * @description shop controller
 */
const Shop = require('../models/Shop')

/**
 * 热门店铺
 * @returns Shop List
 */
async function getHotList() {
  const list = await Shop.find().sort({ _id: -1 })
  return list
}

/**
 * 单个商店的信息
 * @param {String} id
 * @returns Shop
 */
async function getShopInfo(id) {
  const shop = await Shop.findById(id)
  return shop
}

module.exports = { getHotList, getShopInfo }
