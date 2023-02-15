const { Ride } = require("./src/ride/ride");
const Calculator = require("./src/ride/calculator/calculator");

const calc = function(distance, date) {
   const ride = new Ride(distance, date);
   return Calculator.calc(ride);
}

const discount = function(ride, quantityRides = 0) {
    if(!ride instanceof  Ride) {
        throw new Error('The ride argument is not an instance of Ride');
    }

    return Calculator.discount(ride, quantityRides);
}

module.exports = {calc, discount};