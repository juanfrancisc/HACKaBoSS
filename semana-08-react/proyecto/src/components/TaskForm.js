import { useState } from "react";

const TaskForm = (props) => {
    const {tasks, setTasks} = props;

    const [task, setTask] = useState("")

    return (
        <form onSubmit={(event) =>{
            event.preventDefault();
            const newTask = { id: tasks.length+1, task, done:false }
            setTasks([...tasks, newTask])
            setTask("")
        }}>
            <label htmlFor="task"> Tarea:</label>
            <input id="task" value={task} onChange={(event) => {
                setTask(event.target.value)}}
                type="text"
                size="100"
                />
            <button type="submit">Añadir tarea</button>
        </form>
        

    )
}
export default TaskForm;