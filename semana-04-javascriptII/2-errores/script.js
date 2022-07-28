"use strict";

  const letras = 
[ "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",   "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]

//Creo variable miDNI a mano para pruebas
//let miDni = "23807482-S"

let miDni = prompt("Por favor introduce un numero de DNI")
function comprobarDNI(dni){
  
  try{
    // Comprobar que el tamaño de la cadena es de 10
    if (dni.length !== 10){
      throw new Error ("Se ha producido un error. El tamaño del DNI no es correcto")
    }
    //Comprobamos que son 8 numeros seguidos, un - y una letra
    let regex = /^[0-9]{8,8}-[A-Za-z]$/;
    if (regex.test(dni) !== true){
      throw new Error ("Se ha producido un error. El formato del DNI no es correcto")
    }
    //Substraer el numero del cadena
    let soloNumero = dni.substr(0,8)
    //console.log(soloNumero)

    //Obtenermos el resto del numero, se diveide entre 23 para el DNI
    let resto = soloNumero % 23
    //console.log(resto)

    //Con el resto obtenemos la posicion del array letra para la letra del DNI
    let letra = letras[resto]
    //console.log(letra)

    //Unimos los datos desglasados antes para la comprobacion
    let posibleDNI=soloNumero+"-"+letra
    //console.log(posibleDNI)

    if (posibleDNI !== dni){
      throw new Error ("El DNI introducido NO es correcto")
    }

    console.log("El DNI es CORRECTO")

  } catch (e){
    alert(e.message)
    //console.error(e.message)
  }

}

comprobarDNI(miDni)

