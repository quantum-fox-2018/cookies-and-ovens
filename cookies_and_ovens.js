// Answer These Questions:
//
// - What are essential classes?
//    Cookie, ChocolateChip, PeanutButter, CheeseChip
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

class Cookie {
  constructor(name, cookedTime) {
    this.name = name;
    this.status = 'mentah';
    this.cooked_time = cookedTime;
  }
}

class ChocolateChip extends Cookie {
  constructor() {
    super('Chocolate Chip', 20);
  }
}

class PeanutButter extends Cookie {
  constructor() {
    super('Peanut Butter', 30)
  }
}

class CheeseCake extends Cookie {
  constructor() {
    super('Cheese Cake', 35)
  }
}

class Oven {
  constructor(cookie, bakesTime) {
    this.cookie = cookie;
    this.bakes_time = bakesTime;
  }

  bakes() {
    console.log(`Start Baking ${this.cookie.name}!`);
    for (let i = 0; i <= this.bakes_time; i+=5) {
      if (i === this.cookie.cooked_time) {
        this.cookie.status = 'matang';
        console.log(`${this.cookie.name}, menit ke ${i} : ${this.cookie.status}`);
      } else if (i > this.cookie.cooked_time) {
        this.cookie.status = 'hangus'
        console.log(`${this.cookie.name}, menit ke ${i} : ${this.cookie.status}`);
      } else if (i < 15) {
        this.cookie.status = 'mentah'
        console.log(`${this.cookie.name}, menit ke ${i} : ${this.cookie.status}`);
      } else {
        this.cookie.status = 'hampir matang'
        console.log(`${this.cookie.name}, menit ke ${i} : ${this.cookie.status}`);
      }
    }
    console.log(`Done!\n`);
  }
}

let chocoChip = new ChocolateChip();
let peanutButter = new PeanutButter();
let cheeseCake = new CheeseCake();

let oven = new Oven(chocoChip, 20);
oven.bakes();
