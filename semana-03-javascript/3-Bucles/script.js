"use strict";

// Desde 0 a 24, siendo 24=0
console.log("De 0 a 24 horas");
let cucu="";
for (let i=0; i<=23; i++){
    if (i > 0){
        cucu=cucu+" cucú";
    } else {
        cucu="";
    }
    console.log(i + cucu);
}
    

// De 8 a 22 horas
console.log("");
console.log("De 8 a 22 horas");
// El sigueinte for es como crear un string variable que contenga la palabra cucus 7 veces
let cucus="";
for (let j=0; j<7 ; j++){
    cucus=cucus+" cucús";
}

for (let i=8; i<=22; i++){
    if (i > 0){
        cucus=cucus+" cucús";
    } else {
        cucu="";
    }
    console.log(i + cucus);
}


// Cogiendo la hora actual
console.log("");
console.log("Hora Actual");

//Obtenemos las hora actual, para despues con .getHours() recuperar sola la hora 
const hora= new Date();
let otroCucu="";
for (let i=0; i<hora.getHours(); i++) {
    otroCucu=otroCucu+" cucú";
}

console.log("Son las "+hora.getHours()+otroCucu);