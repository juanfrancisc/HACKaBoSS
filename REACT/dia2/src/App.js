//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Coche from "./components/Coche";
import List from "./components/List";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  /*const [valor, funcion] = useState(0);
  funcion(valor + 1);*/

  //Añadir un parrafo que tenga un backgoundColor aleatorio.
  //Cada vez que haga click en el parrafo se tiene que cambiar a otro color aleatorio

  const generateRamdonBgColor = () => {
    let color = "";
    const string = "ABCDEF0123456789";
    for (let i = 0; i < 6; i++) {
      let aleatorio = Math.floor(Math.random() * (string.length + 1));
      color = color + string.charAt(aleatorio);
    }
    return `#` + color;
  };
  //establecemos un bgColor que es un valor y la funcion y lo igualamos a un estado
  const [bgColor, SetBgColor] = useState(generateRamdonBgColor());

  /** Pruebas de array */
  const frutas = ["naranja", "pera", "sandia", "plantano"]; //Array
  //Creamos un nuevo array con el valor que nosotros queremos y modificados como queremos
  frutas.map((fruta) => {
    return fruta + "aa";
  });

  /*console.log(
    frutas.map((fruta) => {
      return fruta + "aa";
    })
  );*/
  //Por lo tanto podemos crear una ul
  const frutasLi = frutas.map((frutas, index) => {
    return <li key={index}>{frutas}</li>;
  });

  //Podemos hacer lo mismo con un array de objetos
  const coches = [
    { id: 1, modelo: "r8", marca: "audi", cv: "600" },
    { id: 2, modelo: "leon", marca: "seat", cv: "150" },
    { id: 3, modelo: "focus", marca: "ford", cv: "130" },
  ];

  //Creamos un map con los valores
  const listCoches = coches.map((coche, index) => {
    return (
      <li key={index}>
        <article>
          <h2>
            {coche.marca} {coche.modelo}
          </h2>
          <p>CV: {coche.cv}</p>
        </article>
      </li>
    );
  });

  //Para rizar podemos crear un array de objetos, array de articulos
  //con la funcion Coche, importada
  const conchesArticles = coches.map((coche) => {
    return (
      <Coche
        key={coche.id}
        marca={coche.marca}
        modelo={coche.modelo}
        cv={coche.cv}
      />
    );
  });

  const pisos = [
    { id: 1, tittle: "piso en la playa", m2: "150" },
    { id: 2, tittle: "piso en la playa salobreña", m2: "150" },
    { id: 3, tittle: "piso en centro de madrid", m2: "90" },
    { id: 4, tittle: "piso en la coruña", m2: "250" },
  ];

  const experiencias = [
    { id: 1, title: "Surf en La Coruña", precio: 40, rating: 5 },
    { id: 2, title: "Montar a caballo", precio: 20, rating: 3 },
    { id: 3, title: "Clase de Pádel", precio: 25, rating: 5 },
    { id: 4, title: "Relax en Spa", precio: 60, rating: 5 },
  ];

  return (
    <div className="App">
      <p style={{ fontWeight: "bold", fontSize: "40px" }}>{counter}</p>
      <button
        onClick={() => {
          //counter += 1;
          setCounter(counter + 1);
          console.log(setCounter);
          console.log(counter + 1);
        }}
      >
        Incrementar contador
      </button>
      {/*
        <button onMouseOver={ () => {
          //counter += 1;
          setCounter(counter + 1);
          console.log(setCounter)
          console.log((counter + 1))
          }}>
          Incrementar contador
        </button>
        */}
      <p
        style={{ color: "blue", backgroundColor: bgColor, fontSize: "40px" }}
        onClick={() => {
          SetBgColor(generateRamdonBgColor());
          setCounter2(counter2 + 1);
        }}
      >
        {counter2}
      </p>
      {/*No es logico hacer asi */}
      {/*<ul>
        <li>{frutas[0]}</li>
        <li>{frutas[1]}</li>
        <li>{frutas[2]}</li>
        <li>{frutas[3]}</li>
      </ul>*/}
      {/*No es logico hacer asi */}
      {/*<ul>
        {[
          <li>{frutas[0]}</li>,
          <li>{frutas[1]}</li>,
          <li>{frutas[2]}</li>,
          <li>{frutas[3]}</li>,
        ]}
      </ul>*/}
      <ul>
        {/*Mostramos la lista de frutas creada antes con map*/}
        {frutasLi}
      </ul>
      <ul>
        {/*Mostramos el array de objetos coches*/}
        {listCoches}
      </ul>
      <ul>
        {coches.map((coche, index) => {
          return (
            <li key={index}>
              <Coche marca={coche.marca} modelo={coche.modelo} cv={coche.cv} />
            </li>
          );
        })}
      </ul>
      <p>Utilizando const conchesArticles y Coche.js</p>
      <ul>
        {/*Aqui solo tenemos que pintar el array de articulos creado*/}
        {conchesArticles}
      </ul>
      <p>Lista de pisos utilizando List.js</p>
      <List
        data={pisos}
        render={(piso) => {
          return (
            <li key={piso.id}>
              <article>
                <h2>{piso.tittle}</h2>
                <p>m2: {piso.m2}</p>
              </article>
            </li>
          );
        }}
      />
      <p>Lista de experiencias utilizando List.js</p>
      <List
        data={experiencias}
        render={(experiencia) => {
          return (
            <li key={experiencia.id}>
              <article>
                <h2>{experiencia.title}</h2>
                <p>Precio: {experiencia.precio}€</p>
                <p>Rating: {experiencia.rating}</p>
              </article>
            </li>
          );
        }}
      />
    </div>
  );
}
export default App;
