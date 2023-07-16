const express = require('express')
const {
  getAllSettings,
  createSettings,
  deleteSetting,
} = require('../controllers/settings')

const router = express.Router()

router.route('/').get(getAllSettings).post(createSettings)
router.route('/:id').delete(deleteSetting)

module.exports = router
