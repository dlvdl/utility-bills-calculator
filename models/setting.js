const mongoose = require('mongoose')

const SettingSchema = new mongoose.Schema({
  date: {
    type: String,
    required: [true, 'Must provide a date of operations'],
  },

  name: {
    type: String,
    required: [true, 'Must provide a name of type of utility'],
    maxLength: [50, 'Type of utilities cannot be longer than 50 characters'],
  },
  cost: {
    type: String,
    required: [true, 'Must provide a cost of utilitity'],
    maxLength: [50, 'tariff of utilities cannot be longer than 50 characters'],
  },
})

module.exports = mongoose.model('Setting', SettingSchema)
