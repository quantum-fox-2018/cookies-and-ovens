class Oven {
  constructor() {
    this._tray = [];
  }

  set tray(jumlahTray) {
    for(let i = 0; i < jumlahTray; i++) {
      this._tray.push({
        noTray: i,
        cookies: []
      });
    }
  }

  addCookie(tray, cookie) {
    for(let i = 0; i < this._tray.length; i++) {
      if(this._tray[i].noTray === tray) {
        this._tray[i].cookies.push(cookie);
      }
    }
  }

  startOven(time) {
    let tingkatKematangan = ['mentah', 'hampir matang', 'matang', 'hangus'];
    for(let i = 0; i <= time; i+=5) {
      console.log(`Menit ke: ${i}`);
      for(let j in this._tray) {
        console.log(`Tray ke: ${this._tray[j].noTray}`);
        for(let k in this._tray[j].cookies) {
          let waktuMatangCookie = this._tray[j].cookies[k]._waktuMatang;
          if(i > waktuMatangCookie) {
            console.log(`${this._tray[j].cookies[k].constructor.name}: Tingkat kematangan saat ini: ${tingkatKematangan[3]}`);
          } else if(i == waktuMatangCookie) {
            console.log(`${this._tray[j].cookies[k].constructor.name}: Tingkat kematangan saat ini: ${tingkatKematangan[2]}`);
          } else if(i >= waktuMatangCookie/2) {
            console.log(`${this._tray[j].cookies[k].constructor.name}: Tingkat kematangan saat ini: ${tingkatKematangan[1]}`);
          } else {
            console.log(`${this._tray[j].cookies[k].constructor.name}: Tingkat kematangan saat ini: ${tingkatKematangan[0]}`);
          }
        }
      }
      console.log("--------------------------------------------------");
    }
  }
}

module.exports = {
  Oven
}
