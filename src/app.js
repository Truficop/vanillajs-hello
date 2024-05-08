/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let resultado = generarExcusa();
  document.getElementById("excuse").innerHTML = resultado;
  console.log("Hello Rigo from the console!");
};

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

let randomWho = Math.floor(Math.random() * who.length);
let randonaction = Math.floor(Math.random() * action.length);
let randomwhat = Math.floor(Math.random() * what.length);
let randomwhen = Math.floor(Math.random() * when.length);
function generarExcusa() {
  return (
    who[randomWho] +
    " " + // Espacio aquí
    action[randonaction] +
    " " + // Espacio aquí
    what[randomwhat] +
    " " + // Espacio aquí
    when[randomwhen]
  );
  // console.log(who[randomWho]);
  // console.log(action[randonaction]);
  // console.log(what[randomwhat]);
  // console.log(when[randomwhen]);
}
