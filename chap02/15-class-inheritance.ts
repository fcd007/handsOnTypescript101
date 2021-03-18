class Vehicle {
  constructor(private wheelCount: number) {}

  showNumberOfWheels() {
    console.log(`Move ${this.wheelCount} miles`)
  }
}

class Motocycle extends Vehicle {
  constructor() {
    super(2)
  }
}

class Automobile extends Vehicle{
  constructor() {
    super(4)
  }
}

const motoCycle = new Motocycle()
motoCycle.showNumberOfWheels()
const autoMobile = new Automobile()
autoMobile.showNumberOfWheels()