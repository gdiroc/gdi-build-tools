class Vehicle {
  constructor (wheels) {
    this.wheels = wheels;
  }

  setDriver (driver) {
    this.driver = driver;
  }

  print () {
    console.log(`This ${this.wheels}-wheeled vehicle has a driver of ${this.driver}`);
  }
}

// Use class we created
var myBike = new Vehicle(2);
myBike.setDriver('Josh');

var eighteenWheeler = new Vehicle(18);
eighteenWheeler.setDriver('Swati');

myBike.print();
eighteenWheeler.print();