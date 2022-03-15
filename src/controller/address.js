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

module.exports = {
  createAddress,
}
