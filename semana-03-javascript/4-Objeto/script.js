"use strict";

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};

function esMayor(objeto){
  for (let key in objeto) {
    //console.log(key, objeto[key]);
    objeto[key] >= 18 ? console.log(key + " es mayor de edad") : console.log(key + " es menor de edad");
  }
}

esMayor(people);