import { useState } from "react";
import FormTwits from "./components/FormTwit";
import TwitList from "./components/TwitList";
import twitsDB from "./db/twits";

const App = () => {
  const [twits, setTwits] = useState(twitsDB);

  return (
    <div className="App">
      <h1>Twits</h1>

      <FormTwits twits={twits} setTwits={setTwits} />

      <TwitList twits={twits} />
    </div>
  );
};

export default App;
