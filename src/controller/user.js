/**
 * @description user controller
 */

const User = require('../models/User')

/**
 * 注册
 * @param {String} username 用户名
 * @param {String} password 密码
 * @returns
 */
async function register(username, password) {
  const newUser = await User.create({ username, password })
  return newUser
}

/**
 * 登陆
 * @param {String} username 用户名
 * @param {String} password 密码
 * @returns 登陆结果 Boolean
 */
async function login(username, password) {
  const user = await User.findOne({
    username,
    password,
  })
  if (user != null) {
    return true
  }
  return false
}

module.exports = {
  register,
  login,
}
