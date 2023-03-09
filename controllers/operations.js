const Operation = require('../models/operation.js')

const getAllOperations = (req, res, next) => {
  res.status(200).json(data)
}

const getOneOperation = (req, res, next) => {
  const { id } = req.params
  console.log(id)
  res.status(200).json({ msg: 'success' })
}

const createOperation = async (req, res, next) => {
  try {
    const operation = await Operation.create(req.body)
    res.status(200).json({ operation })
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

const deleteOperation = (req, res, next) => {}

module.exports = {
  getAllOperations,
  getOneOperation,
  createOperation,
  deleteOperation,
}
