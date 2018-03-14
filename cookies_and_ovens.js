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
  constructor() {

  }

  bake(cookie) {
    if (cookie.cookingTime < cookie.bakeTime) {
      cookie.cookingTime +=5
    }
  }

  process(cookie) {
    if (cookie.cookingTime < cookie.cookedTime/2) {
        cookie.status = 'mentah'
    } else if(cookie.cookingTime === cookie.cookedTime) {
        cookie.status = 'matang'
    } else if(cookie.cookingTime > cookie.cookedTime/2 && cookie.cookingTime < cookie.cookedTime) {
        cookie.status = 'hampir matang'
    } else if(cookie.cookingTime > cookie.cookedTime) {
        cookie.status = 'hangus'
    }
  }
}

class Cookie {
  constructor(bakeTime) {
    this.name = ''
    this.bakeTime = bakeTime
    this.cookingTime = 0
    this.cookedTime = 0
    this.status = 'mentah'
  }
}

class Coklat extends Cookie {
  constructor(bakeTime) {
    super(bakeTime)
      this.cookedTime = 20
      this.name = 'kue coklat'
  }
}

class Kacang extends Cookie {
  constructor(bakeTime) {
    super(bakeTime)
      this.cookedTime = 30
      this.name = 'kue kacang'
  }
}

class Keju extends Cookie {
  constructor(bakeTime) {
    super(bakeTime)
      this.cookedTime = 35
      this.name = 'kue keju'
  }
}



let coklat = new Coklat(40)
let oven = new Oven()
do {
  oven.bake(coklat);
  oven.process(coklat);

  console.log(`kue ${coklat.name} menit ke = ${coklat.cookingTime} : ${coklat.status}`)
} while (coklat.cookingTime < coklat.bakeTime )

console.log();
console.log();
let kacang = new Kacang(40)
// let ovenKacang = new Oven()
do {
  oven.bake(kacang);
  oven.process(kacang);

  console.log(`kue ${kacang.name} menit ke = ${kacang.cookingTime} : ${kacang.status}`)
} while (kacang.cookingTime < kacang.bakeTime )
console.log();
console.log();
let keju = new Keju(40)
// let ovenKeju = new Oven()
do {
  oven.bake(keju);
  oven.process(keju);

  console.log(`kue ${keju.name} menit ke = ${keju.cookingTime} : ${keju.status}`)
} while (keju.cookingTime < keju.bakeTime )
