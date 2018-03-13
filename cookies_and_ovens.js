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

class Cookie {
  constructor(){
    this.name = '';
    this.status = "Mentah";
    this.bakingTime = 0; // waktu memasak
    this.bakedTIme = 0; // waktu kue matang
    // this.ingredients = [];
  }

  bake(){
    // this.status = "selesai dimasak";
    this.bakingTime += 5;

    if(this.bakingTime == (this.bakedTIme-5)){
      this.status = "hampir matang";
    }else if (this.bakingTime == this.bakedTIme) {
      this.status = "matang";
    }else if (this.bakingTime >= (this.bakedTIme+5)) {
      this.status = "hangus";
    }
  }
}

class coklat extends Cookie{
  constructor(){
    super();
    this.name = 'cokelat';
    this.bakedTIme = 20;
  }
}

class kacang extends Cookie{
  constructor(){
    super();
    this.name = 'kacang';
    this.bakedTIme = 30;
  }
}

class keju extends Cookie{
  constructor(){
    super();
    this.name = 'keju';
    this.bakedTIme = 35;
  }
}


// let tesCookie = new Cookie();
let kueCoklat = new coklat();
let kueKacang = new kacang();
let kueKeju = new keju();

//TEST CASE kue Coklat
for (var i = 0; i < 4; i++) {
  kueCoklat.bake();
  console.log(`kue ${kueCoklat.name}, menit ke ${kueCoklat.bakingTime} : ${kueCoklat.status}`);
}
console.log('=======================');
//TEST CASE kue Kacang
for (var i = 0; i < 6; i++) {
  kueKacang.bake();
  console.log(`kue ${kueKacang.name}, menit ke ${kueKacang.bakingTime} : ${kueKacang.status}`);
}
console.log('=======================');
//TEST CASE kue Keju
for (var i = 0; i < 8; i++) {
  kueKeju.bake();
  console.log(`kue ${kueKeju.name}, menit ke ${kueKeju.bakingTime} : ${kueKeju.status}`);
}







//
