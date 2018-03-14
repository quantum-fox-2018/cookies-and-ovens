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
    // this.name = '';
    this.status = "Mentah";
    this.bakingTime = 0; // waktu memasak
    this.bakedTIme = 0; // waktu kue matang
    // this.ingredients = [];
  }

}

class Coklat extends Cookie{
  constructor(){
    super();
    this.name = 'cokelat';
    this.bakedTIme = 20;
  }
}

class Kacang extends Cookie{
  constructor(){
    super();
    this.name = 'kacang';
    this.bakedTIme = 30;
  }
}

class Keju extends Cookie{
  constructor(){
    super();
    this.name = 'keju';
    this.bakedTIme = 35;
  }
}

class Oven{
  constructor(){
    this.cookies = [];
    this.timer = 0;
  }

  addCookie(cookie){
    this.cookies.push(cookie);
  }

  bakingCookie(){
    for(let i = 0; i < this.cookies.length; i++){
        let bakingTime = this.cookies[i].bakingTime;
        let bakedTime = this.cookies[i].bakedTIme;
        let currentStatus = this.cookies[i].status;
        let cookieName = this.cookies[i].name;
        this.cookies[i].bakingTime += 5;
        let status = this.bakedCheck(bakingTime, bakedTime, currentStatus);
        console.log(`Kue ${cookieName}, menit ke ${this.timer} : ${status}`);
    }
    
    this.timer += 5;
  }

  bakedCheck(bakingTime, bakedTime, currentStatus){
    let status = currentStatus;

    if(bakingTime == bakedTime-5){
        status = "hampir matang";
    }else if (bakingTime == bakedTime) {
        status = "matang";
    }else if (bakingTime > bakedTime) {
        status = "hangus";
    }

    return status;
  }
}

// // let tesCookie = new Cookie();
let kueCoklat = new Coklat();
let kueKacang = new Kacang();
let kueKeju = new Keju();
let oven = new Oven();

oven.addCookie(kueCoklat);
oven.addCookie(kueKacang);
oven.addCookie(kueKeju);
console.log("Kue yang masuk Oven:", oven);

//TEST CASE Oven kue
for (var i = 0; i < 8; i++) {
  console.log(`\nMenit ke ${oven.timer}`);
  oven.bakingCookie();
}
console.log(`\nSetelah ${oven.timer} menit`, oven);







//
