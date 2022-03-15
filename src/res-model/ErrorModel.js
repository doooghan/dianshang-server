/**
 * @description 响应失败返回的信息体
 */

class ErrorModel {
  constructor(errno, message) {
    this.errno = errno
    this.message = message
  }
}

module.exports = ErrorModel
