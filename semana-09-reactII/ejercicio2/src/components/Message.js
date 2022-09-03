const Message = (props) => {
    const { msg, type } = props;
    return (
        <>
            {msg && <p className={type}>{msg}</p>}
        </>
    )
  };
  
  export default Message;