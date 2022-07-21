"use strict";

function adivinar(){
let pass = Math.floor(Math.random() * 100+1);
//console.log(pass);

//let numUser=15
const numUser = +prompt("Introduce un número del 0 al 100");
console.log(numUser);

let comprobar = numUser;
let resultado;

let intentos =  1;
console.log(intentos);

while (intentos<5){
    if (pass < comprobar){
        comprobar = +prompt("El número instroducido es MAYOR, introduce uno nuevo");
        intentos ++;
        console.log(intentos);
    }    else if (pass > comprobar){
        comprobar = +prompt("El número instroducido es MENOR, introduce uno nuevo");
        intentos++;
        console.log(intentos);
    }else {
        resultado = alert("Has acertado!");
        intentos=6;
        console.log(intentos);
    }
    
}
if (intentos < 6){
    resultado = alert("Has perdido!");
}

console.log(resultado);
}

adivinar();