"use strict";

let resultado;
let cucu;
for (let i=0; i<=24; i++){
    if (i <= 12){
        resultado="Son las "+i+" de la mañana";
        for (let j = 0; j < i ;j++){
            console.log(j);
            if (j=0){
                cucu=""
            }else {
                cucu=" cucú ";
            }

        }
        resultado=resultado+cucu;
        console.log(resultado);
    } else {
        console.log("Son las "+i+" de la tarde");
        for (let j = 0; j < i ;j++){
            console.log("cucú");
        }
    }
}

//console.log(resultado);