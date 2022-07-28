"use strict";

//Promesa de la edad. Devuelve un número del 0 al 100, tardando entre 0 y 1 segundos
const agePromise = new Promise((resolve, reject) => setTimeout(() => resolve(Math.round(Math.random() * 100)), Math.random() * 1000)) 

//Variable creada a mano para hacer pruebas
//const agePromise = 17

console.log(agePromise)

/*
const comprobarAge = new Promise((resolve, reject) => {
    if (agePromise >= 18){
        resolve (
            if (agePromise%2 === 0){
                console.log("HOla")
            }
        )
    }
    else if (agePromise < 18) {
        reject("Menor de edad");
        }
});

console.log(comprobarAge)

comprobarAge(agePromise).then(result) => { }
*/

function comprobarAge(num){
    return new Promise ((resolve, reject) =>{
        if(num<18){
            reject ("Menor de edad")
        } else{
            if (num % 2 === 0){
                resolve ("Es par")
            }else{
                resolve ("Es impar")
            }
        }
    })
}

console.log(comprobarAge(agePromise))
