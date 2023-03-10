const { Ride } = require('../../../ride');
const { OvernightRate } = require('../../rate/rules/overnight.rate');
const { Discount } = require('../discount');

function OvernightAfterNRidesDiscount() {
  const percent = 0.1;
  Discount.call(this, OvernightAfterNRidesDiscount.title);

  this.match = (criteria) => {
    const { ride, quantityRides } = criteria;

    if (!(ride instanceof Ride) || !Number.isInteger(quantityRides)) {
      return false;
    }

    const rate = new OvernightRate();
    if (rate.match(ride.date) && quantityRides >= 10) {
      return true;
    }

    return false;
  };

  this.calc = (total) => total * percent;
}

OvernightAfterNRidesDiscount.title = 'OVERNIGHT_AFTER_N_RIDES';
OvernightAfterNRidesDiscount.prototype = Discount.prototype;
module.exports = { OvernightAfterNRidesDiscount };
