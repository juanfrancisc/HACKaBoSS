import { useState } from "react";
import Message from "./Message";

const NewEntryForm = (props) => {
  const { addNewEntry } = props;

  // Creamos los estados para los inputs y los mensajes de error y success
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


            const formData = new FormData();

            formData.append("title", title);
            formData.append("content", body);

            const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
              }),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            });

            const body = await res.json();

            if (!res.ok) {
              throw new Error(body.message);
            }

            addNewEntry(body);
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
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          required
        />

        <label htmlFor="body">Content:</label>
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