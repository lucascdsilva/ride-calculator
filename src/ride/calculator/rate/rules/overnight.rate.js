const { Rate } = require("../rate");

function OvernightRate() {
    this.__proto__ = Rate;
    Rate.call(this, 'OVERNIGHT', 3.9);

    this.active = function (date) {
        return date.getHours() >= 22;
    }
}

OvernightRate.prototype = Rate.prototype;
module.exports = {OvernightRate};
