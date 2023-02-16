const { Ride } = require("../../ride");
const { OvernightAfterNRidesDiscount } = require("./rules/overnight-after-n-rides.discount");

const chain = [
    new OvernightAfterNRidesDiscount(),
];

function apply(criteria) {
    const {ride} = criteria;
    let discountTotals = 0;

    if(! ride instanceof Ride) {
        throw new Error('ride argument of criteria is not an instance of Ride');
    }

    for(const discount of chain) {
        if(discount.match(criteria)) {
            discountTotals += discount.calc(ride.getAmount());
        }
    }

    ride.setDiscount(discountTotals);
    return discountTotals;
}

module.exports = {apply};
