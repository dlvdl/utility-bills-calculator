const mongoose = require('mongoose')

const OperationSchema = new mongoose.Schema({
  currentReadings: {
    type: Number,
    required: [true, 'Please provide the amount of the current reading'],
    maxLength: [50, 'Amount cannot be longer than 50 characters'],
  },
  date: {
    type: Date,
    required: [true, 'Please provide the date of an operation'],
  },
  difference: {
    type: Number,
    required: [true, 'Please provide the difference between readings'],
    maxLength: [50, 'Difference cannot be longer than 50 characters'],
  },
  cost: {
    type: Number,
    required: [true, 'Please provide the cost of the utilities expense.'],
    maxLength: [50, 'Cost of utilities cannot be longer than 50 characters'],
  },
  service: {
    type: String,
    required: [true, 'Please provide the name of the type of utility'],
    maxLength: [50, 'Type of utilities cannot be longer than 50 characters'],
  },
  tariff: {
    type: Number,
    required: [true, 'Please provide the tariff for the utility'],
    maxLength: [50, 'tariff of utilities cannot be longer than 50 characters'],
  },
  paid: {
    type: Boolean,
    required: [
      true,
      'Please provide information on whether the operation has been paid',
    ],
    maxLength: [50, 'tariff of utilities cannot be longer than 50 characters'],
  },
})

module.exports = mongoose.model('Operation', OperationSchema)
