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

class Cake {

    constructor() {

        this._name = ''
        this._cookingTime = 0
        this._cakeBaked = 0
        this._status = 'mentah'

    }

    cooking() {
        
        this._cookingTime += 5

        if (this._cookingTime <= 10) {

            this._status = 'mentah'
        } else if(this._cookingTime < this._cakeBaked ) {

            this._status = 'hampir matang'
        } else if(this._cookingTime == this._cakeBaked) {

            this._status = 'matang'
        } else {

            this._status = 'gosong'
        }
    }
}

class Chocholate extends Cake {

    constructor() {

        super()
        this._name = 'Chocholate cake'
        this._cakeBaked = 20
    }
}

class Peanut extends Cake {

    constructor(){

        super()
        this._name = 'Peanut cake'
        this._cakeBaked = 30
    }
}

class Cheese extends Cake {

    constructor(){

        super()
        this._name = 'Cheese cake'
        this._cakeBaked = 35
    }
}

var cake = new Cheese()

for (let i = 0; i < 10; i++) {
    
    cake.cooking()
    
    console.log(cake._name + ', menit ke ' + cake._cookingTime + ' : ' + cake._status )
}
