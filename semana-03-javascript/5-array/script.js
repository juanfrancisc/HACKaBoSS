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


function erase(array){
  for (let i=0; i<array.length; i++){
    console.log(array[i]);
    let firts=array[i];
    for (let j=i+1; j<array.length; j++){
      if (firts=== array[j]){
        array.splice(j,1);
      }   
    }
  }
  console.log(array);
}



erase(names);