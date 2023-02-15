const { Ride } = require("../ride");
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
    const rate = detect(date);

    ride.setDiscount(0);
    if(rate.title == 'OVERNIGHT' && quantityRides >= 10) {
        const discount = amount * 0.1;
        ride.setDiscount(discount);
    }

    return ride.getTotal();
}

module.exports = {calc, discount};