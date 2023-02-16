const { Rate } = require("../rate");

function OvernightRate() {
    Rate.call(this, OvernightRate.title, 3.9);

    this.match = function (date) {
        return date.getHours() >= 22;
    }
}

OvernightRate.title  = 'OVERNIGHT';
OvernightRate.prototype = Rate.prototype;
module.exports = {OvernightRate};
