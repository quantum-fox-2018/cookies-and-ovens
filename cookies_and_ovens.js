// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

class Oven{
  constructor(bakeTime) {
    this.name = ''
    this.bakeTime = bakeTime
    this.cookingTime = 0
    this.cookedTime = 0
    this.status = 'mentah'

  }

  bake() {
    if (this.cookingTime < this.bakeTime) {
      this.cookingTime +=5
    }
  }

  process() {
    if (this.cookingTime < this.cookedTime/2) {
        this.status = 'mentah'
    } else if(this.cookingTime === this.cookedTime) {
        this.status = 'matang'
    } else if(this.cookingTime > this.cookedTime/2 && this.cookingTime < this.cookedTime) {
        this.status = 'hampir matang'
    } else if(this.cookingTime > this.cookedTime) {
        this.status = 'hangus'
    }
  }
}

class Coklat extends Oven{
  constructor(bakeTime) {
    super(bakeTime)
      this.cookedTime = 20
      this.name = 'kue coklat'
  }
}

class Kacang extends Oven{
  constructor(bakeTime) {
    super(bakeTime)
      this.cookedTime = 30
      this.name = 'kue kacang'
  }
}

class Keju extends Oven{
  constructor(bakeTime) {
    super(bakeTime)
      this.cookedTime = 35
      this.name = 'kue keju'
  }
}


let coklat = new Coklat(40)
do {
  coklat.bake();
  coklat.process();

  console.log(`kue ${coklat.name} menit ke = ${coklat.cookingTime} : ${coklat.status}`)
} while (coklat.cookingTime < coklat.bakeTime )

console.log();
console.log();
let kacang = new Kacang(40)
do {
  kacang.bake();
  kacang.process();

  console.log(`kue ${kacang.name} menit ke = ${kacang.cookingTime} : ${kacang.status}`)
} while (kacang.cookingTime < kacang.bakeTime )
console.log();
console.log();
let keju = new Keju(40)
do {
  keju.bake();
  keju.process();

  console.log(`kue ${keju.name} menit ke = ${keju.cookingTime} : ${keju.status}`)
} while (keju.cookingTime < keju.bakeTime )
