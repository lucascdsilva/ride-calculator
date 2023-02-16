function Ride(distance, date) {
  if (typeof distance !== 'number') {
    throw new Error('distancia da corrida é invalida');
  }

  if (!(date instanceof Date)) {
    throw new Error('data da corrida é invalida');
  }

  this.distance = distance;
  this.date = date;
  this.amount = 0;
  this.discount = 0;

  this.getAmount = () => this.amount;

  this.setAmount = (amount) => {
    this.amount = amount;
  };

  this.setDiscount = (discount) => {
    this.discount = discount;
  };

  this.getDiscount = () => this.discount;

  this.getTotal = () => this.amount - this.discount;
}

module.exports = { Ride };
