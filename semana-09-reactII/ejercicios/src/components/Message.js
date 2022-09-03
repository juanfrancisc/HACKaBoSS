const Message = (props) => {
    const { msg, type } = props;
    //console.log (msg)
    return <>{msg && <p className={type}>{msg}</p>}</>;
  };
  
  export default Message;