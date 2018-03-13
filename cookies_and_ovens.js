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

const {Oven} = require('./Oven.js');
const {KueCoklat} = require('./KueCoklat.js');
const {KueKacang} = require('./KueKacang.js');
const {KueKeju} = require('./KueKeju.js');

let oven = new Oven();
oven.tray = 2;

let kuecoklat = new KueCoklat();
let kuekacang = new KueKacang();
let kuekeju = new KueKeju();

oven.addCookie(0, kuecoklat);
oven.addCookie(0, kuekacang);
oven.addCookie(1, kuekeju);

oven.startOven(35);
