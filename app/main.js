var $ = require('jquery');
var Vehicle = require('./vehicle');

$('body').html('<h1>We have jquery!</h1>');

// Is jQuery exposed globally or only locally?
if (window.$ === undefined) {
  $('body').append('<p>"$" is undefined</p>');
} else {
  $('body').append('<p>"$" exists!</p>');
}

// Use module we created
var myBike = new Vehicle(2);
myBike.setDriver('Josh');

var eighteenWheeler = new Vehicle(18);
eighteenWheeler.setDriver('Swati');

myBike.print();
eighteenWheeler.print();