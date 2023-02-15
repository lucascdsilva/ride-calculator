const { DefaultRate } = require("./rules/default.rate");
const { OvernightRate } = require("./rules/overnight.rate");
const { SundayRate } = require("./rules/sunday.rate");

const chain = [
    new OvernightRate(),
    new SundayRate(),
    new DefaultRate(),
];

function resolve(date) {
    for(const rate of chain) {
        if(rate.active(date)) return rate;
    }

    throw new Error('Not found rate');
}

module.exports = {chain, resolve};
