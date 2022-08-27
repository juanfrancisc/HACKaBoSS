import * as React from "react";
import "./box-styles.css";

// Usa className para el tamaño y style (backgroundColor) para el color
// A cada elemento se le debe aplicar la clase "box" también

// Añade una prop className a cada uno y aplica la clase correcta
// Las clases disponibles son: box, box--large, box--medium, box--small

// Añade también una prop style a cada uno de forma que su background color
// encaje con lo que dice el texto. Añade también `fontStyle: 'italic'`
const smallBox = <div className="box box--small" style={{backgroundColor: "lightblue", fontStyle: "italic"}}>small lightblue box</div>;
const mediumBox = <div className="box box--medium" style={{backgroundColor: "pink", fontStyle: "italic"}}>medium pink box</div>;
const largeBox = <div className="box box--large" style={{backgroundColor: "orange", fontStyle: "italic"}}>large orange box</div>;

//Crear componente Box, que reciba las propiedades className, style y texto. 
//Debe retornar un div con dicha className y dichos style y text.

const Box = (props) => {
  const { className, style, text} = props
  return(
    <div className={className} style={style}>{text}</div>
  );
};

/*function Style() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}*/

function Styles() {
  return (
    <div>
      <Box 
        className="box box--small"
        style={{backgroundColor: "lightblue", fontStyle: "italic"}}
        text="small lightblue box"
      />
      <Box 
        className="box box--medium"
        style={{backgroundColor: "pink", fontStyle: "italic"}}
        text="medium pink box"
      />
      <Box 
        className="box box--large"
        style={{backgroundColor: "orange", fontStyle: "italic"}}
        text="large orange box"
      />
    </div>
    
  );
}



export default Styles;
