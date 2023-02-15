const { Rate } = require("./rate");

module.exports.RatesEnum = {
    OVERNIGHT: new Rate('OVERNIGHT', 3.9),
    SUNDAY: new Rate('SUNDAY', 2.9),
    DEFAULT: new Rate('DEFAULT', 2.1)
};
