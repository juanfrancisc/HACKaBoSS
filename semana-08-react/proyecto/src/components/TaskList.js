import Task from "./Task";

const TaskList = (props) => {

    const {tasks} = props;
    console.log(tasks)
    return (
        <ul>
            {
                tasks.map((objTask) => {
                    //console.log(objTask)
                    return (
                        <li key={objTask.id}>
                            <Task task={objTask.task} done={objTask.done} />
                        </li>
                        
                        
                    )
                })
            }
        </ul>
            

    )
}
export default TaskList;