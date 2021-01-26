const Profit = require('../models/profit-model')

createProfit = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a profit'
    })
  }

  const profit = new Profit(body)

  if (!profit) {
    return res.status(400).json({ success: false, error: err})
  }

  profit
    .save()
    .then(() => {
      return res.status(200).json({
        success: true,
        id: profit._id,
        message: 'Profit Created',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Profit not created',
      })
    })
}

updateProfit = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a profit'
    })
  }

  Profit.findOne({ _id: req.params.id }, (err, profit) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Profit not found',
      })
    }

    profit.total = body.total
    profit
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: profit._id,
          message: 'profit updated'
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'User not updated',
        })
      })
  })
}

deleteProfit = async (req, res) => {
  await Profit.findOneAndDelete({ _id: req.params.id }, (err, profit) => {
    if (err) {
      return res.status(400).json({ sucess: false, error: err })
    }

    if (!profit) {
      return res
        .status(404)
        .json({ success: false, error: 'Profit not found'})
    }

    return res.status(200).json({success: true, data: profit })
  }).catch(err => console.log(err))
}

getProfitById = async (req, res) => {
  await Profit.findOne({_id: req.params.id }, (err, profit) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!profit) {
      return res
        .status(404)
        .json({ success: false, error: 'Profit not foud' })
    }
    return res.status(200).json({ success: true, data: profit })
  }).catch(err => console.log(err))
}

getProfits = async (req, res) => {
  await Profit.find({}, (err, profit) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!profit.length) {
      return res
        .status(404)
        .json({ success: false, error: err })
    }
    return res.status(200).json({ success: true, data: profit })
  }).catch(err => console.log(err))
}


module.exports = {
  createProfit,
  updateProfit,
  deleteProfit,
  getProfitById,
  getProfits
}
