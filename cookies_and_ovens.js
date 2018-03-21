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
    constructor(name, time, status) {
        this.cake_name = name;
        this.cake_time = time;
        this.cake_status = status;
    }
}

class PeanutCake extends Cookies {
    constructor() {
        super('Peanut Cake', 30, 'mentah');
    }
}

class ChocolateCake extends Cookies {
    constructor() {
        super('Chocolate Cake', 20, 'mentah');
    }
}

class CheeseCake extends Cookies {
    constructor() {
        super('Cheese Cake', 35, 'mentah');
    }
}

class Oven {
    constructor(name, time) {
        this.cake = name;
        this.baking_time = time;
        this.arrayOfCake = [];
    }

    bake() {

        for (let i = 0; i < this.baking_time; i += 5) {
            if (this.cake.cake_name === 'Peanut Cake') {
                if (i + 5 < 15) {
                    this.arrayOfCake.push(`Kue kacang, menit ke ${i+5} : ${this.cake.cake_status}`);
                } else if (i + 5 < this.cake.cake_time && i + 5 >= 15) {
                    this.arrayOfCake.push(`Kue kacang, menit ke ${i+5} : hampir matang`);
                } else if (i + 5 === this.cake.cake_time) {
                    this.arrayOfCake.push(`Kue kacang, menit ke ${i+5} : matang`);
                } else if (i + 5 > this.cake.cake_time) {
                    this.arrayOfCake.push(`Kue kacang, menit ke ${i+5} : hangus`);
                }
            } else if (this.cake.cake_name === 'Chocolate Cake') {
                if (i + 5 < 15) {
                    this.arrayOfCake.push(`Kue coklat, menit ke ${i+5} : ${this.cake.cake_status}`);
                } else if (i + 5 < this.cake.cake_time && i + 5 >= 15) {
                    this.arrayOfCake.push(`Kue coklat, menit ke ${i+5} : hampir matang`);
                } else if (i + 5 === this.cake.cake_time) {
                    this.arrayOfCake.push(`Kue coklat, menit ke ${i+5} : matang`);
                } else if (i + 5 > this.cake.cake_time) {
                    this.arrayOfCake.push(`Kue coklat, menit ke ${i+5} : hangus`);
                }
            } else if (this.cake.cake_name === 'Cheese Cake') {
                if (i + 5 < 15) {
                    this.arrayOfCake.push(`Kue keju, menit ke ${i+5} : ${this.cake.cake_status}`);
                } else if (i + 5 < this.cake.cake_time && i + 5 >= 15) {
                    this.arrayOfCake.push(`Kue keju, menit ke ${i+5} : hampir matang`);
                } else if (i + 5 === this.cake.cake_time) {
                    this.arrayOfCake.push(`Kue keju, menit ke ${i+5} : matang`);
                } else if (i + 5 > this.cake.cake_time) {
                    this.arrayOfCake.push(`Kue keju, menit ke ${i+5} : hangus`);
                }
            }
        }

        return this.arrayOfCake.join('\n');
    }
}

let peanut_cake = new PeanutCake();
let chocolate_cake = new ChocolateCake();
let cheese_cake = new CheeseCake();

let oven = new Oven(cheese_cake, 25);

console.log(oven.bake());