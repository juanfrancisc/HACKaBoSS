import "./App.css";
import House from "./components/House";


//funcion basica de creacion por defecto
/*function App() {
  return (
    <div className="App">
        <p>
          Hello World!
        </p>
    </div>
  );
}

export default App;
*/

//const container = <div className='container'>Que pasa!</div>;
//export default container;

//Funcion que recibe por parametro un mensaje (texto) y retorne un parafo con dicho texto
//El parafo tiene que tener la clase message
const createMessage = (text) => {
  return <p className="message">{text}</p>;
};

const message = createMessage("Hola que pasa!");

//export default message;

// 1. Quiero que hagáis un componente Comentario, que reciba por propiedades un contenido y un autor.
//Dicho compontente deberá retornar un párrafo que pinte el contenido recibido por propiedades y un span (dentro del párrafo) que pinte el autor

const Comentario = (props) => {
  return (
    <p>
      {props.contenido}
      <span> Por {props.autor}</span>
    </p>
  );
};



// 2. Quiero que hagáis un componente House, que recibe por propiedades un title, una img, un price y bathrooms.
//Dicho componente deberá retornar un article que tenga todos los datos recibidos. La estructura dentro del article hacedla como queráis vosotros.
//Podéis usar los siguientes datos:

const data = {
  title: "Entire villa hosted by Bookiply",
  img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=960",
  price: 395,
  bathrooms: 3,
};


const Componente = (props) => {
  return (
    <article>
      <h2>{props.title}</h2>
      <img alt={props.title} src={props.img} />
      <ul>
        <li>
          {props.price}€
        </li>
        <li>
          Numero de baños: {props.bathrooms}
        </li>
      </ul>
    </article>
  );
};


const Containers = (
  <div>
    <Comentario
      contenido="Este seria el contenido del parrafo"
      autor="Yo mismo"
    />
    <Componente
      title={data.title}
      img={data.img}
      price={data.price}
      bathrooms={data.bathrooms}
    />
    <House
      title={data.title}
      img={data.img}
      price={data.price}
      bathrooms={data.bathrooms}
    />
  </div>

);

export default Containers;
