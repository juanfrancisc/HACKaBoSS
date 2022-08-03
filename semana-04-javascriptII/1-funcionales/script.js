"use strict";

// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];



function sumarAOtroArray(array){
  //Creo un array nuevo para añadir las puntuaciones totales de cada equipo
  let arrayPuntos= []
  let mayor, menor
  let posicionMax, posicionMin
  for (let i = 0 ; i<array.length; i++){
    //console.log (i);
    //Obtengo el array de puntos de cada equipo
    let arrayObj= Object.values(array[i].puntos)
    //console.log(arrayObj)

    //Hago la suma de los puntos de cada unos de los array utilizando la funcion reduceCB
    let totalPuntos = arrayObj.reduce(reduceCB)
    //console.log(totalPuntos)
    
    //Añado la suma de los puntos al nuevo array
    arrayPuntos[i]=totalPuntos
    //console.log(arrayPuntos)

    //Obtengo el numero mayor del arrayPuntos
    mayor = Math.max(...arrayPuntos)
    //console.log("El mayor es: "+mayor)

    // Y la posicion de dicho valor que coinciden con la posicion de su equipo en el array original
    posicionMax = arrayPuntos.indexOf(mayor)
    //console.log(posicionMax)


    menor = Math.min(...arrayPuntos)
    //console.log("El menor es: "+menor)

    posicionMin = arrayPuntos.indexOf(menor)
    //console.log(posicionMin)
  }
  console.log(`La mayor puntuacion es de ${mayor} y corresponde al equipo ${array[posicionMax].equipo}`)
  console.log(`La mayor puntuacion es de ${menor} y corresponde al equipo ${array[posicionMin].equipo}`)
}

//console.log (sumarAOtroArray(puntuaciones))
sumarAOtroArray(puntuaciones)

//Funcion para sumar los puntos
function reduceCB(acc, current){
  return acc+current
}



//Relizado por ZOE
console.log("")

//Creamos un nuevo array con map con la mismo tamaño que el original
function mapper(obj){
  let {equipo, puntos} = equipo, puntos

  return {}
}

function getGanadorPerdedor (array){
  console.log(array)  

}


getGanadorPerdedor(puntuaciones)
