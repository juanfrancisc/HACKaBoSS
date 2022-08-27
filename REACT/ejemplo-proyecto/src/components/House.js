const House = (props) => {
    //Usando el destructuring
    const { title, img, price, bathrooms } = props;

    return (
      <article>
        <h2>{title}</h2>
        <img alt={title} src={img} />
        <ul>
          <li>
            {price}€
          </li>
          <li>
            Numero de baños: {bathrooms}
          </li>
        </ul>
      </article>
    );
  };
  


  export default House;