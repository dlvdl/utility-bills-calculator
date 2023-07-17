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
  let operationsReceipt = UtilityCalculator.compute(prevReadings, currReadings, service, tariff)
  res.status(200).json({ data: operationsReceipt, msg: 'Operation created!' })
})

const saveOperation = asyncWrapper(async (req, res, next) => {
  console.log(req.body)
  const operation = Operation.create(req.body)
  res.status(200).json({data: operation, msg: 'Operation saved!'})
})

const deleteOperation = (req, res, next) => {}

module.exports = {
  getAllOperations,
  createOperation,
  deleteOperation,
  saveOperation
}
