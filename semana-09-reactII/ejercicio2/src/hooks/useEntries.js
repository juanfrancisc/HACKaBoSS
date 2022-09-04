
import { useState, useEffect } from "react";

const useEntries = () => {
 
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

 
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        const body = await res.json();
        //console.log(body)

        if (!res.ok) {
          throw new Error("Unexpected error fetching API. Please try again");
        }
        setEntries(body);

      } catch (error) {
        console.error(error.message);
        setErrorMessage(error.message);

      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  
  const addNewEntry = (newEntry) => {
    setEntries([newEntry, ...entries]);
  };

  
  return { entries, addNewEntry, loading, errorMessage };
};

export default useEntries;