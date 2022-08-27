import User from "./User"

const UserList = (props) => {

    const { usuario } = props;

    return (
        <ul>
        {usuario.map((objetcUsuario, index) => {
          const { name, lastName } = objetcUsuario;
          return (
            <li key={index}>
              <User 
                name={name}
                lastName={lastName}
              />
            </li>
          )
        })}
      </ul>
    )
}

export default UserList;