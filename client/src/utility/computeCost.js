import { Factory } from './factory'

class UtilityCalculator {
  constructor() {
    this.value = 0
  }

  executeCommand(command) {
    this.value = command.excute(this.value)
    return this
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd
  }

  excute(currentValue) {
    return currentValue + this.valueToAdd
  }
}

class SubtractCommand {
  constructor(valueToSubstract) {
    this.valueToSubstract = valueToSubstract
  }

  excute(currentValue) {
    return currentValue - this.valueToSubstract
  }
}

class MultyplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply
  }

  excute(currentValue) {
    return currentValue * this.valueToMultiply
  }
}

class DifferenceCommand {
  constructor(previousReadings, currentReadings) {
    this.addCommand = new AddCommand(currentReadings)
    this.subtractCommand = new SubtractCommand(previousReadings)
  }

  excute(currentValue) {
    const newVal = this.addCommand.excute(currentValue)
    return this.subtractCommand.excute(newVal).toFixed(2)
  }
}

class ComputeCostCommand {
  constructor(tariff, previousReadings, currentReadings) {
    this.multyplyCommand = new MultyplyCommand(tariff)
    this.differenceCommand = new DifferenceCommand(
      previousReadings,
      currentReadings
    )
  }

  excute(currentValue) {
    const difference = this.differenceCommand.excute(currentValue)
    const cost = this.multyplyCommand.excute(difference).toFixed(2)
    const params = { difference, cost }
    return new Factory('ResultOfCalculation', params)
  }
}

class SaveRecordCommand {
  constructor(tariff, previousReadings, currentReadings, date, service, paid) {
    this.computeCostCommand = new ComputeCostCommand(
      tariff,
      previousReadings,
      currentReadings
    )
    this.currentReadings = currentReadings
    this.previousReadings = previousReadings
    this.tariff = tariff
    this.date = date
    this.service = service
    this.paid = paid
  }

  excute(currentValue) {
    const params = {}
    const { cost, difference } = this.computeCostCommand.excute(currentValue)

    params.date = this.date
    params.currentReadings = this.currentReadings
    params.difference = difference
    params.cost = cost
    params.service = this.service
    params.tariff = this.tariff
    params.paid = this.paid

    return new Factory('Record', params)
  }
}

export const computeCost = (tariff, previousReadings, currentReadings) => {
  const calculator = new UtilityCalculator()
  return calculator.executeCommand(
    new ComputeCostCommand(tariff, previousReadings, currentReadings)
  )
}

export const saveRecord = ({
  tariff,
  previousReadings,
  currentReadings,
  date,
  service,
  paid,
}) => {
  const calculator = new UtilityCalculator()
  return calculator.executeCommand(
    new SaveRecordCommand(
      tariff,
      previousReadings,
      currentReadings,
      date,
      service,
      paid
    )
  )
}
