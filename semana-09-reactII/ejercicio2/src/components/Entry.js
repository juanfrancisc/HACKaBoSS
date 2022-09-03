const Entry = (props) => {
    const { body, title, userId } = props;
  
    return (
      <>
        <h3>{title}</h3>
        <p>{body}. Write for:{userId}</p>
      </>
    );
  };
  
  export default Entry;