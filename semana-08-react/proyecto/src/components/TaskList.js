import Task from "./Task";

const TaskList = (props) => {

    const {tasks, setTasks} = props;
    console.log(tasks)
    return (
        <ul>
            {
                tasks.map((objTask) => {
                    //console.log(objTask)
                    return (
                        <li key={objTask.id}>
                            <Task tasks={tasks} setTasks={setTasks} id={objTask.id} task={objTask.task} done={objTask.done} />
                        </li>
                        
                        
                    )
                })
            }
        </ul>
            

    )
}
export default TaskList;