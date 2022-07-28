"use strict";

/*

function mueveReloj(){ 
    
    let momentoActual = new Date()
    let dia = momentoActual.getDay()
    let hora = momentoActual.getHours() 
    let minuto = momentoActual.getMinutes() 
    let segundo = momentoActual+momentoActual.getSeconds()+5 

    let horaImprimible ="Han pasado "+ dia + " dias, " + hora + " horas, " + minuto + " minutos " + segundo + " segundos"

    console.log(horaImprimible)


    //La función se tendrá que llamar así misma para que sea dinámica, 
    //de esta forma:

    //setTimeout(mueveReloj,1000)


    let horaActual2= new Date().setDate(0)

    //horaActual2.setDate()
    console.log(horaActual2)
    horaActual2=horaActual2+5
    console.log(horaActual2)
}

console.log(mueveReloj())*/

let segundos = 0
let minutos = 0
function moverReloj2() {

    segundos += 5;
  
    if (segundos == 60) {
  
      segundos = 0;
      minutos += 1;
    }
  
    if (segundos < 10 && minutos < 10) {
      console.log("0" + minutos + ":" + "0" + segundos);
    } else if (segundos >= 10 && minutos < 10) {
        console.log("0" + minutos + ":" + segundos);
    } else if (segundos < 10 && minutos > 10) {
        console.log(+minutos + ":" + "0" + segundos);
    } else {
        console.log(minutos + ":" + segundos);
    }
    setTimeout(moverReloj2,5000)
  }

  console.log(moverReloj2())