/**
 * @description Order Model
 */
const mongoose = require('../db/db')

const OrderSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    shopId: String,
    shopName: String,
    isCanceled: Boolean,
    address: {
      username: String,
      city: String,
      department: String,
      houseNumber: String,
      name: String,
      phone: String,
    },
    products: [
      {
        product: {
          shopId: String,
          name: String,
          imgUrl: String,
          sales: Number,
          price: Number,
          oldPrice: Number,
          tabs: [String],
        },
        orderSales: Number,
      },
    ],
  },
  { timestamps: true }
)

const Order = mongoose.model('order', OrderSchema)

module.exports = Order
