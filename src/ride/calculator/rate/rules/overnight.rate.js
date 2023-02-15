const { Rate } = require("../rate");

function OvernightRate() {
    this.__proto__ = Rate;
    Rate.call(this, OvernightRate.title, 3.9);

    this.active = function (date) {
        return date.getHours() >= 22;
    }
}

OvernightRate.title  = 'OVERNIGHT';
OvernightRate.prototype = Rate.prototype;
module.exports = {OvernightRate};
