class Cookie {
  constructor(name, maxCookMinutes) {
    this.name = name
    this._cookMinutes = 0
    this.maxCookMinutes = maxCookMinutes
    this._status = 'mentah'
  }

  get status(){
    return this._status
  }

  get cookMinutes(){
    return this._cookMinutes
  }

  cook(){
    this._cookMinutes += 5
  }

  changeStatus(){
    if(this._cookMinutes==this.maxCookMinutes){
      this._status = 'hangus'
    } else if(this._cookMinutes==(this.maxCookMinutes-5)){
      this._status = 'matang'
    } else if(this._cookMinutes==(this.maxCookMinutes-10)){
      this._status = 'hampir matang'
    }
  }
}

const cokelat = new Cookie('cokelat',20)
const kacang = new Cookie('cokelat',30)
const keju = new Cookie('cokelat',35)
do {
  cokelat.cook()
  cokelat.changeStatus()
  console.log(`Kue ${cokelat.name}, menit ke ${cokelat.cookMinutes} : ${cokelat.status}`)
} while(cokelat.status!=='hangus')
console.log('');
do {
  kacang.cook()
  kacang.changeStatus()
  console.log(`Kue ${kacang.name}, menit ke ${kacang.cookMinutes} : ${kacang.status}`)
} while(kacang.status!=='hangus')
console.log('');
do {
  keju.cook()
  keju.changeStatus()
  console.log(`Kue ${keju.name}, menit ke ${keju.cookMinutes} : ${keju.status}`)
} while(keju.status!=='hangus')
