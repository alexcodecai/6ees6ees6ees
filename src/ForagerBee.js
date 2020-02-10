

class ForagerBee extends Bee{
  constructor() {
    super();
    this.age = 10;
    this.job = "find pollen";
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(){
    this.treasureChest.push('treasure');
  }


}

// ForagerBee.prototype = Object.create(Bee.prototype);
// ForagerBee.prototype.constructor = ForagerBee;

// ForagerBee.prototype.forage = function(){
//   this.treasureChest.push('treasure');
// }