var HoneyMakerBee = function() {
  this.prototype = Object.create(Bee.prototype);

  this.age = 10;
  this.color = 'yellow';
  this.food = 'jelly';
  this.job = 'make honey';
  this.honeyPot = 0;
};


Bee.prototype.makeHoney = function() {
  this.honeyPot ++;
};

Bee.prototype.giveHoney = function() {
  this.honeyPot --;
};
