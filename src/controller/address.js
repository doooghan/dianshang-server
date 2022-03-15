/**
 * @description address controller
 */
const Address = require('../models/Address')

/**
 * 创建收货地址
 * @param {Stirng} username 用户名手机号
 * @param {Object} data 地址的详细信息
 * @returns Addres
 */
async function createAddress(username, data) {
  newAddress = await Address.create({
    username,
    ...data,
  })
  return newAddress
}

/**
 * 获取收货地址列表
 * @param {String} username 用户名
 * @returns Address list
 */
async function getAddressList(username) {
  const list = await Address.find({ username }).sort({ updateAt: -1 })
  return list
}

/**
 * 根据 id 获取单个收货地址
 * @param {String} id
 * @returns Address
 */
async function getAddressById(id) {
  const address = await Address.findById(id)
  return address
}

/**
 * 更新地址
 * @param {String} username 用户名
 * @param {String} id 地址 id
 * @param {Object} data 更新数据
 * @returns new address
 */
async function updateAddress(username, id, data) {
  const address = await Address.findOneAndUpdate(
    { _id: id, username },
    { username, ...data },
    {
      new: true, // 返回更新之后的最新数据（默认是false，返回修改前的数据）
    }
  )
  return address
}

module.exports = {
  createAddress,
  getAddressList,
  getAddressById,
  updateAddress,
}
