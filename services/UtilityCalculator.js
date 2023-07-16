class UtilityReceipt {
    constructor(readings, service) {
      this.currReadings = readings.currReadings;
      this.date = new Date().toLocaleDateString("en-US");
      this.diff = this.calculateDiff(readings);
      this.cost = this.calculateSum(readings, service);
      this.tariff = service.value;
      this.service = service.name;
    }
  
    calculateDiff(readings) {
      return readings.currReadings - readings.prevReadings;
    }
  
    calculateSum(readings, service) {
      const res = this.calculateDiff(readings) * service.value;
      return Number(res.toFixed(2));
    }
  }

  class UtilityReadings {
    constructor(prevReadings, currReadings, serviceName, tariff) {
      if (prevReadings < 0 || currReadings < 0) return;
      this.prevReadings = Number(prevReadings);
      this.currReadings = Number(currReadings);
      this.service = {
        name: serviceName,
        value: Number(tariff)
      };
    }
  }

  class Calculator {
    constructor(prevReadings, currReadings, service, tariff) {
      this.readings = new UtilityReadings(prevReadings, currReadings, service, tariff);
    }
  
    compute() {
      return new UtilityReceipt(this.readings, this.readings.service);
    }
  }

  const calculate = (prevReadings, currReadings, service, tariff) => {
    return new Calculator(prevReadings, currReadings, service, tariff).compute();
  }

  module.exports = calculate
