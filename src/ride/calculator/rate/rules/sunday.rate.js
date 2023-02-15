const { Rate } = require("../rate");

function SundayRate() {
    this.__proto__ = Rate;
    Rate.call(this, 'SUNDAY', 2.9);

    this.active = function(date) {
        return date.getDay() === 0;
    }
}

SundayRate.prototype = Rate.prototype;
module.exports = {SundayRate};
