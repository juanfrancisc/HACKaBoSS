import { useState } from 'react';
import './App.css';
import Contador from './components/Contador';
import useHook from './hooks/useHook';

function App() {

  const { sumar, restar, contador } = useHook();


  return (
    <div className="App">
      <Contador 
        sumar={sumar}
        restar={restar} 
        contador={contador} 
       />    
    </div>
  );
}

export default App;
