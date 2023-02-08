const { model, Schema } = require('mongoose')

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  firstname: String,
  lastname: String,
  phonenumber: Number,
  university: String,
  faculty: String,
  branch: String,
  avatarUrl: String,
  studentNumber: Number,
  oauth: {
    facebook: String,
    google: String
  },
  admin: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

module.exports = model('Users', schema)
