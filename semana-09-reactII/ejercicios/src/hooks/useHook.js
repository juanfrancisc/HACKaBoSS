import { useState } from "react";

const useHook = (inicial) => {

    const [errorMessage, setErrorMessage] = useState("");
    const [increase, setIncrease]= useState(inicial);

    /*try {
        if (num < 0){
        throw new Error("El numero introducido no puede ser negativo")
        }
        if (!num && num < 0){
            //Si no existe numero, por defecto es 0
            num = 0;
        }
    
    } catch (error) {
        setErrorMessage(error.message);
    }*/
    
    const addIncrease = () => {
        setIncrease(increase + 1)
    }
    

    return (
        { addIncrease, errorMessage }
    )
}

export default useHook;