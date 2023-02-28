class UtilityCalculator {
  constructor(tariff, typeOfUtility, date) {
    this.tariff = tariff
    this.diff = null
    this.cost = null
    this.currentVal = null
    this.prevVal = null
    this.date = date
    this.type = typeOfUtility
  }

  computeDiff(currentVal, prevVal) {
    this.diff = currentVal - prevVal
  }

  computeCost(currentVal, prevVal) {
    this.currentVal = currentVal
    this.prevVal = prevVal

    this.computeDiff(this.currentVal, this.prevVal)

    if (this.diff > 0) {
      this.cost = Math.round(this.diff * this.tariff)
      return new Operation(
        this.currentVal,
        this.date,
        this.diff,
        this.cost,
        this.type,
        this.tariff
      )
    }

    return null
  }
}

class Operation {
  constructor(amount, date, diff, toPay, type, tariff) {
    this.amount = amount
    this.date = date
    this.diff = diff
    this.toPay = toPay
    this.type = type
    this.tariff = tariff
  }
}

export const calculator = (tariff, typeOfUtility, date) => {
  return new UtilityCalculator(tariff, typeOfUtility, date)
}
