const Operation = require('../models/operation.js')
const asyncWrapper = require('../middleware/asyncWrapper')
const operationFilter = require('../services/operatiionsFilter.js')
const UtilityCalculator = require('../services/UtilityCalculator.js')

const getAllOperations = asyncWrapper(async (req, res, next) => {
  const {service, dateFilters, sort, fields, page, limit} = req.query
  const operations = await operationFilter(service, dateFilters, sort, fields, page, limit) 

  res.status(200).json({ operations, length: operations.length })
})

const createOperation = asyncWrapper(async (req, res, next) => {
  const {currReadings, prevReadings, service, tariff} = req.body
  let result = UtilityCalculator(prevReadings, currReadings, service, tariff)
  
  res.status(200).json({ msg: 'Record created!' })
})

const deleteOperation = (req, res, next) => {}

module.exports = {
  getAllOperations,
  createOperation,
  deleteOperation,
}
