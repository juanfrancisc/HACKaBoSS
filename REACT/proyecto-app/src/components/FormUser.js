import { useState  } from "react";

const Form = (props) => {

    //Hacemos destructuring por que  se le ha pasado por props desde APP.js en el 
    //con el componente FORM
    const { usuario, setUsuario } = props;

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")

    //Este estado esta en un hijo hay que llevar se lo al padre
    //const [usuario, setUsuario] = useState([])

    return (

        <form onSubmit={(event) => {
            event.preventDefault();

            const newUser = { name: name, lastName : lastName}
            //console.log(newUser);

            setUsuario([...usuario, newUser])

        }}>
            <label htmlFor="name">Nombre: </label>            
            <input 
                id="name" 
                value={name} 
                onChange={(event) => {
                    console.log(event.target.value)
                    setName(event.target.value)
            }}/>

            <label htmlFor="lastName"> Apellido:</label>
            <input 
                id="lastName" 
                value={lastName}
                onChange={(event) => {
                    console.log(event.target.value)
                    setLastName(event.target.value)
                }}/>
            <button type="submit">Añadir usuario! </button>
        </form>
    )

}

export default Form;