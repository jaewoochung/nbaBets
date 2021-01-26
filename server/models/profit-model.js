const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Profit = new Schema(
  {
    total: { type: Number, required: true }
  }
)

module.exports = mongoose.model('profit', Profit)
