const { DefaultRate } = require('./rules/default.rate');
const { OvernightRate } = require('./rules/overnight.rate');
const { SundayRate } = require('./rules/sunday.rate');

const chain = [
  new OvernightRate(),
  new SundayRate(),
  new DefaultRate(),
];

function resolve(date) {
  const rateSelected = chain.find((rate) => rate.match(date));
  if (rateSelected) {
    return rateSelected;
  }

  throw new Error('Not found rate');
}

module.exports = { chain, resolve };
