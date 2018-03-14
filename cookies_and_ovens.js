// Answer These Questions:
//
// - What are essential classes? membuat objek secara instan, efisiensi penulisan code(meminimalisir pengulangan),
// - What attributes will each class have? masakKue, Coklat, Kacang, Keju
// - What interface will each class provide? bake dan stat kue
// - How will the classes interact with each other? membuat parent class kemudian di extends di class lain yang membutuhkan method parent class
// - Which classes will inherit from others, if any? parent class yang akan mewariskan methodnya pada class lain yang membutuhkan method parent class
//
//
// Your code here

class Oven{
    constructor() {

    }
    bake(cookieParam) {
      if (cookieParam.cookTime < cookieParam.bakeTime) {
        cookieParam.cookTime +=5
      }
    }
    statKue(cookieParam) {
        if(cookieParam.cookTime < cookieParam.matangTime/2){
            cookieParam.statusMatang = 'mentah'
        }else if(cookieParam.cookTime === cookieParam.matangTime){
            cookieParam.statusMatang = 'matang'
        }else if(cookieParam.cookTime > cookieParam.matangTime/2 && cookieParam.cookTime < cookieParam.matangTime){
            cookieParam.statusMatang = 'hampir matang'
        }else if(cookieParam.cookTime > cookieParam.matangTime){
            cookieParam.statusMatang = 'hangus'
        }
    }
}
class Cookie{
  constructor(bakeTime) {
    this.bakeTime = bakeTime
    this.cookTime = 0
    this.matangTime = 20
    this.statusMatang = 'mentah'
    this.kueName = ''
  }
}
class Coklat extends Cookie{
  constructor(bakeTime) {
     super(bakeTime)
     this.matangTime = 20
     this.kueName = 'kue coklat'
  }
}

class Kacang extends Cookie{
  constructor(bakeTime) {
    super(bakeTime)
    this.matangTime = 30
    this.kueName = 'kue kacang'
  }
}
class Keju extends Cookie{
    constructor(bakeTime) {
    super(bakeTime)
    this.matangTime = 35
    this.kueName = 'kue keju'
  }
}


let coklat = new Coklat(25)
let oven = new Oven()
do {
  oven.bake(coklat);
  oven.statKue(coklat);
  console.log(`kue ${coklat.kueName} menit ke = ${coklat.cookTime} : ${coklat.statusMatang}`)
} while (coklat.cookTime < coklat.bakeTime )
console.log('__________________________________________________________')
let kacang = new Kacang(30)
do {
oven.bake(kacang);
oven.statKue(kacang);
  console.log(`kue ${kacang.kueName} menit ke = ${kacang.cookTime} : ${kacang.statusMatang}`)
} while (kacang.cookTime < kacang.bakeTime )
console.log('__________________________________________________________')
let keju = new Keju(25)
do {
oven.bake(keju);
oven.statKue(keju);
  console.log(`kue ${keju.kueName} menit ke = ${keju.cookTime} : ${keju.statusMatang}`)
} while (keju.cookTime < keju.bakeTime )
