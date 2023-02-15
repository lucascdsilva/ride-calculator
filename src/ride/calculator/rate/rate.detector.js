const { resolve } = require("./rate.chain");

module.exports.detect = function(date) {
    return resolve(date);
}
