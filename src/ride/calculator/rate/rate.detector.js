const { RatesEnum } = require("./rate.enum");

module.exports.detect = function(date) {
    if (date.getHours() >= 22) {
        return RatesEnum.OVERNIGHT;
    }

    if (date.getDay() === 0) {
        return RatesEnum.SUNDAY;
    }

    return RatesEnum.DEFAULT;
}
