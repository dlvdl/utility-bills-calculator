const mongoose = require('mongoose')

const OperationSchema = new mongoose.Schema({
  currentAmount: {
    type: Number,
    required: [true, 'Must provide a amount of utilities'],
    maxLength: [50, 'Amount cannot be longer than 50 characters'],
  },
  date: {
    type: Date,
    required: [true, 'Must provide a date of operations'],
  },
  diff: {
    type: Number,
    required: [
      true,
      'Must provide a difference between last month utilities and current month',
    ],
    maxLength: [50, 'Difference cannot be longer than 50 characters'],
  },
  toPay: {
    type: Number,
    required: [true, 'Must provide a cost of utilities expense'],
    maxLength: [50, 'Cost of utilities cannot be longer than 50 characters'],
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

module.exports = mongoose.model('Operation', OperationSchema)
