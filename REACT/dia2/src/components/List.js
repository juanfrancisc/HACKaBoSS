const List = (props) => {
    
    const {data, render} = props;
    
    return <ul>{data.map(render)}</ul>
}

export default List;