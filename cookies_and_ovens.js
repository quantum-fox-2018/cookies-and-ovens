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
    this.cookiesName = cookies.cookiesName
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
let cookies = [];
cookies.push(kueCoklat,kueKacang,kueKeju);

for(let i=0;i<cookies.length;i++){
  let oven = new Oven (cookies[i],25);
  console.log(`Proses pembuatan ${kueCoklat.cookiesName}----------------------------------`);
  while(oven._statusMasak == true){
    oven.bakes();
    console.log(`${oven.cookiesName}, menit ke ${oven.time} : ${oven.status}`);
  }
  console.log(`${oven.cookiesName} anda : ${oven.status}------------------------`)
}
