const { Rate } = require('../rate');

function DefaultRate() {
  Rate.call(this, DefaultRate.title, 2.1);

  this.match = () => true;
}

DefaultRate.title = 'DEFAULT';
DefaultRate.prototype = Rate.prototype;
module.exports = { DefaultRate };
