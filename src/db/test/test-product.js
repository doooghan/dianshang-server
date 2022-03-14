/**
 * @description 模拟 product 数据操作
 */

const Product = require('../../models/Product')

!(async () => {
  // 新建商品
  // await Product.create({
  //   shopId: '622f573c0ae78d402b99b10b',
  //   name: '苹果 250g / 份',
  //   imgUrl: 'images/product/apple.jpeg',
  //   sales: 10,
  //   price: 33.6,
  //   oldPrice: 39.6,
  //   tabs: ['all', 'seckill', 'fruit'],
  // })
  // await Product.create({
  //   shopId: '622f573c0ae78d402b99b10b',
  //   name: '葡萄 500g / 份',
  //   imgUrl: 'images/product/grape.jpg',
  //   sales: 10,
  //   price: 99.6,
  //   oldPrice: 119.6,
  //   tabs: ['all', 'seckill', 'fruit'],
  // })
  // await Product.create({
  //   shopId: '622f573c0ae78d402b99b10b',
  //   name: '桃子 250g / 份',
  //   imgUrl: 'images/product/peach.jpg',
  //   sales: 110,
  //   price: 12.6,
  //   oldPrice: 22.6,
  //   tabs: ['all', 'seckill', 'fruit'],
  // })
  // await Product.create({
  //   shopId: '622f573c0ae78d402b99b10e',
  //   name: '西瓜 250g / 份',
  //   imgUrl: 'images/product/watermelon.jpg',
  //   sales: 10,
  //   price: 199.9,
  //   oldPrice: 299.9,
  //   tabs: ['all', 'seckill', 'fruit'],
  // })

  // 查询某商店的商品列表
  const products = await Product.find({
    shopId: '622f573c0ae78d402b99b10b',
    tabs: {
      $in: 'seckill',
    },
  })
  console.log(products)

  console.log('执行结束, over')
})()
