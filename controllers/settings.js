const asyncWrapper = require('../middleware/asyncWrapper')
const Setting = require('../models/setting')

const getAllSettings = asyncWrapper(async (req, res, next) => {
  const settings = await Setting.find({})
  res.status(200).json({ settings })
})

const createSettings = asyncWrapper(async (req, res, next) => {
  const setting = await Setting.create(req.body)
  res.status(200).json({ setting })
})

const deleteSetting = asyncWrapper(async (req, res, next) => {
  const { id: settingID } = req.params

  console.log(settingID)
  const task = await Setting.findOneAndDelete({ _id: settingID })

  res.status(200).json({ msg: `Setting ${settingID}  deleted`, task: task })
})

module.exports = { getAllSettings, createSettings, deleteSetting }
