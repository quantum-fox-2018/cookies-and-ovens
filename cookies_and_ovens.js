class Kue{
  constructor(name, done){
    this.status = 'mentah';
    this.name = name;
    this.done = done;
  }

  changeStatus(currentTime){
    switch(true){
      case currentTime < this.done-10 :
        this.status = 'mentah';
        break;
      case currentTime <= this.done-5 :
        this.status = 'hampir matang';
        break;
      case currentTime >= this.done+10 :
        this.status = 'hangus';
        break;
      case currentTime >= this.done :
        this.status = 'matang';
        break;
    }
  }

}

class Oven{
  constructor(kue_kue, waktuMasak){
    this.kue_kue = kue_kue;
    this.waktuMasak = waktuMasak;
  }


  masakKue(){
    for(let time = 5; time <= this.waktuMasak; time+=5){
      for(let indexKue = 0; indexKue < this.kue_kue.length; indexKue++){
        kue_kue[indexKue].changeStatus(time);
        console.log(`${kue_kue[indexKue].name}, menit ke ${time} : ${kue_kue[indexKue].status}`)
      }
      console.log('');
    }
  }
}

class KueCoklat extends Kue{
  constructor(){
    super('Kue coklat', 25);

  }
}

class KueKacang extends Kue{
  constructor(){
    super('Kue kacang', 30);
  }
}

class KueKeju extends Kue{
  constructor(){
    super('Kue keju', 35);
  }
}

let kue_coklat = new KueCoklat();
let kue_kacang = new KueKacang();
let kue_keju = new KueKeju();

let kue_kue = [kue_coklat, kue_kacang, kue_keju];

let oven = new Oven(kue_kue, 60);

oven.masakKue();
