var Bee = function() {
  this.age = 5;
  this.color = 'yellow';
  this.food = 'jelly';
  this.job = 'keep on growing';

};

Bee.prototype = new Grub();
Bee.prototype.constructor = Bee;

Bee.prototype.job = function() {
  return this.job;
};
