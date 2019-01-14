config = require('./config');

sayHello("Hello Steve")

function sayHello(message) {
  console.log(message + " from app version " + config.getAppVersion())
}
