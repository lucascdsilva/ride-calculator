
function Ride(distance, date) {
    if(typeof distance != 'number') {
        throw new Error('distancia da corrida é invalida');
    }
    
    if(typeof date != 'object' || date.constructor.name != 'Date') {
        throw new Error('data da corrida é invalida');
    }

    this.distance = distance;
    this.date = date;
    this.amount = 0;
    this.discount = 0;

    this.setAmount = function(amount) {
        this.amount = amount;
    }

    
    this.setDiscount = function(discount) {
        this.discount = discount;
    }

    this.getTotal = function() {
       return  this.amount - this.discount;
    }
}

module.exports = {Ride};