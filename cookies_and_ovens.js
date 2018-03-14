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

class Kue{
  constructor(cookiesName,bakesTime){
      this.cookiesName = cookiesName
      this._status = "mentah";
      this.bakesTime = 20;
    }

    get status(){
      return this._status
    }

}

class CustomeCakes extends Kue {
  constructor(cookiesName,bakesTime){
    super(bakesTime);
    this.cookiesName = cookiesName;
    this.bakesTime = bakesTime;
  }
}

class Oven{

  constructor(cookies,cookTime){
    this._time = 0
    this.cookTime = cookTime;
    this._statusMasak = true;
    this.bakesTime = cookies.bakesTime;
    this._status = cookies._status
  }
  get waktuMasak(){
    return this._statusMasak
  }
  get time(){
    return this._time;
  }
  get status(){
    return this._status
  }
  bakes(){

    this._time = this._time+5;

    if(this._time > this.bakesTime){
      this._status = "Hangus";
    }
    else if(this._time  == this.bakesTime){
      this._status = "Matang"
    }
    else if(this.time >= this.bakesTime -5){
      this._status = "Hampir matang"
    }
    else{
      this._status = "mentah"
    }
    if(this._time >= this.cookTime){
      this._statusMasak = false;
    }
  }
}

let kueCoklat = new CustomeCakes('Kue cokelat',20);// (nama kue, waktu matang)
let kueKacang = new CustomeCakes('Kue kacang',30);
let kueKeju = new CustomeCakes('Kue keju',35);
let ovenCoklat = new Oven (kueCoklat,25); // (objek kue, waktu memasak)
let ovenKacang = new Oven (kueKacang,30);
let ovenKeju = new Oven (kueKeju,30);


console.log(`Proses pembuatan ${kueCoklat.cookiesName}----------------------------------`);
while(ovenCoklat._statusMasak == true){
  ovenCoklat.bakes();
  console.log(`${kueCoklat.cookiesName}, menit ke ${ovenCoklat.time} : ${ovenCoklat.status}`);
}
console.log(`${kueCoklat.cookiesName} anda : ${ovenCoklat.status}------------------------`)

console.log(`Proses pembuatan ${kueKacang.cookiesName}----------------------------------`);
while(ovenKacang._statusMasak == true){
  ovenKacang.bakes();
  console.log(`${kueKacang.cookiesName}, menit ke ${ovenKacang.time} : ${ovenKacang.status}`);
}
console.log(`${kueKacang.cookiesName} anda : ${ovenKacang.status}------------------------`)

console.log(`Proses pembuatan ${kueKeju.cookiesName}----------------------------------`);
while(ovenKeju._statusMasak == true){
  ovenKeju.bakes();
  console.log(`${kueKeju.cookiesName}, menit ke ${ovenKeju.time} : ${ovenKeju.status}`);
}
console.log(`${kueKeju.cookiesName} anda : ${ovenKeju.status}------------------------`)
