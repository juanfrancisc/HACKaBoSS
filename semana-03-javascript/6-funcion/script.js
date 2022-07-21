"use strict";

let pass = Math.floor(Math.random() * 100+1);
console.log(pass);

//const numUser = prompt("Introduce un número del 0 al 100");
//console.log(numUser);

let intentos = 1;
const numUser = prompt("Introduce un número del 0 al 100");

let numIntroducido = +numUser;

while (intentos<5 && pass!==numIntroducido){
    numIntroducido = +prompt("Intentalo de nuevo, introduce un número del 0 al 100");
    intentos++;
    
}
console.log("Has sobrepasado el limite de intentos permitido");
console.log("Has adivinado el número");
