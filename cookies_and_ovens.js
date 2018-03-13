class Cake {
  constructor(cakeType, bakeTime){
    this._cakeType = cakeType
    this._bakeTime = bakeTime
    this._status = "mentah"
  }

  set status(status){
    this._status = status
  }

  get status(){
    return this._status
  }

  set cakeType(cakeType){
    this._cakeType =cakeType
  }

  get cakeType(){
    return this._cakeType
  }

  set bakeTime(bakeTime){
    this._bakeTime = bakeTime
  }

  get bakeTime(){
    return this._bakeTime
  }
}

class Oven {
  constructor(cakes){
    this.cakes = cakes
  }

  baking(timer){

  for (var bakeTime = 0; bakeTime < timer; bakeTime+= 5) {
    console.log("Bake Time", bakeTime)
    for (var i = 0; i < cakes.length; i++) {
      if(cakes[i].bakeTime === bakeTime+5){
        cakes[i].status = "hampir matang"
      }else if (cakes[i].bakeTime === bakeTime) {
        cakes[i].status = "matang"
      }else if(cakes[i].bakeTime < bakeTime){
        cakes[i].status = "hangus"
      }
      console.log(cakes[i].cakeType, cakes[i].status)
    }
  }
}
}

var CakeCokelat = new Cake("Kue Cokelat", 20)
var CakeKacang = new Cake("Kue kacang", 30)
var CakeKeju = new Cake("Kue keju", 35)
var cakes = []
cakes.push(CakeCokelat)
cakes.push(CakeKacang)
cakes.push(CakeKeju)

var oven = new Oven(cakes);
oven.baking(45)
