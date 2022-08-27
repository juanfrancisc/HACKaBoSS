const Coche = (props) => {
    const { id, marca, modelo, cv } = props;

    return (
      <li key={id}>
        <article>
         <h2>
            {marca} {modelo}
          </h2>
          <p>CV: {cv}</p>
        </article>
      </li>
    )
  };

  export default Coche;