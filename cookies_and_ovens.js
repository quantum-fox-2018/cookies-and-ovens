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
  constructor(cookie, time, status) {
    this.cookie = cookie;
    this.bake_time = time;
    this.bake_status = 'mentah';
  }
}

class Choco extends Cookie {
  constructor(cookie, time, status) {
    super(cookie, status);
    this.bake_time  = 20;
  }
}

class Peanut extends Cookie {
  constructor(cookie, time, status) {
    super(cookie, status)
    this.bake_time = 30;
  }
}

class Cheese extends Cookie {
  consructor(cookie, time, status) {
    super(cookie, status)
    this.bake_time = 35
  }
}

class Oven {
  constructor(bakeCookie) {
    this.tray = [];
  }

  addCookie(cookie) {
    this.tray.push(cookie);
  }

  bakingCookies() {
    for(var timer = 0; timer < this.tray[j].bake_time; timer+=5) {
      console.log('timer : ', timer)
      for(var i = 0; i < this.tray.length; i++) {
        if(this.tray[i].baketime ===  timer+5) {
          this.tray[i].bake_status = 'hampir matang';
        } else if(this.tray[i].baketime ===  timer) {
          this.tray[i].bake_status = 'matang';
        } else if(this.tray[i].baketime <  timer) {
          this.tray[i].bake_status = 'hangus';
        }
        console.log(this.tray[i].cookie, this.tray[i].status);
      }
    }
  }
}

var choco = new Cookie('Choco Cookie');
console.log(choco);
