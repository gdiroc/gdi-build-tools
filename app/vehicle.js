class Vehicle {
  constructor (wheels) {
    this.wheels = wheels;
  }

  setDriver (driver) {
    this.driver = driver;
  }

  print () {
    console.log(`This ${this.wheels}-wheeled vehicle has a driver of ${this.driver}`)
  }
}

module.exports = Vehicle;