/**
 * @description 模拟 order 数据操作
 */

const Order = require('../../models/Order')
const Address = require('../../models/Address')
const Product = require('../../models/Product')

!(async () => {
  // 创建订单 1
  // const requestBody = {
  //   addressId: '622f44e62d85f50a3ebb8e55', //地址 id
  //   shopId: '622f573c0ae78d402b99b10b', // 商店 id
  //   shopName: '沃尔玛',
  //   isCanceled: false, // 是否被取消
  //   products: [
  //     {
  //       id: '622f5b4589b5c4d27b8065da', // 商品 id
  //       num: 5, //购买数量
  //     },
  //     {
  //       id: '622f5b4589b5c4d27b8065dd',
  //       num: 10,
  //     },
  //   ],
  // }
  // const address = await Address.findById(requestBody.addressId)
  // // console.log(address)

  // const pId = requestBody.products.map((p) => p.id)
  // // console.log(pId)
  // const productList = await Product.find({
  //   shopId: requestBody.shopId,
  //   _id: { $in: pId },
  // })
  // // console.log(productList)

  // const productListWithSales = productList.map((p) => {
  //   const id = p._id.toString()

  //   const filterProducts = requestBody.products.filter((item) => {
  //     return item.id === id
  //   })
  //   if (filterProducts.length === 0) {
  //     throw Error('未找到匹配的销售数据')
  //   }

  //   return {
  //     product: p,
  //     orderSales: filterProducts[0].num,
  //   }
  // })
  // // console.log(productListWithSales)

  // await Order.create({
  //   username: '13277779999',
  //   shopId: requestBody.shopId,
  //   shopName: requestBody.shopName,
  //   isCanceled: requestBody.isCanceled,
  //   address,
  //   products: productListWithSales,
  // })

  // 创建订单 2
  const requestBody = {
    addressId: '622f44e62d85f50a3ebb8e55', //地址 id
    shopId: '622f573c0ae78d402b99b10b', // 商店 id
    shopName: '沃尔玛',
    isCanceled: false, // 是否被取消
    products: [
      {
        id: '622f5b4589b5c4d27b8065da', // 商品 id
        num: 5, //购买数量
      },
      {
        id: '622f5b4589b5c4d27b8065dd',
        num: 10,
      },
    ],
  }
  const { addressId, shopId, shopName, isCanceled, products } = requestBody
  const productListWithSales = await Promise.all(
    products.map(async (p) => {
      const product = await Product.findById(p.id)
      return { product, orderSales: p.num }
    })
  )
  console.log(productListWithSales)

  console.log('执行结束, over')
})()
