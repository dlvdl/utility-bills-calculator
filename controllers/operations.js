const data = require('../mock/utilities.json')

const getAllOperations = (req, res, next) => {
  res.status(200).json(data)
}

const getOneOperation = (req, res, next) => {
  const { id } = req.params
  console.log(id)
  res.status(200).json({ msg: 'success' })
}

const createOperation = (req, res, next) => {}

const deleteOperation = (req, res, next) => {}

module.exports = {
  getAllOperations,
  getOneOperation,
  createOperation,
  deleteOperation,
}
