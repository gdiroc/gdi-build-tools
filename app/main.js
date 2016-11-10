var $ = require('jquery');

$('body').html('<h1>We have jquery!</h1>');

// Is jQuery exposed globally or only locally?
if (window.$ === undefined) {
  $('body').append('<p>"$" is undefined</p>');
} else {
  $('body').append('<p>"$" exists!</p>');
}