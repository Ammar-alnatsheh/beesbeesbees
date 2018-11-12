var ForagerBee = function() {
  this.prototype = Object.create(Bee.prototype);

  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};


ForagerBee.prototype.forage = function(value) {
  this.treasureChest.push(value);
};
