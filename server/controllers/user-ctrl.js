const User = require('../models/user-model')

createUser = (req, res) => {
  const body = req.body

  // Error handler, if there is no 'body' request
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a user'
    })
  }

  const user = new User(body)

  // if user creation is done improperly
  if (!user) {
    return res.status(400).json({ success: false, error: err })
  }

  user
    .save()
    .then(() => {
      return res.status(200).json({
        success: true,
        id: user._id,
        message: 'User created',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'User not created',
      })
    })
}

updateUser = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a user to update'
    })
  }

  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'User not found',
      })
    }

    user.betAmount = body.betAmount
    user.betTeam = body.betTeam
    user.result = body.result
    user.betOdds = body.betOdds
    user
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: user._id,
          message: 'User updated',
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'User not udpated',
        })
      })
  })
}

deleteUser = async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ sucess: false, error: err })
    }

    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: 'User not found'})
    }

    return res.status(200).json({success: true, data: user })
  }).catch(err => console.log(err))
}

getUserById = async (req, res) => {
  await User.findOne({_id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: 'User not foud' })
    }
    return res.status(200).json({ success: true, data: user })
  }).catch(err => console.log(err))
}

getUsers = async (req, res) => {
  await User.find({}, (err, users) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!users.length) {
      return res
        .status(404)
        .json({ success: false, error: err })
    }
    return res.status(200).json({ success: true, data: users })
  }).catch(err => console.log(err))
}


module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getUsers
}
