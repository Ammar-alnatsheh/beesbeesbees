var RetiredForagerBee = function() {
  this.prototype = Object.create(ForagerBee.prototype);

  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function() {
  this.treasureChest.push('treasure');
};
