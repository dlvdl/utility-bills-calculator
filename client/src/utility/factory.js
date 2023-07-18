export class Factory {
  constructor(type, params) {
    switch (type) {
      case "Record":
        return new Record(params)

      case "Setting":
        return new Setting(params)

      case "ResultOfCalculation":
        return new ResultOfCalculation(params)

      default:
        return "no matching"
    }
  }
}

class Setting {
  constructor({ date, name, cost } = {}) {
    this.date = date
    this.cost = cost
    this.name = name
  }
}

class Record {
  constructor({ currReadings, prevReadings, service, tariff } = {}) {
    this.currReadings = currReadings
    this.prevReadings = prevReadings
    this.service = service
    this.tariff = tariff
  }
}

class ResultOfCalculation {
  constructor({ difference, cost } = {}) {
    this.difference = difference
    this.cost = cost
  }
}
