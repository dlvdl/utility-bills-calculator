const express = require('express')
const router = express.Router()
const { getAllOperations } = require('../controllers/operations')

router.route('/').get(getAllOperations)

module.exports = router
