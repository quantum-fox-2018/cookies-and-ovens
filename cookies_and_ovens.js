class Cookie {
    constructor(name, time){
        this._name = name;
        this._time = time
        this._timeCook = 0;
        this._status = "mentah";
    }

    get name(){
        return this._name;
    }

    get time(){
        return this._time;
    }

    bakeTime(){
        this._timeCook += 5;
    }

    get timeCook(){
        return this._timeCook;
    }

    get status(){
        if(this._timeCook == (this._time-5)){
            this._status = "hampir matang"
        } else if(this._timeCook == this._time){
            this._status = "matang"
        } else if(this._timeCook >= this._time){
            this._status = "hangus"
        }
        return this._status;
    }
}

class Oven {
    constructor(nameCookie, bakedTime){
        
    }

    bake(nameCookie, bakedTime){
        for(let i=5; i<=bakedTime; i+=5){
            nameCookie.bakeTime()
            console.log(`(${nameCookie.time}) Kue ${nameCookie.name}, menit ke ${nameCookie.timeCook} : ${nameCookie.status}`)
        }
    }

}

let kueCokelat = new Cookie('cokelat', 20);
let kueKacang = new Cookie('kacang', 30);
let kueKeju = new Cookie('keju', 45);

let oven = new Oven();
oven.bake(kueCokelat, 25)
console.log('\n')
oven.bake(kueKacang, 40)
console.log('\n')
oven.bake(kueKeju, 55)