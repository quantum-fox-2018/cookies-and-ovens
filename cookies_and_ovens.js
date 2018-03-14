// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
// Your code here

/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
class Cookies {
  constructor(name) {
    this.name = `Kue ${name}`;
    this.status = ['Mentah', 'Hampir Matang', ' Matang', 'Hangus'];
  }
}

class KueKacang extends Cookies {
  constructor(name) {
    super(name);
    this.sudahMatang = 20;
    this.belum_matang = 15;
  }
}

class KueCokelat extends Cookies {
  constructor(name) {
    super(name);
    this.sudahMatang = 25;
    this.belumMatang = 10;
  }
}

class KueKeju extends Cookies {
  constructor(name) {
    super(name);
    this.sudahMatang = 25;
    this.belumMatang = 20;
  }
}

class Ovens {
  constructor() {
    this.timeCookies = 35;
  }

  prosesMasak(kue) {
    let proses = kue;
    for (let i = 0; i < this.timeCookies; i += 5) {
      if (i < proses.belumMatang) {
        console.log(`${proses.name}, menit ke ${i} : ${proses.status[0]}`);
      } else if (i == proses.belumMatang) {
        console.log(`${proses.name}, menit ke ${i} : ${proses.status[1]}`);
      } else if (i == proses.sudahMatang) {
        console.log(`${proses.name}, menit ke ${i} : ${proses.status[2]}`);
      } else {
        console.log(`${proses.name}, menit ke ${i} : ${proses.status[3]}`);
      }
    }
  }
}

let kueCoklat = new KueCokelat('coklat');
let kueKacang = new KueKacang('kacang');
let kueKeju = new KueKeju('keju');
let oven = new Ovens();

oven.prosesMasak(kueCoklat);
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
oven.prosesMasak(kueKacang);
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
oven.prosesMasak(kueKeju);
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
