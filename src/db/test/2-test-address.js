/**
 * @description 模拟 address 数据操作
 */

const Address = require('../../models/Address')

!(async () => {
  //  新建收货地址
  // await new Address({
  //   username: '13277779999',
  //   city: '北京',
  //   department: '天通苑小区',
  //   houseNumber: '999栋',
  //   name: '张三',
  //   phone: '13211112222',
  // }).save()

  //  新建收货地址 2
  // await new Address({
  //   username: '13277779999',
  //   city: '上海',
  //   department: '东方明珠',
  //   houseNumber: '666栋',
  //   name: '张三',
  //   phone: '13211112222',
  // }).save()

  // 获取收货地址列表
  // const a2 = await Address.find({
  //   username: '13277779999',
  // })
  // console.log(a2)

  // 根据 id 获取单个收货地址
  // const id = '622f44e62d85f50a3ebb8e55'
  // const a3 = await Address.findById({
  //   _id: id,
  // })
  // console.log(a3)

  // 更新收货地址
  const id = '622f44e62d85f50a3ebb8e55'
  const newData = {
    username: '13277779999',
    city: '北京',
    department: '天通苑小区B',
    houseNumber: 'A999栋',
    name: '张wuhu',
    phone: '13211112222',
  }
  const a4 = await Address.findByIdAndUpdate(
    {
      _id: id,
      username: '13277779999',
    },
    newData,
    {
      new: true, // 返回更新之后的最新数据（默认是false，返回修改前的数据）
    }
  )
  console.log(a4)

  console.log('执行结束, over')
})()
