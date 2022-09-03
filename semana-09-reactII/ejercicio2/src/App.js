
import './App.css';
import useEntries from "./hooks/useEntries";
import EntryList from "./components/EntryList";
import NewEntryForm from "./components/NewEntryForm";

function App() {

  const { entries, addNewEntry, loading, errorMessage } = useEntries();


  return (
    <div className="App">

    <NewEntryForm addNewEntry={addNewEntry} /> 

    <EntryList
        entries={entries}
        loading={loading}
        errorMessage={errorMessage}
      />
      
    </div>
  );
}

export default App;
