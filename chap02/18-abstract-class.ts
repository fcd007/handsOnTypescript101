namespace AbstractNamespace {
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}

    abstract updateWeelCount(newWeelCount: number): void

    showNumberOfWeel() {
      console.log(`Move ${this.wheelCount} miles`)
    }
  }

  class Motocycle extends Vehicle {
    constructor() {
      super(2)
    }
    updateWeelCount(newWeelCount: number) {
      this.wheelCount = newWeelCount
      console.log(`Motocycle has ${this.wheelCount}`)
    }

    showNumberOfWeel() {
      console.log(`Move ${this.wheelCount} miles`)
    }
  }

  class Automobile extends Vehicle {
    constructor() {
      super(4)
    }
    updateWeelCount(newWeelCount: number) {
      this.wheelCount = newWeelCount
      console.log(`Automobile has ${this.wheelCount}`)
    } 

    showNumberOfWeel() {
      console.log(`Move ${this.wheelCount} miles`)
    }
  }

  const motoCycle = new Motocycle()
  motoCycle.updateWeelCount(1)
  const autoMobile = new Automobile()
  autoMobile.updateWeelCount(3)
}