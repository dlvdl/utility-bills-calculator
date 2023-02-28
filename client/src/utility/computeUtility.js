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
      return factory(
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

export const calculator = (tariff, typeOfUtility, date) => {
  return new UtilityCalculator(tariff, typeOfUtility, date)
}

const factory = (currentVal, date, diff, cost, type, tariff) => {
  return { currentVal, date, diff, cost, type, tariff }
}
