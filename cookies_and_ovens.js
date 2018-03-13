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
class Oven{
  constructor(){

  }

  static bakedProcess(cookie,time){

    for (let i = 5; i <= time; i+=5) {
      if(i===cookie._timeBaked-5){
        cookie._status='hampir matang'
      }
      else if(i===cookie._timeBaked){
        cookie._status='matang'
      }
      else if(i>cookie._timeBaked){
        cookie._status='hangus'
      }
      console.log(cookie._name+', menit ke-'+i+' : '+cookie._status)
    }
    console.log('\n');
  }
}

class Cookie{
  constructor(name,timeBaked,status){
    this._name=name
    this._timeBaked=timeBaked
    this._status=status
  }
}
let coklat=new Cookie('Kue coklat',20,'mentah')
let kacang=new Cookie('Kue kacang',30,'mentah')
let keju=new Cookie('Kue keju',35,'mentah')

Oven.bakedProcess(coklat,30)
Oven.bakedProcess(kacang,30)
Oven.bakedProcess(keju,30)
