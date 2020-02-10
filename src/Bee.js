
class Bee extends Grub{
  constructor() {
    super();
    this.age = 5;
    this.color = "yellow";
    this.food = "jelly";
    this.job = "Keep on growing";
  }
}

//Almond.prototype = Object.create(Nut.prototype)
// Bee.prototype = Object.create(Grub.prototype);
// Bee.prototype.constructor = Bee;