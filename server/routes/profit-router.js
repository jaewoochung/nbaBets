const express = require('express')

const ProfitCtrl = require('../controllers/profit-ctrl')

const router = express.Router()

router.post('/profit', ProfitCtrl.createProfit)
router.put('/profit/:id', ProfitCtrl.updateProfit)
router.delete('/profit/:id', ProfitCtrl.deleteProfit)
router.get('/profit/:id', ProfitCtrl.getProfitById)
router.get('/profits', ProfitCtrl.getProfits)

module.exports = router
