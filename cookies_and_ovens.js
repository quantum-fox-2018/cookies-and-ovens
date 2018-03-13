/*jshint esversion:6*/
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

"use strict";

class Bake{
  constructor (cakeName , timeCook){
    this.name = cakeName;
    this.timeCook = timeCook;
    this.status = 'mentah';
  }

  static bakeProcess(){
    for(let i = 0 ; i < this.timeCook ; i+=5){
      if(i <= this.timeCook -5){
        this.status = 'Hampir Matang';
      }
      else if(i === this.timeCook){
        this.status = 'Matang';
      }
      else if(i>this.timeCook){
        this.status = 'Hangus';
      }
    }
  }
}


  class ChocolateCake extends Bake{
  constructor(cakeName,timeCook){
    super(cakeName,20);
  }
}

class PeanutCake extends Bake{
  constructor(cakeName,timeCook){
    super(cakeName,25);
  }
}

class CheeseCake extends Bake{
  constructor(cakeName,timeCook){
    super(cakeName,30);
  }
}

let coklat = new ChocolateCake()
for(let i = 0 ; i <= coklat.timeCook ;i+=5){
  console.log('Kue Coklat Waktu ke - ' + i + ' Statusnya ' + bakeProcess(i))
}
