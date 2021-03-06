/**
 * @description mongoose 连接数据库
 */
const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const dbName = 'dianshang1'

// 连接
mongoose.connect(`${url}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', (err) => {
  console.log('mongodb connect error', err)
})

// db.once('open', () => {
//   console.log('success')
// })

module.exports = mongoose
