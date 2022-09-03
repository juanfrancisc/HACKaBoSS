
import useHook from "../hooks/useHook";
import Message from "./Message";

const Contador = () => {

    const { increase,  addIncrease, errorMessage } = useHook();
    console.log(increase)

    //console.log(num)

    if ( increase < 0 ){
        throw new Error("El numero introducido no puede ser negativo")
    }
    
    return (
        <>
            <h1>El contador inicial empieza desde el: {increase}</h1>

            <button key={1} onClick={(event) => {
                event.preventDefault();
                addIncrease(increase);              
            }}>Incrementar</button>

            <button key={2} >Decrecer</button>
            {/*<Message msg={successMessage} type="success" />*/}
            <Message msg={errorMessage} type="error" />
        </>
        
    )
}

export default Contador;