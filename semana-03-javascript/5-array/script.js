"use strict";

const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

//Realizando dos vueltas en el array y comparando y elimiando sobre el mismo
console.log("")
console.log("Utilizando slice para borrar sobre el mismo array")

function erase(array){
  for (let i=0; i < array.length; i++){
    //console.log(array[i]);
    let name = array[i];
    for (let j = i + 1; j < array.length; j++){
      if (name === array[j]){
        array.splice(j,1);
      }   
    }
  }
  console.log(array);
}

erase(names);


//Utilizando un nuevo array ycomprobando que el nuevo nombre encontrado aun no esta en el nuevo => includes

console.log("")
console.log("Utilizando un nuevo array") 

function clean(array){
  //Creamos un nuevo array
  let newArr = []

  // Por cada nombre del array nombres
  for (let name of names){
    //SI no existe el nombre en el nuevo array
    if (!newArr.includes(name)){
      //Lo insertamos
      newArr.push(name)
    }
  }
  return newArr
}


console.log(clean(names))