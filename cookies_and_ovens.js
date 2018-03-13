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
    constructor() {
        this._halfcooktime = 15;
        this._cooktime = 20;
        this._overcooktime = 25;
        this._status = 'mentah';
    }
}

class ChocoCookie extends Cookie {
    constructor() {
        super()
        this._name = 'Kue Coklat';
    }
}

class PeanutCookie extends Cookie {
    constructor() {
        super()
        this._name = 'Kue Kacang';
    }
}

class CheeseCookie extends Cookie {
    constructor() {
        super()
        this._name = 'Kue Keju';
    }
}

class Oven {
    constructor() {
        this._cookingtime = 35;
    }

    cook(cookie) {
        let time = 0;
        while (time <= this._cookingtime) {
            if (time < cookie._halfcooktime) {
                console.log(`${cookie._name}, menit ke ${time}: ${cookie._status}`);
            } else if (time == cookie._halfcooktime) {
                cookie._status = 'hampir matang';
                console.log(`${cookie._name}, menit ke ${time}: ${cookie._status}`);
            } else if (time == cookie._cooktime) {
                cookie._status = 'matang';
                console.log(`${cookie._name}, menit ke ${time}: ${cookie._status}`);
            } else if (time > cookie._cooktime) {
                cookie._status = 'hangus';
                console.log(`${cookie._name}, menit ke ${time}: ${cookie._status}`);
            }
            time += 5;
        }

    }
}

let kueCoklat = new ChocoCookie();
let kueKacang = new PeanutCookie();
let kueKeju = new CheeseCookie();

let panggangan = new Oven();

console.log('=============================')
panggangan.cook(kueCoklat);
console.log('=============================')
panggangan.cook(kueKacang);
console.log('=============================')
panggangan.cook(kueKeju);
