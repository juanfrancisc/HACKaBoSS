import { useState } from "react";
import Message from "./Message";

const NewEntryForm = (props) => {
  const { addNewEntry } = props;

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("")
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <>
      <form
        onSubmit={async (event) => {
          try {
            event.preventDefault();

            const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify({title, body, userId }),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            });

            const content = await res.json();
            //console.log(body)

            if (!res.ok) {
              throw new Error(body.message);
            }

            addNewEntry(content);
            setSuccessMessage(body.message);
            setErrorMessage("");
            setTitle("");
            setBody("");
            setUserId("")

          } catch (error) {
            console.error(error.message);
            setErrorMessage(error.message);
            setSuccessMessage("");

          }
        }}
      >
        <label htmlFor="title">Titulo:</label>
        <input
          id="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          required
        />

        <label htmlFor="body">Contenido:</label>
        <input
          id="body"
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
          required
        />
        <label htmlFor="userId">Identificador de usuario:</label>
        <input
          id="userId"
          value={userId}
          onChange={(event) => {
            setUserId(event.target.value);
          }}
          required
        />

        <button>Create new entry</button>
      </form>

      <Message msg={successMessage} type="success" />
      <Message msg={errorMessage} type="error" />
    </>
  );
};

export default NewEntryForm;