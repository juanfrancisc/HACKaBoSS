"use strict";

//console.log(React);

//Seleccionamos
//const root= document.querySelector("#root")

//Creamos un objeto con React, en este caso un <p> (parrafo), 
//const p = React.createElement("p", {className: "bold"}, "Hello world!");

//Indicamos que queremos pintar y donde lo queremos mostrar
//ReactDOM.render(p, root)


//Pruebas mias
/*
const a = React.createElement("a", {className: "referencia"}, "http://google.es")
const app = React.createElement("div", {className: "app"}, [p, a])
ReactDOM.render(app, root);*/


/*
const span = React.createElement("span",{}, "Hello")
const span2 = React.createElement("span",{style: {color: "#FF1010"}}, " World")

const container = React.createElement("div", {className: "container"}, [span, span2]);

ReactDOM.render(container, root);



*/
//Codigo JSX que sera lo que haremos con react
/*const nombre = "Pepe"
const container = ( 
    <div className = "container">
        <span>Hello</span> <span>{nombre}</span>
    </div>
);

ReactDOM.render(container, root);*/



const className = "container";
const children = "Hello World";

const container = (
  <div className={className}>
    <span>{children}</span>
  </div>
);

ReactDOM.render(container, document.querySelector("#root"));

