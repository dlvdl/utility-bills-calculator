const mongoose = require('mongoose')

const SettingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'Must provide a date of operations'],
  },
  amount: {
    type: Number,
    required: [true, 'Must provide a amount of utilities'],
    maxLength: [50, 'Amount cannot be longer than 50 characters'],
  },
  type: {
    type: String,
    required: [true, 'Must provide a name of type of utility'],
    maxLength: [50, 'Type of utilities cannot be longer than 50 characters'],
  },
  tariff: {
    type: Number,
    required: [true, 'Must provide a tariff of utilitity'],
    maxLength: [50, 'tariff of utilities cannot be longer than 50 characters'],
  },
})

module.exports = mongoose.model('Setting', SettingSchema)
