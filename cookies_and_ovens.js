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
  static bakes(cookie, bakesTime) {
    console.log(`Start Baking ${cookie.name}!`);
    for (let i = 0; i <= bakesTime; i+=5) {
      if (i === cookie.cooked_time) {
        cookie.status = 'matang';
        console.log(`${cookie.name}, menit ke ${i} : ${cookie.status}`);
      } else if (i > cookie.cooked_time) {
        cookie.status = 'hangus'
        console.log(`${cookie.name}, menit ke ${i} : ${cookie.status}`);
      } else if (i < 15) {
        cookie.status = 'mentah'
        console.log(`${cookie.name}, menit ke ${i} : ${cookie.status}`);
      } else {
        cookie.status = 'hampir matang'
        console.log(`${cookie.name}, menit ke ${i} : ${cookie.status}`);
      }
    }
    console.log(`Done!\n`);
  }
}

let chocoChip = new ChocolateChip();
let peanutButter = new PeanutButter();
let cheeseCake = new CheeseCake();

Oven.bakes(chocoChip, 20);
Oven.bakes(peanutButter, 25);
Oven.bakes(cheeseCake, 40);
