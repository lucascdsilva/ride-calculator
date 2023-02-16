const { Rate } = require("../rate");

function DefaultRate() {
    Rate.call(this, DefaultRate.title, 2.1);

    this.match = function(date) {
        return true;
    }
}

DefaultRate.title  = 'DEFAULT';
DefaultRate.prototype = Rate.prototype;
module.exports = {DefaultRate};
