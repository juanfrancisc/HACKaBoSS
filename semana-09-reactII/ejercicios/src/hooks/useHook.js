import { useState } from "react";

const useHook = () => {
    
    const [contador, setContador]= useState(10);

        
    const sumar = () => {
        setContador(contador + 1);
        document.title = `${contador}`
    }

    const restar = () => {
        setContador(contador - 1);
        document.title = `${contador}`
    }
    
    return (
        { sumar, restar, contador }
    )
}

export default useHook;