const data = require('../mock/utilities.json')

const getAllOperations = (req, res, next) => {
  res.status(200).json(data)
}

module.exports = { getAllOperations }
