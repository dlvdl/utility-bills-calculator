const asyncWrapper = require('../middleware/asyncWrapper')
const Setting = require('../models/setting')

const getSettings = asyncWrapper(async (req, res, next) => {
  const {id} = req.query
  const settings = id ? await Setting.findById(id) : await Setting.find({})
  
  res.status(200).json({data: settings, msg: 'Settings succesfully finded'})
})

const createSettings = asyncWrapper(async (req, res, next) => {
  const setting = await Setting.create(req.body)
  res.status(200).json({data: setting, msg: 'Setting succesfullly created!' })
})

const deleteSetting = asyncWrapper(async (req, res, next) => {
  const { id: settingID } = req.params

  console.log(settingID)
  const task = await Setting.findOneAndDelete({ _id: settingID })

  res.status(200).json({ msg: `Setting ${settingID}  deleted`, task: task })
})

module.exports = { getSettings, createSettings, deleteSetting }
