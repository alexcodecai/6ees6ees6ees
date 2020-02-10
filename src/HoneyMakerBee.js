


class HoneyMakerBee extends Bee{
  constructor() {
    super();
    this.age = 10;
    this.job = "make honey";
    this.honeyPot = 0;
  }
  makeHoney(honeyPot){
  this.honeyPot++;
  }
  giveHoney(honeyPot){
  this.honeyPot--;
  }


}


// HoneyMakerBee.prototype.makeHoney = function(honeyPot){
//   this.honeyPot++;
// }

// HoneyMakerBee.prototype.giveHoney = function(honeyPot){
//   this.honeyPot--;
// }