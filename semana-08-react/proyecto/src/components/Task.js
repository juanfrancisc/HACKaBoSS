import { useState } from "react";

const Task = (props) => {
    const {id, task, done : initDone, tasks} = props;

    const [done, setDone] = useState (initDone)

    return (
        <>
            <p style={{ textDecoration: done ? 'line-through' : 'none' }}>
                {id}{task}{done}
            </p>
            <input 
                id={id} 
                type="checkbox" 
                checked={done} 
                onChange={(event) => {
                    setDone(event.target.checked)
                    console.log("TASKS: "+tasks)
                    console.log("TASK: "+task)
                    tasks.map((task) => {
                        if (task.id === id){
                            return {...task, done}
                        }
                        return task
                    })
                    
                }}
                />
            

        </>
    )
}
export default Task;