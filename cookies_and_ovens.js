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

class MasakKue {
    constructor(bakeTime) {
      this.bakeTime = bakeTime
      this.cookTime = 0
      this.matangTime = 20
      this.statusMatang = 'mentah'
      this.kueName = ''
    }
    bake() {
      if (this.cookTime < this.bakeTime) {
        this.cookTime +=5
      }
    }
    statKue() {
        if(this.cookTime < this.matangTime/2){
            this.statusMatang = 'mentah'
        }else if(this.cookTime === this.matangTime){
            this.statusMatang = 'matang'
        }else if(this.cookTime > this.matangTime/2 && this.cookTime < this.matangTime){
            this.statusMatang = 'hampir matang'
        }else if(this.cookTime > this.matangTime){
            this.statusMatang = 'hangus'
        }
    }
}

class Coklat extends MasakKue{
  constructor(bakeTime) {
    super(bakeTime)
    this.matangTime = 20
    this.kueName = 'kue coklat'
  }
}

class Kacang extends MasakKue{
  constructor(bakeTime) {
    super(bakeTime)
    this.matangTime = 30
    this.kueName = 'kue kacang'
  }
}
class Keju extends MasakKue{
  constructor(bakeTime) {
    super(bakeTime)
    this.matangTime = 35
    this.kueName = 'kue keju'
  }
}


let coklat = new Coklat(25)
do {
  coklat.bake();
  coklat.statKue();
  console.log(`kue ${coklat.kueName} menit ke = ${coklat.cookTime} : ${coklat.statusMatang}`)
} while (coklat.cookTime < coklat.bakeTime )
console.log('__________________________________________________________')
let kacang = new Kacang(30)
do {
  kacang.bake();
  kacang.statKue();
  console.log(`kue ${kacang.kueName} menit ke = ${kacang.cookTime} : ${kacang.statusMatang}`)
} while (kacang.cookTime < kacang.bakeTime )
console.log('__________________________________________________________')
let keju = new Keju(25)
do {
  keju.bake();
  keju.statKue();
  console.log(`kue ${keju.kueName} menit ke = ${keju.cookTime} : ${keju.statusMatang}`)
} while (keju.cookTime < keju.bakeTime )
