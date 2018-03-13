class Cookie {
    constructor(name, cookTime) {
        this._name = name
        this._cookTime = cookTime
        this._status = 'mentah'
    }
}

class KueCoklat extends Cookie {
    constructor(name, cookTime) {
        super('Kue Coklat', 20)
    }
}

class KueKacang extends Cookie {
    constructor(name, cookTime) {
        super('Kue Kacang', 30)
    }
}

class KueKeju extends Cookie {
    constructor(name, cookTime) {
        super('Kue Keju', 35)
    }
}

class Oven {
    constructor() {
        
    }

    static cooking(listKue, time){
        for(let i=0; i<=time; i+=5){
            console.log('======== Panggangan kue menit ke :',i,'==========');
            for(let j=0; j<listKue.length; j++){
                // console.log(listKue[j]);
                let nowStatus = listKue[j]._status
                if(i > listKue[j]._cookTime){
                    nowStatus = 'hangus'
                } else if(i == listKue[j]._cookTime){
                    nowStatus = 'matang'
                } else if(i == listKue[j]._cookTime-5){
                    nowStatus = 'hampir matang'
                }
                console.log(listKue[j]._name,'==>',nowStatus);
            }
        }
    }


}

let kue_cokelat = new KueCoklat()
let kue_kacang = new KueKacang()
let kue_keju = new KueKeju()
let listKue = [kue_cokelat,kue_kacang, kue_keju]
// console.log(listKue);

Oven.cooking(listKue, 30)