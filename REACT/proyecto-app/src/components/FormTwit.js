import { useState  } from "react";

const FormTwits = (props) => {

    //Recibimos por propos los valores y hacemos destructurin para quedarnos con lo que queremos
    const { twits, setTwits } = (props);

    //Para cada variable establecemos un estado inicial
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [img, setImg] = useState("")
    const [autor, setAutor] = useState("")

    
    return (

        <form onSubmit={(event) => {
            event.preventDefault();

            const newTwits = { title, content, img, autor }
            //console.log(newTwits);

            //Cremos el nuevo twit y lo añadimos al anterior array
            setTwits([...twits, newTwits])

            //Si queremos presentar primero los ultimos twits añadidos
            //setTwits([newTwits, ...twits])

            //Eliminados de los inputs lo que hemos escrito
            setTitle("");
            setContent("");
            setImg("");
            setAutor("");


        }}>
            <label htmlFor="title">Titulo: </label>            
            <input 
                id="title" 
                value={title} 
                onChange={(event) => {
                    setTitle(event.target.value)
            }}/>

            <label htmlFor="content"> Contenido:</label>
            <textarea 
                id="content" 
                value={content}
                onChange={(event) => {
                    setContent(event.target.value)
                }}/>

            <label htmlFor="img"> Imagen:</label>
            <input 
                type="url"
                id="img" 
                value={img}
                onChange={(event) => {
                    setImg(event.target.value)
                }}/>

            <label htmlFor="autor"> Autor:</label>
            <input 
                id="autor" 
                value={autor}
                onChange={(event) => {
                    setAutor(event.target.value)
                }}/>    

            <button type="submit">Añadir twits! </button>
        </form>
    )

}

export default FormTwits;