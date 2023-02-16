const { Ride } = require('../../ride');
const { OvernightAfterNRidesDiscount } = require('./rules/overnight-after-n-rides.discount');

const chain = [
  new OvernightAfterNRidesDiscount(),
];

function apply(criteria) {
  const { ride } = criteria;

  if (!(ride instanceof Ride)) {
    throw new Error('ride argument of criteria is not an instance of Ride');
  }

  const discountTotals = chain.reduce((total, discountItem) => {
    let ac = total;
    if (discountItem.match(criteria)) {
      ac += discountItem.calc(ride.getAmount());
    }

    return ac;
  }, 0);

  ride.setDiscount(discountTotals);
  return discountTotals;
}

module.exports = { apply };
