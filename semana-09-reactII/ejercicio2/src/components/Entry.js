const Entry = (props) => {
    const { body: content, title, userId } = props;
  
    return (
      <>
        <h3>{title}</h3>
        <p>{content}.</p><span>Write for:{userId}</span>
      </>
    );
  };
  
  export default Entry;