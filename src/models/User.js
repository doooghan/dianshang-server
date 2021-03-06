/**
 * @description User model
 */
const mongoose = require('../db/db')

const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    username: {
      type: String,
      require: true, // 必须
      unique: true, // 唯一
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
)

const User = mongoose.model('user', UserSchema)

module.exports = User
