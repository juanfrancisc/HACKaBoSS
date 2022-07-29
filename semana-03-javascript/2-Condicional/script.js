"use strict";

let nombre = "Juanfran";
let edad = 45;

let resultado;

if (edad <= 12){
    resultado = "A "+ nombre + " le corresponde el descuento infantil (menores de 12)";
//Se podria haber utilizado directamente <=30 l haber declarado primero el <=12
} else if (edad >12 && edad <=30){
    resultado = "A "+ nombre + " le corresponde el descuento juvenil (menores de 30)";
} else if (edad>60){
    resultado = "A "+ nombre + " le corresponde el descuento de jubilados (mayores de 60)";
} else {
    resultado = "A "+ nombre + " no le corresponde ningún descuento ";
}


console.log(resultado);


// Con SWITCH
console.log("");
console.log("Utilizando SWITCH");

switch (edad){
    case (edad <= 12):
        resultado = "A "+ nombre + " le corresponde el descuento infantil (menores de 12)";
        break;
    case (edad >12 && edad <=30):
        resultado = "A "+ nombre + " le corresponde el descuento juvenil (menores de 30)";
        break;
    case (edad>60):
        resultado = "A "+ nombre + " le corresponde el descuento de jubilados (mayores de 60)";
        break;
    default:
        resultado = "A "+ nombre + " no le corresponde ningún descuento ";
        break; 
}

console.log(resultado);


//Utilizando una funcion

console.log("");
console.log("Utilizando una Funcion");

function crearFrase(descuento, nombre){
    return `A ${nombre} le corresponde el descuento ${descuento}`
}

if (edad <= 12){
    resultado = crearFrase("infantil", nombre)
//Se podria haber utilizado directamente <=30 l haber declarado primero el <=12
} else if (edad <=30){
    resultado = crearFrase("juvenil", nombre)
} else if (edad>60){
    resultado = crearFrase("jubilados", nombre)
} else {
    resultado = "A "+ nombre + " no le corresponde ningún descuento ";
}

console.log(resultado);