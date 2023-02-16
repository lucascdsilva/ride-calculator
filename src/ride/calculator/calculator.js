const { Ride } = require("../ride");
const { apply } = require("./discount/discount.chain");
const { Rate } = require("./rate/rate");
const { detect } = require("./rate/rate.detector");

const calc = function(ride) {
    if(! ride instanceof Ride) {
        throw new Error('The ride argument is not an instance of Ride');
    }

    const {distance, date} = ride;
    const rate = detect(date);
    if(!rate instanceof Rate) {
        throw new Error('Could not detect a rate to calculate');
    }

    const amount = distance * rate.value; 
    ride.setAmount(amount);
    return amount;
}


const discount = function(ride, quantityRides) {
    const {date, amount} = ride;

    if(! ride instanceof Ride) {
        throw new Error('The ride argument is not an instance of Ride');
    }

    if(! Number.isInteger(quantityRides)) {
        throw new Error('The quantityRides argument is not an integer number');
    }

    apply({ride, quantityRides});
    return ride.getDiscount();
}

module.exports = {calc, discount};