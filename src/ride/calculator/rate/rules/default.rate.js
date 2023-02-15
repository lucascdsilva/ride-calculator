const { Rate } = require("../rate");

function DefaultRate() {
    this.__proto__ = Rate;
    Rate.call(this, 'DEFAULT', 2.1);

    this.active = function(date) {
        return true;
    }
}

DefaultRate.prototype = Rate.prototype;
module.exports = {DefaultRate};
