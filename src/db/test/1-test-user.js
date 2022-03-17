/**
 * @description 模拟 user 数据操作
 */

const User = require('../../models/User')

!(async () => {
  // 注册
  // const u = new User({
  //   username: '13277779999',
  //   password: '123r4',
  // })
  // await u.save()

  // 登陆
  const u2 = await User.findOne({
    username: '13277779999',
  })
  console.log(u2)

  console.log('执行结束, over')
})()
