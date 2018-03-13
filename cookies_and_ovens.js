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
  constructor(cookiesName,cookTime){
      this.cookiesName = cookiesName;
      this.cookTime = cookTime;
      this._time = 0;
      this._status = "mentah";
      this._statusMasak = true;
    }

    get time(){
      return this._time
    }
    get status(){
      return this._status
    }
    get waktuMasak(){
      return this._statusMasak
    }

    memasak(waktuMemasak){

      this._time = this._time+5;

      if(this._time > this.cookTime){
        this._status = "Hangus";
      }
      else if(this._time  == this.cookTime){
        this._status = "Matang"
      }
      else if(this.time >= this.cookTime -5){
        this._status = "Hampir matang"
      }
      else{
        this._status = "mentah"
      }
      if(this._time >= waktuMemasak){
        this._statusMasak = false;
      }
    }
}

class CustomeCakes extends Kue {
  constructor(cookiesName,cookTime){
    super(cookiesName,cookTime);
    this.cookiesName = cookiesName;
    this.cookTime = cookTime
  }
}

let kueCoklat = new CustomeCakes('Kue cokelat',20);
let kueKacang = new CustomeCakes('Kue kacang',30);
let kueKeju = new CustomeCakes('Kue keju',35);

console.log(`Proses pembuatan ${kueCoklat.cookiesName}----------------------------------`);
while(kueCoklat._statusMasak == true){
  kueCoklat.memasak(25);
  console.log(`${kueCoklat.cookiesName}, menit ke ${kueCoklat.time} : ${kueCoklat.status}`);
}
console.log(`${kueCoklat.cookiesName} anda : ${kueCoklat.status}------------------------`)

console.log(`Proses pembuatan ${kueKacang.cookiesName}----------------------------------`);
while(kueKacang._statusMasak == true){
  kueKacang.memasak(25);
  console.log(`${kueKacang.cookiesName}, menit ke ${kueKacang.time} : ${kueKacang.status}`);
}
console.log(`${kueKacang.cookiesName} anda : ${kueKacang.status}-------------------------`)


console.log(`Proses pembuatan ${kueKeju.cookiesName}----------------------------------`);
while(kueKeju._statusMasak == true){
  kueKeju.memasak(35);
  console.log(`${kueKeju.cookiesName}, menit ke ${kueKeju.time} : ${kueKeju.status}`);
}
console.log(`${kueKeju.cookiesName} anda : ${kueKeju.status}---------------------------`)
