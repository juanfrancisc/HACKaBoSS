"use strict";

//Escribir una función que reciba un número
// Obtener la información de la casa que se corresponda con el número y a partir de ahí, sacar el NOMBRE de su lord.

//Puede haber errores:
///// Que lo introducido no sea un número
//// Que el número no se corresponda con ninguna casa
//// Que la casa no tenga lord actualmente


// Si ocurre un error, tenemos que gestionarlo



// Si el numero es 2 -> https://anapioficeandfire.com/api/houses/2

//Si el número es 233 -> https://anapioficeandfire.com/api/houses/233


let APIurl = "https://anapioficeandfire.com/api/houses/"

//Obetner los datos de una URL y pasar a JSON
async function getData(url){
    //Hacemos un try por si la url de ataque no funciona o no existe
    try{

    // Obtenemos la repuesta con un fetch a la URL
    let res = await fetch(url)

    //Obtenemos los datos de la respuesta y los pasamos con JSON, 
    //para que sean legibles
    let data = await res.json()

    return data

    }catch (e){
        throw new Error ("El servidor no responde o página no encontrada")
        //console.error(e.message)
    }
}


async function getDataHouse(num){
    
    try {
        //A partir de un numero correcto introducido sacar url => unionURL
        if(isNaN(num)){
            throw new Error ("No has introducido un numero")
        }
        let unionURL = APIurl+num
        console.log("Url de union")
        console.log(unionURL)

        console.log("")
        
        let houseData = await getData(unionURL)
        console.log("Obtener casa y comprobar que existe")
        console.log(houseData.name)

        if (houseData.error){
            throw new Error ("Personaje sin casa asociada")
        }

        console.log("")
        //let lordData = await houseData.currentLord
        let lordData = houseData.currentLord
        console.log("Obtener Lord y comprobar que existe")
        console.log(lordData)
        
        if (!lordData){
            throw new Error ("No tiene lord asociado")
        }

        console.log("")
        let urlLord = await getData(lordData)
        console.log("Obtener nombre del Lord")
        console.log (urlLord.name)

    } catch (e) {
        console.error(e.message)
    }
    return num;
}

//Petición de datos al usuario
let num=+prompt("Introducir un numero: ")

//Pasamos la función con el número introducido
getDataHouse(num);
