import { useState } from 'react';
import './App.css';
import Contador from './components/Contador';
import useHook from './hooks/useHook';

function App() {

  const [increase, setIncrease] = useState(6)

  console.log(increase)

  const { addIncrease, errorMessage } = useHook();


  return (
    <div className="App">
      <Contador 
        increase={increase} 
        setIncrease={setIncrease} 
        addIncrease={addIncrease} 
        errorMessage={errorMessage}/>    
    </div>
  );
}

export default App;
