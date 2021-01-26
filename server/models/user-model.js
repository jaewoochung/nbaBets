const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    betAmount: { type: Number, required: true },
    betTeam: { type: String, required: true },
    result: { type: String, required: false },
    betOdds: { type: String, required: true },
  }
)


module.exports = mongoose.model('users', User)
// module.exports = mongoose.model('profits', Profit)
