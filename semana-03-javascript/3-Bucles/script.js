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

