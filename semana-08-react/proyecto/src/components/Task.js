import { useState } from "react";

const Task = (props) => {
  const { id, task, done: initDone, tasks, setTasks } = props;
  const [done, setDone] = useState(initDone);

  return (
    <>
      <p style={{ textDecoration: done ? "line-through" : "none" }}>
        {task}
        {done}
      </p>
      <label htmlFor="done">Estado: </label>
      <input
        /*id={id} */
        id="done"
        type="checkbox"
        checked={done}
        onChange={(event) => {
          setDone(event.target.checked);
          tasks.map((objTask) => {
            if (objTask.id === id) {
              return { ...task, done };
            }
            return task;
          })}}
      />
    </>
  );
};
export default Task;
