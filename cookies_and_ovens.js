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

class Cookies {
  constructor(name, finish_time, cook_time){
    this.name           = name;
    this.bake_time      = finish_time;
    this.status         = 'mentah';
    this.cooktime       = cook_time;
    this.current_time   = 0;
    this.cookStatus     = true;
  }

  bake(){
    this.current_time = this.current_time + 5

    if(this.current_time == this.bake_time){
      this.status = 'matang';
    } else if (this.current_time > this.bake_time){
      this.status = 'hangus';
    } else if (this.current_time == this.bake_time - 5){
      this.status = 'hampir matang';
    } else {
      this.status = 'mentah';
    }

    if(this.current_time == this.cooktime){
      this.cookStatus = false;
    }

  }
}

class GenerateCookies extends Cookies {
  constructor(name, finish_time, cook_time){
    super(name, finish_time, cook_time)
  }
}


let kue_coklat  = new GenerateCookies('Kue Coklat', 20, 25);
  while (kue_coklat.cookStatus == true){
    kue_coklat.bake()
    console.log(`${kue_coklat.name}, menit ke ${kue_coklat.current_time} : ${kue_coklat.status}`);
  }

let kue_kacang  = new GenerateCookies('Kue Kacang', 30, 35);
  while (kue_kacang.cookStatus == true){
    kue_kacang.bake()
    console.log(`${kue_kacang.name}, menit ke ${kue_kacang.current_time} : ${kue_kacang.status}`);
  }


let kue_keju    = new GenerateCookies('Kue Keju', 35, 40);
while (kue_keju.cookStatus == true){
  kue_keju.bake()
  console.log(`${kue_keju.name}, menit ke ${kue_keju.current_time} : ${kue_keju.status}`);
}
