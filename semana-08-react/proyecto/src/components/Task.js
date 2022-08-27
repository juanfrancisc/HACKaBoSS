const Task = (props) => {
    const {id, task, done} = props;

    return (
        <>
            <p style={{ textDecoration: done ? 'line-through' : 'none' }}>
                {id}{task}{done}
            </p>
            <input type="checkbox"></input>
            

        </>
    )
}
export default Task;