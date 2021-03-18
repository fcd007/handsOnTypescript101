class Vehicle {
  constructor(protected wheelCount: number) {}
  showNumberWheel() {
    console.log(`Move ${this.wheelCount} miles`)
    }
  }

  class Motocycle extends Vehicle {
    constructor() {
      super(2)
    }
    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount
    }
  }

  class  Automobile extends Vehicle{
    constructor() {
      super(4)
    }
  }

  const motoCycle = new Motocycle()
  motoCycle.showNumberWheel()
  const autoMobile = new Automobile()
  autoMobile.showNumberWheel()