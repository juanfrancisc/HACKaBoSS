//import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  //Creamos el estado incicial con useState, estableciondo su valor inicial,
  //que sera igual al inputValue, y la funcion que le corresponde
  //ejemplo
  //const [inputValue, setInputValue] = useState("Hacer la cama")

  const [inputValue, setInputValue] = useState("")

  //De primeras hemos creado un array de tareas pero la actualizacion no es cuando
  //se inserta una nueva tarea, sino que cuando actualiza react
  //const tareas = [];
  const [tareas, setTareas] = useState([])
  return (
    <div className="App">
      <h1>Día 3!!</h1>
      <h2>Formularios</h2>

      {/*<form>
        <label htmlFor="task"> Tarea:</label>
        <input id="task" value={inputValue} 
          //event es un evento que se produce al realizar un onchange, en este caso
          onChange={(event) => {
            //event.targete.value es donde se obtine el valor del cambio
            //target indica donde, en este caso seria input
            console.dir(event.target.value)
            //pasamos de un evento estatico como es que esta comentado por el que 
            //se genera en el evento
            //setInputValue("Hacer los deberes")
            setInputValue(event.target.value)
        }}
        />

        <button type="submit">Añadir</button>
      </form>*/}


      <p>Formulario de pruebas de envio</p>
      <form onSubmit = {(event) => {
        //console.log(event)//es tan rapido que no se llega a ver por consola
        //Cancelamos la accion por defecto cuando se utiliza preventDefault()
        //al hacer el submit
        event.preventDefault();//Solo se utiliza para formularios
        //console.log(event)//Ahora si se muestra por consola

        //Añadimos el valor que se escriba en input en el array tareas
        //tareas.push(inputValue); //esto funciona pero no es automatico

        //cada vez que queremos añadir un estado nuevo (tarea) creamos un array nuevo
        //con los valares que tenemos mas el ultimo valor añadido
        setTareas([...tareas, inputValue]);
        //Tras insertar un valor nuevo, dejamos el input vacio
        setInputValue("");

        //console.log(tareas)
      }}>
        <label htmlFor="task2"> Tarea:</label>
        <input id="task2" value={inputValue} 
          onChange={(event) => {
            setInputValue(event.target.value);
            

        }}
        />

        <button type="submit">Añadir</button>
      </form>
      <ul>
        {tareas.map((tarea, index) => {
          return <li key={index}>{tarea}</li>
        })}
      </ul>

    </div>
  );
}

export default App;
