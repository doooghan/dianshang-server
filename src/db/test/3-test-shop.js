/**
 * @description 模拟 shop 数据操作
 */

const Shop = require('../../models/Shop')

!(async () => {
  // 新建两个商店
  // await new Shop({
  //   name: '沃尔玛',
  //   imgUrl: 'http://localhost:3000/images/shop/wmt.jepg',
  //   sales: 1000, // 月售
  //   expressLimit: 0, // 起送价格
  //   expressPrice: 5, // 快递价格
  //   slogan: 'VIP尊享满89元减4元运费券',
  // }).save()
  // await new Shop({
  //   name: 'Sam会员商店',
  //   imgUrl: 'http://localhost:3000/images/shop/sam.jepg',
  //   sales: 1000, // 月售
  //   expressLimit: 0, // 起送价格
  //   expressPrice: 5, // 快递价格
  //   slogan: '联合利华买一送一',
  // }).save()

  //热门店铺
  const shopList = await Shop.find().sort({ _id: -1 })
  console.log(shopList)

  console.log('执行结束, over')
})()
