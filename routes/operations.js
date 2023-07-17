const express = require('express')
const router = express.Router()
const {
  getAllOperations,
  getOneOperation,
  createOperation,
  deleteOperation,
  saveOperation
} = require('../controllers/operations')

router.route('/').get(getAllOperations).post(createOperation)
router.route('/:id').delete(deleteOperation)
router.route('/save').post(saveOperation)

module.exports = router
