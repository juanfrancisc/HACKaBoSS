"use strict";


//Declaro las variables de inicio de tiempo, para este ejercicio comienza en 0 dias 00 horas, 00 minutos y 00 segundos
//Se inicia los segundos a -5 para que la primera marca de tiempo que refleje por consola sea 0
let segundos = -5
let minutos = 0
let horas = 0
let dias = 0


function stopReloj(num, char){
  switch (char){
    case "s":
    case "S":
      segundos = num
      setTimeout(moverReloj,(num*1000))
      console.log(`Tiempo parado ${num} segundos`)
      break;

    case "m":
    case "M":
      minutos = num
      setTimeout(moverReloj,(num*60)*1000)
      console.log(`Tiempo parado ${num} minutos`)
      break;

    case "h":
    case "H": 
      horas = num
      setTimeout(moverReloj,((num*60)*60)*1000)
      console.log(`Tiempo parado ${num} horas`)
      break;  

    case "d":
    case "D":  
      dias = num
      setTimeout(moverReloj,((((num*24))*60)*60)*1000)
      console.log(`Tiempo parado ${num} dias`)
      break;

    default:
      setTimeout(moverReloj,1000)
      break;
  }

}

function moverReloj() {

    //LLamamos a la funcion para el tiempo, que por defecto lo inicia y lo repite cada 5 segundos
    stopReloj()
  
     //Por cada intervalo que pase ajustamos el temporizador
    if (segundos === 60) {
      minutos++
      segundos = 0
    }
    if (minutos === 60){
      horas++
      minutos=0
    }
    if (horas === 24){
      dias++
      horas = 0
    }

    segundos+=5

    //Mostrar => "Han pasado 0 días, 0 horas, 1 minuto y 20 segundos desde la ejecución"
    console.log(`Han pasado ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos desde la ejecución`)

  }

  //console.log(moverReloj())

  stopReloj(1,"m")