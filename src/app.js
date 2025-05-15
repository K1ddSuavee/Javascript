import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'Bobby'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max-min) + min);
}

function getrandom(anyarray){
  let max = anyarray.length -1;
  let min = 0; 
  let random = getRandomNumber(min, max);
  return anyarray[random];
}

  console.log("Hello Rigo from the console!");
  document.getElementById('excuse').innerHTML = getrandom (who)+ " " + getrandom (action) + " " + getrandom (what) + " " + getrandom (when)
};
