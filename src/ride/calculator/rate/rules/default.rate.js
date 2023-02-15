const { Rate } = require("../rate");

function DefaultRate() {
    this.__proto__ = Rate;
    Rate.call(this, DefaultRate.title, 2.1);

    this.active = function(date) {
        return true;
    }
}

DefaultRate.title  = 'DEFAULT';
DefaultRate.prototype = Rate.prototype;
module.exports = {DefaultRate};
