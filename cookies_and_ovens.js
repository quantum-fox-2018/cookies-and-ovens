class Oven {
  constructor(name, time) {

    this.name = name
    this.timer = time
    this.start_time = 0
    this.done = name.done
    this.kondisi = ''
    this.timeSet = time

  }

  addTime(){

    this.start_time += 5

  }

  status(){

    this.addTime()

    if (this.start_time == this.done-5 ){

      this.kondisi = 'hampir matang'

    } else if (this.start_time < this.done){

      this.kondisi = 'mentah'

    } else if (this.start_time == this.done){

      this.kondisi = 'matang'

    } else if(this.start_time > this.done){

      this.kondisi = 'hangus'

    }


  }

}


class Coklat extends Oven{

  constructor(name, time) {

    super(name, time)
    this.done = time

  }

}

class Kacang extends Oven{

  constructor(name, time) {

    super(name, time)
    this.done = time

  }

}

class Keju extends Oven{

  constructor(name, time) {

    super(name, time)
    this.done = time

  }

}

let coklat = new Coklat('coklat', 20)
let kacang = new Kacang('Kacang', 30)
let keju = new Keju('Keju', 35)

let ovensCoklat = new Oven(coklat, 30)
let ovensKacang = new Oven(kacang, 35)
let ovensKeju = new Oven(keju, 45)

for (; ovensCoklat.start_time < ovensCoklat.timeSet;) {
  ovensCoklat.status()
  console.log(`Kue ${coklat.name}, menit ke ${ovensCoklat.start_time} : ${ovensCoklat.kondisi}`);
}

console.log();

for (; ovensKacang.start_time < ovensKacang.timeSet;) {
  ovensKacang.status()
  console.log(`Kue ${kacang.name}, menit ke ${ovensKacang.start_time} : ${ovensKacang.kondisi}`);
}

console.log();

for (; ovensKeju.start_time < ovensKeju.timeSet;) {
  ovensKeju.status()
  console.log(`Kue ${keju.name}, menit ke ${ovensKeju.start_time} : ${ovensKeju.kondisi}`);
}
