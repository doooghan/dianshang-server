/**
 * @description Product Model
 */
const mongoose = require('../db/db')

const ProductSchema = new mongoose.Schema(
  {
    shopId: {
      type: String,
      require: true,
    }, // 和商店产生关联
    name: String,
    imgUrl: String,
    sales: Number,
    price: Number,
    oldPrice: Number,
    tabs: [String], // 左侧 tab 类型
  },
  { timestamps: true }
)

const Product = mongoose.model('product', ProductSchema)

module.exports = Product
