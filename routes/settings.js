const express = require('express')
const {
  getSettings,
  createSettings,
  deleteSetting,
} = require('../controllers/settings')

const router = express.Router()

router.route('/').get(getSettings).post(createSettings)
router.route('/:id').delete(deleteSetting)

module.exports = router
