const User = (props) => {

    const { name, lastName } = props;

    return (
        <article>
            {name} {lastName}
        </article>
    )
}

export default User;