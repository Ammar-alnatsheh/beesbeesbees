var Bee = function() {
  this.prototype = Object.create(Grub.prototype);
  
  this.age = 5;
  this.color = 'yellow';
  this.food = 'jelly';
  this.job = 'keep on growing';

};

Bee.prototype.job = function() {
  return this.job;
};
