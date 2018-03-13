class Kue{
  constructor(cooking_time, name, done){
    this.cooking_time = cooking_time;
    this.status = null;
    this.name = name;
    this.done = done;
  }

  changeStatus(currentTime){
    if(currentTime < this.done-10){
      this.status = 'mentah';
    } else if(currentTime <= this.done-5){
      this.status = 'hampir matang';
    }else if(currentTime >= this.done+10){
      this.status = 'hangus';
    }else if(currentTime >= this.done){
      this.status = 'matang';
    }
  }

  masakKue(){
    for(let time = 5; time <= this.cooking_time; time+=5){
      this.changeStatus(time);
      console.log(`${this.name}, menit ke ${time} : ${this.status}`)
    }
  }
}

class KueCoklat extends Kue{
  constructor(cooking_time){
    super(cooking_time, 'Kue coklat', 25);

  }
}

class KueKacang extends Kue{
  constructor(cooking_time){
    super(cooking_time, 'Kue kacang', 30);
  }
}

class KueKeju extends Kue{
  constructor(cooking_time){
    super(cooking_time, 'Kue keju', 35);
  }
}

let kue_coklat = new KueCoklat(35);
let kue_kacang = new KueKacang(45);
let kue_keju = new KueKeju(50);

kue_coklat.masakKue();
console.log('');
kue_kacang.masakKue();
console.log('');
kue_keju.masakKue();
