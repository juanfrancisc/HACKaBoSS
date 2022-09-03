//import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import initTasks from "./datos/datos";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
//Importar imagen
import imagen from "./arkanoid.png";

function App() {
  const [tasks, setTasks] = useState(initTasks);

  /*Para mostar el valor de la varible definida en .env, y es necesario que empiece por REACT_APP_*/
  return (
    <div className="App">
      <h1>{process.env.REACT_APP_VARIABLE_EJEMPLO} </h1>

      <h1>Tareas:</h1>
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />

      {/* Para llamar a una foto desde la carpeta public */}
      <img src="http://localhost:3000/foto.jpg" alt="Foto Ejercicio 4" />

      {/*Comentario de la correcion de Samuel*/}
      {/* Si lo hacemos desde la carpeta src, primero se importa */}
      <img src={imagen} alt="Foto Ejercicio 4" />
    </div>
  );
}

export default App;
