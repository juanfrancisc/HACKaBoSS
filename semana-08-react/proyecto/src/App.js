//import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import initTasks from './datos/datos';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {

  const [tasks, setTasks] = useState (initTasks)
  

  return (
    <div className="App">  
      <TaskForm tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks}/>

    </div>
  );
}

export default App;
