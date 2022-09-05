const Contador = (props) => {

    const {sumar, restar, contador } = props;
    //console.log(contador)

    return (
        <>
            <h1>El contador es: {contador}</h1>

            <button key={1} onClick={(event) => {
                event.preventDefault();
                sumar();
                
            }}>Incrementar</button>

            <button key={2} onClick={(event) => {
                event.preventDefault();
                if (contador > 0){
                    restar()
                }
                            
            }}>Decrecer</button>

        </>
        
    )
}

export default Contador;