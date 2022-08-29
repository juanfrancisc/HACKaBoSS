 //import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import initTasks from './datos/datos';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {

  const [tasks, setTasks] = useState (initTasks)
  
  /*Para mostar el valor de la varible definida en .env, es necesario ejecutar el servidor con ".env.local"*/
  return (
    <div className="App">  
      <h1>{process.env.REACT_APP_VARIABLE_EJEMPLO} </h1>
      
      <h1>Tareas:</h1>
      <TaskForm tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>

    </div>
  );
}

export default App;
