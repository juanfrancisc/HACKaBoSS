//import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import User from "./components/User";
import UserList from "./components/UserList";

function App() {
  const [usuario, setUsuario] = useState([]);

  return (
    <div className="App">
      <h1>Ejercicio de Formularios</h1>
      <h2>Datos de usuarios</h2>

      {/**Utilizamos el componente para enviar los estados pasados por props */}
      <Form usuario={usuario} setUsuario={setUsuario} />

      {/*<ul>
        {usuario.map((objetcUsuario, index) => {
          return (
            <li key={index}>
              <article>
                {objetcUsuario.name} {objetcUsuario.lastName}
              </article>
            </li>
          );
        })}
      </ul>*/}

      <p>Utilizando destructuring y fichero UserList</p>
      <UserList usuario={usuario} />
      {/*<ul>
        {usuario.map((objetcUsuario, index) => {
          const { name, lastName } = objetcUsuario;
          return (
            <li key={index}>
              <User 
                name={name}
                lastName={lastName}
              />
            </li>
          )
        })}
      </ul>*/}
    </div>
  );
}

export default App;
