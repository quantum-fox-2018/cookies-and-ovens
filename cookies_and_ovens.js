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
class kue {
  constructor(menit, maxMatang) {
    this.waktu = menit;
    this.maxMatang = maxMatang;
    this.maxMasak = false;
    this.status = '';
  }

  get lama() {
    return this.waktu;
  }

  get hangus() {
    return this.maxMasak;
  }

  get statusSekarang() {
    return this.status;
  }

  matang() {
    if (this.waktu < this.maxMatang) {
      this.waktu += 5;
    } else {
      this.maxMasak = true;
    }
  }

  kondisiKue() {
    if (this.waktu == 5 || this.waktu == 10) {
      this.status = 'mentah'
    } else if (this.waktu == 15) {
      this.status = 'hampir matang';
    } else if (this.waktu == 20) {
      this.status = 'matang';
    } else {
      this.status = 'hangus'
    }
  }
}

class KueCoklat extends kue {
  constructor(menit, matang, status) {
    super(menit, matang, status);
  }
}

var coklat = new KueCoklat(0, 25, 'mentah');
do {
  coklat.matang();
  coklat.kondisiKue();
  console.log(`Kue cokelat, menit ke ${coklat.lama} : ${coklat.status}`)
} while ((coklat.maxMasak != true))
// console.log(coklat)
