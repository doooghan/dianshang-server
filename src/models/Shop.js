/**
 * @description Shop Model
 */
const mongoose = require('../db/db')

const ShopSchema = new mongoose.Schema(
  {
    name: String,
    imgUrl: String,
    sales: Number, // 月售
    expressLimit: {
      type: Number,
      default: 0,
    }, // 起送价格
    expressPrice: {
      type: Number,
      default: 0,
    }, // 快递价格
    slogan: String,
  },
  { timestamps: true }
)

const Shop = mongoose.model('shop', ShopSchema)

module.exports = Shop
