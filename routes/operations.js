const express = require('express')
const router = express.Router()
const {
  getAllOperations,
  getOneOperation,
  createOperation,
  deleteOperation,
} = require('../controllers/operations')

router.route('/').get(getAllOperations).post(createOperation)
router.route('/:id').get(getOneOperation).delete(deleteOperation)

module.exports = router
