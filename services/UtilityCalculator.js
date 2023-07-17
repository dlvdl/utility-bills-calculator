class UtilityReceipt {
    constructor(readings) {
      this.currReadings = readings.currReadings;
      this.date = new Date().toLocaleDateString("en-US");
      this.diff = this.calculateDiff(readings);
      this.cost = this.calculateSum(readings);
      this.tariff = readings.service.value;
      this.service = readings.service.name;
    }
  
    calculateDiff(readings) {
      return readings.currReadings - readings.prevReadings;
    }
  
    calculateSum(readings) {
      const res = this.calculateDiff(readings) * readings.service.value;
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
    compute(prevReadings, currReadings, service, tariff) {
      const readings = new UtilityReadings(prevReadings, currReadings, service, tariff)
      return new UtilityReceipt(readings);
    }
  }

  

  module.exports =  new Calculator()
