const { Rate } = require("../rate");

function SundayRate() {
    Rate.call(this, SundayRate.title, 2.9);

    this.match = function(date) {
        return date.getDay() === 0;
    }
}

SundayRate.title = 'SUNDAY';
SundayRate.prototype = Rate.prototype;
module.exports = {SundayRate};
