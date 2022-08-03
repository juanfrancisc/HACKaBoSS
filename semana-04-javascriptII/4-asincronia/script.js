"use strict";

//Promesa de la edad. Devuelve un número del 0 al 100, tardando entre 0 y 1 segundos
const agePromise = new Promise((resolve, reject) => setTimeout(() => resolve(Math.round(Math.random() * 100)), Math.random() * 1000)) 

//Variable creada a mano para hacer pruebas
//const agePromise = 17

console.log(agePromise)

async function comprobarAge(num){
    //console.log(num)
    let age = await num
    return new Promise ((resolve, reject) =>{
        if(age<18){
            reject ("Menor de edad")
        } else{
            if (age % 2 === 0){
                //resolve("Es par")
                setTimeout(()=> resolve("Es par"), 1000)
            }else{
                //resolve ("Es impar")
                setTimeout(()=> resolve("Es impar"), 1000)
            }
        }
    })
    return new Promise
}

console.log(comprobarAge(agePromise))


agePromise.then(edad => comprobarAge(edad))
