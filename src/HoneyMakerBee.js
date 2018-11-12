var HoneyMakerBee = function() {
  this.prototype = Object.create(Bee.prototype);

  this.age = 10;
  this.color = 'yellow';
  this.food = 'jelly';
  this.job = 'make honey';
  this.honeyPot = 0;
};


HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot ++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot --;
};
