"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];


function combinar(array){
  let combinacion=[];
  for (let i = 0 ; i < array.length ; i++){
    //console.log(array[i]);
    for (let j = i+1; j < array.length ; j++){
      combinacion.push(array[i]+ " y "+array[j])
      //console.log(combinacion);
    }
  }
  console.log(combinacion);
}




//LLamamos a la funcion
combinar(catalogo);