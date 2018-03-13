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

class bake {

     constructor(name, time){

         this.name = name
         this.time = 0
         this.done = time
         this.status = this.status()

     }

     addTime(){

         this.time += 5

     }

     status (){

       for (;this.time <= this.done;){

         if (this.time == this.done-5 ){

             console.log(this.name+', menit ke-'+this.time+' : hampir matang')

         } else if (this.time < this.done){

             console.log(this.name+', menit ke-'+this.time+' : mentah')

         } else if (this.time == this.done){

             console.log(this.name+', menit ke-'+this.time+' : matang')

         } else if(this.time > this.done){

             console.log(this.name+', menit ke-'+this.time+' : hangus')

         }

         this.addTime()

       }

     }

 }

 class Kacang extends bake {

     constructor(){

        super('Kue Kacang',20)

     }

 }

 class Coklat extends bake {

     constructor(){

        super('Kue Coklat',30)

     }

 }

 class Keju extends bake {

     constructor(){

        super('Kue Keju',35)

     }

 }

 let kacang = new Kacang()
 let coklat = new Coklat()
 let keju = new Keju()
